//ASSERT/ACT
function testThingIsAController() {
  assert.isTrue(controller instanceof NoteController);
}
testThingIsAController();

function testControllerCanInsertText() {
  var note = new Note('Texts sooooo much text all the way');
  noteList.addNote(note);
  controller.insertHTML();

  let id = 'app';
  if (window.location.href.split('/').pop() === 'test.html') {
    id = 'appTest';
  }

  assert.isTrue(
    document.getElementById(id).textContent === 'Texts sooooo much te'
  );
  noteList.clearNote();
  document.getElementById('appTest').innerHTML = ''; //clean the page
}

testControllerCanMovetoNotePage();

function testSubmitButtonAddsANewNote() {
  //add text to text area
  document.getElementById('textAreaTest').value = 'Testing new note again';
  //select the submit button and click on it
  document.querySelectorAll('[type="submit"]')[0].click();
  // //select the app id and check if text submitted is in there
  console.log(document.getElementById('appTest'));
  assert.isTrue(
    document.getElementById('appTest').textContent === 'Testing new note'
  );
}

testSubmitButtonAddsANewNote();

function testControllerCanMovetoNotePage() {
  //triggers the event listener
  document.querySelector('div ul li div a').click();
  console.log(document.getElementById('appTest').innerText);
  console.log(document);
  assert.isTrue(
    document.getElementById('appTest').textContent ===
      'Texts sooooo much text all the way'
  );
  noteList.clearNote();
  document.getElementById('appTest').innerHTML = ''; //clean the page
}

//testControllerCanInsertText();
