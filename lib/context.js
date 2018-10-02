'use strict';

class Context {

  constructor () {
    this._user = null;
    this._disablePaperTrail = false
  }

  set user (user) {
    this._user = user;
  }

  get user () {
    return this._user;
  }

  set disablePaperTrail (disablePaperTrail) {
    this._disablePaperTrail = disablePaperTrail;
  }

  get disablePaperTrail () {
    return this._disablePaperTrail;
  }

  static current () {
    if (!Context._current) {
      Context._current = new Context();
    }
    return Context._current;
  }
}

module.exports = Context;
