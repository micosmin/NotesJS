function testThingIsANoteList() {
  var noteList = new NoteList();
  assert.isTrue(noteList instanceof NoteList);
}
testThingIsANoteList();

function testNoteListHasEmptyArray() {
  var noteList = new NoteList();

  assert.isTrue(noteList.showList().length === 0);
}

testNoteListHasEmptyArray();

function testNoteListReturnsNotes() {
  var noteList = new NoteList();

  var note = new Note("Note 1");

  noteList.addNote(note);

  assert.isTrue(noteList.showList().includes(note));
  assert.isTrue(noteList.showList()[0].text === "Note 1");
}

testNoteListReturnsNotes();
