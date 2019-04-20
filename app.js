// app.js
window.addEventListener('load', () => {
  var noteList = new NoteList();
  console.log(noteList);
  controller = new NoteController(noteList);

  controller.insertHTML();
  monitorModule.monitorPageChange(noteList.list);
  monitorModule.monitorSubmitEvents(noteList);
});
