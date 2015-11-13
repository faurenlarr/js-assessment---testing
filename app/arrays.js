exports = (typeof window === 'undefined') ? global : window;

  exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var total = 0;
    arr.forEach(function (el, idx, arr) {
      total += el;
    });
    return total;
  },

  remove : function(arr, item) {
    return _.reject(arr, function(num){
      return num === item;
     });

  },

  removeWithoutCopy : function(arr, item) {

    for (var i = 0; i<arr.length; i++){
      if (arr[i] === item) {
        arr.splice(i,1);
        i -= 1;
      }
    }
    return arr;
  },

  append : function(arr, item) {
      arr.push(item);
      return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;

  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
      arr.shift();
      return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
          arr.splice(index,0,item);
          return arr;
  },

  count : function(arr, item) {
    var value = 0;
    _.each(arr, function(el,idx, array){
          if (el === item) {
          value += 1;
        }
      });
    return value;
  },

  duplicates : function(arr) {
    var sortedArray = arr.sort();
    var emptyArray = [];
    console.log(sortedArray);
    for (var i = 0; i < sortedArray.length; i++) {
      console.log(i);
      if (sortedArray[i] === sortedArray[i+1] && !_.contains(emptyArray, sortedArray[i])) {
        emptyArray.push(sortedArray[i]);
        console.log(sortedArray[i]);
      }

    }
    return emptyArray;
  },

  square : function(arr) {
    for ( var i = 0 ; i < arr.length ; i++ ) {
      arr[i] *= arr[i];
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var array = [];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === target) {
      array.push(i);
      }
    }
    return array;
  },
};
