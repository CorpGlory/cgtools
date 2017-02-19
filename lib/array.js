Array.prototype.first = function() {
  if(this.length == 0) {
    return undefined;
  }
  return this[0];
}

Array.prototype.last = function() {
  if(this.length == 0) {
    return undefined;
  }
  return this[this.length - 1];
}

Array.prototype.binaryIndexOfClosest = function(searchElement) {
  var array = this;
  if(array.length > 1) {
    // won`t check whole array. It's too slow
    if(array[0] > array[1]) {
      throw new Error('Array have to be sorted from lowest to highest');
    }
  }
  var minIndex = 0;
  var maxIndex = array.length - 1;
  var currentIndex;
  var currentElement;
  while (minIndex <= maxIndex) {
    currentIndex = (minIndex + maxIndex) / 2 | 0;
    currentElement = array[currentIndex];
    if (currentElement < searchElement) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > searchElement) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  if(currentElement < searchElement) {
    if(currentIndex == array.length - 1) {
      return array.length - 1;
    }
    var rightElem = array[currentIndex + 1];
    if(rightElem - searchElement < searchElement - currentElement) {
      return currentIndex + 1;
    } else {
      return currentIndex;
    }
  } else {
    if(currentIndex == 0) {
      return 0
    }
    var leftElem = array[currentIndex - 1];
    if(searchElement - leftElem < currentElement - searchElement) {
      return currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  throw new Error('can`t find index');
}
