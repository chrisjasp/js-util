# ctjs-util
A small ES6 utility library that provides some common helper methods as well as Enum, Options, and UrlBuilder.

## Getting Started
Install ctjs-util
```
npm install --save ctjs-util
```

### Enum
```javascript
export const MyType = new Enum({
  Yes: null,
  No: null,
  Some: null
});

MyType.keys(); // returns all keys
MyType.values(); // returns all values or keys if values are null
MyType.valuesExcluding(exclude); // returns all values except excluded ones
MyType.entries(); // returns all entries
MyType.entriesExcluding(exclude); // returns all entries except excluded ones
```

### Options
```javascript
export const Cleared = new Options({
  Uncleared: "Uncleared Title",
  Pending: "Pending Title",
  Cleared: "Cleared Title"
});

Cleared.list(); // returns Array of Option that has a key and value for each Option
Cleared.listExcluding(excluding);
Cleared.keys(); // returns Array keys
Cleared.forKey(key, ifUndefined); // returns Option that has a key and value

let option = Cleared.forKey('Uncleared');
option.title; // Uncleared Title
option.value; // Uncleared
opion.key; // Uncleared
```

### UrlBuilder
```javascript
import {UrlBuilder} from 'ctjs-util';

let builder = new UrlBuilder(baseUrl);
builder.path('/somepath'); // will be {baseUrl}/somepath
builder.query({}); // Object to create query parameters
let url = builder.build(); // builds the url and returns the build string
```

### Util
```javascript
Util.startsWith(value, prefix);
Util.endsWith(value, suffix);
Util.removeTrailing(value, remove);
Util.type(object); // Returns prototype toString
Util.className(object); // Returns object className
Util.toJson(obj); // returns json toString
Util.isUserDefinedOject(obj);
Util.isString(value);
Util.isObject(value);
Util.isFunction(value);
Util.isArray(value);
Util.isError(value);
Util.isDate(value);
```

### Who do I talk to?
chrisjasp@gmail.com