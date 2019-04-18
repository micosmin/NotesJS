//ARRANGE
function NoteListDouble() {
  this.list = [];
}
NoteListDouble.prototype.addNote = function(note) {
  this.list.push(note);
};
var note = new Note('Texts sooooo much text all the way');
var noteListDouble = new NoteListDouble();
noteListDouble.addNote(note);
var controller = new NoteController(noteListDouble);

//ASSERT/ACT
function testThingIsAController() {
  assert.isTrue(controller instanceof NoteController);
}

testThingIsAController();

function testControllerCanInsertText() {
  controller.insertHTML();
  assert.isTrue(
    document.getElementById('app').textContent === 'Texts sooooo much te'
  );
  document.getElementById('app').innerHTML = ''; //clean the page
}

testControllerCanInsertText();

function testControllerCanMovetoNotePage() {
  controller.insertHTML();

  window.addEventListener('click', function() {
    window.location.href = 'index.html#note/9';
    var html = noteListDouble.list[0].getText();
    document.getElementById('app').innerHTML = html;
  });

  document.querySelector('div ul li div a').click(); //triggers the event listener

  assert.isTrue(
    document.getElementById('app').textContent ===
      'Texts sooooo much text all the way'
  );
}

testControllerCanMovetoNotePage();
