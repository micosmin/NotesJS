(function(exports) {
  var controller; //defined it in global namespace

  window.addEventListener('load', event => {
    var noteList = new NoteList();
    controller = new NoteController(noteList);
  });

  function monitorPageChange(noteList) {
    window.addEventListener('hashchange', function() {
      var notes = noteList; //notelist gets passed as an argument in the function
      var urlNoteObject = parseURL(window.location);
      var note = retrieveNote(notes, urlNoteObject.id);
      var showPage = new SingleNoteView(note[0]);
      document.getElementById('app').innerHTML = showPage.createHTML();
    });
  }

  function retrieveNote(notes, id) {
    var note = notes.filter(note => note.id == id);
    return note;
  }

  function parseURL(url) {
    result = {
      page: url.href.split('#')[1].split('/')[0],
      id: url.href.split('#')[1].split('/')[1]
    };
    return result;
  }

  function monitorSubmitEvents(noteList) {
    window.addEventListener('submit', function(event) {
      event.preventDefault();
      //get form value
      var formValue = event.path[0][0].value;
      //get noteList (passed as argument)
      var notes = noteList;
      //create note
      var note = new Note(formValue);
      //add note to note list
      notes.addNote(note);
      //update the app element
      controller.insertHTML();
    });
  }

  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(this.noteList.list);

    monitorPageChange(this.noteList.list);
    monitorSubmitEvents(this.noteList);

    this.insertHTML();
  }

  NoteController.prototype.insertHTML = function() {
    document.getElementById('app').innerHTML = this.noteListView.outputHtml();
  };

  exports.NoteController = NoteController;
})(this);
