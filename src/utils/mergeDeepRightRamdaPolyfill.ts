const _isPlaceholder = (a: any) => {
  return (
    a != null && typeof a === 'object' && a['@@functional/placeholder'] === true
  );
};

const _isObject = (x: any) => {
  return Object.prototype.toString.call(x) === '[object Object]';
};

const _has = (prop: any, obj: any) => {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

const _curry1 = (fn: any) => {
  const f1 = (...args: any) => {
    if (args.length === 0 || _isPlaceholder(args.a)) {
      return f1;
    } else {
      return fn.apply(this, args);
    }
  };
  return f1;
};

const _curry2 = (fn: any) => {
  return function f2(a: any, b: any) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a)
          ? f2
          : _curry1(function (_b: any) {
              return fn(a, _b);
            });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b)
          ? f2
          : _isPlaceholder(a)
          ? _curry1(function (_a: any) {
              return fn(_a, b);
            })
          : _isPlaceholder(b)
          ? _curry1(function (_b: any) {
              return fn(a, _b);
            })
          : fn(a, b);
    }
  };
};

const _curry3 = (fn: any) => {
  return function f3(a: any, b: any, c: any) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a)
          ? f3
          : _curry2(function (_b: any, _c: any) {
              return fn(a, _b, _c);
            });
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b)
          ? f3
          : _isPlaceholder(a)
          ? _curry2(function (_a: any, _c: any) {
              return fn(_a, b, _c);
            })
          : _isPlaceholder(b)
          ? _curry2(function (_b: any, _c: any) {
              return fn(a, _b, _c);
            })
          : _curry1(function (_c: any) {
              return fn(a, b, _c);
            });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c)
          ? f3
          : _isPlaceholder(a) && _isPlaceholder(b)
          ? _curry2(function (_a: any, _b: any) {
              return fn(_a, _b, c);
            })
          : _isPlaceholder(a) && _isPlaceholder(c)
          ? _curry2(function (_a: any, _c: any) {
              return fn(_a, b, _c);
            })
          : _isPlaceholder(b) && _isPlaceholder(c)
          ? _curry2(function (_b: any, _c: any) {
              return fn(a, _b, _c);
            })
          : _isPlaceholder(a)
          ? _curry1(function (_a: any) {
              return fn(_a, b, c);
            })
          : _isPlaceholder(b)
          ? _curry1(function (_b: any) {
              return fn(a, _b, c);
            })
          : _isPlaceholder(c)
          ? _curry1(function (_c: any) {
              return fn(a, b, _c);
            })
          : fn(a, b, c);
    }
  };
};

const mergeWithKey = _curry3(function mergeWithKey(fn: any, l: any, r: any) {
  const result = {} as any;
  let k;

  for (k in l) {
    if (_has(k, l)) {
      result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
    }
  }

  for (k in r) {
    if (_has(k, r) && !_has(k, result)) {
      result[k] = r[k];
    }
  }

  return result;
});

const mergeDeepWithKey = _curry3(function mergeDeepWithKey(
  fn: any,
  lObj: any,
  rObj: any
) {
  return mergeWithKey(
    function (k: any, lVal: any, rVal: any) {
      if (_isObject(lVal) && _isObject(rVal)) {
        return mergeDeepWithKey(fn, lVal, rVal);
      } else {
        return fn(k, lVal, rVal);
      }
    },
    lObj,
    rObj
  );
});

export const mergeDeepRight = _curry2(function mergeDeepRight(
  lObj: any,
  rObj: any
) {
  return mergeDeepWithKey(
    function (k: any, lVal: any, rVal: any) {
      return rVal;
    },
    lObj,
    rObj
  );
});
