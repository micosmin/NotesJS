function testThingIsNoteListViewObject() {
  var noteList = ["note1", "note2"];
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView instanceof NoteListView);

}

testThingIsNoteListViewObject();

function testThingOutputsHTML() {
  var noteList = ["Favourite food: ice-cream"];
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.outputHtml() === "<ul><li><div>Favourite food: ice-cream</div></li></ul>");
}

testThingOutputsHTML();

function testThingOutputsMultipleItemsHTML() {
  var noteList = ["Favourite food: ice-cream", "Favourite drink: tea"];
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.outputHtml() === "<ul><li><div>Favourite food: ice-cream</div></li><li><div>Favourite drink: tea</div></li></ul>");
}

testThingOutputsMultipleItemsHTML();

function testThingHandlesEmptyNoteList() {
  var noteList = [];
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.outputHtml() === "<ul></ul>");
}

testThingHandlesEmptyNoteList();