
export class Option {
  constructor(key, init) {
    if (Object.is(key, undefined)) {
      throw Error('Option key is undefined');
    }
    this.key = key;
    if (typeof init === 'string' || init instanceof String) {
      this.title = init;
      this.value = key;
    } else {
      init = init === null || init === undefined ? {} : init;
      this.title = !Object.is(init.title, undefined) ? init.title : key;
      this.value = !Object.is(init.value, undefined) ? init.value : key;
    }
    Object.freeze(this);
  }
  toString() {
    return this.title;
  }
}

export class Options {
  constructor(optionsInit) {
    this._all = [];
    this._keys = [];
    if (Object.is(optionsInit, undefined)) {
      throw new Error('Options init is null');
    } else if (Array.isArray(optionsInit)) {
      for (let key of optionsInit) {
        let option = new Option(key);
        this[key] = option;
        this._all.push(option);
        this._keys.push(key);
      }
    } else {
      for (let key in optionsInit) {
        if (optionsInit.hasOwnProperty(key)) {
          let init = optionsInit[key];
          let option = new Option(key, init);
          this[key] = option;
          this._all.push(option);
          this._keys.push(key);
        }
      }
    }
    Object.freeze(this);
    Object.freeze(this._all);
    Object.freeze(this._keys);
  }
  list() {
    return this._all.slice();
  }
  listExcluding(exclude) {
    if (exclude === null || exclude === undefined) {
      return this._all;
    }
    let found = [];
    if (Array.isArray(exclude)) {
      for (let o of this._all) {
        if (!exclude.includes(o)) {
          found.push(o);
        }
      }
    } else {
      for (let o of this._all) {
        if (o !== exclude) {
          found.push(o);
        }
      }
    }
    return found;
  }
  keys() {
    return this._keys.slice();
  }
  forKey(key, ifUndefined) {
    let option = this[key];
    if (option === undefined) {
      return ifUndefined !== undefined ? ifUndefined : null;
    }
    return option;
  }
}
