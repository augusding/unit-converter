import { UnitCategories } from '../types/unit';

export const unitCategories: UnitCategories = {
  length: {
    name: '长度',
    units: [
      {
        name: '米',
        symbol: 'm',
        toBase: (value) => value,
        fromBase: (value) => value,
      },
      {
        name: '千米',
        symbol: 'km',
        toBase: (value) => value * 1000,
        fromBase: (value) => value / 1000,
      },
      {
        name: '厘米',
        symbol: 'cm',
        toBase: (value) => value / 100,
        fromBase: (value) => value * 100,
      },
      {
        name: '毫米',
        symbol: 'mm',
        toBase: (value) => value / 1000,
        fromBase: (value) => value * 1000,
      },
    ],
  },
  weight: {
    name: '重量',
    units: [
      {
        name: '千克',
        symbol: 'kg',
        toBase: (value) => value,
        fromBase: (value) => value,
      },
      {
        name: '克',
        symbol: 'g',
        toBase: (value) => value / 1000,
        fromBase: (value) => value * 1000,
      },
      {
        name: '毫克',
        symbol: 'mg',
        toBase: (value) => value / 1000000,
        fromBase: (value) => value * 1000000,
      },
    ],
  },
  temperature: {
    name: '温度',
    units: [
      {
        name: '摄氏度',
        symbol: '°C',
        toBase: (value) => value,
        fromBase: (value) => value,
      },
      {
        name: '华氏度',
        symbol: '°F',
        toBase: (value) => (value - 32) * 5/9,
        fromBase: (value) => value * 9/5 + 32,
      },
      {
        name: '开尔文',
        symbol: 'K',
        toBase: (value) => value - 273.15,
        fromBase: (value) => value + 273.15,
      },
    ],
  },
  area: {
    name: '面积',
    units: [
      {
        name: '平方米',
        symbol: 'm²',
        toBase: (value) => value,
        fromBase: (value) => value,
      },
      {
        name: '平方千米',
        symbol: 'km²',
        toBase: (value) => value * 1000000,
        fromBase: (value) => value / 1000000,
      },
      {
        name: '平方厘米',
        symbol: 'cm²',
        toBase: (value) => value / 10000,
        fromBase: (value) => value * 10000,
      },
      {
        name: '公顷',
        symbol: 'ha',
        toBase: (value) => value * 10000,
        fromBase: (value) => value / 10000,
      },
      {
        name: '亩',
        symbol: 'mu',
        toBase: (value) => value * 666.67,
        fromBase: (value) => value / 666.67,
      },
    ],
  },
  volume: {
    name: '体积',
    units: [
      {
        name: '立方米',
        symbol: 'm³',
        toBase: (value) => value,
        fromBase: (value) => value,
      },
      {
        name: '升',
        symbol: 'L',
        toBase: (value) => value / 1000,
        fromBase: (value) => value * 1000,
      },
      {
        name: '毫升',
        symbol: 'mL',
        toBase: (value) => value / 1000000,
        fromBase: (value) => value * 1000000,
      },
      {
        name: '立方厘米',
        symbol: 'cm³',
        toBase: (value) => value / 1000000,
        fromBase: (value) => value * 1000000,
      },
    ],
  },
  power: {
    name: '功率',
    units: [
      {
        name: '瓦特',
        symbol: 'W',
        toBase: (value) => value,
        fromBase: (value) => value,
      },
      {
        name: '千瓦',
        symbol: 'kW',
        toBase: (value) => value * 1000,
        fromBase: (value) => value / 1000,
      },
      {
        name: '马力',
        symbol: 'hp',
        toBase: (value) => value * 745.7,
        fromBase: (value) => value / 745.7,
      },
      {
        name: '兆瓦',
        symbol: 'MW',
        toBase: (value) => value * 1000000,
        fromBase: (value) => value / 1000000,
      },
    ],
  },
  pressure: {
    name: '压力',
    units: [
      {
        name: '帕斯卡',
        symbol: 'Pa',
        toBase: (value) => value,
        fromBase: (value) => value,
      },
      {
        name: '千帕',
        symbol: 'kPa',
        toBase: (value) => value * 1000,
        fromBase: (value) => value / 1000,
      },
      {
        name: '兆帕',
        symbol: 'MPa',
        toBase: (value) => value * 1000000,
        fromBase: (value) => value / 1000000,
      },
      {
        name: '巴',
        symbol: 'bar',
        toBase: (value) => value * 100000,
        fromBase: (value) => value / 100000,
      },
      {
        name: '标准大气压',
        symbol: 'atm',
        toBase: (value) => value * 101325,
        fromBase: (value) => value / 101325,
      },
    ],
  },
}; 