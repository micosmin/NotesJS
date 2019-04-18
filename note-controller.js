(function(exports) {
  function monitorPageLoad() {
    window.addEventListener('load', function() {
      console.log('test load');
    });
  }
  function monitorPageChange() {
    window.addEventListener('hashchange', function() {
      var testNotes1 = new Note('Sometext');
      var testNotes2 = new Note('OtherText');
      var notes = [testNotes1, testNotes2];

      var resultObject = parseURL(window.location); //not useful at the moment

      var note = retrieveNote(notes, resultObject.id);

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

  function NoteController(noteModel) {
    this.noteList = noteModel; //note list
    this.noteListView = new NoteListView(this.noteList.list); //note list view

    monitorPageLoad();
    monitorPageChange();
  }

  NoteController.prototype.insertHTML = function() {
    document.getElementById('app').innerHTML = this.noteListView.outputHtml();
  };

  exports.NoteController = NoteController;
})(this);
