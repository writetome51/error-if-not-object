import {notObject} from '@writetome51/is-object-not-object';


// Arrays are considered objects.  Nulls are not.

export function errorIfNotObject(arg) {
	if (notObject(arg)) throw new Error('Input must be object');
}
