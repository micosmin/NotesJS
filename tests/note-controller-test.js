function testThingIsAController() {
  //Note List Double
  function NoteModelDouble() {
    this.list = [];
  }
  var noteModel = new NoteModelDouble();

  //Note list view double
  function NoteListViewDouble(list) {
    this.noteList = list;
  }

  var controller = new NoteController(noteModel);

  assert.isTrue(controller instanceof NoteController);
}

testThingIsAController();

function testControllerCanInsertText() {
  function NoteModelDouble() {
    this.list = ['Text'];
  }

  let noteModel = new NoteModelDouble();

  let controller = new NoteController(noteModel);

  controller.insertHTML();

  assert.isTrue(document.getElementById('app').textContent === 'Text');
}

testControllerCanInsertText();
