/* Polyfill service v3.110.1
 * For detailed credits and licence information see https://github.com/JakeChampion/polyfill-service.
 * 
 * Features requested: DOMTokenList,DOMTokenList.prototype.@@iterator,DOMTokenList.prototype.forEach,Element.prototype.placeholder,Element.prototype.prepend,Element.prototype.remove,Element.prototype.scroll,Map,NodeList.prototype.@@iterator,NodeList.prototype.forEach,Object.entries,Object.values,Symbol,Symbol.iterator,Symbol.match,Symbol.matchAll,Symbol.replace,Symbol.search,Symbol.split,URLSearchParams,default,es2016,es2017,es2018,es2019,es2020,es2021,es2022,es5,es6,es7,fetch,scroll
 * 
 * - ArrayBuffer, License: MIT
 * - Date.now, License: CC0
 * - Date.prototype.toISOString, License: CC0
 * - JSON, License: MIT
 * - Object.defineProperty, License: CC0
 * - Function.prototype.name, License: MIT
 * - Number.Epsilon, License: MIT
 * - Number.MAX_SAFE_INTEGER, License: MIT
 * - Number.MIN_SAFE_INTEGER, License: MIT
 * - Reflect, License: CC0
 * - Window, License: CC0
 * - _ESAbstract.ArrayCreate, License: CC0
 * - _ESAbstract.Call, License: CC0
 * - _ESAbstract.CreateDataProperty, License: CC0
 * - _ESAbstract.CreateDataPropertyOrThrow, License: CC0
 * - _ESAbstract.CreateMethodProperty, License: CC0
 * - Math.acosh, License: CC0
 * - Math.asinh, License: CC0
 * - Math.atanh, License: CC0
 * - Math.cbrt, License: CC0
 * - Math.cosh, License: CC0
 * - Math.expm1, License: CC0
 * - Math.fround, License: CC0
 * - Math.hypot, License: CC0
 * - Math.log10, License: CC0
 * - Math.log1p, License: CC0
 * - Math.log2, License: CC0
 * - Math.sign, License: CC0
 * - Math.sinh, License: CC0
 * - Math.tanh, License: CC0
 * - Math.trunc, License: CC0
 * - Object.freeze, License: CC0
 * - Object.getPrototypeOf, License: CC0
 * - Object.keys, License: MIT
 * - _ESAbstract.Get, License: CC0
 * - _ESAbstract.HasOwnProperty, License: CC0
 * - _ESAbstract.HasProperty, License: CC0
 * - _ESAbstract.IsArray, License: CC0
 * - Array.isArray, License: CC0
 * - _ESAbstract.IsCallable, License: CC0
 * - Function.prototype.bind, License: MIT
 * - _ESAbstract.RequireObjectCoercible, License: CC0
 * - _ESAbstract.SameValueNonNumber, License: CC0
 * - _ESAbstract.ToBoolean, License: CC0
 * - _ESAbstract.ToNumber, License: CC0
 * - _ESAbstract.ToIntegerOrInfinity, License: CC0
 * - _ESAbstract.ToObject, License: CC0
 * - _ESAbstract.GetV, License: CC0
 * - _ESAbstract.GetMethod, License: CC0
 * - _ESAbstract.Invoke, License: CC0
 * - _ESAbstract.ToUint32, License: CC0
 * - Math.clz32, License: CC0
 * - Math.imul, License: CC0
 * - _ESAbstract.Type, License: CC0
 * - Number.isFinite, License: MIT
 * - Number.isNaN, License: MIT
 * - Object.isExtensible, License: CC0
 * - Object.seal, License: MIT
 * - RegExp.prototype.flags, License: MIT
 * - _ESAbstract.CreateIterResultObject, License: CC0
 * - _ESAbstract.GetPrototypeFromConstructor, License: CC0
 * - _ESAbstract.GetSubstitution, License: CC0
 * - _ESAbstract.IsConstructor, License: CC0
 * - _ESAbstract.IsRegExp, License: CC0
 * - _ESAbstract.IteratorClose, License: CC0
 * - _ESAbstract.IteratorComplete, License: CC0
 * - _ESAbstract.IteratorNext, License: CC0
 * - _ESAbstract.IteratorStep, License: CC0
 * - _ESAbstract.IteratorValue, License: CC0
 * - _ESAbstract.OrdinaryToPrimitive, License: CC0
 * - _ESAbstract.RegExpExec, License: CC0
 * - _ESAbstract.SameValue, License: CC0
 * - Object.is, License: CC0
 * - _ESAbstract.SameValueZero, License: CC0
 * - _ESAbstract.SpeciesConstructor, License: CC0
 * - _ESAbstract.StringIndexOf, License: CC0
 * - _ESAbstract.ToInteger, License: CC0
 * - Array.prototype.copyWithin, License: MIT
 * - Number.isInteger, License: MIT
 * - Number.isSafeInteger, License: MIT
 * - _ESAbstract.ToLength, License: CC0
 * - _ESAbstract.LengthOfArrayLike, License: CC0
 * - _ESAbstract.ToPrimitive, License: CC0
 * - _ESAbstract.ToString, License: CC0
 * - Array.prototype.at, License: CC0
 * - Array.prototype.every, License: CC0
 * - Array.prototype.fill, License: CC0
 * - Array.prototype.find, License: CC0
 * - Array.prototype.findIndex, License: CC0
 * - Array.prototype.forEach, License: CC0
 * - NodeList.prototype.forEach, License: CC0
 * - _DOMTokenList, License: ISC
 * - DOMTokenList, License: CC0
 * - Array.prototype.includes, License: MIT
 * - Array.prototype.indexOf, License: CC0
 * - Object.getOwnPropertyNames, License: CC0
 * - Array.prototype.lastIndexOf, License: CC0
 * - Array.prototype.reduce, License: CC0
 * - Array.prototype.reduceRight, License: CC0
 * - Array.prototype.some, License: CC0
 * - String.prototype.at, License: CC0
 * - String.prototype.endsWith, License: CC0
 * - String.prototype.includes, License: CC0
 * - String.prototype.padEnd, License: CC0
 * - String.prototype.padStart, License: CC0
 * - String.prototype.repeat, License: CC0
 * - String.prototype.startsWith, License: CC0
 * - TypedArray.prototype.at, License: CC0
 * - _ESAbstract.FlattenIntoArray, License: CC0
 * - _ESAbstract.ToPropertyKey, License: CC0
 * - Object.getOwnPropertyDescriptor, License: CC0
 * - Object.assign, License: CC0
 * - Object.defineProperties, License: CC0
 * - Object.create, License: CC0
 * - DocumentFragment, License: CC0
 * - _ESAbstract.OrdinaryCreateFromConstructor, License: CC0
 * - _ESAbstract.Construct, License: CC0
 * - Array.of, License: CC0
 * - _ESAbstract.ArraySpeciesCreate, License: CC0
 * - Array.prototype.filter, License: CC0
 * - Array.prototype.flat, License: CC0
 * - Array.prototype.flatMap, License: CC0
 * - Array.prototype.map, License: CC0
 * - Array.prototype.sort, License: MIT
 * - Object.values, License: CC0
 * - Object.setPrototypeOf, License: MIT
 * - Symbol, License: MIT
 * - Reflect.ownKeys, License: CC0
 * - Object.getOwnPropertyDescriptors, License: CC0
 * - Symbol.asyncIterator, License: MIT
 * - Symbol.hasInstance, License: MIT
 * - Symbol.isConcatSpreadable, License: MIT
 * - Symbol.iterator, License: MIT
 * - _ESAbstract.GetIterator, License: CC0
 * - _ESAbstract.AddEntriesFromIterable, License: CC0
 * - _ESAbstract.IterableToList, License: CC0
 * - AggregateError, License: MIT
 * - Symbol.match, License: MIT
 * - Symbol.matchAll, License: MIT
 * - Symbol.replace, License: MIT
 * - String.prototype.replaceAll, License: MIT
 * - Symbol.search, License: MIT
 * - Symbol.species, License: MIT
 * - Map, License: CC0
 * - Set, License: CC0
 * - Array.from, License: CC0
 * - URL, License: CC0-1.0
 * - Symbol.split, License: MIT
 * - Symbol.toPrimitive, License: MIT
 * - Symbol.toStringTag, License: MIT
 * - Promise, License: MIT
 * - Promise.allSettled, License: MIT
 * - Promise.any, License: MIT
 * - Promise.prototype.finally, License: MIT
 * - Symbol.unscopables, License: MIT
 * - WeakMap, License: MIT
 * - WeakSet, License: MIT
 * - _ESAbstract.EnumerableOwnProperties, License: CC0
 * - Object.entries, License: CC0
 * - _ESAbstract.TrimString, License: CC0
 * - String.prototype.trim, License: CC0
 * - Number.parseFloat, License: MIT
 * - Number.parseInt, License: MIT
 * - String.prototype.trimEnd, License: CC0
 * - String.prototype.trimStart, License: CC0
 * - _ESAbstract.UTF16Decode, License: CC0
 * - String.prototype.codePointAt, License: MIT
 * - _ESAbstract.AdvanceStringIndex, License: CC0
 * - _ESAbstract.CreateRegExpStringIterator, License: CC0
 * - RegExp.prototype.@@matchAll, License: MIT
 * - String.prototype.matchAll, License: MIT
 * - _ESAbstract.UTF16Encoding, License: CC0
 * - String.fromCodePoint, License: MIT
 * - _Iterator, License: MIT
 * - _ArrayIterator, License: MIT
 * - Array.prototype.entries, License: CC0
 * - Array.prototype.keys, License: CC0
 * - Array.prototype.values, License: MIT
 * - Array.prototype.@@iterator, License: CC0
 * - Object.fromEntries, License: CC0
 * - NodeList.prototype.@@iterator, License: MIT
 * - _StringIterator, License: MIT
 * - String.prototype.@@iterator, License: CC0
 * - atob, License: MIT
 * - document, License: CC0
 * - Element, License: CC0
 * - Element.prototype.classList, License: ISC
 * - DOMTokenList.prototype.@@iterator, License: MIT
 * - DOMTokenList.prototype.forEach, License: MIT
 * - Element.prototype.cloneNode, License: CC0
 * - Node.prototype.contains, License: CC0
 * - Node.prototype.isSameNode, License: CC0
 * - Event, License: CC0
 * - CustomEvent, License: CC0
 * - Event.focusin, License: CC0
 * - Event.hashchange, License: CC0
 * - XMLHttpRequest, License: CC0
 * - _mutation, License: CC0
 * - DocumentFragment.prototype.append, License: CC0
 * - DocumentFragment.prototype.prepend, License: CC0
 * - Element.prototype.after, License: CC0
 * - Element.prototype.append, License: CC0
 * - Element.prototype.before, License: CC0
 * - Element.prototype.prepend, License: CC0
 * - Element.prototype.remove, License: CC0
 * - Element.prototype.replaceWith, License: CC0
 * - document.querySelector, License: CC0
 * - Element.prototype.matches, License: CC0
 * - Element.prototype.closest, License: CC0
 * - Element.prototype.placeholder, License: CC0
 * - document.visibilityState, License: CC0
 * - fetch, License: MIT
 * - getComputedStyle, License: CC0
 * - location.origin, License: CC0
 * - requestAnimationFrame, License: MIT
 * - smoothscroll, License: MIT
 * - ~html5-elements, License: MIT */

(function(self, undefined) {

// ArrayBuffer
/*
 Copyright (c) 2010, Linden Research, Inc.
 Copyright (c) 2014, Joshua Bell

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 $/LicenseInfo$
 */

// Original can be found at:
//   https://bitbucket.org/lindenlab/llsd
// Modifications by Joshua Bell inexorabletash@gmail.com
//   https://github.com/inexorabletash/polyfill

// ES3/ES5 implementation of the Krhonos Typed Array Specification
//   Ref: http://www.khronos.org/registry/typedarray/specs/latest/
//   Date: 2011-02-01
//
// Variations:
//  * Allows typed_array.get/set() as alias for subscripts (typed_array[])
//  * Gradually migrating structure from Khronos spec to ES2015 spec
//
// Caveats:
//  * Beyond 10000 or so entries, polyfilled array accessors (ta[0],
//    etc) become memory-prohibitive, so array creation will fail. Set
//    self.TYPED_ARRAY_POLYFILL_NO_ARRAY_ACCESSORS=true to disable
//    creation of accessors. Your code will need to use the
//    non-standard get()/set() instead, and will need to add those to
//    native arrays for interop.
(function(global) {
  'use strict';
  var undefined = (void 0); // Paranoia

  // Beyond this value, index getters/setters (i.e. array[0], array[1]) are so slow to
  // create, and consume so much memory, that the browser appears frozen.
  var MAX_ARRAY_LENGTH = 1e5;

  // Approximations of internal ECMAScript conversion functions
  function Type(v) {
    switch(typeof v) {
    case 'undefined': return 'undefined';
    case 'boolean': return 'boolean';
    case 'number': return 'number';
    case 'string': return 'string';
    default: return v === null ? 'null' : 'object';
    }
  }

  // Class returns internal [[Class]] property, used to avoid cross-frame instanceof issues:
  function Class(v) { return Object.prototype.toString.call(v).replace(/^\[object *|\]$/g, ''); }
  function IsCallable(o) { return typeof o === 'function'; }
  function ToObject(v) {
    if (v === null || v === undefined) throw TypeError();
    return Object(v);
  }
  function ToInt32(v) { return v >> 0; }
  function ToUint32(v) { return v >>> 0; }

  // Snapshot intrinsics
  var LN2 = Math.LN2,
      abs = Math.abs,
      floor = Math.floor,
      log = Math.log,
      max = Math.max,
      min = Math.min,
      pow = Math.pow,
      round = Math.round;

  // emulate ES5 getter/setter API using legacy APIs
  // http://blogs.msdn.com/b/ie/archive/2010/09/07/transitioning-existing-code-to-the-es5-getter-setter-apis.aspx
  // (second clause tests for Object.defineProperty() in IE<9 that only supports extending DOM prototypes, but
  // note that IE<9 does not support __defineGetter__ or __defineSetter__ so it just renders the method harmless)

  (function() {
    var orig = Object.defineProperty;
    var dom_only = !(function(){try{return Object.defineProperty({},'x',{});}catch(_){return false;}}());

    if (!orig || dom_only) {
      Object.defineProperty = function (o, prop, desc) {
        // In IE8 try built-in implementation for defining properties on DOM prototypes.
        if (orig)
          try { return orig(o, prop, desc); } catch (_) {}
        if (o !== Object(o))
          throw TypeError('Object.defineProperty called on non-object');
        if (Object.prototype.__defineGetter__ && ('get' in desc))
          Object.prototype.__defineGetter__.call(o, prop, desc.get);
        if (Object.prototype.__defineSetter__ && ('set' in desc))
          Object.prototype.__defineSetter__.call(o, prop, desc.set);
        if ('value' in desc)
          o[prop] = desc.value;
        return o;
      };
    }
  }());

  // ES5: Make obj[index] an alias for obj._getter(index)/obj._setter(index, value)
  // for index in 0 ... obj.length
  function makeArrayAccessors(obj) {
    if ('TYPED_ARRAY_POLYFILL_NO_ARRAY_ACCESSORS' in global)
      return;

    if (obj.length > MAX_ARRAY_LENGTH) throw RangeError('Array too large for polyfill');

    function makeArrayAccessor(index) {
      try {
        Object.defineProperty(obj, index, {
          'get': function() { return obj._getter(index); },
          'set': function(v) { obj._setter(index, v); },
          enumerable: true,
          configurable: false
        });
      } catch (_){ }
    }

    var i;
    for (i = 0; i < obj.length; i += 1) {
      makeArrayAccessor(i);
    }
  }

  // Internal conversion functions:
  //    pack<Type>()   - take a number (interpreted as Type), output a byte array
  //    unpack<Type>() - take a byte array, output a Type-like number

  function as_signed(value, bits) { var s = 32 - bits; return (value << s) >> s; }
  function as_unsigned(value, bits) { var s = 32 - bits; return (value << s) >>> s; }

  function packI8(n) { return [n & 0xff]; }
  function unpackI8(bytes) { return as_signed(bytes[0], 8); }

  function packU8(n) { return [n & 0xff]; }
  function unpackU8(bytes) { return as_unsigned(bytes[0], 8); }

  function packU8Clamped(n) { n = round(Number(n)); return [n < 0 ? 0 : n > 0xff ? 0xff : n & 0xff]; }

  function packI16(n) { return [n & 0xff, (n >> 8) & 0xff]; }
  function unpackI16(bytes) { return as_signed(bytes[1] << 8 | bytes[0], 16); }

  function packU16(n) { return [n & 0xff, (n >> 8) & 0xff]; }
  function unpackU16(bytes) { return as_unsigned(bytes[1] << 8 | bytes[0], 16); }

  function packI32(n) { return [n & 0xff, (n >> 8) & 0xff, (n >> 16) & 0xff, (n >> 24) & 0xff]; }
  function unpackI32(bytes) { return as_signed(bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0], 32); }

  function packU32(n) { return [n & 0xff, (n >> 8) & 0xff, (n >> 16) & 0xff, (n >> 24) & 0xff]; }
  function unpackU32(bytes) { return as_unsigned(bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0], 32); }

  function packIEEE754(v, ebits, fbits) {

    var bias = (1 << (ebits - 1)) - 1;

    function roundToEven(n) {
      var w = floor(n), f = n - w;
      if (f < 0.5)
        return w;
      if (f > 0.5)
        return w + 1;
      return w % 2 ? w + 1 : w;
    }

    // Compute sign, exponent, fraction
    var s, e, f;
    if (v !== v) {
      // NaN
      // http://dev.w3.org/2006/webapi/WebIDL/#es-type-mapping
      e = (1 << ebits) - 1; f = pow(2, fbits - 1); s = 0;
    } else if (v === Infinity || v === -Infinity) {
      e = (1 << ebits) - 1; f = 0; s = (v < 0) ? 1 : 0;
    } else if (v === 0) {
      e = 0; f = 0; s = (1 / v === -Infinity) ? 1 : 0;
    } else {
      s = v < 0;
      v = abs(v);

      if (v >= pow(2, 1 - bias)) {
        // Normalized
        e = min(floor(log(v) / LN2), 1023);
        var significand = v / pow(2, e);
        if (significand < 1) {
          e -= 1;
          significand *= 2;
        }
        if (significand >= 2) {
          e += 1;
          significand /= 2;
        }
        var d = pow(2, fbits);
        f = roundToEven(significand * d) - d;
        e += bias;
        if (f / d >= 1) {
          e += 1;
          f = 0;
        }
        if (e > 2 * bias) {
          // Overflow
          e = (1 << ebits) - 1;
          f = 0;
        }
      } else {
        // Denormalized
        e = 0;
        f = roundToEven(v / pow(2, 1 - bias - fbits));
      }
    }

    // Pack sign, exponent, fraction
    var bits = [], i;
    for (i = fbits; i; i -= 1) { bits.push(f % 2 ? 1 : 0); f = floor(f / 2); }
    for (i = ebits; i; i -= 1) { bits.push(e % 2 ? 1 : 0); e = floor(e / 2); }
    bits.push(s ? 1 : 0);
    bits.reverse();
    var str = bits.join('');

    // Bits to bytes
    var bytes = [];
    while (str.length) {
      bytes.unshift(parseInt(str.substring(0, 8), 2));
      str = str.substring(8);
    }
    return bytes;
  }

  function unpackIEEE754(bytes, ebits, fbits) {
    // Bytes to bits
    var bits = [], i, j, b, str,
        bias, s, e, f;

    for (i = 0; i < bytes.length; ++i) {
      b = bytes[i];
      for (j = 8; j; j -= 1) {
        bits.push(b % 2 ? 1 : 0); b = b >> 1;
      }
    }
    bits.reverse();
    str = bits.join('');

    // Unpack sign, exponent, fraction
    bias = (1 << (ebits - 1)) - 1;
    s = parseInt(str.substring(0, 1), 2) ? -1 : 1;
    e = parseInt(str.substring(1, 1 + ebits), 2);
    f = parseInt(str.substring(1 + ebits), 2);

    // Produce number
    if (e === (1 << ebits) - 1) {
      return f !== 0 ? NaN : s * Infinity;
    } else if (e > 0) {
      // Normalized
      return s * pow(2, e - bias) * (1 + f / pow(2, fbits));
    } else if (f !== 0) {
      // Denormalized
      return s * pow(2, -(bias - 1)) * (f / pow(2, fbits));
    } else {
      return s < 0 ? -0 : 0;
    }
  }

  function unpackF64(b) { return unpackIEEE754(b, 11, 52); }
  function packF64(v) { return packIEEE754(v, 11, 52); }
  function unpackF32(b) { return unpackIEEE754(b, 8, 23); }
  function packF32(v) { return packIEEE754(v, 8, 23); }

  //
  // 3 The ArrayBuffer Type
  //

  (function() {

    function ArrayBuffer(length) {
      length = ToInt32(length);
      if (length < 0) throw RangeError('ArrayBuffer size is not a small enough positive integer.');
      Object.defineProperty(this, 'byteLength', {value: length});
      Object.defineProperty(this, '_bytes', {value: Array(length)});

      for (var i = 0; i < length; i += 1)
        this._bytes[i] = 0;
    }

    global.ArrayBuffer = global.ArrayBuffer || ArrayBuffer;

    //
    // 5 The Typed Array View Types
    //

    function $TypedArray$() {

      // %TypedArray% ( length )
      if (!arguments.length || typeof arguments[0] !== 'object') {
        return (function(length) {
          length = ToInt32(length);
          if (length < 0) throw RangeError('length is not a small enough positive integer.');
          Object.defineProperty(this, 'length', {value: length});
          Object.defineProperty(this, 'byteLength', {value: length * this.BYTES_PER_ELEMENT});
          Object.defineProperty(this, 'buffer', {value: new ArrayBuffer(this.byteLength)});
          Object.defineProperty(this, 'byteOffset', {value: 0});

         }).apply(this, arguments);
      }

      // %TypedArray% ( typedArray )
      if (arguments.length >= 1 &&
          Type(arguments[0]) === 'object' &&
          arguments[0] instanceof $TypedArray$) {
        return (function(typedArray){
          if (this.constructor !== typedArray.constructor) throw TypeError();

          var byteLength = typedArray.length * this.BYTES_PER_ELEMENT;
          Object.defineProperty(this, 'buffer', {value: new ArrayBuffer(byteLength)});
          Object.defineProperty(this, 'byteLength', {value: byteLength});
          Object.defineProperty(this, 'byteOffset', {value: 0});
          Object.defineProperty(this, 'length', {value: typedArray.length});

          for (var i = 0; i < this.length; i += 1)
            this._setter(i, typedArray._getter(i));

        }).apply(this, arguments);
      }

      // %TypedArray% ( array )
      if (arguments.length >= 1 &&
          Type(arguments[0]) === 'object' &&
          !(arguments[0] instanceof $TypedArray$) &&
          !(arguments[0] instanceof ArrayBuffer || Class(arguments[0]) === 'ArrayBuffer')) {
        return (function(array) {

          var byteLength = array.length * this.BYTES_PER_ELEMENT;
          Object.defineProperty(this, 'buffer', {value: new ArrayBuffer(byteLength)});
          Object.defineProperty(this, 'byteLength', {value: byteLength});
          Object.defineProperty(this, 'byteOffset', {value: 0});
          Object.defineProperty(this, 'length', {value: array.length});

          for (var i = 0; i < this.length; i += 1) {
            var s = array[i];
            this._setter(i, Number(s));
          }
        }).apply(this, arguments);
      }

      // %TypedArray% ( buffer, byteOffset=0, length=undefined )
      if (arguments.length >= 1 &&
          Type(arguments[0]) === 'object' &&
          (arguments[0] instanceof ArrayBuffer || Class(arguments[0]) === 'ArrayBuffer')) {
        return (function(buffer, byteOffset, length) {

          byteOffset = ToUint32(byteOffset);
          if (byteOffset > buffer.byteLength)
            throw RangeError('byteOffset out of range');

          // The given byteOffset must be a multiple of the element
          // size of the specific type, otherwise an exception is raised.
          if (byteOffset % this.BYTES_PER_ELEMENT)
            throw RangeError('buffer length minus the byteOffset is not a multiple of the element size.');

          if (length === undefined) {
            var byteLength = buffer.byteLength - byteOffset;
            if (byteLength % this.BYTES_PER_ELEMENT)
              throw RangeError('length of buffer minus byteOffset not a multiple of the element size');
            length = byteLength / this.BYTES_PER_ELEMENT;

          } else {
            length = ToUint32(length);
            byteLength = length * this.BYTES_PER_ELEMENT;
          }

          if ((byteOffset + byteLength) > buffer.byteLength)
            throw RangeError('byteOffset and length reference an area beyond the end of the buffer');

          Object.defineProperty(this, 'buffer', {value: buffer});
          Object.defineProperty(this, 'byteLength', {value: byteLength});
          Object.defineProperty(this, 'byteOffset', {value: byteOffset});
          Object.defineProperty(this, 'length', {value: length});

        }).apply(this, arguments);
      }

      // %TypedArray% ( all other argument combinations )
      throw TypeError();
    }

    // Properties of the %TypedArray Instrinsic Object

    // %TypedArray%.from ( source , mapfn=undefined, thisArg=undefined )
    Object.defineProperty($TypedArray$, 'from', {value: function(iterable) {
      return new this(iterable);
    }});

    // %TypedArray%.of ( ...items )
    Object.defineProperty($TypedArray$, 'of', {value: function(/*...items*/) {
      return new this(arguments);
    }});

    // %TypedArray%.prototype
    var $TypedArrayPrototype$ = {};
    $TypedArray$.prototype = $TypedArrayPrototype$;

    // WebIDL: getter type (unsigned long index);
    Object.defineProperty($TypedArray$.prototype, '_getter', {value: function(index) {
      if (arguments.length < 1) throw SyntaxError('Not enough arguments');

      index = ToUint32(index);
      if (index >= this.length)
        return undefined;

      var bytes = [], i, o;
      for (i = 0, o = this.byteOffset + index * this.BYTES_PER_ELEMENT;
           i < this.BYTES_PER_ELEMENT;
           i += 1, o += 1) {
        bytes.push(this.buffer._bytes[o]);
      }
      return this._unpack(bytes);
    }});

    // NONSTANDARD: convenience alias for getter: type get(unsigned long index);
    Object.defineProperty($TypedArray$.prototype, 'get', {value: $TypedArray$.prototype._getter});

    // WebIDL: setter void (unsigned long index, type value);
    Object.defineProperty($TypedArray$.prototype, '_setter', {value: function(index, value) {
      if (arguments.length < 2) throw SyntaxError('Not enough arguments');

      index = ToUint32(index);
      if (index >= this.length)
        return;

      var bytes = this._pack(value), i, o;
      for (i = 0, o = this.byteOffset + index * this.BYTES_PER_ELEMENT;
           i < this.BYTES_PER_ELEMENT;
           i += 1, o += 1) {
        this.buffer._bytes[o] = bytes[i];
      }
    }});

    // get %TypedArray%.prototype.buffer
    // get %TypedArray%.prototype.byteLength
    // get %TypedArray%.prototype.byteOffset
    // -- applied directly to the object in the constructor

    // %TypedArray%.prototype.constructor
    Object.defineProperty($TypedArray$.prototype, 'constructor', {value: $TypedArray$});

    // %TypedArray%.prototype.copyWithin (target, start, end = this.length )
    Object.defineProperty($TypedArray$.prototype, 'copyWithin', {value: function(target, start) {
      var end = arguments[2];

      var o = ToObject(this);
      var lenVal = o.length;
      var len = ToUint32(lenVal);
      len = max(len, 0);
      var relativeTarget = ToInt32(target);
      var to;
      if (relativeTarget < 0)
        to = max(len + relativeTarget, 0);
      else
        to = min(relativeTarget, len);
      var relativeStart = ToInt32(start);
      var from;
      if (relativeStart < 0)
        from = max(len + relativeStart, 0);
      else
        from = min(relativeStart, len);
      var relativeEnd;
      if (end === undefined)
        relativeEnd = len;
      else
        relativeEnd = ToInt32(end);
      var final;
      if (relativeEnd < 0)
        final = max(len + relativeEnd, 0);
      else
        final = min(relativeEnd, len);
      var count = min(final - from, len - to);
      var direction;
      if (from < to && to < from + count) {
        direction = -1;
        from = from + count - 1;
        to = to + count - 1;
      } else {
        direction = 1;
      }
      while (count > 0) {
        o._setter(to, o._getter(from));
        from = from + direction;
        to = to + direction;
        count = count - 1;
      }
      return o;
    }});

    // %TypedArray%.prototype.entries ( )
    // -- defined in es6.js to shim browsers w/ native TypedArrays

    // %TypedArray%.prototype.every ( callbackfn, thisArg = undefined )
    Object.defineProperty($TypedArray$.prototype, 'every', {value: function(callbackfn) {
      if (this === undefined || this === null) throw TypeError();
      var t = Object(this);
      var len = ToUint32(t.length);
      if (!IsCallable(callbackfn)) throw TypeError();
      var thisArg = arguments[1];
      for (var i = 0; i < len; i++) {
        if (!callbackfn.call(thisArg, t._getter(i), i, t))
          return false;
      }
      return true;
    }});

    // %TypedArray%.prototype.fill (value, start = 0, end = this.length )
    Object.defineProperty($TypedArray$.prototype, 'fill', {value: function(value) {
      var start = arguments[1],
          end = arguments[2];

      var o = ToObject(this);
      var lenVal = o.length;
      var len = ToUint32(lenVal);
      len = max(len, 0);
      var relativeStart = ToInt32(start);
      var k;
      if (relativeStart < 0)
        k = max((len + relativeStart), 0);
      else
        k = min(relativeStart, len);
      var relativeEnd;
      if (end === undefined)
        relativeEnd = len;
      else
        relativeEnd = ToInt32(end);
      var final;
      if (relativeEnd < 0)
        final = max((len + relativeEnd), 0);
      else
        final = min(relativeEnd, len);
      while (k < final) {
        o._setter(k, value);
        k += 1;
      }
      return o;
    }});

    // %TypedArray%.prototype.filter ( callbackfn, thisArg = undefined )
    Object.defineProperty($TypedArray$.prototype, 'filter', {value: function(callbackfn) {
      if (this === undefined || this === null) throw TypeError();
      var t = Object(this);
      var len = ToUint32(t.length);
      if (!IsCallable(callbackfn)) throw TypeError();
      var res = [];
      var thisp = arguments[1];
      for (var i = 0; i < len; i++) {
        var val = t._getter(i); // in case fun mutates this
        if (callbackfn.call(thisp, val, i, t))
          res.push(val);
      }
      return new this.constructor(res);
    }});

    // %TypedArray%.prototype.find (predicate, thisArg = undefined)
    Object.defineProperty($TypedArray$.prototype, 'find', {value: function(predicate) {
      var o = ToObject(this);
      var lenValue = o.length;
      var len = ToUint32(lenValue);
      if (!IsCallable(predicate)) throw TypeError();
      var t = arguments.length > 1 ? arguments[1] : undefined;
      var k = 0;
      while (k < len) {
        var kValue = o._getter(k);
        var testResult = predicate.call(t, kValue, k, o);
        if (Boolean(testResult))
          return kValue;
        ++k;
      }
      return undefined;
    }});

    // %TypedArray%.prototype.findIndex ( predicate, thisArg = undefined )
    Object.defineProperty($TypedArray$.prototype, 'findIndex', {value: function(predicate) {
      var o = ToObject(this);
      var lenValue = o.length;
      var len = ToUint32(lenValue);
      if (!IsCallable(predicate)) throw TypeError();
      var t = arguments.length > 1 ? arguments[1] : undefined;
      var k = 0;
      while (k < len) {
        var kValue = o._getter(k);
        var testResult = predicate.call(t, kValue, k, o);
        if (Boolean(testResult))
          return k;
        ++k;
      }
      return -1;
    }});

    // %TypedArray%.prototype.forEach ( callbackfn, thisArg = undefined )
    Object.defineProperty($TypedArray$.prototype, 'forEach', {value: function(callbackfn) {
      if (this === undefined || this === null) throw TypeError();
      var t = Object(this);
      var len = ToUint32(t.length);
      if (!IsCallable(callbackfn)) throw TypeError();
      var thisp = arguments[1];
      for (var i = 0; i < len; i++)
        callbackfn.call(thisp, t._getter(i), i, t);
    }});

    // %TypedArray%.prototype.indexOf (searchElement, fromIndex = 0 )
    Object.defineProperty($TypedArray$.prototype, 'indexOf', {value: function(searchElement) {
      if (this === undefined || this === null) throw TypeError();
      var t = Object(this);
      var len = ToUint32(t.length);
      if (len === 0) return -1;
      var n = 0;
      if (arguments.length > 0) {
        n = Number(arguments[1]);
        if (n !== n) {
          n = 0;
        } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
          n = (n > 0 || -1) * floor(abs(n));
        }
      }
      if (n >= len) return -1;
      var k = n >= 0 ? n : max(len - abs(n), 0);
      for (; k < len; k++) {
        if (t._getter(k) === searchElement) {
          return k;
        }
      }
      return -1;
    }});

    // %TypedArray%.prototype.join ( separator )
    Object.defineProperty($TypedArray$.prototype, 'join', {value: function(separator) {
      if (this === undefined || this === null) throw TypeError();
      var t = Object(this);
      var len = ToUint32(t.length);
      var tmp = Array(len);
      for (var i = 0; i < len; ++i)
        tmp[i] = t._getter(i);
      return tmp.join(separator === undefined ? ',' : separator); // Hack for IE7
    }});

    // %TypedArray%.prototype.keys ( )
    // -- defined in es6.js to shim browsers w/ native TypedArrays

    // %TypedArray%.prototype.lastIndexOf ( searchElement, fromIndex = this.length-1 )
    Object.defineProperty($TypedArray$.prototype, 'lastIndexOf', {value: function(searchElement) {
      if (this === undefined || this === null) throw TypeError();
      var t = Object(this);
      var len = ToUint32(t.length);
      if (len === 0) return -1;
      var n = len;
      if (arguments.length > 1) {
        n = Number(arguments[1]);
        if (n !== n) {
          n = 0;
        } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
          n = (n > 0 || -1) * floor(abs(n));
        }
      }
      var k = n >= 0 ? min(n, len - 1) : len - abs(n);
      for (; k >= 0; k--) {
        if (t._getter(k) === searchElement)
          return k;
      }
      return -1;
    }});

    // get %TypedArray%.prototype.length
    // -- applied directly to the object in the constructor

    // %TypedArray%.prototype.map ( callbackfn, thisArg = undefined )
    Object.defineProperty($TypedArray$.prototype, 'map', {value: function(callbackfn) {
      if (this === undefined || this === null) throw TypeError();
      var t = Object(this);
      var len = ToUint32(t.length);
      if (!IsCallable(callbackfn)) throw TypeError();
      var res = []; res.length = len;
      var thisp = arguments[1];
      for (var i = 0; i < len; i++)
        res[i] = callbackfn.call(thisp, t._getter(i), i, t);
      return new this.constructor(res);
    }});

    // %TypedArray%.prototype.reduce ( callbackfn [, initialValue] )
    Object.defineProperty($TypedArray$.prototype, 'reduce', {value: function(callbackfn) {
      if (this === undefined || this === null) throw TypeError();
      var t = Object(this);
      var len = ToUint32(t.length);
      if (!IsCallable(callbackfn)) throw TypeError();
      // no value to return if no initial value and an empty array
      if (len === 0 && arguments.length === 1) throw TypeError();
      var k = 0;
      var accumulator;
      if (arguments.length >= 2) {
        accumulator = arguments[1];
      } else {
        accumulator = t._getter(k++);
      }
      while (k < len) {
        accumulator = callbackfn.call(undefined, accumulator, t._getter(k), k, t);
        k++;
      }
      return accumulator;
    }});

    // %TypedArray%.prototype.reduceRight ( callbackfn [, initialValue] )
    Object.defineProperty($TypedArray$.prototype, 'reduceRight', {value: function(callbackfn) {
      if (this === undefined || this === null) throw TypeError();
      var t = Object(this);
      var len = ToUint32(t.length);
      if (!IsCallable(callbackfn)) throw TypeError();
      // no value to return if no initial value, empty array
      if (len === 0 && arguments.length === 1) throw TypeError();
      var k = len - 1;
      var accumulator;
      if (arguments.length >= 2) {
        accumulator = arguments[1];
      } else {
        accumulator = t._getter(k--);
      }
      while (k >= 0) {
        accumulator = callbackfn.call(undefined, accumulator, t._getter(k), k, t);
        k--;
      }
      return accumulator;
    }});

    // %TypedArray%.prototype.reverse ( )
    Object.defineProperty($TypedArray$.prototype, 'reverse', {value: function() {
      if (this === undefined || this === null) throw TypeError();
      var t = Object(this);
      var len = ToUint32(t.length);
      var half = floor(len / 2);
      for (var i = 0, j = len - 1; i < half; ++i, --j) {
        var tmp = t._getter(i);
        t._setter(i, t._getter(j));
        t._setter(j, tmp);
      }
      return t;
    }});

    // %TypedArray%.prototype.set(array, offset = 0 )
    // %TypedArray%.prototype.set(typedArray, offset = 0 )
    // WebIDL: void set(TypedArray array, optional unsigned long offset);
    // WebIDL: void set(sequence<type> array, optional unsigned long offset);
    Object.defineProperty($TypedArray$.prototype, 'set', {value: function(index, value) {
      if (arguments.length < 1) throw SyntaxError('Not enough arguments');
      var array, sequence, offset, len,
          i, s, d,
          byteOffset, byteLength, tmp;

      if (typeof arguments[0] === 'object' && arguments[0].constructor === this.constructor) {
        // void set(TypedArray array, optional unsigned long offset);
        array = arguments[0];
        offset = ToUint32(arguments[1]);

        if (offset + array.length > this.length) {
          throw RangeError('Offset plus length of array is out of range');
        }

        byteOffset = this.byteOffset + offset * this.BYTES_PER_ELEMENT;
        byteLength = array.length * this.BYTES_PER_ELEMENT;

        if (array.buffer === this.buffer) {
          tmp = [];
          for (i = 0, s = array.byteOffset; i < byteLength; i += 1, s += 1) {
            tmp[i] = array.buffer._bytes[s];
          }
          for (i = 0, d = byteOffset; i < byteLength; i += 1, d += 1) {
            this.buffer._bytes[d] = tmp[i];
          }
        } else {
          for (i = 0, s = array.byteOffset, d = byteOffset;
               i < byteLength; i += 1, s += 1, d += 1) {
            this.buffer._bytes[d] = array.buffer._bytes[s];
          }
        }
      } else if (typeof arguments[0] === 'object' && typeof arguments[0].length !== 'undefined') {
        // void set(sequence<type> array, optional unsigned long offset);
        sequence = arguments[0];
        len = ToUint32(sequence.length);
        offset = ToUint32(arguments[1]);

        if (offset + len > this.length) {
          throw RangeError('Offset plus length of array is out of range');
        }

        for (i = 0; i < len; i += 1) {
          s = sequence[i];
          this._setter(offset + i, Number(s));
        }
      } else {
        throw TypeError('Unexpected argument type(s)');
      }
    }});

    // %TypedArray%.prototype.slice ( start, end )
    Object.defineProperty($TypedArray$.prototype, 'slice', {value: function(start, end) {
      var o = ToObject(this);
      var lenVal = o.length;
      var len = ToUint32(lenVal);
      var relativeStart = ToInt32(start);
      var k = (relativeStart < 0) ? max(len + relativeStart, 0) : min(relativeStart, len);
      var relativeEnd = (end === undefined) ? len : ToInt32(end);
      var final = (relativeEnd < 0) ? max(len + relativeEnd, 0) : min(relativeEnd, len);
      var count = final - k;
      var c = o.constructor;
      var a = new c(count);
      var n = 0;
      while (k < final) {
        var kValue = o._getter(k);
        a._setter(n, kValue);
        ++k;
        ++n;
      }
      return a;
    }});

    // %TypedArray%.prototype.some ( callbackfn, thisArg = undefined )
    Object.defineProperty($TypedArray$.prototype, 'some', {value: function(callbackfn) {
      if (this === undefined || this === null) throw TypeError();
      var t = Object(this);
      var len = ToUint32(t.length);
      if (!IsCallable(callbackfn)) throw TypeError();
      var thisp = arguments[1];
      for (var i = 0; i < len; i++) {
        if (callbackfn.call(thisp, t._getter(i), i, t)) {
          return true;
        }
      }
      return false;
    }});

    // %TypedArray%.prototype.sort ( comparefn )
    Object.defineProperty($TypedArray$.prototype, 'sort', {value: function(comparefn) {
      if (this === undefined || this === null) throw TypeError();
      var t = Object(this);
      var len = ToUint32(t.length);
      var tmp = Array(len);
      for (var i = 0; i < len; ++i)
        tmp[i] = t._getter(i);
      function sortCompare(x, y) {
        if (x !== x && y !== y) return +0;
        if (x !== x) return 1;
        if (y !== y) return -1;
        if (comparefn !== undefined) {
          return comparefn(x, y);
        }
        if (x < y) return -1;
        if (x > y) return 1;
        return +0;
      }
      tmp.sort(sortCompare);
      for (i = 0; i < len; ++i)
        t._setter(i, tmp[i]);
      return t;
    }});

    // %TypedArray%.prototype.subarray(begin = 0, end = this.length )
    // WebIDL: TypedArray subarray(long begin, optional long end);
    Object.defineProperty($TypedArray$.prototype, 'subarray', {value: function(start, end) {
      function clamp(v, min, max) { return v < min ? min : v > max ? max : v; }

      start = ToInt32(start);
      end = ToInt32(end);

      if (arguments.length < 1) { start = 0; }
      if (arguments.length < 2) { end = this.length; }

      if (start < 0) { start = this.length + start; }
      if (end < 0) { end = this.length + end; }

      start = clamp(start, 0, this.length);
      end = clamp(end, 0, this.length);

      var len = end - start;
      if (len < 0) {
        len = 0;
      }

      return new this.constructor(
        this.buffer, this.byteOffset + start * this.BYTES_PER_ELEMENT, len);
    }});

    // %TypedArray%.prototype.toLocaleString ( )
    // %TypedArray%.prototype.toString ( )
    // %TypedArray%.prototype.values ( )
    // %TypedArray%.prototype [ @@iterator ] ( )
    // get %TypedArray%.prototype [ @@toStringTag ]
    // -- defined in es6.js to shim browsers w/ native TypedArrays

    function makeTypedArray(elementSize, pack, unpack) {
      // Each TypedArray type requires a distinct constructor instance with
      // identical logic, which this produces.
      var TypedArray = function() {
        Object.defineProperty(this, 'constructor', {value: TypedArray});
        $TypedArray$.apply(this, arguments);
        makeArrayAccessors(this);
      };
      if ('__proto__' in TypedArray) {
        TypedArray.__proto__ = $TypedArray$;
      } else {
        TypedArray.from = $TypedArray$.from;
        TypedArray.of = $TypedArray$.of;
      }

      TypedArray.BYTES_PER_ELEMENT = elementSize;

      var TypedArrayPrototype = function() {};
      TypedArrayPrototype.prototype = $TypedArrayPrototype$;

      TypedArray.prototype = new TypedArrayPrototype();

      Object.defineProperty(TypedArray.prototype, 'BYTES_PER_ELEMENT', {value: elementSize});
      Object.defineProperty(TypedArray.prototype, '_pack', {value: pack});
      Object.defineProperty(TypedArray.prototype, '_unpack', {value: unpack});

      return TypedArray;
    }

    var Int8Array = makeTypedArray(1, packI8, unpackI8);
    var Uint8Array = makeTypedArray(1, packU8, unpackU8);
    var Uint8ClampedArray = makeTypedArray(1, packU8Clamped, unpackU8);
    var Int16Array = makeTypedArray(2, packI16, unpackI16);
    var Uint16Array = makeTypedArray(2, packU16, unpackU16);
    var Int32Array = makeTypedArray(4, packI32, unpackI32);
    var Uint32Array = makeTypedArray(4, packU32, unpackU32);
    var Float32Array = makeTypedArray(4, packF32, unpackF32);
    var Float64Array = makeTypedArray(8, packF64, unpackF64);

    global.Int8Array = global.Int8Array || Int8Array;
    global.Uint8Array = global.Uint8Array || Uint8Array;
    global.Uint8ClampedArray = global.Uint8ClampedArray || Uint8ClampedArray;
    global.Int16Array = global.Int16Array || Int16Array;
    global.Uint16Array = global.Uint16Array || Uint16Array;
    global.Int32Array = global.Int32Array || Int32Array;
    global.Uint32Array = global.Uint32Array || Uint32Array;
    global.Float32Array = global.Float32Array || Float32Array;
    global.Float64Array = global.Float64Array || Float64Array;
  }());

  //
  // 6 The DataView View Type
  //

  (function() {
    function r(array, index) {
      return IsCallable(array.get) ? array.get(index) : array[index];
    }

    var IS_BIG_ENDIAN = (function() {
      var u16array = new Uint16Array([0x1234]),
          u8array = new Uint8Array(u16array.buffer);
      return r(u8array, 0) === 0x12;
    }());

    // DataView(buffer, byteOffset=0, byteLength=undefined)
    // WebIDL: Constructor(ArrayBuffer buffer,
    //                     optional unsigned long byteOffset,
    //                     optional unsigned long byteLength)
    function DataView(buffer, byteOffset, byteLength) {
      if (!(buffer instanceof ArrayBuffer || Class(buffer) === 'ArrayBuffer')) throw TypeError();

      byteOffset = ToUint32(byteOffset);
      if (byteOffset > buffer.byteLength)
        throw RangeError('byteOffset out of range');

      if (byteLength === undefined)
        byteLength = buffer.byteLength - byteOffset;
      else
        byteLength = ToUint32(byteLength);

      if ((byteOffset + byteLength) > buffer.byteLength)
        throw RangeError('byteOffset and length reference an area beyond the end of the buffer');

      Object.defineProperty(this, 'buffer', {value: buffer});
      Object.defineProperty(this, 'byteLength', {value: byteLength});
      Object.defineProperty(this, 'byteOffset', {value: byteOffset});
    };

    // get DataView.prototype.buffer
    // get DataView.prototype.byteLength
    // get DataView.prototype.byteOffset
    // -- applied directly to instances by the constructor

    function makeGetter(arrayType) {
      return function GetViewValue(byteOffset, littleEndian) {
        byteOffset = ToUint32(byteOffset);

        if (byteOffset + arrayType.BYTES_PER_ELEMENT > this.byteLength)
          throw RangeError('Array index out of range');

        byteOffset += this.byteOffset;

        var uint8Array = new Uint8Array(this.buffer, byteOffset, arrayType.BYTES_PER_ELEMENT),
            bytes = [];
        for (var i = 0; i < arrayType.BYTES_PER_ELEMENT; i += 1)
          bytes.push(r(uint8Array, i));

        if (Boolean(littleEndian) === Boolean(IS_BIG_ENDIAN))
          bytes.reverse();

        return r(new arrayType(new Uint8Array(bytes).buffer), 0);
      };
    }

    Object.defineProperty(DataView.prototype, 'getUint8', {value: makeGetter(Uint8Array)});
    Object.defineProperty(DataView.prototype, 'getInt8', {value: makeGetter(Int8Array)});
    Object.defineProperty(DataView.prototype, 'getUint16', {value: makeGetter(Uint16Array)});
    Object.defineProperty(DataView.prototype, 'getInt16', {value: makeGetter(Int16Array)});
    Object.defineProperty(DataView.prototype, 'getUint32', {value: makeGetter(Uint32Array)});
    Object.defineProperty(DataView.prototype, 'getInt32', {value: makeGetter(Int32Array)});
    Object.defineProperty(DataView.prototype, 'getFloat32', {value: makeGetter(Float32Array)});
    Object.defineProperty(DataView.prototype, 'getFloat64', {value: makeGetter(Float64Array)});

    function makeSetter(arrayType) {
      return function SetViewValue(byteOffset, value, littleEndian) {
        byteOffset = ToUint32(byteOffset);
        if (byteOffset + arrayType.BYTES_PER_ELEMENT > this.byteLength)
          throw RangeError('Array index out of range');

        // Get bytes
        var typeArray = new arrayType([value]),
            byteArray = new Uint8Array(typeArray.buffer),
            bytes = [], i, byteView;

        for (i = 0; i < arrayType.BYTES_PER_ELEMENT; i += 1)
          bytes.push(r(byteArray, i));

        // Flip if necessary
        if (Boolean(littleEndian) === Boolean(IS_BIG_ENDIAN))
          bytes.reverse();

        // Write them
        byteView = new Uint8Array(this.buffer, byteOffset, arrayType.BYTES_PER_ELEMENT);
        byteView.set(bytes);
      };
    }

    Object.defineProperty(DataView.prototype, 'setUint8', {value: makeSetter(Uint8Array)});
    Object.defineProperty(DataView.prototype, 'setInt8', {value: makeSetter(Int8Array)});
    Object.defineProperty(DataView.prototype, 'setUint16', {value: makeSetter(Uint16Array)});
    Object.defineProperty(DataView.prototype, 'setInt16', {value: makeSetter(Int16Array)});
    Object.defineProperty(DataView.prototype, 'setUint32', {value: makeSetter(Uint32Array)});
    Object.defineProperty(DataView.prototype, 'setInt32', {value: makeSetter(Int32Array)});
    Object.defineProperty(DataView.prototype, 'setFloat32', {value: makeSetter(Float32Array)});
    Object.defineProperty(DataView.prototype, 'setFloat64', {value: makeSetter(Float64Array)});

    global.DataView = global.DataView || DataView;

  }());

}(self));
if (!("Date"in self&&"now"in self.Date&&"getTime"in self.Date.prototype
)) {

// Date.now
Date.now = function now() {
	return new Date().getTime();
};

}

if (!("Date"in self&&"toISOString"in Date.prototype
)) {

// Date.prototype.toISOString
Date.prototype.toISOString = function toISOString() {
	var date = this;

	function pad(str, len) {
		var pad = "0000";
		str = '' + str;
		return pad.substr(0, len - str.length) + str;
	}

	var y = date.getUTCFullYear(),
	m = pad(date.getUTCMonth() + 1, 2),
	d = pad(date.getUTCDate(), 2),
	h = pad(date.getUTCHours(), 2),
	i = pad(date.getUTCMinutes(), 2),
	s = pad(date.getUTCSeconds(), 2),
	ms = pad(date.getUTCMilliseconds(), 3);

	return y +'-'+ m +'-'+ d + 'T' + h +':'+ i +':'+ s +'.'+ ms +'Z';
};

}

if (!("JSON"in self
)) {

// JSON
/*! JSON v3.3.2 | https://bestiejs.github.io/json3 | Copyright 2012-2015, Kit Cambridge, Benjamin Tan | http://kit.mit-license.org */
;(function () {
  // Detect the `define` function exposed by asynchronous module loaders. The
  // strict `define` check is necessary for compatibility with `r.js`.
  var isLoader = typeof define === "function" && define.amd;

  // A set of types used to distinguish objects from primitives.
  var objectTypes = {
    "function": true,
    "object": true
  };

  // Detect the `exports` object exposed by CommonJS implementations.
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

  // Use the `global` object exposed by Node (including Browserify via
  // `insert-module-globals`), Narwhal, and Ringo as the default context,
  // and the `window` object in browsers. Rhino exports a `global` function
  // instead.
  var root = objectTypes[typeof window] && window || this,
      freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
    root = freeGlobal;
  }

  // Public: Initializes JSON 3 using the given `context` object, attaching the
  // `stringify` and `parse` functions to the specified `exports` object.
  function runInContext(context, exports) {
    context || (context = root.Object());
    exports || (exports = root.Object());

    // Native constructor aliases.
    var Number = context.Number || root.Number,
        String = context.String || root.String,
        Object = context.Object || root.Object,
        Date = context.Date || root.Date,
        SyntaxError = context.SyntaxError || root.SyntaxError,
        TypeError = context.TypeError || root.TypeError,
        Math = context.Math || root.Math,
        nativeJSON = context.JSON || root.JSON;

    // Delegate to the native `stringify` and `parse` implementations.
    if (typeof nativeJSON == "object" && nativeJSON) {
      exports.stringify = nativeJSON.stringify;
      exports.parse = nativeJSON.parse;
    }

    // Convenience aliases.
    var objectProto = Object.prototype,
        getClass = objectProto.toString,
        isProperty = objectProto.hasOwnProperty,
        undefined;

    // Internal: Contains `try...catch` logic used by other functions.
    // This prevents other functions from being deoptimized.
    function attempt(func, errorFunc) {
      try {
        func();
      } catch (exception) {
        if (errorFunc) {
          errorFunc();
        }
      }
    }

    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
    var isExtended = new Date(-3509827334573292);
    attempt(function () {
      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
      // results for certain dates in Opera >= 10.53.
      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
    });

    // Internal: Determines whether the native `JSON.stringify` and `parse`
    // implementations are spec-compliant. Based on work by Ken Snyder.
    function has(name) {
      if (has[name] != null) {
        // Return cached feature test result.
        return has[name];
      }
      var isSupported;
      if (name == "bug-string-char-index") {
        // IE <= 7 doesn't support accessing string characters using square
        // bracket notation. IE 8 only supports this for primitives.
        isSupported = "a"[0] != "a";
      } else if (name == "json") {
        // Indicates whether both `JSON.stringify` and `JSON.parse` are
        // supported.
        isSupported = has("json-stringify") && has("date-serialization") && has("json-parse");
      } else if (name == "date-serialization") {
        // Indicates whether `Date`s can be serialized accurately by `JSON.stringify`.
        isSupported = has("json-stringify") && isExtended;
        if (isSupported) {
          var stringify = exports.stringify;
          attempt(function () {
            isSupported =
              // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
              // serialize extended years.
              stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
              // The milliseconds are optional in ES 5, but required in 5.1.
              stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
              // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
              // four-digit years instead of six-digit years. Credits: @Yaffle.
              stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
              // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
              // values less than 1000. Credits: @Yaffle.
              stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
          });
        }
      } else {
        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
        // Test `JSON.stringify`.
        if (name == "json-stringify") {
          var stringify = exports.stringify, stringifySupported = typeof stringify == "function";
          if (stringifySupported) {
            // A test function object with a custom `toJSON` method.
            (value = function () {
              return 1;
            }).toJSON = value;
            attempt(function () {
              stringifySupported =
                // Firefox 3.1b1 and b2 serialize string, number, and boolean
                // primitives as object literals.
                stringify(0) === "0" &&
                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                // literals.
                stringify(new Number()) === "0" &&
                stringify(new String()) == '""' &&
                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
                // does not define a canonical JSON representation (this applies to
                // objects with `toJSON` properties as well, *unless* they are nested
                // within an object or array).
                stringify(getClass) === undefined &&
                // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
                // FF 3.1b3 pass this test.
                stringify(undefined) === undefined &&
                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                // respectively, if the value is omitted entirely.
                stringify() === undefined &&
                // FF 3.1b1, 2 throw an error if the given value is not a number,
                // string, array, object, Boolean, or `null` literal. This applies to
                // objects with custom `toJSON` methods as well, unless they are nested
                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                // methods entirely.
                stringify(value) === "1" &&
                stringify([value]) == "[1]" &&
                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                // `"[null]"`.
                stringify([undefined]) == "[null]" &&
                // YUI 3.0.0b1 fails to serialize `null` literals.
                stringify(null) == "null" &&
                // FF 3.1b1, 2 halts serialization if an array contains a function:
                // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
                // elides non-JSON values from objects and arrays, unless they
                // define custom `toJSON` methods.
                stringify([undefined, getClass, null]) == "[null,null,null]" &&
                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                // where character escape codes are expected (e.g., `\b` => `\u0008`).
                stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                stringify(null, value) === "1" &&
                stringify([1, 2], null, 1) == "[\n 1,\n 2\n]";
            }, function () {
              stringifySupported = false;
            });
          }
          isSupported = stringifySupported;
        }
        // Test `JSON.parse`.
        if (name == "json-parse") {
          var parse = exports.parse, parseSupported;
          if (typeof parse == "function") {
            attempt(function () {
              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
              // Conforming implementations should also coerce the initial argument to
              // a string prior to parsing.
              if (parse("0") === 0 && !parse(false)) {
                // Simple parsing test.
                value = parse(serialized);
                parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                if (parseSupported) {
                  attempt(function () {
                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                    parseSupported = !parse('"\t"');
                  });
                  if (parseSupported) {
                    attempt(function () {
                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                      // certain octal literals.
                      parseSupported = parse("01") !== 1;
                    });
                  }
                  if (parseSupported) {
                    attempt(function () {
                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                      // points. These environments, along with FF 3.1b1 and 2,
                      // also allow trailing commas in JSON objects and arrays.
                      parseSupported = parse("1.") !== 1;
                    });
                  }
                }
              }
            }, function () {
              parseSupported = false;
            });
          }
          isSupported = parseSupported;
        }
      }
      return has[name] = !!isSupported;
    }
    has["bug-string-char-index"] = has["date-serialization"] = has["json"] = has["json-stringify"] = has["json-parse"] = null;

    if (!has("json")) {
      // Common `[[Class]]` name aliases.
      var functionClass = "[object Function]",
          dateClass = "[object Date]",
          numberClass = "[object Number]",
          stringClass = "[object String]",
          arrayClass = "[object Array]",
          booleanClass = "[object Boolean]";

      // Detect incomplete support for accessing string characters by index.
      var charIndexBuggy = has("bug-string-char-index");

      // Internal: Normalizes the `for...in` iteration algorithm across
      // environments. Each enumerated key is yielded to a `callback` function.
      var forOwn = function (object, callback) {
        var size = 0, Properties, dontEnums, property;

        // Tests for bugs in the current environment's `for...in` algorithm. The
        // `valueOf` property inherits the non-enumerable flag from
        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
        (Properties = function () {
          this.valueOf = 0;
        }).prototype.valueOf = 0;

        // Iterate over a new instance of the `Properties` class.
        dontEnums = new Properties();
        for (property in dontEnums) {
          // Ignore all properties inherited from `Object.prototype`.
          if (isProperty.call(dontEnums, property)) {
            size++;
          }
        }
        Properties = dontEnums = null;

        // Normalize the iteration algorithm.
        if (!size) {
          // A list of non-enumerable properties inherited from `Object.prototype`.
          dontEnums = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
          // properties.
          forOwn = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, length;
            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
            for (property in object) {
              // Gecko <= 1.0 enumerates the `prototype` property of functions under
              // certain conditions; IE does not.
              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                callback(property);
              }
            }
            // Manually invoke the callback for each non-enumerable property.
            for (length = dontEnums.length; property = dontEnums[--length];) {
              if (hasProperty.call(object, property)) {
                callback(property);
              }
            }
          };
        } else {
          // No bugs detected; use the standard `for...in` algorithm.
          forOwn = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, isConstructor;
            for (property in object) {
              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                callback(property);
              }
            }
            // Manually invoke the callback for the `constructor` property due to
            // cross-environment inconsistencies.
            if (isConstructor || isProperty.call(object, (property = "constructor"))) {
              callback(property);
            }
          };
        }
        return forOwn(object, callback);
      };

      // Public: Serializes a JavaScript `value` as a JSON string. The optional
      // `filter` argument may specify either a function that alters how object and
      // array members are serialized, or an array of strings and numbers that
      // indicates which properties should be serialized. The optional `width`
      // argument may be either a string or number that specifies the indentation
      // level of the output.
      if (!has("json-stringify") && !has("date-serialization")) {
        // Internal: A map of control characters and their escaped equivalents.
        var Escapes = {
          92: "\\\\",
          34: '\\"',
          8: "\\b",
          12: "\\f",
          10: "\\n",
          13: "\\r",
          9: "\\t"
        };

        // Internal: Converts `value` into a zero-padded string such that its
        // length is at least equal to `width`. The `width` must be <= 6.
        var leadingZeroes = "000000";
        var toPaddedString = function (width, value) {
          // The `|| 0` expression is necessary to work around a bug in
          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
          return (leadingZeroes + (value || 0)).slice(-width);
        };

        // Internal: Serializes a date object.
        var serializeDate = function (value) {
          var getData, year, month, date, time, hours, minutes, seconds, milliseconds;
          // Define additional utility methods if the `Date` methods are buggy.
          if (!isExtended) {
            var floor = Math.floor;
            // A mapping between the months of the year and the number of days between
            // January 1st and the first of the respective month.
            var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
            // Internal: Calculates the number of days between the Unix epoch and the
            // first day of the given month.
            var getDay = function (year, month) {
              return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
            };
            getData = function (value) {
              // Manually compute the year, month, date, hours, minutes,
              // seconds, and milliseconds if the `getUTC*` methods are
              // buggy. Adapted from @Yaffle's `date-shim` project.
              date = floor(value / 864e5);
              for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
              for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
              date = 1 + date - getDay(year, month);
              // The `time` value specifies the time within the day (see ES
              // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
              // to compute `A modulo B`, as the `%` operator does not
              // correspond to the `modulo` operation for negative numbers.
              time = (value % 864e5 + 864e5) % 864e5;
              // The hours, minutes, seconds, and milliseconds are obtained by
              // decomposing the time within the day. See section 15.9.1.10.
              hours = floor(time / 36e5) % 24;
              minutes = floor(time / 6e4) % 60;
              seconds = floor(time / 1e3) % 60;
              milliseconds = time % 1e3;
            };
          } else {
            getData = function (value) {
              year = value.getUTCFullYear();
              month = value.getUTCMonth();
              date = value.getUTCDate();
              hours = value.getUTCHours();
              minutes = value.getUTCMinutes();
              seconds = value.getUTCSeconds();
              milliseconds = value.getUTCMilliseconds();
            };
          }
          serializeDate = function (value) {
            if (value > -1 / 0 && value < 1 / 0) {
              // Dates are serialized according to the `Date#toJSON` method
              // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
              // for the ISO 8601 date time string format.
              getData(value);
              // Serialize extended years correctly.
              value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
              "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
              // Months, dates, hours, minutes, and seconds should have two
              // digits; milliseconds should have three.
              "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
              // Milliseconds are optional in ES 5.0, but required in 5.1.
              "." + toPaddedString(3, milliseconds) + "Z";
              year = month = date = hours = minutes = seconds = milliseconds = null;
            } else {
              value = null;
            }
            return value;
          };
          return serializeDate(value);
        };

        // For environments with `JSON.stringify` but buggy date serialization,
        // we override the native `Date#toJSON` implementation with a
        // spec-compliant one.
        if (has("json-stringify") && !has("date-serialization")) {
          // Internal: the `Date#toJSON` implementation used to override the native one.
          function dateToJSON (key) {
            return serializeDate(this);
          }

          // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
          var nativeStringify = exports.stringify;
          exports.stringify = function (source, filter, width) {
            var nativeToJSON = Date.prototype.toJSON;
            Date.prototype.toJSON = dateToJSON;
            var result = nativeStringify(source, filter, width);
            Date.prototype.toJSON = nativeToJSON;
            return result;
          }
        } else {
          // Internal: Double-quotes a string `value`, replacing all ASCII control
          // characters (characters with code unit values between 0 and 31) with
          // their escaped equivalents. This is an implementation of the
          // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
          var unicodePrefix = "\\u00";
          var escapeChar = function (character) {
            var charCode = character.charCodeAt(0), escaped = Escapes[charCode];
            if (escaped) {
              return escaped;
            }
            return unicodePrefix + toPaddedString(2, charCode.toString(16));
          };
          var reEscape = /[\x00-\x1f\x22\x5c]/g;
          var quote = function (value) {
            reEscape.lastIndex = 0;
            return '"' +
              (
                reEscape.test(value)
                  ? value.replace(reEscape, escapeChar)
                  : value
              ) +
              '"';
          };

          // Internal: Recursively serializes an object. Implements the
          // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
          var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
            var value, type, className, results, element, index, length, prefix, result;
            attempt(function () {
              // Necessary for host object support.
              value = object[property];
            });
            if (typeof value == "object" && value) {
              if (value.getUTCFullYear && getClass.call(value) == dateClass && value.toJSON === Date.prototype.toJSON) {
                value = serializeDate(value);
              } else if (typeof value.toJSON == "function") {
                value = value.toJSON(property);
              }
            }
            if (callback) {
              // If a replacement function was provided, call it to obtain the value
              // for serialization.
              value = callback.call(object, property, value);
            }
            // Exit early if value is `undefined` or `null`.
            if (value == undefined) {
              return value === undefined ? value : "null";
            }
            type = typeof value;
            // Only call `getClass` if the value is an object.
            if (type == "object") {
              className = getClass.call(value);
            }
            switch (className || type) {
              case "boolean":
              case booleanClass:
                // Booleans are represented literally.
                return "" + value;
              case "number":
              case numberClass:
                // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
                // `"null"`.
                return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
              case "string":
              case stringClass:
                // Strings are double-quoted and escaped.
                return quote("" + value);
            }
            // Recursively serialize objects and arrays.
            if (typeof value == "object") {
              // Check for cyclic structures. This is a linear search; performance
              // is inversely proportional to the number of unique nested objects.
              for (length = stack.length; length--;) {
                if (stack[length] === value) {
                  // Cyclic structures cannot be serialized by `JSON.stringify`.
                  throw TypeError();
                }
              }
              // Add the object to the stack of traversed objects.
              stack.push(value);
              results = [];
              // Save the current indentation level and indent one additional level.
              prefix = indentation;
              indentation += whitespace;
              if (className == arrayClass) {
                // Recursively serialize array elements.
                for (index = 0, length = value.length; index < length; index++) {
                  element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                  results.push(element === undefined ? "null" : element);
                }
                result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
              } else {
                // Recursively serialize object members. Members are selected from
                // either a user-specified list of property names, or the object
                // itself.
                forOwn(properties || value, function (property) {
                  var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                  if (element !== undefined) {
                    // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                    // is not the empty string, let `member` {quote(property) + ":"}
                    // be the concatenation of `member` and the `space` character."
                    // The "`space` character" refers to the literal space
                    // character, not the `space` {width} argument provided to
                    // `JSON.stringify`.
                    results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                  }
                });
                result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
              }
              // Remove the object from the traversed object stack.
              stack.pop();
              return result;
            }
          };

          // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
          exports.stringify = function (source, filter, width) {
            var whitespace, callback, properties, className;
            if (objectTypes[typeof filter] && filter) {
              className = getClass.call(filter);
              if (className == functionClass) {
                callback = filter;
              } else if (className == arrayClass) {
                // Convert the property names array into a makeshift set.
                properties = {};
                for (var index = 0, length = filter.length, value; index < length;) {
                  value = filter[index++];
                  className = getClass.call(value);
                  if (className == "[object String]" || className == "[object Number]") {
                    properties[value] = 1;
                  }
                }
              }
            }
            if (width) {
              className = getClass.call(width);
              if (className == numberClass) {
                // Convert the `width` to an integer and create a string containing
                // `width` number of space characters.
                if ((width -= width % 1) > 0) {
                  if (width > 10) {
                    width = 10;
                  }
                  for (whitespace = ""; whitespace.length < width;) {
                    whitespace += " ";
                  }
                }
              } else if (className == stringClass) {
                whitespace = width.length <= 10 ? width : width.slice(0, 10);
              }
            }
            // Opera <= 7.54u2 discards the values associated with empty string keys
            // (`""`) only if they are used directly within an object member list
            // (e.g., `!("" in { "": 1})`).
            return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
          };
        }
      }

      // Public: Parses a JSON source string.
      if (!has("json-parse")) {
        var fromCharCode = String.fromCharCode;

        // Internal: A map of escaped control characters and their unescaped
        // equivalents.
        var Unescapes = {
          92: "\\",
          34: '"',
          47: "/",
          98: "\b",
          116: "\t",
          110: "\n",
          102: "\f",
          114: "\r"
        };

        // Internal: Stores the parser state.
        var Index, Source;

        // Internal: Resets the parser state and throws a `SyntaxError`.
        var abort = function () {
          Index = Source = null;
          throw SyntaxError();
        };

        // Internal: Returns the next token, or `"$"` if the parser has reached
        // the end of the source string. A token may be a string, number, `null`
        // literal, or Boolean literal.
        var lex = function () {
          var source = Source, length = source.length, value, begin, position, isSigned, charCode;
          while (Index < length) {
            charCode = source.charCodeAt(Index);
            switch (charCode) {
              case 9: case 10: case 13: case 32:
                // Skip whitespace tokens, including tabs, carriage returns, line
                // feeds, and space characters.
                Index++;
                break;
              case 123: case 125: case 91: case 93: case 58: case 44:
                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
                // the current position.
                value = charIndexBuggy ? source.charAt(Index) : source[Index];
                Index++;
                return value;
              case 34:
                // `"` delimits a JSON string; advance to the next character and
                // begin parsing the string. String tokens are prefixed with the
                // sentinel `@` character to distinguish them from punctuators and
                // end-of-string tokens.
                for (value = "@", Index++; Index < length;) {
                  charCode = source.charCodeAt(Index);
                  if (charCode < 32) {
                    // Unescaped ASCII control characters (those with a code unit
                    // less than the space character) are not permitted.
                    abort();
                  } else if (charCode == 92) {
                    // A reverse solidus (`\`) marks the beginning of an escaped
                    // control character (including `"`, `\`, and `/`) or Unicode
                    // escape sequence.
                    charCode = source.charCodeAt(++Index);
                    switch (charCode) {
                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
                        // Revive escaped control characters.
                        value += Unescapes[charCode];
                        Index++;
                        break;
                      case 117:
                        // `\u` marks the beginning of a Unicode escape sequence.
                        // Advance to the first character and validate the
                        // four-digit code point.
                        begin = ++Index;
                        for (position = Index + 4; Index < position; Index++) {
                          charCode = source.charCodeAt(Index);
                          // A valid sequence comprises four hexdigits (case-
                          // insensitive) that form a single hexadecimal value.
                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                            // Invalid Unicode escape sequence.
                            abort();
                          }
                        }
                        // Revive the escaped character.
                        value += fromCharCode("0x" + source.slice(begin, Index));
                        break;
                      default:
                        // Invalid escape sequence.
                        abort();
                    }
                  } else {
                    if (charCode == 34) {
                      // An unescaped double-quote character marks the end of the
                      // string.
                      break;
                    }
                    charCode = source.charCodeAt(Index);
                    begin = Index;
                    // Optimize for the common case where a string is valid.
                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
                      charCode = source.charCodeAt(++Index);
                    }
                    // Append the string as-is.
                    value += source.slice(begin, Index);
                  }
                }
                if (source.charCodeAt(Index) == 34) {
                  // Advance to the next character and return the revived string.
                  Index++;
                  return value;
                }
                // Unterminated string.
                abort();
              default:
                // Parse numbers and literals.
                begin = Index;
                // Advance past the negative sign, if one is specified.
                if (charCode == 45) {
                  isSigned = true;
                  charCode = source.charCodeAt(++Index);
                }
                // Parse an integer or floating-point value.
                if (charCode >= 48 && charCode <= 57) {
                  // Leading zeroes are interpreted as octal literals.
                  if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
                    // Illegal octal literal.
                    abort();
                  }
                  isSigned = false;
                  // Parse the integer component.
                  for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
                  // Floats cannot contain a leading decimal point; however, this
                  // case is already accounted for by the parser.
                  if (source.charCodeAt(Index) == 46) {
                    position = ++Index;
                    // Parse the decimal component.
                    for (; position < length; position++) {
                      charCode = source.charCodeAt(position);
                      if (charCode < 48 || charCode > 57) {
                        break;
                      }
                    }
                    if (position == Index) {
                      // Illegal trailing decimal.
                      abort();
                    }
                    Index = position;
                  }
                  // Parse exponents. The `e` denoting the exponent is
                  // case-insensitive.
                  charCode = source.charCodeAt(Index);
                  if (charCode == 101 || charCode == 69) {
                    charCode = source.charCodeAt(++Index);
                    // Skip past the sign following the exponent, if one is
                    // specified.
                    if (charCode == 43 || charCode == 45) {
                      Index++;
                    }
                    // Parse the exponential component.
                    for (position = Index; position < length; position++) {
                      charCode = source.charCodeAt(position);
                      if (charCode < 48 || charCode > 57) {
                        break;
                      }
                    }
                    if (position == Index) {
                      // Illegal empty exponent.
                      abort();
                    }
                    Index = position;
                  }
                  // Coerce the parsed value to a JavaScript number.
                  return +source.slice(begin, Index);
                }
                // A negative sign may only precede numbers.
                if (isSigned) {
                  abort();
                }
                // `true`, `false`, and `null` literals.
                var temp = source.slice(Index, Index + 4);
                if (temp == "true") {
                  Index += 4;
                  return true;
                } else if (temp == "fals" && source.charCodeAt(Index + 4 ) == 101) {
                  Index += 5;
                  return false;
                } else if (temp == "null") {
                  Index += 4;
                  return null;
                }
                // Unrecognized token.
                abort();
            }
          }
          // Return the sentinel `$` character if the parser has reached the end
          // of the source string.
          return "$";
        };

        // Internal: Parses a JSON `value` token.
        var get = function (value) {
          var results, hasMembers;
          if (value == "$") {
            // Unexpected end of input.
            abort();
          }
          if (typeof value == "string") {
            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
              // Remove the sentinel `@` character.
              return value.slice(1);
            }
            // Parse object and array literals.
            if (value == "[") {
              // Parses a JSON array, returning a new JavaScript array.
              results = [];
              for (;;) {
                value = lex();
                // A closing square bracket marks the end of the array literal.
                if (value == "]") {
                  break;
                }
                // If the array literal contains elements, the current token
                // should be a comma separating the previous element from the
                // next.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "]") {
                      // Unexpected trailing `,` in array literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each array element.
                    abort();
                  }
                } else {
                  hasMembers = true;
                }
                // Elisions and leading commas are not permitted.
                if (value == ",") {
                  abort();
                }
                results.push(get(value));
              }
              return results;
            } else if (value == "{") {
              // Parses a JSON object, returning a new JavaScript object.
              results = {};
              for (;;) {
                value = lex();
                // A closing curly brace marks the end of the object literal.
                if (value == "}") {
                  break;
                }
                // If the object literal contains members, the current token
                // should be a comma separator.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "}") {
                      // Unexpected trailing `,` in object literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each object member.
                    abort();
                  }
                } else {
                  hasMembers = true;
                }
                // Leading commas are not permitted, object property names must be
                // double-quoted strings, and a `:` must separate each property
                // name and value.
                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                  abort();
                }
                results[value.slice(1)] = get(lex());
              }
              return results;
            }
            // Unexpected token encountered.
            abort();
          }
          return value;
        };

        // Internal: Updates a traversed object member.
        var update = function (source, property, callback) {
          var element = walk(source, property, callback);
          if (element === undefined) {
            delete source[property];
          } else {
            source[property] = element;
          }
        };

        // Internal: Recursively traverses a parsed JSON object, invoking the
        // `callback` function for each value. This is an implementation of the
        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
        var walk = function (source, property, callback) {
          var value = source[property], length;
          if (typeof value == "object" && value) {
            // `forOwn` can't be used to traverse an array in Opera <= 8.54
            // because its `Object#hasOwnProperty` implementation returns `false`
            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
            if (getClass.call(value) == arrayClass) {
              for (length = value.length; length--;) {
                update(getClass, forOwn, value, length, callback);
              }
            } else {
              forOwn(value, function (property) {
                update(value, property, callback);
              });
            }
          }
          return callback.call(source, property, value);
        };

        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
        exports.parse = function (source, callback) {
          var result, value;
          Index = 0;
          Source = "" + source;
          result = get(lex());
          // If a JSON string contains multiple tokens, it is invalid.
          if (lex() != "$") {
            abort();
          }
          // Reset the parser state.
          Index = Source = null;
          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
        };
      }
    }

    exports.runInContext = runInContext;
    return exports;
  }

  if (freeExports && !isLoader) {
    // Export for CommonJS environments.
    runInContext(root, freeExports);
  } else {
    // Export for web browsers and JavaScript engines.
    var nativeJSON = root.JSON,
        previousJSON = root.JSON3,
        isRestored = false;

    var JSON3 = runInContext(root, (root.JSON3 = {
      // Public: Restores the original value of the global `JSON` object and
      // returns a reference to the `JSON3` object.
      "noConflict": function () {
        if (!isRestored) {
          isRestored = true;
          root.JSON = nativeJSON;
          root.JSON3 = previousJSON;
          nativeJSON = previousJSON = null;
        }
        return JSON3;
      }
    }));

    root.JSON = {
      "parse": JSON3.parse,
      "stringify": JSON3.stringify
    };
  }

  // Export for asynchronous module loaders.
  if (isLoader) {
    define(function () {
      return JSON3;
    });
  }
}).call(this);

}

if (!("defineProperty"in Object&&function(){try{var e={}
return Object.defineProperty(e,"test",{value:42}),!0}catch(t){return!1}}()
)) {

// Object.defineProperty
(function (nativeDefineProperty) {

	var supportsAccessors = Object.prototype.hasOwnProperty.call(Object.prototype, '__defineGetter__');
	var ERR_ACCESSORS_NOT_SUPPORTED = 'Getters & setters cannot be defined on this javascript engine';
	var ERR_VALUE_ACCESSORS = 'A property cannot both have accessors and be writable or have a value';

	// Polyfill.io - This does not use CreateMethodProperty because our CreateMethodProperty function uses Object.defineProperty.
	Object.defineProperty = function defineProperty(object, property, descriptor) {

		// Where native support exists, assume it
		if (nativeDefineProperty && (object === window || object === document || object === Element.prototype || object instanceof Element)) {
			return nativeDefineProperty(object, property, descriptor);
		}

		if (object === null || !(object instanceof Object || typeof object === 'object')) {
			throw new TypeError('Object.defineProperty called on non-object');
		}

		if (!(descriptor instanceof Object)) {
			throw new TypeError('Property description must be an object');
		}

		var propertyString = String(property);
		var hasValueOrWritable = 'value' in descriptor || 'writable' in descriptor;
		var getterType = 'get' in descriptor && typeof descriptor.get;
		var setterType = 'set' in descriptor && typeof descriptor.set;

		// handle descriptor.get
		if (getterType) {
			if (getterType === undefined) {
				return object;
			}
			if (getterType !== 'function') {
				throw new TypeError('Getter must be a function');
			}
			if (!supportsAccessors) {
				throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
			}
			if (hasValueOrWritable) {
				throw new TypeError(ERR_VALUE_ACCESSORS);
			}
			Object.__defineGetter__.call(object, propertyString, descriptor.get);
		} else {
			object[propertyString] = descriptor.value;
		}

		// handle descriptor.set
		if (setterType) {
			if (setterType === undefined) {
				return object;
			}
			if (setterType !== 'function') {
				throw new TypeError('Setter must be a function');
			}
			if (!supportsAccessors) {
				throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
			}
			if (hasValueOrWritable) {
				throw new TypeError(ERR_VALUE_ACCESSORS);
			}
			Object.__defineSetter__.call(object, propertyString, descriptor.set);
		}

		// OK to define value unconditionally - if a getter has been specified as well, an error would be thrown above
		if ('value' in descriptor) {
			object[propertyString] = descriptor.value;
		}

		return object;
	};
}(Object.defineProperty));

}

if (!("name"in Function.prototype
)) {

// Function.prototype.name
(function () {

	var
	accessorName = 'name',
	fnNameMatchRegex = /^\s*function\s+([^(\s]*)\s*/,
	$Function = Function,
	FunctionName = 'Function',
	FunctionProto = $Function.prototype,
	FunctionProtoCtor = FunctionProto.constructor,

	getFunctionName = function(fn) {
		var match, name;

		if (fn === $Function || fn === FunctionProtoCtor) {
			name = FunctionName;
		}
		else if (fn !== FunctionProto) {
			match = ('' + fn).match(fnNameMatchRegex);
			name = match && match[1];
		}
		return name || '';
	};


	Object.defineProperty(FunctionProto, accessorName, {
		get: function Function$name() {
			var
			fn = this,
			fnName = getFunctionName(fn);

			// Since named function definitions have immutable names, also memoize the
			// output by defining the `name` property directly on this Function
			// instance so the accessor function will not need to be invoked again.
			if (fn !== FunctionProto) {
				Object.defineProperty(fn, accessorName, {
					value: fnName,
					configurable: true
				});
			}

			return fnName;
		},
		configurable: true
	});

}());

}

if (!("EPSILON"in Number
)) {

// Number.Epsilon
// 20.1.2.1. Number.EPSILON
// The value of Number.EPSILON is the difference between 1 and the smallest value greater than 1 that is representable as a Number value, which is approximately 2.2204460492503130808472633361816 x 10-16.
// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
Object.defineProperty(Number, 'EPSILON', {
	enumerable: false,
	configurable: false,
	writable: false,
	value: Math.pow(2, -52)
});

}

if (!("MAX_SAFE_INTEGER"in Number
)) {

// Number.MAX_SAFE_INTEGER
// 20.1.2.6. Number.MAX_SAFE_INTEGER
// The value of Number.MAX_SAFE_INTEGER is 9007199254740991 (2^53-1).
// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
Object.defineProperty(Number, 'MAX_SAFE_INTEGER', {
	enumerable: false,
	configurable: false,
	writable: false,
	value: Math.pow(2, 53) - 1
});

}

if (!("MIN_SAFE_INTEGER"in Number
)) {

// Number.MIN_SAFE_INTEGER
// 20.1.2.8. Number.MIN_SAFE_INTEGER
// The value of Number.MIN_SAFE_INTEGER is -9007199254740991 (-(253-1)).
// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
Object.defineProperty(Number, 'MIN_SAFE_INTEGER', {
	enumerable: false,
	configurable: false,
	writable: false,
	value: -(Math.pow(2, 53) - 1)
});

}

if (!("Reflect"in self
)) {

// Reflect
// 26.1 The Reflect Object
try {
	Object.defineProperty(self, "Reflect", {
		value: self.Reflect || {},
		writable: true,
		configurable: true,
		enumerable: false
	});
} catch (e) {
	self.Reflect = self.Reflect || {};
}

}

if (!("Window"in self
)) {

// Window
if ((typeof WorkerGlobalScope === "undefined") && (typeof importScripts !== "function")) {
	(function (global) {
		if (global.constructor) {
			global.Window = global.constructor;
		} else {
			(global.Window = global.constructor = new Function('return function Window() {}')()).prototype = self;
		}
	}(self));
}

}


// _ESAbstract.ArrayCreate
// 9.4.2.2. ArrayCreate ( length [ , proto ] )
function ArrayCreate(length /* [, proto] */) { // eslint-disable-line no-unused-vars
	// 1. Assert: length is an integer Number ≥ 0.
	// 2. If length is -0, set length to +0.
	if (1 / length === -Infinity) {
		length = 0;
	}
	// 3. If length>2^32-1, throw a RangeError exception.
	if (length > (Math.pow(2, 32) - 1)) {
		throw new RangeError('Invalid array length');
	}
	// 4. If proto is not present, set proto to the intrinsic object %ArrayPrototype%.
	// 5. Let A be a newly created Array exotic object.
	var A = [];
	// 6. Set A's essential internal methods except for [[DefineOwnProperty]] to the default ordinary object definitions specified in 9.1.
	// 7. Set A.[[DefineOwnProperty]] as specified in 9.4.2.1.
	// 8. Set A.[[Prototype]] to proto.
	// 9. Set A.[[Extensible]] to true.
	// 10. Perform ! OrdinaryDefineOwnProperty(A, "length", PropertyDescriptor{[[Value]]: length, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: false}).
	A.length = length;
	// 11. Return A.
	return A;
}

// _ESAbstract.Call
/* global IsCallable */
// 7.3.12. Call ( F, V [ , argumentsList ] )
function Call(F, V /* [, argumentsList] */) { // eslint-disable-line no-unused-vars
	// 1. If argumentsList is not present, set argumentsList to a new empty List.
	var argumentsList = arguments.length > 2 ? arguments[2] : [];
	// 2. If IsCallable(F) is false, throw a TypeError exception.
	if (IsCallable(F) === false) {
		throw new TypeError(Object.prototype.toString.call(F) + 'is not a function.');
	}
	// 3. Return ? F.[[Call]](V, argumentsList).
	return F.apply(V, argumentsList);
}

// _ESAbstract.CreateDataProperty
// 7.3.4. CreateDataProperty ( O, P, V )
// NOTE
// This abstract operation creates a property whose attributes are set to the same defaults used for properties created by the ECMAScript language assignment operator.
// Normally, the property will not already exist. If it does exist and is not configurable or if O is not extensible, [[DefineOwnProperty]] will return false.
function CreateDataProperty(O, P, V) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(O) is Object.
	// 2. Assert: IsPropertyKey(P) is true.
	// 3. Let newDesc be the PropertyDescriptor{ [[Value]]: V, [[Writable]]: true, [[Enumerable]]: true, [[Configurable]]: true }.
	var newDesc = {
		value: V,
		writable: true,
		enumerable: true,
		configurable: true
	};
	// 4. Return ? O.[[DefineOwnProperty]](P, newDesc).
	try {
		Object.defineProperty(O, P, newDesc);
		return true;
	} catch (e) {
		return false;
	}
}

// _ESAbstract.CreateDataPropertyOrThrow
/* global CreateDataProperty */
// 7.3.6. CreateDataPropertyOrThrow ( O, P, V )
function CreateDataPropertyOrThrow(O, P, V) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(O) is Object.
	// 2. Assert: IsPropertyKey(P) is true.
	// 3. Let success be ? CreateDataProperty(O, P, V).
	var success = CreateDataProperty(O, P, V);
	// 4. If success is false, throw a TypeError exception.
	if (!success) {
		throw new TypeError('Cannot assign value `' + Object.prototype.toString.call(V) + '` to property `' + Object.prototype.toString.call(P) + '` on object `' + Object.prototype.toString.call(O) + '`');
	}
	// 5. Return success.
	return success;
}

// _ESAbstract.CreateMethodProperty
// 7.3.5. CreateMethodProperty ( O, P, V )
function CreateMethodProperty(O, P, V) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(O) is Object.
	// 2. Assert: IsPropertyKey(P) is true.
	// 3. Let newDesc be the PropertyDescriptor{[[Value]]: V, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true}.
	var newDesc = {
		value: V,
		writable: true,
		enumerable: false,
		configurable: true
	};
	// 4. Return ? O.[[DefineOwnProperty]](P, newDesc).
	Object.defineProperty(O, P, newDesc);
}
if (!("acosh"in Math
)) {

// Math.acosh
/* global CreateMethodProperty */
// 20.2.2.3. Math.acosh ( x )
CreateMethodProperty(Math, 'acosh', function acosh(x) {
	// If x is NaN, the result is NaN.
	if (isNaN(x)) {
		return NaN;
	}
	// If x is less than 1, the result is NaN.
	if (x < 1) {
		return NaN;
	}
	// If x is 1, the result is +0.
	if (x === 1) {
		return 0;
	}
	// If x is +∞, the result is +∞.
	if (x === Infinity) {
		return Infinity;
	}
	return Math.log(x + Math.sqrt(x * x - 1));
});

}

if (!("asinh"in Math
)) {

// Math.asinh
/* global CreateMethodProperty */
// 20.2.2.5. Math.asinh ( x )
CreateMethodProperty(Math, 'asinh', function asinh(x) {
	// If x is NaN, the result is NaN.
	if (isNaN(x)) {
		return NaN;
	}
	// If x is +0, the result is +0.
	if (x === 0 && 1/x === Infinity) {
		return 0;
	}
	// If x is -0, the result is -0.
	if (x === 0 && 1/x === -Infinity) {
		return -0;
	}
	// If x is +∞, the result is +∞.
	if (x === Infinity) {
		return Infinity;
	}
	// If x is -∞, the result is -∞.
	if (x === -Infinity) {
		return -Infinity;
	}
	return Math.log(x + Math.sqrt(x * x + 1));
});

}

if (!("atanh"in Math
)) {

// Math.atanh
/* global CreateMethodProperty */
// 20.2.2.7. Math.atanh ( x )
CreateMethodProperty(Math, 'atanh', function atanh(x) {
	// If x is NaN, the result is NaN.
	if (isNaN(x)) {
		return NaN;
	}
	// If x is less than -1, the result is NaN.
	if (x < -1) {
		return NaN;
	}
	// If x is greater than 1, the result is NaN.
	if (x > 1) {
		return NaN;
	}
	// If x is -1, the result is -∞.
	if (x === -1) {
		return -Infinity;
	}
	// If x is +1, the result is +∞.
	if (x === 1) {
		return Infinity;
	}
	// If x is +0, the result is +0.
	if (x === 0 && 1/x === Infinity) {
		return 0;
	}
	// If x is -0, the result is -0.
	if (x === 0 && 1/x === -Infinity) {
		return -0;
	}
	return Math.log((1 + x) / (1 - x)) / 2;
});

}

if (!("cbrt"in Math
)) {

// Math.cbrt
/* global CreateMethodProperty */
// 20.2.2.9. Math.cbrt ( x )
CreateMethodProperty(Math, 'cbrt', function cbrt(x) {
	// If x is NaN, the result is NaN.
	if (isNaN(x)) {
		return NaN;
	}
	// If x is +0, the result is +0.
	if (x === 0 && 1/x === Infinity) {
		return 0;
	}
	// If x is -0, the result is -0.
	if (x === 0 && 1/x === -Infinity) {
		return -0;
	}
	// If x is +∞, the result is +∞.
	if (x === Infinity) {
		return Infinity;
	}
	// If x is -∞, the result is -∞.
	if (x === -Infinity) {
		return -Infinity;
	}
	var y = Math.pow(Math.abs(x), 1 / 3);
	return x < 0 ? -y : y;
});

}

if (!("cosh"in Math
)) {

// Math.cosh
/* global CreateMethodProperty */
// 20.2.2.1. 3Math.cosh ( x )
CreateMethodProperty(Math, 'cosh', function cosh(x) {
	// If x is NaN, the result is NaN.
	if (isNaN(x)) {
		return NaN;
	}
	// If x is +0, the result is 1.
	if (x === 0 && 1/x === Infinity) {
		return 1;
	}
	// If x is -0, the result is 1.
	if (x === 0 && 1/x === -Infinity) {
		return 1;
	}
	// If x is +∞, the result is +∞.
	if (x === Infinity) {
		return Infinity;
	}
	// If x is -∞, the result is +∞.
	if (x === -Infinity) {
		return Infinity;
	}
	x = Math.abs(x);
	if (x > 709) {
		var y = Math.exp(0.5 * x);
		return y / 2 * y;
	}
	y = Math.exp(x);
	return (y + 1 / y) / 2;
});

}

if (!("expm1"in Math
)) {

// Math.expm1
/* global CreateMethodProperty */
// 20.2.2.15. Math.expm1 ( x )
CreateMethodProperty(Math, 'expm1', function expm1(x) {
	// If x is NaN, the result is NaN.
	if (isNaN(x)) {
		return NaN;
	}
	// If x is +0, the result is +0.
	if (x === 0 && 1/x === Infinity) {
		return 0;
	}
	// If x is -0, the result is -0.
	if (x === 0 && 1/x === -Infinity) {
		return -0;
	}
	// If x is +∞, the result is +∞.
	if (x === Infinity) {
		return Infinity;
	}
	// If x is -∞, the result is -1.
	if (x === -Infinity) {
		return -1;
	}

	if (x > -1e-6 && x < 1e-6) {
		return x + x * x / 2;
	} else {
		return Math.exp(x) - 1;
	}
});

}

if (!("fround"in Math
)) {

// Math.fround
/* global Float32Array, CreateMethodProperty */
// 20.2.2.17 Math.fround ( x )
CreateMethodProperty(Math, 'fround', function (x) {
	// 1. If x is NaN, return NaN.
	if (isNaN(x)) {
		return NaN;
	}
	// 2. If x is one of +0, -0, +∞, -∞, return x.
	if (1 / x === +Infinity || 1 / x === -Infinity || x === +Infinity || x === -Infinity) {
		return x;
	}
	// 3. Let x32 be the result of converting x to a value in IEEE 754-2008 binary32 format using roundTiesToEven.
	// 4. Let x64 be the result of converting x32 to a value in IEEE 754-2008 binary64 format.
	// 5. Return the ECMAScript Number value corresponding to x64.
	return (new Float32Array([x]))[0];
});

}

if (!("hypot"in Math
)) {

// Math.hypot
/* global CreateMethodProperty */
// 20.2.2.18. Math.hypot ( value1, value2, ...values )
CreateMethodProperty(Math, 'hypot', function hypot(value1, value2) { // eslint-disable-line no-unused-vars
	// If no arguments are passed, the result is +0.
	if (arguments.length === 0) {
		return 0;
	}
	var y = 0;
	var max = 0;
	for (var i = 0; i < arguments.length; ++i) {
		// If any argument is +∞, the result is +∞.
		if (arguments[i] === Infinity) {
			return Infinity;
		}

		// If any argument is -∞, the result is +∞.
		if (arguments[i] === -Infinity) {
			return Infinity;
		}

		// If no argument is +∞ or -∞, and any argument is NaN, the result is NaN.
		// If all arguments are either +0 or -0, the result is +0.
		// Polyfill.io - The two conditions above are handled in the math.

		var arg = Math.abs(Number(arguments[i]));
		if (arg > max) {
			y = y * Math.pow(max / arg, 2);
			max = arg;
		}
		if (arg !== 0 || max !== 0) {
			y = y + Math.pow(arg / max, 2);
		}
	}

	return max * Math.sqrt(y);
});

}

if (!("log10"in Math
)) {

// Math.log10
/* global CreateMethodProperty */
// 20.2.2.22. Math.log10 ( x )
CreateMethodProperty(Math, 'log10', function log10(x) {
	return Math.log(x) / Math.LN10;
});

}

if (!("log1p"in Math
)) {

// Math.log1p
/* global CreateMethodProperty */
// 20.2.2.21. Math.log1p ( x )
CreateMethodProperty(Math, 'log1p', function log1p(x) {
	x = Number(x);
	if (-1 < x && x < 1) {
		// Polyfill.io - For numbers in the range −1 < x < 1
		// Because we are using log, the precision of the result will be identical to log(1).
		// To fix this we avoid using log and use the Taylor Series expansion of log.
		// This series converges when |x| < 1. As we can not sum to infinity,
		// we instead sum the first 300 parts of the series to give a close approximation.
		// |x|<1, log(1+x) = x - x^2/2 + x^3/3 - ... + (-1)^(n-1)*x^n/n + ...
		var y = x;
		for (var i = 2; i <= 300; i++) {
			y += Math.pow((-1), (i - 1)) * Math.pow(x, i) / i;
		}
		return y;
	}

	return Math.log(1 + x);
});

}

if (!("log2"in Math
)) {

// Math.log2
/* global CreateMethodProperty */
// 20.2.2.23. Math.log2 ( x )
CreateMethodProperty(Math, 'log2', function log2(x) {
	return Math.log(x) / Math.LN2;
});

}

if (!("sign"in Math
)) {

// Math.sign
/* global CreateMethodProperty */
// 20.2.2.29. Math.sign ( x )
CreateMethodProperty(Math, 'sign', function sign(x) {
	x = Number(x);
	// If x is NaN, the result is NaN.
	if (isNaN(x)) {
		return NaN;
	}
	// If x is -0, the result is -0.
	if (1 / x === -Infinity) {
		return -0;
	}
	// If x is +0, the result is +0.
	if (1 / x === Infinity) {
		return 0;
	}
	// If x is negative and not -0, the result is -1.
	if (x < 0) {
		return -1;
	}
	// If x is positive and not +0, the result is +1.
	if (x > 0) {
		return 1;
	}
});

}

if (!("sinh"in Math
)) {

// Math.sinh
/* global CreateMethodProperty */
// 20.2.2.31. Math.sinh ( x )
CreateMethodProperty(Math, 'sinh', function sinh(x) {
	var s = (x < 0) ? -1 : 1;
	var absx = Math.abs(x);
	if (absx < 22) {
		if (absx < Math.pow(2, -28)) {
			return x;
		}
		var t = Math.exp(absx) - 1;
		if (absx < 1) {
			return (s * (2 * t - t * t / (t + 1)))/2;
		}
		return (s * (t + t / (t + 1)))/2;
	}
	if (absx < 709.7822265625) {
		return (s * Math.exp(absx))/2;
	}
	var w = Math.exp(0.5 * absx);
	t = (s * w)/2;
	return t * w;
});

}

if (!("tanh"in Math
)) {

// Math.tanh
/* global CreateMethodProperty */
// 20.2.2.34. Math.tanh ( x )
CreateMethodProperty(Math, 'tanh', function tanh(x) {
	var y;

	return x === Infinity ? 1 : x === -Infinity ? -1 : (y = Math.exp(2 * x), (y - 1) / (y + 1));
});

}

if (!("trunc"in Math
)) {

// Math.trunc
/* global CreateMethodProperty */
CreateMethodProperty(Math, 'trunc', function trunc(x) {
	return x < 0 ? Math.ceil(x) : Math.floor(x);
});

}

if (!("freeze"in Object
)) {

// Object.freeze
/* global CreateMethodProperty */
// 19.1.2.6. Object.freeze ( O )
CreateMethodProperty(Object, 'freeze', function freeze(O) {
	// This feature cannot be implemented fully as a polyfill.
	// We choose to silently fail which allows "securable" code
	// to "gracefully" degrade to working but insecure code.
	return O;
});

}

if (!("getPrototypeOf"in Object
)) {

// Object.getPrototypeOf
/* global CreateMethodProperty */
// Based on: https://github.com/es-shims/es5-shim/blob/master/es5-sham.js

// https://github.com/es-shims/es5-shim/issues#issue/2
// http://ejohn.org/blog/objectgetprototypeof/
// recommended by fschaefer on github
//
// sure, and webreflection says ^_^
// ... this will nerever possibly return null
// ... Opera Mini breaks here with infinite loops
CreateMethodProperty(Object, 'getPrototypeOf', function getPrototypeOf(object) {
	if (object !== Object(object)) {
		throw new TypeError('Object.getPrototypeOf called on non-object');
	}
	var proto = object.__proto__;
	if (proto || proto === null) {
		return proto;
	} else if (typeof object.constructor == 'function' && object instanceof object.constructor) {
		return object.constructor.prototype;
	} else if (object instanceof Object) {
		return Object.prototype;
	} else {
		// Correctly return null for Objects created with `Object.create(null)`
		// (shammed or native) or `{ __proto__: null}`.  Also returns null for
		// cross-realm objects on browsers that lack `__proto__` support (like
		// IE <11), but that's the best we can do.
		return null;
	}
});

}

if (!("keys"in Object&&function(){return 2===Object.keys(arguments).length}(1,2)&&function(){try{return Object.keys(""),!0}catch(t){return!1}}()
)) {

// Object.keys
/* global CreateMethodProperty */
CreateMethodProperty(Object, "keys", (function() {
	'use strict';

	// modified from https://github.com/es-shims/object-keys

	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasPrototypeEnumBug = isEnumerable.call(function () { }, 'prototype');
	function hasProtoEnumBug() {
		// Object.create polyfill creates an enumerable __proto__
		var createdObj;
		try {
			createdObj = Object.create({});
		} catch (e) {
			// If this fails the polyfil isn't loaded yet, but will be.
			// Can't add it to depedencies because of it would create a circular depedency.
			return true;
		}

		return isEnumerable.call(createdObj, '__proto__')
	}

	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	function isArgumentsObject(value) {
		var str = toStr.call(value);
		var isArgs = str === '[object Arguments]';
		if (!isArgs) {
			isArgs = str !== '[object Array]' &&
				value !== null &&
				typeof value === 'object' &&
				typeof value.length === 'number' &&
				value.length >= 0 &&
				toStr.call(value.callee) === '[object Function]';
		}
		return isArgs;
	}

	return function keys(object) {
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgumentsObject(object);
		var isString = toStr.call(object) === '[object String]';
		var theKeys = [];

		if (object === undefined || object === null) {
			throw new TypeError('Cannot convert undefined or null to object');
		}

		var skipPrototype = hasPrototypeEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(hasProtoEnumBug() && name === '__proto__') && !(skipPrototype && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}()));

}


// _ESAbstract.Get
// 7.3.1. Get ( O, P )
function Get(O, P) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(O) is Object.
	// 2. Assert: IsPropertyKey(P) is true.
	// 3. Return ? O.[[Get]](P, O).
	return O[P];
}

// _ESAbstract.HasOwnProperty
// 7.3.11 HasOwnProperty (O, P)
function HasOwnProperty(o, p) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(O) is Object.
	// 2. Assert: IsPropertyKey(P) is true.
	// 3. Let desc be ? O.[[GetOwnProperty]](P).
	// 4. If desc is undefined, return false.
	// 5. Return true.
	// Polyfill.io - As we expect user agents to support ES3 fully we can skip the above steps and use Object.prototype.hasOwnProperty to do them for us.
	return Object.prototype.hasOwnProperty.call(o, p);
}

// _ESAbstract.HasProperty
// 7.3.10. HasProperty ( O, P )
function HasProperty(O, P) { // eslint-disable-line no-unused-vars
	// Assert: Type(O) is Object.
	// Assert: IsPropertyKey(P) is true.
	// Return ? O.[[HasProperty]](P).
	return P in O;
}

// _ESAbstract.IsArray
// 7.2.2. IsArray ( argument )
function IsArray(argument) { // eslint-disable-line no-unused-vars
	// 1. If Type(argument) is not Object, return false.
	// 2. If argument is an Array exotic object, return true.
	// 3. If argument is a Proxy exotic object, then
		// a. If argument.[[ProxyHandler]] is null, throw a TypeError exception.
		// b. Let target be argument.[[ProxyTarget]].
		// c. Return ? IsArray(target).
	// 4. Return false.

	// Polyfill.io - We can skip all the above steps and check the string returned from Object.prototype.toString().
	return Object.prototype.toString.call(argument) === '[object Array]';
}
if (!("isArray"in Array
)) {

// Array.isArray
/* global CreateMethodProperty, IsArray */
// 22.1.2.2. Array.isArray ( arg )
CreateMethodProperty(Array, 'isArray', function isArray(arg) {
	// 1. Return ? IsArray(arg).
	return IsArray(arg);
});

}


// _ESAbstract.IsCallable
// 7.2.3. IsCallable ( argument )
function IsCallable(argument) { // eslint-disable-line no-unused-vars
	// 1. If Type(argument) is not Object, return false.
	// 2. If argument has a [[Call]] internal method, return true.
	// 3. Return false.

	// Polyfill.io - Only function objects have a [[Call]] internal method. This means we can simplify this function to check that the argument has a type of function.
	return typeof argument === 'function';
}
if (!("bind"in Function.prototype
)) {

// Function.prototype.bind
/* global CreateMethodProperty, IsCallable */
// 19.2.3.2. Function.prototype.bind ( thisArg, ...args )
// https://github.com/es-shims/es5-shim/blob/d6d7ff1b131c7ba14c798cafc598bb6780d37d3b/es5-shim.js#L182
CreateMethodProperty(Function.prototype, 'bind', function bind(that) { // .length is 1
	// add necessary es5-shim utilities
	var $Array = Array;
	var $Object = Object;
	var ArrayPrototype = $Array.prototype;
	var Empty = function Empty() { };
	var array_slice = ArrayPrototype.slice;
	var array_concat = ArrayPrototype.concat;
	var array_push = ArrayPrototype.push;
	var max = Math.max;
	// /add necessary es5-shim utilities

	// 1. Let Target be the this value.
	var target = this;
	// 2. If IsCallable(Target) is false, throw a TypeError exception.
	if (!IsCallable(target)) {
		throw new TypeError('Function.prototype.bind called on incompatible ' + target);
	}
	// 3. Let A be a new (possibly empty) internal list of all of the
	//   argument values provided after thisArg (arg1, arg2 etc), in order.
	// XXX slicedArgs will stand in for "A" if used
	var args = array_slice.call(arguments, 1); // for normal call
	// 4. Let F be a new native ECMAScript object.
	// 11. Set the [[Prototype]] internal property of F to the standard
	//   built-in Function prototype object as specified in 15.3.3.1.
	// 12. Set the [[Call]] internal property of F as described in
	//   15.3.4.5.1.
	// 13. Set the [[Construct]] internal property of F as described in
	//   15.3.4.5.2.
	// 14. Set the [[HasInstance]] internal property of F as described in
	//   15.3.4.5.3.
	var bound;
	var binder = function () {

		if (this instanceof bound) {
			// 15.3.4.5.2 [[Construct]]
			// When the [[Construct]] internal method of a function object,
			// F that was created using the bind function is called with a
			// list of arguments ExtraArgs, the following steps are taken:
			// 1. Let target be the value of F's [[TargetFunction]]
			//   internal property.
			// 2. If target has no [[Construct]] internal method, a
			//   TypeError exception is thrown.
			// 3. Let boundArgs be the value of F's [[BoundArgs]] internal
			//   property.
			// 4. Let args be a new list containing the same values as the
			//   list boundArgs in the same order followed by the same
			//   values as the list ExtraArgs in the same order.
			// 5. Return the result of calling the [[Construct]] internal
			//   method of target providing args as the arguments.

			var result = target.apply(
				this,
				array_concat.call(args, array_slice.call(arguments))
			);
			if ($Object(result) === result) {
				return result;
			}
			return this;

		} else {
			// 15.3.4.5.1 [[Call]]
			// When the [[Call]] internal method of a function object, F,
			// which was created using the bind function is called with a
			// this value and a list of arguments ExtraArgs, the following
			// steps are taken:
			// 1. Let boundArgs be the value of F's [[BoundArgs]] internal
			//   property.
			// 2. Let boundThis be the value of F's [[BoundThis]] internal
			//   property.
			// 3. Let target be the value of F's [[TargetFunction]] internal
			//   property.
			// 4. Let args be a new list containing the same values as the
			//   list boundArgs in the same order followed by the same
			//   values as the list ExtraArgs in the same order.
			// 5. Return the result of calling the [[Call]] internal method
			//   of target providing boundThis as the this value and
			//   providing args as the arguments.

			// equiv: target.call(this, ...boundArgs, ...args)
			return target.apply(
				that,
				array_concat.call(args, array_slice.call(arguments))
			);

		}

	};

	// 15. If the [[Class]] internal property of Target is "Function", then
	//     a. Let L be the length property of Target minus the length of A.
	//     b. Set the length own property of F to either 0 or L, whichever is
	//       larger.
	// 16. Else set the length own property of F to 0.

	var boundLength = max(0, target.length - args.length);

	// 17. Set the attributes of the length own property of F to the values
	//   specified in 15.3.5.1.
	var boundArgs = [];
	for (var i = 0; i < boundLength; i++) {
		array_push.call(boundArgs, '$' + i);
	}

	// XXX Build a dynamic function with desired amount of arguments is the only
	// way to set the length property of a function.
	// In environments where Content Security Policies enabled (Chrome extensions,
	// for ex.) all use of eval or Function costructor throws an exception.
	// However in all of these environments Function.prototype.bind exists
	// and so this code will never be executed.
	bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

	if (target.prototype) {
		Empty.prototype = target.prototype;
		bound.prototype = new Empty();
		// Clean up dangling references.
		Empty.prototype = null;
	}

	// TODO
	// 18. Set the [[Extensible]] internal property of F to true.

	// TODO
	// 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
	// 20. Call the [[DefineOwnProperty]] internal method of F with
	//   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
	//   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
	//   false.
	// 21. Call the [[DefineOwnProperty]] internal method of F with
	//   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
	//   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
	//   and false.

	// TODO
	// NOTE Function objects created using Function.prototype.bind do not
	// have a prototype property or the [[Code]], [[FormalParameters]], and
	// [[Scope]] internal properties.
	// XXX can't delete prototype in pure-js.

	// 22. Return F.
	return bound;
});

}


// _ESAbstract.RequireObjectCoercible
// 7.2.1. RequireObjectCoercible ( argument )
// The abstract operation ToObject converts argument to a value of type Object according to Table 12:
// Table 12: ToObject Conversions
/*
|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Argument Type | Result                                                                                                                             |
|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Undefined     | Throw a TypeError exception.                                                                                                       |
| Null          | Throw a TypeError exception.                                                                                                       |
| Boolean       | Return argument.                                                                                                                   |
| Number        | Return argument.                                                                                                                   |
| String        | Return argument.                                                                                                                   |
| Symbol        | Return argument.                                                                                                                   |
| Object        | Return argument.                                                                                                                   |
|----------------------------------------------------------------------------------------------------------------------------------------------------|
*/
function RequireObjectCoercible(argument) { // eslint-disable-line no-unused-vars
	if (argument === null || argument === undefined) {
		throw TypeError(Object.prototype.toString.call(argument) + ' is not coercible to Object.');
	}
	return argument;
}

// _ESAbstract.SameValueNonNumber
// 7.2.12. SameValueNonNumber ( x, y )
function SameValueNonNumber(x, y) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(x) is not Number.
	// 2. Assert: Type(x) is the same as Type(y).
	// 3. If Type(x) is Undefined, return true.
	// 4. If Type(x) is Null, return true.
	// 5. If Type(x) is String, then
		// a. If x and y are exactly the same sequence of code units (same length and same code units at corresponding indices), return true; otherwise, return false.
	// 6. If Type(x) is Boolean, then
		// a. If x and y are both true or both false, return true; otherwise, return false.
	// 7. If Type(x) is Symbol, then
		// a. If x and y are both the same Symbol value, return true; otherwise, return false.
	// 8. If x and y are the same Object value, return true. Otherwise, return false.

	// Polyfill.io - We can skip all above steps because the === operator does it all for us.
	return x === y;
}

// _ESAbstract.ToBoolean
// 7.1.2. ToBoolean ( argument )
// The abstract operation ToBoolean converts argument to a value of type Boolean according to Table 9:
/*
--------------------------------------------------------------------------------------------------------------
| Argument Type | Result                                                                                     |
--------------------------------------------------------------------------------------------------------------
| Undefined     | Return false.                                                                              |
| Null          | Return false.                                                                              |
| Boolean       | Return argument.                                                                           |
| Number        | If argument is +0, -0, or NaN, return false; otherwise return true.                        |
| String        | If argument is the empty String (its length is zero), return false; otherwise return true. |
| Symbol        | Return true.                                                                               |
| Object        | Return true.                                                                               |
--------------------------------------------------------------------------------------------------------------
*/
function ToBoolean(argument) { // eslint-disable-line no-unused-vars
	return Boolean(argument);
}

// _ESAbstract.ToNumber
// 7.1.3. ToNumber ( argument )
function ToNumber(argument) { // eslint-disable-line no-unused-vars
	return Number(argument);
}

// _ESAbstract.ToIntegerOrInfinity
/* global ToNumber */
// 7.1.5. ToIntegerOrInfinity ( argument )
function ToIntegerOrInfinity(argument) { // eslint-disable-line no-unused-vars
	// 1. Let number be ? ToNumber(argument).
	var number = ToNumber(argument);
	// 2. If number is NaN, +0𝔽, or -0𝔽, return 0.
	if (isNaN(number) || number === 0 || 1/number === -Infinity) return 0;
	// 3. If number is +∞𝔽, return +∞.
	if (number === Infinity) return Infinity;
	// 4. If number is -∞𝔽, return -∞.
	if (number === -Infinity) return -Infinity;
	// 5. Let integer be floor(abs(ℝ(number))).
	var integer = Math.floor(Math.abs(number));
	// 6. If number < +0𝔽, set integer to -integer.
	if (number < 0) integer = -integer;
	// 7. Return integer.
	return integer;
}

// _ESAbstract.ToObject
// 7.1.13 ToObject ( argument )
// The abstract operation ToObject converts argument to a value of type Object according to Table 12:
// Table 12: ToObject Conversions
/*
|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Argument Type | Result                                                                                                                             |
|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Undefined     | Throw a TypeError exception.                                                                                                       |
| Null          | Throw a TypeError exception.                                                                                                       |
| Boolean       | Return a new Boolean object whose [[BooleanData]] internal slot is set to argument. See 19.3 for a description of Boolean objects. |
| Number        | Return a new Number object whose [[NumberData]] internal slot is set to argument. See 20.1 for a description of Number objects.    |
| String        | Return a new String object whose [[StringData]] internal slot is set to argument. See 21.1 for a description of String objects.    |
| Symbol        | Return a new Symbol object whose [[SymbolData]] internal slot is set to argument. See 19.4 for a description of Symbol objects.    |
| Object        | Return argument.                                                                                                                   |
|----------------------------------------------------------------------------------------------------------------------------------------------------|
*/
function ToObject(argument) { // eslint-disable-line no-unused-vars
	if (argument === null || argument === undefined) {
		throw TypeError();
	}
	return Object(argument);
}

// _ESAbstract.GetV
/* global ToObject */
// 7.3.2 GetV (V, P)
function GetV(v, p) { // eslint-disable-line no-unused-vars
	// 1. Assert: IsPropertyKey(P) is true.
	// 2. Let O be ? ToObject(V).
	var o = ToObject(v);
	// 3. Return ? O.[[Get]](P, V).
	return o[p];
}

// _ESAbstract.GetMethod
/* global GetV, IsCallable */
// 7.3.9. GetMethod ( V, P )
function GetMethod(V, P) { // eslint-disable-line no-unused-vars
	// 1. Assert: IsPropertyKey(P) is true.
	// 2. Let func be ? GetV(V, P).
	var func = GetV(V, P);
	// 3. If func is either undefined or null, return undefined.
	if (func === null || func === undefined) {
		return undefined;
	}
	// 4. If IsCallable(func) is false, throw a TypeError exception.
	if (IsCallable(func) === false) {
		throw new TypeError('Method not callable: ' + P);
	}
	// 5. Return func.
	return func;
}

// _ESAbstract.Invoke
/* global GetV, Call */
// 7.3.18. Invoke ( V, P [ , argumentsList ] )
function Invoke(V, P /* [ , argumentsList ] */) { // eslint-disable-line no-unused-vars
	// 1. Assert: IsPropertyKey(P) is true.
	// 2. If argumentsList is not present, set argumentsList to a new empty List.
	var argumentsList = arguments.length > 2 ? arguments[2] : [];
	// 3. Let func be ? GetV(V, P).
	var func = GetV(V, P);
	// 4. Return ? Call(func, V, argumentsList).
	return Call(func, V, argumentsList);
}

// _ESAbstract.ToUint32
// 7.1.6. ToUint32 ( argument )
function ToUint32(argument) { // eslint-disable-line no-unused-vars
	// 1. Let number be ? ToNumber(argument).
	var number = Number(argument);
	// 2. If number is NaN, +0, -0, +∞, or -∞, return +0.
	if (isNaN(number) || 1/number === Infinity || 1/number === -Infinity || number === Infinity || number === -Infinity) {
		return 0;
	}
	// 3. Let int be the mathematical value that is the same sign as number and whose magnitude is floor(abs(number)).
	var int = ((number < 0) ? -1 : 1) * Math.floor(Math.abs(number));
	// 4. Let int32bit be int modulo 2^32.
	var int32bit = int >>> 0;
	// 5. Return int32bit.
	return int32bit;
}
if (!("clz32"in Math
)) {

// Math.clz32
/* global CreateMethodProperty, ToUint32 */
// 20.2.2.11. Math.clz32 ( x )
CreateMethodProperty(Math, 'clz32', function clz32(x) {
	// 1. Let n be ToUint32(x).
	var n = ToUint32(x);
	// 2. Let p be the number of leading zero bits in the 32-bit binary representation of n.
	var p = n ? 32 - n.toString(2).length : 32;
	// 3. Return p.
	return p;
});

}

if (!("imul"in Math
)) {

// Math.imul
/* global CreateMethodProperty, ToUint32 */
// 20.2.2.19. Math.imul ( x, y )
CreateMethodProperty(Math, 'imul', function imul(x, y) {
	// 1. Let a be ToUint32(x).
	var a = ToUint32(x);
	// 2. Let b be ToUint32(y).
	var b = ToUint32(y);
	var UINT16 = 0xffff;
	var aHigh = a >>> 16 & UINT16;
	var aLow = UINT16 & a;
	var bHigh = b >>> 16 & UINT16;
	var bLow = UINT16 & b;
	// the shift by 0 fixes the sign on the high part
	// the final |0 converts the unsigned value into a signed value
	return aLow * bLow + (aHigh * bLow + aLow * bHigh << 16 >>> 0) | 0;
});

}


// _ESAbstract.Type
// "Type(x)" is used as shorthand for "the type of x"...
function Type(x) { // eslint-disable-line no-unused-vars
	switch (typeof x) {
		case 'undefined':
			return 'undefined';
		case 'boolean':
			return 'boolean';
		case 'number':
			return 'number';
		case 'string':
			return 'string';
		case 'symbol':
			return 'symbol';
		default:
			// typeof null is 'object'
			if (x === null) return 'null';
			// Polyfill.io - This is here because a Symbol polyfill will have a typeof `object`.
			if ('Symbol' in self && (x instanceof self.Symbol || x.constructor === self.Symbol)) return 'symbol';

			return 'object';
	}
}
if (!("isFinite"in Number
)) {

// Number.isFinite
/* global CreateMethodProperty, Type */
(function () {
	var that = self;
	// 20.1.2.2. Number.isFinite ( number )
	CreateMethodProperty(Number, 'isFinite', function isFinite(number) {
		// 1. If Type(number) is not Number, return false.
		if (Type(number) !== 'number') {
			return false;
		}
		// 2. If number is NaN, +∞, or -∞, return false.
		// 3. Otherwise, return true.
		// Polyfill.io - We use isFinite as it implements steps 2 and 3.
		return that.isFinite(number);
	});
}());

}

if (!("isNaN"in Number
)) {

// Number.isNaN
/* global CreateMethodProperty, Type */
(function () {
	var that = self;
	// 20.1.2.4. Number.isNaN ( number )
	CreateMethodProperty(Number, 'isNaN', function isNaN(number) {
		// 1. If Type(number) is not Number, return false.
		if (Type(number) !== 'number') {
			return false;
		}
		// 2. If number is NaN, return true.
		if (that.isNaN(number)) {
			return true;
		}
		// 3. Otherwise, return false.
		return false;
	});
}());

}

if (!("isExtensible"in Object
)) {

// Object.isExtensible
/* global CreateMethodProperty, Type */

(function (nativeIsExtensible) {
	// 19.1.2.13 Object.isExtensible ( O )
	CreateMethodProperty(Object, 'isExtensible', function isExtensible(O) {
		// 1. If Type(O) is not Object, return false.
		if (Type(O) !== "object") {
			return false;
		}
		// 2. Return ? IsExtensible(O).
		return nativeIsExtensible ? nativeIsExtensible(O) : true;
	});
}(Object.isExtensible));

}

if (!("seal"in Object&&function(){try{return Object.seal("1"),!0}catch(t){return!1}}()
)) {

// Object.seal
/* global CreateMethodProperty, Type */
// 19.1.2.19 Object.seal ( O )
(function(originalObjectSeal) {
	CreateMethodProperty(Object, 'seal', function seal(O) {
		// 1. If Type(O) is not Object, return O.
		if (Type(O) === 'object') {
			return O;
		}
		// 2. Let status be ? SetIntegrityLevel(O, "sealed").
		// 3. If status is false, throw a TypeError exception.
		// 4. Return O.
		return originalObjectSeal ? originalObjectSeal(O) : O;
	});
}(Object.seal));

}

if (!("flags"in RegExp.prototype
)) {

// RegExp.prototype.flags
/* global Get, ToBoolean, Type */
Object.defineProperty(RegExp.prototype, 'flags', {
	configurable: true,
	enumerable: false,
	get: function () {
		// 21.2.5.3.1 Let R be the this value.
		var R = this;

		// 21.2.5.3.2 If Type(R) is not Object, throw a TypeError exception.
		if (Type(R) !== 'object') {
			throw new TypeError('Method called on incompatible type: must be an object.');
		}
		// 21.2.5.3.3 Let result be the empty String.
		var result = '';

		// 21.2.5.3.4 Let global be ToBoolean(? Get(R, "global")).
		var global = ToBoolean(Get(R, 'global'));

		// 21.2.5.3.5 If global is true, append the code unit 0x0067 (LATIN SMALL LETTER G) as the last code unit of result.
		if (global) {
			result += 'g';
		}

		// 21.2.5.3.6 Let ignoreCase be ToBoolean(? Get(R, "ignoreCase")).
		var ignoreCase = ToBoolean(Get(R, 'ignoreCase'));

		// 21.2.5.3.7 If ignoreCase is true, append the code unit 0x0069 (LATIN SMALL LETTER I) as the last code unit of result.
		if (ignoreCase) {
			result += 'i';
		}

		// 21.2.5.3.8 Let multiline be ToBoolean(? Get(R, "multiline")).
		var multiline = ToBoolean(Get(R, 'multiline'));

		// 21.2.5.3.9 If multiline is true, append the code unit 0x006D (LATIN SMALL LETTER M) as the last code unit of result.
		if (multiline) {
			result += 'm';
		}

		// 21.2.5.3.10 Let unicode be ToBoolean(? Get(R, "unicode")).
		var unicode = ToBoolean(Get(R, 'unicode'));

		// 21.2.5.3.11 If unicode is true, append the code unit 0x0075 (LATIN SMALL LETTER U) as the last code unit of result.
		if (unicode) {
			result += 'u';
		}

		// 21.2.5.3.12 Let sticky be ToBoolean(? Get(R, "sticky")).
		var sticky = ToBoolean(Get(R, 'sticky'));

		// 21.2.5.3.13 If sticky is true, append the code unit 0x0079 (LATIN SMALL LETTER Y) as the last code unit of result.
		if (sticky) {
			result += 'y';
		}

		// 21.2.5.3.14 Return result.
		return result;
	}
});

}


// _ESAbstract.CreateIterResultObject
/* global Type, CreateDataProperty */
// 7.4.7. CreateIterResultObject ( value, done )
function CreateIterResultObject(value, done) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(done) is Boolean.
	if (Type(done) !== 'boolean') {
		throw new Error();
	}
	// 2. Let obj be ObjectCreate(%ObjectPrototype%).
	var obj = {};
	// 3. Perform CreateDataProperty(obj, "value", value).
	CreateDataProperty(obj, "value", value);
	// 4. Perform CreateDataProperty(obj, "done", done).
	CreateDataProperty(obj, "done", done);
	// 5. Return obj.
	return obj;
}

// _ESAbstract.GetPrototypeFromConstructor
/* global Get, Type */
// 9.1.14. GetPrototypeFromConstructor ( constructor, intrinsicDefaultProto )
function GetPrototypeFromConstructor(constructor, intrinsicDefaultProto) { // eslint-disable-line no-unused-vars
	// 1. Assert: intrinsicDefaultProto is a String value that is this specification's name of an intrinsic object. The corresponding object must be an intrinsic that is intended to be used as the [[Prototype]] value of an object.
	// 2. Assert: IsCallable(constructor) is true.
	// 3. Let proto be ? Get(constructor, "prototype").
	var proto = Get(constructor, "prototype");
	// 4. If Type(proto) is not Object, then
	if (Type(proto) !== 'object') {
		// a. Let realm be ? GetFunctionRealm(constructor).
		// b. Set proto to realm's intrinsic object named intrinsicDefaultProto.
		proto = intrinsicDefaultProto;
	}
	// 5. Return proto.
	return proto;
}

// _ESAbstract.GetSubstitution
/* global Type */
// 21.1.3.17.1 GetSubstitution ( matched, str, position, captures, namedCaptures, replacement )
var GetSubstitution = (function() { // eslint-disable-line no-unused-vars
	function isDigit(string) {
		return /^[0-9]$/.test(string);
	}
	return function GetSubstitution ( matched, str, position, captures, namedCaptures, replacement ) { // eslint-disable-line no-unused-vars
		// 1. Assert: Type(matched) is String.
		// 2. Let matchLength be the number of code units in matched.
		var matchLength = matched.length;
		// 3. Assert: Type(str) is String.
		// 4. Let stringLength be the number of code units in str.
		var stringLength = str.length;
		// 5. Assert: ! IsNonNegativeInteger(position) is true.
		// 6. Assert: position ≤ stringLength.
		// 7. Assert: captures is a possibly empty List of Strings.
		// 8. Assert: Type(replacement) is String.
		// 9. Let tailPos be position + matchLength.
		var tailPos = position + matchLength;
		// 10. Let m be the number of elements in captures.
		var m = captures.length;
		// 11. Let result be the String value derived from replacement by copying
		// code unit elements from replacement to result while performing replacements
		// as specified in Table 53. These $ replacements are done left-to-right, and,
		// once such a replacement is performed, the new replacement text is not subject to further replacements.
		var result = '';
		for (var i = 0; i < replacement.length; i += 1) {
			// if this is a $, and it's not the end of the replacement
			var current = replacement.charAt(i);
			var isLast = (i + 1) >= replacement.length;
			var nextIsLast = (i + 2) >= replacement.length;
			if (current === '$' && !isLast) {
				var next = replacement.charAt(i + 1);
				if (next === '$') {
					result += '$';
					i += 1;
				} else if (next === '&') {
					result += matched;
					i += 1;
				} else if (next === '`') {
					result += position === 0 ? '' : str.slice(0, position - 1);
					i += 1;
				} else if (next === "'") {
					result += tailPos >= stringLength ? '' : str.slice(tailPos);
					i += 1;
				} else {
					var nextNext = nextIsLast ? null : replacement.charAt(i + 2);
					if (isDigit(next) && next !== '0' && (nextIsLast || !isDigit(nextNext))) {
						// $1 through $9, and not followed by a digit
						var n = parseInt(next, 10);
						// if (n > m, impl-defined)
						result += n <= m && Type(captures[n - 1]) === 'Undefined' ? '' : captures[n - 1];
						i += 1;
					} else if (isDigit(next) && (nextIsLast || isDigit(nextNext))) {
						// $00 through $99
						var nn = next + nextNext;
						var nnI = parseInt(nn, 10) - 1;
						// if nn === '00' or nn > m, impl-defined
						result += nn <= m && Type(captures[nnI]) === 'Undefined' ? '' : captures[nnI];
						i += 2;
					} else {
						result += '$';
					}
				}
			} else {
				// the final $, or else not a $
				result += replacement.charAt(i);
			}
		}
		// 12. Return result.
		return result;
	};
}());

// _ESAbstract.IsConstructor
/* global Type */
// 7.2.4. IsConstructor ( argument )
function IsConstructor(argument) { // eslint-disable-line no-unused-vars
	// 1. If Type(argument) is not Object, return false.
	if (Type(argument) !== 'object') {
		return false;
	}
	// 2. If argument has a [[Construct]] internal method, return true.
	// 3. Return false.

	// Polyfill.io - `new argument` is the only way  to truly test if a function is a constructor.
	// We choose to not use`new argument` because the argument could have side effects when called.
	// Instead we check to see if the argument is a function and if it has a prototype.
	// Arrow functions do not have a [[Construct]] internal method, nor do they have a prototype.
	return typeof argument === 'function' && !!argument.prototype;
}

// _ESAbstract.IsRegExp
/* global Type, Get, ToBoolean */
// 7.2.8. IsRegExp ( argument )
function IsRegExp(argument) { // eslint-disable-line no-unused-vars
	// 1. If Type(argument) is not Object, return false.
	if (Type(argument) !== 'object') {
		return false;
	}
	// 2. Let matcher be ? Get(argument, @@match).
	var matcher = 'Symbol' in self && 'match' in self.Symbol ? Get(argument, self.Symbol.match) : undefined;
	// 3. If matcher is not undefined, return ToBoolean(matcher).
	if (matcher !== undefined) {
		return ToBoolean(matcher);
	}
	// 4. If argument has a [[RegExpMatcher]] internal slot, return true.
	try {
		var lastIndex = argument.lastIndex;
		argument.lastIndex = 0;
		RegExp.prototype.exec.call(argument);
		return true;
	// eslint-disable-next-line no-empty
	} catch (e) {} finally {
		argument.lastIndex = lastIndex;
	}
	// 5. Return false.
	return false;
}

// _ESAbstract.IteratorClose
/* global GetMethod, Type, Call */
// 7.4.6. IteratorClose ( iteratorRecord, completion )
function IteratorClose(iteratorRecord, completion) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(iteratorRecord.[[Iterator]]) is Object.
	if (Type(iteratorRecord['[[Iterator]]']) !== 'object') {
		throw new Error(Object.prototype.toString.call(iteratorRecord['[[Iterator]]']) + 'is not an Object.');
	}
	// 2. Assert: completion is a Completion Record.
	// Polyfill.io - Ignoring this step as there is no way to check if something is a Completion Record in userland JavaScript.

	// 3. Let iterator be iteratorRecord.[[Iterator]].
	var iterator = iteratorRecord['[[Iterator]]'];
	// 4. Let return be ? GetMethod(iterator, "return").
	// Polyfill.io - We name it  returnMethod because return is a keyword and can not be used as an identifier (E.G. variable name, function name etc).
	var returnMethod = GetMethod(iterator, "return");
	// 5. If return is undefined, return Completion(completion).
	if (returnMethod === undefined) {
		return completion;
	}
	// 6. Let innerResult be Call(return, iterator, « »).
	try {
		var innerResult = Call(returnMethod, iterator);
	} catch (error) {
		var innerException = error;
	}
	// 7. If completion.[[Type]] is throw, return Completion(completion).
	if (completion) {
		return completion;
	}
	// 8. If innerResult.[[Type]] is throw, return Completion(innerResult).
	if (innerException) {
		throw innerException;
	}
	// 9. If Type(innerResult.[[Value]]) is not Object, throw a TypeError exception.
	if (Type(innerResult) !== 'object') {
		throw new TypeError("Iterator's return method returned a non-object.");
	}
	// 10. Return Completion(completion).
	return completion;
}

// _ESAbstract.IteratorComplete
/* global Type, ToBoolean, Get */
// 7.4.3 IteratorComplete ( iterResult )
function IteratorComplete(iterResult) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(iterResult) is Object.
	if (Type(iterResult) !== 'object') {
		throw new Error(Object.prototype.toString.call(iterResult) + 'is not an Object.');
	}
	// 2. Return ToBoolean(? Get(iterResult, "done")).
	return ToBoolean(Get(iterResult, "done"));
}

// _ESAbstract.IteratorNext
/* global Call, Type */
// 7.4.2. IteratorNext ( iteratorRecord [ , value ] )
function IteratorNext(iteratorRecord /* [, value] */) { // eslint-disable-line no-unused-vars
	// 1. If value is not present, then
	if (arguments.length < 2) {
		// a. Let result be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]], « »).
		var result = Call(iteratorRecord['[[NextMethod]]'], iteratorRecord['[[Iterator]]']);
	// 2. Else,
	} else {
		// a. Let result be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]], « value »).
		result = Call(iteratorRecord['[[NextMethod]]'], iteratorRecord['[[Iterator]]'], [arguments[1]]);
	}
	// 3. If Type(result) is not Object, throw a TypeError exception.
	if (Type(result) !== 'object') {
		throw new TypeError('bad iterator');
	}
	// 4. Return result.
	return result;
}

// _ESAbstract.IteratorStep
/* global IteratorNext, IteratorComplete */
// 7.4.5. IteratorStep ( iteratorRecord )
function IteratorStep(iteratorRecord) { // eslint-disable-line no-unused-vars
	// 1. Let result be ? IteratorNext(iteratorRecord).
	var result = IteratorNext(iteratorRecord);
	// 2. Let done be ? IteratorComplete(result).
	var done = IteratorComplete(result);
	// 3. If done is true, return false.
	if (done === true) {
		return false;
	}
	// 4. Return result.
	return result;
}

// _ESAbstract.IteratorValue
/* global Type, Get */
// 7.4.4 IteratorValue ( iterResult )
function IteratorValue(iterResult) { // eslint-disable-line no-unused-vars
	// Assert: Type(iterResult) is Object.
	if (Type(iterResult) !== 'object') {
		throw new Error(Object.prototype.toString.call(iterResult) + 'is not an Object.');
	}
	// Return ? Get(iterResult, "value").
	return Get(iterResult, "value");
}

// _ESAbstract.OrdinaryToPrimitive
/* global Get, IsCallable, Call, Type */
// 7.1.1.1. OrdinaryToPrimitive ( O, hint )
function OrdinaryToPrimitive(O, hint) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(O) is Object.
	// 2. Assert: Type(hint) is String and its value is either "string" or "number".
	// 3. If hint is "string", then
	if (hint === 'string') {
		// a. Let methodNames be « "toString", "valueOf" ».
		var methodNames = ['toString', 'valueOf'];
		// 4. Else,
	} else {
		// a. Let methodNames be « "valueOf", "toString" ».
		methodNames = ['valueOf', 'toString'];
	}
	// 5. For each name in methodNames in List order, do
	for (var i = 0; i < methodNames.length; ++i) {
		var name = methodNames[i];
		// a. Let method be ? Get(O, name).
		var method = Get(O, name);
		// b. If IsCallable(method) is true, then
		if (IsCallable(method)) {
			// i. Let result be ? Call(method, O).
			var result = Call(method, O);
			// ii. If Type(result) is not Object, return result.
			if (Type(result) !== 'object') {
				return result;
			}
		}
	}
	// 6. Throw a TypeError exception.
	throw new TypeError('Cannot convert to primitive.');
}

// _ESAbstract.RegExpExec
/* global Call, Get, IsCallable, Type */

// 22.2.5.2.1 RegExpExec ( R, S )
function RegExpExec(R, S) { // eslint-disable-line no-unused-vars
	// 1. Let exec be ? Get(R, "exec").
	var exec = Get(R, 'exec');
	// 2. If IsCallable(exec) is true, then
	if (IsCallable(exec)) {
		// 2.a. Let result be ? Call(exec, R, « S »).
		var result = Call(exec, R, [ S ]);
		// 2.b. If Type(result) is neither Object nor Null, throw a TypeError exception.
		if (Type(result) !== 'object' && Type(result) !== 'null') {
			throw new TypeError('Invalid result: must be an object or null.');
		}
		// 2.c. Return result.
		return result;
	}
	// 3. Perform ? RequireInternalSlot(R, [[RegExpMatcher]]).
	// 4. Return ? RegExpBuiltinExec(R, S).
	return Call(RegExp.prototype.exec, R, [ S ]);
}

// _ESAbstract.SameValue
/* global Type, SameValueNonNumber */
// 7.2.10. SameValue ( x, y )
function SameValue(x, y) { // eslint-disable-line no-unused-vars
	// 1. If Type(x) is different from Type(y), return false.
	if (Type(x) !== Type(y)) {
		return false;
	}
	// 2. If Type(x) is Number, then
	if (Type(x) === 'number') {
		// a. If x is NaN and y is NaN, return true.
		if (isNaN(x) && isNaN(y)) {
			return true;
		}
		// Polyfill.io - 0 === -0 is true, but they are not the same value.
		// b. If x is +0 and y is -0, return false.
		// c. If x is -0 and y is +0, return false.
		if (x === 0 && y === 0 && 1/x !== 1/y) {
			return false;
		}
		// d. If x is the same Number value as y, return true.
		if (x === y) {
			return true;
		}
		// e. Return false.
		return false;
	}
	// 3. Return SameValueNonNumber(x, y).
	return SameValueNonNumber(x, y);
}
if (!("is"in Object
)) {

// Object.is
/* global CreateMethodProperty, SameValue */
// 19.1.2.12. Object.is ( value1, value2 )
CreateMethodProperty(Object, 'is', function is(value1, value2) {
	// 1. Return SameValue(value1, value2).
	return SameValue(value1, value2);
});

}


// _ESAbstract.SameValueZero
/* global Type, SameValueNonNumber */
// 7.2.11. SameValueZero ( x, y )
function SameValueZero (x, y) { // eslint-disable-line no-unused-vars
	// 1. If Type(x) is different from Type(y), return false.
	if (Type(x) !== Type(y)) {
		return false;
	}
	// 2. If Type(x) is Number, then
	if (Type(x) === 'number') {
		// a. If x is NaN and y is NaN, return true.
		if (isNaN(x) && isNaN(y)) {
			return true;
		}
		// b. If x is +0 and y is -0, return true.
		if (1/x === Infinity && 1/y === -Infinity) {
			return true;
		}
		// c. If x is -0 and y is +0, return true.
		if (1/x === -Infinity && 1/y === Infinity) {
			return true;
		}
		// d. If x is the same Number value as y, return true.
		if (x === y) {
			return true;
		}
		// e. Return false.
		return false;
	}
	// 3. Return SameValueNonNumber(x, y).
	return SameValueNonNumber(x, y);
}

// _ESAbstract.SpeciesConstructor
/* global Get, Type, IsConstructor */
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
function SpeciesConstructor (O, defaultConstructor) { // eslint-disable-line no-unused-vars
	// 7.3.20.1 Assert: Type(O) is Object.
	// 7.3.20.2 Let C be ? Get(O, "constructor").
	var C = Get(O, "constructor");
	// 7.3.20.3 If C is undefined, return defaultConstructor.
	if (C === undefined) {
		return defaultConstructor;
	}
	// 7.3.20.4 If Type(C) is not Object, throw a TypeError exception
	if (Type(C) !== 'object') {
		throw new TypeError('O.constructor is not an Object');
	}
	// 7.3.20.5 Let S be ? Get(C, @@species).
	var S = typeof self.Symbol === 'function' && typeof self.Symbol.species === 'symbol' ? C[self.Symbol.species] : undefined;
	// 7.3.20.6 If S is either undefined or null, return defaultConstructor.
	if (S === undefined || S === null) {
		return defaultConstructor;
	}
	// 7.3.20.7 If IsConstructor(S) is true, return S.
	if (IsConstructor(S)) {
		return S;
	}
	// 7.3.20.8 Throw a TypeError exception.
	throw new TypeError('No constructor found');
}

// _ESAbstract.StringIndexOf
/* global */
function StringIndexOf(string, searchValue, fromIndex) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(string) is String.
	// 2. Assert: Type(searchValue) is String.
	// 3. Assert: ! IsNonNegativeInteger(fromIndex) is true.
	// 4. Let len be the length of string.
	var len = string.length;
	// 5. If searchValue is the empty String and fromIndex ≤ len, return fromIndex.
	if (searchValue === "" && fromIndex <= len) {
		return fromIndex;
	}
	// 6. Let searchLen be the length of searchValue.
	var searchLen = searchValue.length;
	// 7. If there exists any integer k such that fromIndex ≤ k ≤ len - searchLen
	// and for all nonnegative integers j less than searchLen, the code unit at
	// index k + j within string is the same as the code unit at index j within searchValue,
	// let pos be the smallest (closest to -∞) such integer. Otherwise, let pos be -1.
	var k = fromIndex;
	var pos = -1;
	while (k + searchLen <= len) {
		var match = true;
		for (var j = 0; j < searchLen; j += 1) {
			if (string[k + j] !== searchValue[j]) {
				match = false;
				break;
			}
		}
		if (match) {
			pos = k;
			break;
		}
		k += 1;
	}
	// 8. Return pos.
	return pos;
}

// _ESAbstract.ToInteger
/* global Type */
// 7.1.4. ToInteger ( argument )
function ToInteger(argument) { // eslint-disable-line no-unused-vars
	if (Type(argument) === 'symbol') {
		throw new TypeError('Cannot convert a Symbol value to a number');
	}

	// 1. Let number be ? ToNumber(argument).
	var number = Number(argument);
	// 2. If number is NaN, return +0.
	if (isNaN(number)) {
		return 0;
	}
	// 3. If number is +0, -0, +∞, or -∞, return number.
	if (1/number === Infinity || 1/number === -Infinity || number === Infinity || number === -Infinity) {
		return number;
	}
	// 4. Return the number value that is the same sign as number and whose magnitude is floor(abs(number)).
	return ((number < 0) ? -1 : 1) * Math.floor(Math.abs(number));
}
if (!("copyWithin"in Array.prototype&&function(){try{var t=function n(){}
t.prototype[0]="foo"
var o=new t
o[1]=1,o[2]=2,o.length=3
var r=Array.prototype.copyWithin.call(o,1,0)
return!(!r[0]||Object.prototype.hasOwnProperty.call(r,"0")||!Object.prototype.hasOwnProperty.call(r,"1")||"foo"!==r[0]||"foo"!==r[1]||1!==r[2]||3!==r.length)}catch(e){return!1}}()
)) {

// Array.prototype.copyWithin
/* global CreateMethodProperty, HasProperty, ToInteger */
// 22.1.3.3 Array.prototype.copyWithin ( target, start [ , end ] )
CreateMethodProperty(Array.prototype, 'copyWithin', function copyWithin(target, start /* [ , end ] */ ) {
	'use strict';
	var end = arguments[2];

	// 22.1.3.3.1 Let O be ? ToObject(this value).
	if (this === null || this === undefined) {
		throw new TypeError('Cannot call method on ' + this);
	}

	var o = Object(this);

	// 22.1.3.3.2 Let len be ? ToLength(? Get(O, "length")).
	var len = ToInteger(o.length);
	if (len <= 0) {
		len = 0;
	}
	if (len === Infinity) {
		len = Math.pow(2, 53) - 1;
	} else {
		len = Math.min(len, Math.pow(2, 53) - 1);
	}
	len = Math.max(len, 0);

	// 22.1.3.3.3 Let relativeTarget be ? ToInteger(target).
	var relativeTarget = ToInteger(target);

	// 22.1.3.3.4 If relativeTarget < 0, let to be max((len + relativeTarget), 0); else let to be min(relativeTarget, len).
	var to;
	if (relativeTarget < 0) {
		to = Math.max(len + relativeTarget, 0);
	} else {
		to = Math.min(relativeTarget, len);
	}

	// 22.1.3.3.5 Let relativeStart be ? ToInteger(start).
	var relativeStart = ToInteger(start);

	// 22.1.3.3.6 If relativeStart < 0, let from be max((len + relativeStart), 0); else let from be min(relativeStart, len).
	var from;
	if (relativeStart < 0) {
		from = Math.max(len + relativeStart, 0);
	} else {
		from = Math.min(relativeStart, len);
	}

	// 22.1.3.3.7 If end is undefined, let relativeEnd be len; else let relativeEnd be ? ToInteger(end).
	var relativeEnd;
	if (end === undefined) {
		relativeEnd = len;
	} else {
		relativeEnd = ToInteger(end);
	}

	// 22.1.3.3.8 If relativeEnd < 0, let final be max((len + relativeEnd), 0); else let final be min(relativeEnd, len).
	var final;
	if (relativeEnd < 0) {
		final = Math.max(len + relativeEnd, 0);
	} else {
		final = Math.min(relativeEnd, len);
	}

	// 22.1.3.3.9 Let count be min(final-from, len-to).
	var count = Math.min(final - from, len - to);

	// 22.1.3.3.10 If from<to and to<from+count, then
	var direction;
	if (from < to && to < from + count) {
		// 22.1.3.3.10.a Let direction be -1.
		direction = -1;

		// 22.1.3.3.10.b Let from be from + count - 1.
		from = from + count - 1;

		// 22.1.3.3.10.c Let to be to + count - 1.
		to = to + count - 1;
	} else {
		// 22.1.3.3.11 Else,
		// 22.1.3.3.11.a Let direction be 1.
		direction = 1;
	}

	// 22.1.3.3.12 Repeat, while count > 0
	while (count > 0) {
		// 22.1.3.3.12.a Let fromKey be ! ToString(from).
		var fromKey = String(from);
		// 22.1.3.3.12.b Let toKey be ! ToString(to).
		var toKey = String(to);
		// 22.1.3.3.12.c Let fromPresent be ? HasProperty(O, fromKey).
		var fromPresent = HasProperty(o, fromKey);
		// 22.1.3.3.12.d If fromPresent is true, then
		if (fromPresent) {
			// 22.1.3.3.12.d.i Let fromVal be ? Get(O, fromKey).
			var fromVal = o[fromKey];
			// 22.1.3.3.12.d.ii Perform ? Set(O, toKey, fromVal, true).
			o[toKey] = fromVal;
		} else {
			// 22.1.3.3.12.e Else fromPresent is false,
			// 22.1.3.3.12.e.i Perform ? DeletePropertyOrThrow(O, toKey).
			delete o[toKey];
		}
		// 22.1.3.3.12.f Let from be from + direction.
		from = from + direction;
		// 22.1.3.3.12.g Let to be to + direction.
		to = to + direction;
		// 22.1.3.3.12.h Let count be count - 1.
		count = count - 1;
	}
	// 22.1.3.3.13 Return O.
	return o;
});

}

if (!("isInteger"in Number
)) {

// Number.isInteger
/* global CreateMethodProperty, ToInteger, Type */
// 20.1.2.3. Number.isInteger ( number )
CreateMethodProperty(Number, 'isInteger', function isInteger(number) {
	// 1. If Type(number) is not Number, return false.
	if (Type(number) !== 'number') {
		return false;
	}
	// 2. If number is NaN, +∞, or -∞, return false.
	if (isNaN(number) || number === Infinity || number === -Infinity) {
		return false;
	}
	// 3. Let integer be ToInteger(number).
	var integer = ToInteger(number);
	// 4. If integer is not equal to number, return false.
	if (integer !== number) {
		return false;
	}
	// 5. Otherwise, return true.
	return true;
});

}

if (!("isSafeInteger"in Number
)) {

// Number.isSafeInteger
/* global CreateMethodProperty, Type, ToInteger */
// 20.1.2.5. Number.isSafeInteger ( number )
CreateMethodProperty(Number, 'isSafeInteger', function isSafeInteger(number) {
	// 1. If Type(number) is not Number, return false.
	if (Type(number) !== 'number') {
		return false;
	}
	// 2. If number is NaN, +∞, or -∞, return false.
	if (isNaN(number) || number === Infinity || number === -Infinity) {
		return false;
	}
	// 3. Let integer be ToInteger(number).
	var integer = ToInteger(number);
	// 4. If integer is not equal to number, return false.
	if (integer !== number) {
		return false;
	}
	// 5. If abs(integer) ≤ 2^53-1, return true.
	if (Math.abs(integer) <= (Math.pow(2, 53) - 1)) {
		return true;
	}
	// 6. Otherwise, return false.
	return false;
});

}


// _ESAbstract.ToLength
/* global ToInteger */
// 7.1.15. ToLength ( argument )
function ToLength(argument) { // eslint-disable-line no-unused-vars
	// 1. Let len be ? ToInteger(argument).
	var len = ToInteger(argument);
	// 2. If len ≤ +0, return +0.
	if (len <= 0) {
		return 0;
	}
	// 3. Return min(len, 253-1).
	return Math.min(len, Math.pow(2, 53) -1);
}

// _ESAbstract.LengthOfArrayLike
/* global Get, ToLength */
// 7.3.19. LengthOfArrayLike ( obj )
function LengthOfArrayLike(obj) { // eslint-disable-line no-unused-vars
	// 1. Return ℝ(? ToLength(? Get(obj, "length"))).
	return ToLength(Get(obj, 'length'));
}

// _ESAbstract.ToPrimitive
/* global Type, GetMethod, Call, OrdinaryToPrimitive */
// 7.1.1. ToPrimitive ( input [ , PreferredType ] )
function ToPrimitive(input /* [, PreferredType] */) { // eslint-disable-line no-unused-vars
	var PreferredType = arguments.length > 1 ? arguments[1] : undefined;
	// 1. Assert: input is an ECMAScript language value.
	// 2. If Type(input) is Object, then
	if (Type(input) === 'object') {
		// a. If PreferredType is not present, let hint be "default".
		if (arguments.length < 2) {
			var hint = 'default';
			// b. Else if PreferredType is hint String, let hint be "string".
		} else if (PreferredType === String) {
			hint = 'string';
			// c. Else PreferredType is hint Number, let hint be "number".
		} else if (PreferredType === Number) {
			hint = 'number';
		}
		// d. Let exoticToPrim be ? GetMethod(input, @@toPrimitive).
		var exoticToPrim = typeof self.Symbol === 'function' && typeof self.Symbol.toPrimitive === 'symbol' ? GetMethod(input, self.Symbol.toPrimitive) : undefined;
		// e. If exoticToPrim is not undefined, then
		if (exoticToPrim !== undefined) {
			// i. Let result be ? Call(exoticToPrim, input, « hint »).
			var result = Call(exoticToPrim, input, [hint]);
			// ii. If Type(result) is not Object, return result.
			if (Type(result) !== 'object') {
				return result;
			}
			// iii. Throw a TypeError exception.
			throw new TypeError('Cannot convert exotic object to primitive.');
		}
		// f. If hint is "default", set hint to "number".
		if (hint === 'default') {
			hint = 'number';
		}
		// g. Return ? OrdinaryToPrimitive(input, hint).
		return OrdinaryToPrimitive(input, hint);
	}
	// 3. Return input
	return input;
}

// _ESAbstract.ToString
/* global Type, ToPrimitive */
// 7.1.12. ToString ( argument )
// The abstract operation ToString converts argument to a value of type String according to Table 11:
// Table 11: ToString Conversions
/*
|---------------|--------------------------------------------------------|
| Argument Type | Result                                                 |
|---------------|--------------------------------------------------------|
| Undefined     | Return "undefined".                                    |
|---------------|--------------------------------------------------------|
| Null	        | Return "null".                                         |
|---------------|--------------------------------------------------------|
| Boolean       | If argument is true, return "true".                    |
|               | If argument is false, return "false".                  |
|---------------|--------------------------------------------------------|
| Number        | Return NumberToString(argument).                       |
|---------------|--------------------------------------------------------|
| String        | Return argument.                                       |
|---------------|--------------------------------------------------------|
| Symbol        | Throw a TypeError exception.                           |
|---------------|--------------------------------------------------------|
| Object        | Apply the following steps:                             |
|               | Let primValue be ? ToPrimitive(argument, hint String). |
|               | Return ? ToString(primValue).                          |
|---------------|--------------------------------------------------------|
*/
function ToString(argument) { // eslint-disable-line no-unused-vars
	switch(Type(argument)) {
		case 'symbol':
			throw new TypeError('Cannot convert a Symbol value to a string');
		case 'object':
			var primValue = ToPrimitive(argument, String);
			return ToString(primValue); // eslint-disable-line no-unused-vars
		default:
			return String(argument);
	}
}
if (!("at"in Array.prototype
)) {

// Array.prototype.at
/* global CreateMethodProperty, Get, LengthOfArrayLike, ToIntegerOrInfinity, ToObject, ToString */
// 23.1.3.1. Array.prototype.at ( index )
CreateMethodProperty(Array.prototype, 'at', function at(index) {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let len be ? LengthOfArrayLike(O).
	var len = LengthOfArrayLike(O);
	// 3. Let relativeIndex be ? ToIntegerOrInfinity(index).
	var relativeIndex = ToIntegerOrInfinity(index);
	// 4. If relativeIndex ≥ 0, then
	// 4.a. Let k be relativeIndex.
	// 5. Else,
	// 5.a. Let k be len + relativeIndex.
	var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
	// 6. If k < 0 or k ≥ len, return undefined.
	if (k < 0 || k >= len) return undefined;
	// 7. Return ? Get(O, ! ToString(𝔽(k))).
	return Get(O, ToString(k));
});

}

if (!("every"in Array.prototype
)) {

// Array.prototype.every
/* global Call, CreateMethodProperty, Get, HasProperty, IsCallable, ToBoolean, ToLength, ToObject, ToString */
// 22.1.3.5. Array.prototype.every ( callbackfn [ , thisArg ] )
CreateMethodProperty(Array.prototype, 'every', function every(callbackfn /* [ , thisArg ] */) {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(O, "length"));
	// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
	if (IsCallable(callbackfn) === false) {
		throw new TypeError(callbackfn + ' is not a function');
	}
	// 4. If thisArg is present, let T be thisArg; else let T be undefined.
	var T = arguments.length > 1 ? arguments[1] : undefined;
	// 5. Let k be 0.
	var k = 0;
	// 6. Repeat, while k < len
	while (k < len) {
		// a. Let Pk be ! ToString(k).
		var Pk = ToString(k);
		// b. Let kPresent be ? HasProperty(O, Pk).
		var kPresent = HasProperty(O, Pk);
		// c. If kPresent is true, then
		if (kPresent) {
			// i. Let kValue be ? Get(O, Pk).
			var kValue = Get(O, Pk);
			// ii. Let testResult be ToBoolean(? Call(callbackfn, T, « kValue, k, O »)).
			var testResult = ToBoolean(Call(callbackfn, T, [kValue, k, O]));
			// iii. If testResult is false, return false.
			if (testResult === false) {
				return false;
			}
		}
		// d. Increase k by 1.
		k = k + 1;
	}
	// 7. Return true.
	return true;
});

}

if (!("fill"in Array.prototype
)) {

// Array.prototype.fill
/* global CreateMethodProperty, Get, ToInteger, ToLength, ToObject, ToString */
// 22.1.3.6. Array.prototype.fill ( value [ , start [ , end ] ] )
CreateMethodProperty(Array.prototype, 'fill', function fill(value /* [ , start [ , end ] ] */) {
	var start = arguments[1];
	var end = arguments[2];
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(O, "length"));
	// 3. Let relativeStart be ? ToInteger(start).
	var relativeStart = ToInteger(start);
	// 4. If relativeStart < 0, let k be max((len + relativeStart), 0); else let k be min(relativeStart, len)
	var k = relativeStart < 0 ? Math.max((len + relativeStart), 0) : Math.min(relativeStart, len);
	// 5. If end is undefined, let relativeEnd be len; else let relativeEnd be ? ToInteger(end).
	var relativeEnd = end === undefined ? len : ToInteger(end);
	// 6. If relativeEnd < 0, let final be max((len + relativeEnd), 0); else let final be min(relativeEnd, len).
	var final = relativeEnd < 0 ? Math.max((len + relativeEnd), 0) : Math.min(relativeEnd, len);
	// 7. Repeat, while k < final
	while (k < final) {
		// a. Let Pk be ! ToString(k).
		var Pk = ToString(k);
		// b. Perform ? Set(O, Pk, value, true).
		O[Pk] = value;
		// c. Increase k by 1.
		k = k + 1;
	}
	// 8. Return O.
	return O;
});

}

if (!("find"in Array.prototype
)) {

// Array.prototype.find
/* global Call, CreateMethodProperty, Get, IsCallable, ToBoolean, ToLength, ToObject, ToString */
// 22.1.3.8 Array.prototype.find ( predicate [ , thisArg ] )
CreateMethodProperty(Array.prototype, 'find', function find( predicate /* [ , thisArg ] */) {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(O, "length"));
	// 3. If IsCallable(predicate) is false, throw a TypeError exception.
	if (IsCallable(predicate) === false) {
		throw new TypeError(predicate + ' is not a function');
	}
	// 4. If thisArg is present, let T be thisArg; else let T be undefined.
	var T = arguments.length > 1 ? arguments[1] : undefined;
	// 5. Let k be 0.
	var k = 0;
	// 6. Repeat, while k < len
	while (k < len) {
		// a. Let Pk be ! ToString(k).
		var Pk = ToString(k);
		// b. Let kValue be ? Get(O, Pk).
		var kValue = Get(O, Pk);
		// c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
		var testResult = ToBoolean(Call(predicate, T, [kValue, k, O ]));
		// d. If testResult is true, return kValue.
		if (testResult) {
			return kValue;
		}
		// e. Increase k by 1.
		k = k + 1;
	}
	// 7. Return undefined.
	return undefined;
});

}

if (!("findIndex"in Array.prototype
)) {

// Array.prototype.findIndex
/* global Call, CreateMethodProperty, Get, IsCallable, ToBoolean, ToLength, ToObject, ToString */
// 22.1.3.9. Array.prototype.findIndex ( predicate [ , thisArg ] )
CreateMethodProperty(Array.prototype, 'findIndex', function findIndex(predicate /* [ , thisArg ] */) {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(O, "length"));
	// 3. If IsCallable(predicate) is false, throw a TypeError exception.
	if (IsCallable(predicate) === false) {
		throw new TypeError(predicate + ' is not a function');
	}
	// 4. If thisArg is present, let T be thisArg; else let T be undefined.
	var T = arguments.length > 1 ? arguments[1] : undefined;
	// 5. Let k be 0.
	var k = 0;
	// 6. Repeat, while k < len
	while (k < len) {
		// a. Let Pk be ! ToString(k).
		var Pk = ToString(k);
		// b. Let kValue be ? Get(O, Pk).
		var kValue = Get(O, Pk);
		// c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
		var testResult = ToBoolean(Call(predicate, T, [kValue, k, O]));
		// d. If testResult is true, return k.
		if (testResult) {
			return k;
		}
		// e. Increase k by 1.
		k = k + 1;
	}
	// 7. Return -1.
	return -1;
});

}

if (!("forEach"in Array.prototype
)) {

// Array.prototype.forEach
/* global Call, CreateMethodProperty, Get, HasProperty, IsCallable, ToLength, ToObject, ToString */
// 22.1.3.10. Array.prototype.forEach ( callbackfn [ , thisArg ] )
CreateMethodProperty(Array.prototype, 'forEach', function forEach(callbackfn /* [ , thisArg ] */) {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// Polyfill.io - If O is a String object, split it into an array in order to iterate correctly.
	// We will use arrayLike in place of O when we are iterating through the list.
	var arraylike = O instanceof String ? O.split('') : O;
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(O, "length"));
	// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
	if (IsCallable(callbackfn) === false) {
		throw new TypeError(callbackfn + ' is not a function');
	}
	// 4. If thisArg is present, let T be thisArg; else let T be undefined.
	var T = arguments.length > 1 ? arguments[1] : undefined;
	// 5. Let k be 0.
	var k = 0;
	// 6. Repeat, while k < len
	while (k < len) {
		// a. Let Pk be ! ToString(k).
		var Pk = ToString(k);
		// b. Let kPresent be ? HasProperty(O, Pk).
		var kPresent = HasProperty(arraylike, Pk);
		// c. If kPresent is true, then
		if (kPresent) {
			// i. Let kValue be ? Get(O, Pk).
			var kValue = Get(arraylike, Pk);
			// ii. Perform ? Call(callbackfn, T, « kValue, k, O »).
			Call(callbackfn, T, [kValue, k, O]);
		}
		// d. Increase k by 1.
		k = k + 1;
	}
	// 7. Return undefined.
	return undefined;
});

}

if (!("forEach"in NodeList.prototype
)) {

// NodeList.prototype.forEach
NodeList.prototype.forEach = Array.prototype.forEach;

}


// _DOMTokenList
/*
Copyright (c) 2016, John Gardner

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
var _DOMTokenList = (function() { // eslint-disable-line no-unused-vars
	var dpSupport = true;
	var defineGetter = function (object, name, fn, configurable) {
		if (Object.defineProperty)
			Object.defineProperty(object, name, {
				configurable: false === dpSupport ? true : !!configurable,
				get: fn
			});

		else object.__defineGetter__(name, fn);
	};

	/** Ensure the browser allows Object.defineProperty to be used on native JavaScript objects. */
	try {
		defineGetter({}, "support");
	}
	catch (e) {
		dpSupport = false;
	}


	var _DOMTokenList = function (el, prop) {
		var that = this;
		var tokens = [];
		var tokenMap = {};
		var length = 0;
		var maxLength = 0;
		var addIndexGetter = function (i) {
			defineGetter(that, i, function () {
				preop();
				return tokens[i];
			}, false);

		};
		var reindex = function () {

			/** Define getter functions for array-like access to the tokenList's contents. */
			if (length >= maxLength)
				for (; maxLength < length; ++maxLength) {
					addIndexGetter(maxLength);
				}
		};

		/** Helper function called at the start of each class method. Internal use only. */
		var preop = function () {
			var error;
			var i;
			var args = arguments;
			var rSpace = /\s+/;

			/** Validate the token/s passed to an instance method, if any. */
			if (args.length)
				for (i = 0; i < args.length; ++i)
					if (rSpace.test(args[i])) {
						error = new SyntaxError('String "' + args[i] + '" ' + "contains" + ' an invalid character');
						error.code = 5;
						error.name = "InvalidCharacterError";
						throw error;
					}


			/** Split the new value apart by whitespace*/
			if (typeof el[prop] === "object") {
				tokens = ("" + el[prop].baseVal).replace(/^\s+|\s+$/g, "").split(rSpace);
			} else {
				tokens = ("" + el[prop]).replace(/^\s+|\s+$/g, "").split(rSpace);
			}

			/** Avoid treating blank strings as single-item token lists */
			if ("" === tokens[0]) tokens = [];

			/** Repopulate the internal token lists */
			tokenMap = {};
			for (i = 0; i < tokens.length; ++i)
				tokenMap[tokens[i]] = true;
			length = tokens.length;
			reindex();
		};

		/** Populate our internal token list if the targeted attribute of the subject element isn't empty. */
		preop();

		/** Return the number of tokens in the underlying string. Read-only. */
		defineGetter(that, "length", function () {
			preop();
			return length;
		});

		/** Override the default toString/toLocaleString methods to return a space-delimited list of tokens when typecast. */
		that.toLocaleString =
			that.toString = function () {
				preop();
				return tokens.join(" ");
			};

		that.item = function (idx) {
			preop();
			return tokens[idx];
		};

		that.contains = function (token) {
			preop();
			return !!tokenMap[token];
		};

		that.add = function () {
			preop.apply(that, args = arguments);

			for (var args, token, i = 0, l = args.length; i < l; ++i) {
				token = args[i];
				if (!tokenMap[token]) {
					tokens.push(token);
					tokenMap[token] = true;
				}
			}

			/** Update the targeted attribute of the attached element if the token list's changed. */
			if (length !== tokens.length) {
				length = tokens.length >>> 0;
				if (typeof el[prop] === "object") {
					el[prop].baseVal = tokens.join(" ");
				} else {
					el[prop] = tokens.join(" ");
				}
				reindex();
			}
		};

		that.remove = function () {
			preop.apply(that, args = arguments);

			/** Build a hash of token names to compare against when recollecting our token list. */
			for (var args, ignore = {}, i = 0, t = []; i < args.length; ++i) {
				ignore[args[i]] = true;
				delete tokenMap[args[i]];
			}

			/** Run through our tokens list and reassign only those that aren't defined in the hash declared above. */
			for (i = 0; i < tokens.length; ++i)
				if (!ignore[tokens[i]]) t.push(tokens[i]);

			tokens = t;
			length = t.length >>> 0;

			/** Update the targeted attribute of the attached element. */
			if (typeof el[prop] === "object") {
				el[prop].baseVal = tokens.join(" ");
			} else {
				el[prop] = tokens.join(" ");
			}
			reindex();
		};

		that.toggle = function (token, force) {
			preop.apply(that, [token]);

			/** Token state's being forced. */
			if (undefined !== force) {
				if (force) {
					that.add(token);
					return true;
				} else {
					that.remove(token);
					return false;
				}
			}

			/** Token already exists in tokenList. Remove it, and return FALSE. */
			if (tokenMap[token]) {
				that.remove(token);
				return false;
			}

			/** Otherwise, add the token and return TRUE. */
			that.add(token);
			return true;
		};

		that.forEach = Array.prototype.forEach;

		return that;
	};

	return _DOMTokenList;
}());
if (!("DOMTokenList"in self&&function(e){return!("classList"in e)||!e.classList.toggle("x",!1)&&!e.className}(document.createElement("x"))
)) {

// DOMTokenList
/* global _DOMTokenList */
(function (global) {
	var nativeImpl = "DOMTokenList" in global && global.DOMTokenList;

	if (
			!nativeImpl ||
			(
				!!document.createElementNS &&
				!!document.createElementNS('http://www.w3.org/2000/svg', 'svg') &&
				!(document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList)
			)
		) {
		global.DOMTokenList = _DOMTokenList;
	}

	// Add second argument to native DOMTokenList.toggle() if necessary
	(function () {
		var e = document.createElement('span');
		if (!('classList' in e)) return;
		e.classList.toggle('x', false);
		if (!e.classList.contains('x')) return;
		e.classList.constructor.prototype.toggle = function toggle(token /*, force*/) {
			var force = arguments[1];
			if (force === undefined) {
				var add = !this.contains(token);
				this[add ? 'add' : 'remove'](token);
				return add;
			}
			force = !!force;
			this[force ? 'add' : 'remove'](token);
			return force;
		};
	}());

	// Add multiple arguments to native DOMTokenList.add() if necessary
	(function () {
		var e = document.createElement('span');
		if (!('classList' in e)) return;
		e.classList.add('a', 'b');
		if (e.classList.contains('b')) return;
		var native = e.classList.constructor.prototype.add;
		e.classList.constructor.prototype.add = function () {
			var args = arguments;
			var l = arguments.length;
			for (var i = 0; i < l; i++) {
				native.call(this, args[i]);
			}
		};
	}());

	// Add multiple arguments to native DOMTokenList.remove() if necessary
	(function () {
		var e = document.createElement('span');
		if (!('classList' in e)) return;
		e.classList.add('a');
		e.classList.add('b');
		e.classList.remove('a', 'b');
		if (!e.classList.contains('b')) return;
		var native = e.classList.constructor.prototype.remove;
		e.classList.constructor.prototype.remove = function () {
			var args = arguments;
			var l = arguments.length;
			for (var i = 0; i < l; i++) {
				native.call(this, args[i]);
			}
		};
	}());

}(self));

}

if (!("includes"in Array.prototype
)) {

// Array.prototype.includes
/* global CreateMethodProperty, Get, SameValueZero, ToInteger, ToLength, ToObject, ToString */
// 22.1.3.11. Array.prototype.includes ( searchElement [ , fromIndex ] )
CreateMethodProperty(Array.prototype, 'includes', function includes(searchElement /* [ , fromIndex ] */) {
	'use strict';
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(O, "length"));
	// 3. If len is 0, return false.
	if (len === 0) {
		return false;
	}
	// 4. Let n be ? ToInteger(fromIndex). (If fromIndex is undefined, this step produces the value 0.)
	var n = ToInteger(arguments[1]);
	// 5. If n ≥ 0, then
	if (n >= 0) {
		// a. Let k be n.
		var k = n;
		// 6. Else n < 0,
	} else {
		// a. Let k be len + n.
		k = len + n;
		// b. If k < 0, let k be 0.
		if (k < 0) {
			k = 0;
		}
	}
	// 7. Repeat, while k < len
	while (k < len) {
		// a. Let elementK be the result of ? Get(O, ! ToString(k)).
		var elementK = Get(O, ToString(k));
		// b. If SameValueZero(searchElement, elementK) is true, return true.
		if (SameValueZero(searchElement, elementK)) {
			return true;
		}
		// c. Increase k by 1.
		k = k + 1;
	}
	// 8. Return false.
	return false;
});

}

if (!("indexOf"in Array.prototype
)) {

// Array.prototype.indexOf
/* global CreateMethodProperty, Get, HasProperty, ToInteger, ToLength, ToObject, ToString */
// 22.1.3.12. Array.prototype.indexOf ( searchElement [ , fromIndex ] )
CreateMethodProperty(Array.prototype, 'indexOf', function indexOf(searchElement /* [ , fromIndex ] */) {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(O, "length"));
	// 3. If len is 0, return -1.
	if (len === 0) {
		return -1;
	}
	// 4. Let n be ? ToInteger(fromIndex). (If fromIndex is undefined, this step produces the value 0.)
	var n = ToInteger(arguments[1]);
	// 5. If n ≥ len, return -1.
	if (n >= len) {
		return -1;
	}
	// 6. If n ≥ 0, then
	if (n >= 0) {
		// a. If n is -0, let k be +0; else let k be n.
		var k = 1/n === -Infinity ? 0 : n;
		// 7. Else n < 0,
	} else {
		// a. Let k be len + n.
		k = len + n;
		// b. If k < 0, let k be 0.
		if (k < 0) {
			k = 0;
		}
	}
	// 8. Repeat, while k < len
	while (k < len) {
		// a. Let kPresent be ? HasProperty(O, ! ToString(k)).
		var kPresent = HasProperty(O, ToString(k));
		// b. If kPresent is true, then
		if (kPresent) {
			// i. Let elementK be ? Get(O, ! ToString(k)).
			var elementK = Get(O, ToString(k));
			// ii. Let same be the result of performing Strict Equality Comparison searchElement === elementK.
			var same = searchElement === elementK;
			// iii. If same is true, return k.
			if (same) {
				return k;
			}
		}
		// c. Increase k by 1.
		k = k + 1;
	}
	// 9. Return -1.
	return -1;
});

}

if (!("getOwnPropertyNames"in Object&&function(){try{return Object.getOwnPropertyNames(1),!0}catch(t){return!1}}()
)) {

// Object.getOwnPropertyNames
/* global CreateMethodProperty, ToObject */
(function() {
	var toString = {}.toString;
	var split = "".split;
	var concat = [].concat;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var nativeGetOwnPropertyNames = Object.getOwnPropertyNames || Object.keys;
	var cachedWindowNames =
		typeof self === "object" ? nativeGetOwnPropertyNames(self) : [];

	// 19.1.2.10 Object.getOwnPropertyNames ( O )
	CreateMethodProperty(
		Object,
		"getOwnPropertyNames",
		function getOwnPropertyNames(O) {
			var object = ToObject(O);

			if (toString.call(object) === "[object Window]") {
				try {
					return nativeGetOwnPropertyNames(object);
				} catch (e) {
					// IE bug where layout engine calls userland Object.getOwnPropertyNames for cross-domain `window` objects
					return concat.call([], cachedWindowNames);
				}
			}

			// Polyfill.io fallback for non-array-like strings which exist in some ES3 user-agents (IE 8)
			object =
				toString.call(object) == "[object String]"
					? split.call(object, "")
					: Object(object);

			var result = nativeGetOwnPropertyNames(object);
			var extraNonEnumerableKeys = ["length", "prototype"];
			for (var i = 0; i < extraNonEnumerableKeys.length; i++) {
				var key = extraNonEnumerableKeys[i];
				if (hasOwnProperty.call(object, key) && !result.includes(key)) {
					result.push(key);
				}
			}

			if (result.includes("__proto__")) {
				var index = result.indexOf("__proto__");
				result.splice(index, 1);
			}

			return result;
		}
	);
})();

}

if (!("lastIndexOf"in Array.prototype
)) {

// Array.prototype.lastIndexOf
/* global CreateMethodProperty, Get, HasProperty, ToInteger, ToLength, ToObject, ToString */
// 22.1.3.15. Array.prototype.lastIndexOf ( searchElement [ , fromIndex ] )
CreateMethodProperty(Array.prototype, 'lastIndexOf', function lastIndexOf(searchElement /* [ , fromIndex ] */) {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(O, "length"));
	// 3. If len is 0, return -1.
	if (len === 0) {
		return -1;
	}
	// 4. If fromIndex is present, let n be ? ToInteger(fromIndex); else let n be len-1.
	var n = arguments.length > 1 ? ToInteger(arguments[1]) : len - 1;
	// 5. If n ≥ 0, then
	if (n >= 0) {
		// a. If n is -0, let k be +0; else let k be min(n, len - 1).
		var k = 1/n === -Infinity ? 0 : Math.min(n, len - 1);
		// 6. Else n < 0,
	} else {
		// a. Let k be len + n.
		k = len + n;
	}
	// 7. Repeat, while k ≥ 0
	while (k >= 0) {
		// a. Let kPresent be ? HasProperty(O, ! ToString(k)).
		var kPresent = HasProperty(O, ToString(k));
		// b. If kPresent is true, then
		if (kPresent) {
			// i. Let elementK be ? Get(O, ! ToString(k)).
			var elementK = Get(O, ToString(k));
			// ii. Let same be the result of performing Strict Equality Comparison searchElement === elementK.
			var same = searchElement === elementK;
			// iii. If same is true, return k.
			if (same) {
				return k;
			}
		}
		// c. Decrease k by 1.
		k = k - 1;
	}
	// 9. Return -1.
	return -1;
});

}

if (!("reduce"in Array.prototype
)) {

// Array.prototype.reduce
/* global Call, CreateMethodProperty, Get, HasProperty, IsCallable, ToLength, ToObject, ToString */
// 22.1.3.19. Array.prototype.reduce ( callbackfn [ , initialValue ] )
CreateMethodProperty(Array.prototype, 'reduce', function reduce(callbackfn /* [ , initialValue ] */) {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// Polyfill.io - If O is a String object, split it into an array in order to iterate correctly.
	// We will use arrayLike in place of O when we are iterating through the list.
	var arraylike = O instanceof String ? O.split('') : O;
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(arraylike, "length"));
	// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
	if (IsCallable(callbackfn) === false) {
		throw new TypeError(callbackfn + ' is not a function');
	}
	// 4. If len is 0 and initialValue is not present, throw a TypeError exception.
	var initialValue = arguments.length > 1 ? arguments[1] : undefined;
	if (len === 0 && arguments.length < 2) {
		throw new TypeError('Reduce of empty array with no initial value');
	}
	// 5. Let k be 0.
	var k = 0;
	// 6. Let accumulator be undefined.
	var accumulator = undefined;
	// 7. If initialValue is present, then
	if (arguments.length > 1) {
		// a. Set accumulator to initialValue.
		accumulator = initialValue;
		// 8. Else initialValue is not present,
	} else {
		// a. Let kPresent be false.
		var kPresent = false;
		// b. Repeat, while kPresent is false and k < len
		while (kPresent === false && k < len) {
			// i. Let Pk be ! ToString(k).
			var Pk = ToString(k);
			// ii. Let kPresent be ? HasProperty(O, Pk).
			kPresent = HasProperty(arraylike, Pk);
			// iii. If kPresent is true, then
			if (kPresent) {
				// 1. Set accumulator to ? Get(O, Pk).
				accumulator = Get(arraylike, Pk);
			}
			// iv. Increase k by 1.
			k = k + 1;
		}
		// c. If kPresent is false, throw a TypeError exception.
		if (kPresent === false) {
			throw new TypeError('Reduce of empty array with no initial value');
		}
	}
	// 9. Repeat, while k < len
	while (k < len) {
		// a. Let Pk be ! ToString(k).
		Pk = ToString(k);
		// b. Let kPresent be ? HasProperty(O, Pk).
		kPresent = HasProperty(arraylike, Pk);
		// c. If kPresent is true, then
		if (kPresent) {
			// i. Let kValue be ? Get(O, Pk).
			var kValue = Get(arraylike, Pk);
			// ii. Set accumulator to ? Call(callbackfn, undefined, « accumulator, kValue, k, O »).
			accumulator = Call(callbackfn, undefined, [accumulator, kValue, k, O]);
		}
		// d. Increase k by 1.
		k = k + 1;
	}
	// 10. Return accumulator.
	return accumulator;
});

}

if (!("reduceRight"in Array.prototype
)) {

// Array.prototype.reduceRight
/* global Call, CreateMethodProperty, Get, HasProperty, IsCallable, ToLength, ToObject, ToString */
// 22.1.3.20. Array.prototype.reduceRight ( callbackfn [ , initialValue ] )
CreateMethodProperty(Array.prototype, 'reduceRight', function reduceRight(callbackfn /* [ , initialValue ] */) {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// Polyfill.io - If O is a String object, split it into an array in order to iterate correctly.
	// We will use arrayLike in place of O when we are iterating through the list.
	var arraylike = O instanceof String ? O.split('') : O;
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(arraylike, "length"));
	// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
	if (IsCallable(callbackfn) === false) {
		throw new TypeError(callbackfn + ' is not a function');
	}
	// 4. If len is 0 and initialValue is not present, throw a TypeError exception.
	var initialValue = arguments.length > 1 ? arguments[1] : undefined;
	if (len === 0 && arguments.length < 2) {
		throw new TypeError('Reduce of empty array with no initial value');
	}
	// 5. Let k be len-1.
	var k = len - 1;
	// 6. Let accumulator be undefined.
	var accumulator = undefined;
	// 7. If initialValue is present, then
	if (arguments.length > 1) {
		// a. Set accumulator to initialValue.
		accumulator = initialValue;
		// 8.Else initialValue is not present,
	} else {
		// a. Let kPresent be false.
		var kPresent = false;
		// b. Repeat, while kPresent is false and k ≥ 0
		while (kPresent === false && k >= 0) {
			// i. Let Pk be ! ToString(k).
			var Pk = ToString(k);
			// ii. Let kPresent be ? HasProperty(O, Pk).
			kPresent = HasProperty(arraylike, Pk);
			// iii. If kPresent is true, then
			if (kPresent) {
				// 1. Set accumulator to ? Get(O, Pk).
				accumulator = Get(arraylike, Pk);
			}
			// iv. Decrease k by 1.
			k = k - 1;
		}
		// c. If kPresent is false, throw a TypeError exception.
		if (kPresent === false) {
			throw new TypeError('Reduce of empty array with no initial value');
		}
	}
	// 9. Repeat, while k ≥ 0
	while (k >= 0) {
		// a. Let Pk be ! ToString(k).
		Pk = ToString(k);
		// b. Let kPresent be ? HasProperty(O, Pk).
		kPresent = HasProperty(arraylike, Pk);
		// c. If kPresent is true, then
		if (kPresent) {
			// i. Let kValue be ? Get(O, Pk).
			var kValue = Get(arraylike, Pk);
			// ii. Set accumulator to ? Call(callbackfn, undefined, « accumulator, kValue, k, O »).
			accumulator = Call(callbackfn, undefined, [accumulator, kValue, k, O]);
		}
		// d. Decrease k by 1.
		k = k - 1;
	}
	// 10 Return accumulator.
	return accumulator;
});

}

if (!("some"in Array.prototype
)) {

// Array.prototype.some
/* global Call, CreateMethodProperty, Get, HasProperty, IsCallable, ToBoolean, ToLength, ToObject, ToString */
// 22.1.3.24. Array.prototype.some ( callbackfn [ , thisArg ] )
CreateMethodProperty(Array.prototype, 'some', function some(callbackfn /* [ , thisArg ] */) {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(O, "length"));
	// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
	if (IsCallable(callbackfn) === false) {
		throw new TypeError(callbackfn + ' is not a function');
	}
	// 4. If thisArg is present, let T be thisArg; else let T be undefined.
	var T = arguments.length > 1 ? arguments[1] : undefined;
	// 5. Let k be 0.
	var k = 0;
	// 6. Repeat, while k < len
	while (k < len) {
		// a. Let Pk be ! ToString(k).
		var Pk = ToString(k);
		// b. Let kPresent be ? HasProperty(O, Pk).
		var kPresent = HasProperty(O, Pk);
		// c. If kPresent is true, then
		if (kPresent) {
			// i. Let kValue be ? Get(O, Pk).
			var kValue = Get(O, Pk);
			// ii. Let testResult be ToBoolean(? Call(callbackfn, T, « kValue, k, O »)).
			var testResult = ToBoolean(Call(callbackfn, T, [kValue, k, O]));
			// iii. If testResult is true, return true.
			if (testResult) {
				return true;
			}
		}
		// d. Increase k by 1.
		k = k + 1;
	}
	// 7. Return false.
	return false;
});

}

if (!("at"in String.prototype
)) {

// String.prototype.at
/* global CreateMethodProperty, RequireObjectCoercible, ToIntegerOrInfinity, ToString */
// 22.1.3.1. String.prototype.at ( index )
CreateMethodProperty(String.prototype, 'at', function at(index) {
	// 1. Let O be ? RequireObjectCoercible(this value).
	var O = RequireObjectCoercible(this);
	// 2. Let S be ? ToString(O).
	var S = ToString(O);
	// 3. Let len be the length of S.
	var len = S.length;
	// 4. Let relativeIndex be ? ToIntegerOrInfinity(index).
	var relativeIndex = ToIntegerOrInfinity(index);
	// 5. If relativeIndex ≥ 0, then
	// 5.a. Let k be relativeIndex.
	// 6. Else,
	// 6.a. Let k be len + relativeIndex.
	var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
	// 7. If k < 0 or k ≥ len, return undefined.
	if (k < 0 || k >= len) return undefined;
	// 8. Return the substring of S from k to k + 1.
	return S.substring(k, k + 1);
});

}

if (!("endsWith"in String.prototype
)) {

// String.prototype.endsWith
/* global CreateMethodProperty, IsRegExp, RequireObjectCoercible, ToInteger, ToString */
// 21.1.3.6. String.prototype.endsWith ( searchString [ , endPosition ] )
CreateMethodProperty(String.prototype, 'endsWith', function endsWith(searchString /* [ , endPosition ] */) {
	'use strict';
	var endPosition = arguments.length > 1 ? arguments[1] : undefined;
	// 1. Let O be ? RequireObjectCoercible(this value).
	var O = RequireObjectCoercible(this);
	// 2. Let S be ? ToString(O).
	var S = ToString(O);
	// 3. Let isRegExp be ? IsRegExp(searchString).
	var isRegExp = IsRegExp(searchString);
	// 4. If isRegExp is true, throw a TypeError exception.
	if (isRegExp) {
		throw new TypeError('First argument to String.prototype.endsWith must not be a regular expression');
	}
	// 5. Let searchStr be ? ToString(searchString).
	var searchStr = ToString(searchString);
	// 6. Let len be the length of S.
	var len = S.length;
	// 7. If endPosition is undefined, let pos be len, else let pos be ? ToInteger(endPosition).
	var pos = endPosition === undefined ? len : ToInteger(endPosition);
	// 8. Let end be min(max(pos, 0), len).
	var end = Math.min(Math.max(pos, 0), len);
	// 9. Let searchLength be the length of searchStr.
	var searchLength = searchStr.length;
	// 10. Let start be end - searchLength.
	var start = end - searchLength;
	// 11. If start is less than 0, return false.
	if (start < 0) {
		return false;
	}
	// 12. If the sequence of elements of S starting at start of length searchLength is the same as the full element sequence of searchStr, return true.
	if (S.substr(start, searchLength) === searchStr) {
		return true;
	}
	// 13. Otherwise, return false.
	return false;
});

}

if (!("includes"in String.prototype
)) {

// String.prototype.includes
/* global CreateMethodProperty, IsRegExp, RequireObjectCoercible, ToInteger, ToString */
// 21.1.3.7. String.prototype.includes ( searchString [ , position ] )
CreateMethodProperty(String.prototype, 'includes', function includes(searchString /* [ , position ] */) {
	'use strict';
	var position = arguments.length > 1 ? arguments[1] : undefined;
	// 1. Let O be ? RequireObjectCoercible(this value).
	var O = RequireObjectCoercible(this);
	// 2. Let S be ? ToString(O).
	var S = ToString(O);
	// 3. Let isRegExp be ? IsRegExp(searchString).
	var isRegExp = IsRegExp(searchString);
	// 4. If isRegExp is true, throw a TypeError exception.
	if (isRegExp) {
		throw new TypeError('First argument to String.prototype.includes must not be a regular expression');
	}
	// 5. Let searchStr be ? ToString(searchString).
	var searchStr = ToString(searchString);
	// 6. Let pos be ? ToInteger(position). (If position is undefined, this step produces the value 0.)
	var pos = ToInteger(position);
	// 7. Let len be the length of S.
	var len = S.length;
	// 8. Let start be min(max(pos, 0), len).
	var start = Math.min(Math.max(pos, 0), len);
	// 9. Let searchLen be the length of searchStr.
	// var searchLength = searchStr.length;
	// 10. If there exists any integer k not smaller than start such that k + searchLen is not greater than len, and for all nonnegative integers j less than searchLen, the code unit at index k+j within S is the same as the code unit at index j within searchStr, return true; but if there is no such integer k, return false.
	return String.prototype.indexOf.call(S, searchStr, start) !== -1;
});

}

if (!("padEnd"in String.prototype
)) {

// String.prototype.padEnd
/* global CreateMethodProperty, RequireObjectCoercible, ToLength, ToString */
// 21.1.3.13. String.prototype.padEnd( maxLength [ , fillString ] )
CreateMethodProperty(String.prototype, 'padEnd', function padEnd(maxLength /* [ , fillString ] */) {
	'use strict';
	var fillString = arguments.length > 1 ? arguments[1] : undefined;
	// 1. Let O be ? RequireObjectCoercible(this value).
	var O = RequireObjectCoercible(this);
	// 2. Let S be ? ToString(O).
	var S = ToString(O);
	// 3. Let intMaxLength be ? ToLength(maxLength).
	var intMaxLength = ToLength(maxLength);
	// 4. Let stringLength be the length of S.
	var stringLength = S.length;
	// 5. If intMaxLength is not greater than stringLength, return S.
	if (intMaxLength <= stringLength) {
		return S;
	}
	// 6. If fillString is undefined, let filler be the String value consisting solely of the code unit 0x0020 (SPACE).
	if (fillString === undefined) {
		var filler = ' ';
		// 7. Else, let filler be ? ToString(fillString).
	} else {
		filler = ToString(fillString);
	}
	// 8. If filler is the empty String, return S.
	if (filler === '') {
		return S;
	}
	// 9. Let fillLen be intMaxLength - stringLength.
	var fillLen = intMaxLength - stringLength;
	// 10. Let truncatedStringFiller be the String value consisting of repeated concatenations of filler truncated to length fillLen.
	var truncatedStringFiller = '';
	for (var i = 0; i < fillLen; i++) {
		truncatedStringFiller += filler;
	}
	truncatedStringFiller = truncatedStringFiller.substr(0, fillLen);
	// 11. Return the string-concatenation of S and truncatedStringFiller.
	return S + truncatedStringFiller;
});

}

if (!("padStart"in String.prototype
)) {

// String.prototype.padStart
/* global CreateMethodProperty, RequireObjectCoercible, ToLength, ToString */
// 21.1.3.14. String.prototype.padStart( maxLength [ , fillString ] )
CreateMethodProperty(String.prototype, 'padStart', function padStart(maxLength /* [ , fillString ] */) {
	'use strict';
	var fillString = arguments.length > 1 ? arguments[1] : undefined;
	// 1. Let O be ? RequireObjectCoercible(this value).
	var O = RequireObjectCoercible(this);
	// 2. Let S be ? ToString(O).
	var S = ToString(O);
	// 3. Let intMaxLength be ? ToLength(maxLength).
	var intMaxLength = ToLength(maxLength);
	// 4. Let stringLength be the length of S.
	var stringLength = S.length;
	// 5. If intMaxLength is not greater than stringLength, return S.
	if (intMaxLength <= stringLength) {
		return S;
	}
	// 6. If fillString is undefined, let filler be the String value consisting solely of the code unit 0x0020 (SPACE).
	if (fillString === undefined) {
		var filler = ' ';
		// 7. Else, let filler be ? ToString(fillString).
	} else {
		filler = ToString(fillString);
	}
	// 8. If filler is the empty String, return S.
	if (filler === '') {
		return S;
	}
	// 9. Let fillLen be intMaxLength - stringLength.
	var fillLen = intMaxLength - stringLength;
	// 10. Let truncatedStringFiller be the String value consisting of repeated concatenations of filler truncated to length fillLen.
	var truncatedStringFiller = '';
	for (var i = 0; i < fillLen; i++) {
		truncatedStringFiller += filler;
	}
	truncatedStringFiller = truncatedStringFiller.substr(0, fillLen);
	// 11. Return the string-concatenation of truncatedStringFiller and S.
	return truncatedStringFiller + S;
});

}

if (!("repeat"in String.prototype
)) {

// String.prototype.repeat
/* global CreateMethodProperty, RequireObjectCoercible, ToInteger, ToString */
// 21.1.3.15String.prototype.repeat ( count )
CreateMethodProperty(String.prototype, 'repeat', function repeat(count) {
	'use strict';
	// 1. Let O be ? RequireObjectCoercible(this value).
	var O = RequireObjectCoercible(this);
	// 2. Let S be ? ToString(O).
	var S = ToString(O);
	// 3. Let n be ? ToInteger(count).
	var n = ToInteger(count);
	// 4. If n < 0, throw a RangeError exception.
	if (n < 0) {
		throw new RangeError('Invalid count value');
	}
	// 5. If n is +∞, throw a RangeError exception.
	if (n === Infinity) {
		throw new RangeError('Invalid count value');
	}
	// 6. Let T be the String value that is made from n copies of S appended together. If n is 0, T is the empty String.
	var T = n === 0 ? '' : new Array(n + 1).join(S);
	// 7. Return T.
	return T;
});

}

if (!("startsWith"in String.prototype
)) {

// String.prototype.startsWith
/* global CreateMethodProperty, IsRegExp, RequireObjectCoercible, ToInteger, ToString */
// 21.1.3.20. String.prototype.startsWith ( searchString [ , position ] )
CreateMethodProperty(String.prototype, 'startsWith', function startsWith(searchString /* [ , position ] */) {
	'use strict';
	var position = arguments.length > 1 ? arguments[1] : undefined;
	// 1. Let O be ? RequireObjectCoercible(this value).
	var O = RequireObjectCoercible(this);
	// 2. Let S be ? ToString(O).
	var S = ToString(O);
	// 3. Let isRegExp be ? IsRegExp(searchString).
	var isRegExp = IsRegExp(searchString);
	// 4. If isRegExp is true, throw a TypeError exception.
	if (isRegExp) {
		throw new TypeError('First argument to String.prototype.startsWith must not be a regular expression');
	}
	// 5. Let searchStr be ? ToString(searchString).
	var searchStr = ToString(searchString);
	// 6. Let pos be ? ToInteger(position). (If position is undefined, this step produces the value 0.)
	var pos = ToInteger(position);
	// 7. Let len be the length of S.
	var len = S.length;
	// 8. Let start be min(max(pos, 0), len).
	var start = Math.min(Math.max(pos, 0), len);
	// 9. Let searchLength be the length of searchStr.
	var searchLength = searchStr.length;
	// 10. If searchLength+start is greater than len, return false.
	if (searchLength + start > len) {
		return false;
	}
	// 11. If the sequence of elements of S starting at start of length searchLength is the same as the full element sequence of searchStr, return true.
	if (S.substr(start).indexOf(searchString) === 0) {
		return true;
	}
	// 12. Otherwise, return false.
	return false;
});

}

if (!("Int8Array"in self&&"at"in self.Int8Array.prototype
)) {

// TypedArray.prototype.at
/* global CreateMethodProperty, Uint8Array, ToIntegerOrInfinity, ToString */
// 23.2.3.1. %TypedArray%.prototype.at ( index )
(function () {
	// In Internet Explorer 8 there is no support for square-bracket notation
	// in the TypedArrays polyfill instead so we need to use the private `_getter` method
	var typedArraysSupportIndexLookup = (function() {
		var uint8 = new Uint8Array(2);
		uint8[0] = 42;
		return uint8[0] === 42
	})

	function getTypedArrayIndex(array, index) {
		if (typedArraysSupportIndexLookup) {
			return array[index];
		} else {
			return array._getter(index);
		}
	}

	function at(index) {
		// 1. Let O be the this value.
		var O = this;
		// 2. Perform ? ValidateTypedArray(O).
		// TODO: Add ValidateTypedArray
		// 3. Let len be O.[[ArrayLength]].
		var len = O.length;
		// 4. Let relativeIndex be ? ToIntegerOrInfinity(index).
		var relativeIndex = ToIntegerOrInfinity(index);
		// 5. If relativeIndex ≥ 0, then
		// 5.a. Let k be relativeIndex.
		// 6. Else,
		// 6.a. Let k be len + relativeIndex.
		var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
		// 7. If k < 0 or k ≥ len, return undefined.
		if (k < 0 || k >= len) return undefined;
		// 8. Return ! Get(O, ! ToString(𝔽(k))).
		// return Get(O, ToString(k));
		return getTypedArrayIndex(O, ToString(k));
	}

	if ('__proto__' in self.Int8Array.prototype) {
		// set this on the underlying "TypedArrayPrototype", which is shared with all "TypedArray" subclasses
		CreateMethodProperty(self.Int8Array.prototype.__proto__, 'at', at);
	} else {
		CreateMethodProperty(self.Int8Array.prototype, 'at', at);
		CreateMethodProperty(self.Uint8Array.prototype, 'at', at);
		CreateMethodProperty(self.Uint8ClampedArray.prototype, 'at', at);
		CreateMethodProperty(self.Int16Array.prototype, 'at', at);
		CreateMethodProperty(self.Uint16Array.prototype, 'at', at);
		CreateMethodProperty(self.Int32Array.prototype, 'at', at);
		CreateMethodProperty(self.Uint32Array.prototype, 'at', at);
		CreateMethodProperty(self.Float32Array.prototype, 'at', at);
		CreateMethodProperty(self.Float64Array.prototype, 'at', at);
	}
})();

}


// _ESAbstract.FlattenIntoArray
/* globals ToString, HasProperty, Get, Call, IsArray, ToLength, CreateDataPropertyOrThrow */
// 22.1.3.10.1 FlattenIntoArray(target, source, sourceLen, start, depth [ , mapperFunction, thisArg ])
function FlattenIntoArray(target, source, sourceLen, start, depth /* , mapperFunction, thisArg */ ) { // eslint-disable-line no-unused-vars
	var mapperFunction = arguments[5];
	var thisArg = arguments[6];
	// 1. Let targetIndex be start.
	var targetIndex = start;
	// 2. Let sourceIndex be 0.
	var sourceIndex = 0;
	// 3. Repeat, while sourceIndex < sourceLen
	while (sourceIndex < sourceLen) {
		// a. Let P be ! ToString(sourceIndex).
		var P = ToString(sourceIndex);
		// b. Let exists be ? HasProperty(source, P).
		var exists = HasProperty(source, P);
		// c. If exists is true, then
		if (exists === true) {
			// i. Let element be ? Get(source, P).
			var element = Get(source, P);
			// ii. If mapperFunction is present, then
			if (5 in arguments) {
				// 1. Assert: thisArg is present.
				// 2. Set element to ? Call(mapperFunction, thisArg , « element, sourceIndex, source »).
				element = Call(mapperFunction, thisArg, [element, sourceIndex, source]);
			}
			// iii. Let shouldFlatten be false.
			var shouldFlatten = false;
			// iv. If depth > 0, then
			if (depth > 0) {
				// 1. Set shouldFlatten to ? IsArray(element).
				shouldFlatten = IsArray(element);
			}
			// v. If shouldFlatten is true, then
			if (shouldFlatten === true) {
				// 1. Let elementLen be ? ToLength(? Get(element, "length")).
				var elementLen = ToLength(Get(element, "length"));
				// 2. Set targetIndex to ? FlattenIntoArray(target, element, elementLen, targetIndex, depth - 1).
				targetIndex = FlattenIntoArray(target, element, elementLen, targetIndex, depth - 1); // eslint-disable-line no-unused-vars
				// vi. Else,
			} else {
				// 1. If targetIndex ≥ 253-1, throw a TypeError exception.
				if (targetIndex >= (Math.pow(2, 53) - 1)) {
					throw new TypeError("targetIndex is greater than or equal to 2^53-1");
				}
				// 2. Perform ? CreateDataPropertyOrThrow(target, ! ToString(targetIndex), element).
				CreateDataPropertyOrThrow(target, ToString(targetIndex), element);
				// 3. Increase targetIndex by 1.
				targetIndex += 1;
			}
		}
		// d. Increase sourceIndex by 1.
		sourceIndex += 1;
	}
	// 4. Return targetIndex.
	return targetIndex;
}

// _ESAbstract.ToPropertyKey
/* globals ToPrimitive, Type, ToString */
// 7.1.14. ToPropertyKey ( argument )
function ToPropertyKey(argument) { // eslint-disable-line no-unused-vars
	// 1. Let key be ? ToPrimitive(argument, hint String).
	var key = ToPrimitive(argument, String);
	// 2. If Type(key) is Symbol, then
	if (Type(key) === 'symbol') {
		// a. Return key.
		return key;
	}
	// 3. Return ! ToString(key).
	return ToString(key);
}
if (!("getOwnPropertyDescriptor"in Object&&"function"==typeof Object.getOwnPropertyDescriptor&&function(){try{return"3"===Object.getOwnPropertyDescriptor("13.7",1).value}catch(t){return!1}}()
)) {

// Object.getOwnPropertyDescriptor
/* global CreateMethodProperty, ToObject, ToPropertyKey, HasOwnProperty, Type */
(function () {
	var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	var supportsDOMDescriptors = (function () {
		try {
			return Object.defineProperty(document.createElement('div'), 'one', {
				get: function () {
					return 1;
				}
			}).one === 1;
		} catch (e) {
			return false;
		}
	});

	var toString = ({}).toString;
	var split = ''.split;

	// 19.1.2.8 Object.getOwnPropertyDescriptor ( O, P )
	CreateMethodProperty(Object, 'getOwnPropertyDescriptor', function getOwnPropertyDescriptor(O, P) {
		// 1. Let obj be ? ToObject(O).
		var obj = ToObject(O);
		// Polyfill.io fallback for non-array-like strings which exist in some ES3 user-agents (IE 8)
		obj = (Type(obj) === 'string' || obj instanceof String) && toString.call(O) == '[object String]' ? split.call(O, '') : Object(O);

		// 2. Let key be ? ToPropertyKey(P).
		var key = ToPropertyKey(P);

		// 3. Let desc be ? obj.[[GetOwnProperty]](key).
		// 4. Return FromPropertyDescriptor(desc).
		// Polyfill.io Internet Explorer 8 natively supports property descriptors only on DOM objects.
		// We will fallback to the polyfill implementation if the native implementation throws an error.
		if (supportsDOMDescriptors) {
			try {
				return nativeGetOwnPropertyDescriptor(obj, key);
			// eslint-disable-next-line no-empty
			} catch (error) {}
		}
		if (HasOwnProperty(obj, key)) {
			return {
				enumerable: true,
				configurable: true,
				writable: true,
				value: obj[key]
			};
		}
	});
}());

}

if (!("assign"in Object
)) {

// Object.assign
/* global CreateMethodProperty, Get, ToObject */
// 19.1.2.1 Object.assign ( target, ...sources )
CreateMethodProperty(Object, 'assign', function assign(target, source) { // eslint-disable-line no-unused-vars
	// 1. Let to be ? ToObject(target).
	var to = ToObject(target);

	// 2. If only one argument was passed, return to.
	if (arguments.length === 1) {
		return to;
	}

	// 3. Let sources be the List of argument values starting with the second argument
	var sources = Array.prototype.slice.call(arguments, 1);

	// 4. For each element nextSource of sources, in ascending index order, do
	var index1;
	var index2;
	var keys;
	var from;
	for (index1 = 0; index1 < sources.length; index1++) {
		var nextSource = sources[index1];
		// a. If nextSource is undefined or null, let keys be a new empty List.
		if (nextSource === undefined || nextSource === null) {
			keys = [];
			// b. Else,
		} else {
			// Polyfill.io - In order to get strings in ES3 and old V8 working correctly we need to split them into an array ourselves.
			// i. Let from be ! ToObject(nextSource).
			from = Object.prototype.toString.call(nextSource) === '[object String]' ? String(nextSource).split('') : ToObject(nextSource);
			// ii. Let keys be ? from.[[OwnPropertyKeys]]().
			/*
				This step in our polyfill is not complying with the specification.
				[[OwnPropertyKeys]] is meant to return ALL keys, including non-enumerable and symbols.
				TODO: When we have Reflect.ownKeys, use that instead as it is the userland equivalent of [[OwnPropertyKeys]].
			*/
			keys = Object.keys(from);
		}

		// c. For each element nextKey of keys in List order, do
		for (index2 = 0; index2 < keys.length; index2++) {
			var nextKey = keys[index2];
			var enumerable;
			try {
				// i. Let desc be ? from.[[GetOwnProperty]](nextKey).
				var desc = Object.getOwnPropertyDescriptor(from, nextKey);
				// ii. If desc is not undefined and desc.[[Enumerable]] is true, then
				enumerable = desc !== undefined && desc.enumerable === true;
			} catch (e) {
				// Polyfill.io - We use Object.prototype.propertyIsEnumerable as a fallback
				// because `Object.getOwnPropertyDescriptor(window.location, 'hash')` causes Internet Explorer 11 to crash.
				enumerable = Object.prototype.propertyIsEnumerable.call(from, nextKey);
			}
			if (enumerable) {
				// 1. Let propValue be ? Get(from, nextKey).
				var propValue = Get(from, nextKey);
				// 2. Perform ? Set(to, nextKey, propValue, true).
				to[nextKey] = propValue;
			}
		}
	}
	// 5. Return to.
	return to;
});

}

if (!("defineProperties"in Object
)) {

// Object.defineProperties
/* global CreateMethodProperty, Get, ToObject, Type */
// 19.1.2.3. Object.defineProperties ( O, Properties )
CreateMethodProperty(Object, 'defineProperties', function defineProperties(O, Properties) {
	// 1. If Type(O) is not Object, throw a TypeError exception.
	if (Type(O) !== 'object') {
		throw new TypeError('Object.defineProperties called on non-object');
	}
	// 2. Let props be ? ToObject(Properties).
	var props = ToObject(Properties);
	// 3. Let keys be ? props.[[OwnPropertyKeys]]().
	/*
		Polyfill.io - This step in our polyfill is not complying with the specification.
		[[OwnPropertyKeys]] is meant to return ALL keys, including non-enumerable and symbols.
		TODO: When we have Reflect.ownKeys, use that instead as it is the userland equivalent of [[OwnPropertyKeys]].
	*/
	var keys = Object.keys(props);
	// 4. Let descriptors be a new empty List.
	var descriptors = [];
	// 5. For each element nextKey of keys in List order, do
	for (var i = 0; i < keys.length; i++) {
		var nextKey = keys[i];
		// a. Let propDesc be ? props.[[GetOwnProperty]](nextKey).
		var propDesc = Object.getOwnPropertyDescriptor(props, nextKey);
		// b. If propDesc is not undefined and propDesc.[[Enumerable]] is true, then
		if (propDesc !== undefined && propDesc.enumerable) {
			// i. Let descObj be ? Get(props, nextKey).
			var descObj = Get(props, nextKey);
			// ii. Let desc be ? ToPropertyDescriptor(descObj).
			// Polyfill.io - We skip this step because Object.defineProperty deals with it.
			// TODO: Implement this step?
			var desc = descObj;
			// iii. Append the pair (a two element List) consisting of nextKey and desc to the end of descriptors.
			descriptors.push([nextKey, desc]);
		}
	}
	// 6. For each pair from descriptors in list order, do
	for (var j = 0; j < descriptors.length; j++){
		// a. Let P be the first element of pair.
		var P = descriptors[j][0];
		// b. Let desc be the second element of pair.
		desc = descriptors[j][1];
		// c. Perform ? DefinePropertyOrThrow(O, P, desc).
		Object.defineProperty(O, P, desc);
	}
	// 7. Return O.
	return O;
});

}

if (!("create"in Object
)) {

// Object.create
/* global CreateMethodProperty, Type */
(function () {
	var supportsProto = !({ __proto__: null } instanceof Object);
	if (supportsProto) {
		var createEmpty = function () {
			return {
				__proto__: null
			};
		};
	} else {
		// Taken from https://github.com/es-shims/es5-shim/blob/a265a136d6220146cfbb09026c2de1fa42e220ec/es5-sham.js#L247
		// In old IE __proto__ can't be used to manually set `null`, nor does
		// any other method exist to make an object that inherits from nothing,
		// aside from Object.prototype itself. Instead, create a new global
		// object and *steal* its Object.prototype and strip it bare. This is
		// used as the prototype to create nullary objects.
		createEmpty = function () {
			// Determine which approach to use
			// see https://github.com/es-shims/es5-shim/issues/150
			var iframe = document.createElement('iframe');
			iframe.style.display = 'none';
			var parent = document.body || document.documentElement;
			parent.appendChild(iframe);
			iframe.src = 'javascript:';
			var empty = iframe.contentWindow.Object.prototype;
			parent.removeChild(iframe);
			iframe = null;
			delete empty.constructor;
			delete empty.hasOwnProperty;
			delete empty.propertyIsEnumerable;
			delete empty.isPrototypeOf;
			delete empty.toLocaleString;
			delete empty.toString;
			delete empty.valueOf;
			var Empty = function Empty() {};
			Empty.prototype = empty;
			// short-circuit future calls
			createEmpty = function () {
				return new Empty();
			};
			return new Empty();
		};
	}

	function T() {}

	CreateMethodProperty(Object, 'create', function create(O, properties) {
		// 1. If Type(O) is neither Object nor Null, throw a TypeError exception.
		if (Type(O) !== 'object' && Type(O) !== 'null') {
			throw new TypeError('Object prototype may only be an Object or null');
		}
		if (Type(O) === 'null') {
			var obj = createEmpty();
		} else {
			// 2. Let obj be ObjectCreate(O).
			T.prototype = O;
			obj = new T();
			obj.__proto__ = O;


			obj.constructor.prototype = O;
			obj.__proto__ = O;
		}

		// 3. If Properties is not undefined, then
		if (1 in arguments) {
			// a. Return ? ObjectDefineProperties(obj, Properties).
			return Object.defineProperties(obj, properties);
		}

		return obj;
	});
}());

}

if (!("DocumentFragment"in self&&function(){try{return new DocumentFragment,!0}catch(n){return!1}}()
)) {

// DocumentFragment
(function (global) {
	global.DocumentFragment = function DocumentFragment() {
		return document.createDocumentFragment();
	};

	var fragment = document.createDocumentFragment();
	global.DocumentFragment.prototype = Object.create(fragment.constructor.prototype)
}(self));

}


// _ESAbstract.OrdinaryCreateFromConstructor
/* global GetPrototypeFromConstructor */
// 9.1.13. OrdinaryCreateFromConstructor ( constructor, intrinsicDefaultProto [ , internalSlotsList ] )
function OrdinaryCreateFromConstructor(constructor, intrinsicDefaultProto) { // eslint-disable-line no-unused-vars
	var internalSlotsList = arguments[2] || {};
	// 1. Assert: intrinsicDefaultProto is a String value that is this specification's name of an intrinsic object.
	// The corresponding object must be an intrinsic that is intended to be used as the[[Prototype]] value of an object.

	// 2. Let proto be ? GetPrototypeFromConstructor(constructor, intrinsicDefaultProto).
	var proto = GetPrototypeFromConstructor(constructor, intrinsicDefaultProto);

	// 3. Return ObjectCreate(proto, internalSlotsList).
	// Polyfill.io - We do not pass internalSlotsList to Object.create because Object.create does not use the default ordinary object definitions specified in 9.1.
	var obj = Object.create(proto);
	for (var name in internalSlotsList) {
		if (Object.prototype.hasOwnProperty.call(internalSlotsList, name)) {
			Object.defineProperty(obj, name, {
				configurable: true,
				enumerable: false,
				writable: true,
				value: internalSlotsList[name]
			});
		}
	}
	return obj;
}

// _ESAbstract.Construct
/* global IsConstructor, OrdinaryCreateFromConstructor, Call */
// 7.3.13. Construct ( F [ , argumentsList [ , newTarget ]] )
function Construct(F /* [ , argumentsList [ , newTarget ]] */) { // eslint-disable-line no-unused-vars
	// 1. If newTarget is not present, set newTarget to F.
	var newTarget = arguments.length > 2 ? arguments[2] : F;

	// 2. If argumentsList is not present, set argumentsList to a new empty List.
	var argumentsList = arguments.length > 1 ? arguments[1] : [];

	// 3. Assert: IsConstructor(F) is true.
	if (!IsConstructor(F)) {
		throw new TypeError('F must be a constructor.');
	}

	// 4. Assert: IsConstructor(newTarget) is true.
	if (!IsConstructor(newTarget)) {
		throw new TypeError('newTarget must be a constructor.');
	}

	// 5. Return ? F.[[Construct]](argumentsList, newTarget).
	// Polyfill.io - If newTarget is the same as F, it is equivalent to new F(...argumentsList).
	if (newTarget === F) {
		return new (Function.prototype.bind.apply(F, [null].concat(argumentsList)))();
	} else {
		// Polyfill.io - This is mimicking section 9.2.2 step 5.a.
		var obj = OrdinaryCreateFromConstructor(newTarget, Object.prototype);
		return Call(F, obj, argumentsList);
	}
}
if (!("of"in Array
)) {

// Array.of
/* global ArrayCreate, Construct, CreateDataPropertyOrThrow, CreateMethodProperty, IsConstructor, ToString */
// 22.1.2.3. Array.of ( ...items )
CreateMethodProperty(Array, 'of', function of() {
	// 1. Let len be the actual number of arguments passed to this function.
	var len = arguments.length;
	// 2. Let items be the List of arguments passed to this function.
	var items = arguments;
	// 3. Let C be the this value.
	var C = this;
	// 4. If IsConstructor(C) is true, then
	if (IsConstructor(C)) {
		// a. Let A be ? Construct(C, « len »).
		var A = Construct(C, [len]);
		// 5. Else,
	} else {
		// a. Let A be ? ArrayCreate(len).
		A = ArrayCreate(len);
	}
	// 6. Let k be 0.
	var k = 0;
	// 7. Repeat, while k < len
	while (k < len) {
		// a. Let kValue be items[k].
		var kValue = items[k];
		// b. Let Pk be ! ToString(k).
		var Pk = ToString(k);
		// c. Perform ? CreateDataPropertyOrThrow(A, Pk, kValue).
		CreateDataPropertyOrThrow(A, Pk, kValue);
		// d. Increase k by 1.
		k = k + 1;

	}
	// 8. Perform ? Set(A, "length", len, true)
	A.length = len;
	// 9. Return A.
	return A;
});

}


// _ESAbstract.ArraySpeciesCreate
/* global IsArray, ArrayCreate, Get, Type, IsConstructor, Construct */
// 9.4.2.3. ArraySpeciesCreate ( originalArray, length )
function ArraySpeciesCreate(originalArray, length) { // eslint-disable-line no-unused-vars
	// 1. Assert: length is an integer Number ≥ 0.
	// 2. If length is -0, set length to +0.
	if (length === 0 && 1/length === -Infinity) {
		length = 0;
	}

	// 3. Let isArray be ? IsArray(originalArray).
	var isArray = IsArray(originalArray);

	// 4. If isArray is false, return ? ArrayCreate(length).
	if (isArray === false) {
		return ArrayCreate(length);
	}

	// 5. Let C be ? Get(originalArray, "constructor").
	var C = Get(originalArray, 'constructor');

	// Polyfill.io - We skip this section as not sure how to make a cross-realm normal Array, a same-realm Array.
	// 6. If IsConstructor(C) is true, then
	// if (IsConstructor(C)) {
		// a. Let thisRealm be the current Realm Record.
		// b. Let realmC be ? GetFunctionRealm(C).
		// c. If thisRealm and realmC are not the same Realm Record, then
			// i. If SameValue(C, realmC.[[Intrinsics]].[[%Array%]]) is true, set C to undefined.
	// }
	// 7. If Type(C) is Object, then
	if (Type(C) === 'object') {
		// a. Set C to ? Get(C, @@species).
		C = 'Symbol' in self && 'species' in self.Symbol ? Get(C, self.Symbol.species) : undefined;
		// b. If C is null, set C to undefined.
		if (C === null) {
			C = undefined;
		}
	}
	// 8. If C is undefined, return ? ArrayCreate(length).
	if (C === undefined) {
		return ArrayCreate(length);
	}
	// 9. If IsConstructor(C) is false, throw a TypeError exception.
	if (!IsConstructor(C)) {
		throw new TypeError('C must be a constructor');
	}
	// 10. Return ? Construct(C, « length »).
	return Construct(C, [length]);
}
if (!("filter"in Array.prototype
)) {

// Array.prototype.filter
/* global CreateMethodProperty, ToObject, ToLength, Get, IsCallable, ArraySpeciesCreate, ToString, HasProperty, ToBoolean, Call, CreateDataPropertyOrThrow */
// 22.1.3.7. Array.prototype.filter ( callbackfn [ , thisArg ] )
CreateMethodProperty(Array.prototype, 'filter', function filter(callbackfn /* [ , thisArg ] */) {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(O, "length"));
	// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
	if (IsCallable(callbackfn) === false) {
		throw new TypeError(callbackfn + ' is not a function');
	}
	// 4. If thisArg is present, let T be thisArg; else let T be undefined.
	var T = arguments.length > 1 ? arguments[1] : undefined;
	// 5. Let A be ? ArraySpeciesCreate(O, 0).
	var A = ArraySpeciesCreate(O, 0);
	// 6. Let k be 0.
	var k = 0;
	// 7. Let to be 0.
	var to = 0;
	// 8. Repeat, while k < len
	while (k < len) {
		// a. Let Pk be ! ToString(k).
		var Pk = ToString(k);
		// b. Let kPresent be ? HasProperty(O, Pk).
		var kPresent = HasProperty(O, Pk);
		// c. If kPresent is true, then
		if (kPresent) {
			// i. Let kValue be ? Get(O, Pk).
			var kValue = Get(O, Pk);
			// ii. Let selected be ToBoolean(? Call(callbackfn, T, « kValue, k, O »)).
			var selected = ToBoolean(Call(callbackfn, T, [kValue, k, O]));
			// iii. If selected is true, then
			if (selected) {
				// 1. Perform ? CreateDataPropertyOrThrow(A, ! ToString(to), kValue)
				CreateDataPropertyOrThrow(A, ToString(to), kValue);
				// 2. Increase to by 1.
				to = to + 1;
			}

		}
		// d. Increase k by 1.
		k = k + 1;
	}
	// 9. Return A.
	return A;
});

}

if (!("flat"in Array.prototype
)) {

// Array.prototype.flat
/* global CreateMethodProperty, ToObject, ToLength, Get, ToInteger, ArraySpeciesCreate, FlattenIntoArray */
// 22.1.3.10 Array.prototype.flat( [ depth ] )
CreateMethodProperty(Array.prototype, 'flat', function flat() {
	"use strict";
	var depth = arguments[0];
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let sourceLen be ? ToLength(? Get(O, "length")).
	var sourceLen = ToLength(Get(O, "length"));
	// 3. Let depthNum be 1.
	var depthNum = 1;
	// 4. If depth is not undefined, then
	if (depth !== void 0) {
		// a. Set depthNum to ? ToInteger(depth).
		depthNum = ToInteger(depth);
	}
	// 5. Let A be ? ArraySpeciesCreate(O, 0).
	var A = ArraySpeciesCreate(O,0);
	// 6. Perform ? FlattenIntoArray(A, O, sourceLen, 0, depthNum).
	FlattenIntoArray(A, O, sourceLen, 0, depthNum);
	// 7. Return A.
	return A;
});

}

if (!("flatMap"in Array.prototype
)) {

// Array.prototype.flatMap
/* global CreateMethodProperty, ToObject, ToLength, Get, IsCallable, ArraySpeciesCreate, FlattenIntoArray */
// 22.1.3.11 Array.prototype.flatMap ( mapperFunction [ , thisArg ] )
CreateMethodProperty(Array.prototype, 'flatMap', function flatMap(mapperFunction /* , thisArg */ ) {
	"use strict";
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let sourceLen be ? ToLength(? Get(O, "length")).
	var sourceLen = ToLength(Get(O, "length"));
	// 3. If IsCallable(mapperFunction) is false, throw a TypeError exception.
	if (IsCallable(mapperFunction) === false) {
		throw new TypeError('mapperFunction is not callable.');
	}
	// 4. If thisArg is present, let T be thisArg; else let T be undefined.
	var T;
	if (1 in arguments) {
		T = arguments[1];
	} else {
		T = undefined;
	}
	// 5. Let A be ? ArraySpeciesCreate(O, 0).
	var A = ArraySpeciesCreate(O, 0);
	// 6. Perform ? FlattenIntoArray(A, O, sourceLen, 0, 1, mapperFunction, T).
	FlattenIntoArray(A, O, sourceLen, 0, 1, mapperFunction, T);
	// 7. Return A.
	return A;
});

}

if (!("map"in Array.prototype
)) {

// Array.prototype.map
/* global ArraySpeciesCreate, Call, CreateDataPropertyOrThrow, CreateMethodProperty, Get, HasProperty, IsCallable, ToLength, ToObject, ToString */
// 22.1.3.16. Array.prototype.map ( callbackfn [ , thisArg ] )
CreateMethodProperty(Array.prototype, 'map', function map(callbackfn /* [ , thisArg ] */) {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(O, "length"));
	// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
	if (IsCallable(callbackfn) === false) {
		throw new TypeError(callbackfn + ' is not a function');
	}
	// 4. If thisArg is present, let T be thisArg; else let T be undefined.
	var T = arguments.length > 1 ? arguments[1] : undefined;
	// 5. Let A be ? ArraySpeciesCreate(O, len).
	var A = ArraySpeciesCreate(O, len);
	// 6. Let k be 0.
	var k = 0;
	// 7. Repeat, while k < len
	while (k < len) {
		// a. Let Pk be ! ToString(k).
		var Pk = ToString(k);
		// b. Let kPresent be ? HasProperty(O, Pk).
		var kPresent = HasProperty(O, Pk);
		// c. If kPresent is true, then
		if (kPresent) {
			// i. Let kValue be ? Get(O, Pk).
			var kValue = Get(O, Pk);
			// ii. Let mappedValue be ? Call(callbackfn, T, « kValue, k, O »).
			var mappedValue = Call(callbackfn, T, [kValue, k, O]);
			// iii. Perform ? CreateDataPropertyOrThrow(A, Pk, mappedValue).
			CreateDataPropertyOrThrow(A, Pk, mappedValue);
		}
		// d. Increase k by 1.
		k = k + 1;
	}
	// 8. Return A.
	return A;
});

}

if (!("sort"in Array.prototype&&function(){var r={length:3,0:2,1:1,2:3}
return Array.prototype.sort.call(r,function(r,t){return r-t})===r}()
)) {

// Array.prototype.sort
/* global CreateMethodProperty, IsCallable */
"use strict";

var origSort = Array.prototype.sort;

// 22.1.3.27 Array.prototype.sort ( comparefn )
// The elements of this array are sorted. The sort must be stable (that is,
// elements that compare equal must remain in their original order). If
// comparefn is not undefined, it should be a function that accepts two
// arguments x and y and returns a negative value
// if x < y, zero if x = y, or a positive value if x > y.

CreateMethodProperty(Array.prototype, "sort", function sort(compareFn) {
	// 1. If comparefn is not undefined and IsCallable(comparefn) is false, throw
	//    a TypeError exception.
	if (compareFn !== undefined && IsCallable(compareFn) === false) {
		throw new TypeError(
			"The comparison function must be either a function or undefined"
		);
	}

	// Polyfill.io - the steps below are handled by the native
	// Array.prototype.sort method that we call.
	// 2.Let obj be ? ToObject(this value).
	// 3.Let len be ? LengthOfArrayLike(obj).

	// if comprateFn does not exist, use the spec defined in-built SortCompare.
	if (compareFn === undefined) {
		origSort.call(this);
	} else {
		// if compareFn exists, sort the array, breaking sorting ties by using the
		// items' original index position.

		// Keep track of the items starting index position.
		var that = Array.prototype.map.call(this, function(item, index) {
			return { item: item, index: index };
		});
		origSort.call(that, function(a, b) {
			var compareResult = compareFn.call(undefined, a.item, b.item);
			return compareResult === 0 ? a.index - b.index : compareResult;
		});
		// update the original object (`this`) with the new position for the items
		// which were moved.
		for (var a in that) {
			if (Object.prototype.hasOwnProperty.call(that, a)) {
				if (that[a].item !== this[a]) {
					this[a] = that[a].item;
				}
			}
		}
	}

	return this;
});

}

if (!("values"in Object
)) {

// Object.values
/* global CreateMethodProperty, ToObject */
(function () {
	var toString = ({}).toString;
	var split = ''.split;
	// 19.1.2.21. Object.values ( O )
	CreateMethodProperty(Object, 'values', function values(O) {
		// 1. Let obj be ? ToObject(O).
		// Polyfill.io fallback for non-array-like strings which exist in some ES3 user-agents (IE 8)
		var obj = toString.call(O) == '[object String]' ? split.call(O, '') : ToObject(O);
		// 2. Let nameList be ? EnumerableOwnProperties(obj, "value").
		var nameList = Object.keys(obj).map(function (key) {
			return obj[key];
		});
		// 3. Return CreateArrayFromList(nameList).
		// Polyfill.io - nameList is already an array.
		return nameList;
	});
}());

}

if (!("setPrototypeOf"in Object
)) {

// Object.setPrototypeOf
/* global CreateMethodProperty */
// ES6-shim 0.16.0 (c) 2013-2014 Paul Miller (http://paulmillr.com)
// ES6-shim may be freely distributed under the MIT license.
// For more details and documentation:
// https://github.com/paulmillr/es6-shim/

 // NOTE:  This versions needs object ownership
  //        because every promoted object needs to be reassigned
  //        otherwise uncompatible browsers cannot work as expected
  //
  // NOTE:  This might need es5-shim or polyfills upfront
  //        because it's based on ES5 API.
  //        (probably just an IE <= 8 problem)
  //
  // NOTE:  nodejs is fine in version 0.8, 0.10, and future versions.
(function () {
	if (Object.setPrototypeOf) { return; }

	/*jshint proto: true */
	// @author    Andrea Giammarchi - @WebReflection

	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var create = Object.create;
	var defineProperty = Object.defineProperty;
	var getPrototypeOf = Object.getPrototypeOf;
	var objProto = Object.prototype;

	var copyDescriptors = function (target, source) {
		// define into target descriptors from source
		getOwnPropertyNames(source).forEach(function (key) {
			defineProperty(
				target,
				key,
				getOwnPropertyDescriptor(source, key)
			);
		});
		return target;
	};
	// used as fallback when no promotion is possible
	var createAndCopy = function setPrototypeOf(origin, proto) {
		return copyDescriptors(create(proto), origin);
	};
	var set, sPOf;
	try {
		// this might fail for various reasons
		// ignore if Chrome cought it at runtime
		set = getOwnPropertyDescriptor(objProto, '__proto__').set;
		set.call({}, null);
		// setter not poisoned, it can promote
		// Firefox, Chrome
		sPOf = function setPrototypeOf(origin, proto) {
			set.call(origin, proto);
			return origin;
		};
	} catch (e) {
		// do one or more feature detections
		set = { __proto__: null };
		// if proto does not work, needs to fallback
		// some Opera, Rhino, ducktape
		if (set instanceof Object) {
			sPOf = createAndCopy;
		} else {
			// verify if null objects are buggy
			/* eslint-disable no-proto */
			set.__proto__ = objProto;
			/* eslint-enable no-proto */
			// if null objects are buggy
			// nodejs 0.8 to 0.10
			if (set instanceof Object) {
				sPOf = function setPrototypeOf(origin, proto) {
					// use such bug to promote
					/* eslint-disable no-proto */
					origin.__proto__ = proto;
					/* eslint-enable no-proto */
					return origin;
				};
			} else {
				// try to use proto or fallback
				// Safari, old Firefox, many others
				sPOf = function setPrototypeOf(origin, proto) {
					// if proto is not null
					if (getPrototypeOf(origin)) {
						// use __proto__ to promote
						/* eslint-disable no-proto */
						origin.__proto__ = proto;
						/* eslint-enable no-proto */
						return origin;
					} else {
						// otherwise unable to promote: fallback
						return createAndCopy(origin, proto);
					}
				};
			}
		}
	}
	CreateMethodProperty(Object, 'setPrototypeOf', sPOf);
}());

}

if (!("Symbol"in self&&0===self.Symbol.length
)) {

// Symbol
// A modification of https://github.com/WebReflection/get-own-property-symbols
// (C) Andrea Giammarchi - MIT Licensed

/* global Type */
(function (Object,  GOPS, global) {
	'use strict'; //so that ({}).toString.call(null) returns the correct [object Null] rather than [object Window]

	var supportsGetters = (function () {
		// supports getters
		try {
			var a = {};
			Object.defineProperty(a, "t", {
				configurable: true,
				enumerable: false,
				get: function () {
					return true;
				},
				set: undefined
			});
			return !!a.t;
		} catch (e) {
			return false;
		}
	}());

	var	setDescriptor;
	var id = 0;
	var random = '' + Math.random();
	var prefix = '__\x01symbol:';
	var prefixLength = prefix.length;
	var internalSymbol = '__\x01symbol@@' + random;
	var emptySymbolLookup = {};
	var DP = 'defineProperty';
	var DPies = 'defineProperties';
	var GOPN = 'getOwnPropertyNames';
	var GOPD = 'getOwnPropertyDescriptor';
	var PIE = 'propertyIsEnumerable';
	var ObjectProto = Object.prototype;
	var hOP = ObjectProto.hasOwnProperty;
	var pIE = ObjectProto[PIE];
	var toString = ObjectProto.toString;
	var concat = Array.prototype.concat;
	var cachedWindowNames = Object.getOwnPropertyNames ? Object.getOwnPropertyNames(self) : [];
	var nGOPN = Object[GOPN];
	var gOPN = function getOwnPropertyNames (obj) {
		if (toString.call(obj) === '[object Window]') {
			try {
				return nGOPN(obj);
			} catch (e) {
				// IE bug where layout engine calls userland gOPN for cross-domain `window` objects
				return concat.call([], cachedWindowNames);
			}
		}
		return nGOPN(obj);
	};
	var gOPD = Object[GOPD];
	var objectCreate = Object.create;
	var objectKeys = Object.keys;
	var freeze = Object.freeze || Object;
	var objectDefineProperty = Object[DP];
	var $defineProperties = Object[DPies];
	var descriptor = gOPD(Object, GOPN);
	var addInternalIfNeeded = function (o, uid, enumerable) {
		if (!hOP.call(o, internalSymbol)) {
			try {
				objectDefineProperty(o, internalSymbol, {
					enumerable: false,
					configurable: false,
					writable: false,
					value: {}
				});
			} catch (e) {
				o[internalSymbol] = {};
			}
		}
		o[internalSymbol]['@@' + uid] = enumerable;
	};
	var createWithSymbols = function (proto, descriptors) {
		var self = objectCreate(proto);
		gOPN(descriptors).forEach(function (key) {
			if (propertyIsEnumerable.call(descriptors, key)) {
				$defineProperty(self, key, descriptors[key]);
			}
		});
		return self;
	};
	var copyAsNonEnumerable = function (descriptor) {
		var newDescriptor = objectCreate(descriptor);
		newDescriptor.enumerable = false;
		return newDescriptor;
	};
	var get = function get(){};
	var onlyNonSymbols = function (name) {
		return name != internalSymbol &&
			!hOP.call(source, name);
	};
	var onlySymbols = function (name) {
		return name != internalSymbol &&
			hOP.call(source, name);
	};
	var propertyIsEnumerable = function propertyIsEnumerable(key) {
		var uid = '' + key;
		return onlySymbols(uid) ? (
			hOP.call(this, uid) &&
			this[internalSymbol] && this[internalSymbol]['@@' + uid]
		) : pIE.call(this, key);
	};
	var setAndGetSymbol = function (uid) {
		var descriptor = {
			enumerable: false,
			configurable: true,
			get: get,
			set: function (value) {
			setDescriptor(this, uid, {
				enumerable: false,
				configurable: true,
				writable: true,
				value: value
			});
			addInternalIfNeeded(this, uid, true);
			}
		};
		try {
			objectDefineProperty(ObjectProto, uid, descriptor);
		} catch (e) {
			ObjectProto[uid] = descriptor.value;
		}
		source[uid] = objectDefineProperty(
			Object(uid),
			'constructor',
			sourceConstructor
		);
		var description = gOPD(Symbol.prototype, 'description');
		if (description) {
			objectDefineProperty(
				source[uid],
				'description',
				description
			);
		}
		return freeze(source[uid]);
	};

	var symbolDescription = function (s) {
		var sym = thisSymbolValue(s);

		// 3. Return sym.[[Description]].
		if (supportsInferredNames) {
			var name = getInferredName(sym);
			if (name !== "") {
				return name.slice(1, -1); // name.slice('['.length, -']'.length);
			}
		}

		if (emptySymbolLookup[sym] !== undefined) {
			return emptySymbolLookup[sym];
		}

		var string = sym.toString();
		var randomStartIndex = string.lastIndexOf("0.");
		string = string.slice(10, randomStartIndex);

		if (string === "") {
			return undefined;
		}
		return string;
	};

	var Symbol = function Symbol() {
		var description = arguments[0];
		if (this instanceof Symbol) {
			throw new TypeError('Symbol is not a constructor');
		}

		var uid = prefix.concat(description || '', random, ++id);

		if (description !== undefined && (description === null || isNaN(description) || String(description) === "")) {
			emptySymbolLookup[uid] = String(description);
		}

		var that = setAndGetSymbol(uid);

		if (!supportsGetters) {
			Object.defineProperty(that, "description", {
				configurable: true,
				enumerable: false,
				value: symbolDescription(that)
			});
		}

		return that;
	};

	var source = objectCreate(null);
	var sourceConstructor = {value: Symbol};
	var sourceMap = function (uid) {
		return source[uid];
		};
	var $defineProperty = function defineProperty(o, key, descriptor) {
		var uid = '' + key;
		if (onlySymbols(uid)) {
			setDescriptor(o, uid, descriptor.enumerable ?
				copyAsNonEnumerable(descriptor) : descriptor);
			addInternalIfNeeded(o, uid, !!descriptor.enumerable);
		} else {
			objectDefineProperty(o, key, descriptor);
		}
		return o;
	};

	var onlyInternalSymbols = function (obj) {
		return function (name) {
			return hOP.call(obj, internalSymbol) && hOP.call(obj[internalSymbol], '@@' + name);
		};
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(o) {
		return gOPN(o).filter(o === ObjectProto ? onlyInternalSymbols(o) : onlySymbols).map(sourceMap);
		}
	;

	descriptor.value = $defineProperty;
	objectDefineProperty(Object, DP, descriptor);

	descriptor.value = $getOwnPropertySymbols;
	objectDefineProperty(Object, GOPS, descriptor);

	descriptor.value = function getOwnPropertyNames(o) {
		return gOPN(o).filter(onlyNonSymbols);
	};
	objectDefineProperty(Object, GOPN, descriptor);

	descriptor.value = function defineProperties(o, descriptors) {
		var symbols = $getOwnPropertySymbols(descriptors);
		if (symbols.length) {
		objectKeys(descriptors).concat(symbols).forEach(function (uid) {
			if (propertyIsEnumerable.call(descriptors, uid)) {
			$defineProperty(o, uid, descriptors[uid]);
			}
		});
		} else {
		$defineProperties(o, descriptors);
		}
		return o;
	};
	objectDefineProperty(Object, DPies, descriptor);

	descriptor.value = propertyIsEnumerable;
	objectDefineProperty(ObjectProto, PIE, descriptor);

	descriptor.value = Symbol;
	objectDefineProperty(global, 'Symbol', descriptor);

	// defining `Symbol.for(key)`
	descriptor.value = function (key) {
		var uid = prefix.concat(prefix, key, random);
		return uid in ObjectProto ? source[uid] : setAndGetSymbol(uid);
	};
	objectDefineProperty(Symbol, 'for', descriptor);

	// defining `Symbol.keyFor(symbol)`
	descriptor.value = function (symbol) {
		if (onlyNonSymbols(symbol))
		throw new TypeError(symbol + ' is not a symbol');
		return hOP.call(source, symbol) ?
		symbol.slice(prefixLength * 2, -random.length) :
		void 0
		;
	};
	objectDefineProperty(Symbol, 'keyFor', descriptor);

	descriptor.value = function getOwnPropertyDescriptor(o, key) {
		var descriptor = gOPD(o, key);
		if (descriptor && onlySymbols(key)) {
		descriptor.enumerable = propertyIsEnumerable.call(o, key);
		}
		return descriptor;
	};
	objectDefineProperty(Object, GOPD, descriptor);

	descriptor.value = function create(proto, descriptors) {
		return arguments.length === 1 || typeof descriptors === "undefined" ?
		objectCreate(proto) :
		createWithSymbols(proto, descriptors);
	};

	objectDefineProperty(Object, 'create', descriptor);

	var strictModeSupported = (function(){ 'use strict'; return this; }).call(null) === null;
	if (strictModeSupported) {
		descriptor.value = function () {
			var str = toString.call(this);
			return (str === '[object String]' && onlySymbols(this)) ? '[object Symbol]' : str;
		};
	} else {
		descriptor.value = function () {
			// https://github.com/Financial-Times/polyfill-library/issues/164#issuecomment-486965300
			// Polyfill.io this code is here for the situation where a browser does not
			// support strict mode and is executing `Object.prototype.toString.call(null)`.
			// This code ensures that we return the correct result in that situation however,
			// this code also introduces a bug where it will return the incorrect result for
			// `Object.prototype.toString.call(window)`. We can't have the correct result for
			// both `window` and `null`, so we have opted for `null` as we believe this is the more
			// common situation.
			if (this === window) {
				return '[object Null]';
			}

			var str = toString.call(this);
			return (str === '[object String]' && onlySymbols(this)) ? '[object Symbol]' : str;
		};
	}
	objectDefineProperty(ObjectProto, 'toString', descriptor);

	setDescriptor = function (o, key, descriptor) {
		var protoDescriptor = gOPD(ObjectProto, key);
		delete ObjectProto[key];
		objectDefineProperty(o, key, descriptor);
		if (o !== ObjectProto) {
			objectDefineProperty(ObjectProto, key, protoDescriptor);
		}
	};

	// The abstract operation thisSymbolValue(value) performs the following steps:
	function thisSymbolValue(value) {
		// 1. If Type(value) is Symbol, return value.
		if (Type(value) === "symbol") {
			return value;
		}
		// 2. If Type(value) is Object and value has a [[SymbolData]] internal slot, then
		// a. Let s be value.[[SymbolData]].
		// b. Assert: Type(s) is Symbol.
		// c. Return s.
		// 3. Throw a TypeError exception.
		throw TypeError(value + " is not a symbol");
	}

	// Symbol.prototype.description
	if (function () {
		// supports getters
		try {
			var a = {};
			Object.defineProperty(a, "t", {
				configurable: true,
				enumerable: false,
				get: function() {
					return true;
				},
				set: undefined
			});
			return !!a.t;
		} catch (e) {
			return false;
		}
	}()) {
		var getInferredName;
		try {
			// eslint-disable-next-line no-new-func
			getInferredName = Function("s", "var v = s.valueOf(); return { [v]() {} }[v].name;");
			// eslint-disable-next-line no-empty
		} catch (e) { }

		var inferred = function () { };
		var supportsInferredNames = getInferredName && inferred.name === "inferred" ? getInferredName : null;


		// 19.4.3.2 get Symbol.prototype.description
		Object.defineProperty(global.Symbol.prototype, "description", {
			configurable: true,
			enumerable: false,
			get: function () {
				// 1. Let s be the this value.
				var s = this;
				return symbolDescription(s);
			}
		});
	}

}(Object, 'getOwnPropertySymbols', self));

}

if (!(self.Reflect&&"ownKeys"in self.Reflect
)) {

// Reflect.ownKeys
/* global CreateMethodProperty, Reflect, Type */
// 26.1.10 Reflect.ownKeys ( target )
CreateMethodProperty(Reflect, 'ownKeys', function ownKeys(target) {
	// 1. If Type(target) is not Object, throw a TypeError exception.
	if (Type(target) !== "object") {
		throw new TypeError(Object.prototype.toString.call(target) + ' is not an Object');
	}
	// polyfill-library - These steps are taken care of by Object.getOwnPropertyNames.
	// 2. Let keys be ? target.[[OwnPropertyKeys]]().
	// 3. Return CreateArrayFromList(keys).
	return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
});

}

if (!("getOwnPropertyDescriptor"in Object&&"function"==typeof Object.getOwnPropertyDescriptor&&function(){try{var t={}
return t.test=0,0===Object.getOwnPropertyDescriptors(t).test.value}catch(e){return!1}}()
)) {

// Object.getOwnPropertyDescriptors
/* global CreateMethodProperty, Reflect, ToObject, CreateDataProperty */

// 19.1.2.9. Object.getOwnPropertyDescriptors ( O )
CreateMethodProperty(
	Object,
	'getOwnPropertyDescriptors',
	function getOwnPropertyDescriptors(O) {
		// 1. Let obj be ? ToObject(O).
		var obj = ToObject(O);
		// 2. Let ownKeys be ? obj.[[OwnPropertyKeys]]().
		var ownKeys = Reflect.ownKeys(obj);
		// 3. Let descriptors be ! ObjectCreate(%ObjectPrototype%).
		var descriptors = {};
		// 4. For each element key of ownKeys in List order, do
		var length = ownKeys.length;
		for (var i = 0; i < length; i++) {
			var key = ownKeys[i];
			// a. Let desc be ? obj.[[GetOwnProperty]](key).
			// b. Let descriptor be ! FromPropertyDescriptor(desc).
			var descriptor = Object.getOwnPropertyDescriptor(O, key);
			// c. If descriptor is not undefined, perform ! CreateDataProperty(descriptors, key, descriptor).
			if (descriptor !== undefined) {
				CreateDataProperty(descriptors, key, descriptor);
			}
		}
		// 5. Return descriptors.
		return descriptors;
	}
);

}

if (!("Symbol"in self&&"asyncIterator"in self.Symbol
)) {

// Symbol.asyncIterator
/* global Symbol */
Object.defineProperty(Symbol, 'asyncIterator', { value: Symbol('asyncIterator') });

}

if (!("Symbol"in self&&"hasInstance"in self.Symbol
)) {

// Symbol.hasInstance
/* global Symbol */
Object.defineProperty(Symbol, 'hasInstance', { value: Symbol('hasInstance') });

}

if (!("Symbol"in self&&"isConcatSpreadable"in self.Symbol
)) {

// Symbol.isConcatSpreadable
/* global Symbol */
Object.defineProperty(Symbol, 'isConcatSpreadable', { value: Symbol('isConcatSpreadable') });

}

if (!("Symbol"in self&&"iterator"in self.Symbol
)) {

// Symbol.iterator
Object.defineProperty(self.Symbol, 'iterator', { value: self.Symbol('iterator') });

}


// _ESAbstract.GetIterator
/* global GetMethod, Symbol, Call, Type, GetV */
// 7.4.1. GetIterator ( obj [ , method ] )
// The abstract operation GetIterator with argument obj and optional argument method performs the following steps:
function GetIterator(obj /*, method */) { // eslint-disable-line no-unused-vars
	// 1. If method is not present, then
		// a. Set method to ? GetMethod(obj, @@iterator).
	var method = arguments.length > 1 ? arguments[1] : GetMethod(obj, Symbol.iterator);
	// 2. Let iterator be ? Call(method, obj).
	var iterator = Call(method, obj);
	// 3. If Type(iterator) is not Object, throw a TypeError exception.
	if (Type(iterator) !== 'object') {
		throw new TypeError('bad iterator');
	}
	// 4. Let nextMethod be ? GetV(iterator, "next").
	var nextMethod = GetV(iterator, "next");
	// 5. Let iteratorRecord be Record {[[Iterator]]: iterator, [[NextMethod]]: nextMethod, [[Done]]: false}.
	var iteratorRecord = Object.create(null);
	iteratorRecord['[[Iterator]]'] = iterator;
	iteratorRecord['[[NextMethod]]'] = nextMethod;
	iteratorRecord['[[Done]]'] = false;
	// 6. Return iteratorRecord.
	return iteratorRecord;
}

// _ESAbstract.AddEntriesFromIterable
/* global IsCallable, GetIterator, IteratorStep, IteratorValue, IteratorClose, Get, Call, Type */
// eslint-disable-next-line no-unused-vars
var AddEntriesFromIterable = (function() {
	var toString = {}.toString;
	var split = "".split;
	// 23.1.1.2 AddEntriesFromIterable ( target, iterable, adder )
	return function AddEntriesFromIterable(target, iterable, adder) {
		// 1. If IsCallable(adder) is false, throw a TypeError exception.
		if (IsCallable(adder) === false) {
			throw new TypeError("adder is not callable.");
		}
		// 2. Assert: iterable is present, and is neither undefined nor null.
		// 3. Let iteratorRecord be ? GetIterator(iterable).
		var iteratorRecord = GetIterator(iterable);
		// 4. Repeat,
		// eslint-disable-next-line no-constant-condition
		while (true) {
			// a. Let next be ? IteratorStep(iteratorRecord).
			var next = IteratorStep(iteratorRecord);
			// b. If next is false, return target.
			if (next === false) {
				return target;
			}
			// c. Let nextItem be ? IteratorValue(next).
			var nextItem = IteratorValue(next);
			// d. If Type(nextItem) is not Object, then
			if (Type(nextItem) !== "object") {
				// i. Let error be ThrowCompletion(a newly created TypeError object).
				var error = new TypeError("nextItem is not an object");
				// ii. Return ? IteratorClose(iteratorRecord, error).
				IteratorClose(iteratorRecord, error);
				throw error;
			}
			// Polyfill.io fallback for non-array-like strings which exist in some ES3 user-agents (IE 8)
			nextItem =
				(Type(nextItem) === "string" || nextItem instanceof String) &&
				toString.call(nextItem) == "[object String]"
					? split.call(nextItem, "")
					: nextItem;
			var k;
			try {
				// e. Let k be Get(nextItem, "0").
				k = Get(nextItem, "0");
				// eslint-disable-next-line no-catch-shadow
			} catch (k) {
				// f. If k is an abrupt completion, return ? IteratorClose(iteratorRecord, k).
				return IteratorClose(iteratorRecord, k);
			}
			var v;
			try {
				// g. Let v be Get(nextItem, "1").
				v = Get(nextItem, "1");
				// eslint-disable-next-line no-catch-shadow
			} catch (v) {
				// h. If v is an abrupt completion, return ? IteratorClose(iteratorRecord, v).
				return IteratorClose(iteratorRecord, v);
			}
			try {
				// i. Let status be Call(adder, target, « k.[[Value]], v.[[Value]] »).
				Call(adder, target, [k, v]);
				// eslint-disable-next-line no-catch-shadow
			} catch (status) {
				// j. If status is an abrupt completion, return ? IteratorClose(iteratorRecord, status).
				return IteratorClose(iteratorRecord, status);
			}
		}
	};
})();

// _ESAbstract.IterableToList
/* global GetIterator, IteratorStep, IteratorValue */
// 7.4.11 IterableToList ( items [ , method ] )
function IterableToList(items /*, method */) { // eslint-disable-line no-unused-vars
	// 1. If method is present, then
	// 1.a. Let iteratorRecord be ? GetIterator(items, sync, method).
	// 2. Else,
	// 2.a. Let iteratorRecord be ? GetIterator(items, sync).
	var iteratorRecord = arguments.length > 1
		? GetIterator(items, arguments[1])
		: GetIterator(items);
	// 3. Let values be a new empty List.
	var values = [];
	// 4. Let next be true.
	var next = true;
	// 5. Repeat, while next is not false,
	while (next !== false) {
		// 5.a. Set next to ? IteratorStep(iteratorRecord).
		next = IteratorStep(iteratorRecord);
		// 5.b. If next is not false, then
		if (next !== false) {
			// 5.b.i. Let nextValue be ? IteratorValue(next).
			var nextValue = IteratorValue(next);
			// 5.b.ii. Append nextValue to the end of the List values.
			values.push(nextValue);
		}
	}
	// 6. Return values.
	return values;
}
if (!("AggregateError"in self
)) {

// AggregateError
/* global CreateDataPropertyOrThrow, IterableToList */
(function () {
	function AggregateError (errors, message) {
		var temp = typeof message === 'undefined' ? new Error() : new Error(message);

		CreateDataPropertyOrThrow(this, 'name', 'AggregateError');
		CreateDataPropertyOrThrow(this, 'message', temp.message);
		CreateDataPropertyOrThrow(this, 'stack', temp.stack);

		var errorsList;
		if (Array.isArray(errors)) {
			errorsList = errors.slice();
		} else {
			try {
				errorsList = IterableToList(errors);
			} catch (_error) {
				throw new TypeError('Argument is not iterable');
			}
		}

		CreateDataPropertyOrThrow(this, 'errors', errorsList);
	}

	AggregateError.prototype = Object.create(Error.prototype);
	AggregateError.prototype.constructor = AggregateError;

	self.AggregateError = AggregateError;
})();

}

if (!("Symbol"in self&&"match"in self.Symbol
)) {

// Symbol.match
/* global Symbol */
Object.defineProperty(Symbol, 'match', { value: Symbol('match') });

}

if (!("Symbol"in self&&"matchAll"in self.Symbol
)) {

// Symbol.matchAll
/* global Symbol */

// 20.4.2.8 Symbol.matchAll
Object.defineProperty(Symbol, 'matchAll', { value: Symbol('matchAll') });

}

if (!("Symbol"in self&&"replace"in self.Symbol
)) {

// Symbol.replace
/* global Symbol */
Object.defineProperty(Symbol, 'replace', { value: Symbol('replace') });

}

if (!("replaceAll"in String.prototype
)) {

// String.prototype.replaceAll
/* global CreateMethodProperty, RequireObjectCoercible, ToString, IsRegExp, Get, GetMethod, Call, IsCallable, StringIndexOf, GetSubstitution */

// 21.1.3.18 String.prototype.replaceAll ( searchValue, replaceValue )
CreateMethodProperty(String.prototype, 'replaceAll', function replaceAll(searchValue, replaceValue ) {
	'use strict';
	// 1. Let O be ? RequireObjectCoercible(this value).
	var O = RequireObjectCoercible(this);
	// 2. If searchValue is neither undefined nor null, then
	if (searchValue !== undefined && searchValue !== null) {
		// 2.a. Let isRegExp be ? IsRegExp(searchValue).
		var isRegExp = IsRegExp(searchValue);
		// 2.b. If isRegExp is true, then
		if (isRegExp) {
			// 2.b.i. Let flags be ? Get(searchValue, "flags").
			var flags = Get(searchValue, "flags");

			// IE8 doesn't have RegExp.prototype.flags support, it does have RegExp.prototype.global
			// 2.b.iii. If ? ToString(flags) does not contain "g", throw a TypeError exception.
			if (!('flags' in RegExp.prototype) && searchValue.global !== true) {
				throw TypeError('');
			} else if ('flags' in RegExp.prototype) {
				// 2.b.ii. Perform ? RequireObjectCoercible(flags).
				RequireObjectCoercible(flags)
				// 2.b.iii. If ? ToString(flags) does not contain "g", throw a TypeError exception.
				if (ToString(flags).indexOf('g') === -1) {
					throw TypeError('');
				}
			}
		}
		// 2.c. Let replacer be ? GetMethod(searchValue, @@replace).
		var replacer = 'Symbol' in self && 'replace' in self.Symbol ? GetMethod(searchValue, self.Symbol.replace) : undefined;
		// 2.d. If replacer is not undefined, then
		if (replacer !== undefined) {
			// 2.d.i. Return ? Call(replacer, searchValue, « O, replaceValue »).
			return Call(replacer, searchValue, [ O, replaceValue ]);
		}
	}
	// 3. Let string be ? ToString(O).
	var string = ToString(O);
	// 4. Let searchString be ? ToString(searchValue).
	var searchString = ToString(searchValue);

	// 5. Let functionalReplace be IsCallable(replaceValue).
	var functionalReplace = IsCallable(replaceValue);
	// 6. If functionalReplace is false, then
	if (functionalReplace === false) {
		// 6.a. Set replaceValue to ? ToString(replaceValue).
		replaceValue = ToString(replaceValue);
	}

	// 7. Let searchLength be the length of searchString.
	var searchLength = searchString.length;
	// 8. Let advanceBy be max(1, searchLength).
	var advanceBy = Math.max(1, searchLength);
	// 9. Let matchPositions be a new empty List.
	var matchPositions = [];
	// 10. Let position be ! StringIndexOf(string, searchString, 0).
	var position = StringIndexOf(string, searchString, 0);
	// 11. Repeat, while position is not -1,
	while (position !== -1) {
		// 11.a. Append position to the end of matchPositions.
		matchPositions.push(position);
		// 11.b. Set position to ! StringIndexOf(string, searchString, position + advanceBy).
		position = StringIndexOf(string, searchString, position + advanceBy);
	}

	// 12. Let endOfLastMatch be 0.
	var endOfLastMatch = 0;
	// 13. Let result be the empty String.
	var result = '';
	// 14. For each element position of matchPositions, do
	for (var i = 0; i < matchPositions.length; i++) {
		// 14.a. Let preserved be the substring of string from endOfLastMatch to position.
		var preserved = string.substring(endOfLastMatch, matchPositions[i]);
		// 14.b. If functionalReplace is true, then
		if (functionalReplace) {
			// 14.b.i. Let replacement be ? ToString(? Call(replaceValue, undefined, « searchString, position, string »)).
			var replacement = ToString(Call(replaceValue, undefined, [searchString, matchPositions[i], string]));
			// 14.c. Else,
		} else {
			// 14.c.i. Assert: Type(replaceValue) is String.
			// 14.c.ii. Let captures be a new empty List.
			var captures = [];
			// 14.c.iii. Let replacement be ! GetSubstitution(searchString, string, position, captures, undefined, replaceValue).
			replacement = GetSubstitution(searchString, string, matchPositions[i], captures, undefined, replaceValue);
		}
		// 14.d. Set result to the string-concatenation of result, preserved, and replacement.
		result = result + preserved + replacement;
		// 14.e. Set endOfLastMatch to position + searchLength.
		endOfLastMatch = matchPositions[i] + searchLength;
	}
	// 15. If endOfLastMatch < the length of string, then
	if (endOfLastMatch < string.length) {
		// 15.a. Set result to the string-concatenation of result and the substring of string from endOfLastMatch.
		result = result + string.substring(endOfLastMatch);
	}
	// 16. Return result.
	return result;
});

}

if (!("Symbol"in self&&"search"in self.Symbol
)) {

// Symbol.search
/* global Symbol */
Object.defineProperty(Symbol, 'search', { value: Symbol('search') });

}

if (!("Symbol"in self&&"species"in self.Symbol
)) {

// Symbol.species
/* global Symbol */
Object.defineProperty(Symbol, 'species', { value: Symbol('species') });

}

if (!("Map"in self&&function(t){try{var n=new t.Map([[1,1],[2,2]])
return 0===t.Map.length&&2===n.size&&"Symbol"in t&&"iterator"in t.Symbol&&"function"==typeof n[t.Symbol.iterator]}catch(e){return!1}}(self)
)) {

// Map
/* global CreateIterResultObject, CreateMethodProperty, GetIterator, IsCallable, IteratorClose, IteratorStep, IteratorValue, OrdinaryCreateFromConstructor, SameValueZero, Type, Symbol */
(function (global) {
	var supportsGetters = (function () {
		try {
			var a = {};
			Object.defineProperty(a, 't', {
				configurable: true,
				enumerable: false,
				get: function () {
					return true;
				},
				set: undefined
			});
			return !!a.t;
		} catch (e) {
			return false;
		}
	}());

	// Need an internal counter to assign unique IDs to a key map
	var _uniqueHashId = 0;
	// Create a unique key name for storing meta data on functions and objects to enable lookups in hash table
	var _metaKey = Symbol('meta_' + ((Math.random() * 100000000) + '').replace('.', ''));

	/**
	 * hashKey()
	 * Function that given a key of `any` type, returns a string key value to enable hash map optimization for accessing Map data structure
	 * @param {string|integer|function|object} recordKey - Record key to normalize to string accessor for hash map
	 * @returns {string|false} - Returns a hashed string value or false if non extensible object key
	 */
	var hashKey = function(recordKey) {
		// Check to see if we are dealing with object or function type.
		if (typeof recordKey === 'object' ? recordKey !== null : typeof recordKey === 'function') {
			// Check to see if we are dealing with a non extensible object
			if (!Object.isExtensible(recordKey)) {
				// Return `false`
				return false;
			}
			if (!Object.prototype.hasOwnProperty.call(recordKey, _metaKey)) {
				var uniqueHashKey = typeof(recordKey)+'-'+(++_uniqueHashId);
				Object.defineProperty(recordKey, _metaKey, {
					configurable: false,
					enumerable: false,
					writable: false,
					value: uniqueHashKey
				});
			}
			// Return previously defined hashed key
			return recordKey[_metaKey];
		}
		// If this is just a primitive, we can cast it to a string and return it
		return ''+recordKey;
	};

	/**
	 * getRecordIndex()
	 * Function that given a Map and a key of `any` type, returns an index number that coorelates with a record found in `this._keys[index]` and `this._values[index]`
	 * @param {Map} map - Map structure
	 * @param {string|number|function|object} recordKey - Record key to normalize to string accessor for hash map
	 * @returns {number|false} - Returns either a index to access map._keys and map._values, or false if not found
	 */
	var getRecordIndex = function(map, recordKey) {
		var hashedKey = hashKey(recordKey); // Casts key to unique string (unless already string or number)
		if (hashedKey === false) {
			// We have to iterate through our Map structure because `recordKey` is non-primitive and not extensible
			return getRecordIndexSlow(map, recordKey);
		}
		var recordIndex = map._table[hashedKey]; // O(1) access to record
		return recordIndex !== undefined ? recordIndex : false;
	};

	/**
	 * getRecordIndexSlow()
	 * Alternative (and slower) function to `getRecordIndex()`.  Necessary for looking up non-extensible object keys.
	 * @param {Map} map - Map structure
	 * @param {string|number|function|object} recordKey - Record key to normalize to string accessor for hash map
	 * @returns {number|false} - Returns either a index to access map._keys and map._values, or false if not found
	 */
	var getRecordIndexSlow = function(map, recordKey) {
		// We have to iterate through our Map structure because `recordKey` is non-primitive and not extensible
		for (var i = 0; i < map._keys.length; i++) {
			var _recordKey = map._keys[i];
			if (_recordKey !== undefMarker && SameValueZero(_recordKey, recordKey)) {
				return i;
			}
		}
		return false;
	};

	/**
	 * setHashIndex()
	 * Function that given a map, key of `any` type, and a value, creates a new entry in Map hash table
	 * @param {Map} map
	 * @param {string|number|function|object} recordKey - Key to translate into normalized key for hash map
	 * @param {number|bool} recordIndex - new record index for the hashedKey or `false` to delete the record index for the hashedKey
	 * @returns {bool} - indicates success of operation
	 */
	var setHashIndex = function(map, recordKey, recordIndex) {
		var hashedKey = hashKey(recordKey);
		if (hashedKey === false) {
			// If hashed key is false, the recordKey is an object which is not extensible.
			// That indicates we cannot use the hash map for it, so this operation becomes no-op.
			return false;
		}
		if (recordIndex === false) {
			delete map._table[hashedKey];
		} else {
			map._table[hashedKey] = recordIndex;
		}
		return true;
	};

	// Deleted map items mess with iterator pointers, so rather than removing them mark them as deleted. Can't use undefined or null since those both valid keys so use a private symbol.
	var undefMarker = Symbol('undef');
	// 23.1.1.1 Map ( [ iterable ] )
	var Map = function Map(/* iterable */) {
		// 1. If NewTarget is undefined, throw a TypeError exception.
		if (!(this instanceof Map)) {
			throw new TypeError('Constructor Map requires "new"');
		}
		// 2. Let map be ? OrdinaryCreateFromConstructor(NewTarget, "%MapPrototype%", « [[MapData]] »).
		var map = OrdinaryCreateFromConstructor(this, Map.prototype, {
			_table: {}, // O(1) access table for retrieving records
			_keys: [],
			_values: [],
			_size: 0,
			_es6Map: true
		});

		// 3. Set map.[[MapData]] to a new empty List.
		// Polyfill.io - This step was done as part of step two.

		// Some old engines do not support ES5 getters/setters.  Since Map only requires these for the size property, we can fall back to setting the size property statically each time the size of the map changes.
		if (!supportsGetters) {
			Object.defineProperty(map, 'size', {
				configurable: true,
				enumerable: false,
				writable: true,
				value: 0
			});
		}

		// 4. If iterable is not present, let iterable be undefined.
		var iterable = arguments.length > 0 ? arguments[0] : undefined;

		// 5. If iterable is either undefined or null, return map.
		if (iterable === null || iterable === undefined) {
			return map;
		}

		// 6. Let adder be ? Get(map, "set").
		var adder = map.set;

		// 7. If IsCallable(adder) is false, throw a TypeError exception.
		if (!IsCallable(adder)) {
			throw new TypeError("Map.prototype.set is not a function");
		}

		// 8. Let iteratorRecord be ? GetIterator(iterable).
		try {
			var iteratorRecord = GetIterator(iterable);
			// 9. Repeat,
			// eslint-disable-next-line no-constant-condition
			while (true) {
				// a. Let next be ? IteratorStep(iteratorRecord).
				var next = IteratorStep(iteratorRecord);
				// b. If next is false, return map.
				if (next === false) {
					return map;
				}
				// c. Let nextItem be ? IteratorValue(next).
				var nextItem = IteratorValue(next);
				// d. If Type(nextItem) is not Object, then
				if (Type(nextItem) !== 'object') {
					// i. Let error be Completion{[[Type]]: throw, [[Value]]: a newly created TypeError object, [[Target]]: empty}.
					try {
						throw new TypeError('Iterator value ' + nextItem + ' is not an entry object');
					} catch (error) {
						// ii. Return ? IteratorClose(iteratorRecord, error).
						return IteratorClose(iteratorRecord, error);
					}
				}
				try {
					// Polyfill.io - The try catch accounts for steps: f, h, and j.

					// e. Let k be Get(nextItem, "0").
					var k = nextItem[0];
					// f. If k is an abrupt completion, return ? IteratorClose(iteratorRecord, k).
					// g. Let v be Get(nextItem, "1").
					var v = nextItem[1];
					// h. If v is an abrupt completion, return ? IteratorClose(iteratorRecord, v).
					// i. Let status be Call(adder, map, « k.[[Value]], v.[[Value]] »).
					adder.call(map, k, v);
				} catch (e) {
					// j. If status is an abrupt completion, return ? IteratorClose(iteratorRecord, status).
					return IteratorClose(iteratorRecord, e);
				}
			}
		} catch (e) {
			// Polyfill.io - For user agents which do not have iteration methods on argument objects or arrays, we can special case those.
			if (Array.isArray(iterable) ||
				Object.prototype.toString.call(iterable) === '[object Arguments]' ||
				// IE 7 & IE 8 return '[object Object]' for the arguments object, we can detect by checking for the existence of the callee property
				(!!iterable.callee)) {
				var index;
				var length = iterable.length;
				for (index = 0; index < length; index++) {
					adder.call(map, iterable[index][0], iterable[index][1]);
				}
			}
		}
		return map;
	};

	// 23.1.2.1. Map.prototype
	// The initial value of Map.prototype is the intrinsic object %MapPrototype%.
	// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
	Object.defineProperty(Map, 'prototype', {
		configurable: false,
		enumerable: false,
		writable: false,
		value: {}
	});

	// 23.1.2.2 get Map [ @@species ]
	if (supportsGetters) {
		Object.defineProperty(Map, Symbol.species, {
			configurable: true,
			enumerable: false,
			get: function () {
				// 1. Return the this value.
				return this;
			},
			set: undefined
		});
	} else {
		CreateMethodProperty(Map, Symbol.species, Map);
	}

	// 23.1.3.1 Map.prototype.clear ( )
	CreateMethodProperty(Map.prototype, 'clear', function clear() {
			// 1. Let M be the this value.
			var M = this;
			// 2. If Type(M) is not Object, throw a TypeError exception.
			if (Type(M) !== 'object') {
				throw new TypeError('Method Map.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
			}
			// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
			if (M._es6Map !== true) {
				throw new TypeError('Method Map.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
			}
			// 4. Let entries be the List that is M.[[MapData]].
			var entries = M._keys;
			// 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
			for (var i = 0; i < entries.length; i++) {
				// 5.a. Set p.[[Key]] to empty.
				M._keys[i] = undefMarker;
				// 5.b. Set p.[[Value]] to empty.
				M._values[i] = undefMarker;
			}
			this._size = 0;
			if (!supportsGetters) {
				this.size = this._size;
			}
			// 5a. Clear lookup table
			this._table = {};
			// 6. Return undefined.
			return undefined;
		}
	);

	// 23.1.3.2. Map.prototype.constructor
	CreateMethodProperty(Map.prototype, 'constructor', Map);

	// 23.1.3.3. Map.prototype.delete ( key )
	CreateMethodProperty(Map.prototype, 'delete', function (key) {
			// 1. Let M be the this value.
			var M = this;
			// 2. If Type(M) is not Object, throw a TypeError exception.
			if (Type(M) !== 'object') {
				throw new TypeError('Method Map.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
			}
			// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
			if (M._es6Map !== true) {
				throw new TypeError('Method Map.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
			}
			// 4. Let entries be the List that is M.[[MapData]].
			// 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
				// 5a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, then
					// i. Set p.[[Key]] to empty.
					// ii. Set p.[[Value]] to empty.
					// ii-a. Remove key from lookup table
					// iii. Return true.
			// 6. Return false.

			// Implement steps 4-6 with a more optimal algo

			// Steps 4-5: Access record
			var recordIndex = getRecordIndex(M, key); // O(1) access to record index

			if (recordIndex !== false) {
				// Get record's `key` (could be `any` type);
				var recordKey = M._keys[recordIndex];
				// 5a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, then
				if (recordKey !== undefMarker && SameValueZero(recordKey, key)) {
					// i. Set p.[[Key]] to empty.
					this._keys[recordIndex] = undefMarker;
					// ii. Set p.[[Value]] to empty.
					this._values[recordIndex] = undefMarker;
					this._size = --this._size;
					if (!supportsGetters) {
						this.size = this._size;
					}
					// iia. Remove key from lookup table
					setHashIndex(this, key, false);
					// iii. Return true.
					return true;
				}
			}

			// 6. Return false.
			return false;
		}
	);

	// 23.1.3.4. Map.prototype.entries ( )
	CreateMethodProperty(Map.prototype, 'entries', function entries () {
			// 1. Let M be the this value.
			var M = this;
			// 2. Return ? CreateMapIterator(M, "key+value").
			return CreateMapIterator(M, 'key+value');
		}
	);

	// 23.1.3.5. Map.prototype.forEach ( callbackfn [ , thisArg ] )
	CreateMethodProperty(Map.prototype, 'forEach', function (callbackFn) {
			// 1. Let M be the this value.
			var M = this;
			// 2. If Type(M) is not Object, throw a TypeError exception.
			if (Type(M) !== 'object') {
				throw new TypeError('Method Map.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(M));
			}
			// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
			if (M._es6Map !== true) {
				throw new TypeError('Method Map.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(M));
			}
			// 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
			if (!IsCallable(callbackFn)) {
				throw new TypeError(Object.prototype.toString.call(callbackFn) + ' is not a function.');
			}
			// 5. If thisArg is present, let T be thisArg; else let T be undefined.
			if (arguments[1]) {
				var T = arguments[1];
			}
			// 6. Let entries be the List that is M.[[MapData]].
			var entries = M._keys;
			// 7. For each Record {[[Key]], [[Value]]} e that is an element of entries, in original key insertion order, do
			for (var i = 0; i < entries.length; i++) {
				// a. If e.[[Key]] is not empty, then
				if (M._keys[i] !== undefMarker && M._values[i] !== undefMarker ) {
					// i. Perform ? Call(callbackfn, T, « e.[[Value]], e.[[Key]], M »).
					callbackFn.call(T, M._values[i], M._keys[i], M);
				}
			}
			// 8. Return undefined.
			return undefined;
		}
	);

	// 23.1.3.6. Map.prototype.get ( key )
	CreateMethodProperty(Map.prototype, 'get', function get(key) {
			// 1. Let M be the this value.
			var M = this;
			// 2. If Type(M) is not Object, throw a TypeError exception.
			if (Type(M) !== 'object') {
				throw new TypeError('Method Map.prototype.get called on incompatible receiver ' + Object.prototype.toString.call(M));
			}
			// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
			if (M._es6Map !== true) {
				throw new TypeError('Method Map.prototype.get called on incompatible receiver ' + Object.prototype.toString.call(M));
			}
			// 4. Let entries be the List that is M.[[MapData]].
			// 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
				// a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, return p.[[Value]].
			// 6. Return undefined.

			// Implement steps 4-6 with a more optimal algo
			var recordIndex = getRecordIndex(M, key); // O(1) access to record index
			if (recordIndex !== false) {
				var recordKey = M._keys[recordIndex];
				if (recordKey !== undefMarker && SameValueZero(recordKey, key)) {
					return M._values[recordIndex];
				}
			}

			return undefined;
		});

	// 23.1.3.7. Map.prototype.has ( key )
	CreateMethodProperty(Map.prototype, 'has', function has (key) {
			// 1. Let M be the this value.
			var M = this;
			// 2. If Type(M) is not Object, throw a TypeError exception.
			if (typeof M !== 'object') {
				throw new TypeError('Method Map.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(M));
			}
			// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
			if (M._es6Map !== true) {
				throw new TypeError('Method Map.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(M));
			}
			// 4. Let entries be the List that is M.[[MapData]].
			// 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
				// a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, return true.
			// 6. Return false.

			// Implement steps 4-6 with a more optimal algo
			var recordIndex = getRecordIndex(M, key); // O(1) access to record index
			if (recordIndex !== false) {
				var recordKey = M._keys[recordIndex];
				if (recordKey !== undefMarker && SameValueZero(recordKey, key)) {
					return true;
				}
			}

			return false;
		});

	// 23.1.3.8. Map.prototype.keys ( )
	CreateMethodProperty(Map.prototype, 'keys', function keys () {
			// 1. Let M be the this value.
			var M = this;
			// 2. Return ? CreateMapIterator(M, "key").
			return CreateMapIterator(M, "key");
		});

	// 23.1.3.9. Map.prototype.set ( key, value )
	CreateMethodProperty(Map.prototype, 'set', function set(key, value) {
			// 1. Let M be the this value.
			var M = this;
			// 2. If Type(M) is not Object, throw a TypeError exception.
			if (Type(M) !== 'object') {
				throw new TypeError('Method Map.prototype.set called on incompatible receiver ' + Object.prototype.toString.call(M));
			}
			// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
			if (M._es6Map !== true) {
				throw new TypeError('Method Map.prototype.set called on incompatible receiver ' + Object.prototype.toString.call(M));
			}
			// 4. Let entries be the List that is M.[[MapData]].
			// 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
			// 6. If key is -0, let key be +0.
			// 7. Let p be the Record {[[Key]]: key, [[Value]]: value}.
			// 8. Append p as the last element of entries.
			// 9. Return M.

			// Strictly following the above steps 4-9 will lead to an inefficient algorithm.
			// Step 8 also doesn't seem to be required if an entry already exists
			var recordIndex = getRecordIndex(M, key); // O(1) access to record index
			if (recordIndex !== false) {
				// update path
				M._values[recordIndex] = value;
			} else {
				// eslint-disable-next-line no-compare-neg-zero
				if (key === -0) {
					key = 0;
				}
				var p = {
					'[[Key]]': key,
					'[[Value]]': value
				};
				M._keys.push(p['[[Key]]']);
				M._values.push(p['[[Value]]']);
				setHashIndex(M, key, M._keys.length - 1); // update lookup table
				++M._size;
				if (!supportsGetters) {
					M.size = M._size;
				}
			}
			return M;
		});

	// 23.1.3.10. get Map.prototype.size
	if (supportsGetters) {
		Object.defineProperty(Map.prototype, 'size', {
			configurable: true,
			enumerable: false,
			get: function () {
				// 1. Let M be the this value.
				var M = this;
				// 2. If Type(M) is not Object, throw a TypeError exception.
				if (Type(M) !== 'object') {
					throw new TypeError('Method Map.prototype.size called on incompatible receiver ' + Object.prototype.toString.call(M));
				}
				// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
				if (M._es6Map !== true) {
					throw new TypeError('Method Map.prototype.size called on incompatible receiver ' + Object.prototype.toString.call(M));
				}
				// 4. Let entries be the List that is M.[[MapData]].
				// 5. Let count be 0.
				// 6. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
					// 6a. If p.[[Key]] is not empty, set count to count+1.
				// 7. Return count.

				// Implement 4-7 more efficently by returning pre-computed property
				return this._size;
			},
			set: undefined
		});
	}

	// 23.1.3.11. Map.prototype.values ( )
	CreateMethodProperty(Map.prototype, 'values', function values () {
			// 1. Let M be the this value.
			var M = this;
			// 2. Return ? CreateMapIterator(M, "value").
			return CreateMapIterator(M, 'value');
		}
	);

	// 23.1.3.12. Map.prototype [ @@iterator ] ( )
	// The initial value of the @@iterator property is the same function object as the initial value of the entries property.
	CreateMethodProperty(Map.prototype, Symbol.iterator, Map.prototype.entries);

	// 23.1.3.13. Map.prototype [ @@toStringTag ]
	// The initial value of the @@toStringTag property is the String value "Map".
	// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.

	// Polyfill.io - Safari 8 implements Map.name but as a non-configurable property, which means it would throw an error if we try and configure it here.
	if (!('name' in Map)) {
		// 19.2.4.2 name
		Object.defineProperty(Map, 'name', {
			configurable: true,
			enumerable: false,
			writable: false,
			value: 'Map'
		});
	}

	// 23.1.5.1. CreateMapIterator ( map, kind )
	function CreateMapIterator(map, kind) {
		// 1. If Type(map) is not Object, throw a TypeError exception.
		if (Type(map) !== 'object') {
			throw new TypeError('createMapIterator called on incompatible receiver ' + Object.prototype.toString.call(map));
		}
		// 2. If map does not have a [[MapData]] internal slot, throw a TypeError exception.
		if (map._es6Map !== true) {
			throw new TypeError('createMapIterator called on incompatible receiver ' + Object.prototype.toString.call(map));
		}
		// 3. Let iterator be ObjectCreate(%MapIteratorPrototype%, « [[Map]], [[MapNextIndex]], [[MapIterationKind]] »).
		var iterator = Object.create(MapIteratorPrototype);
		// 4. Set iterator.[[Map]] to map.
		Object.defineProperty(iterator, '[[Map]]', {
			configurable: true,
			enumerable: false,
			writable: true,
			value: map
		});
		// 5. Set iterator.[[MapNextIndex]] to 0.
		Object.defineProperty(iterator, '[[MapNextIndex]]', {
			configurable: true,
			enumerable: false,
			writable: true,
			value: 0
		});
		// 6. Set iterator.[[MapIterationKind]] to kind.
		Object.defineProperty(iterator, '[[MapIterationKind]]', {
			configurable: true,
			enumerable: false,
			writable: true,
			value: kind
		});
		// 7. Return iterator.
		return iterator;
	}

	// 23.1.5.2. The %MapIteratorPrototype% Object
	var MapIteratorPrototype = {};
	// Polyfill.io - We use this as a quick way to check if an object is a Map Iterator instance.
	Object.defineProperty(MapIteratorPrototype, 'isMapIterator', {
		configurable: false,
		enumerable: false,
		writable: false,
		value: true
	});

	// 23.1.5.2.1. %MapIteratorPrototype%.next ( )
	CreateMethodProperty(MapIteratorPrototype, 'next', function next() {
			// 1. Let O be the this value.
			var O = this;
			// 2. If Type(O) is not Object, throw a TypeError exception.
			if (Type(O) !== 'object') {
				throw new TypeError('Method %MapIteratorPrototype%.next called on incompatible receiver ' + Object.prototype.toString.call(O));
			}
			// 3. If O does not have all of the internal slots of a Map Iterator Instance (23.1.5.3), throw a TypeError exception.
			if (!O.isMapIterator) {
				throw new TypeError('Method %MapIteratorPrototype%.next called on incompatible receiver ' + Object.prototype.toString.call(O));
			}
			// 4. Let m be O.[[Map]].
			var m = O['[[Map]]'];
			// 5. Let index be O.[[MapNextIndex]].
			var index = O['[[MapNextIndex]]'];
			// 6. Let itemKind be O.[[MapIterationKind]].
			var itemKind = O['[[MapIterationKind]]'];
			// 7. If m is undefined, return CreateIterResultObject(undefined, true).
			if (m === undefined) {
				return CreateIterResultObject(undefined, true);
			}
			// 8. Assert: m has a [[MapData]] internal slot.
			if (!m._es6Map) {
				throw new Error(Object.prototype.toString.call(m) + ' has a [[MapData]] internal slot.');
			}
			// 9. Let entries be the List that is m.[[MapData]].
			var entries = m._keys;
			// 10. Let numEntries be the number of elements of entries.
			var numEntries = entries.length;
			// 11. NOTE: numEntries must be redetermined each time this method is evaluated.
			// 12. Repeat, while index is less than numEntries,
			while (index < numEntries) {
				// a. Let e be the Record {[[Key]], [[Value]]} that is the value of entries[index].
				var e = Object.create(null);
				e['[[Key]]'] = m._keys[index];
				e['[[Value]]'] = m._values[index];
				// b. Set index to index+1.
				index = index + 1;
				// c. Set O.[[MapNextIndex]] to index.
				O['[[MapNextIndex]]'] = index;
				// d. If e.[[Key]] is not empty, then
				if (e['[[Key]]'] !== undefMarker) {
					// i. If itemKind is "key", let result be e.[[Key]].
					if (itemKind === 'key') {
						var result = e['[[Key]]'];
						// ii. Else if itemKind is "value", let result be e.[[Value]].
					} else if (itemKind === 'value') {
						result = e['[[Value]]'];
						// iii. Else,
					} else {
						// 1. Assert: itemKind is "key+value".
						if (itemKind !== 'key+value') {
							throw new Error();
						}
						// 2. Let result be CreateArrayFromList(« e.[[Key]], e.[[Value]] »).
						result = [
							e['[[Key]]'],
							e['[[Value]]']
						];
					}
					// iv. Return CreateIterResultObject(result, false).
					return CreateIterResultObject(result, false);
				}
			}
			// 13. Set O.[[Map]] to undefined.
			O['[[Map]]'] = undefined;
			// 14. Return CreateIterResultObject(undefined, true).
			return CreateIterResultObject(undefined, true);
		}
	);

	// 23.1.5.2.2 %MapIteratorPrototype% [ @@toStringTag ]
	// The initial value of the @@toStringTag property is the String value "Map Iterator".
	// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.

	CreateMethodProperty(MapIteratorPrototype, Symbol.iterator, function iterator() {
			return this;
		}
	);

	// Export the object
	try {
		CreateMethodProperty(global, 'Map', Map);
	} catch (e) {
		// IE8 throws an error here if we set enumerable to false.
		// More info on table 2: https://msdn.microsoft.com/en-us/library/dd229916(v=vs.85).aspx
		global.Map = Map;
	}
}(self));

}

if (!("Set"in self&&function(){try{var e=new self.Set([1,2])
return 0===self.Set.length&&2===e.size&&"Symbol"in self&&"iterator"in self.Symbol&&"function"==typeof e[self.Symbol.iterator]}catch(t){return!1}}()
)) {

// Set
/* global CreateIterResultObject, CreateMethodProperty, GetIterator, IsCallable, IteratorClose, IteratorStep, IteratorValue, OrdinaryCreateFromConstructor, SameValueZero, Symbol */
(function (global) {
	var supportsGetters = (function () {
		try {
			var a = {};
			Object.defineProperty(a, 't', {
				configurable: true,
				enumerable: false,
				get: function () {
					return true;
				},
				set: undefined
			});
			return !!a.t;
		} catch (e) {
			return false;
		}
	}());

	// Deleted set items mess with iterator pointers, so rather than removing them mark them as deleted. Can't use undefined or null since those both valid keys so use a private symbol.
	var undefMarker = Symbol('undef');
	// 23.2.1.1. Set ( [ iterable ] )
	var Set = function Set(/* iterable */) {
		// 1. If NewTarget is undefined, throw a TypeError exception.
		if (!(this instanceof Set)) {
			throw new TypeError('Constructor Set requires "new"');
		}
		// 2. Let set be ? OrdinaryCreateFromConstructor(NewTarget, "%SetPrototype%", « [[SetData]] »).
		var set = OrdinaryCreateFromConstructor(this, Set.prototype, {
			_values: [],
			_size: 0,
			_es6Set: true
		});

		// 3. Set set.[[SetData]] to a new empty List.
		// Polyfill.io - This step was done as part of step two.

		// Some old engines do not support ES5 getters/setters.  Since Set only requires these for the size property, we can fall back to setting the size property statically each time the size of the set changes.
		if (!supportsGetters) {
			Object.defineProperty(set, 'size', {
				configurable: true,
				enumerable: false,
				writable: true,
				value: 0
			});
		}

		// 4. If iterable is not present, let iterable be undefined.
		var iterable = arguments.length > 0 ? arguments[0] : undefined;

		// 5. If iterable is either undefined or null, return set.
		if (iterable === null || iterable === undefined) {
			return set;
		}

		// 6. Let adder be ? Get(set, "add").
		var adder = set.add;
		// 7. If IsCallable(adder) is false, throw a TypeError exception.
		if (!IsCallable(adder)) {
			throw new TypeError("Set.prototype.add is not a function");
		}

		try {
			// 8. Let iteratorRecord be ? GetIterator(iterable).
			var iteratorRecord = GetIterator(iterable);
			// 9. Repeat,
			// eslint-disable-next-line no-constant-condition
			while (true) {
				// a. Let next be ? IteratorStep(iteratorRecord).
				var next = IteratorStep(iteratorRecord);
				// b. If next is false, return set.
				if (next === false) {
					return set;
				}
				// c. Let nextValue be ? IteratorValue(next).
				var nextValue = IteratorValue(next);
				// d. Let status be Call(adder, set, « nextValue.[[Value]] »).
				try {
					adder.call(set, nextValue);
				} catch (e) {
					// e. If status is an abrupt completion, return ? IteratorClose(iteratorRecord, status).
					return IteratorClose(iteratorRecord, e);
				}
			}
		} catch (e) {
			// Polyfill.io - For user agents which do not have iteration methods on argument objects or arrays, we can special case those.
			if (Array.isArray(iterable) ||
				Object.prototype.toString.call(iterable) === '[object Arguments]' ||
				// IE 7 & IE 8 return '[object Object]' for the arguments object, we can detect by checking for the existence of the callee property
				(!!iterable.callee)) {
				var index;
				var length = iterable.length;
				for (index = 0; index < length; index++) {
					adder.call(set, iterable[index]);
				}
			} else {
				throw (e);
			}
		}
		return set;
	};

	// 23.2.2.1. Set.prototype
	// The initial value of Set.prototype is the intrinsic %SetPrototype% object.
	// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
	Object.defineProperty(Set, 'prototype', {
		configurable: false,
		enumerable: false,
		writable: false,
		value: {}
	});

	// 23.2.2.2 get Set [ @@species ]
	if (supportsGetters) {
		Object.defineProperty(Set, Symbol.species, {
			configurable: true,
			enumerable: false,
			get: function () {
				// 1. Return the this value.
				return this;
			},
			set: undefined
		});
	} else {
		CreateMethodProperty(Set, Symbol.species, Set);
	}

	// 23.2.3.1. Set.prototype.add ( value )
	CreateMethodProperty(Set.prototype, 'add', function add(value) {
			// 1. Let S be the this value.
			var S = this;
			// 2. If Type(S) is not Object, throw a TypeError exception.
			if (typeof S !== 'object') {
				throw new TypeError('Method Set.prototype.add called on incompatible receiver ' + Object.prototype.toString.call(S));
			}
			// 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
			if (S._es6Set !== true) {
				throw new TypeError('Method Set.prototype.add called on incompatible receiver ' + Object.prototype.toString.call(S));
			}
			// 4. Let entries be the List that is S.[[SetData]].
			var entries = S._values;
			// 5. For each e that is an element of entries, do
			for (var i = 0; i < entries.length; i++) {
				var e = entries[i];
				// a. If e is not empty and SameValueZero(e, value) is true, then
				if (e !== undefMarker && SameValueZero(e, value)) {
					// i. Return S.
					return S;
				}
			}
			// 6. If value is -0, let value be +0.
			if (value === 0 && 1/value === -Infinity) {
				value = 0;
			}
			// 7. Append value as the last element of entries.
			S._values.push(value);

			this._size = ++this._size;
			if (!supportsGetters) {
				this.size = this._size;
			}
			// 8. Return S.
			return S;
		});

	// 23.2.3.2. Set.prototype.clear ( )
	CreateMethodProperty(Set.prototype, 'clear', function clear() {
			// 1. Let S be the this value.
			var S = this;
			// 2. If Type(S) is not Object, throw a TypeError exception.
			if (typeof S !== 'object') {
				throw new TypeError('Method Set.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(S));
			}
			// 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
			if (S._es6Set !== true) {
				throw new TypeError('Method Set.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(S));
			}
			// 4. Let entries be the List that is S.[[SetData]].
			var entries = S._values;
			// 5. For each e that is an element of entries, do
			for (var i = 0; i < entries.length; i++) {
				// a. Replace the element of entries whose value is e with an element whose value is empty.
				entries[i] = undefMarker;
			}
			this._size = 0;
			if (!supportsGetters) {
				this.size = this._size;
			}
			// 6. Return undefined.
			return undefined;
		});

	// 23.2.3.3. Set.prototype.constructor
	CreateMethodProperty(Set.prototype, 'constructor', Set);

	// 23.2.3.4. Set.prototype.delete ( value )
	CreateMethodProperty(Set.prototype, 'delete', function (value) {
			// 1. Let S be the this value.
			var S = this;
			// 2. If Type(S) is not Object, throw a TypeError exception.
			if (typeof S !== 'object') {
				throw new TypeError('Method Set.prototype.delete called on incompatible receiver ' + Object.prototype.toString.call(S));
			}
			// 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
			if (S._es6Set !== true) {
				throw new TypeError('Method Set.prototype.delete called on incompatible receiver ' + Object.prototype.toString.call(S));
			}
			// 4. Let entries be the List that is S.[[SetData]].
			var entries = S._values;
			// 5. For each e that is an element of entries, do
			for (var i = 0; i < entries.length; i++) {
				var e = entries[i];
				// a. If e is not empty and SameValueZero(e, value) is true, then
				if (e !== undefMarker && SameValueZero(e, value)) {
					// i. Replace the element of entries whose value is e with an element whose value is empty.
					entries[i] = undefMarker;

					this._size = --this._size;
					if (!supportsGetters) {
						this.size = this._size;
					}
					// ii. Return true.
					return true;
				}
			}
			// 6. Return false.
			return false;
		}
	);

	// 23.2.3.5. Set.prototype.entries ( )
	CreateMethodProperty(Set.prototype, 'entries', function entries() {
			// 1. Let S be the this value.
			var S = this;
			// 2. Return ? CreateSetIterator(S, "key+value").
			return CreateSetIterator(S, 'key+value');
		}
	);

	// 23.2.3.6. Set.prototype.forEach ( callbackfn [ , thisArg ] )
	CreateMethodProperty(Set.prototype, 'forEach', function forEach(callbackFn /*[ , thisArg ]*/) {
			// 1. Let S be the this value.
			var S = this;
			// 2. If Type(S) is not Object, throw a TypeError exception.
			if (typeof S !== 'object') {
				throw new TypeError('Method Set.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(S));
			}
			// 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
			if (S._es6Set !== true) {
				throw new TypeError('Method Set.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(S));
			}
			// 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
			if (!IsCallable(callbackFn)) {
				throw new TypeError(Object.prototype.toString.call(callbackFn) + ' is not a function.');
			}
			// 5. If thisArg is present, let T be thisArg; else let T be undefined.
			if (arguments[1]) {
				var T = arguments[1];
			}
			// 6. Let entries be the List that is S.[[SetData]].
			var entries = S._values;
			// 7. For each e that is an element of entries, in original insertion order, do
			for (var i = 0; i < entries.length; i++) {
				var e = entries[i];
				// a. If e is not empty, then
				if (e !== undefMarker) {
					// i. Perform ? Call(callbackfn, T, « e, e, S »).
					callbackFn.call(T, e, e, S);
				}
			}
			// 8. Return undefined.
			return undefined;
		}
	);

	// 23.2.3.7. Set.prototype.has ( value )
	CreateMethodProperty(Set.prototype, 'has', function has(value) {
			// 1. Let S be the this value.
			var S = this;
			// 2. If Type(S) is not Object, throw a TypeError exception.
			if (typeof S !== 'object') {
				throw new TypeError('Method Set.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(S));
			}
			// 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
			if (S._es6Set !== true) {
				throw new TypeError('Method Set.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(S));
			}
			// 4. Let entries be the List that is S.[[SetData]].
			var entries = S._values;
			// 5. For each e that is an element of entries, do
			for (var i = 0; i < entries.length; i++) {
				var e = entries[i];
				// a. If e is not empty and SameValueZero(e, value) is true, return true.
				if (e !== undefMarker && SameValueZero(e, value)) {
					return true;
				}
			}
			// 6. Return false.
			return false;
		}
	);

	// Polyfill.io - We need to define Set.prototype.values before Set.prototype.keys because keys is a reference to values.
	// 23.2.3.10. Set.prototype.values()
	var values = function values() {
		// 1. Let S be the this value.
		var S = this;
		// 2. Return ? CreateSetIterator(S, "value").
		return CreateSetIterator(S, "value");
	};
	CreateMethodProperty(Set.prototype, 'values', values);

	// 23.2.3.8 Set.prototype.keys ( )
	// The initial value of the keys property is the same function object as the initial value of the values property.
	CreateMethodProperty(Set.prototype, 'keys', values);

	// 23.2.3.9. get Set.prototype.size
	if (supportsGetters) {
		Object.defineProperty(Set.prototype, 'size', {
			configurable: true,
			enumerable: false,
			get: function () {
				// 1. Let S be the this value.
				var S = this;
				// 2. If Type(S) is not Object, throw a TypeError exception.
				if (typeof S !== 'object') {
					throw new TypeError('Method Set.prototype.size called on incompatible receiver ' + Object.prototype.toString.call(S));
				}
				// 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
				if (S._es6Set !== true) {
					throw new TypeError('Method Set.prototype.size called on incompatible receiver ' + Object.prototype.toString.call(S));
				}
				// 4. Let entries be the List that is S.[[SetData]].
				var entries = S._values;
				// 5. Let count be 0.
				var count = 0;
				// 6. For each e that is an element of entries, do
				for (var i = 0; i < entries.length; i++) {
					var e = entries[i];
					// a. If e is not empty, set count to count+1.
					if (e !== undefMarker) {
						count = count + 1;
					}
				}
				// 7. Return count.
				return count;
			},
			set: undefined
		});
	}

	// 23.2.3.11. Set.prototype [ @@iterator ] ( )
	// The initial value of the @@iterator property is the same function object as the initial value of the values property.
	CreateMethodProperty(Set.prototype, Symbol.iterator, values);

	// 23.2.3.12. Set.prototype [ @@toStringTag ]
	// The initial value of the @@toStringTag property is the String value "Set".
	// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.

	// Polyfill.io - Safari 8 implements Set.name but as a non-configurable property, which means it would throw an error if we try and configure it here.
	if (!('name' in Set)) {
		// 19.2.4.2 name
		Object.defineProperty(Set, 'name', {
			configurable: true,
			enumerable: false,
			writable: false,
			value: 'Set'
		});
	}

	// 23.2.5.1. CreateSetIterator ( set, kind )
	function CreateSetIterator(set, kind) {
		// 1. If Type(set) is not Object, throw a TypeError exception.
		if (typeof set !== 'object') {
			throw new TypeError('createSetIterator called on incompatible receiver ' + Object.prototype.toString.call(set));
		}
		// 2. If set does not have a [[SetData]] internal slot, throw a TypeError exception.
		if (set._es6Set !== true) {
			throw new TypeError('createSetIterator called on incompatible receiver ' + Object.prototype.toString.call(set));
		}
		// 3. Let iterator be ObjectCreate(%SetIteratorPrototype%, « [[IteratedSet]], [[SetNextIndex]], [[SetIterationKind]] »).
		var iterator = Object.create(SetIteratorPrototype);
		// 4. Set iterator.[[IteratedSet]] to set.
		Object.defineProperty(iterator, '[[IteratedSet]]', {
			configurable: true,
			enumerable: false,
			writable: true,
			value: set
		});
		// 5. Set iterator.[[SetNextIndex]] to 0.
		Object.defineProperty(iterator, '[[SetNextIndex]]', {
			configurable: true,
			enumerable: false,
			writable: true,
			value: 0
		});
		// 6. Set iterator.[[SetIterationKind]] to kind.
		Object.defineProperty(iterator, '[[SetIterationKind]]', {
			configurable: true,
			enumerable: false,
			writable: true,
			value: kind
		});
		// 7. Return iterator.
		return iterator;
	}

	// 23.2.5.2. The %SetIteratorPrototype% Object
	var SetIteratorPrototype = {};
	//Polyfill.io - We add this property to help us identify what is a set iterator.
	Object.defineProperty(SetIteratorPrototype, 'isSetIterator', {
		configurable: false,
		enumerable: false,
		writable: false,
		value: true
	});

	// 23.2.5.2.1. %SetIteratorPrototype%.next ( )
	CreateMethodProperty(SetIteratorPrototype, 'next', function next() {
		// 1. Let O be the this value.
		var O = this;
		// 2. If Type(O) is not Object, throw a TypeError exception.
		if (typeof O !== 'object') {
			throw new TypeError('Method %SetIteratorPrototype%.next called on incompatible receiver ' + Object.prototype.toString.call(O));
		}
		// 3. If O does not have all of the internal slots of a Set Iterator Instance (23.2.5.3), throw a TypeError exception.
		if (!O.isSetIterator) {
			throw new TypeError('Method %SetIteratorPrototype%.next called on incompatible receiver ' + Object.prototype.toString.call(O));
		}
		// 4. Let s be O.[[IteratedSet]].
		var s = O['[[IteratedSet]]'];
		// 5. Let index be O.[[SetNextIndex]].
		var index = O['[[SetNextIndex]]'];
		// 6. Let itemKind be O.[[SetIterationKind]].
		var itemKind = O['[[SetIterationKind]]'];
		// 7. If s is undefined, return CreateIterResultObject(undefined, true).
		if (s === undefined) {
			return CreateIterResultObject(undefined, true);
		}
		// 8. Assert: s has a [[SetData]] internal slot.
		if (!s._es6Set) {
			throw new Error(Object.prototype.toString.call(s) + ' does not have [[SetData]] internal slot.');
		}
		// 9. Let entries be the List that is s.[[SetData]].
		var entries = s._values;
		// 10. Let numEntries be the number of elements of entries.
		var numEntries = entries.length;
		// 11. NOTE: numEntries must be redetermined each time this method is evaluated.
		// 12. Repeat, while index is less than numEntries,
		while (index < numEntries) {
			// a. Let e be entries[index].
			var e = entries[index];
			// b. Set index to index+1.
			index = index + 1;
			// c. Set O.[[SetNextIndex]] to index.
			O['[[SetNextIndex]]'] = index;
			// d. If e is not empty, then
			if (e !== undefMarker) {
				// i. If itemKind is "key+value", then
				if (itemKind === 'key+value') {
					// 1. Return CreateIterResultObject(CreateArrayFromList(« e, e »), false).
					return CreateIterResultObject([e, e], false);
				}
				// ii. Return CreateIterResultObject(e, false).
				return CreateIterResultObject(e, false);
			}
		}
		// 13. Set O.[[IteratedSet]] to undefined.
		O['[[IteratedSet]]'] = undefined;
		// 14. Return CreateIterResultObject(undefined, true).
		return CreateIterResultObject(undefined, true);
	});

	// 23.2.5.2.2. %SetIteratorPrototype% [ @@toStringTag ]
	// The initial value of the @@toStringTag property is the String value "Set Iterator".
	// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.

	CreateMethodProperty(SetIteratorPrototype, Symbol.iterator, function iterator() {
			return this;
		}
	);

	// Export the object
	try {
		CreateMethodProperty(global, 'Set', Set);
	} catch (e) {
		// IE8 throws an error here if we set enumerable to false.
		// More info on table 2: https://msdn.microsoft.com/en-us/library/dd229916(v=vs.85).aspx
		global.Set = Set;
	}

}(self));

}

if (!("from"in Array&&function(){try{return Array.from({length:-Infinity}),"a"===Array.from(new self.Set(["a"]))[0]&&"a"===Array.from(new self.Map([["a","one"]]))[0][0]}catch(r){return!1}}()
)) {

// Array.from
/* globals
	IsCallable, GetMethod, Symbol, IsConstructor, Construct, ArrayCreate, GetIterator, IteratorClose,
	ToString, IteratorStep, IteratorValue, Call, CreateDataPropertyOrThrow, ToObject, ToLength, Get, CreateMethodProperty
*/
(function () {
	var toString = Object.prototype.toString;
	var stringMatch = String.prototype.match;
	// A cross-realm friendly way to detect if a value is a String object or literal.
	function isString(value) {
		if (typeof value === 'string') { return true; }
		if (typeof value !== 'object') { return false; }
		return toString.call(value) === '[object String]';
	}

	// 22.1.2.1. Array.from ( items [ , mapfn [ , thisArg ] ] )
	CreateMethodProperty(Array, 'from', function from(items /* [ , mapfn [ , thisArg ] ] */) { // eslint-disable-line no-undef
		// 1. Let C be the this value.
		var C = this;
		// 2. If mapfn is undefined, let mapping be false.
		var mapfn = arguments.length > 1 ? arguments[1] : undefined;
		if (mapfn === undefined) {
			var mapping = false;
			// 3. Else,
		} else {
			// a. If IsCallable(mapfn) is false, throw a TypeError exception.
			if (IsCallable(mapfn) === false) {
				throw new TypeError(Object.prototype.toString.call(mapfn) + ' is not a function.');
			}
			// b. If thisArg is present, let T be thisArg; else let T be undefined.
			var thisArg = arguments.length > 2 ? arguments[2] : undefined;
			if (thisArg !== undefined) {
				var T = thisArg;
			} else {
				T = undefined;
			}
			// c. Let mapping be true.
			mapping = true;

		}
		// 4. Let usingIterator be ? GetMethod(items, @@iterator).
		var usingIterator = GetMethod(items, Symbol.iterator);
		// 5. If usingIterator is not undefined, then
		if (usingIterator !== undefined) {
			// a. If IsConstructor(C) is true, then
			if (IsConstructor(C)) {
				// i. Let A be ? Construct(C).
				var A = Construct(C);
				// b. Else,
			} else {
				// i. Let A be ! ArrayCreate(0).
				A = ArrayCreate(0);
			}
			// c. Let iteratorRecord be ? GetIterator(items, usingIterator).
			var iteratorRecord = GetIterator(items, usingIterator);
			// d. Let k be 0.
			var k = 0;
			// e. Repeat,
			// eslint-disable-next-line no-constant-condition
			while (true) {
				// i. If k ≥ 2^53-1, then
				if (k >= (Math.pow(2, 53) - 1)) {
					// 1. Let error be Completion{[[Type]]: throw, [[Value]]: a newly created TypeError object, [[Target]]: empty}.
					var error = new TypeError('Iteration count can not be greater than or equal 9007199254740991.');
					// 2. Return ? IteratorClose(iteratorRecord, error).
					return IteratorClose(iteratorRecord, error);
				}
				// ii. Let Pk be ! ToString(k).
				var Pk = ToString(k);
				// iii. Let next be ? IteratorStep(iteratorRecord).
				var next = IteratorStep(iteratorRecord);
				// iv. If next is false, then
				if (next === false) {
					// 1. Perform ? Set(A, "length", k, true).
					A.length = k;
					// 2. Return A.
					return A;
				}
				// v. Let nextValue be ? IteratorValue(next).
				var nextValue = IteratorValue(next);
				// vi. If mapping is true, then
				if (mapping) {
					try {
						// Polyfill.io - The try catch accounts for step 2.
						// 1. Let mappedValue be Call(mapfn, T, « nextValue, k »).
						var mappedValue = Call(mapfn, T, [nextValue, k]);
						// 2. If mappedValue is an abrupt completion, return ? IteratorClose(iteratorRecord, mappedValue).
						// 3. Let mappedValue be mappedValue.[[Value]].
					} catch (e) {
						return IteratorClose(iteratorRecord, e);
					}

					// vii. Else, let mappedValue be nextValue.
				} else {
					mappedValue = nextValue;
				}
				try {
					// Polyfill.io - The try catch accounts for step ix.
					// viii. Let defineStatus be CreateDataPropertyOrThrow(A, Pk, mappedValue).
					CreateDataPropertyOrThrow(A, Pk, mappedValue);
					// ix. If defineStatus is an abrupt completion, return ? IteratorClose(iteratorRecord, defineStatus).
				} catch (e) {
					return IteratorClose(iteratorRecord, e);
				}
				// x. Increase k by 1.
				k = k + 1;
			}
		}
		// 6. NOTE: items is not an Iterable so assume it is an array-like object.
		// 7. Let arrayLike be ! ToObject(items).
		// Polyfill.io - For Strings we need to split astral symbols into surrogate pairs.
		if (isString(items)) {
			var arrayLike = stringMatch.call(items, /[\uD800-\uDBFF][\uDC00-\uDFFF]?|[^\uD800-\uDFFF]|./g) || [];
		} else {
			arrayLike = ToObject(items);
		}
		// 8. Let len be ? ToLength(? Get(arrayLike, "length")).
		var len = ToLength(Get(arrayLike, "length"));
		// 9. If IsConstructor(C) is true, then
		if (IsConstructor(C)) {
			// a. Let A be ? Construct(C, « len »).
			A = Construct(C, [len]);
			// 10. Else,
		} else {
			// a. Let A be ? ArrayCreate(len).
			A = ArrayCreate(len);
		}
		// 11. Let k be 0.
		k = 0;
		// 12. Repeat, while k < len
		while (k < len) {
			// a. Let Pk be ! ToString(k).
			Pk = ToString(k);
			// b. Let kValue be ? Get(arrayLike, Pk).
			var kValue = Get(arrayLike, Pk);
			// c. If mapping is true, then
			if (mapping === true) {
				// i. Let mappedValue be ? Call(mapfn, T, « kValue, k »).
				mappedValue = Call(mapfn, T, [kValue, k]);
				// d. Else, let mappedValue be kValue.
			} else {
				mappedValue = kValue;
			}
			// e. Perform ? CreateDataPropertyOrThrow(A, Pk, mappedValue).
			CreateDataPropertyOrThrow(A, Pk, mappedValue);
			// f. Increase k by 1.
			k = k + 1;
		}
		// 13. Perform ? Set(A, "length", len, true).
		A.length = len;
		// 14. Return A.
		return A;
	});
}());

}

if (!((function(r){"use strict"
try{var a=new r.URL("http://example.com")
if("href"in a&&"searchParams"in a){var e=new URL("http://example.com")
if(e.search="a=1&b=2","http://example.com/?a=1&b=2"===e.href&&(e.search="","http://example.com/"===e.href)){if(!("sort"in r.URLSearchParams.prototype))return!1
var t=new r.URLSearchParams("a=1"),n=new r.URLSearchParams(t)
if("a=1"!==String(n))return!1
var c=new r.URLSearchParams({a:"1"})
if("a=1"!==String(c))return!1
var h=new r.URLSearchParams([["a","1"]])
return"a=1"===String(h)}}return!1}catch(m){return!1}})(self)
)) {

// URL
/* global Symbol */
// URL Polyfill
// Draft specification: https://url.spec.whatwg.org

// Notes:
// - Primarily useful for parsing URLs and modifying query parameters
// - Should work in IE8+ and everything more modern, with es5.js polyfills

(function (global) {
	'use strict';

	function isSequence(o) {
		if (!o) return false;
		if ('Symbol' in global && 'iterator' in global.Symbol &&
				typeof o[Symbol.iterator] === 'function') return true;
		if (Array.isArray(o)) return true;
		return false;
	}

	;(function() { // eslint-disable-line no-extra-semi

		// Browsers may have:
		// * No global URL object
		// * URL with static methods only - may have a dummy constructor
		// * URL with members except searchParams
		// * Full URL API support
		var origURL = global.URL;
		var nativeURL;
		try {
			if (origURL) {
				nativeURL = new global.URL('http://example.com');
				if ('searchParams' in nativeURL) {
					var url = new URL('http://example.com');
					url.search = 'a=1&b=2';
					if (url.href === 'http://example.com/?a=1&b=2') {
						url.search = '';
						if (url.href === 'http://example.com/') {
							return;
						}
					}
				}
				if (!('href' in nativeURL)) {
					nativeURL = undefined;
				}
				nativeURL = undefined;
			}
		// eslint-disable-next-line no-empty
		} catch (_) {}

		// NOTE: Doesn't do the encoding/decoding dance
		function urlencoded_serialize(pairs) {
			var output = '', first = true;
			pairs.forEach(function (pair) {
				var name = encodeURIComponent(pair.name);
				var value = encodeURIComponent(pair.value);
				if (!first) output += '&';
				output += name + '=' + value;
				first = false;
			});
			return output.replace(/%20/g, '+');
		}

		// NOTE: Doesn't do the encoding/decoding dance
		function urlencoded_parse(input, isindex) {
			var sequences = input.split('&');
			if (isindex && sequences[0].indexOf('=') === -1)
				sequences[0] = '=' + sequences[0];
			var pairs = [];
			sequences.forEach(function (bytes) {
				if (bytes.length === 0) return;
				var index = bytes.indexOf('=');
				if (index !== -1) {
					var name = bytes.substring(0, index);
					var value = bytes.substring(index + 1);
				} else {
					name = bytes;
					value = '';
				}
				name = name.replace(/\+/g, ' ');
				value = value.replace(/\+/g, ' ');
				pairs.push({ name: name, value: value });
			});
			var output = [];
			pairs.forEach(function (pair) {
				output.push({
					name: decodeURIComponent(pair.name),
					value: decodeURIComponent(pair.value)
				});
			});
			return output;
		}

		function URLUtils(url) {
			if (nativeURL)
				return new origURL(url);
			var anchor = document.createElement('a');
			anchor.href = url;
			return anchor;
		}

		function URLSearchParams(init) {
			var $this = this;
			this._list = [];

			if (init === undefined || init === null) {
				// no-op
			} else if (init instanceof URLSearchParams) {
				// In ES6 init would be a sequence, but special case for ES5.
				this._list = urlencoded_parse(String(init));
			} else if (typeof init === 'object' && isSequence(init)) {
				Array.from(init).forEach(function(e) {
					if (!isSequence(e)) throw TypeError();
					var nv = Array.from(e);
					if (nv.length !== 2) throw TypeError();
					$this._list.push({name: String(nv[0]), value: String(nv[1])});
				});
			} else if (typeof init === 'object' && init) {
				Object.keys(init).forEach(function(key) {
					$this._list.push({name: String(key), value: String(init[key])});
				});
			} else {
				init = String(init);
				if (init.substring(0, 1) === '?')
					init = init.substring(1);
				this._list = urlencoded_parse(init);
			}

			this._url_object = null;
			this._setList = function (list) { if (!updating) $this._list = list; };

			var updating = false;
			this._update_steps = function() {
				if (updating) return;
				updating = true;

				if (!$this._url_object) return;

				// Partial workaround for IE issue with 'about:'
				if ($this._url_object.protocol === 'about:' &&
						$this._url_object.pathname.indexOf('?') !== -1) {
					$this._url_object.pathname = $this._url_object.pathname.split('?')[0];
				}

				$this._url_object.search = urlencoded_serialize($this._list);

				updating = false;
			};
		}


		Object.defineProperties(URLSearchParams.prototype, {
			append: {
				value: function (name, value) {
					this._list.push({ name: name, value: value });
					this._update_steps();
				}, writable: true, enumerable: true, configurable: true
			},

			'delete': {
				value: function (name) {
					for (var i = 0; i < this._list.length;) {
						if (this._list[i].name === name)
							this._list.splice(i, 1);
						else
							++i;
					}
					this._update_steps();
				}, writable: true, enumerable: true, configurable: true
			},

			get: {
				value: function (name) {
					for (var i = 0; i < this._list.length; ++i) {
						if (this._list[i].name === name)
							return this._list[i].value;
					}
					return null;
				}, writable: true, enumerable: true, configurable: true
			},

			getAll: {
				value: function (name) {
					var result = [];
					for (var i = 0; i < this._list.length; ++i) {
						if (this._list[i].name === name)
							result.push(this._list[i].value);
					}
					return result;
				}, writable: true, enumerable: true, configurable: true
			},

			has: {
				value: function (name) {
					for (var i = 0; i < this._list.length; ++i) {
						if (this._list[i].name === name)
							return true;
					}
					return false;
				}, writable: true, enumerable: true, configurable: true
			},

			set: {
				value: function (name, value) {
					var found = false;
					for (var i = 0; i < this._list.length;) {
						if (this._list[i].name === name) {
							if (!found) {
								this._list[i].value = value;
								found = true;
								++i;
							} else {
								this._list.splice(i, 1);
							}
						} else {
							++i;
						}
					}

					if (!found)
						this._list.push({ name: name, value: value });

					this._update_steps();
				}, writable: true, enumerable: true, configurable: true
			},

			entries: {
				value: function() { return new Iterator(this._list, 'key+value'); },
				writable: true, enumerable: true, configurable: true
			},

			keys: {
				value: function() { return new Iterator(this._list, 'key'); },
				writable: true, enumerable: true, configurable: true
			},

			values: {
				value: function() { return new Iterator(this._list, 'value'); },
				writable: true, enumerable: true, configurable: true
			},

			forEach: {
				value: function(callback) {
					var thisArg = (arguments.length > 1) ? arguments[1] : undefined;
					this._list.forEach(function(pair) {
						callback.call(thisArg, pair.value, pair.name);
					});

				}, writable: true, enumerable: true, configurable: true
			},

			toString: {
				value: function () {
					return urlencoded_serialize(this._list);
				}, writable: true, enumerable: false, configurable: true
			},

			sort: {
				value: function sort() {
					var entries = this.entries();
					var entry = entries.next();
					var keys = [];
					var values = {};

					while (!entry.done) {
						var value = entry.value;
						var key = value[0];
						keys.push(key);
						if (!(Object.prototype.hasOwnProperty.call(values, key))) {
							values[key] = [];
						}
						values[key].push(value[1]);
						entry = entries.next();
					}

					keys.sort();
					for (var i = 0; i < keys.length; i++) {
						this["delete"](keys[i]);
					}
					for (var j = 0; j < keys.length; j++) {
						key = keys[j];
						this.append(key, values[key].shift());
					}
				}
			}
		});

		function Iterator(source, kind) {
			var index = 0;
			this.next = function() {
				if (index >= source.length)
					return {done: true, value: undefined};
				var pair = source[index++];
				return {done: false, value:
								kind === 'key' ? pair.name :
								kind === 'value' ? pair.value :
								[pair.name, pair.value]};
			};
		}

		if ('Symbol' in global && 'iterator' in global.Symbol) {
			Object.defineProperty(URLSearchParams.prototype, global.Symbol.iterator, {
				value: URLSearchParams.prototype.entries,
				writable: true, enumerable: true, configurable: true});
			Object.defineProperty(Iterator.prototype, global.Symbol.iterator, {
				value: function() { return this; },
				writable: true, enumerable: true, configurable: true});
		}

		function URL(url, base) {
			if (!(this instanceof global.URL))
				throw new TypeError("Failed to construct 'URL': Please use the 'new' operator.");

			if (base) {
				url = (function () {
					if (nativeURL) return new origURL(url, base).href;
					var iframe;
					try {
						var doc;
						// Use another document/base tag/anchor for relative URL resolution, if possible
						if (Object.prototype.toString.call(window.operamini) === "[object OperaMini]") {
							iframe = document.createElement('iframe');
							iframe.style.display = 'none';
							document.documentElement.appendChild(iframe);
							doc = iframe.contentWindow.document;
						} else if (document.implementation && document.implementation.createHTMLDocument) {
							doc = document.implementation.createHTMLDocument('');
						} else if (document.implementation && document.implementation.createDocument) {
							doc = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
							doc.documentElement.appendChild(doc.createElement('head'));
							doc.documentElement.appendChild(doc.createElement('body'));
						} else if (window.ActiveXObject) {
							doc = new window.ActiveXObject('htmlfile');
							doc.write('<head></head><body></body>');
							doc.close();
						}

						if (!doc) throw Error('base not supported');

						var baseTag = doc.createElement('base');
						baseTag.href = base;
						doc.getElementsByTagName('head')[0].appendChild(baseTag);
						var anchor = doc.createElement('a');
						anchor.href = url;
						return anchor.href;
					} finally {
						if (iframe)
							iframe.parentNode.removeChild(iframe);
					}
				}());
			}

			// An inner object implementing URLUtils (either a native URL
			// object or an HTMLAnchorElement instance) is used to perform the
			// URL algorithms. With full ES5 getter/setter support, return a
			// regular object For IE8's limited getter/setter support, a
			// different HTMLAnchorElement is returned with properties
			// overridden

			var instance = URLUtils(url || '');

			// Detect for ES5 getter/setter support
			// (an Object.defineProperties polyfill that doesn't support getters/setters may throw)
			var ES5_GET_SET = (function() {
				if (!('defineProperties' in Object)) return false;
				try {
					var obj = {};
					Object.defineProperties(obj, { prop: { get: function () { return true; } } });
					return obj.prop;
				} catch (_) {
					return false;
				}
			}());

			var self = ES5_GET_SET ? this : document.createElement('a');



			var query_object = new URLSearchParams(
				instance.search ? instance.search.substring(1) : null);
			query_object._url_object = self;

			Object.defineProperties(self, {
				href: {
					get: function () { return instance.href; },
					set: function (v) { instance.href = v; tidy_instance(); update_steps(); },
					enumerable: true, configurable: true
				},
				origin: {
					get: function () {
						if (this.protocol.toLowerCase() === "data:") {
							return null
						}

						if ('origin' in instance) return instance.origin;
						return this.protocol + '//' + this.host;
					},
					enumerable: true, configurable: true
				},
				protocol: {
					get: function () { return instance.protocol; },
					set: function (v) { instance.protocol = v; },
					enumerable: true, configurable: true
				},
				username: {
					get: function () { return instance.username; },
					set: function (v) { instance.username = v; },
					enumerable: true, configurable: true
				},
				password: {
					get: function () { return instance.password; },
					set: function (v) { instance.password = v; },
					enumerable: true, configurable: true
				},
				host: {
					get: function () {
						// IE returns default port in |host|
						var re = {'http:': /:80$/, 'https:': /:443$/, 'ftp:': /:21$/}[instance.protocol];
						return re ? instance.host.replace(re, '') : instance.host;
					},
					set: function (v) { instance.host = v; },
					enumerable: true, configurable: true
				},
				hostname: {
					get: function () { return instance.hostname; },
					set: function (v) { instance.hostname = v; },
					enumerable: true, configurable: true
				},
				port: {
					get: function () { return instance.port; },
					set: function (v) { instance.port = v; },
					enumerable: true, configurable: true
				},
				pathname: {
					get: function () {
						// IE does not include leading '/' in |pathname|
						if (instance.pathname.charAt(0) !== '/') return '/' + instance.pathname;
						return instance.pathname;
					},
					set: function (v) { instance.pathname = v; },
					enumerable: true, configurable: true
				},
				search: {
					get: function () { return instance.search; },
					set: function (v) {
						if (instance.search === v) return;
						instance.search = v; tidy_instance(); update_steps();
					},
					enumerable: true, configurable: true
				},
				searchParams: {
					get: function () { return query_object; },
					enumerable: true, configurable: true
				},
				hash: {
					get: function () { return instance.hash; },
					set: function (v) { instance.hash = v; tidy_instance(); },
					enumerable: true, configurable: true
				},
				toString: {
					value: function() { return instance.toString(); },
					enumerable: false, configurable: true
				},
				valueOf: {
					value: function() { return instance.valueOf(); },
					enumerable: false, configurable: true
				}
			});

			function tidy_instance() {
				var href = instance.href.replace(/#$|\?$|\?(?=#)/g, '');
				if (instance.href !== href)
					instance.href = href;
			}

			function update_steps() {
				query_object._setList(instance.search ? urlencoded_parse(instance.search.substring(1)) : []);
				query_object._update_steps();
			}

			return self;
		}

		if (origURL) {
			for (var i in origURL) {
				if (Object.prototype.hasOwnProperty.call(origURL, i) && typeof origURL[i] === 'function')
					URL[i] = origURL[i];
			}
		}

		global.URL = URL;
		global.URLSearchParams = URLSearchParams;
	})();

	// Patch native URLSearchParams constructor to handle sequences/records
	// if necessary.
	(function() {
		if (new global.URLSearchParams([['a', 1]]).get('a') === '1' &&
				new global.URLSearchParams({a: 1}).get('a') === '1')
			return;
		var orig = global.URLSearchParams;
		global.URLSearchParams = function(init) {
			if (init && typeof init === 'object' && isSequence(init)) {
				var o = new orig();
				Array.from(init).forEach(function (e) {
					if (!isSequence(e)) throw TypeError();
					var nv = Array.from(e);
					if (nv.length !== 2) throw TypeError();
					o.append(nv[0], nv[1]);
				});
				return o;
			} else if (init && typeof init === 'object') {
				o = new orig();
				Object.keys(init).forEach(function(key) {
					o.set(key, init[key]);
				});
				return o;
			} else {
				return new orig(init);
			}
		};
	})();

}(self));

}

if (!("Symbol"in self&&"split"in self.Symbol
)) {

// Symbol.split
/* global Symbol */
Object.defineProperty(Symbol, 'split', { value: Symbol('split') });

}

if (!("Symbol"in self&&"toPrimitive"in self.Symbol
)) {

// Symbol.toPrimitive
/* global Symbol */
Object.defineProperty(Symbol, 'toPrimitive', { value: Symbol('toPrimitive') });

}

if (!("Symbol"in self&&"toStringTag"in self.Symbol
)) {

// Symbol.toStringTag
/* global Symbol */
Object.defineProperty(Symbol, 'toStringTag', {
	value: Symbol('toStringTag')
});

}

if (!("Promise"in self
)) {

// Promise
/*
	Yaku v0.19.3
	(c) 2015 Yad Smood. http://ysmood.org
	License MIT
*/
/*
	Yaku v0.17.9
	(c) 2015 Yad Smood. http://ysmood.org
	License MIT
*/
(function () {
	'use strict';

	var $undefined
	, $null = null
	, isBrowser = typeof self === 'object'
	, root = self
	, nativePromise = root.Promise
	, process = root.process
	, console = root.console
	, isLongStackTrace = true
	, Arr = Array
	, Err = Error

	, $rejected = 1
	, $resolved = 2
	, $pending = 3

	, $Symbol = 'Symbol'
	, $iterator = 'iterator'
	, $species = 'species'
	, $speciesKey = $Symbol + '(' + $species + ')'
	, $return = 'return'

	, $unhandled = '_uh'
	, $promiseTrace = '_pt'
	, $settlerTrace = '_st'

	, $invalidThis = 'Invalid this'
	, $invalidArgument = 'Invalid argument'
	, $fromPrevious = '\nFrom previous '
	, $promiseCircularChain = 'Chaining cycle detected for promise'
	, $unhandledRejectionMsg = 'Uncaught (in promise)'
	, $rejectionHandled = 'rejectionHandled'
	, $unhandledRejection = 'unhandledRejection'

	, $tryCatchFn
	, $tryCatchThis
	, $tryErr = { e: $null }
	, $noop = function () {}
	, $cleanStackReg = /^.+\/node_modules\/yaku\/.+\n?/mg
	;

	/**
	* This class follows the [Promises/A+](https://promisesaplus.com) and
	* [ES6](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-promise-objects) spec
	* with some extra helpers.
	* @param  {Function} executor Function object with two arguments resolve, reject.
	* The first argument fulfills the promise, the second argument rejects it.
	* We can call these functions, once our operation is completed.
	*/
	var Yaku = function (executor) {
	var self = this,
		err;

	// "this._s" is the internao state of: pending, resolved or rejected
	// "this._v" is the internal value

	if (!isObject(self) || self._s !== $undefined)
		throw genTypeError($invalidThis);

	self._s = $pending;

	if (isLongStackTrace) self[$promiseTrace] = genTraceInfo();

	if (executor !== $noop) {
		if (!isFunction(executor))
			throw genTypeError($invalidArgument);

		err = genTryCatcher(executor)(
			genSettler(self, $resolved),
			genSettler(self, $rejected)
		);

		if (err === $tryErr)
			settlePromise(self, $rejected, err.e);
	}
	};

	Yaku['default'] = Yaku;

	extend(Yaku.prototype, {
	/**
		* Appends fulfillment and rejection handlers to the promise,
		* and returns a new promise resolving to the return value of the called handler.
		* @param  {Function} onFulfilled Optional. Called when the Promise is resolved.
		* @param  {Function} onRejected  Optional. Called when the Promise is rejected.
		* @return {Yaku} It will return a new Yaku which will resolve or reject after
		* @example
		* the current Promise.
		* ```js
		* var Promise = require('yaku');
		* var p = Promise.resolve(10);
		*
		* p.then((v) => {
		*     console.log(v);
		* });
		* ```
		*/
	then: function (onFulfilled, onRejected) {
		if (this._s === undefined) throw genTypeError();

		return addHandler(
			this,
			newCapablePromise(Yaku.speciesConstructor(this, Yaku)),
			onFulfilled,
			onRejected
		);
	},

	/**
		* The `catch()` method returns a Promise and deals with rejected cases only.
		* It behaves the same as calling `Promise.prototype.then(undefined, onRejected)`.
		* @param  {Function} onRejected A Function called when the Promise is rejected.
		* This function has one argument, the rejection reason.
		* @return {Yaku} A Promise that deals with rejected cases only.
		* @example
		* ```js
		* var Promise = require('yaku');
		* var p = Promise.reject(new Error("ERR"));
		*
		* p['catch']((v) => {
		*     console.log(v);
		* });
		* ```
		*/
	'catch': function (onRejected) {
		return this.then($undefined, onRejected);
	},

	/**
		* Register a callback to be invoked when a promise is settled (either fulfilled or rejected).
		* Similar with the try-catch-finally, it's often used for cleanup.
		* @param  {Function} onFinally A Function called when the Promise is settled.
		* It will not receive any argument.
		* @return {Yaku} A Promise that will reject if onFinally throws an error or returns a rejected promise.
		* Else it will resolve previous promise's final state (either fulfilled or rejected).
		* @example
		* ```js
		* var Promise = require('yaku');
		* var p = Math.random() > 0.5 ? Promise.resolve() : Promise.reject();
		* p.finally(() => {
		*     console.log('finally');
		* });
		* ```
		*/
	'finally': function (onFinally) {
		return this.then(function (val) {
			return Yaku.resolve(onFinally()).then(function () {
				return val;
			});
		}, function (err) {
			return Yaku.resolve(onFinally()).then(function () {
				throw err;
			});
		});
	},

	// The number of current promises that attach to this Yaku instance.
	_c: 0,

	// The parent Yaku.
	_p: $null
	});

	/**
	* The `Promise.resolve(value)` method returns a Promise object that is resolved with the given value.
	* If the value is a thenable (i.e. has a then method), the returned promise will "follow" that thenable,
	* adopting its eventual state; otherwise the returned promise will be fulfilled with the value.
	* @param  {Any} value Argument to be resolved by this Promise.
	* Can also be a Promise or a thenable to resolve.
	* @return {Yaku}
	* @example
	* ```js
	* var Promise = require('yaku');
	* var p = Promise.resolve(10);
	* ```
	*/
	Yaku.resolve = function (val) {
	return isYaku(val) ? val : settleWithX(newCapablePromise(this), val);
	};

	/**
	* The `Promise.reject(reason)` method returns a Promise object that is rejected with the given reason.
	* @param  {Any} reason Reason why this Promise rejected.
	* @return {Yaku}
	* @example
	* ```js
	* var Promise = require('yaku');
	* var p = Promise.reject(new Error("ERR"));
	* ```
	*/
	Yaku.reject = function (reason) {
	return settlePromise(newCapablePromise(this), $rejected, reason);
	};

	/**
	* The `Promise.race(iterable)` method returns a promise that resolves or rejects
	* as soon as one of the promises in the iterable resolves or rejects,
	* with the value or reason from that promise.
	* @param  {iterable} iterable An iterable object, such as an Array.
	* @return {Yaku} The race function returns a Promise that is settled
	* the same way as the first passed promise to settle.
	* It resolves or rejects, whichever happens first.
	* @example
	* ```js
	* var Promise = require('yaku');
	* Promise.race([
	*     123,
	*     Promise.resolve(0)
	* ])
	* .then((value) => {
	*     console.log(value); // => 123
	* });
	* ```
	*/
	Yaku.race = function (iterable) {
	var self = this
		, p = newCapablePromise(self)

		, resolve = function (val) {
			settlePromise(p, $resolved, val);
		}

		, reject = function (val) {
			settlePromise(p, $rejected, val);
		}

		, ret = genTryCatcher(each)(iterable, function (v) {
			self.resolve(v).then(resolve, reject);
		});

	if (ret === $tryErr) return self.reject(ret.e);

	return p;
	};

	/**
	* The `Promise.all(iterable)` method returns a promise that resolves when
	* all of the promises in the iterable argument have resolved.
	*
	* The result is passed as an array of values from all the promises.
	* If something passed in the iterable array is not a promise,
	* it's converted to one by Promise.resolve. If any of the passed in promises rejects,
	* the all Promise immediately rejects with the value of the promise that rejected,
	* discarding all the other promises whether or not they have resolved.
	* @param  {iterable} iterable An iterable object, such as an Array.
	* @return {Yaku}
	* @example
	* ```js
	* var Promise = require('yaku');
	* Promise.all([
	*     123,
	*     Promise.resolve(0)
	* ])
	* .then((values) => {
	*     console.log(values); // => [123, 0]
	* });
	* ```
	* @example
	* Use with iterable.
	* ```js
	* var Promise = require('yaku');
	* Promise.all((function * () {
	*     yield 10;
	*     yield new Promise(function (r) { setTimeout(r, 1000, "OK") });
	* })())
	* .then((values) => {
	*     console.log(values); // => [123, 0]
	* });
	* ```
	*/
	Yaku.all = function (iterable) {
	var self = this
		, p1 = newCapablePromise(self)
		, res = []
		, ret
	;

	function reject (reason) {
		settlePromise(p1, $rejected, reason);
	}

	ret = genTryCatcher(each)(iterable, function (item, i) {
		self.resolve(item).then(function (value) {
			res[i] = value;
			if (!--ret) settlePromise(p1, $resolved, res);
		}, reject);
	});

	if (ret === $tryErr) return self.reject(ret.e);

	if (!ret) settlePromise(p1, $resolved, []);

	return p1;
	};

	/**
	* The ES6 Symbol object that Yaku should use, by default it will use the
	* global one.
	* @type {Object}
	* @example
	* ```js
	* var core = require("core-js/library");
	* var Promise = require("yaku");
	* Promise.Symbol = core.Symbol;
	* ```
	*/
	Yaku.Symbol = root[$Symbol] || {};

	// To support browsers that don't support `Object.defineProperty`.
	genTryCatcher(function () {
	Object.defineProperty(Yaku, getSpecies(), {
		get: function () { return this; }
	});
	})();

	/**
	* Use this api to custom the species behavior.
	* https://tc39.github.io/ecma262/#sec-speciesconstructor
	* @param {Any} O The current this object.
	* @param {Function} defaultConstructor
	*/
	Yaku.speciesConstructor = function (O, D) {
	var C = O.constructor;

	return C ? (C[getSpecies()] || D) : D;
	};

	/**
	* Catch all possibly unhandled rejections. If you want to use specific
	* format to display the error stack, overwrite it.
	* If it is set, auto `console.error` unhandled rejection will be disabled.
	* @param {Any} reason The rejection reason.
	* @param {Yaku} p The promise that was rejected.
	* @example
	* ```js
	* var Promise = require('yaku');
	* Promise.unhandledRejection = (reason) => {
	*     console.error(reason);
	* };
	*
	* // The console will log an unhandled rejection error message.
	* Promise.reject('my reason');
	*
	* // The below won't log the unhandled rejection error message.
	* Promise.reject('v')["catch"](() => {});
	* ```
	*/
	Yaku.unhandledRejection = function (reason, p) {
	console && console.error(
		$unhandledRejectionMsg,
		isLongStackTrace ? p.longStack : genStackInfo(reason, p)
	);
	};

	/**
	* Emitted whenever a Promise was rejected and an error handler was
	* attached to it (for example with `["catch"]()`) later than after an event loop turn.
	* @param {Any} reason The rejection reason.
	* @param {Yaku} p The promise that was rejected.
	*/
	Yaku.rejectionHandled = $noop;

	/**
	* It is used to enable the long stack trace.
	* Once it is enabled, it can't be reverted.
	* While it is very helpful in development and testing environments,
	* it is not recommended to use it in production. It will slow down
	* application and eat up memory.
	* It will add an extra property `longStack` to the Error object.
	* @example
	* ```js
	* var Promise = require('yaku');
	* Promise.enableLongStackTrace();
	* Promise.reject(new Error("err"))["catch"]((err) => {
	*     console.log(err.longStack);
	* });
	* ```
	*/
	Yaku.enableLongStackTrace = function () {
	isLongStackTrace = true;
	};

	/**
	* Only Node has `process.nextTick` function. For browser there are
	* so many ways to polyfill it. Yaku won't do it for you, instead you
	* can choose what you prefer. For example, this project
	* [next-tick](https://github.com/medikoo/next-tick).
	* By default, Yaku will use `process.nextTick` on Node, `setTimeout` on browser.
	* @type {Function}
	* @example
	* ```js
	* var Promise = require('yaku');
	* Promise.nextTick = require('next-tick');
	* ```
	* @example
	* You can even use sync resolution if you really know what you are doing.
	* ```js
	* var Promise = require('yaku');
	* Promise.nextTick = fn => fn();
	* ```
	*/
	Yaku.nextTick = isBrowser ?
	function (fn) {
		nativePromise ?
			new nativePromise(function (resolve) { resolve(); }).then(fn) :
			setTimeout(fn);
	} :
	process.nextTick;

	// ********************** Private **********************

	Yaku._s = 1;

	/**
	* All static variable name will begin with `$`. Such as `$rejected`.
	* @private
	*/

	// ******************************* Utils ********************************

	function getSpecies () {
	return Yaku[$Symbol][$species] || $speciesKey;
	}

	function extend (src, target) {
	for (var k in target) {
		src[k] = target[k];
	}
	}

	function isObject (obj) {
	return obj && typeof obj === 'object';
	}

	function isFunction (obj) {
	return typeof obj === 'function';
	}

	function isInstanceOf (a, b) {
	return a instanceof b;
	}

	function isError (obj) {
	return isInstanceOf(obj, Err);
	}

	function ensureType (obj, fn, msg) {
	if (!fn(obj)) throw genTypeError(msg);
	}

	/**
	* Wrap a function into a try-catch.
	* @private
	* @return {Any | $tryErr}
	*/
	function tryCatcher () {
	try {
		return $tryCatchFn.apply($tryCatchThis, arguments);
	} catch (e) {
		$tryErr.e = e;
		return $tryErr;
	}
	}

	/**
	* Generate a try-catch wrapped function.
	* @private
	* @param  {Function} fn
	* @return {Function}
	*/
	function genTryCatcher (fn, self) {
	$tryCatchFn = fn;
	$tryCatchThis = self;
	return tryCatcher;
	}

	/**
	* Generate a scheduler.
	* @private
	* @param  {Integer}  initQueueSize
	* @param  {Function} fn `(Yaku, Value) ->` The schedule handler.
	* @return {Function} `(Yaku, Value) ->` The scheduler.
	*/
	function genScheduler (initQueueSize, fn) {
	/**
		* All async promise will be scheduled in
		* here, so that they can be execute on the next tick.
		* @private
		*/
	var fnQueue = Arr(initQueueSize)
		, fnQueueLen = 0;

	/**
		* Run all queued functions.
		* @private
		*/
	function flush () {
		var i = 0;
		while (i < fnQueueLen) {
			fn(fnQueue[i], fnQueue[i + 1]);
			fnQueue[i++] = $undefined;
			fnQueue[i++] = $undefined;
		}

		fnQueueLen = 0;
		if (fnQueue.length > initQueueSize) fnQueue.length = initQueueSize;
	}

	return function (v, arg) {
		fnQueue[fnQueueLen++] = v;
		fnQueue[fnQueueLen++] = arg;

		if (fnQueueLen === 2) Yaku.nextTick(flush);
	};
	}

	/**
	* Generate a iterator
	* @param  {Any} obj
	* @private
	* @return {Object || TypeError}
	*/
	function each (iterable, fn) {
	var len
		, i = 0
		, iter
		, item
		, ret
	;

	if (!iterable) throw genTypeError($invalidArgument);

	var gen = iterable[Yaku[$Symbol][$iterator]];
	if (isFunction(gen))
		iter = gen.call(iterable);
	else if (isFunction(iterable.next)) {
		iter = iterable;
	}
	else if (isInstanceOf(iterable, Arr)) {
		len = iterable.length;
		while (i < len) {
			fn(iterable[i], i++);
		}
		return i;
	} else
		throw genTypeError($invalidArgument);

	while (!(item = iter.next()).done) {
		ret = genTryCatcher(fn)(item.value, i++);
		if (ret === $tryErr) {
			isFunction(iter[$return]) && iter[$return]();
			throw ret.e;
		}
	}

	return i;
	}

	/**
	* Generate type error object.
	* @private
	* @param  {String} msg
	* @return {TypeError}
	*/
	function genTypeError (msg) {
	return new TypeError(msg);
	}

	function genTraceInfo (noTitle) {
	return (noTitle ? '' : $fromPrevious) + new Err().stack;
	}


	// *************************** Promise Helpers ****************************

	/**
	* Resolve the value returned by onFulfilled or onRejected.
	* @private
	* @param {Yaku} p1
	* @param {Yaku} p2
	*/
	var scheduleHandler = genScheduler(999, function (p1, p2) {
	var x, handler;

	// 2.2.2
	// 2.2.3
	handler = p1._s !== $rejected ? p2._onFulfilled : p2._onRejected;

	// 2.2.7.3
	// 2.2.7.4
	if (handler === $undefined) {
		settlePromise(p2, p1._s, p1._v);
		return;
	}

	// 2.2.7.1
	x = genTryCatcher(callHanler)(handler, p1._v);
	if (x === $tryErr) {
		// 2.2.7.2
		settlePromise(p2, $rejected, x.e);
		return;
	}

	settleWithX(p2, x);
	});

	var scheduleUnhandledRejection = genScheduler(9, function (p) {
	if (!hashOnRejected(p)) {
		p[$unhandled] = 1;
		emitEvent($unhandledRejection, p);
	}
	});

	function emitEvent (name, p) {
	var browserEventName = 'on' + name.toLowerCase()
		, browserHandler = root[browserEventName];

	if (process && process.listeners(name).length)
		name === $unhandledRejection ?
			process.emit(name, p._v, p) : process.emit(name, p);
	else if (browserHandler)
		browserHandler({ reason: p._v, promise: p });
	else
		Yaku[name](p._v, p);
	}

	function isYaku (val) { return val && val._s; }

	function newCapablePromise (Constructor) {
	if (isYaku(Constructor)) return new Constructor($noop);

	var p, r, j;
	p = new Constructor(function (resolve, reject) {
		if (p) throw genTypeError();

		r = resolve;
		j = reject;
	});

	ensureType(r, isFunction);
	ensureType(j, isFunction);

	return p;
	}

	/**
	* It will produce a settlePromise function to user.
	* Such as the resolve and reject in this `new Yaku (resolve, reject) ->`.
	* @private
	* @param  {Yaku} self
	* @param  {Integer} state The value is one of `$pending`, `$resolved` or `$rejected`.
	* @return {Function} `(value) -> undefined` A resolve or reject function.
	*/
	function genSettler (self, state) {
	var isCalled = false;
	return function (value) {
		if (isCalled) return;
		isCalled = true;

		if (isLongStackTrace)
			self[$settlerTrace] = genTraceInfo(true);

		if (state === $resolved)
			settleWithX(self, value);
		else
			settlePromise(self, state, value);
	};
	}

	/**
	* Link the promise1 to the promise2.
	* @private
	* @param {Yaku} p1
	* @param {Yaku} p2
	* @param {Function} onFulfilled
	* @param {Function} onRejected
	*/
	function addHandler (p1, p2, onFulfilled, onRejected) {
	// 2.2.1
	if (isFunction(onFulfilled))
		p2._onFulfilled = onFulfilled;
	if (isFunction(onRejected)) {
		if (p1[$unhandled]) emitEvent($rejectionHandled, p1);

		p2._onRejected = onRejected;
	}

	if (isLongStackTrace) p2._p = p1;
	p1[p1._c++] = p2;

	// 2.2.6
	if (p1._s !== $pending)
		scheduleHandler(p1, p2);

	// 2.2.7
	return p2;
	}

	// iterate tree
	function hashOnRejected (node) {
	// A node shouldn't be checked twice.
	if (node._umark)
		return true;
	else
		node._umark = true;

	var i = 0
		, len = node._c
		, child;

	while (i < len) {
		child = node[i++];
		if (child._onRejected || hashOnRejected(child)) return true;
	}
	}

	function genStackInfo (reason, p) {
	var stackInfo = [];

	function push (trace) {
		return stackInfo.push(trace.replace(/^\s+|\s+$/g, ''));
	}

	if (isLongStackTrace) {
		if (p[$settlerTrace])
			push(p[$settlerTrace]);

		// Hope you guys could understand how the back trace works.
		// We only have to iterate through the tree from the bottom to root.
		(function iter (node) {
			if (node && $promiseTrace in node) {
				iter(node._next);
				push(node[$promiseTrace] + '');
				iter(node._p);
			}
		})(p);
	}

	return (reason && reason.stack ? reason.stack : reason) +
		('\n' + stackInfo.join('\n')).replace($cleanStackReg, '');
	}

	function callHanler (handler, value) {
	// 2.2.5
	return handler(value);
	}

	/**
	* Resolve or reject a promise.
	* @private
	* @param  {Yaku} p
	* @param  {Integer} state
	* @param  {Any} value
	*/
	function settlePromise (p, state, value) {
	var i = 0
		, len = p._c;

	// 2.1.2
	// 2.1.3
	if (p._s === $pending) {
		// 2.1.1.1
		p._s = state;
		p._v = value;

		if (state === $rejected) {
			if (isLongStackTrace && isError(value)) {
				value.longStack = genStackInfo(value, p);
			}

			scheduleUnhandledRejection(p);
		}

		// 2.2.4
		while (i < len) {
			scheduleHandler(p, p[i++]);
		}
	}

	return p;
	}

	/**
	* Resolve or reject promise with value x. The x can also be a thenable.
	* @private
	* @param {Yaku} p
	* @param {Any | Thenable} x A normal value or a thenable.
	*/
	function settleWithX (p, x) {
	// 2.3.1
	if (x === p && x) {
		settlePromise(p, $rejected, genTypeError($promiseCircularChain));
		return p;
	}

	// 2.3.2
	// 2.3.3
	if (x !== $null && (isFunction(x) || isObject(x))) {
		// 2.3.2.1
		var xthen = genTryCatcher(getThen)(x);

		if (xthen === $tryErr) {
			// 2.3.3.2
			settlePromise(p, $rejected, xthen.e);
			return p;
		}

		if (isFunction(xthen)) {
			if (isLongStackTrace && isYaku(x))
				p._next = x;

			// Fix https://bugs.chromium.org/p/v8/issues/detail?id=4162
			if (isYaku(x))
				settleXthen(p, x, xthen);
			else
				Yaku.nextTick(function () {
					settleXthen(p, x, xthen);
				});
		} else
			// 2.3.3.4
			settlePromise(p, $resolved, x);
	} else
		// 2.3.4
		settlePromise(p, $resolved, x);

	return p;
	}

	/**
	* Try to get a promise's then method.
	* @private
	* @param  {Thenable} x
	* @return {Function}
	*/
	function getThen (x) { return x.then; }

	/**
	* Resolve then with its promise.
	* @private
	* @param  {Yaku} p
	* @param  {Thenable} x
	* @param  {Function} xthen
	*/
	function settleXthen (p, x, xthen) {
	// 2.3.3.3
	var err = genTryCatcher(xthen, x)(function (y) {
		// 2.3.3.3.3
		// 2.3.3.3.1
		x && (x = $null, settleWithX(p, y));
	}, function (r) {
		// 2.3.3.3.3
		// 2.3.3.3.2
		x && (x = $null, settlePromise(p, $rejected, r));
	});

	// 2.3.3.3.4.1
	if (err === $tryErr && x) {
		// 2.3.3.3.4.2
		settlePromise(p, $rejected, err.e);
		x = $null;
	}
	}

	root.Promise = Yaku;
})();

}

if (!("Promise"in self&&"allSettled"in self.Promise
)) {

// Promise.allSettled
/* global CreateMethodProperty, IterableToList, Promise, Type */
(function () {
	// Based on https://github.com/es-shims/Promise.allSettled/blob/main/implementation.js

	CreateMethodProperty(Promise, 'allSettled', function allSettled (iterable) {
		var C = this;
		if (Type(C) !== 'object') {
			throw new TypeError('`this` value must be an object');
		}

		var arr;
		if (Array.isArray(iterable)) {
			arr = iterable;
		} else {
			try {
				arr = IterableToList(iterable);
			} catch (_error) {
				return Promise.reject(new TypeError('Argument of Promise.allSettled is not iterable'));
			}
		}

		var promises = arr.map(function (promise) {
			var onFulfill = function (value) {
				return { status: 'fulfilled', value: value };
			};
			var onReject = function (reason) {
				return { status: 'rejected', reason: reason };
			};
			var itemPromise = C.resolve(promise);
			try {
				return itemPromise.then(onFulfill, onReject);
			} catch (e) {
				return C.reject(e);
			}
		});

		return C.all(promises);
	});
}());

}

if (!("Promise"in self&&"any"in self.Promise
)) {

// Promise.any
/* global AggregateError, CreateMethodProperty, IterableToList, Promise, Type */
(function () {
	// Based on https://github.com/es-shims/Promise.any/blob/master/implementation.js

	var identity = function (x) {
		return x;
	}

	CreateMethodProperty(Promise, 'any', function any (iterable) {
		var C = this;
		if (Type(C) !== 'object') {
			throw new TypeError('`this` value must be an object');
		}

		var arr;
		if (Array.isArray(iterable)) {
			arr = iterable;
		} else {
			try {
				arr = IterableToList(iterable);
			} catch (_error) {
				return Promise.reject(new TypeError('Argument of Promise.any is not iterable'));
			}
		}

		var thrower = function (value) {
			return C.reject(value);
		};

		var promises = arr.map(function (promise) {
			var itemPromise = C.resolve(promise);
			try {
				return itemPromise.then(thrower, identity);
			} catch (e) {
				return e;
			}
		});

		return C.all(promises).then(function (errors) {
			throw new AggregateError(errors, 'Every promise rejected')
		}, identity);
	});
}());

}

if (!("Promise"in self&&"finally"in self.Promise.prototype
)) {

// Promise.prototype.finally
/* global CreateMethodProperty, IsCallable, SpeciesConstructor, Type, Promise */
(function () {
	// Based on https://github.com/tc39/proposal-promise-finally/blob/master/polyfill.js
	var then = Function.prototype.bind.call(Function.prototype.call, Promise.prototype.then);

	var getPromise = function (C, handler) {
		return new C(function (resolve) {
			resolve(handler());
		});
	};
	// 1. Promise.prototype.finally ( onFinally )
	CreateMethodProperty(Promise.prototype, 'finally', function (onFinally) {
		// 1. Let promise be the this value.
		var promise = this;
		// 2. If Type(promise) is not Object, throw a TypeError exception.
		if (Type(promise) !== 'object') {
			throw new TypeError('Method %PromisePrototype%.finally called on incompatible receiver ' + Object.prototype.toString.call(promise));
		}
		// 3. Let C be ? SpeciesConstructor(promise, %Promise%).
		var C = SpeciesConstructor(promise, Promise);
		// 4. Assert: IsConstructor(C) is true.
		// 5. If IsCallable(onFinally) is false,
		if (IsCallable(onFinally) === false) {
			// a. Let thenFinally be onFinally.
			var thenFinally = onFinally;
			// b. Let catchFinally be onFinally.
			var catchFinally = onFinally;
			// 6. Else,
		} else {
			// a. Let thenFinally be a new built-in function object as defined in ThenFinally Function.
			thenFinally = function (x) {
				return then(getPromise(C, onFinally), function () {
					return x;
				});
			};
			// b. Let catchFinally be a new built-in function object as defined in CatchFinally Function.
			catchFinally = function (e) {
				return then(getPromise(C, onFinally), function () {
					throw e;
				});
			};
			// c. Set thenFinally and catchFinally's [[Constructor]] internal slots to C.
			// d. Set thenFinally and catchFinally's [[OnFinally]] internal slots to onFinally.
		}
		// 7. Return ? Invoke(promise, "then", « thenFinally, catchFinally »).
		return then(promise, thenFinally, catchFinally);
	});
}());

}

if (!("Symbol"in self&&"unscopables"in self.Symbol
)) {

// Symbol.unscopables
/* global Symbol */
Object.defineProperty(Symbol, 'unscopables', { value: Symbol('unscopables') });

}

if (!((function(){try{if("WeakMap"in self&&0===self.WeakMap.length){var e={},t=new self.WeakMap([[e,"test"]])
return"test"===t.get(e)&&!1===t["delete"](0)}return!1}catch(a){return!1}})()
)) {

// WeakMap
/* globals Symbol, OrdinaryCreateFromConstructor, IsCallable, GetIterator, IteratorStep, IteratorValue, IteratorClose, Get, Call, CreateMethodProperty, Type, SameValue */
(function (global) {
	// Deleted map items mess with iterator pointers, so rather than removing them mark them as deleted. Can't use undefined or null since those both valid keys so use a private symbol.
	var undefMarker = Symbol('undef');
	// 23.3.1.1 WeakMap ( [ iterable ] )
	var WeakMap = function WeakMap(/* iterable */) {
		// 1. If NewTarget is undefined, throw a TypeError exception.
		if (!(this instanceof WeakMap)) {
			throw new TypeError('Constructor WeakMap requires "new"');
		}
		// 2. Let map be ? OrdinaryCreateFromConstructor(NewTarget, "%WeakMapPrototype%", « [[WeakMapData]] »).
		var map = OrdinaryCreateFromConstructor(this, WeakMap.prototype, {
			_keys: [],
			_values: [],
			_es6WeakMap: true
		});

		// 3. Set map.[[WeakMapData]] to a new empty List.
		// Polyfill.io - This step was done as part of step two.

		// 4. If iterable is not present, let iterable be undefined.
		var iterable = arguments.length > 0 ? arguments[0] : undefined;

		// 5. If iterable is either undefined or null, return map.
		if (iterable === null || iterable === undefined) {
			return map;
		}

		// 6. Let adder be ? Get(map, "set").
		var adder = Get(map, "set");

		// 7. If IsCallable(adder) is false, throw a TypeError exception.
		if (!IsCallable(adder)) {
			throw new TypeError("WeakMap.prototype.set is not a function");
		}

		// 8. Let iteratorRecord be ? GetIterator(iterable).
		try {
			var iteratorRecord = GetIterator(iterable);
			// 9. Repeat,
			// eslint-disable-next-line no-constant-condition
			while (true) {
				// a. Let next be ? IteratorStep(iteratorRecord).
				var next = IteratorStep(iteratorRecord);
				// b. If next is false, return map.
				if (next === false) {
					return map;
				}
				// c. Let nextItem be ? IteratorValue(next).
				var nextItem = IteratorValue(next);
				// d. If Type(nextItem) is not Object, then
				if (Type(nextItem) !== 'object') {
					// i. Let error be Completion{[[Type]]: throw, [[Value]]: a newly created TypeError object, [[Target]]: empty}.
					try {
						throw new TypeError('Iterator value ' + nextItem + ' is not an entry object');
					} catch (error) {
						// ii. Return ? IteratorClose(iteratorRecord, error).
						return IteratorClose(iteratorRecord, error);
					}
				}
				try {
					// Polyfill.io - The try catch accounts for steps: f, h, and j.

					// e. Let k be Get(nextItem, "0").
					var k = Get(nextItem, "0");
					// f. If k is an abrupt completion, return ? IteratorClose(iteratorRecord, k).
					// g. Let v be Get(nextItem, "1").
					var v = Get(nextItem, "1");
					// h. If v is an abrupt completion, return ? IteratorClose(iteratorRecord, v).
					// i. Let status be Call(adder, map, « k.[[Value]], v.[[Value]] »).
					Call(adder, map, [k, v]);
				} catch (e) {
					// j. If status is an abrupt completion, return ? IteratorClose(iteratorRecord, status).
					return IteratorClose(iteratorRecord, e);
				}
			}
		} catch (e) {
			// Polyfill.io - For user agents which do not have iteration methods on argument objects or arrays, we can special case those.
			if (Array.isArray(iterable) ||
				Object.prototype.toString.call(iterable) === '[object Arguments]' ||
				// IE 7 & IE 8 return '[object Object]' for the arguments object, we can detect by checking for the existence of the callee property
				(!!iterable.callee)) {
				var index;
				var length = iterable.length;
				for (index = 0; index < length; index++) {
					k = iterable[index][0];
					v = iterable[index][1];
					Call(adder, map, [k, v]);
				}
			}
		}
		return map;
	};

	// 23.3.2.1 WeakMap.prototype
	// The initial value of WeakMap.prototype is the intrinsic object %WeakMapPrototype%.
	// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
	Object.defineProperty(WeakMap, 'prototype', {
		configurable: false,
		enumerable: false,
		writable: false,
		value: {}
	});

	// 23.3.3.1 WeakMap.prototype.constructor
	CreateMethodProperty(WeakMap.prototype, 'constructor', WeakMap);

	// 23.3.3.2 WeakMap.prototype.delete ( key )
	CreateMethodProperty(WeakMap.prototype, 'delete', function (key) {
		// 1. Let M be the this value.
		var M = this;
		// 2. If Type(M) is not Object, throw a TypeError exception.
		if (Type(M) !== 'object') {
			throw new TypeError('Method WeakMap.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
		}
		// 3. If M does not have a [[WeakMapData]] internal slot, throw a TypeError exception.
		if (M._es6WeakMap !== true) {
			throw new TypeError('Method WeakMap.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
		}
		// 4. Let entries be the List that is M.[[WeakMapData]].
		var entries = M._keys;
		// 5. If Type(key) is not Object, return false.
		if (Type(key) !== 'object') {
			return false;
		}
		// 6. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
		for (var i = 0; i < entries.length; i++) {
			// a. If p.[[Key]] is not empty and SameValue(p.[[Key]], key) is true, then
			if (M._keys[i] !== undefMarker && SameValue(M._keys[i], key)) {
				// i. Set p.[[Key]] to empty.
				this._keys[i] = undefMarker;
				// ii. Set p.[[Value]] to empty.
				this._values[i] = undefMarker;
				this._size = --this._size;
				// iii. Return true.
				return true;
			}
		}
		// 7. Return false.
		return false;
	});

	// 23.3.3.3 WeakMap.prototype.get ( key )
	CreateMethodProperty(WeakMap.prototype, 'get', function get(key) {
		// 1. Let M be the this value.
		var M = this;
		// 2. If Type(M) is not Object, throw a TypeError exception.
		if (Type(M) !== 'object') {
			throw new TypeError('Method WeakMap.prototype.get called on incompatible receiver ' + Object.prototype.toString.call(M));
		}
		// 3. If M does not have a [[WeakMapData]] internal slot, throw a TypeError exception.
		if (M._es6WeakMap !== true) {
			throw new TypeError('Method WeakMap.prototype.get called on incompatible receiver ' + Object.prototype.toString.call(M));
		}
		// 4. Let entries be the List that is M.[[WeakMapData]].
		var entries = M._keys;
		// 5. If Type(key) is not Object, return undefined.
		if (Type(key) !== 'object') {
			return undefined;
		}
		// 6. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
		for (var i = 0; i < entries.length; i++) {
			// a. If p.[[Key]] is not empty and SameValue(p.[[Key]], key) is true, return p.[[Value]].
			if (M._keys[i] !== undefMarker && SameValue(M._keys[i], key)) {
				return M._values[i];
			}
		}
		// 7. Return undefined.
		return undefined;
	});

	// 23.3.3.4 WeakMap.prototype.has ( key )
	CreateMethodProperty(WeakMap.prototype, 'has', function has(key) {
		// 1. Let M be the this value.
		var M = this;
		// 2. If Type(M) is not Object, throw a TypeError exception.
		if (typeof M !== 'object') {
			throw new TypeError('Method WeakMap.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(M));
		}
		// 3. If M does not have a [[WeakMapData]] internal slot, throw a TypeError exception.
		if (M._es6WeakMap !== true) {
			throw new TypeError('Method WeakMap.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(M));
		}
		// 4. Let entries be the List that is M.[[WeakMapData]].
		var entries = M._keys;
		// 5. If Type(key) is not Object, return false.
		if (Type(key) !== 'object') {
			return false;
		}
		// 6. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
		for (var i = 0; i < entries.length; i++) {
			// a. If p.[[Key]] is not empty and SameValue(p.[[Key]], key) is true, return true.
			if (M._keys[i] !== undefMarker && SameValue(M._keys[i], key)) {
				return true;
			}
		}
		// 7. Return false.
		return false;
	});

	// 23.3.3.5 WeakMap.prototype.set ( key, value )
	CreateMethodProperty(WeakMap.prototype, 'set', function set(key, value) {
		// 1. Let M be the this value.
		var M = this;
		// 2. If Type(M) is not Object, throw a TypeError exception.
		if (Type(M) !== 'object') {
			throw new TypeError('Method WeakMap.prototype.set called on incompatible receiver ' + Object.prototype.toString.call(M));
		}
		// 3. If M does not have a [[WeakMapData]] internal slot, throw a TypeError exception.
		if (M._es6WeakMap !== true) {
			throw new TypeError('Method WeakMap.prototype.set called on incompatible receiver ' + Object.prototype.toString.call(M));
		}
		// 4. Let entries be the List that is M.[[WeakMapData]].
		var entries = M._keys;
		// 5. If Type(key) is not Object, throw a TypeError exception.
		if (Type(key) !== 'object') {
			throw new TypeError("Invalid value used as weak map key");
		}
		// 6. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
		for (var i = 0; i < entries.length; i++) {
			// a. If p.[[Key]] is not empty and SameValue(p.[[Key]], key) is true, then
			if (M._keys[i] !== undefMarker && SameValue(M._keys[i], key)) {
				// i. Set p.[[Value]] to value.
				M._values[i] = value;
				// ii. Return M.
				return M;
			}
		}
		// 7. Let p be the Record {[[Key]]: key, [[Value]]: value}.
		var p = {
			'[[Key]]': key,
			'[[Value]]': value
		};
		// 8. Append p as the last element of entries.
		M._keys.push(p['[[Key]]']);
		M._values.push(p['[[Value]]']);
		// 9. Return M.
		return M;
	});

	// 23.3.3.6 WeakMap.prototype [ @@toStringTag ]
	// The initial value of the @@toStringTag property is the String value "WeakMap".
	// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.
	Object.defineProperty(WeakMap.prototype, Symbol.toStringTag, {
		configurable: true,
		enumerable: false,
		writable: false,
		value: 'WeakMap'
	});

	// Polyfill.io - Safari 8 implements WeakMap.name but as a non-writable property, which means it would throw an error if we try and write to it here.
	if (!('name' in WeakMap)) {
		// 19.2.4.2 name
		Object.defineProperty(WeakMap, 'name', {
			configurable: true,
			enumerable: false,
			writable: false,
			value: 'WeakMap'
		});
	}

	// Export the object
	try {
		CreateMethodProperty(global, 'WeakMap', WeakMap);
	} catch (e) {
		// IE8 throws an error here if we set enumerable to false.
		// More info on table 2: https://msdn.microsoft.com/en-us/library/dd229916(v=vs.85).aspx
		global.WeakMap = WeakMap;
	}
}(self));

}

if (!((function(e){try{if(Object.prototype.hasOwnProperty.call(e,"WeakSet")&&0===e.WeakSet.length){var t={},r=new e.WeakSet([t])
return r.has(t)&&!1===r["delete"](0)}return!1}catch(a){return!1}})(self)
)) {

// WeakSet
/* global Call, CreateMethodProperty, Get, GetIterator, IsArray, IsCallable, IteratorClose, IteratorStep, IteratorValue, OrdinaryCreateFromConstructor, SameValueZero, Type, Symbol */
(function (global) {
	// Deleted set items mess with iterator pointers, so rather than removing them mark them as deleted. Can't use undefined or null since those both valid keys so use a private symbol.
	var undefMarker = Symbol('undef');
	// 23.4.1.1. WeakSet ( [ iterable ] )
	var WeakSet = function WeakSet() {
		// 1. If NewTarget is undefined, throw a TypeError exception.
		if (!(this instanceof WeakSet)) {
			throw new TypeError('Constructor WeakSet requires "new"');
		}
		// 2. Let set be ? OrdinaryCreateFromConstructor(NewTarget, "%WeakSetPrototype%", « [[WeakSetData]] »).
		var set = OrdinaryCreateFromConstructor(this, WeakSet.prototype, {
			_values: [],
			_size: 0,
			_es6WeakSet: true
		});

		// 3. Set set.[[WeakSetData]] to a new empty List.
		// Polyfill.io - This step was done as part of step two.

		// 4. If iterable is not present, let iterable be undefined.
		var iterable = arguments.length > 0 ? arguments[0] : undefined;
		// 5. If iterable is either undefined or null, return set.
		if (iterable === null || iterable === undefined) {
			return set;
		}
		// 6. Let adder be ? Get(set, "add").
		var adder = Get(set, 'add');
		// 7. If IsCallable(adder) is false, throw a TypeError exception.
		if (!IsCallable(adder)) {
			throw new TypeError("WeakSet.prototype.add is not a function");
		}
		try {
			// 8. Let iteratorRecord be ? GetIterator(iterable).
			var iteratorRecord = GetIterator(iterable);
			// 9. Repeat,
			// eslint-disable-next-line no-constant-condition
			while (true) {
				// a. Let next be ? IteratorStep(iteratorRecord).
				var next = IteratorStep(iteratorRecord);
				// b. If next is false, return set.
				if (next === false) {
					return set;
				}
				// c. Let nextValue be ? IteratorValue(next).
				var nextValue = IteratorValue(next);
				// d. Let status be Call(adder, set, « nextValue »).
				try {
					Call(adder, set, [nextValue]);
				} catch (e) {
					// e. If status is an abrupt completion, return ? IteratorClose(iteratorRecord, status).
					return IteratorClose(iteratorRecord, e);
				}
			}
		} catch (e) {
			// Polyfill.io - For user agents which do not have iteration methods on argument objects or arrays, we can special case those.
			if (IsArray(iterable) ||
				Object.prototype.toString.call(iterable) === '[object Arguments]' ||
				// IE 7 & IE 8 return '[object Object]' for the arguments object, we can detect by checking for the existence of the callee property
				(!!iterable.callee)) {
				var index;
				var length = iterable.length;
				for (index = 0; index < length; index++) {
					Call(adder, set, [iterable[index]]);
				}
			}
		}
		return set;
	};

	// 23.4.2.1. WeakSet.prototype
	// The initial value of WeakSet.prototype is the intrinsic %WeakSetPrototype% object.
	// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
	Object.defineProperty(WeakSet, 'prototype', {
		configurable: false,
		enumerable: false,
		writable: false,
		value: {}
	});

	// 23.4.3.1. WeakSet.prototype.add ( value )
	CreateMethodProperty(WeakSet.prototype, 'add', function add(value) {
		// 1. Let S be the this value.
		var S = this;
		// 2. If Type(S) is not Object, throw a TypeError exception.
		if (Type(S) !== 'object') {
			throw new TypeError('Method WeakSet.prototype.add called on incompatible receiver ' + Object.prototype.toString.call(S));
		}
		// 3. If S does not have a [[WeakSetData]] internal slot, throw a TypeError exception.
		if (S._es6WeakSet !== true) {
			throw new TypeError('Method WeakSet.prototype.add called on incompatible receiver ' + Object.prototype.toString.call(S));
		}
		// 4. If Type(value) is not Object, throw a TypeError exception.
		if (Type(value) !== 'object') {
			throw new TypeError('Invalid value used in weak set');
		}
		// 5. Let entries be the List that is S.[[WeakSetData]].
		var entries = S._values;
		// 6. For each e that is an element of entries, do
		for (var i = 0; i < entries.length; i++) {
			var e = entries[i];
			// a. If e is not empty and SameValue(e, value) is true, then
			if (e !== undefMarker && SameValueZero(e, value)) {
				// i. Return S.
				return S;
			}
		}
		// 7. Append value as the last element of entries.
		S._values.push(value);
		// 8. Return S.
		return S;
	});

	// 23.4.3.2. WeakSet.prototype.constructor
	CreateMethodProperty(WeakSet.prototype, 'constructor', WeakSet);

	// 23.4.3.3. WeakSet.prototype.delete ( value )
	CreateMethodProperty(WeakSet.prototype, 'delete', function (value) {
		// 1. Let S be the this value.
		var S = this;
		// 2. If Type(S) is not Object, throw a TypeError exception.
		if (Type(S) !== 'object') {
			throw new TypeError('Method WeakSet.prototype.delete called on incompatible receiver ' + Object.prototype.toString.call(S));
		}
		// 3. If S does not have a [[WeakSetData]] internal slot, throw a TypeError exception.
		if (S._es6WeakSet !== true) {
			throw new TypeError('Method WeakSet.prototype.delete called on incompatible receiver ' + Object.prototype.toString.call(S));
		}
		// 4. If Type(value) is not Object, return false.
		if (Type(value) !== 'object') {
			return false;
		}
		// 5. Let entries be the List that is S.[[WeakSetData]].
		var entries = S._values;
		// 6. For each e that is an element of entries, do
		for (var i = 0; i < entries.length; i++) {
			var e = entries[i];
			// a. If e is not empty and SameValue(e, value) is true, then
			if (e !== undefMarker && SameValueZero(e, value)) {
				// i. Replace the element of entries whose value is e with an element whose value is empty.
				entries[i] = undefMarker;
				// ii. Return true.
				return true;
			}
		}
		// 7. Return false.
		return false;
	});

	// 23.4.3.4. WeakSet.prototype.has ( value )
	CreateMethodProperty(WeakSet.prototype, 'has', function has(value) {
		// 1. Let S be the this value.
		var S = this;
		// 2. If Type(S) is not Object, throw a TypeError exception.
		if (Type(S) !== 'object') {
			throw new TypeError('Method WeakSet.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(S));
		}
		// 3. If S does not have a [[WeakSetData]] internal slot, throw a TypeError exception.
		if (S._es6WeakSet !== true) {
			throw new TypeError('Method WeakSet.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(S));
		}
		// 4. Let entries be the List that is S.[[WeakSetData]].
		var entries = S._values;
		// 5. If Type(value) is not Object, return false.
		if (Type(value) !== 'object') {
			return false;
		}
		// 6. For each e that is an element of entries, do
		for (var i = 0; i < entries.length; i++) {
			var e = entries[i];
			// a. If e is not empty and SameValue(e, value) is true, return true.
			if (e !== undefMarker && SameValueZero(e, value)) {
				return true;
			}
		}
		// 7. Return false.
		return false;
	});

	// 23.4.3.5. WeakSet.prototype [ @@toStringTag ]
	// The initial value of the @@toStringTag property is the String value "WeakSet".
	// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.

	// Polyfill.io - Safari 8 implements Set.name but as a non-configurable property, which means it would throw an error if we try and configure it here.
	if (!('name' in WeakSet)) {
		// 19.2.4.2 name
		Object.defineProperty(WeakSet, 'name', {
			configurable: true,
			enumerable: false,
			writable: false,
			value: 'WeakSet'
		});
	}

	// Export the object
	try {
		CreateMethodProperty(global, 'WeakSet', WeakSet);
	} catch (e) {
		// IE8 throws an error here if we set enumerable to false.
		// More info on table 2: https://msdn.microsoft.com/en-us/library/dd229916(v=vs.85).aspx
		global.WeakSet = WeakSet;
	}

}(self));

}


// _ESAbstract.EnumerableOwnProperties
/* globals Type, Get */
// 7.3.21. EnumerableOwnProperties ( O, kind )
function EnumerableOwnProperties(O, kind) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(O) is Object.
	// 2. Let ownKeys be ? O.[[OwnPropertyKeys]]().
	var ownKeys = Object.keys(O);
	// 3. Let properties be a new empty List.
	var properties = [];
	// 4. For each element key of ownKeys in List order, do
	var length = ownKeys.length;
	for (var i = 0; i < length; i++) {
		var key = ownKeys[i];
		// a. If Type(key) is String, then
		if (Type(key) === 'string') {
			// i. Let desc be ? O.[[GetOwnProperty]](key).
			var desc = Object.getOwnPropertyDescriptor(O, key);
			// ii. If desc is not undefined and desc.[[Enumerable]] is true, then
			if (desc && desc.enumerable) {
				// 1. If kind is "key", append key to properties.
				if (kind === 'key') {
					properties.push(key);
					// 2. Else,
				} else {
					// a. Let value be ? Get(O, key).
					var value = Get(O, key);
					// b. If kind is "value", append value to properties.
					if (kind === 'value') {
						properties.push(value);
						// c. Else,
					} else {
						// i. Assert: kind is "key+value".
						// ii. Let entry be CreateArrayFromList(« key, value »).
						var entry = [key, value];
						// iii. Append entry to properties.
						properties.push(entry);
					}
				}
			}
		}
	}
	// 5. Order the elements of properties so they are in the same relative order as would be produced by the Iterator that would be returned if the EnumerateObjectProperties internal method were invoked with O.
	// 6. Return properties.
	return properties;
}
if (!("entries"in Object
)) {

// Object.entries
/* global CreateMethodProperty, EnumerableOwnProperties, ToObject, Type */

(function () {
	var toString = ({}).toString;
	var split = ''.split;

	// 19.1.2.5. Object.entries ( O )
	CreateMethodProperty(Object, 'entries', function entries(O) {
		// 1. Let obj be ? ToObject(O).
		var obj = ToObject(O);
		// Polyfill.io fallback for non-array-like strings which exist in some ES3 user-agents (IE 8)
		obj = (Type(obj) === 'string' || obj instanceof String) && toString.call(O) == '[object String]' ? split.call(O, '') : Object(O);
		// 2. Let nameList be ? EnumerableOwnProperties(obj, "key+value").
		var nameList = EnumerableOwnProperties(obj, "key+value");
		// 3. Return CreateArrayFromList(nameList).
		// Polyfill.io - nameList is already an array.
		return nameList;
	});
}());

}


// _ESAbstract.TrimString
/* eslint-disable no-control-regex */
/* global RequireObjectCoercible, ToString */
// TrimString ( string, where )
function TrimString(string, where) { // eslint-disable-line no-unused-vars
	// 1. Let str be ? RequireObjectCoercible(string).
	var str = RequireObjectCoercible(string);
	// 2. Let S be ? ToString(str).
	var S = ToString(str);
	// 3. If where is "start", let T be a String value that is a copy of S with leading white space removed.
	// The definition of white space is the union of WhiteSpace and LineTerminator. When determining whether a Unicode code point is in Unicode general category “Space_Separator” (“Zs”), code unit sequences are interpreted as UTF-16 encoded code point sequences as specified in 6.1.4.
	var whitespace = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/.source;
	if (where === 'start') {
		var T = String.prototype.replace.call(S, new RegExp('^' + whitespace, 'g'), '');
		// 4. Else if where is "end", let T be a String value that is a copy of S with trailing white space removed.
	} else if (where === "end") {
		T = String.prototype.replace.call(S, new RegExp(whitespace + '$', 'g'), '');
		// 5. Else,
	} else {
		// a. Assert: where is "start+end".
		// b. Let T be a String value that is a copy of S with both leading and trailing white space removed.
		T = String.prototype.replace.call(S, new RegExp('^' + whitespace + '|' + whitespace + '$', 'g'), '');
	}
	// 6. Return T.
	return T;
}
if (!("trim"in String.prototype&&function(){var r="​᠎"
return!"\t\n\x0B\f\r                　\u2028\u2029\ufeff".trim()&&r.trim()===r}()
)) {

// String.prototype.trim
/* global CreateMethodProperty, TrimString */
// 21.1.3.27. String.prototype.trim ( )
CreateMethodProperty(String.prototype, 'trim', function trim() {
	'use strict';
	// Let S be this value.
	var S = this;
	// Return ? TrimString(S, "start+end").
	return TrimString(S, "start+end");
});

}

if (!("parseFloat"in Number&&1/parseFloat("\t\n\x0B\f\r                　\u2028\u2029\ufeff-0")==-Infinity
)) {

// Number.parseFloat
/* global CreateMethodProperty */
(function (nativeparseFloat, global) {
	var parseFloat = function parseFloat(str) {
		var string = String(str).trim();
		var result = nativeparseFloat(string);
		return result === 0 && string.charAt(0) == '-' ? -0 : result;
	}
	try {
		CreateMethodProperty(global, 'parseFloat', parseFloat);
	} catch (e) {
		// IE8 throws an error here if we set enumerable to false.
		// More info on table 2: https://msdn.microsoft.com/en-us/library/dd229916(v=vs.85).aspx
		global.parseFloat = parseFloat;
	}
	// 20.1.2.12. Number.parseFloat ( string )
	// The value of the Number.parseFloat data property is the same built-in function object that is the value of the  parseFloat property of the global object defined in 18.2.4.
	CreateMethodProperty(Number, 'parseFloat', global.parseFloat);
}(parseFloat, this));

}

if (!("parseInt"in Number&&8===Number.parseInt("08")
)) {

// Number.parseInt
/* global CreateMethodProperty */
(function (nativeParseInt, global) {
	// Polyfill.io - IE 8's parseInt is incorrect
	var parseInt = function parseInt(str, radix) {
		var string = String(str).trim();
		return nativeParseInt(string, (radix >>> 0) || (/^[-+]?0[xX]/.test(string) ? 16 : 10));
	}
	try {
		CreateMethodProperty(global, 'parseInt', parseInt);
	} catch (e) {
		// IE8 throws an error here if we set enumerable to false.
		// More info on table 2: https://msdn.microsoft.com/en-us/library/dd229916(v=vs.85).aspx
		global.parseInt = parseInt;
	}
	// 20.1.2.13. Number.parseInt ( string, radix )
	// The value of the Number.parseInt data property is the same built-in function object that is the value of the  parseInt property of the global object defined in 18.2.5.
	CreateMethodProperty(Number, 'parseInt', global.parseInt);
}(parseInt, this));

}

if (!("trimEnd"in String.prototype&&function(){var n="​᠎"
return!"\t\n\x0B\f\r                　\u2028\u2029\ufeff".trimEnd()&&n.trimEnd()===n}()
)) {

// String.prototype.trimEnd
/* global CreateMethodProperty, TrimString */
// 21.1.3.28 String.prototype.trimEnd ( )
CreateMethodProperty(String.prototype, 'trimEnd', function trimEnd() {
	'use strict';
	// 1. Let S be this value.
	var S = this;
	// 2. Return ? TrimString(S, "end").
	return TrimString(S, "end");
});

}

if (!("trimStart"in String.prototype&&function(){var t="​᠎"
return!"\t\n\x0B\f\r                　\u2028\u2029\ufeff".trimStart()&&t.trimStart()===t}()
)) {

// String.prototype.trimStart
/* global CreateMethodProperty, TrimString */
// 21.1.3.29 String.prototype.trimStart ( )
CreateMethodProperty(String.prototype, 'trimStart', function trimStart() {
	'use strict';
	// 1. Let S be this value.
	var S = this;
	// 2. Return ? TrimString(S, "start").
	return TrimString(S, "start");
});

}


// _ESAbstract.UTF16Decode
// 10.1.2. Static Semantics: UTF16Decode( lead, trail )
function UTF16Decode(lead, trail) { // eslint-disable-line no-unused-vars
	// 1. Assert: 0xD800 ≤ lead ≤ 0xDBFF and 0xDC00 ≤ trail ≤ 0xDFFF.
	// 2. Let cp be (lead - 0xD800) × 0x400 + (trail - 0xDC00) + 0x10000.
	var cp = (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
	// 3. Return the code point cp.
	return cp;
}
if (!("codePointAt"in String.prototype
)) {

// String.prototype.codePointAt
/* global CreateMethodProperty, RequireObjectCoercible, ToInteger, ToString, UTF16Decode */
// 21.1.3.3. String.prototype.codePointAt ( pos )
CreateMethodProperty(String.prototype, 'codePointAt', function codePointAt(pos) {
	// 1. Let O be ? RequireObjectCoercible(this value).
	var O = RequireObjectCoercible(this);
	// 2. Let S be ? ToString(O).
	var S = ToString(O);
	// 3. Let position be ? ToInteger(pos).
	var position = ToInteger(pos);
	// 4. Let size be the length of S.
	var size = S.length;
	// 5. If position < 0 or position ≥ size, return undefined.
	if (position < 0 || position >= size) {
		return undefined;
	}
	// 6. Let first be the numeric value of the code unit at index position within the String S.
	var first = String.prototype.charCodeAt.call(S, position);
	// 7. If first < 0xD800 or first > 0xDBFF or position+1 = size, return first.
	if (first < 0xD800 || first > 0xDBFF || position + 1 === size) {
		return first;
	}
	// 8. Let second be the numeric value of the code unit at index position+1 within the String S.
	var second = String.prototype.charCodeAt.call(S, position + 1);
	// 9. If second < 0xDC00 or second > 0xDFFF, return first.
	if (second < 0xDC00 || second > 0xDFFF) {
		return first;
	}
	// 10. Return UTF16Decode(first, second).
	// 21.1.3.3.10 Return UTF16Decode(first, second).
	return UTF16Decode(first, second);
});

}


// _ESAbstract.AdvanceStringIndex
/* global */

// 22.2.5.2.3 AdvanceStringIndex ( S, index, unicode )
function AdvanceStringIndex(S, index, unicode) { // eslint-disable-line no-unused-vars
	// 1. Assert: index ≤ 253 - 1.
	if (index > Number.MAX_SAFE_INTEGER) {
		throw new TypeError('Assertion failed: `index` must be <= 2**53');
	}
	// 2. If unicode is false, return index + 1.
	if (unicode === false) {
		return index + 1;
	}
	// 3. Let length be the number of code units in S.
	var length = S.length;
	// 4. If index + 1 ≥ length, return index + 1.
	if (index + 1 >= length) {
		return index + 1;
	}
	// 5. Let cp be ! CodePointAt(S, index).
	var cp = S.codePointAt(index);
	// 6. Return index + cp.[[CodeUnitCount]].
	return index + cp.length;
}

// _ESAbstract.CreateRegExpStringIterator
/* global AdvanceStringIndex, CreateIterResultObject, CreateMethodProperty, Get, RegExpExec, Symbol, ToLength, ToString */

// 22.2.7.1 CreateRegExpStringIterator ( R, S, global, fullUnicode )
function CreateRegExpStringIterator(R, S, global, fullUnicode) { // eslint-disable-line no-unused-vars
	// 22.2.7.2 The %RegExpStringIteratorPrototype% Object
	var RegExpStringIteratorPrototype = {}

	// 22.2.7.2.1 %RegExpStringIteratorPrototype%.next ( )
	CreateMethodProperty(RegExpStringIteratorPrototype, 'next', function next() {
		// 1. Let closure be a new Abstract Closure with no parameters that captures R, S, global, and fullUnicode and performs the following steps when called:
		// 1.a. Repeat,
		// 2. Return ! CreateIteratorFromClosure(closure, "%RegExpStringIteratorPrototype%", %RegExpStringIteratorPrototype%).

		if (this['[[Done]]'] === true) {
			return CreateIterResultObject(undefined, true);
		}

		// 1.a.i. Let match be ? RegExpExec(R, S).
		var match = RegExpExec(R, S);
		// 1.a.ii. If match is null, return undefined.
		if (match === null) {
			this['[[Done]]'] = true;
			return CreateIterResultObject(undefined, true);
		}
		// 1.a.iii. If global is false, then
		if (global === false) {
			// 1.a.iii.1. Perform ? Yield(match).
			// 1.a.iii.2. Return undefined.
			var result = CreateIterResultObject(match, false);
			this['[[Done]]'] = true;
			return result;
		}
		// 1.a.iv. Let matchStr be ? ToString(? Get(match, "0")).
		var matchStr = ToString(Get(match, '0'));
		// 1.a.v. If matchStr is the empty String, then
		if (matchStr === '') {
			// 1.a.v.1. Let thisIndex be ℝ(? ToLength(? Get(R, "lastIndex"))).
			var thisIndex = ToLength(Get(R, 'lastIndex'));
			// 1.a.v.2. Let nextIndex be ! AdvanceStringIndex(S, thisIndex, fullUnicode).
			var nextIndex = AdvanceStringIndex(S, thisIndex, fullUnicode);
			// 1.a.v.3. Perform ? Set(R, "lastIndex", 𝔽(nextIndex), true).
			R.lastIndex = nextIndex;
		}
		// 1.a.vi. Perform ? Yield(match).
		return CreateIterResultObject(match, false);
	});

	// 22.2.7.2.2 %RegExpStringIteratorPrototype% [ @@toStringTag ]
	Object.defineProperty(RegExpStringIteratorPrototype, Symbol.toStringTag, {
		configurable: true,
		enumerable: false,
		writable: false,
		value: 'RegExp String Iterator'
	});

	CreateMethodProperty(RegExpStringIteratorPrototype, Symbol.iterator, function iterator() {
			return this;
		}
	);

	return RegExpStringIteratorPrototype;
}
if (!("Symbol"in self&&"matchAll"in self.Symbol&&!!RegExp.prototype[self.Symbol.matchAll]
)) {

// RegExp.prototype.@@matchAll
/* global Construct, CreateMethodProperty, CreateRegExpStringIterator, Get, SpeciesConstructor, Symbol, ToLength, ToString, Type */

var supportsRegexpLiteralConstructorWithFlags = (function () {
	try {
		new RegExp(/x/, 'g')
		return true
	} catch (ignore) {
		return false
	}
})();

// 22.2.5.8 RegExp.prototype [ @@matchAll ] ( string )
CreateMethodProperty(RegExp.prototype, Symbol.matchAll, function (string) {
	'use strict';
	// 1. Let R be the this value.
	var R = this;
	// 2. If Type(R) is not Object, throw a TypeError exception.
	if (Type(R) !== 'object') {
		throw new TypeError('Method called on incompatible type: must be an object.');
	}
	// 3. Let S be ? ToString(string).
	var S = ToString(string);
	// 4. Let C be ? SpeciesConstructor(R, %RegExp%).
	var C = SpeciesConstructor(R, RegExp);
	// 5. Let flags be ? ToString(? Get(R, "flags")).
	var flags = ToString(Get(R, 'flags'));
	// IE8 doesn't have RegExp.prototype.flags support
	if (!('flags' in RegExp.prototype)) {
		flags = '';
		if (R.global === true) {
			flags += 'g';
		}
		if (R.ignoreCase === true) {
			flags += 'i';
		}
		if (R.multiline === true) {
			flags += 'm';
		}
	}
	// 6. Let matcher be ? Construct(C, « R, flags »).
	var matcher = Construct(C, [ supportsRegexpLiteralConstructorWithFlags ? R : R.source, flags ]);
	// 7. Let lastIndex be ? ToLength(? Get(R, "lastIndex")).
	var lastIndex = ToLength(Get(R, 'lastIndex'));
	// 8. Perform ? Set(matcher, "lastIndex", lastIndex, true).
	matcher.lastIndex = lastIndex;
	// 9. If flags contains "g", let global be true.
	// 10. Else, let global be false.
	var global = flags.indexOf('g') > -1;
	// 11. If flags contains "u", let fullUnicode be true.
	// 12. Else, let fullUnicode be false.
	var fullUnicode = flags.indexOf('u') > -1;
	// 13. Return ! CreateRegExpStringIterator(matcher, S, global, fullUnicode).
	return CreateRegExpStringIterator(matcher, S, global, fullUnicode);
});

}

if (!("matchAll"in String.prototype
)) {

// String.prototype.matchAll
/* global Call, CreateMethodProperty, Get, GetMethod, Invoke, IsRegExp, RequireObjectCoercible, ToString */

// 22.1.3.13 String.prototype.matchAll ( regexp )
CreateMethodProperty(String.prototype, 'matchAll', function matchAll(regexp) {
	'use strict';
	// 1. Let O be ? RequireObjectCoercible(this value).
	var O = RequireObjectCoercible(this);
	// 2. If regexp is neither undefined nor null, then
	if (regexp !== undefined && regexp !== null) {
		// 2.a. Let isRegExp be ? IsRegExp(regexp).
		var isRegExp = IsRegExp(regexp);
		// 2.b. If isRegExp is true, then
		if (isRegExp) {
			// 2.b.i. Let flags be ? Get(regexp, "flags").
			var flags = Get(regexp, "flags");

			// IE8 doesn't have RegExp.prototype.flags support, it does have RegExp.prototype.global
			// 2.b.iii. If ? ToString(flags) does not contain "g", throw a TypeError exception.
			if (!('flags' in RegExp.prototype) && regexp.global !== true) {
				throw TypeError('');
			} else if ('flags' in RegExp.prototype) {
				// 2.b.ii. Perform ? RequireObjectCoercible(flags).
				RequireObjectCoercible(flags)
				// 2.b.iii. If ? ToString(flags) does not contain "g", throw a TypeError exception.
				if (ToString(flags).indexOf('g') === -1) {
					throw TypeError('');
				}
			}
		}
		// 2.c. Let matcher be ? GetMethod(regexp, @@matchAll).
		var matcher = 'Symbol' in self && 'matchAll' in self.Symbol ? GetMethod(regexp, self.Symbol.matchAll) : undefined;
		// 2.d. If matcher is not undefined, then
		if (matcher !== undefined) {
			// 2.d.i. Return ? Call(matcher, regexp, « O »).
			return Call(matcher, regexp, [ O ]);
		}
	}
	// 3. Let S be ? ToString(O).
	var S = ToString(O);
	// 4. Let rx be ? RegExpCreate(regexp, "g").
	var rx = new RegExp(regexp, 'g');
	// 5. Return ? Invoke(rx, @@matchAll, « S »).
	return Invoke(rx, 'Symbol' in self && 'matchAll' in self.Symbol && self.Symbol.matchAll, [ S ]);
});

}


// _ESAbstract.UTF16Encoding
// 10.1.1. Static Semantics: UTF16Encoding ( cp )
function UTF16Encoding(cp) { // eslint-disable-line no-unused-vars
	// 1. Assert: 0 ≤ cp ≤ 0x10FFFF.
	// 2. If cp ≤ 0xFFFF, return cp.
	if (cp <= 0xFFFF) {
		return cp;
	} else {
		// 3. Let cu1 be floor((cp - 0x10000) / 0x400) + 0xD800.
		var cu1 = Math.floor((cp - 0x10000) / 0x400) + 0xD800;
		// 4. Let cu2 be ((cp - 0x10000) modulo 0x400) + 0xDC00.
		var cu2 = ((cp - 0x10000) % 0x400) + 0xDC00;
		// 5. Return the code unit sequence consisting of cu1 followed by cu2.
		return [cu1, cu2];
	}
}
if (!("fromCodePoint"in String&&1===String.fromCodePoint.length
)) {

// String.fromCodePoint
/* global CreateMethodProperty, IsArray, SameValue, ToInteger, ToNumber, UTF16Encoding */

// 21.1.2.2. String.fromCodePoint ( ...codePoints )
CreateMethodProperty(String, 'fromCodePoint', function fromCodePoint(_) {
	// Polyfill.io - List to store the characters whilst iterating over the code points.
	var result = [];
	// 1. Let codePoints be a List containing the arguments passed to this function.
	var codePoints = arguments;
	// 2. Let length be the number of elements in codePoints.
	var length = arguments.length;
	// 3. Let elements be a new empty List.
	var elements = [];
	// 4. Let nextIndex be 0.
	var nextIndex = 0;
	// 5. Repeat, while nextIndex < length
	while (nextIndex < length) {
		// Polyfill.io - We reset the elements List as we store the partial results in the result List.
		elements = [];
		// a. Let next be codePoints[nextIndex].
		var next = codePoints[nextIndex];
		// b. Let nextCP be ? ToNumber(next).
		var nextCP = ToNumber(next);
		// c. If SameValue(nextCP, ToInteger(nextCP)) is false, throw a RangeError exception.
		if (SameValue(nextCP, ToInteger(nextCP)) === false) {
			throw new RangeError('Invalid code point ' + Object.prototype.toString.call(nextCP));
		}
		// d. If nextCP < 0 or nextCP > 0x10FFFF, throw a RangeError exception.
		if (nextCP < 0 || nextCP > 0x10FFFF) {
			throw new RangeError('Invalid code point ' + Object.prototype.toString.call(nextCP));
		}
		// e. Append the elements of the UTF16Encoding of nextCP to the end of elements.
		// Polyfill.io - UTF16Encoding can return a single codepoint or a list of multiple codepoints.
		var cp = UTF16Encoding(nextCP);
		if (IsArray(cp)) {
			elements = elements.concat(cp);
		} else {
			elements.push(cp);
		}
		// f. Let nextIndex be nextIndex + 1.
		nextIndex = nextIndex + 1;

		// Polyfill.io - Retrieving the characters whilst iterating enables the function to work in a memory efficient and performant way.
		result.push(String.fromCharCode.apply(null, elements));
	}
	// 6. Return the String value whose elements are, in order, the elements in the List elements. If length is 0, the empty string is returned.
	return length === 0 ? '' : result.join('');
});

}


// _Iterator
/* global Symbol */
// A modification of https://github.com/medikoo/es6-iterator
// Copyright (C) 2013-2015 Mariusz Nowak (www.medikoo.com)

var Iterator = (function () { // eslint-disable-line no-unused-vars
	var clear = function () {
		this.length = 0;
		return this;
	};
	var callable = function (fn) {
		if (typeof fn !== 'function') throw new TypeError(fn + " is not a function");
		return fn;
	};

	var Iterator = function (list, context) {
		if (!(this instanceof Iterator)) {
			return new Iterator(list, context);
		}
		Object.defineProperties(this, {
			__list__: {
				writable: true,
				value: list
			},
			__context__: {
				writable: true,
				value: context
			},
			__nextIndex__: {
				writable: true,
				value: 0
			}
		});
		if (!context) return;
		callable(context.on);
		context.on('_add', this._onAdd.bind(this));
		context.on('_delete', this._onDelete.bind(this));
		context.on('_clear', this._onClear.bind(this));
	};

	Object.defineProperties(Iterator.prototype, Object.assign({
		constructor: {
			value: Iterator,
			configurable: true,
			enumerable: false,
			writable: true
		},
		_next: {
			value: function () {
				var i;
				if (!this.__list__) return;
				if (this.__redo__) {
					i = this.__redo__.shift();
					if (i !== undefined) return i;
				}
				if (this.__nextIndex__ < this.__list__.length) return this.__nextIndex__++;
				this._unBind();
			},
			configurable: true,
			enumerable: false,
			writable: true
		},
		next: {
			value: function () {
				return this._createResult(this._next());
			},
			configurable: true,
			enumerable: false,
			writable: true
		},
		_createResult: {
			value: function (i) {
				if (i === undefined) return {
					done: true,
					value: undefined
				};
				return {
					done: false,
					value: this._resolve(i)
				};
			},
			configurable: true,
			enumerable: false,
			writable: true
		},
		_resolve: {
			value: function (i) {
				return this.__list__[i];
			},
			configurable: true,
			enumerable: false,
			writable: true
		},
		_unBind: {
			value: function () {
				this.__list__ = null;
				delete this.__redo__;
				if (!this.__context__) return;
				this.__context__.off('_add', this._onAdd.bind(this));
				this.__context__.off('_delete', this._onDelete.bind(this));
				this.__context__.off('_clear', this._onClear.bind(this));
				this.__context__ = null;
			},
			configurable: true,
			enumerable: false,
			writable: true
		},
		toString: {
			value: function () {
				return '[object Iterator]';
			},
			configurable: true,
			enumerable: false,
			writable: true
		}
	}, {
		_onAdd: {
			value: function (index) {
				if (index >= this.__nextIndex__) return;
				++this.__nextIndex__;
				if (!this.__redo__) {
					Object.defineProperty(this, '__redo__', {
						value: [index],
						configurable: true,
						enumerable: false,
						writable: false
					});
					return;
				}
				this.__redo__.forEach(function (redo, i) {
					if (redo >= index) this.__redo__[i] = ++redo;
				}, this);
				this.__redo__.push(index);
			},
			configurable: true,
			enumerable: false,
			writable: true
		},
		_onDelete: {
			value: function (index) {
				var i;
				if (index >= this.__nextIndex__) return;
				--this.__nextIndex__;
				if (!this.__redo__) return;
				i = this.__redo__.indexOf(index);
				if (i !== -1) this.__redo__.splice(i, 1);
				this.__redo__.forEach(function (redo, i) {
					if (redo > index) this.__redo__[i] = --redo;
				}, this);
			},
			configurable: true,
			enumerable: false,
			writable: true
		},
		_onClear: {
			value: function () {
				if (this.__redo__) clear.call(this.__redo__);
				this.__nextIndex__ = 0;
			},
			configurable: true,
			enumerable: false,
			writable: true
		}
	}));

	Object.defineProperty(Iterator.prototype, Symbol.iterator, {
		value: function () {
			return this;
		},
		configurable: true,
		enumerable: false,
		writable: true
	});
	Object.defineProperty(Iterator.prototype, Symbol.toStringTag, {
		value: 'Iterator',
		configurable: false,
		enumerable: false,
		writable: true
	});

	return Iterator;
}());

// _ArrayIterator
/* global Iterator */
// A modification of https://github.com/medikoo/es6-iterator
// Copyright (C) 2013-2015 Mariusz Nowak (www.medikoo.com)

var ArrayIterator = (function() { // eslint-disable-line no-unused-vars

	var ArrayIterator = function(arr, kind) {
		if (!(this instanceof ArrayIterator)) return new ArrayIterator(arr, kind);
		Iterator.call(this, arr);
		if (!kind) kind = 'value';
		else if (String.prototype.includes.call(kind, 'key+value')) kind = 'key+value';
		else if (String.prototype.includes.call(kind, 'key')) kind = 'key';
		else kind = 'value';
		Object.defineProperty(this, '__kind__', {
			value: kind,
			configurable: false,
			enumerable: false,
			writable: false
		});
	};
	if (Object.setPrototypeOf) Object.setPrototypeOf(ArrayIterator, Iterator.prototype);

	ArrayIterator.prototype = Object.create(Iterator.prototype, {
		constructor: {
			value: ArrayIterator,
			configurable: true,
			enumerable: false,
			writable: true
		},
		_resolve: {
			value: function(i) {
				if (this.__kind__ === 'value') return this.__list__[i];
				if (this.__kind__ === 'key+value') return [i, this.__list__[i]];
				return i;
			},
			configurable: true,
			enumerable: false,
			writable: true
		},
		toString: {
			value: function() {
				return '[object Array Iterator]';
			},
			configurable: true,
			enumerable: false,
			writable: true
		}
	});

	return ArrayIterator;
}());
if (!("Symbol"in self&&"iterator"in self.Symbol&&!!Array.prototype.entries
)) {

// Array.prototype.entries
/* global CreateMethodProperty, ToObject, ArrayIterator */
// 22.1.3.4. Array.prototype.entries ( )
CreateMethodProperty(Array.prototype, 'entries', function entries() {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Return CreateArrayIterator(O, "key+value").
	// TODO: Add CreateArrayIterator
	return new ArrayIterator(O, 'key+value');
});

}

if (!("Symbol"in self&&"iterator"in self.Symbol&&!!Array.prototype.keys
)) {

// Array.prototype.keys
/* global CreateMethodProperty, ToObject, ArrayIterator */
// 22.1.3.14. Array.prototype.keys ( )
CreateMethodProperty(Array.prototype, 'keys', function keys() {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Return CreateArrayIterator(O, "key").
	// TODO: Add CreateArrayIterator.
	return new ArrayIterator(O, 'key');
});

}

if (!("values"in Array.prototype
)) {

// Array.prototype.values
/* global CreateMethodProperty, Symbol, ToObject, ArrayIterator */
// 22.1.3.30/ Array.prototype.values ( )
// Polyfill.io - Firefox, Chrome and Opera have Array.prototype[Symbol.iterator], which is the exact same function as Array.prototype.values.
if ('Symbol' in self && 'iterator' in Symbol && typeof Array.prototype[Symbol.iterator] === 'function') {
	CreateMethodProperty(Array.prototype, 'values', Array.prototype[Symbol.iterator]);
} else {
	CreateMethodProperty(Array.prototype, 'values', function values () {
		// 1. Let O be ? ToObject(this value).
		var O = ToObject(this);
		// 2. Return CreateArrayIterator(O, "value").
		// TODO: Add CreateArrayIterator
		return new ArrayIterator(O, 'value');
	});
}

}

if (!("Symbol"in self&&"iterator"in self.Symbol&&!!Array.prototype[self.Symbol.iterator]
)) {

// Array.prototype.@@iterator
/* global Symbol, CreateMethodProperty */
// 22.1.3.31. Array.prototype [ @@iterator ] ( )
// The initial value of the @@iterator property is the same function object as the initial value of the  Array.prototype.values property.
CreateMethodProperty(Array.prototype, Symbol.iterator, Array.prototype.values);

}

if (!("fromEntries"in Object
)) {

// Object.fromEntries
/* global CreateMethodProperty, RequireObjectCoercible, ToPropertyKey, CreateDataPropertyOrThrow, AddEntriesFromIterable */

// 19.1.2.5 Object.fromEntries ( iterable )
CreateMethodProperty(Object, 'fromEntries', function fromEntries(iterable) {
	// 1. Perform ? RequireObjectCoercible(iterable).
	RequireObjectCoercible(iterable);
	// 2. Let obj be ObjectCreate(%ObjectPrototype%).
	var obj = {};
	// 3. Assert: obj is an extensible ordinary object with no own properties.
	// 4. Let stepsDefine be the algorithm steps defined in CreateDataPropertyOnObject Functions.
	// 5. Let adder be CreateBuiltinFunction(stepsDefine, « »).
	var adder = function (key, value) {
		// Let O be the this value.
		var O = this;
		// Assert: Type(O) is Object.
		// Assert: O is an extensible ordinary object.
		// Let propertyKey be ? ToPropertyKey(key).
		var propertyKey = ToPropertyKey(key);
		// Perform ! CreateDataPropertyOrThrow(O, propertyKey, value).
		CreateDataPropertyOrThrow(O, propertyKey, value);
	};
	// 6. Return ? AddEntriesFromIterable(obj, iterable, adder).
	return AddEntriesFromIterable(obj, iterable, adder);
});

}

if (!("Symbol"in self&&"iterator"in self.Symbol&&function(){var e=document.createDocumentFragment()
return e.appendChild(document.createElement("div")),!!e.childNodes[self.Symbol.iterator]}()
)) {

// NodeList.prototype.@@iterator
/* global Symbol, ArrayIterator*/
NodeList.prototype[Symbol.iterator] = function () {
	return new ArrayIterator(this);
};

}


// _StringIterator
// A modification of https://github.com/medikoo/es6-iterator
// Copyright (C) 2013-2015 Mariusz Nowak (www.medikoo.com)

/* global Iterator */

var StringIterator = (function() { // eslint-disable-line no-unused-vars

	var StringIterator = function (str) {
		if (!(this instanceof StringIterator)) return new StringIterator(str);
		str = String(str);
		Iterator.call(this, str);
		Object.defineProperty(this, '__length__', {
			value: str.length,
			configurable: false,
			enumerable: false,
			writable: false
		});
	};
	if (Object.setPrototypeOf) Object.setPrototypeOf(StringIterator, Iterator);

	StringIterator.prototype = Object.create(Iterator.prototype, {
		constructor: {
			value: StringIterator,
			configurable: true,
			enumerable: false,
			writable: true
		},
		_next: {
			value: function() {
				if (!this.__list__) return;
				if (this.__nextIndex__ < this.__length__) return this.__nextIndex__++;
				this._unBind();
			},
			configurable: true,
			enumerable: false,
			writable: true
		},
		_resolve: {
			value: function (i) {
				var char = this.__list__[i], code;
				if (this.__nextIndex__ === this.__length__) return char;
				code = char.charCodeAt(0);
				if ((code >= 0xD800) && (code <= 0xDBFF)) return char + this.__list__[this.__nextIndex__++];
				return char;
			},
			configurable: true,
			enumerable: false,
			writable: true
		},
		toString: {
			value: function() {
				return '[object String Iterator]';
			},
			configurable: true,
			enumerable: false,
			writable: true
		}
	});

	return StringIterator;
}());
if (!("Symbol"in self&&"iterator"in self.Symbol&&!!String.prototype[self.Symbol.iterator]
)) {

// String.prototype.@@iterator
/* global CreateMethodProperty, RequireObjectCoercible, ToString, StringIterator, Symbol */
// 21.1.3.29. String.prototype [ @@iterator ] ( )
CreateMethodProperty(String.prototype, Symbol.iterator, function () {
	// 1. Let O be ? RequireObjectCoercible(this value).
	var O = RequireObjectCoercible(this);
	// 2. Let S be ? ToString(O).
	var S = ToString(O);
	// 3. Return CreateStringIterator(S).
	// TODO: Add CreateStringIterator.
	return new StringIterator(S);
});

}

if (!("atob"in self
)) {

// atob
(function(f) {

  'use strict';

  /* istanbul ignore else */
  if (typeof exports === 'object' && exports != null &&
      typeof exports.nodeType !== 'number') {
    module.exports = f ();
  } else if (typeof define === 'function' && define.amd != null) {
    define ([], f);
  } else {
    var base64 = f ();
    var global = typeof self !== 'undefined' ? self : $.global;
    if (typeof global.btoa !== 'function') global.btoa = base64.btoa;
    if (typeof global.atob !== 'function') global.atob = base64.atob;
  }

} (function() {

  'use strict';

  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  function InvalidCharacterError(message) {
    this.message = message;
  }
  InvalidCharacterError.prototype = new Error ();
  InvalidCharacterError.prototype.name = 'InvalidCharacterError';

  // encoder
  // [https://gist.github.com/999166] by [https://github.com/nignag]
  function btoa(input) {
    var str = String (input);
    for (
      // initialize result and counter
      var block, charCode, idx = 0, map = chars, output = '';
      // if the next str index does not exist:
      //   change the mapping table to "="
      //   check if d has no fractional digits
      str.charAt (idx | 0) || (map = '=', idx % 1);
      // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
      output += map.charAt (63 & block >> 8 - idx % 1 * 8)
    ) {
      charCode = str.charCodeAt (idx += 3 / 4);
      if (charCode > 0xFF) {
        throw new InvalidCharacterError ("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
      }
      block = block << 8 | charCode;
    }
    return output;
  }

  // decoder
  // [https://gist.github.com/1020396] by [https://github.com/atk]
  function atob(input) {
    var str = (String (input)).replace (/[=]+$/, ''); // #31: ExtendScript bad parse of /=
    if (str.length % 4 === 1) {
      throw new InvalidCharacterError ("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (
      // initialize result and counters
      var bc = 0, bs, buffer, idx = 0, output = '';
      // get next character
      buffer = str.charAt (idx++); // eslint-disable-line no-cond-assign
      // character found in table? initialize bit storage and add its ascii value;
      ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        // and if not first of each 4 characters,
        // convert the first 8 bits to one ascii character
        bc++ % 4) ? output += String.fromCharCode (255 & bs >> (-2 * bc & 6)) : 0
    ) {
      // try to find character in table (0-63, not found => -1)
      buffer = chars.indexOf (buffer);
    }
    return output;
  }

  return {btoa: btoa, atob: atob};

}));

}

if (!("document"in self&&"Document"in self
)) {

// document
if ((typeof WorkerGlobalScope === "undefined") && (typeof importScripts !== "function")) {

	if (self.HTMLDocument) { // IE8

		// HTMLDocument is an extension of Document.  If the browser has HTMLDocument but not Document, the former will suffice as an alias for the latter.
		self.Document = self.HTMLDocument;

	} else {

		// Create an empty function to act as the missing constructor for the document object, attach the document object as its prototype.  The function needs to be anonymous else it is hoisted and causes the feature detect to prematurely pass, preventing the assignments below being made.
		self.Document = self.HTMLDocument = document.constructor = (new Function('return function Document() {}')());
		self.Document.prototype = document;
	}
}

}

if (!("Element"in self&&"HTMLElement"in self
)) {

// Element
(function () {

	if ('Element' in self && 'HTMLElement' in self) {
		return;
	}
	// IE8
	if (window.Element && !window.HTMLElement) {
		window.HTMLElement = window.Element;
		return;
	}

	// create Element constructor
	window.Element = window.HTMLElement = new Function('return function Element() {}')();

	// generate sandboxed iframe
	var vbody = document.appendChild(document.createElement('body'));
	var frame = vbody.appendChild(document.createElement('iframe'));

	// use sandboxed iframe to replicate Element functionality
	var frameDocument = frame.contentWindow.document;
	var prototype = Element.prototype = frameDocument.appendChild(frameDocument.createElement('*'));
	var cache = {};

	// polyfill Element.prototype on an element
	var shiv = function (element, deep) {
		var
		childNodes = element.childNodes || [],
		index = -1,
		key, value, childNode;

		if (element.nodeType === 1 && element.constructor !== Element) {
			element.constructor = Element;

			for (key in cache) {
				value = cache[key];
				element[key] = value;
			}
		}

		// eslint-disable-next-line no-cond-assign
		while (childNode = deep && childNodes[++index]) {
			shiv(childNode, deep);
		}

		return element;
	};

	var elements = document.getElementsByTagName('*');
	var nativeCreateElement = document.createElement;
	var interval;
	var loopLimit = 100;

	prototype.attachEvent('onpropertychange', function (event) {
		var
		propertyName = event.propertyName,
		nonValue = !Object.prototype.hasOwnProperty.call(cache, propertyName),
		newValue = prototype[propertyName],
		oldValue = cache[propertyName],
		index = -1,
		element;

		// eslint-disable-next-line no-cond-assign
		while (element = elements[++index]) {
			if (element.nodeType === 1) {
				if (nonValue || element[propertyName] === oldValue) {
					element[propertyName] = newValue;
				}
			}
		}

		cache[propertyName] = newValue;
	});

	prototype.constructor = Element;

	if (!prototype.hasAttribute) {
		// <Element>.hasAttribute
		prototype.hasAttribute = function hasAttribute(name) {
			return this.getAttribute(name) !== null;
		};
	}

	// Apply Element prototype to the pre-existing DOM as soon as the body element appears.
	function bodyCheck() {
		if (!(loopLimit--)) clearTimeout(interval);
		if (document.body && !document.body.prototype && /(complete|interactive)/.test(document.readyState)) {
			shiv(document, true);
			if (interval && document.body.prototype) clearTimeout(interval);
			return (!!document.body.prototype);
		}
		return false;
	}
	if (!bodyCheck()) {
		document.onreadystatechange = bodyCheck;
		interval = setInterval(bodyCheck, 25);
	}

	// Apply to any new elements created after load
	document.createElement = function createElement(nodeName) {
		var element = nativeCreateElement(String(nodeName).toLowerCase());
		return shiv(element);
	};

	// remove sandboxed iframe
	document.removeChild(vbody);
}());

}

if (!("document"in self&&"classList"in document.documentElement&&"Element"in self&&"classList"in Element.prototype&&function(){var e=document.createElement("span")
return e.classList.add("a","b"),e.classList.contains("b")}()
)) {

// Element.prototype.classList
/* global _DOMTokenList */
/*
Copyright (c) 2016, John Gardner

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
(function (global) {
	var dpSupport = true;
	var defineGetter = function (object, name, fn, configurable) {
		if (Object.defineProperty)
			Object.defineProperty(object, name, {
				configurable: false === dpSupport ? true : !!configurable,
				get: fn
			});

		else object.__defineGetter__(name, fn);
	};
	/** Ensure the browser allows Object.defineProperty to be used on native JavaScript objects. */
	try {
		defineGetter({}, "support");
	}
	catch (e) {
		dpSupport = false;
	}
	/** Polyfills a property with a DOMTokenList */
	var addProp = function (o, name, attr) {

		defineGetter(o.prototype, name, function () {
			var tokenList;

			var THIS = this,

			/** Prevent this from firing twice for some reason. What the hell, IE. */
			gibberishProperty = "__defineGetter__" + "DEFINE_PROPERTY" + name;
			if(THIS[gibberishProperty]) return tokenList;
			THIS[gibberishProperty] = true;

			/**
			 * IE8 can't define properties on native JavaScript objects, so we'll use a dumb hack instead.
			 *
			 * What this is doing is creating a dummy element ("reflection") inside a detached phantom node ("mirror")
			 * that serves as the target of Object.defineProperty instead. While we could simply use the subject HTML
			 * element instead, this would conflict with element types which use indexed properties (such as forms and
			 * select lists).
			 */
			if (false === dpSupport) {

				var visage;
				var mirror = addProp.mirror || document.createElement("div");
				var reflections = mirror.childNodes;
				var l = reflections.length;

				for (var i = 0; i < l; ++i)
					if (reflections[i]._R === THIS) {
						visage = reflections[i];
						break;
					}

				/** Couldn't find an element's reflection inside the mirror. Materialise one. */
				visage || (visage = mirror.appendChild(document.createElement("div")));

				tokenList = DOMTokenList.call(visage, THIS, attr);
			} else tokenList = new _DOMTokenList(THIS, attr);

			defineGetter(THIS, name, function () {
				return tokenList;
			});
			delete THIS[gibberishProperty];

			return tokenList;
		}, true);
	};

	addProp(global.Element, "classList", "className");
	addProp(global.HTMLElement, "classList", "className");
	addProp(global.HTMLLinkElement, "relList", "rel");
	addProp(global.HTMLAnchorElement, "relList", "rel");
	addProp(global.HTMLAreaElement, "relList", "rel");
}(self));

}

if (!("Symbol"in self&&"iterator"in self.Symbol&&function(){try{var t=document.createElement("div")
return!(!t.classList||!t.classList[self.Symbol.iterator])}catch(e){return!1}}()
)) {

// DOMTokenList.prototype.@@iterator
/* global ArrayIterator */
(function (global) {
	global.DOMTokenList.prototype[global.Symbol.iterator] = function () {
		return new ArrayIterator(this);
	};

	var e = document.createElement('span');
	if (
		e.classList &&
		e.classList.constructor &&
		e.classList.constructor.prototype &&
		!e.classList.constructor.prototype[global.Symbol.iterator]
	) {
		e.classList.constructor.prototype[global.Symbol.iterator] = function () {
			return new ArrayIterator(this);
		}
	}
}(self));

}

if (!("DOMTokenList"in self&&"forEach"in self.DOMTokenList.prototype
)) {

// DOMTokenList.prototype.forEach
(function (global) {
	global.DOMTokenList.prototype.forEach = global.Array.prototype.forEach;

	var e = document.createElement('span');
	if (
		e.classList &&
		e.classList.constructor &&
		e.classList.constructor.prototype &&
		!e.classList.constructor.prototype.forEach
	) {
		e.classList.constructor.prototype.forEach = global.Array.prototype.forEach;
	}
}(self));

}

if (!("document"in self&&"cloneNode"in document.documentElement&&function(){var e=document.createElement("div"),n=document.createElement("input")
n.type="radio",n.checked=!0,e.appendChild(n)
var c,t=n.cloneNode(!1)
try{c=e.cloneNode()}catch(d){return!1}return t.checked&&void 0!==c&&0===c.childNodes.length}()
)) {

// Element.prototype.cloneNode
Element.prototype.cloneNode = (function(nativeFunc, undef) {
	return function(deep) {
		if (deep === undef) {
			deep = false;
		}
		var clone = nativeFunc.call(this, deep);

		if ('checked' in this) clone.checked = this.checked;

		return clone;
	};
}(Element.prototype.cloneNode));

}

if (!(document.contains
)) {

// Node.prototype.contains
(function() {

	function contains(node) {
		if (!(0 in arguments)) {
			throw new TypeError('1 argument is required');
		}

		do {
			if (this === node) {
				return true;
			}
		// eslint-disable-next-line no-cond-assign
		} while (node = node && node.parentNode);

		return false;
	}

	// IE
	if ('HTMLElement' in self && 'contains' in HTMLElement.prototype) {
		try {
			delete HTMLElement.prototype.contains;
		// eslint-disable-next-line no-empty
		} catch (e) {}
	}

	if ('Node' in self) {
		Node.prototype.contains = contains;
	} else {
		document.contains = Element.prototype.contains = contains;
	}

}());

}

if (!(document.isSameNode
)) {

// Node.prototype.isSameNode
(function() {

	function isSameNode(otherNode) {
		if (!(0 in arguments)) {
			throw new TypeError('1 argument is required');
		}

		return this === otherNode;
	}

	// IE
	if ('HTMLElement' in self && 'isSameNode' in HTMLElement.prototype) {
		try {
			delete HTMLElement.prototype.isSameNode;
		// eslint-disable-next-line no-empty
		} catch (e) {}
	}

	if ('Node' in self) {
		Node.prototype.isSameNode = isSameNode;
	} else {
		document.isSameNode = Element.prototype.isSameNode = isSameNode;
	}

}());

}

if (!((function(n){if(!("Event"in n))return!1
try{return new Event("click"),!0}catch(t){return!1}})(self)
)) {

// Event
(function () {
	var unlistenableWindowEvents = {
		click: 1,
		dblclick: 1,
		keyup: 1,
		keypress: 1,
		keydown: 1,
		mousedown: 1,
		mouseup: 1,
		mousemove: 1,
		mouseover: 1,
		mouseenter: 1,
		mouseleave: 1,
		mouseout: 1,
		storage: 1,
		storagecommit: 1,
		textinput: 1
	};

	// This polyfill depends on availability of `document` so will not run in a worker
	// However, we asssume there are no browsers with worker support that lack proper
	// support for `Event` within the worker
	if (typeof document === 'undefined' || typeof window === 'undefined') return;

	var existingProto = (window.Event && window.Event.prototype) || null;
	function Event(type, eventInitDict) {
		if (!type) {
			throw new Error('Not enough arguments');
		}

		var event;
		// Shortcut if browser supports createEvent
		if ('createEvent' in document) {
			event = document.createEvent('Event');
			var bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
			var cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;

			event.initEvent(type, bubbles, cancelable);

			return event;
		}

		event = document.createEventObject();

		event.type = type;
		event.bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
		event.cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;

		return event;
	}
	Event.NONE = 0;
	Event.CAPTURING_PHASE = 1;
	Event.AT_TARGET = 2;
	Event.BUBBLING_PHASE = 3;
	window.Event = Window.prototype.Event = Event;
	if (existingProto) {
		Object.defineProperty(window.Event, 'prototype', {
			configurable: false,
			enumerable: false,
			writable: true,
			value: existingProto
		});
	}

	if (!('createEvent' in document)) {
		window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function addEventListener() {
			var
			element = this,
			type = arguments[0],
			listener = arguments[1];

			if (element === window && type in unlistenableWindowEvents) {
				throw new Error('In IE8 the event: ' + type + ' is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.');
			}

			if (!element._events) {
				element._events = {};
			}

			if (!element._events[type]) {
				element._events[type] = function (event) {
					var
					list = element._events[event.type].list,
					events = list.slice(),
					index = -1,
					length = events.length,
					eventElement;

					event.preventDefault = function preventDefault() {
						if (event.cancelable !== false) {
							event.returnValue = false;
						}
					};

					event.stopPropagation = function stopPropagation() {
						event.cancelBubble = true;
					};

					event.stopImmediatePropagation = function stopImmediatePropagation() {
						event.cancelBubble = true;
						event.cancelImmediate = true;
					};

					event.currentTarget = element;
					event.relatedTarget = event.fromElement || null;
					event.target = event.target || event.srcElement || element;
					event.timeStamp = new Date().getTime();

					if (event.clientX) {
						event.pageX = event.clientX + document.documentElement.scrollLeft;
						event.pageY = event.clientY + document.documentElement.scrollTop;
					}

					while (++index < length && !event.cancelImmediate) {
						if (index in events) {
							eventElement = events[index];

							if (list.includes(eventElement) && typeof eventElement === 'function') {
								eventElement.call(element, event);
							}
						}
					}
				};

				element._events[type].list = [];

				if (element.attachEvent) {
					element.attachEvent('on' + type, element._events[type]);
				}
			}

			element._events[type].list.push(listener);
		};

		window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function removeEventListener() {
			var
			element = this,
			type = arguments[0],
			listener = arguments[1],
			index;

			if (element._events && element._events[type] && element._events[type].list) {
				index = element._events[type].list.indexOf(listener);

				if (index !== -1) {
					element._events[type].list.splice(index, 1);

					if (!element._events[type].list.length) {
						if (element.detachEvent) {
							element.detachEvent('on' + type, element._events[type]);
						}
						delete element._events[type];
					}
				}
			}
		};

		window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function dispatchEvent(event) {
			if (!arguments.length) {
				throw new Error('Not enough arguments');
			}

			if (!event || typeof event.type !== 'string') {
				throw new Error('DOM Events Exception 0');
			}

			var element = this, type = event.type;

			try {
				if (!event.bubbles) {
					event.cancelBubble = true;

					var cancelBubbleEvent = function (event) {
						event.cancelBubble = true;

						(element || window).detachEvent('on' + type, cancelBubbleEvent);
					};

					this.attachEvent('on' + type, cancelBubbleEvent);
				}

				this.fireEvent('on' + type, event);
			} catch (error) {
				event.target = element;

				do {
					event.currentTarget = element;

					if ('_events' in element && typeof element._events[type] === 'function') {
						element._events[type].call(element, event);
					}

					if (typeof element['on' + type] === 'function') {
						element['on' + type].call(element, event);
					}

					element = element.nodeType === 9 ? element.parentWindow : element.parentNode;
				} while (element && !event.cancelBubble);
			}

			return true;
		};

		// Add the DOMContentLoaded Event
		document.attachEvent('onreadystatechange', function() {
			if (document.readyState === 'complete') {
				document.dispatchEvent(new Event('DOMContentLoaded', {
					bubbles: true
				}));
			}
		});
	}
}());

}

if (!("CustomEvent"in self&&("function"==typeof self.CustomEvent||self.CustomEvent.toString().indexOf("CustomEventConstructor")>-1)
)) {

// CustomEvent
self.CustomEvent = function CustomEvent(type, eventInitDict) {
	if (!type) {
		throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.');
	}

	var event;
	eventInitDict = eventInitDict || {bubbles: false, cancelable: false, detail: null};

	if ('createEvent' in document) {
		try {
			event = document.createEvent('CustomEvent');
			event.initCustomEvent(type, eventInitDict.bubbles, eventInitDict.cancelable, eventInitDict.detail);
		} catch (error) {
			// for browsers which don't support CustomEvent at all, we use a regular event instead
			event = document.createEvent('Event');
			event.initEvent(type, eventInitDict.bubbles, eventInitDict.cancelable);
			event.detail = eventInitDict.detail;
		}
	} else {

		// IE8
		event = new Event(type, eventInitDict);
		event.detail = eventInitDict && eventInitDict.detail || null;
	}
	return event;
};

CustomEvent.prototype = Event.prototype;

}

if (!((function(){var n=!1
return document.documentElement.addEventListener("focusin",function(){n=!0}),document.documentElement.dispatchEvent(new Event("focusin")),n})()
)) {

// Event.focusin
self.addEventListener('focus', function (event) {
	event.target.dispatchEvent(new Event('focusin', {
		bubbles: true,
		cancelable: true
	}));
}, true);

self.addEventListener('blur', function (event) {
	event.target.dispatchEvent(new Event('focusout', {
		bubbles: true,
		cancelable: true
	}));
}, true);

}

if (!("onhashchange"in self&&(null==self.onhashchange||"function"==typeof self.onhashchange)
)) {

// Event.hashchange
(function (global) {
	var hash = global.location.hash;

	function poll() {
		if (hash !== global.location.hash) {
			hash = global.location.hash;

			global.dispatchEvent(new Event('hashchange'));
		}

		setTimeout(poll, 500);
	}

	// Make sure a check for 'onhashchange' in window will pass (note: setting to undefined IE<9 causes 'Not implemented' error)
	global.onhashchange = function () { };

	poll();
}(self));

}

if (!("XMLHttpRequest"in self&&"prototype"in self.XMLHttpRequest&&"addEventListener"in self.XMLHttpRequest.prototype
)) {

// XMLHttpRequest
/* global ActiveXObject */
(function (global, NativeXMLHttpRequest) {
	// <Global>.XMLHttpRequest
	global.XMLHttpRequest = function XMLHttpRequest() {
		var request = this, nativeRequest = request._request = NativeXMLHttpRequest ? new NativeXMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP.3.0');

		nativeRequest.onreadystatechange = function () {
			request.readyState = nativeRequest.readyState;

			var readyState = request.readyState === 4;

			request.response = request.responseText = readyState ? nativeRequest.responseText : null;
			request.status = readyState ? nativeRequest.status : null;
			request.statusText = readyState ? nativeRequest.statusText : null;

			request.dispatchEvent(new Event('readystatechange'));

			if (readyState) {
				request.dispatchEvent(new Event('load'));
			}
		};

		if ('onerror' in nativeRequest) {
			nativeRequest.onerror = function () {
				request.dispatchEvent(new Event('error'));
			};
		}
	};

	global.XMLHttpRequest.UNSENT = 0;
	global.XMLHttpRequest.OPENED = 1;
	global.XMLHttpRequest.HEADERS_RECEIVED = 2;
	global.XMLHttpRequest.LOADING = 3;
	global.XMLHttpRequest.DONE = 4;

	var XMLHttpRequestPrototype = global.XMLHttpRequest.prototype;

	XMLHttpRequestPrototype.addEventListener = global.addEventListener;
	XMLHttpRequestPrototype.removeEventListener = global.removeEventListener;
	XMLHttpRequestPrototype.dispatchEvent = global.dispatchEvent;

	XMLHttpRequestPrototype.abort = function abort() {
		return this._request();
	};

	XMLHttpRequestPrototype.getAllResponseHeaders = function getAllResponseHeaders() {
		return this._request.getAllResponseHeaders();
	};

	XMLHttpRequestPrototype.getResponseHeader = function getResponseHeader(header) {
		return this._request.getResponseHeader(header);
	};

	XMLHttpRequestPrototype.open = function open(method, url) {
		// method, url, async, username, password
		this._request.open(method, url, arguments[2], arguments[3], arguments[4]);
	};

	XMLHttpRequestPrototype.overrideMimeType = function overrideMimeType(mimetype) {
		this._request.overrideMimeType(mimetype);
	};

	XMLHttpRequestPrototype.send = function send() {
		this._request.send(0 in arguments ? arguments[0] : null);
	};

	XMLHttpRequestPrototype.setRequestHeader = function setRequestHeader(header, value) {
		this._request.setRequestHeader(header, value);
	};
}(self, self.XMLHttpRequest));

}


// _mutation
var _mutation = (function () { // eslint-disable-line no-unused-vars

	function isNode(object) {
		// DOM, Level2
		if (typeof Node === 'function') {
			return object instanceof Node;
		}
		// Older browsers, check if it looks like a Node instance)
		return object &&
			typeof object === "object" &&
			object.nodeName &&
			object.nodeType >= 1 &&
			object.nodeType <= 12;
	}

	// http://dom.spec.whatwg.org/#mutation-method-macro
	return function mutation(nodes) {
		if (nodes.length === 1) {
			return isNode(nodes[0]) ? nodes[0] : document.createTextNode(nodes[0] + '');
		}

		var fragment = document.createDocumentFragment();
		for (var i = 0; i < nodes.length; i++) {
			fragment.appendChild(isNode(nodes[i]) ? nodes[i] : document.createTextNode(nodes[i] + ''));

		}
		return fragment;
	};
}());
if (!("DocumentFragment"in self&&"append"in DocumentFragment.prototype
)) {

// DocumentFragment.prototype.append
/* global _mutation */
(function (global) {
	var fragmentProto = document.createDocumentFragment().constructor.prototype;
	fragmentProto.append = function append() {
		this.appendChild(_mutation(arguments));
	};

	global.DocumentFragment.prototype.append = function append() {
		this.appendChild(_mutation(arguments));
	};
}(self));

}

if (!("DocumentFragment"in self&&"prepend"in DocumentFragment.prototype
)) {

// DocumentFragment.prototype.prepend
/* global _mutation */
(function (global) {
	var fragmentProto = document.createDocumentFragment().constructor.prototype;
	fragmentProto.prepend = function prepend() {
		this.insertBefore(_mutation(arguments), this.firstChild);
	};

	global.DocumentFragment.prototype.prepend = function prepend() {
		this.insertBefore(_mutation(arguments), this.firstChild);
	};
}(self));

}

if (!("Element"in self&&"after"in Element.prototype
)) {

// Element.prototype.after
/* global _mutation */
Document.prototype.after = Element.prototype.after = function after() {
	if (this.parentNode) {
		var args = Array.prototype.slice.call(arguments),
				viableNextSibling = this.nextSibling,
				idx = viableNextSibling ? args.indexOf(viableNextSibling) : -1;

		while (idx !== -1) {
			viableNextSibling = viableNextSibling.nextSibling;
			if (!viableNextSibling) {
				break;
			}
			idx = args.indexOf(viableNextSibling);
		}

		this.parentNode.insertBefore(_mutation(arguments), viableNextSibling);
	}
};

// Not all UAs support the Text constructor.  Polyfill on the Text constructor only where it exists
// TODO: Add a polyfill for the Text constructor, and make it a dependency of this polyfill.
if ("Text" in self) {
	Text.prototype.after = Element.prototype.after;
}

}

if (!("Element"in self&&"append"in Element.prototype
)) {

// Element.prototype.append
/* global _mutation */
Document.prototype.append = Element.prototype.append = function append() {
	this.appendChild(_mutation(arguments));
};

}

if (!("Element"in self&&"before"in Element.prototype
)) {

// Element.prototype.before
/* global _mutation */
Document.prototype.before = Element.prototype.before = function before() {
	if (this.parentNode) {
		var args = Array.prototype.slice.call(arguments),
			viablePreviousSibling = this.previousSibling,
			idx = viablePreviousSibling ? args.indexOf(viablePreviousSibling) : -1;

		while (idx !== -1) {
			viablePreviousSibling = viablePreviousSibling.previousSibling;
			if (!viablePreviousSibling) {
				break;
			}
			idx = args.indexOf(viablePreviousSibling);
		}

		this.parentNode.insertBefore(
			_mutation(arguments),
			viablePreviousSibling ? viablePreviousSibling.nextSibling : this.parentNode.firstChild
		);
	}
};

// Not all UAs support the Text constructor.  Polyfill on the Text constructor only where it exists
// TODO: Add a polyfill for the Text constructor, and make it a dependency of this polyfill.
if ("Text" in self) {
	Text.prototype.before = Element.prototype.before;
}

}

if (!("Element"in self&&"prepend"in Element.prototype
)) {

// Element.prototype.prepend
/* global _mutation */
Document.prototype.prepend = Element.prototype.prepend = function prepend() {
	this.insertBefore(_mutation(arguments), this.firstChild);
};

}

if (!("Element"in self&&"remove"in Element.prototype
)) {

// Element.prototype.remove
Document.prototype.remove = Element.prototype.remove = function remove() {
	if (this.parentNode) {
		this.parentNode.removeChild(this);
	}
};

// Not all UAs support the Text constructor.  Polyfill on the Text constructor only where it exists
// TODO: Add a polyfill for the Text constructor, and make it a dependency of this polyfill.
if ("Text" in self) {
	Text.prototype.remove = Element.prototype.remove;
}

}

if (!("Element"in self&&"replaceWith"in Element.prototype
)) {

// Element.prototype.replaceWith
/* global _mutation */
Document.prototype.replaceWith = Element.prototype.replaceWith = function replaceWith() {
	if (this.parentNode) {
		this.parentNode.replaceChild(_mutation(arguments), this);
	}
};

// Not all UAs support the Text constructor.  Polyfill on the Text constructor only where it exists
// TODO: Add a polyfill for the Text constructor, and make it a dependency of this polyfill.
if ('Text' in self) {
	Text.prototype.replaceWith = Element.prototype.replaceWith;
}

}

if (!("document"in self&&"querySelector"in self.document
)) {

// document.querySelector
(function () {
	var
	head = document.getElementsByTagName('head')[0];

	function getElementsByQuery(node, selector, one) {
		var
		generator = document.createElement('div'),
		id = 'qsa' + String(Math.random()).slice(3),
		style, elements;

		generator.innerHTML = 'x<style>' + selector + '{qsa:' + id + ';}';

		style = head.appendChild(generator.lastChild);

		elements = getElements(node, selector, one, id);

		head.removeChild(style);

		return one ? elements[0] : elements;
	}

	function getElements(node, selector, one, id) {
		var
		validNode = /1|9/.test(node.nodeType),
		childNodes = node.childNodes,
		elements = [],
		index = -1,
		childNode;

		if (validNode && node.currentStyle && node.currentStyle.qsa === id) {
			if (elements.push(node) && one) {
				return elements;
			}
		}

		// eslint-disable-next-line no-cond-assign
		while (childNode = childNodes[++index]) {
			elements = elements.concat(getElements(childNode, selector, one, id));

			if (one && elements.length) {
				return elements;
			}
		}

		return elements;
	}

	Document.prototype.querySelector = Element.prototype.querySelector = function querySelectorAll(selector) {
		return getElementsByQuery(this, selector, true);
	};

	Document.prototype.querySelectorAll = Element.prototype.querySelectorAll = function querySelectorAll(selector) {
		return getElementsByQuery(this, selector, false);
	};
}());

}

if (!("document"in self&&"matches"in document.documentElement
)) {

// Element.prototype.matches
Element.prototype.matches = Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || function matches(selector) {

	var element = this;
	var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
	var index = 0;

	while (elements[index] && elements[index] !== element) {
		++index;
	}

	return !!elements[index];
};

}

if (!("document"in self&&"closest"in document.documentElement
)) {

// Element.prototype.closest
Element.prototype.closest = function closest(selector) {
	var node = this;

	while (node) {
		if (node.matches(selector)) return node;
		else node = 'SVGElement' in window && node instanceof SVGElement ? node.parentNode : node.parentElement;
	}

	return null;
};

}

if (!("document"in self&&"placeholder"in document.createElement("input")
)) {

// Element.prototype.placeholder
Object.defineProperty(Element.prototype, 'placeholder', {
	get: function() {
		return this.getAttribute('placeholder');
	},

	set: function (value) {
		if (!value || !/^(input|textarea)$/i.test(this.nodeName) || (/^(input)$/i.test(this.nodeName) && !/^(email|number|password|search|tel|text|url|)$/i.test(this.getAttribute('type')))) {
			return;
		}

		var
		element = this,
		xInput = document.createElement('ms-input'),
		xPlaceholder = xInput.appendChild(document.createElement('ms-placeholder')),
		xInputRuntimeStyle = xInput.runtimeStyle,
		xPlaceholderRuntimeStyle = xPlaceholder.runtimeStyle,
		elementCurrentStyle = element.currentStyle;

		xPlaceholder.appendChild(document.createTextNode(value));

		xInputRuntimeStyle.display = 'inline-block';
		xInputRuntimeStyle.fontSize = elementCurrentStyle.fontSize;
		xInputRuntimeStyle.margin = elementCurrentStyle.margin;
		xInputRuntimeStyle.width = elementCurrentStyle.width;

		element.parentNode.insertBefore(xInput, element).appendChild(element);

		xPlaceholderRuntimeStyle.backgroundColor = 'transparent';
		xPlaceholderRuntimeStyle.fontFamily = elementCurrentStyle.fontFamily;
		xPlaceholderRuntimeStyle.fontSize = elementCurrentStyle.fontSize;
		xPlaceholderRuntimeStyle.fontWeight = elementCurrentStyle.fontWeight;
		xPlaceholderRuntimeStyle.margin = '2px 0 0 2px';
		xPlaceholderRuntimeStyle.padding = elementCurrentStyle.padding;
		xPlaceholderRuntimeStyle.position = 'absolute';
		xPlaceholderRuntimeStyle.display = element.value ? 'none' : 'inline-block';

		element.runtimeStyle.margin = '0';

		xPlaceholder.attachEvent('onclick', function () {
			element.focus();
		});

		element.attachEvent('onkeypress', function () {
			xPlaceholderRuntimeStyle.display = 'none';
		});

		element.attachEvent('onkeyup', function () {
			xPlaceholderRuntimeStyle.display = element.value ? 'none' : 'inline-block';
		});

		Object.defineProperty(element, 'placeholder', {
			get: function () {
				return xPlaceholder.innerHTML;
			},
			set: function (value) {
				xPlaceholder.innerHTML = value;
			}
		});
	}
});

document.attachEvent('onreadystatechange', function () {
	if (document.readyState === 'complete') {
		for (var elements = document.querySelectorAll('input,textarea'), index = 0, length = elements.length; index < length; ++index) {
			if (elements[index].placeholder) {
				// eslint-disable-next-line no-self-assign
				elements[index].placeholder = elements[index].placeholder;
			}
		}
	}
});

}

if (!("document"in self&&"hidden"in document&&"visibilityState"in document
)) {

// document.visibilityState
// PageVisibility
(function () {
	var prefix = document.webkitVisibilityState ? 'webkit' : document.mozVisibilityState ? 'moz' : null;

	function normalizeState () {
		document.hidden = document[prefix + 'Hidden'];
		document.visibilityState = document[prefix + 'VisibilityState'];
	}

	if (!prefix) {
		return;
	}

	normalizeState();

	document.addEventListener(prefix + 'visibilitychange', function () {
		normalizeState();
		document.dispatchEvent(new CustomEvent('visibilitychange'));
	});

}());

}

if (!("fetch"in self&&"Request"in self&&function(){try{return"signal"in new Request("")}catch(e){return!1}}()
)) {

// fetch
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.WHATWGFetch = {})));
}(this, (function (exports) { 'use strict';

  var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof self !== 'undefined' && self) ||
    (typeof global !== 'undefined' && global);

  var support = {
    searchParams: 'URLSearchParams' in global,
    iterable: 'Symbol' in global && 'iterator' in Symbol,
    blob:
      'FileReader' in global &&
      'Blob' in global &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in global,
    arrayBuffer: 'ArrayBuffer' in global
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
      throw new TypeError('Invalid character in header field name: "' + name + '"')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      /*
        fetch-mock wraps the Response object in an ES6 Proxy to
        provide useful test harness features such as flush. However, on
        ES5 browsers without fetch or Proxy support pollyfills must be used;
        the proxy-pollyfill is unable to proxy an attribute unless it exists
        on the object before the Proxy is created. This change ensures
        Response.bodyUsed exists on the instance, while maintaining the
        semantic of setting Request.bodyUsed in the constructor before
        _initBody is called.
      */
      this.bodyUsed = this.bodyUsed;
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          var isConsumed = consumed(this);
          if (isConsumed) {
            return isConsumed
          }
          if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
            return Promise.resolve(
              this._bodyArrayBuffer.buffer.slice(
                this._bodyArrayBuffer.byteOffset,
                this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
              )
            )
          } else {
            return Promise.resolve(this._bodyArrayBuffer)
          }
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    if (!(this instanceof Request)) {
      throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
    }

    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);

    if (this.method === 'GET' || this.method === 'HEAD') {
      if (options.cache === 'no-store' || options.cache === 'no-cache') {
        // Search for a '_' parameter in the query string
        var reParamSearch = /([?&])_=[^&]*/;
        if (reParamSearch.test(this.url)) {
          // If it already exists then set the value with the current time
          this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime());
        } else {
          // Otherwise add a new '_' parameter to the end with the current time
          var reQueryString = /\?/;
          this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime();
        }
      }
    }
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
    // https://github.com/github/fetch/issues/748
    // https://github.com/zloirock/core-js/issues/751
    preProcessedHeaders
      .split('\r')
      .map(function(header) {
        return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
      })
      .forEach(function(line) {
        var parts = line.split(':');
        var key = parts.shift().trim();
        if (key) {
          var value = parts.join(':').trim();
          headers.append(key, value);
        }
      });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!(this instanceof Response)) {
      throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
    }
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = options.statusText === undefined ? '' : '' + options.statusText;
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = global.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        setTimeout(function() {
          resolve(new Response(body, options));
        }, 0);
      };

      xhr.onerror = function() {
        setTimeout(function() {
          reject(new TypeError('Network request failed'));
        }, 0);
      };

      xhr.ontimeout = function() {
        setTimeout(function() {
          reject(new TypeError('Network request failed'));
        }, 0);
      };

      xhr.onabort = function() {
        setTimeout(function() {
          reject(new exports.DOMException('Aborted', 'AbortError'));
        }, 0);
      };

      function fixUrl(url) {
        try {
          return url === '' && global.location.href ? global.location.href : url
        } catch (e) {
          return url
        }
      }

      xhr.open(request.method, fixUrl(request.url), true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr) {
        if (support.blob) {
          xhr.responseType = 'blob';
        } else if (
          support.arrayBuffer &&
          request.headers.get('Content-Type') &&
          request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1
        ) {
          xhr.responseType = 'arraybuffer';
        }
      }

      if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers)) {
        Object.getOwnPropertyNames(init.headers).forEach(function(name) {
          xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
        });
      } else {
        request.headers.forEach(function(value, name) {
          xhr.setRequestHeader(name, value);
        });
      }

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  global.fetch = fetch;
  global.Headers = Headers;
  global.Request = Request;
  global.Response = Response;

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  Object.defineProperty(exports, '__esModule', { value: true });

})));

}

if (!("getComputedStyle"in self
)) {

// getComputedStyle
(function (global) {
	function getComputedStylePixel(element, property, fontSize) {
		var
		// Internet Explorer sometimes struggles to read currentStyle until the element's document is accessed.
		value = element.document && element.currentStyle[property].match(/([\d.]+)(%|cm|em|in|mm|pc|pt|)/) || [0, 0, ''],
		size = value[1],
		suffix = value[2],
		rootSize;

		fontSize = !fontSize ? fontSize : /%|em/.test(suffix) && element.parentElement ? getComputedStylePixel(element.parentElement, 'fontSize', null) : 16;
		rootSize = property == 'fontSize' ? fontSize : /width/i.test(property) ? element.clientWidth : element.clientHeight;

		return suffix == '%' ? size / 100 * rootSize :
				suffix == 'cm' ? size * 0.3937 * 96 :
				suffix == 'em' ? size * fontSize :
				suffix == 'in' ? size * 96 :
				suffix == 'mm' ? size * 0.3937 * 96 / 10 :
				suffix == 'pc' ? size * 12 * 96 / 72 :
				suffix == 'pt' ? size * 96 / 72 :
				size;
	}

	function setShortStyleProperty(style, property) {
		var
		borderSuffix = property == 'border' ? 'Width' : '',
		t = property + 'Top' + borderSuffix,
		r = property + 'Right' + borderSuffix,
		b = property + 'Bottom' + borderSuffix,
		l = property + 'Left' + borderSuffix;

		style[property] = (style[t] == style[r] && style[t] == style[b] && style[t] == style[l] ? [ style[t] ] :
			style[t] == style[b] && style[l] == style[r] ? [ style[t], style[r] ] :
			style[l] == style[r] ? [ style[t], style[r], style[b] ] :
			[ style[t], style[r], style[b], style[l] ]).join(' ');
	}

	// <CSSStyleDeclaration>
	function CSSStyleDeclaration(element) {
		var
		style = this,
		currentStyle = element.currentStyle,
		fontSize = getComputedStylePixel(element, 'fontSize'),
		unCamelCase = function (match) {
			return '-' + match.toLowerCase();
		},
		property;

		for (property in currentStyle) {
			Array.prototype.push.call(style, property == 'styleFloat' ? 'float' : property.replace(/[A-Z]/, unCamelCase));

			if (property == 'width') {
				style[property] = element.offsetWidth + 'px';
			} else if (property == 'height') {
				style[property] = element.offsetHeight + 'px';
			} else if (property == 'styleFloat') {
				style["float"] = currentStyle[property];
			} else if (/margin.|padding.|border.+W/.test(property) && style[property] != 'auto') {
				style[property] = Math.round(getComputedStylePixel(element, property, fontSize)) + 'px';
			} else if (/^outline/.test(property)) {
				// errors on checking outline
				try {
					style[property] = currentStyle[property];
				} catch (error) {
					style.outlineColor = currentStyle.color;
					style.outlineStyle = style.outlineStyle || 'none';
					style.outlineWidth = style.outlineWidth || '0px';
					style.outline = [style.outlineColor, style.outlineWidth, style.outlineStyle].join(' ');
				}
			} else {
				style[property] = currentStyle[property];
			}
		}

		setShortStyleProperty(style, 'margin');
		setShortStyleProperty(style, 'padding');
		setShortStyleProperty(style, 'border');

		style.fontSize = Math.round(fontSize) + 'px';
	}

	CSSStyleDeclaration.prototype = {
		constructor: CSSStyleDeclaration,
		// <CSSStyleDeclaration>.getPropertyPriority
		getPropertyPriority: function () {
			throw new Error('NotSupportedError: DOM Exception 9');
		},
		// <CSSStyleDeclaration>.getPropertyValue
		getPropertyValue: function (property) {
			return this[property.replace(/-\w/g, function (match) {
				return match[1].toUpperCase();
			})];
		},
		// <CSSStyleDeclaration>.item
		item: function (index) {
			return this[index];
		},
		// <CSSStyleDeclaration>.removeProperty
		removeProperty: function () {
			throw new Error('NoModificationAllowedError: DOM Exception 7');
		},
		// <CSSStyleDeclaration>.setProperty
		setProperty: function () {
			throw new Error('NoModificationAllowedError: DOM Exception 7');
		},
		// <CSSStyleDeclaration>.getPropertyCSSValue
		getPropertyCSSValue: function () {
			throw new Error('NotSupportedError: DOM Exception 9');
		}
	};

	// <Global>.getComputedStyle
	global.getComputedStyle = function getComputedStyle(element) {
		return new CSSStyleDeclaration(element);
	};
}(self));

}

if (!("location"in self&&"origin"in self.location
)) {

// location.origin
try {
	Object.defineProperty(window.location, 'origin', {
		enumerable: true,
		writable: false,
		value: window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : ''),
		configurable: false
	});
} catch(e) {

	// IE9 is throwing "Object doesn't support this action" when attempting defineProperty on window.location, so provide an alternative
	window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
}

}

if (!("requestAnimationFrame"in self
)) {

// requestAnimationFrame
(function (global) {
	var rafPrefix;

	// do not inject RAF in order to avoid broken performance
	var nowOffset = Date.now();

	// use performance api if exist, otherwise use Date.now.
	// Date.now polyfill required.
	var pnow = function () {
		if (global.performance && typeof global.performance.now === 'function') {
			return global.performance.now();
		}
		// fallback
		return Date.now() - nowOffset;
	};

	if ('mozRequestAnimationFrame' in global) {
		rafPrefix = 'moz';

	} else if ('webkitRequestAnimationFrame' in global) {
		rafPrefix = 'webkit';

	}

	if (rafPrefix) {
		global.requestAnimationFrame = function (callback) {
			return global[rafPrefix + 'RequestAnimationFrame'](function () {
				callback(pnow());
			});
		};
		global.cancelAnimationFrame = global[rafPrefix + 'CancelAnimationFrame'];
	} else {

		var lastTime = Date.now();

		global.requestAnimationFrame = function (callback) {
			if (typeof callback !== 'function') {
				throw new TypeError(callback + ' is not a function');
			}

			var
			currentTime = Date.now(),
			delay = 16 + lastTime - currentTime;

			if (delay < 0) {
				delay = 0;
			}

			lastTime = currentTime;

			return setTimeout(function () {
				lastTime = Date.now();

				callback(pnow());
			}, delay);
		};

		global.cancelAnimationFrame = function (id) {
			clearTimeout(id);
		};
	}
}(self));

}

if (!((function(){if("document"in self&&"documentElement"in self.document&&"style"in self.document.documentElement&&"scrollBehavior"in document.documentElement.style)return!0
if(Element.prototype.scrollTo&&Element.prototype.scrollTo.toString().indexOf("[native code]")>-1)return!1
try{var e=!1,t={top:1,left:0}
Object.defineProperty(t,"behavior",{get:function(){return e=!0,"smooth"},enumerable:!0})
var o=document.createElement("DIV"),n=document.createElement("DIV")
return o.setAttribute("style","height: 1px; overflow: scroll;"),n.setAttribute("style","height: 2px; overflow: scroll;"),o.appendChild(n),o.scrollTo(t),e}catch(r){return!1}})()
)) {

// smoothscroll
(function (global, factory) {
    var exports = {};
    factory(exports);
    exports.polyfill();
}(this, (function (exports) { 'use strict';

    var ease = function (k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
    };
    var DURATION = 500;
    var isScrollBehaviorSupported = function () { return "scrollBehavior" in document.documentElement.style; };
    var original = {
        _elementScroll: undefined,
        get elementScroll() {
            return (this._elementScroll || (this._elementScroll = HTMLElement.prototype.scroll ||
                HTMLElement.prototype.scrollTo ||
                function (x, y) {
                    this.scrollLeft = x;
                    this.scrollTop = y;
                }));
        },
        _elementScrollIntoView: undefined,
        get elementScrollIntoView() {
            return (this._elementScrollIntoView || (this._elementScrollIntoView = HTMLElement.prototype.scrollIntoView));
        },
        _windowScroll: undefined,
        get windowScroll() {
            return (this._windowScroll || (this._windowScroll = window.scroll || window.scrollTo));
        },
    };
    var modifyPrototypes = function (modification) {
        var prototypes = [HTMLElement.prototype, SVGElement.prototype, Element.prototype];
        prototypes.forEach(function (prototype) { return modification(prototype); });
    };
    var now = function () { var _a, _b, _c; return (_c = (_b = (_a = window.performance) === null || _a === void 0 ? void 0 : _a.now) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : Date.now(); };
    var step = function (context) {
        var currentTime = now();
        var elapsed = (currentTime - context.timeStamp) / (context.duration || DURATION);
        if (elapsed > 1) {
            context.method(context.targetX, context.targetY);
            context.callback();
            return;
        }
        var value = (context.timingFunc || ease)(elapsed);
        var currentX = context.startX + (context.targetX - context.startX) * value;
        var currentY = context.startY + (context.targetY - context.startY) * value;
        context.method(currentX, currentY);
        context.rafId = requestAnimationFrame(function () {
            step(context);
        });
    };
    // https://drafts.csswg.org/cssom-view/#normalize-non-finite-values
    var nonFinite = function (value) {
        if (!isFinite(value)) {
            return 0;
        }
        return Number(value);
    };
    var isObject = function (value) {
        var type = typeof value;
        return value !== null && (type === "object" || type === "function");
    };

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    var elementScroll = function (element, options) {
        var _a, _b;
        var originalBoundFunc = original.elementScroll.bind(element);
        if (options.left === undefined && options.top === undefined) {
            return;
        }
        var startX = element.scrollLeft;
        var startY = element.scrollTop;
        var targetX = nonFinite((_a = options.left) !== null && _a !== void 0 ? _a : startX);
        var targetY = nonFinite((_b = options.top) !== null && _b !== void 0 ? _b : startY);
        if (options.behavior !== "smooth") {
            return originalBoundFunc(targetX, targetY);
        }
        var removeEventListener = function () {
            window.removeEventListener("wheel", cancelScroll);
            window.removeEventListener("touchmove", cancelScroll);
        };
        var context = {
            timeStamp: now(),
            duration: options.duration,
            startX: startX,
            startY: startY,
            targetX: targetX,
            targetY: targetY,
            rafId: 0,
            method: originalBoundFunc,
            timingFunc: options.timingFunc,
            callback: removeEventListener,
        };
        var cancelScroll = function () {
            cancelAnimationFrame(context.rafId);
            removeEventListener();
        };
        window.addEventListener("wheel", cancelScroll, {
            passive: true,
            once: true,
        });
        window.addEventListener("touchmove", cancelScroll, {
            passive: true,
            once: true,
        });
        step(context);
    };
    var elementScrollPolyfill = function (animationOptions) {
        if (isScrollBehaviorSupported()) {
            return;
        }
        var originalFunc = original.elementScroll;
        modifyPrototypes(function (prototype) {
            return (prototype.scroll = function scroll() {
                if (arguments.length === 1) {
                    var scrollOptions = arguments[0];
                    if (!isObject(scrollOptions)) {
                        throw new TypeError("Failed to execute 'scroll' on 'Element': parameter 1 ('options') is not an object.");
                    }
                    return elementScroll(this, __assign(__assign({}, scrollOptions), animationOptions));
                }
                return originalFunc.apply(this, arguments);
            });
        });
    };

    var elementScrollBy = function (element, options) {
        var left = nonFinite(options.left || 0) + element.scrollLeft;
        var top = nonFinite(options.top || 0) + element.scrollTop;
        return elementScroll(element, __assign(__assign({}, options), { left: left, top: top }));
    };
    var elementScrollByPolyfill = function (animationOptions) {
        if (isScrollBehaviorSupported()) {
            return;
        }
        modifyPrototypes(function (prototype) {
            return (prototype.scrollBy = function scrollBy() {
                if (arguments.length === 1) {
                    var scrollByOptions = arguments[0];
                    if (!isObject(scrollByOptions)) {
                        throw new TypeError("Failed to execute 'scrollBy' on 'Element': parameter 1 ('options') is not an object.");
                    }
                    return elementScrollBy(this, __assign(__assign({}, scrollByOptions), animationOptions));
                }
                var left = Number(arguments[0]);
                var top = Number(arguments[1]);
                return elementScrollBy(this, { left: left, top: top });
            });
        });
    };

    // https://drafts.csswg.org/css-writing-modes-4/#block-flow
    var normalizeWritingMode = function (writingMode) {
        switch (writingMode) {
            case "horizontal-tb":
            case "lr":
            case "lr-tb":
            case "rl":
            case "rl-tb":
                return 0 /* HorizontalTb */;
            case "vertical-rl":
            case "tb":
            case "tb-rl":
                return 1 /* VerticalRl */;
            case "vertical-lr":
            case "tb-lr":
                return 2 /* VerticalLr */;
            case "sideways-rl":
                return 3 /* SidewaysRl */;
            case "sideways-lr":
                return 4 /* SidewaysLr */;
        }
        return 0 /* HorizontalTb */;
    };
    // https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/dom/element.cc;l=1097-1189;drc=6a7533d4a1e9f2372223a9d912a9e53a6fa35ae0
    var toPhysicalAlignment = function (options, writingMode, isLTR) {
        var _a;
        var _b = __read([options.block || "start", options.inline || "nearest"], 2), xPos = _b[0], yPos = _b[1];
        /**  0b{vertical}{horizontal}  0: normal, 1: reverse */
        var layout = 0;
        /**
         * WritingMode.VerticalLr: ↓→
         * | 1 | 4 |   |
         * | 2 | 5 |   |
         * | 3 |   |   |
         *
         * RTL: ↑→
         * | 3 |   |   |
         * | 2 | 5 |   |
         * | 1 | 4 |   |
         */
        if (!isLTR) {
            layout ^= 2 /* ReverseVertical */;
        }
        switch (writingMode) {
            /**
             * ↓→
             * | 1 | 2 | 3 |
             * | 4 | 5 |   |
             * |   |   |   |
             *
             * RTL: ↓←
             * | 3 | 2 | 1 |
             * |   | 5 | 4 |
             * |   |   |   |
             */
            case 0 /* HorizontalTb */:
                // swap horizontal and vertical
                layout = (layout >> 1) | ((layout & 1) << 1);
                _a = __read([yPos, xPos], 2), xPos = _a[0], yPos = _a[1];
                break;
            /**
             * ↓←
             * |   | 4 | 1 |
             * |   | 5 | 2 |
             * |   |   | 3 |
             *
             * RTL: ↑←
             * |   |   | 3 |
             * |   | 5 | 2 |
             * |   | 4 | 1 |
             */
            case 1 /* VerticalRl */:
            case 3 /* SidewaysRl */:
                //  reverse horizontal
                layout ^= 1 /* ReverseHorizontal */;
                break;
            /**
             * ↑→
             * | 3 |   |   |
             * | 2 | 5 |   |
             * | 1 | 4 |   |
             *
             * RTL: ↓→
             * | 1 | 4 |   |
             * | 2 | 5 |   |
             * | 3 |   |   |
             */
            case 4 /* SidewaysLr */:
                // reverse vertical
                layout ^= 2 /* ReverseVertical */;
                break;
        }
        return [xPos, yPos].map(function (value, index) {
            switch (value) {
                case "center":
                    return 1 /* CenterAlways */;
                case "nearest":
                    return 0 /* ToEdgeIfNeeded */;
                default: {
                    var reverse = (layout >> index) & 1;
                    return (value === "start") === !reverse ? 2 /* LeftOrTop */ : 3 /* RightOrBottom */;
                }
            }
        });
    };
    // code from stipsan/compute-scroll-into-view
    // https://github.com/stipsan/compute-scroll-into-view/blob/5396c6b78af5d0bbce11a7c4e93cc3146546fcd3/src/index.ts
    /**
     * Find out which edge to align against when logical scroll position is "nearest"
     * Interesting fact: "nearest" works similarily to "if-needed", if the element is fully visible it will not scroll it
     *
     * Legends:
     * ┌────────┐ ┏ ━ ━ ━ ┓
     * │ target │   frame
     * └────────┘ ┗ ━ ━ ━ ┛
     */
    var alignNearest = function (scrollingEdgeStart, scrollingEdgeEnd, scrollingSize, scrollingBorderStart, scrollingBorderEnd, elementEdgeStart, elementEdgeEnd, elementSize) {
        /**
         * If element edge A and element edge B are both outside scrolling box edge A and scrolling box edge B
         *
         *          ┌──┐
         *        ┏━│━━│━┓
         *          │  │
         *        ┃ │  │ ┃        do nothing
         *          │  │
         *        ┗━│━━│━┛
         *          └──┘
         *
         *  If element edge C and element edge D are both outside scrolling box edge C and scrolling box edge D
         *
         *    ┏ ━ ━ ━ ━ ┓
         *   ┌───────────┐
         *   │┃         ┃│        do nothing
         *   └───────────┘
         *    ┗ ━ ━ ━ ━ ┛
         */
        if ((elementEdgeStart < scrollingEdgeStart && elementEdgeEnd > scrollingEdgeEnd) ||
            (elementEdgeStart > scrollingEdgeStart && elementEdgeEnd < scrollingEdgeEnd)) {
            return 0;
        }
        /**
         * If element edge A is outside scrolling box edge A and element height is less than scrolling box height
         *
         *          ┌──┐
         *        ┏━│━━│━┓         ┏━┌━━┐━┓
         *          └──┘             │  │
         *  from  ┃      ┃     to  ┃ └──┘ ┃
         *
         *        ┗━ ━━ ━┛         ┗━ ━━ ━┛
         *
         * If element edge B is outside scrolling box edge B and element height is greater than scrolling box height
         *
         *        ┏━ ━━ ━┓         ┏━┌━━┐━┓
         *                           │  │
         *  from  ┃ ┌──┐ ┃     to  ┃ │  │ ┃
         *          │  │             │  │
         *        ┗━│━━│━┛         ┗━│━━│━┛
         *          │  │             └──┘
         *          │  │
         *          └──┘
         *
         * If element edge C is outside scrolling box edge C and element width is less than scrolling box width
         *
         *       from                 to
         *    ┏ ━ ━ ━ ━ ┓         ┏ ━ ━ ━ ━ ┓
         *  ┌───┐                 ┌───┐
         *  │ ┃ │       ┃         ┃   │     ┃
         *  └───┘                 └───┘
         *    ┗ ━ ━ ━ ━ ┛         ┗ ━ ━ ━ ━ ┛
         *
         * If element edge D is outside scrolling box edge D and element width is greater than scrolling box width
         *
         *       from                 to
         *    ┏ ━ ━ ━ ━ ┓         ┏ ━ ━ ━ ━ ┓
         *        ┌───────────┐   ┌───────────┐
         *    ┃   │     ┃     │   ┃         ┃ │
         *        └───────────┘   └───────────┘
         *    ┗ ━ ━ ━ ━ ┛         ┗ ━ ━ ━ ━ ┛
         */
        if ((elementEdgeStart <= scrollingEdgeStart && elementSize <= scrollingSize) ||
            (elementEdgeEnd >= scrollingEdgeEnd && elementSize >= scrollingSize)) {
            return elementEdgeStart - scrollingEdgeStart - scrollingBorderStart;
        }
        /**
         * If element edge B is outside scrolling box edge B and element height is less than scrolling box height
         *
         *        ┏━ ━━ ━┓         ┏━ ━━ ━┓
         *
         *  from  ┃      ┃     to  ┃ ┌──┐ ┃
         *          ┌──┐             │  │
         *        ┗━│━━│━┛         ┗━└━━┘━┛
         *          └──┘
         *
         * If element edge A is outside scrolling box edge A and element height is greater than scrolling box height
         *
         *          ┌──┐
         *          │  │
         *          │  │             ┌──┐
         *        ┏━│━━│━┓         ┏━│━━│━┓
         *          │  │             │  │
         *  from  ┃ └──┘ ┃     to  ┃ │  │ ┃
         *                           │  │
         *        ┗━ ━━ ━┛         ┗━└━━┘━┛
         *
         * If element edge C is outside scrolling box edge C and element width is greater than scrolling box width
         *
         *           from                 to
         *        ┏ ━ ━ ━ ━ ┓         ┏ ━ ━ ━ ━ ┓
         *  ┌───────────┐           ┌───────────┐
         *  │     ┃     │   ┃       │ ┃         ┃
         *  └───────────┘           └───────────┘
         *        ┗ ━ ━ ━ ━ ┛         ┗ ━ ━ ━ ━ ┛
         *
         * If element edge D is outside scrolling box edge D and element width is less than scrolling box width
         *
         *           from                 to
         *        ┏ ━ ━ ━ ━ ┓         ┏ ━ ━ ━ ━ ┓
         *                ┌───┐             ┌───┐
         *        ┃       │ ┃ │       ┃     │   ┃
         *                └───┘             └───┘
         *        ┗ ━ ━ ━ ━ ┛         ┗ ━ ━ ━ ━ ┛
         *
         */
        if ((elementEdgeEnd > scrollingEdgeEnd && elementSize < scrollingSize) ||
            (elementEdgeStart < scrollingEdgeStart && elementSize > scrollingSize)) {
            return elementEdgeEnd - scrollingEdgeEnd + scrollingBorderEnd;
        }
        return 0;
    };
    var canOverflow = function (overflow) {
        return overflow !== "visible" && overflow !== "clip";
    };
    var getFrameElement = function (element) {
        if (!element.ownerDocument || !element.ownerDocument.defaultView) {
            return null;
        }
        try {
            return element.ownerDocument.defaultView.frameElement;
        }
        catch (e) {
            return null;
        }
    };
    var isHiddenByFrame = function (element) {
        var frame = getFrameElement(element);
        if (!frame) {
            return false;
        }
        return frame.clientHeight < element.scrollHeight || frame.clientWidth < element.scrollWidth;
    };
    var isScrollable = function (element, computedStyle) {
        if (element.clientHeight < element.scrollHeight || element.clientWidth < element.scrollWidth) {
            return canOverflow(computedStyle.overflowY) || canOverflow(computedStyle.overflowX) || isHiddenByFrame(element);
        }
        return false;
    };
    var parentElement = function (element) {
        var parentNode = element.parentNode;
        if (parentNode !== null && parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            return parentNode.host;
        }
        return parentNode;
    };
    var clamp = function (value, width) {
        if (value < -width) {
            return -width;
        }
        if (value > width) {
            return width;
        }
        return value;
    };
    var isCSSPropertySupported = function (property) { return property in document.documentElement.style; };
    var getSupportedScrollMarginProperty = function () {
        // Webkit uses "scroll-snap-margin" https://bugs.webkit.org/show_bug.cgi?id=189265.
        return ["scroll-margin", "scroll-snap-margin"].filter(isCSSPropertySupported)[0];
    };
    var getElementScrollSnapArea = function (element, computedStyle) {
        var _a = element.getBoundingClientRect(), top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
        var _b = __read([
            "top",
            "right",
            "bottom",
            "left",
        ].map(function (edge) {
            var scrollProperty = getSupportedScrollMarginProperty();
            var value = computedStyle.getPropertyValue(scrollProperty + "-" + edge);
            return parseInt(value, 10) || 0;
        }), 4), scrollMarginTop = _b[0], scrollMarginRight = _b[1], scrollMarginBottom = _b[2], scrollMarginLeft = _b[3];
        return [top - scrollMarginTop, right + scrollMarginRight, bottom + scrollMarginBottom, left - scrollMarginLeft];
    };
    var elementScrollIntoView = function (element, options) {
        if (element.isConnected === false) {
            return;
        }
        // On Chrome and Firefox, document.scrollingElement will return the <html> element.
        // Safari, document.scrollingElement will return the <body> element.
        // On Edge, document.scrollingElement will return the <body> element.
        // IE11 does not support document.scrollingElement, but you can assume its <html>.
        // Used to handle the top most element that can be scrolled
        var scrollingElement = document.scrollingElement || document.documentElement;
        // Collect all the scrolling boxes, as defined in the spec: https://drafts.csswg.org/cssom-view/#scrolling-box
        var frames = [];
        var documentElementStyle = getComputedStyle(document.documentElement);
        for (var cursor = parentElement(element); cursor !== null; cursor = parentElement(cursor)) {
            // Stop when we reach the viewport
            if (cursor === scrollingElement) {
                frames.push(cursor);
                break;
            }
            var cursorStyle = getComputedStyle(cursor);
            // Skip document.body if it's not the scrollingElement and documentElement isn't independently scrollable
            if (cursor === document.body &&
                isScrollable(cursor, cursorStyle) &&
                !isScrollable(document.documentElement, documentElementStyle)) {
                continue;
            }
            // Now we check if the element is scrollable,
            // this code only runs if the loop haven't already hit the viewport or a custom boundary
            if (isScrollable(cursor, cursorStyle)) {
                frames.push(cursor);
            }
            if (cursorStyle.position === "fixed") {
                break;
            }
        }
        // Support pinch-zooming properly, making sure elements scroll into the visual viewport
        // Browsers that don't support visualViewport
        // will report the layout viewport dimensions on document.documentElement.clientWidth/Height
        // and viewport dimensions on window.innerWidth/Height
        // https://www.quirksmode.org/mobile/viewports2.html
        // https://bokand.github.io/viewport/index.html
        var viewportWidth = window.visualViewport ? window.visualViewport.width : innerWidth;
        var viewportHeight = window.visualViewport ? window.visualViewport.height : innerHeight;
        // Newer browsers supports scroll[X|Y], page[X|Y]Offset is
        var viewportX = window.scrollX || window.pageXOffset;
        var viewportY = window.scrollY || window.pageYOffset;
        var computedStyle = getComputedStyle(element);
        var _a = __read(getElementScrollSnapArea(element, computedStyle), 4), targetTop = _a[0], targetRight = _a[1], targetBottom = _a[2], targetLeft = _a[3];
        var targetHeight = targetBottom - targetTop;
        var targetWidth = targetRight - targetLeft;
        var writingMode = normalizeWritingMode(computedStyle.writingMode ||
            computedStyle.getPropertyValue("-webkit-writing-mode") ||
            computedStyle.getPropertyValue("-ms-writing-mode"));
        var isLTR = computedStyle.direction !== "rtl";
        var _b = __read(toPhysicalAlignment(options, writingMode, isLTR), 2), alignX = _b[0], alignY = _b[1];
        var targetBlock = (function () {
            switch (alignY) {
                case 1 /* CenterAlways */:
                    return targetTop + targetHeight / 2;
                case 2 /* LeftOrTop */:
                case 0 /* ToEdgeIfNeeded */:
                    return targetTop;
                case 3 /* RightOrBottom */:
                    return targetBottom;
            }
        })();
        var targetInline = (function () {
            switch (alignX) {
                case 1 /* CenterAlways */:
                    return targetLeft + targetWidth / 2;
                case 3 /* RightOrBottom */:
                    return targetRight;
                case 2 /* LeftOrTop */:
                case 0 /* ToEdgeIfNeeded */:
                    return targetLeft;
            }
        })();
        var actions = [];
        frames.forEach(function (frame) {
            var _a = frame.getBoundingClientRect(), height = _a.height, width = _a.width, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
            var frameStyle = getComputedStyle(frame);
            var borderLeft = parseInt(frameStyle.borderLeftWidth, 10);
            var borderTop = parseInt(frameStyle.borderTopWidth, 10);
            var borderRight = parseInt(frameStyle.borderRightWidth, 10);
            var borderBottom = parseInt(frameStyle.borderBottomWidth, 10);
            var blockScroll = 0;
            var inlineScroll = 0;
            // The property existance checks for offfset[Width|Height] is because only HTMLElement objects have them,
            // but any Element might pass by here
            // @TODO find out if the "as HTMLElement" overrides can be dropped
            var scrollbarWidth = "offsetWidth" in frame
                ? frame.offsetWidth - frame.clientWidth - borderLeft - borderRight
                : 0;
            var scrollbarHeight = "offsetHeight" in frame
                ? frame.offsetHeight - frame.clientHeight - borderTop - borderBottom
                : 0;
            if (scrollingElement === frame) {
                // Handle viewport logic (document.documentElement or document.body)
                switch (alignY) {
                    case 2 /* LeftOrTop */: {
                        blockScroll = targetBlock;
                        break;
                    }
                    case 3 /* RightOrBottom */: {
                        blockScroll = targetBlock - viewportHeight;
                        break;
                    }
                    case 1 /* CenterAlways */: {
                        blockScroll = targetBlock - viewportHeight / 2;
                        break;
                    }
                    case 0 /* ToEdgeIfNeeded */: {
                        blockScroll = alignNearest(viewportY, viewportY + viewportHeight, viewportHeight, borderTop, borderBottom, viewportY + targetBlock, viewportY + targetBlock + targetHeight, targetHeight);
                        break;
                    }
                }
                switch (alignX) {
                    case 2 /* LeftOrTop */: {
                        inlineScroll = targetInline;
                        break;
                    }
                    case 3 /* RightOrBottom */: {
                        inlineScroll = targetInline - viewportWidth;
                        break;
                    }
                    case 1 /* CenterAlways */: {
                        inlineScroll = targetInline - viewportWidth / 2;
                        break;
                    }
                    case 0 /* ToEdgeIfNeeded */: {
                        inlineScroll = alignNearest(viewportX, viewportX + viewportWidth, viewportWidth, borderLeft, borderRight, viewportX + targetInline, viewportX + targetInline + targetWidth, targetWidth);
                        break;
                    }
                }
                blockScroll += viewportY;
                inlineScroll += viewportX;
            }
            else {
                // Handle each scrolling frame that might exist between the target and the viewport
                switch (alignY) {
                    case 2 /* LeftOrTop */: {
                        blockScroll = targetBlock - top - borderTop;
                        break;
                    }
                    case 3 /* RightOrBottom */: {
                        blockScroll = targetBlock - bottom + borderBottom + scrollbarHeight;
                        break;
                    }
                    case 1 /* CenterAlways */: {
                        blockScroll = targetBlock - (top + height / 2) + scrollbarHeight / 2;
                        break;
                    }
                    case 0 /* ToEdgeIfNeeded */: {
                        blockScroll = alignNearest(top, bottom, height, borderTop, borderBottom + scrollbarHeight, targetBlock, targetBlock + targetHeight, targetHeight);
                        break;
                    }
                }
                switch (alignX) {
                    case 2 /* LeftOrTop */: {
                        inlineScroll = targetInline - left - borderLeft;
                        break;
                    }
                    case 3 /* RightOrBottom */: {
                        inlineScroll = targetInline - right + borderRight + scrollbarWidth;
                        break;
                    }
                    case 1 /* CenterAlways */: {
                        inlineScroll = targetInline - (left + width / 2) + scrollbarWidth / 2;
                        break;
                    }
                    case 0 /* ToEdgeIfNeeded */: {
                        inlineScroll = alignNearest(left, right, width, borderLeft, borderRight + scrollbarWidth, targetInline, targetInline + targetWidth, targetWidth);
                        break;
                    }
                }
                var scrollLeft = frame.scrollLeft, scrollTop = frame.scrollTop;
                // Ensure scroll coordinates are not out of bounds while applying scroll offsets
                blockScroll = clamp(scrollTop + blockScroll, frame.scrollHeight - height + scrollbarHeight);
                inlineScroll = clamp(scrollLeft + inlineScroll, frame.scrollWidth - width + scrollbarWidth);
                // Cache the offset so that parent frames can scroll this into view correctly
                targetBlock += scrollTop - blockScroll;
                targetInline += scrollLeft - inlineScroll;
            }
            actions.push(function () { return elementScroll(frame, __assign(__assign({}, options), { top: blockScroll, left: inlineScroll })); });
        });
        actions.forEach(function (run) { return run(); });
    };
    var elementScrollIntoViewPolyfill = function (animationOptions) {
        if (isScrollBehaviorSupported()) {
            return;
        }
        var originalFunc = original.elementScrollIntoView;
        modifyPrototypes(function (prototype) {
            return (prototype.scrollIntoView = function scrollIntoView() {
                var scrollIntoViewOptions = arguments[0];
                if (arguments.length === 1 && isObject(scrollIntoViewOptions)) {
                    return elementScrollIntoView(this, __assign(__assign({}, scrollIntoViewOptions), animationOptions));
                }
                return originalFunc.apply(this, arguments);
            });
        });
    };

    var elementScrollToPolyfill = function (animationOptions) {
        if (isScrollBehaviorSupported()) {
            return;
        }
        var originalFunc = original.elementScroll;
        modifyPrototypes(function (prototype) {
            return (prototype.scrollTo = function scrollTo() {
                if (arguments.length === 1) {
                    var scrollToOptions = arguments[0];
                    if (!isObject(scrollToOptions)) {
                        throw new TypeError("Failed to execute 'scrollTo' on 'Element': parameter 1 ('options') is not an object.");
                    }
                    var left = Number(scrollToOptions.left);
                    var top_1 = Number(scrollToOptions.top);
                    return elementScroll(this, __assign(__assign(__assign({}, scrollToOptions), { left: left, top: top_1 }), animationOptions));
                }
                return originalFunc.apply(this, arguments);
            });
        });
    };

    var windowScroll = function (options) {
        var _a, _b;
        var originalBoundFunc = original.windowScroll.bind(window);
        if (options.left === undefined && options.top === undefined) {
            return;
        }
        var startX = window.scrollX || window.pageXOffset;
        var startY = window.scrollY || window.pageYOffset;
        var targetX = nonFinite((_a = options.left) !== null && _a !== void 0 ? _a : startX);
        var targetY = nonFinite((_b = options.top) !== null && _b !== void 0 ? _b : startY);
        if (options.behavior !== "smooth") {
            return originalBoundFunc(targetX, targetY);
        }
        var removeEventListener = function () {
            window.removeEventListener("wheel", cancelScroll);
            window.removeEventListener("touchmove", cancelScroll);
        };
        var context = {
            timeStamp: now(),
            duration: options.duration,
            startX: startX,
            startY: startY,
            targetX: targetX,
            targetY: targetY,
            rafId: 0,
            method: originalBoundFunc,
            timingFunc: options.timingFunc,
            callback: removeEventListener,
        };
        var cancelScroll = function () {
            cancelAnimationFrame(context.rafId);
            removeEventListener();
        };
        window.addEventListener("wheel", cancelScroll, {
            passive: true,
            once: true,
        });
        window.addEventListener("touchmove", cancelScroll, {
            passive: true,
            once: true,
        });
        step(context);
    };
    var windowScrollPolyfill = function (animationOptions) {
        if (isScrollBehaviorSupported()) {
            return;
        }
        var originalFunc = original.windowScroll;
        window.scroll = function scroll() {
            if (arguments.length === 1) {
                var scrollOptions = arguments[0];
                if (!isObject(scrollOptions)) {
                    throw new TypeError("Failed to execute 'scroll' on 'Window': parameter 1 ('options') is not an object.");
                }
                return windowScroll(__assign(__assign({}, scrollOptions), animationOptions));
            }
            return originalFunc.apply(this, arguments);
        };
    };

    var windowScrollBy = function (options) {
        var left = nonFinite(options.left || 0) + (window.scrollX || window.pageXOffset);
        var top = nonFinite(options.top || 0) + (window.scrollY || window.pageYOffset);
        if (options.behavior !== "smooth") {
            return original.windowScroll.call(window, left, top);
        }
        return windowScroll(__assign(__assign({}, options), { left: left, top: top }));
    };
    var windowScrollByPolyfill = function (animationOptions) {
        if (isScrollBehaviorSupported()) {
            return;
        }
        window.scrollBy = function scrollBy() {
            if (arguments.length === 1) {
                var scrollByOptions = arguments[0];
                if (!isObject(scrollByOptions)) {
                    throw new TypeError("Failed to execute 'scrollBy' on 'Window': parameter 1 ('options') is not an object.");
                }
                return windowScrollBy(__assign(__assign({}, scrollByOptions), animationOptions));
            }
            var left = Number(arguments[0]);
            var top = Number(arguments[1]);
            return windowScrollBy({ left: left, top: top });
        };
    };

    var windowScrollToPolyfill = function (animationOptions) {
        if (isScrollBehaviorSupported()) {
            return;
        }
        var originalFunc = original.windowScroll;
        window.scrollTo = function scrollTo() {
            if (arguments.length === 1) {
                var scrollToOptions = arguments[0];
                if (!isObject(scrollToOptions)) {
                    throw new TypeError("Failed to execute 'scrollTo' on 'Window': parameter 1 ('options') is not an object.");
                }
                var left = Number(scrollToOptions.left);
                var top_1 = Number(scrollToOptions.top);
                return windowScroll(__assign(__assign(__assign({}, scrollToOptions), { left: left, top: top_1 }), animationOptions));
            }
            return originalFunc.apply(this, arguments);
        };
    };

    var polyfill = function (options) {
        if (isScrollBehaviorSupported()) {
            return;
        }
        windowScrollPolyfill(options);
        windowScrollToPolyfill(options);
        windowScrollByPolyfill(options);
        elementScrollPolyfill(options);
        elementScrollToPolyfill(options);
        elementScrollByPolyfill(options);
        elementScrollIntoViewPolyfill(options);
    };

    exports.elementScroll = elementScroll;
    exports.elementScrollBy = elementScrollBy;
    exports.elementScrollByPolyfill = elementScrollByPolyfill;
    exports.elementScrollIntoView = elementScrollIntoView;
    exports.elementScrollIntoViewPolyfill = elementScrollIntoViewPolyfill;
    exports.elementScrollPolyfill = elementScrollPolyfill;
    exports.elementScrollTo = elementScroll;
    exports.elementScrollToPolyfill = elementScrollToPolyfill;
    exports.polyfill = polyfill;
    exports.seamless = polyfill;
    exports.windowScroll = windowScroll;
    exports.windowScrollBy = windowScrollBy;
    exports.windowScrollByPolyfill = windowScrollByPolyfill;
    exports.windowScrollPolyfill = windowScrollPolyfill;
    exports.windowScrollTo = windowScroll;
    exports.windowScrollToPolyfill = windowScrollToPolyfill;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


}

if (!((function(){var e=document.createElement("p"),t=!1
return e.innerHTML="<section></section>",document.documentElement.appendChild(e),e.firstChild&&("getComputedStyle"in window?t="block"===getComputedStyle(e.firstChild).display:e.firstChild.currentStyle&&(t="block"===e.firstChild.currentStyle.display)),document.documentElement.removeChild(e),t})()
)) {

// ~html5-elements
/**
* @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
!function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=t.elements;return"string"==typeof a?a.split(" "):a}function e(a,b){var c=t.elements;"string"!=typeof c&&(c=c.join(" ")),"string"!=typeof a&&(a=a.join(" ")),t.elements=c+" "+a,j(b)}function f(a){var b=s[a[q]];return b||(b={},r++,a[q]=r,s[r]=b),b}function g(a,c,d){if(c||(c=b),l)return c.createElement(a);d||(d=f(c));var e;return e=d.cache[a]?d.cache[a].cloneNode():p.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!e.canHaveChildren||o.test(a)||e.tagUrn?e:d.frag.appendChild(e)}function h(a,c){if(a||(a=b),l)return a.createDocumentFragment();c=c||f(a);for(var e=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)e.createElement(h[g]);return e}function i(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return t.shivMethods?g(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(t,b.frag)}function j(a){a||(a=b);var d=f(a);return!t.shivCSS||k||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||i(a,d),a}var k,l,m="3.7.3-pre",n=a.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q="_html5shiv",r=0,s={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",k="hidden"in a,l=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){k=!0,l=!0}}();var t={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:n.shivCSS!==!1,supportsUnknownElements:l,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:j,createElement:g,createDocumentFragment:h,addElements:e};a.html5=t,j(b),"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:this,document);
}

})
('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
