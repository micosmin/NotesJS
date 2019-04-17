function testThingIsNoteListViewObject() {
  var noteList = ['note1', 'note2'];
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView instanceof NoteListView);
}

testThingIsNoteListViewObject();

function testThingOutputsHTML() {
  var noteList = ['Favourite food: ice-cream'];
  var noteListView = new NoteListView(noteList);

  let shortText = noteList[0].substring(0, 20);

  assert.isTrue(
    noteListView.outputHtml() === `<ul><li><div>${shortText}</div></li></ul>`
  );
}

testThingOutputsHTML();

function testThingOutputsMultipleItemsHTML() {
  var noteList = ['Favourite food: ice-cream', 'Favourite drink: tea'];
  var noteListView = new NoteListView(noteList);

  var shortStrings = noteList.map(list => list.substring(0, 20));

  var testOutput = '<ul>';
  shortStrings.forEach(function(list) {
    testOutput += '<li><div>' + list + '</div></li>';
  });
  testOutput += '</ul>';

  assert.isTrue(noteListView.outputHtml() === testOutput);
}

testThingOutputsMultipleItemsHTML();

function testThingHandlesEmptyNoteList() {
  var noteList = [];
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.outputHtml() === '<ul></ul>');
}

testThingHandlesEmptyNoteList();
