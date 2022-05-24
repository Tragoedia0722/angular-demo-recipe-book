export class Recipe {
  private _name: string;
  private _description: string;
  private _imgPath: string;

  constructor(name: string, description: string, imgPath: string) {
    this._name = name;
    this._description = description;
    this._imgPath = imgPath;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get imgPath(): string {
    return this._imgPath;
  }

  set imgPath(value: string) {
    this._imgPath = value;
  }
}
