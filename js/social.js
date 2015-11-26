

function MuSoftAccounts(baseURL, newContext)
{
var user = this;
this._name = null;
this._facebookId = null;
this._mainUser = null;
this._fullname = null;
this._searchHandler = null;
this._currentSearch = null;
this._baseURL = baseURL;

this.handlers = [];

}