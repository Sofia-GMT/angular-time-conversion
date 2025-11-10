export class Country {

    constructor(
        private _countryName: string,
        private _date: string,
        private _isoCode: string,
        private _time: string
    ) {}

    public get countryName(): string {
        return this._countryName;
    }
    public get date(): string {
        return this._date;
    }
    public get isoCode(): string {
        return this._isoCode;
    }
    public get time(): string {
        return this._time;
    }
    public set countryName(value: string) {
        this._countryName = value;
    }
    public set date(value: string) {
        this._date = value;
    }
    public set isoCode(value: string) {
        this._isoCode = value;
    }
    public set time(value: string) {
        this._time = value;
    }

}
