(function(exports) {
  function SingleNoteView(noteModel) {
    this.noteModel = noteModel;
  }

  SingleNoteView.prototype.createHTML = function() {
    let text = this.noteModel.getText();
    return `<div class="expandedNote">${text}</div>`;
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
