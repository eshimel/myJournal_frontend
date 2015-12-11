'use strict'
var myJournalAPI = myJournalAPI || {};
var token;
var id;

$(document).ready(function() {
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

      $.ajax

      $('#register').on('submit', function(e) {
        e.preventDefault();
        var credentials = wrap('credentials', form2object(this));
        myJournalAPI.register(credentials, callback);
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
              $('.myEntries').append("<li> Entry: " + element.title + '   ' + "Entry: " + element.jpost +  '         ' + "ID: " + element.id + "</li>");
          });
        }
      });
    });
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

      //  Submitting new quick_post function

      $('#quick_post').on('submit', function(e) {
        e.preventDefault();
        var token = $('.token').val();
        var new_quick_post = wrap('quick_post', form2object(this));
        myJournalAPI.new_quick_post(token, new_quick_post, function(err, quick_postData) {
          if (err) {
            // do something with the error
            return;
          } else {
            $('#quick_post').each(function(){
            this.reset();
          });
            console.log(quick_postData);
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








