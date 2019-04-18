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
    return string + '!'.repeat(EXCLAMATION_MARK_COUNT);
  }

  exports.exclaim = exclaim; //must use exposts in the module - this function is exposed for us to use now / and also hidden implementation details / variales form insde the module don't clash with same name variables form outside the module
})(this); //why use this?

exclaim('hi'); // call the method exported
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
      throw new Error('Assertion failed: ' + objectToCheck + ' is not truthy');
    } else {
      console.log('Success');
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
testInitialText('My favourite language is JavaScript');
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

## Controller js

- create node-controller.js file
- load it in the html page

## Mocking

### Make a function which you rely on to return a specific value

```js
function test(){

  var yourObject = new Object(){

  yourObject.methodYouCall = function() {
      return whateverYouWant;
  })

  };

}
```

### Use a fake object

```js
// in the function test
// create a double object

function PlaneDouble() {}

// add a method that is being called in the test

PlaneDouble.prototype = {
  something: function() {}
};

// call the planedouble somehwere your code needs it
```

### Check if a function got called

```js
//create double object which has a counter
function test() {
  function myDouble() {
    this.checkCount = 0;
  }

  myDouble.prototype = {
    method: function() {
      this.checkCount += 1;
    }
  };
}
```

## Create single note view

- TDD a single note view object - view for showing a single note on a page
  - Create note view js file
  - use module pattern to create the object and export it in the global namespace
  - it will be a single note view that can be instantiated
  - it takes a note mode as a parameter and uses it's state to populate the single note view
  - create a method that returns an HTML which represents the note model

Test:

- instantiation of note view object
- creation of html

## Show abbreviated notes on main page

- create a limit of only 20 characters for the note
  - update the note list view
  - TDD updating the code to only show 20 chars for each note in the list

## Finish implementation of a single note page

- use the hashchange event to load page content when the browser URL changes

> hashchange event gets fired when the #identifier of the URL has changed

```js
window.addEventListener('hashChange', function() {});
```

- note model has unique id;
  - TDD giving each note a uniq id:
  - How? Where do i store the id? how do i keep track of previous ids
    - Attempt to store in the noteModel in the iffy, outside the method being exported to the global namespace
- link each note to a page to display the full note
  - will most likely add a ahref attribute to each li
  - TDD updating the note list view so that each note has a link to an appropriate URL /#notes/1
- load the content of a single note page
  - TDD updating note controller.js to load content for the single note page
  - note controller must listen to hashChange events - when one happens change the content of app

Moving to another #page seems a bit tricky at the moment:

- I have broken down the problem into smaller parts
- First, see if the controller can monitor for window events, such as load and hashchange - try them manually: I put the methods outside of the exported controller constructor
- This works, but now I need the bit (#notes/1) from the url to call display the text of the note in question: HOW? build a url parsers which returns an object {page:, id} for the moment
- Don't know yet how to test it, so I am going to spike until I have a workable solution
  - I have created a link on the main page with a target of #notes/1
  - This work: when I click on it the url changes and my console displays the parse url result {page: 'notes', id: '1'}, which I can use to retrieve a note with id 1
- What do I need to do next? Test whether I can get my object out of an array and insert it in the new page? How do I do that?

  - Create an array with 1 note
  - When the page changes, I want to call the showPage method which takes the note in question
  - Getting that note inside showPage will involve using the parse url result and the ID key
  - Before that step, to check whether I can insert html int he page when I change URLs, I will whether on url change event I can insert text in the <div id='app'>\
  - This works, and it also works with passing a ShowSinglePage object with a note and calling it's createHtml() function
  - Next - retrieve a note from an array - hard code the page number in the index to start with. This works now - uses an array of notes and the parseURL to create an html that gets injected on the page once a hashChange event is triggered
  - Next - remove hard code and implement this to work with noteListView

  > Single Page app

- once browser loads - no page refresh - all changes happen by manipulating HTML (insert html dynamically)
  > Navigation
- direct user to new 'page' when a click happens
- use window.location.hash
