export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpireDate: Date,
  ) { }

  get token() {
    if (!this._tokenExpireDate || new Date() > this._tokenExpireDate)
      //如果沒有token期效或現在時間大於token期效(已過期)
      return null;
    return this._token;
  }
}