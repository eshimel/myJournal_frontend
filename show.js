


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
