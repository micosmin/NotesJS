function testThingIsNoteListViewObject() {
  var noteList = ['note1', 'note2'];
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView instanceof NoteListView);
}

testThingIsNoteListViewObject();

function testThingOutputsHTML() {
  var note = new Note('Favourite food: ice-cream');
  var noteList = [note];
  var noteListView = new NoteListView(noteList);

  let shortText = noteList[0].text.substring(0, 20);
  assert.isTrue(
    noteListView.outputHtml() ===
      `<ul class="list-group"><li class="list-group-item" ><div><a href="#notes/${
        noteList[0].id
      }">${shortText}</a></div></li></ul>`
  );
}

testThingOutputsHTML();

function testThingOutputsMultipleItemsHTML() {
  var note1 = new Note('Favourite food: ice-cream');
  var note2 = new Note('Favourite drink: tea');

  var noteList = [note1, note2];
  var noteListView = new NoteListView(noteList);

  var noteListCopy = JSON.parse(JSON.stringify(noteList));

  noteListCopy.map(elem => (elem.text = elem.text.substring(0, 20)));

  var testOutput = '<ul class="list-group">';
  noteListCopy.forEach(function(list) {
    testOutput +=
      `<li class="list-group-item" ><div><a href="#notes/${list.id}">` +
      list.text +
      '</a></div></li>';
  });
  testOutput += '</ul>';

  assert.isTrue(noteListView.outputHtml() === testOutput);
}

testThingOutputsMultipleItemsHTML();

function testThingHandlesEmptyNoteList() {
  var noteList = [];
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.outputHtml() === '<ul class="list-group"></ul>');
}

testThingHandlesEmptyNoteList();

function testThingHasLinksForEachListItem() {
  var note = new Note('Favourite food: ice-cream');

  var noteList = [note];

  var noteListView = new NoteListView(noteList);

  let shortText = noteList[0].text.substring(0, 20);
  assert.isTrue(
    noteListView.outputHtml() ===
      `<ul class="list-group"><li class="list-group-item" ><div><a href="#notes/${
        note.id
      }">${shortText}</a></div></li></ul>`
  );
}
testThingHasLinksForEachListItem();
