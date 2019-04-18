(function(exports) {
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

  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(this.noteList.list);

    monitorPageChange(this.noteList.list);

    this.insertHTML();
  }

  NoteController.prototype.insertHTML = function() {
    document.getElementById('app').innerHTML = this.noteListView.outputHtml();
  };

  exports.NoteController = NoteController;
})(this);
