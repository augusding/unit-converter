export interface Unit {
  id: string;
  name: string;
  symbol: string;
  conversionFactor: number;
}

export interface UnitCategory {
  id: string;
  name: string;
  units: Unit[];
}

export const unitCategories: UnitCategory[] = [
  {
    id: 'length',
    name: '长度 / Length',
    units: [
      { id: 'centimeter', name: '厘米', symbol: 'cm', conversionFactor: 0.01 },
      { id: 'inch', name: '英寸', symbol: 'in', conversionFactor: 0.0254 },
      { id: 'meter', name: '米', symbol: 'm', conversionFactor: 1 },
      { id: 'foot', name: '英尺', symbol: 'ft', conversionFactor: 0.3048 },
      { id: 'kilometer', name: '公里', symbol: 'km', conversionFactor: 1000 },
      { id: 'cun', name: '寸', symbol: '寸', conversionFactor: 0.0333333 },
      { id: 'zhang', name: '丈', symbol: '丈', conversionFactor: 3.33333 },
      { id: 'chi', name: '尺', symbol: '尺', conversionFactor: 0.333333 },
      { id: 'li', name: '厘', symbol: '厘', conversionFactor: 0.000333333 },
      { id: 'mile', name: '英里', symbol: 'mi', conversionFactor: 1609.34 },
      { id: 'furlong', name: '弗隆', symbol: 'fur', conversionFactor: 201.168 },
      { id: 'yard', name: '码', symbol: 'yd', conversionFactor: 0.9144 },
      { id: 'nauticalMile', name: '海里', symbol: 'nmi', conversionFactor: 1852 }
    ]
  },
  {
    id: 'weight',
    name: '重量 / Weight',
    units: [
      // 公制
      { id: 'kilogram', name: '公斤', symbol: 'kg', conversionFactor: 1 },
      { id: 'gram', name: '克', symbol: 'g', conversionFactor: 0.001 },
      { id: 'ton', name: '吨', symbol: 't', conversionFactor: 1000 },
      { id: 'milligram', name: '毫克', symbol: 'mg', conversionFactor: 0.000001 },
      
      // 常衡制
      { id: 'ounce', name: '盎司', symbol: 'oz', conversionFactor: 0.0283495 },
      { id: 'pound', name: '磅', symbol: 'lb', conversionFactor: 0.453592 },
      { id: 'longTon', name: '长吨', symbol: 'long ton', conversionFactor: 1016.05 },
      { id: 'shortTon', name: '短吨', symbol: 'short ton', conversionFactor: 907.185 },
      { id: 'hundredweightUK', name: '英担', symbol: 'cwt UK', conversionFactor: 50.8023 },
      { id: 'hundredweightUS', name: '美担', symbol: 'cwt US', conversionFactor: 45.3592 },
      { id: 'stone', name: '英石', symbol: 'st', conversionFactor: 6.35029 },
      { id: 'dram', name: '打兰', symbol: 'dr', conversionFactor: 0.00177185 },
      { id: 'grain', name: '格令', symbol: 'gr', conversionFactor: 0.0000647989 },
      
      // 市制
      { id: 'jin', name: '市斤', symbol: '斤', conversionFactor: 0.5 },
      { id: 'liang', name: '两', symbol: '两', conversionFactor: 0.05 },
      { id: 'dan', name: '担', symbol: '担', conversionFactor: 50 },
      { id: 'qian', name: '钱', symbol: '钱', conversionFactor: 0.005 },
      
      // 金衡制
      { id: 'troyPound', name: '金衡磅', symbol: 'lb t', conversionFactor: 0.373242 },
      { id: 'troyOunce', name: '金衡盎', symbol: 'oz t', conversionFactor: 0.0311035 },
      { id: 'pennyweight', name: '英钱', symbol: 'dwt', conversionFactor: 0.00155517 },
      { id: 'troyGrain', name: '金衡格令', symbol: 'gr t', conversionFactor: 0.0000647989 }
    ]
  },
  {
    id: 'volume',
    name: '体积 / Volume',
    units: [
      // 公制
      { id: 'cubicMeter', name: '立方米', symbol: 'm³', conversionFactor: 1 },
      { id: 'hectoliter', name: '公石', symbol: 'hl', conversionFactor: 0.1 },
      { id: 'dekaliter', name: '十升', symbol: 'dal', conversionFactor: 0.01 },
      { id: 'cubicDecimeter', name: '立方分米', symbol: 'dm³', conversionFactor: 0.001 },
      { id: 'deciliter', name: '分升', symbol: 'dl', conversionFactor: 0.0001 },
      { id: 'centiliter', name: '厘升', symbol: 'cl', conversionFactor: 0.00001 },
      { id: 'cubicCentimeter', name: '立方厘米', symbol: 'cm³', conversionFactor: 0.000001 },
      { id: 'cubicMillimeter', name: '立方毫米', symbol: 'mm³', conversionFactor: 0.000000001 },
      
      // 美制干量
      { id: 'barrelDry', name: '桶(美制干量)', symbol: 'bbl dry', conversionFactor: 0.115627 },
      { id: 'bushelUS', name: '蒲式耳(美制)', symbol: 'bu US', conversionFactor: 0.0352391 },
      { id: 'peckUS', name: '配克(美制)', symbol: 'pk US', conversionFactor: 0.00880977 },
      { id: 'quartDryUS', name: '夸脱(美制干量)', symbol: 'qt dry US', conversionFactor: 0.00110122 },
      { id: 'pintDryUS', name: '品脱(美制干量)', symbol: 'pt dry US', conversionFactor: 0.00055061 },
      
      // 英制液量和干量
      { id: 'barrelUK', name: '桶(英制)', symbol: 'bbl UK', conversionFactor: 0.163659 },
      { id: 'bushelUK', name: '蒲式耳(英制)', symbol: 'bu UK', conversionFactor: 0.0363687 },
      { id: 'gallonUK', name: '加仑(英制)', symbol: 'gal UK', conversionFactor: 0.00454609 },
      { id: 'pintUK', name: '品脱(英制)', symbol: 'pt UK', conversionFactor: 0.000568261 },
      { id: 'fluidOunceUK', name: '液量盎司(英制)', symbol: 'fl oz UK', conversionFactor: 0.0000284131 },
      
      // 美制液量
      { id: 'barrelLiquidUS', name: '桶(美制液量)', symbol: 'bbl US', conversionFactor: 0.158987 },
      { id: 'gallonUS', name: '加仑(美制)', symbol: 'gal US', conversionFactor: 0.00378541 },
      { id: 'quartLiquidUS', name: '夸脱(美制液量)', symbol: 'qt US', conversionFactor: 0.000946353 },
      { id: 'pintLiquidUS', name: '品脱(美制液量)', symbol: 'pt US', conversionFactor: 0.000473176 },
      { id: 'gillUS', name: '及耳(美制)', symbol: 'gi US', conversionFactor: 0.000118294 },
      { id: 'fluidOunceUS', name: '液量盎司(美制)', symbol: 'fl oz US', conversionFactor: 0.0000295735 },
      { id: 'fluidDramUS', name: '液量打兰(美制)', symbol: 'fl dr US', conversionFactor: 0.00000369669 },
      { id: 'minimUS', name: '量滴(美制)', symbol: 'min US', conversionFactor: 0.0000000616115 },
      
      // 美英同制体积计量
      { id: 'acreFoot', name: '亩英尺', symbol: 'ac ft', conversionFactor: 1233.48 },
      { id: 'cubicYard', name: '立方码', symbol: 'yd³', conversionFactor: 0.764555 },
      { id: 'cubicFoot', name: '立方英尺', symbol: 'ft³', conversionFactor: 0.0283168 },
      { id: 'cubicInch', name: '立方英寸', symbol: 'in³', conversionFactor: 0.0000163871 }
    ]
  },
  {
    id: 'area',
    name: '面积 / Area',
    units: [
      { id: 'squareKilometer', name: '平方千米', symbol: 'km²', conversionFactor: 1000000 },
      { id: 'hectare', name: '公顷', symbol: 'ha', conversionFactor: 10000 },
      { id: 'mu', name: '亩', symbol: '亩', conversionFactor: 666.667 },
      { id: 'squareMeter', name: '平方米', symbol: 'm²', conversionFactor: 1 },
      { id: 'squareDecimeter', name: '平方分米', symbol: 'dm²', conversionFactor: 0.01 },
      { id: 'squareCentimeter', name: '平方厘米', symbol: 'cm²', conversionFactor: 0.0001 },
      { id: 'squareMillimeter', name: '平方毫米', symbol: 'mm²', conversionFactor: 0.000001 },
      { id: 'squareMile', name: '平方英里', symbol: 'mi²', conversionFactor: 2589988.11 },
      { id: 'acre', name: '英亩', symbol: 'ac', conversionFactor: 4046.86 },
      { id: 'squareRod', name: '平方杆', symbol: 'rd²', conversionFactor: 25.2929 },
      { id: 'squareYard', name: '平方码', symbol: 'yd²', conversionFactor: 0.836127 },
      { id: 'squareFoot', name: '平方英尺', symbol: 'ft²', conversionFactor: 0.092903 },
      { id: 'squareInch', name: '平方英寸', symbol: 'in²', conversionFactor: 0.00064516 }
    ]
  },
  {
    id: 'heat',
    name: '热量 / Heat',
    units: [
      { id: 'joule', name: '焦耳', symbol: 'J', conversionFactor: 1 },
      { id: 'kilogramMeter', name: '公斤·米', symbol: 'kg·m', conversionFactor: 9.80665 },
      { id: 'metricHorsepowerHour', name: '米制马力·时', symbol: 'PS·h', conversionFactor: 2647795.5 },
      { id: 'imperialHorsepowerHour', name: '英制马力·时', symbol: 'HP·h', conversionFactor: 2684519.54 },
      { id: 'kilowattHour', name: '千瓦·时', symbol: 'kW·h', conversionFactor: 3600000 },
      { id: 'kilocalorie', name: '千卡', symbol: 'kcal', conversionFactor: 4184 },
      { id: 'britishThermalUnit', name: '英热单位', symbol: 'BTU', conversionFactor: 1055.06 },
      { id: 'footPound', name: '英尺·磅', symbol: 'ft·lb', conversionFactor: 1.35582 }
    ]
  },
  {
    id: 'temperature',
    name: '温度 / Temperature',
    units: [
      { id: 'celsius', name: '摄氏度', symbol: '°C', conversionFactor: 1 },
      { id: 'fahrenheit', name: '华氏度', symbol: '°F', conversionFactor: 1.8 },
      { id: 'kelvin', name: '开氏度', symbol: 'K', conversionFactor: 1 },
      { id: 'rankine', name: '兰氏度', symbol: '°R', conversionFactor: 1.8 },
      { id: 'reaumur', name: '列氏度', symbol: '°Ré', conversionFactor: 0.8 }
    ]
  },
  {
    id: 'pressure',
    name: '压力 / Pressure',
    units: [
      { id: 'bar', name: '巴', symbol: 'bar', conversionFactor: 100000 },
      { id: 'kilopascal', name: '千帕', symbol: 'kPa', conversionFactor: 1000 },
      { id: 'hectopascal', name: '百帕', symbol: 'hPa', conversionFactor: 100 },
      { id: 'millibar', name: '毫巴', symbol: 'mbar', conversionFactor: 100 },
      { id: 'pascal', name: '帕斯卡', symbol: 'Pa', conversionFactor: 1 },
      { id: 'standardAtmosphere', name: '标准大气压', symbol: 'atm', conversionFactor: 101325 },
      { id: 'millimeterOfMercury', name: '毫米汞柱', symbol: 'mmHg', conversionFactor: 133.322 },
      { id: 'poundForcePerSquareFoot', name: '磅力/英尺²', symbol: 'lbf/ft²', conversionFactor: 47.8803 },
      { id: 'poundForcePerSquareInch', name: '磅力/英寸²', symbol: 'psi', conversionFactor: 6894.76 },
      { id: 'inchOfMercury', name: '英吋汞柱', symbol: 'inHg', conversionFactor: 3386.39 },
      { id: 'kilogramForcePerSquareCentimeter', name: '公斤力/厘米²', symbol: 'kgf/cm²', conversionFactor: 98066.5 },
      { id: 'kilogramForcePerSquareMeter', name: '公斤力/米²', symbol: 'kgf/m²', conversionFactor: 9.80665 },
      { id: 'millimeterOfWater', name: '毫米水柱', symbol: 'mmH₂O', conversionFactor: 9.80665 }
    ]
  },
  {
    id: 'power',
    name: '功率 / Power',
    units: [
      { id: 'watt', name: '瓦', symbol: 'W', conversionFactor: 1 },
      { id: 'kilowatt', name: '千瓦', symbol: 'kW', conversionFactor: 1000 },
      { id: 'imperialHorsepower', name: '英制马力', symbol: 'HP', conversionFactor: 745.7 },
      { id: 'metricHorsepower', name: '米制马力', symbol: 'PS', conversionFactor: 735.499 },
      { id: 'kilogramMeterPerSecond', name: '公斤·米/秒', symbol: 'kg·m/s', conversionFactor: 9.80665 },
      { id: 'kilocaloriePerSecond', name: '千卡/秒', symbol: 'kcal/s', conversionFactor: 4184 },
      { id: 'britishThermalUnitPerSecond', name: '英热单位/秒', symbol: 'BTU/s', conversionFactor: 1055.06 },
      { id: 'footPoundPerSecond', name: '英尺·磅/秒', symbol: 'ft·lb/s', conversionFactor: 1.35582 },
      { id: 'joulePerSecond', name: '焦耳/秒', symbol: 'J/s', conversionFactor: 1 },
      { id: 'newtonMeterPerSecond', name: '牛顿·米/秒', symbol: 'N·m/s', conversionFactor: 1 }
    ]
  }
]; 