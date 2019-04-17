(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
    this.LIMIT = 20;
  }

  NoteListView.prototype.outputHtml = function() {
    var html = '<ul>';
    for (item of this.noteList) {
      html += `<li><div><a href="#notes/${item.id}">${item.text.substring(
        0,
        this.LIMIT
      )}</a></div></li>`;
    }
    html += '</ul>';

    return html;
  };
  exports.NoteListView = NoteListView;
})(this);
