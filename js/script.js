'use strict'
var myJournalAPI = myJournalAPI || {};
var token;
var id;

$(document).ready(function() {
  //fade in of forms
  $("#login").show(2000);
  $("#register").show(2000);

  //translate form data to json and back to html
  var form2object = function(form) {
      var data = {};
      $(form).find('input').each(function(index, element) {
        var type = $(this).attr('type');
        if ($(this).attr('name') && type !== 'submit' && type !=='hidden') {
          data[$(this).attr('name')] = $(this).val();
          }
        });
        return data;
      };
    var wrap = function wrap(root, formData) {
        var wrapper = {};
        wrapper[root] = formData;
        return wrapper;
      };
    var callback = function callback(error, data) {
        if (error) {
        console.error(error);
        $('#result').val('status: ' + error.status + ', error: ' + error.error);
        return;
        }
        $('#result').val(JSON.stringify(data, null, 4));
        };


      $('#register').on('submit', function(e) {
        e.preventDefault();
        var credentials = wrap('credentials', form2object(this));
        myJournalAPI.register(credentials, callback);
        $("#register").hide();
      });

      $('#login').on('submit', function(e) {
        var credentials = wrap('credentials', form2object(this));
        var cb = function cb(error, data) {
          if (error) {
            callback(error);
            return;
          }
          callback(null, data);
          $('.token').val(data.user.token);
          $('.id').val(data.user.id);
          console.log(data.user.token);
          $('#login').each(function(){
            this.reset();
            //  Makes forms go away/restructures page
            $("#login").hide(1000);
            $("#register").hide(1000);
            $("#aboutsm").show();
            $("#textsm").show();
            $(".fadeInDown").hide();
            $(".lightSpeedIn").show();
            $("#myEntries").show(1000);

          });

        };
        e.preventDefault();
        myJournalAPI.login(credentials, cb);

      });

      $('#logout').on('click', function(e) {
        var token = $('.token').val();
        var id = $('.id').val();
        var cb = function cb(error, data) {
          if (error) {
            callback(error);
            return;
          }
        };
        myJournalAPI.logout(token, id, cb
          );

      });

      // Submitting new entries function
      $('#entries').on('submit', function(e) {
        e.preventDefault();
        var token = $('.token').val();
        var new_entry = wrap('entry', form2object(this));
        myJournalAPI.new_entry(token, new_entry, function(err, entryData) {
          if (err) {
            // do something with the error
            return;
          } else {
            $('#entries').each(function(){
            this.reset();
            $('.bounceInLeft').show();
            $('#deleteone').show(1000);
            $('#update').show(1000);

          });
            console.log(entryData);
          }

        });
      });
      //Listing my entries
       $("#myEntries").on('click', function(e) {
        e.preventDefault();
        $('.myEntries').html('');
        var token = $('.token').val();
        var data = [];
        myJournalAPI.get_entries(token, function(err, data) {
          if (err) {
            console.log(err);
            return;
          } else {
            $.each(data.entries, function(index, element) {
              $('.myEntries').append("<li class='entryid'> <b>Date:</b> " + element.date + ' <br>  ' + "<b>Title:</b> <span class='title'>"  + element.title + '</span>' +' <br>  ' + "<b>Entry: </b>" + element.jpost +  '    <br>     ' + "<b>MY DAY IS A: " + element.rating +  '    <br>     ' + "ID: " + element.id + "</li>");

              });
            }
        //Limits list to first five entries
          $(function() {
          $("ul.myEntries").each(function() {
            $("li:gt(4)", this).hide(); /* :gt() is zero-indexed */
            $("li:nth-child(5)", this).after("<li class='more'><a href='#'>More...</a></li>"); /* :nth-child() is one-indexed */
          });
          $("li.myEntries a").live("click", function() {
            var li = $(this).parents("li:first");
            li.parent().children().show();
            li.hide();
            return false;
          });
        });
    });  //myJournalAPI.get_entries function
  }); //$(#myEntries) function


      //deleting one entry
    $('#deleteone').on('submit', function(e) {
        e.preventDefault();

        var token = $('.token').val();
        var entryid = $('#deleteone > input[name="entryid"]').val();
        console.log(entryid);
        myJournalAPI.destroy_entry(token, entryid, function(err, data) {
          if (err) {
            console.error(err);
            // do something with the error
            return;
          } else {
            console.log (data);
            //$('#deleteone').each(function(){
            //this.reset();
          }
        });
      });

      // update entry

 $('#update').on('submit', function(e) {
        e.preventDefault();

        var token = $('.token').val();
        var updateid = $('#update > input[name="updateid"]').val();
        var update_entry = wrap('entry', form2object(this));
        console.log(updateid);
        console.log(update_entry);
        myJournalAPI.update_entry(token, updateid,
          update_entry, function(err, data) {
          if (err) {
            console.error(err);
            // do something with the error

          } else {
            console.log(data);
            //$('#deleteone').each(function(){
            //this.reset();
          }
        });
     });
});








