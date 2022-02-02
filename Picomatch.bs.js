// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Picomatch = require("picomatch");
var Caml_option = require("rescript/lib/js/caml_option.js");

function matchAll(options, patterns) {
  return Picomatch(patterns, options);
}

function match(options, pattern) {
  return Picomatch(pattern, options);
}

function test(options, input, regex) {
  return Picomatch.test(input, regex, options);
}

function matchBase(options, input, glob) {
  return Picomatch.matchBase(input, glob, options);
}

function matchBaseRe(options, input, regex) {
  return Picomatch.matchBase(input, regex, options);
}

function scanWithTokens(options, input) {
  if (options === undefined) {
    return Picomatch.scan(input, {
                tokens: true
              });
  }
  var options$1 = Caml_option.valFromOption(options);
  options$1["tokens"] = true;
  return Picomatch.scan(input, Caml_option.some(options$1));
}

function scanWithParts(options, input) {
  if (options === undefined) {
    return Picomatch.scan(input, {
                parts: true
              });
  }
  var options$1 = Caml_option.valFromOption(options);
  options$1["parts"] = true;
  return Picomatch.scan(input, Caml_option.some(options$1));
}

function scan(options, input) {
  return Picomatch.scan(input, options);
}

function parse(options, glob) {
  return Picomatch.parse(glob, options);
}

function compileRe(options, state) {
  return Picomatch.compileRe(state, options);
}

function makeRe(options, compiledGlob) {
  return Picomatch.makeRe(compiledGlob, options);
}

function toRegex(options, source) {
  return Picomatch.toRegex(source, options);
}

exports.matchAll = matchAll;
exports.match = match;
exports.test = test;
exports.matchBase = matchBase;
exports.matchBaseRe = matchBaseRe;
exports.scanWithTokens = scanWithTokens;
exports.scanWithParts = scanWithParts;
exports.scan = scan;
exports.parse = parse;
exports.compileRe = compileRe;
exports.makeRe = makeRe;
exports.toRegex = toRegex;
/* picomatch Not a pure module */
