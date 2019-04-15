(function() {
  function NoteController(list) {
    this.noteList = list; //note list
    this.noteList.addNote("Favourite drinke: seltzer"); //adds note
    this.noteList.addNote("Favourite drinke: cola"); //adds note
    this.noteListView = new NoteListView(this.noteList.list); //note list view
  }

  NoteController.prototype.insertHTML = function() {
    document.getElementById("app").innerHTML = this.noteListView.outputHtml(); //html from note list view
  };

  var controller = new NoteController(new NoteList());
  controller.insertHTML();
})(this);
