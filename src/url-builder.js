
export class UrlBuilder {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this._paths = [];
    this._queryParams = [];
  }

  get baseUrl() {
    return this._baseUrl;
  }

  set baseUrl(baseUrl) {
    this._baseUrl = baseUrl != null ? baseUrl : '';
    // Remove leading/trailing spaces and trailing /'s (except when we only have a /)
    if (this._baseUrl !== '/') {
      this._baseUrl = baseUrl != null ? baseUrl.replace(/^\s+|\/+$|\s+$/g, '') : '';
    }
    return this;
  }

  path(... pathsArg) {
    if (pathsArg === null || pathsArg === undefined || pathsArg.length === 0) {
      throw new Error('Attempting to add empty set of sub paths to UrlBuilder');
    } else if (pathsArg.length === 1 && Object.prototype.toString.call(pathsArg[0]) === '[object Array]') {
      // If the argument itself is an array
      pathsArg = pathsArg[0];
    }

    pathsArg.forEach((path) => {
      if (path === null || path === undefined || path.length === 0) {
        throw new Error('Null sub path provided to UrlBuilder, path so far: ' + this._paths.join('/'));
      }
      // Remove any leading/trailing spaces or /'s
      path = path.toString().replace(/^\/+|^\s+|\/+$|\s+$/g, '');
      if (path === 0) {
        throw new Error('Empty sub path provided to UrlBuilder.');
      }
      this._paths.push(path);
    });
    return this;
  }

  query(query) {
    if (query) {
      for (let key in query) {
        if (query.hasOwnProperty(key)) {
          let value = query[key];
          if (value != null) {
            this._queryParams.push({key: key, value: value});
          }
        }
      }
    }
  }

  build() {
    // Use first path element as our base.
    let url = this._baseUrl;
    this._paths.forEach((subPath) => {
      url += '/' + subPath;
    });

    if (this._queryParams.length > 0) {
      let query = '';
      this._queryParams.forEach((queryParam) => {
        query += `${queryParam.key}=${queryParam.value}&`;
      });
      url += '?' + query.substring(0, query.length-1); // Removes last &
    }
    return url;
  }

  clear() {
    this._baseUrl = '';
    this._paths = [];
    this._queryParams = [];
    return this;
  }

  clearPath() {
    this._paths = [];
    return this;
  }

  clearParams() {
    this._queryParams = [];
    return this;
  }
}
