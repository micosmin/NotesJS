var assert = {
  isTrue: function(objectToCheck) {
    if (!objectToCheck) {
      throw new Error('Assertion failed: ' + objectToCheck + ' is not truthy');
    } else {
      console.log('Success');
    }
  }
};

// note list model
// new instance has empty array
// new instance is instanceOf notelist
