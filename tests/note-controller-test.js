function testThingIsAController() {
  function NoteModelDouble() {
    this.list = [];
  }
  var noteModel = new NoteModelDouble();

  var controller = new NoteController(noteModel);

  assert.isTrue(controller instanceof NoteController);
}

testThingIsAController();

function testControllerCanInsertText() {
  var note = new Note('Text');

  function NoteModelDouble(note) {
    this.list = [note];
  }

  let noteModel = new NoteModelDouble(note);

  let controller = new NoteController(noteModel);

  controller.insertHTML();

  assert.isTrue(document.getElementById('app').textContent === 'Text');
  document.getElementById('app').innerHTML = ''; //clean the page
}

testControllerCanInsertText();

function testChangingHTML() {}

testChangingHTML();
