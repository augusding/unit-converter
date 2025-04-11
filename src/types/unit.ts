export interface Unit {
  name: string;
  symbol: string;
  toBase: (value: number) => number;
  fromBase: (value: number) => number;
}

export interface UnitCategory {
  name: string;
  units: Unit[];
}

export type UnitCategories = {
  [key: string]: UnitCategory;
}; 