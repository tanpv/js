// caching 1
/**
function slow(x) {
  alert(`called with ${x}`);
  return x;
}

function cachingDecorator(func){
  let cache = new Map();

  return function(x) {
    if(cache.has(x)){
      return cache.get(x);
    }

    let result = func(x);

    cache.set(x, result);
    return result;
  };
}

slow = cachingDecorator(slow);

alert( slow(1) );
alert( 'again: ' + slow(1) );
 */

