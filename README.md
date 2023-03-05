<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# randu

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an array containing [uniformly][@stdlib/random/base/randu] distributed pseudorandom numbers between `0` and `1`.



<section class="usage">

## Usage

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-randu@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-randu@deno/mod.js';
```

#### randu( len\[, options] )

Returns an array containing [uniformly][@stdlib/random/base/randu] distributed pseudorandom numbers between `0` and `1`.

```javascript
var out = randu( 10 );
// returns <Float64Array>
```

The function has the following parameters:

-   **len**: output array length.
-   **options**: function options.

The function accepts the following `options`:

-   **dtype**: output array data type. Must be a [real-valued floating-point data type][@stdlib/array/typed-real-float-dtypes] or "generic". Default: `'float64'`.

By default, the function returns a [`Float64Array`][@stdlib/array/float64]. To return an array having a different data type, set the `dtype` option.

```javascript
var opts = {
    'dtype': 'generic'
};

var out = randu( 10, opts );
// returns [...]
```

#### randu.factory( \[options] )

Returns a function for creating arrays containing [uniformly][@stdlib/random/base/randu] distributed pseudorandom numbers between `0` and `1`.

```javascript
var random = randu.factory();

var out = random( 10 );
// returns <Float64Array>

var len = out.length;
// returns 10
```

The function accepts the following `options`:

-   **name**: name of a supported pseudorandom number generator (PRNG), which will serve as the underlying source of pseudorandom numbers. The following generators are supported:

    -   [`mt19937`][@stdlib/random/base/mt19937]: 32-bit Mersenne Twister.
    -   [`minstd`][@stdlib/random/base/minstd]: linear congruential pseudorandom number generator (LCG) based on Park and Miller.
    -   [`minstd-shuffle`][@stdlib/random/base/minstd-shuffle]: linear congruential pseudorandom number generator (LCG) whose output is shuffled.

    Default: [`'mt19937'`][@stdlib/random/base/mt19937].

-   **seed**: pseudorandom number generator seed. Valid seed values vary according to the underlying PRNG.

-   **state**: pseudorandom number generator state. Valid state values vary according to the underlying PRNG. If provided, the function ignores the `seed` option.

-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned generator has exclusive control over its internal state. Default: `true`.

-   **dtype**: default output array data type. Must be a [real-valued floating-point data type][@stdlib/array/typed-real-float-dtypes] or "generic". Default: `'float64'`.

By default, the underlying pseudorandom number generator is [`mt19937`][@stdlib/random/base/mt19937]. To use a different PRNG, set the `name` option.

```javascript
var opts = {
    'name': 'minstd-shuffle'
};
var random = randu.factory( opts );

var out = random( 10 );
// returns <Float64Array>
```

To seed the underlying pseudorandom number generator, set the `seed` option.

```javascript
var opts = {
    'seed': 12345
};
var random = randu.factory( opts );

var out = random( 10, opts );
// returns <Float64Array>
```

The returned function accepts the following `options`:

-   **dtype**: output array data type. Must be a [real-valued floating-point data type][@stdlib/array/typed-real-float-dtypes] or "generic". This overrides the default output array data type.

To override the default output array data type, set the `dtype` option.

```javascript
var random = randu.factory();

var out = random( 10 );
// returns <Float64Array>

var opts = {
    'dtype': 'generic'
};
out = random( 10, opts );
// returns [...]
```

#### randu.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = randu.PRNG;
// returns <Function>
```

#### randu.seed

The value used to seed the underlying pseudorandom number generator.

```javascript
var seed = randu.seed;
```

#### randu.seedLength

Length of underlying pseudorandom number generator seed.

```javascript
var len = randu.seedLength;
// returns <number>
```

#### randu.state

Writable property for getting and setting the underlying pseudorandom number generator state.

```javascript
var state = randu.state;
```

#### randu.stateLength

Length of underlying pseudorandom number generator state.

```javascript
var len = randu.stateLength;
// returns <number>
```

#### randu.byteLength

Size (in bytes) of underlying pseudorandom number generator state.

```javascript
var sz = randu.byteLength;
// returns <number>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   **Warning**: the default underlying source of pseudorandom numbers may **change** in the future. If exact reproducibility is required, either explicitly specify a PRNG via the `name` option or use an underlying PRNG directly.
-   If PRNG state is "shared" (meaning a state array was provided during function creation and **not** copied) and one sets the underlying generator state to a state array having a different length, the function returned by the `factory` method does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize the output of the underlying generator according to the new shared state array, the state array for **each** relevant creation function and/or PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the underlying generator state to a state array of the same length, the PRNG state is updated (along with the state of all other creation functions and/or PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import logEach from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each@deno/mod.js';
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-randu@deno/mod.js';

// Create a function for generating random arrays originating from the same state:
var random = randu.factory({
    'state': randu.state,
    'copy': true
});

// Generate 3 arrays:
var x1 = random( 5 );
var x2 = random( 5 );
var x3 = random( 5 );

// Print the contents:
logEach( '%f, %f, %f', x1, x2, x3 );

// Create another function for generating random arrays with the original state:
random = randu.factory({
    'state': randu.state,
    'copy': true
});

// Generate a single array which replicates the above pseudorandom number generation sequence:
var x4 = random( 15 );

// Print the contents:
logEach( '%f', x4 );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-array-randu.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-array-randu

[test-image]: https://github.com/stdlib-js/random-array-randu/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/random-array-randu/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-array-randu/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-array-randu?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-array-randu.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-array-randu/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-array-randu/tree/deno
[umd-url]: https://github.com/stdlib-js/random-array-randu/tree/umd
[esm-url]: https://github.com/stdlib-js/random-array-randu/tree/esm
[branches-url]: https://github.com/stdlib-js/random-array-randu/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-array-randu/main/LICENSE

[@stdlib/random/base/randu]: https://github.com/stdlib-js/random-base-randu/tree/deno

[@stdlib/random/base/mt19937]: https://github.com/stdlib-js/random-base-mt19937/tree/deno

[@stdlib/random/base/minstd]: https://github.com/stdlib-js/random-base-minstd/tree/deno

[@stdlib/random/base/minstd-shuffle]: https://github.com/stdlib-js/random-base-minstd-shuffle/tree/deno

[@stdlib/array/typed-real-float-dtypes]: https://github.com/stdlib-js/array-typed-real-float-dtypes/tree/deno

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64/tree/deno

</section>

<!-- /.links -->
