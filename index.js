"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var isObject_notObject = require("@writetome51/is-object-not-object");


// Arrays ARE considered objects.  Nulls are NOT.

function errorIfNotObject(arg) {
	if (isObject_notObject.notObject(arg)) throw new Error('Input must be object');
}
exports.errorIfNotObject = errorIfNotObject;
