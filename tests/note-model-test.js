function testThingIsANote() {
  var note = new Note();
  assert.isTrue(note instanceof Note);
}
testThingIsANote();

function testInitialText(text) {
  var note = new Note(text);
  assert.isTrue(note.getText() === text);
}
testInitialText('My favourite language is JavaScript');
