## User stories

As a programmer
I can see a list of my notes, where each note is abbreviated to the first 20 characters
So I can find the one I want

As a programmer
I can create a new note
So I can record something I need to remember

As a programmer
I can see the full text of an individual note on its own page
So I can see all the information in the note

(NB: notes do not need to be permanently stored. If the user refreshes their web page, they'll lose their notes, and that's fine.)

#Step 1: TDD a model for a note

- object for note - note-model.js
- unit test for it

IIFS:

- suse to hide variables an functions declarations

Module pattern in the browser:

- just in IIFE

```js
//module example
(function(exports) {
  var EXCLAMATION_MARK_COUNT = 5;

  function exclaim(string) {
    return string + "!".repeat(EXCLAMATION_MARK_COUNT);
  }

  exports.exclaim = exclaim; //must use exposts in the module - this function is exposed for us to use now / and also hidden implementation details / variales form insde the module don't clash with same name variables form outside the module
})(this); //why use this?

exclaim("hi"); // call the method exported
```

export - puts the method int he global scope, so i can call it exclaim("hi")
this - represents the global scope as well

### include module file in index.html

### call exported method in app.js

## One module requiring another module

- just use the method exported as it gets exported to the global level

## Writing tests withouth a testing library

```js
// assert.js
var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  };
};
```

```js
// circle-tests.js

function testCircleRadiusDefaultsTo10() {
  var circle = new Circle();
  assert.isTrue(circle.radius === 10);
}

testCircleRadiusDefaultsTo10();
```

## Unit tests:

- TDD creation of a note object

```js
// Assert file
var assert = {
  isTrue: function(objectToCheck) {
    if (!objectToCheck) {
      throw new Error("Assertion failed: " + objectToCheck + " is not truthy");
    } else {
      console.log("Success");
    }
  }
};
```

```js
//Test file
function testThingIsANote() {
  var note = new Note();
  assert.isTrue(note instanceof Note);
}
testThingIsANote();

function testInitialText(text) {
  var note = new Note(text);
  assert.isTrue(note.getText() === text);
}
testInitialText("My favourite language is JavaScript");
```

?

> All models are wrapped in IIFS for module patter

## Running a node http server

```
//In your project, run:

$ cd root/of/your-project/
$ npm install http-server --save
$ node node_modules/http-server/bin/http-server
```

`npm install` - looks at package.json and install dependencies
