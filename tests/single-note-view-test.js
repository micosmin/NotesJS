function testInstanceOfSingleNote() {
  function NoteModel(note) {
    this.text = note;
  }
  NoteModel.prototype = {
    getText: function() {
      this.text;
    }
  };
  var noteDouble = new NoteModel('text');
  var singleNoteView = new SingleNoteView(noteDouble);
  assert.isTrue(singleNoteView instanceof SingleNoteView);
}

testInstanceOfSingleNote();

function testCreationOfHTML() {
  function NoteModel(note) {
    this.text = note;
  }
  NoteModel.prototype.getText = function() {
    return this.text;
  };

  var noteDouble = new NoteModel('text');

  var singleNoteView = new SingleNoteView(noteDouble);
  var html = singleNoteView.createHTML();
  assert.isTrue(html === '<div class="expandedNote">text</div>');
}

testCreationOfHTML();
