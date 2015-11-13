exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null,arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj,null);
  },

  functionFunction : function(str) {

      return function(item) {
        return str + ', ' + item;
      };
    },


    makeClosures: function(arr, fn) {
      return _.map(arr, function(el, idx, array) {
          return function(){
            return  fn(el);
          };
      });
  },

  partial : function(fn, str1, str2) {
          return function(item){
            return fn(str1,str2,item);
          };

  },

  useArguments : function() {
      return  _.reduce(arguments, function(a,b){
                      return a + b;
        });

  },

  callIt : function(fn) {
      var args = Array.prototype.slice.call(arguments,1,arguments.length);
      return fn.apply(null,args);

  },

  partialUsingArguments : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1, arguments.length);
      return function (){
        var evenmoreargs = args.concat(Array.prototype.slice.call(arguments));
        return fn.apply(null, evenmoreargs);
      };
  },
  //
  // curryIt : function(fn) {
  //
  // }
};
