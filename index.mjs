// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real-float-ctors@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled-by@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-nullary@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real-float-dtypes@v0.1.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";var j="float64",f=l();function h(e,t){return p(t)?a(t,"dtype")&&(e.dtype=t.dtype,f.indexOf(e.dtype)<0)?new TypeError(m("1eP2X,3g,4S,GD,Gg,Jm","dtype",f.join('", "'),e.dtype)):null:new TypeError(m("1eP2V,FD",t))}function c(){var l,p,a,f,c,v;if(a={dtype:j},f=u,0===(p=arguments.length))c=n;else if(1===p&&(l=arguments[0],c=n.factory(l),v=h(a,l)))throw v;return s(f,"seed",y),s(f,"seedLength",g),r(f,"state",G,P),s(f,"stateLength",b),s(f,"byteLength",x),e(f,"PRNG",c.PRNG),f;function u(e,s){var r,n,l,p;if(!t(e))throw new TypeError(m("1eP2d,MG",e));if(p={},arguments.length>1&&(n=h(p,s)))throw n;return"generic"===(l=p.dtype||a.dtype)?i(e,c):(r=new(d(l))(e),o([r],[e],[1],c),r)}function y(){return f.PRNG.seed}function g(){return f.PRNG.seedLength}function b(){return f.PRNG.stateLength}function x(){return f.PRNG.byteLength}function G(){return f.PRNG.state}function P(e){f.PRNG.state=e}}f.push("generic");var v=c();e(v,"factory",c);export{v as default,c as factory};
//# sourceMappingURL=index.mjs.map
