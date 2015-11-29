'use strict'

var UserId, UserToken, callback;

var api = {
  url: 'http://localhost:3000',
  //url: 'http://ttt.wdibos.com',
  ajax: function(config, cb) {
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  },
  register: function(credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/register',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  },
  login: function(credentials,callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/login',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  }
};


$("#contribution").submit(function() {
    var options = {
      /* target:"#divResult", */

      success: function(html) {
        $("#divResult").replaceWith($('#divResult', $(html)));
      },

      url: "http://localhost:8081/sniper/estabelecimento/pesquisar.action"
    };

    $(this).ajaxSubmit(options);
    return false;
  });
});


$("#div_to_refresh").load("url_of_current_page.html #div_to_refresh")

var request = new XMLHttpRequest();
request.onload = callback;
request.open("post", "http://localhost:3000/request");
request.setRequestHeader("Content-Type", "application/json");
request.send('{"my_data":"back to basics"}');
