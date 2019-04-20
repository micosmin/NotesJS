// app.js
window.addEventListener('load', () => {
  var noteList = new NoteList();
  var controller = new NoteController(noteList);

  controller.insertHTML();
  monitorModule.monitorPageChange(controller, noteList.list);
  monitorModule.monitorSubmitEvents(controller, noteList);
});
