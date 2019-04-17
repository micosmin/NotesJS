(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.outputHtml = function() {
    var html = '<ul>';
    for (item of this.noteList) {
      html += `<li><div>${item}</div></li>`;
    }
    html += '</ul>';

    return html;
  };
  exports.NoteListView = NoteListView;
})(this);
