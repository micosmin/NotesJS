(function(exports) {
  function testPage() {
    if (window.location.href.split('/').pop() === 'test.html') {
      return true;
    }
    return false;
  }

  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(this.noteList.list);
  }

  NoteController.prototype.insertHTML = function() {
    if (noteList.list.length > 0) {
      //Check if you are in testing mode
      let id = 'app';
      if (testPage()) {
        id = 'appTest';
      }

      document.getElementById(id).innerHTML = this.noteListView.outputHtml();
    }
  };

  exports.NoteController = NoteController;
})(this);
