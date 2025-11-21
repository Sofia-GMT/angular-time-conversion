export class Country {

    constructor(
        private _countryName: string,
        private _isoCode: string,
        private _timeZone: string,
    ) {}

    public get countryName(): string {
        return this._countryName;
    }
    public get isoCode(): string {
        return this._isoCode;
    }
    public set countryName(value: string) {
        this._countryName = value;
    }
    public set isoCode(value: string) {
        this._isoCode = value;
    }
    public get timeZone(): string {
        return this._timeZone;
    }
    public set timeZone(value: string) {
        this._timeZone = value;
    }

}
