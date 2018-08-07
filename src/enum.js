export class Enum {
  constructor(init) {
    this._entries = [];
    if (Object.is(init, undefined) || Object.is(init, null)) {
      throw new Error('ConstMap init is not defined');
    } else {
      for (let key in init) {
        if (init.hasOwnProperty(key)) {
          let value = init[key];
          value = (value !== null && value !== undefined) ? value : key;
          this[key] = value;
          this._entries.push({key: key, value: value});
        }
      }
    }
    Object.freeze(this);
    Object.freeze(this._entries);
  }

  keys() {
    return Array.from(this._entries, e => e.keys);
  }
  values() {
    return Array.from(this._entries, e => e.value);
  }
  valuesExcluding(exclude) {
    return Array.from(this.entriesExcluding(exclude), e => e.value);
  }
  entries() {
    return this._entries.slice();
  }
  entriesExcluding(exclude) {
    if (exclude === null || exclude === undefined) {
      return this._entries;
    }
    let found = [];
    if (Array.isArray(exclude)) {
      for (let e of this._entries) {
        if (!exclude.includes(e.value)) {
          found.push(e.value);
        }
      }
    } else {
      for (let e of this._entries) {
        if (e.value !== exclude) {
          found.push(e.value);
        }
      }
    }
    return found;
  }
}
