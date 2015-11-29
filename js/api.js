  'use strict'
//if storwe API isn't undefined it will remain its original value
/*var myJournalAPI = myJournalAPI || {};

//    myJournalAPI.login = function
// myJournalAPI is the object!
myJournalAPI.server = 'http://localhost:3000';

// This ajax functionality wraps around ajax calls for register, list, etc
myJournalAPI.ajax = function(config, cb) {
  $.ajax(config).done(function(data, textStatus, jqxhr) {
    cb(null, data);
    }).fail(function(jqxhr, status, error) {
    cb({jqxher: jqxhr, status: status, error: error});
  });
 };

myJournalAPI.register = function register(credentials, callback) {

  this.ajax({
    method: 'POST',
    // url: 'http://httpbin.org/post',
    url: this.server + '/register',
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify(credentials),
    dataType: 'json'
  }, callback);
};

myJournalAPI.login = function login(credentials, callback) {
  this.ajax({
    method: 'POST',
    // url: 'http://httpbin.org/post',
    url: this.server + '/login',
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify(credentials),
    dataType: 'json'
  }, callback);
};

myJournalAPI.contributions = function contributions(token, callback) {
  this.ajax({
    method: 'POST',
    // url: 'http://httpbin.org/post',
    url: this.server + '/contributions',
   contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({}),
      dataType: 'json',
    }, callback);


};

myJournalAPI.clues = function clues(token, callback) {
   this.ajax({
     method: 'GET',
     url: myJournalAPI.server + '/clues',
     headers: {
       Authorization: 'Token token=' + token,
     },
     dataType: 'json'
    }, callback);
 };*/

  //THIS IS ALL NONE WORKING    uthenticated api actions


  /*createContribution: function (token, callback) {
    this.ajax({
      method: 'POST',
      url: this.serve + '/',
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({}),
      dataType: 'json',
    }, callback);
  },

  showGame: function (id, token, callback) {
    this.ajax({
      method: 'GET',
      url: this.ttt + '/games/' + id,
      headers: {
        Authorization: 'Token token=' + token
      },
      dataType: 'json'
    }, callback);
  },

myJournalAPI.contribution(token, function(error, topicData){
         if(error){}
         // else means that the login worked
         else {
           console.log(JSON.stringify(topicData, null, 4));
           topicData.topics.forEach(function(topic) {
             // <li>topic.title</li>
             $(".post-content").append("#right" + topic.title + "</li>");
           }); //end of forEach loop for Topic Data
         } //end of if error check
       }); // *** end list topic ***


myJournalAPI.previous_story = function previous_story( id, callback) {
  this.ajax({
    method: 'GET',
    // url: 'http://httpbin.org/post',
    url: this.server + '/story.all/' + id,
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify({}),
    dataType: 'json'
  }, callback);
};

myJournalAPI.inprogress = function inprogress(id, callback) {
  this.ajax({
    method: 'POST',
    // url: 'http://httpbin.org/post',
    url: this.server + '/stories',
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify(credentials),
    dataType: 'json'
  }, callback);
};
*/


var myJournalAPI = {
  url: 'http://localhost:3000',


  ajax: function (config, cb) {
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  },





  register: function (credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/register',
      contentType: 'application/json',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
    console.log("success");
  },

  login: function (credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/login',
      contentType: 'application/json',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
    console.log("success");
  },

  logout: function (token, id, callback) {
    this.ajax({
      method: 'DELETE',
      url: this.url + '/logout/' + id,
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json',
      dataType: 'json'
    }, callback);
    console.log("success");
  },

  list_entries: function (token, callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/entries',
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json; charset=utf-8'
    }, callback);
  },

  list_quick_posts: function(token, list_quick_posts, callback){
    this.ajax({
      method: 'GET',
      url: this.url + '/quick_posts',
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(list_quick_posts),
      dataType: 'json'
    }, callback);
  },

  new_entry: function (token, new_entry, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/entries',
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(new_entry),
      dataType: 'json'

    }, callback);
  },

  new_quick_post: function (token, new_quick_post, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/quick_posts',
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(new_quick_post),
      dataType: 'json'

    }, callback);
  },

  change_entry: function (token, beer_id, change_entry, callback) {
    this.ajax({
      method: 'PATCH',
      url: this.url + '/entries' + id,
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(change_entry),
      dataType: 'json'

    }, callback);
  },
};
