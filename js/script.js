'use strict'

var myJournalAPI = myJournalAPI || {};

var myJournalAPP = myJournalAPP || {};
var token;
var id;

$("document").ready(function(){

//if storwe API isn't undefined it will remain its original value
//

  var form2object = function(form) {
    var data = {};
    $(form).find('input').each(function(index, element) {
    var type = $(this).attr('type');
      if ($(this).attr('name') && type !== 'submit' && type !== 'hidden') {
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
// $('#result').val(JSON.stringify(data, null, 4));
    console.log(JSON.stringify(data, null, 4));
  };


//lets me know if registration works
$("#register").on('submit',function(e) {
    e.preventDefault();
    var credentials = wrap('credentials', form2object(this));
    myJournalAPI.register(credentials, function(error, data){
      if (error){
        console.log("registration failed");
      }
      else
      {
        myJournalAPI.user = data.user;
        var token = data.user.token;
      }
    });
  });




$('#login').submit(function(e) {
   var credentials = wrap('credentials', form2object(this));
   e.preventDefault();
   myJournalAPI.login(credentials, function(error, data){
     if (error){
       console.log("Login failed");
      } else {
       // save all of the current users data
       myJournalAPI.user = data.user;
       //save the current user's token so it can be called in following fns
       var token = data.user.token;
//$("#login").submit(function() {
  //  var url = $(this).attr('href');
   // $("#center").load("login.html + #center");
    //myJournalAPI.quick_posts(token, function(error, quick_postData){
        // if(error){}
         // else means that the login worked
         // else {
           //console.log(JSON.stringify(quick_postData, null, 4));

           /*quick_postData.quick_posts.forEach(function(quick_post) {
             // <li>topic.title</li>
             $(".post-content")
             .append('<form data-quick_post-id="'+quick_post.id+'">' + quick_post.quick_post + "</form>");
           });//('<form>"#clues" + clue.clue + </form>');
           *///end of forEach loop for Topic Data
         //} //end of if error check
       //});
      }
    });
});
$("#contributions").on('submit',function(e) {
    e.preventDefault();
    var submission = wrap('submission', form2object(this));
    myJournalAPI.contributions(token, function(error, data){
      if (error){
        console.log("contribution failed");
      }
      else
      {
        myJournalAPI.user = data.user;
        var token = data.user.token;
      }
    });
  });


/*$("#contribution").submit(function(){
    var url = $(this).attr('href');
    $("#right").load("contribution.html + #center + #right");
$('#previous_story').load(function(e){
    var id = wrap('id', form2object(this));
    e.preventDefault();
      myJournalAPI.story(id, function(error, data){
      if (error){
        console.log("story failed");
      }
      else
      {
        myJournalAPI.user = data.user;
        var token = data.user.token;
      }
    });
  });
});








   /*/// *** end list topic ***

/*$("#login").on('submit',function(e) {
    var credentials = wrap('credentials', form2object(this));
    var cd = function cd(error, data) {
      if (error){
        callback(error);
      }
      return;
    };
    callback(null, data);
    $(',token').val(data.user.token);
    $('.id').validate.user.id;
    console.log(data.user.token);
//});*/
/*Stories
 The most recent completed story is available to read on the login/registration page
 Stories are complete when Outline changes
 The story in progress is visible only after a contribution is submitted

Outines
Outlines are provided from the database upon login
Outlines change every ten Contributions

Clues
Users receive clues from the previous user upon login, unless you are the first user
After they submit their contribution, users submit clues for the next user

Contributions
Users make a contribution and submit it upon login
A contribution is appended to the story in progress after submission
Stories are made up of ten contributions
*/
});
