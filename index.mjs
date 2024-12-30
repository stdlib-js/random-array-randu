// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real-float-ctors@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled-by@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-nullary@v0.3.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real-float-dtypes@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";var f="float64",j=l();function h(e,t){return p(t)?a(t,"dtype")&&(e.dtype=t.dtype,j.indexOf(e.dtype)<0)?new TypeError(m("1eP4S","dtype",j.join('", "'),e.dtype)):null:new TypeError(m("1eP2V",t))}function c(){var l,p,a,j,c,u;if(a={dtype:f},j=function(e,r){var s,n,l,p,f;if(!t(e))throw new TypeError(m("1eP2d",e));if(f={},arguments.length>1&&(l=h(f,r)))throw l;if("generic"===(p=f.dtype||a.dtype))return d(e,c);return s=i(p),n=new s(e),o([n],[e],[1],c),n},0===(p=arguments.length))c=n;else if(1===p&&(l=arguments[0],c=n.factory(l),u=h(a,l)))throw u;return r(j,"seed",(function(){return j.PRNG.seed})),r(j,"seedLength",(function(){return j.PRNG.seedLength})),s(j,"state",(function(){return j.PRNG.state}),(function(e){j.PRNG.state=e})),r(j,"stateLength",(function(){return j.PRNG.stateLength})),r(j,"byteLength",(function(){return j.PRNG.byteLength})),e(j,"PRNG",c.PRNG),j}j.push("generic");var u=c();e(u,"factory",c);export{u as default,c as factory};
//# sourceMappingURL=index.mjs.map
