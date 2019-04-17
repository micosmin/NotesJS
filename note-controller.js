(function(exports) {
  function NoteController(noteModel) {
    this.noteList = noteModel; //note list

    this.noteListView = new NoteListView(this.noteList.list); //note list view
    var url = window.location.href.split('#')[1];

    window.addEventListener('hashchange', function() {
      window.location = url;
    });
  }

  NoteController.prototype.insertHTML = function() {
    document.getElementById('app').innerHTML = this.noteListView.outputHtml(); //html from note list view
  };

  exports.NoteController = NoteController;
})(this);
