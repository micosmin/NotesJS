function testThingIsNoteListViewObject() {
  var noteList = ['note1', 'note2'];
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView instanceof NoteListView);
}

testThingIsNoteListViewObject();

function testThingOutputsHTML() {
  noteList.clearNote();
  var note = new Note('Favourite food: ice-cream');
  noteList.addNote(note);
  var noteListView = new NoteListView(noteList);

  let shortText = noteList.list[noteList.list.length - 1].text.substring(0, 20);

  assert.isTrue(
    noteListView.outputHtml() ===
      `<ul class="list-group"><li class="list-group-item" ><div><a href="#notes/${
        noteList.list[noteList.list.length - 1].id
      }">${shortText}</a></div></li></ul>`
  );
}

testThingOutputsHTML();

function testThingOutputsMultipleItemsHTML() {
  noteList.clearNote();
  var note1 = new Note('Favourite food: ice-cream');
  var note2 = new Note('Favourite drink: tea');

  noteList.addNote(note1);
  noteList.addNote(note2);
  var noteListView = new NoteListView(noteList);

  let testOutput =
    '<ul class="list-group"><li class="list-group-item" ><div><a href="#notes/8">Favourite food: ice-</a></div></li><li class="list-group-item" ><div><a href="#notes/9">Favourite drink: tea</a></div></li></ul>';
  assert.isTrue(noteListView.outputHtml() === testOutput);
}

testThingOutputsMultipleItemsHTML();

function testThingHandlesEmptyNoteList() {
  noteList.clearNote();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.outputHtml() === '<ul class="list-group"></ul>');
}

testThingHandlesEmptyNoteList();

function testThingHasLinksForEachListItem() {
  noteList.clearNote();
  var note = new Note('Favourite food: ice-cream');
  noteList.addNote(note);
  var noteListView = new NoteListView(noteList);

  assert.isTrue(
    noteListView.outputHtml() ===
      `<ul class="list-group"><li class="list-group-item" ><div><a href="#notes/10">Favourite food: ice-</a></div></li></ul>`
  );
}
testThingHasLinksForEachListItem();
