function testThingIsANote() {
  var note1 = new Note();
  assert.isTrue(note1 instanceof Note);
}
testThingIsANote();

function testInitialText(text) {
  var note2 = new Note(text);
  assert.isTrue(note2.getText() === text);
}
testInitialText('My favourite language is JavaScript');

function testNoteIDCreation() {
  var note3 = new Note();
  assert.isTrue(note3.id === 3);
}

testNoteIDCreation();
