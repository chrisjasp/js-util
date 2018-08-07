
export class Util {
  static startsWith(value, prefix) {
    let str;
    if (!value || !prefix) {
      return false;
    }
    str = value.toString();
    return str.toString().indexOf(prefix) !== -1;
  }

  static endsWith(value, suffix) {
    let str;
    if (!value || !suffix) {
      return false;
    }
    str = value.toString();
    return str.toString().indexOf(suffix, str.length - suffix.length) !== -1;
  }

  static removeTrailing(value, remove) {
    if (!value || !remove) {
      return value;
    }
    let hasTrailing = value.indexOf(remove, value.length - remove.length) !== -1;
    if (hasTrailing) {
      value = value.substring(0, value.length - remove.length);
    }
    return value;
  }

  static type(object) {
    return Object.prototype.toString.call(object);
  }

  static className(object) {
    return object != null ? object.constructor.name : null;
  }

  static isUndefined(obj) {
    return typeof obj === 'undefined';
  }

  static isUserDefinedObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  }

  static isString(value) {
    return typeof value === 'string';
  }
  static isObject(value) {
    return value != null && typeof value === 'object';
  }
  static isFunction(value) {
    return typeof value === 'function';
  }
  static isArray(array) {
    return Array.isArray(array);
  }

  static isError(obj) {
    return obj instanceof Error;
  }

  static isDate(obj) {
    return Object.prototype.toString.call(obj) === '[object Date]';
  }

  static toJson(obj) {
    return JSON.stringify(obj);
  }

}
