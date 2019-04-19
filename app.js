// app.js
var noteList = new NoteList();

controller = new NoteController(noteList);

controller.insertHTML();

monitorModule.monitorPageChange(this.noteList.list);

monitorModule.monitorSubmitEvents(this.noteList);
