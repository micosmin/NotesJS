// IIFS makes the exported method available to the whole app
// Hide implementation details

// (function(exports) {
//   var EXCLAMATION_MARK_COUNT = 5;

//   function exclaim(string) {
//     return string + "!".repeat(EXCLAMATION_MARK_COUNT); // JS repeat 'abc'.repeat(0);
//   }

//   exports.exclaim = exclaim; //can use this at any time in the application
// })(this);

// exclaim.js

(function(exports) {
  var EXCLAMATION_MARK_COUNT = 5;

  function exclaim(string) {
    return string + repeat("!", EXCLAMATION_MARK_COUNT); //rewrote the repeat function and call repeat inside it
  }

  exports.exclaim = exclaim;
})(this);
