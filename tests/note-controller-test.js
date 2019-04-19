//ARRANGE
function NoteListDouble() {
  this.list = [];
}
NoteListDouble.prototype.addNote = function(note) {
  this.list.push(note);
};
var note = new Note('');
var noteListDouble = new NoteListDouble();
noteListDouble.addNote(note);
var controller = new NoteController(noteListDouble);

//ASSERT/ACT
function testThingIsAController() {
  assert.isTrue(controller instanceof NoteController);
}

//testThingIsAController();

function testControllerCanInsertText() {
  controller.insertHTML();

  assert.isTrue(
    document.getElementById('app').textContent === 'Texts sooooo much te'
  );
  document.getElementById('app').innerHTML = ''; //clean the page
  noteListDouble.list = [];
}

//testControllerCanInsertText();

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

//testControllerCanMovetoNotePage();

function testSubmitButtonAddsANewNote() {
  //test if form is empty
  assert.isTrue(document.getElementById('app').textContent === '');
  //add text to text area
  document.getElementById('textArea').value = 'Testing new note';
  //select the submit button and click on it
  document.querySelectorAll('[type="submit"]')[0].click();
  //select the app id and check if text submitted is in there
  console.log(document.getElementById('app').textContent);
  assert.isTrue(
    document.querySelector('#app').textContent === 'Testing new note'
  );
}

// testSubmitButtonAddsANewNote();
