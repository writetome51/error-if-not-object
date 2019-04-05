# errorIfNotObject(arg): void

Triggers error if `arg` is not an object.  Arrays are considered objects.  Null is not.

## Examples
```
errorIfNotObject({}); // no error.
errorIfNotObject([]); // no error.

errorIfNotObject(null); // Error: "Input must be object"

// If you try to create a primitive with a constructor function, 
// it becomes an object:
let str = new String('string');
errorIfNotObject(str); // no error.
```


## Installation
`npm i  @writetome51/error-if-not-object`

## Loading
```
// if using TypeScript:
import { errorIfNotObject} from '@writetome51/error-if-not-object';
// if using ES5 JavaScript:
var errorIfNotObject = 
     require('@writetome51/error-if-not-object').errorIfNotObject;
```
