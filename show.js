


 $('#myEntries').on('submit', function(e) {
        e.preventDefault();
        var entry_id = entryID();
        var token = $('.token').val();
        var list_entry = wrap('entry', form2object(this));
        myJournalAPI.change_entry(token, entry_id, change_entry, function(err,
          entryData) {
          if (err) {
            // do something with the error
            return;
          } else {
            console.log(entryData);
          }
        });
      });


 <li>
                <span class="list">{{title}}</span>
                <input class="listInput" type="text" value="{{title}}" data-id="{{id}}" data-field="title" />
            </li>
"<form id='deleteone'><input name='entryid' type='text' placeholder=" + element.id + "><input name='deleteone' type='submit' value='Delete an Entry'><input class='entryid' name='entryid' type='hidden'>" +






         $('.entryid').on('focus', '[contenteditable]', function() {
    var $this = $(this);
    $this.data('before', $this.html());
    return $this;
}).on('blur keyup paste input', '[contenteditable]', function() {
    var $this = $(this);
    if ($this.data('before') !== $this.html()) {
        $this.data('before', $this.html());
        $this.trigger('change');
    }
    return $this;
});


$('.entryid').on('mouseover', '.title', function() {
    $(this).closest('li').append(contenteditable, true);
});


 var list = $('.myEntries');
  var editList = $('.title');

  editList.onclick = function() {

  //or you can use list.setAttribute("contentEditable", true);
  list.contentEditable = true;

};
$(this).parent().contenEditable = true;


<span class="display"></span>
           <input type="text" class="edit" style="display:none"/>
