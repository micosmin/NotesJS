(function(exports) {
  var count = 0;
  function Note(text) {
    this.id = count += 1;
    this.text = text;
  }
  Note.prototype.getText = function() {
    return this.text;
  };

  exports.Note = Note;
})(this);
