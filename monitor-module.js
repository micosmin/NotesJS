var monitorModule = (function() {
  function retrieveNote(notes, id) {
    var note = notes.filter(note => note.id == id);
    return note;
  }

  function parseURL(url) {
    // the if below checks if you are going back to index.html
    // i'm applying the result in monitorPageChange
    if (url.href.split('/').pop() == 'index.html') {
      return 'index.html';
    }
    result = {
      page: url.href.split('#')[1].split('/')[0],
      id: url.href.split('#')[1].split('/')[1]
    };

    return result;
  }

  function testPage() {
    if (window.location.href.split('/').pop() === 'test.html') {
      return true;
    }
    return false;
  }

  function targetForm() {
    let env = 'textDev';
    if (testPage()) {
      env = 'textTest';
    }
    form = document.getElementById(env);

    return form;
  }

  return {
    monitorPageChange: function(controller, noteList) {
      window.addEventListener('hashchange', function() {
        //if you are going back to index, update the html by inserting all note
        if (parseURL(window.location) == 'index.html') {
          controller.insertHTML();
        } else {
          var notes = noteList;
          var urlNoteObject = parseURL(window.location);
          var note = retrieveNote(notes, urlNoteObject.id);

          var showPage = new SingleNoteView(note[0]);

          //special var for testpage notes # conditional check
          var testPageNotes = window.location.href
            .split('/')
            .includes('test.html#notes');

          let id = 'app';
          if (testPageNotes) {
            id = 'appTest';
          }

          document.getElementById(id).innerHTML = showPage.createHTML();
        }
      });
    },

    monitorSubmitEvents: function(controller, noteList) {
      // if test page location, change id for form
      let form = targetForm();

      form.addEventListener('submit', function(event) {
        event.preventDefault();
        //get form value
        var formValue = event.path[0][0].value.trim();
        //get noteList (passed as argument)
        var notes = noteList;
        //create note
        var note = new Note(formValue);

        //add note to note list
        notes.addNote(note);
        //update the app element

        controller.insertHTML();

        let textArea = 'textArea';

        if (testPage()) {
          textArea = 'textAreaTest';
        }

        document.getElementById(textArea).value = '';
        document.getElementById(textArea).focus();
      });
    }
  };
})();
