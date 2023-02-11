// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@v0.0.8-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real-float-ctors@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled-by@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-nullary@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real-float-dtypes@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";var h="float64",j=m();function f(e,t){return p(t)?a(t,"dtype")&&(e.dtype=t.dtype,j.indexOf(e.dtype)<0)?new TypeError(l("null3t","dtype",j.join('", "'),e.dtype)):null:new TypeError(l("null2h",t))}function c(){var m,p,a,j,c,u;if(a={dtype:h},j=y,0===(p=arguments.length))c=n;else if(1===p&&(m=arguments[0],c=n.factory(m),u=f(a,m)))throw u;return s(j,"seed",g),s(j,"seedLength",b),r(j,"state",w,G),s(j,"stateLength",v),s(j,"byteLength",x),e(j,"PRNG",c.PRNG),j;function y(e,s){var r,n,m,p;if(!t(e))throw new TypeError(l("null2p",e));if(p={},arguments.length>1&&(n=f(p,s)))throw n;return"generic"===(m=p.dtype||a.dtype)?d(e,c):(r=new(i(m))(e),o([r],[e],[1],c),r)}function g(){return j.PRNG.seed}function b(){return j.PRNG.seedLength}function v(){return j.PRNG.stateLength}function x(){return j.PRNG.byteLength}function w(){return j.PRNG.state}function G(e){j.PRNG.state=e}}j.push("generic");var u=c();e(u,"factory",c);export{u as default,c as factory};
//# sourceMappingURL=index.mjs.map
