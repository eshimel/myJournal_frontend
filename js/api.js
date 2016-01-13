'use strict';
//Ajax Calls

var myJournalAPI = {
  url: 'https://immense-inlet-5495.herokuapp.com',
//url: 'http://localhost:3000',  (Only for test use)

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

  get_entries: function (token, callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/entries',
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json; charset=utf-8'
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

   update_entry: function (token, entryid, update_entry, callback) {
    this.ajax({
      method: 'PATCH',
      url: this.url + '/entries/' + entryid,
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(update_entry),
      dataType: 'json'

    }, callback);
  },

 destroy_entry: function (token, entryid, callback) {
    this.ajax({
      method: 'DELETE',
      url: this.url + '/entries/' + entryid,
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json',
      dataType: 'json'
    }, callback);
    console.log("success");
  },


}; //closing myJournal Object Bracket
