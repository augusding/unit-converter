import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Tabs, 
  Tab, 
  TextField, 
  Typography,
  Paper,
  Grid,
  Divider
} from '@mui/material';
import { unitCategories } from '../types/units';
import { Unit, UnitCategory } from '../types/units';

interface UnitConverterProps {
  categories: UnitCategory[];
}

const UnitConverter: React.FC<UnitConverterProps> = ({ categories }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [values, setValues] = useState<{ [key: string]: string }>({});
  const [lastChangedUnit, setLastChangedUnit] = useState<string | null>(null);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    setValues({});
    setLastChangedUnit(null);
  };

  const handleValueChange = (unitId: string, value: string) => {
    setLastChangedUnit(unitId);
    setValues(prev => ({ ...prev, [unitId]: value }));
  };

  useEffect(() => {
    if (!lastChangedUnit) return;

    const category = unitCategories[activeTab];
    const baseUnit = category.units.find(unit => unit.id === lastChangedUnit);
    if (!baseUnit || !values[lastChangedUnit]) return;

    const baseValue = parseFloat(values[lastChangedUnit]);
    if (isNaN(baseValue)) {
      setValues({});
      return;
    }

    const newValues: { [key: string]: string } = {};
    category.units.forEach(unit => {
      if (unit.id !== lastChangedUnit) {
        const convertedValue = (baseValue * baseUnit.conversionFactor) / unit.conversionFactor;
        newValues[unit.id] = convertedValue.toFixed(6).replace(/\.?0+$/, '');
      }
    });

    setValues(prev => ({ ...prev, ...newValues }));
  }, [values, lastChangedUnit, activeTab]);

  const renderLengthUnits = () => {
    const commonUnits = ['centimeter', 'inch', 'meter', 'foot', 'kilometer'];
    const uncommonUnits = ['cun', 'zhang', 'chi', 'li', 'mile', 'furlong', 'yard', 'nauticalMile'];
    
    const category = unitCategories[activeTab];
    
    return (
      <>
        <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>常用长度单位 / Common Length Units</Typography>
        <Grid container spacing={2}>
          {category.units
            .filter(unit => commonUnits.includes(unit.id))
            .map((unit) => (
              <Grid item xs={12} sm={6} md={4} key={unit.id}>
                <TextField
                  fullWidth
                  label={`${unit.name} (${unit.symbol})`}
                  value={values[unit.id] || ''}
                  onChange={(e) => handleValueChange(unit.id, e.target.value)}
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </Grid>
            ))}
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" sx={{ mb: 1 }}>非常用长度单位 / Uncommon Length Units</Typography>
        <Grid container spacing={2}>
          {category.units
            .filter(unit => uncommonUnits.includes(unit.id))
            .map((unit) => (
              <Grid item xs={12} sm={6} md={4} key={unit.id}>
                <TextField
                  fullWidth
                  label={`${unit.name} (${unit.symbol})`}
                  value={values[unit.id] || ''}
                  onChange={(e) => handleValueChange(unit.id, e.target.value)}
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </Grid>
            ))}
        </Grid>
      </>
    );
  };

  const renderWeightUnits = () => {
    const metricUnits = ['kilogram', 'gram', 'ton', 'milligram'];
    const avoirdupoisUnits = ['ounce', 'pound', 'longTon', 'shortTon', 'hundredweightUK', 'hundredweightUS', 'stone', 'dram', 'grain'];
    const chineseUnits = ['jin', 'liang', 'dan', 'qian'];
    const troyUnits = ['troyPound', 'troyOunce', 'pennyweight', 'troyGrain'];
    
    const category = unitCategories[activeTab];
    
    return (
      <>
        <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>公制 / Metric</Typography>
        <Grid container spacing={2}>
          {category.units
            .filter(unit => metricUnits.includes(unit.id))
            .map((unit) => (
              <Grid item xs={12} sm={6} md={4} key={unit.id}>
                <TextField
                  fullWidth
                  label={`${unit.name} (${unit.symbol})`}
                  value={values[unit.id] || ''}
                  onChange={(e) => handleValueChange(unit.id, e.target.value)}
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </Grid>
            ))}
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" sx={{ mb: 1 }}>常衡制 / Avoirdupois</Typography>
        <Grid container spacing={2}>
          {category.units
            .filter(unit => avoirdupoisUnits.includes(unit.id))
            .map((unit) => (
              <Grid item xs={12} sm={6} md={4} key={unit.id}>
                <TextField
                  fullWidth
                  label={`${unit.name} (${unit.symbol})`}
                  value={values[unit.id] || ''}
                  onChange={(e) => handleValueChange(unit.id, e.target.value)}
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </Grid>
            ))}
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" sx={{ mb: 1 }}>市制 / Chinese</Typography>
        <Grid container spacing={2}>
          {category.units
            .filter(unit => chineseUnits.includes(unit.id))
            .map((unit) => (
              <Grid item xs={12} sm={6} md={4} key={unit.id}>
                <TextField
                  fullWidth
                  label={`${unit.name} (${unit.symbol})`}
                  value={values[unit.id] || ''}
                  onChange={(e) => handleValueChange(unit.id, e.target.value)}
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </Grid>
            ))}
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" sx={{ mb: 1 }}>金衡制 / Troy</Typography>
        <Grid container spacing={2}>
          {category.units
            .filter(unit => troyUnits.includes(unit.id))
            .map((unit) => (
              <Grid item xs={12} sm={6} md={4} key={unit.id}>
                <TextField
                  fullWidth
                  label={`${unit.name} (${unit.symbol})`}
                  value={values[unit.id] || ''}
                  onChange={(e) => handleValueChange(unit.id, e.target.value)}
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </Grid>
            ))}
        </Grid>
      </>
    );
  };

  const renderVolumeUnits = () => {
    const metricUnits = ['cubicMeter', 'hectoliter', 'dekaliter', 'cubicDecimeter', 'deciliter', 'centiliter', 'cubicCentimeter', 'cubicMillimeter'];
    const dryUSUnits = ['barrelDry', 'bushelUS', 'peckUS', 'quartDryUS', 'pintDryUS'];
    const ukUnits = ['barrelUK', 'bushelUK', 'gallonUK', 'pintUK', 'fluidOunceUK'];
    const liquidUSUnits = ['barrelLiquidUS', 'gallonUS', 'quartLiquidUS', 'pintLiquidUS', 'gillUS', 'fluidOunceUS', 'fluidDramUS', 'minimUS'];
    const commonUnits = ['acreFoot', 'cubicYard', 'cubicFoot', 'cubicInch'];
    
    const category = unitCategories[activeTab];
    
    return (
      <>
        <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>公制 / Metric</Typography>
        <Grid container spacing={2}>
          {category.units
            .filter(unit => metricUnits.includes(unit.id))
            .map((unit) => (
              <Grid item xs={12} sm={6} md={4} key={unit.id}>
                <TextField
                  fullWidth
                  label={`${unit.name} (${unit.symbol})`}
                  value={values[unit.id] || ''}
                  onChange={(e) => handleValueChange(unit.id, e.target.value)}
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </Grid>
            ))}
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" sx={{ mb: 1 }}>美制干量 / US Dry</Typography>
        <Grid container spacing={2}>
          {category.units
            .filter(unit => dryUSUnits.includes(unit.id))
            .map((unit) => (
              <Grid item xs={12} sm={6} md={4} key={unit.id}>
                <TextField
                  fullWidth
                  label={`${unit.name} (${unit.symbol})`}
                  value={values[unit.id] || ''}
                  onChange={(e) => handleValueChange(unit.id, e.target.value)}
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </Grid>
            ))}
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" sx={{ mb: 1 }}>英制液量和干量 / UK Liquid & Dry</Typography>
        <Grid container spacing={2}>
          {category.units
            .filter(unit => ukUnits.includes(unit.id))
            .map((unit) => (
              <Grid item xs={12} sm={6} md={4} key={unit.id}>
                <TextField
                  fullWidth
                  label={`${unit.name} (${unit.symbol})`}
                  value={values[unit.id] || ''}
                  onChange={(e) => handleValueChange(unit.id, e.target.value)}
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </Grid>
            ))}
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" sx={{ mb: 1 }}>美制液量 / US Liquid</Typography>
        <Grid container spacing={2}>
          {category.units
            .filter(unit => liquidUSUnits.includes(unit.id))
            .map((unit) => (
              <Grid item xs={12} sm={6} md={4} key={unit.id}>
                <TextField
                  fullWidth
                  label={`${unit.name} (${unit.symbol})`}
                  value={values[unit.id] || ''}
                  onChange={(e) => handleValueChange(unit.id, e.target.value)}
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </Grid>
            ))}
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" sx={{ mb: 1 }}>美英同制体积计量 / Common Volume Units</Typography>
        <Grid container spacing={2}>
          {category.units
            .filter(unit => commonUnits.includes(unit.id))
            .map((unit) => (
              <Grid item xs={12} sm={6} md={4} key={unit.id}>
                <TextField
                  fullWidth
                  label={`${unit.name} (${unit.symbol})`}
                  value={values[unit.id] || ''}
                  onChange={(e) => handleValueChange(unit.id, e.target.value)}
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </Grid>
            ))}
        </Grid>
      </>
    );
  };

  const renderAreaUnits = () => {
    const metricUnits = ['squareKilometer', 'hectare', 'mu', 'squareMeter', 'squareDecimeter', 'squareCentimeter', 'squareMillimeter'];
    const imperialUnits = ['squareMile', 'acre', 'squareRod', 'squareYard', 'squareFoot', 'squareInch'];
    
    const category = unitCategories[activeTab];
    
    return (
      <>
        <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>公制 / Metric</Typography>
        <Grid container spacing={2}>
          {category.units
            .filter(unit => metricUnits.includes(unit.id))
            .map((unit) => (
              <Grid item xs={12} sm={6} md={4} key={unit.id}>
                <TextField
                  fullWidth
                  label={`${unit.name} (${unit.symbol})`}
                  value={values[unit.id] || ''}
                  onChange={(e) => handleValueChange(unit.id, e.target.value)}
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </Grid>
            ))}
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" sx={{ mb: 1 }}>英制 / Imperial</Typography>
        <Grid container spacing={2}>
          {category.units
            .filter(unit => imperialUnits.includes(unit.id))
            .map((unit) => (
              <Grid item xs={12} sm={6} md={4} key={unit.id}>
                <TextField
                  fullWidth
                  label={`${unit.name} (${unit.symbol})`}
                  value={values[unit.id] || ''}
                  onChange={(e) => handleValueChange(unit.id, e.target.value)}
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </Grid>
            ))}
        </Grid>
      </>
    );
  };

  const renderHeatUnits = () => {
    const category = unitCategories[activeTab];
    
    return (
      <Grid container spacing={2}>
        {category.units.map((unit) => (
          <Grid item xs={12} sm={6} md={4} key={unit.id}>
            <TextField
              fullWidth
              label={`${unit.name} (${unit.symbol})`}
              value={values[unit.id] || ''}
              onChange={(e) => handleValueChange(unit.id, e.target.value)}
              type="number"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
        ))}
      </Grid>
    );
  };

  const renderTemperatureUnits = () => {
    const category = unitCategories[activeTab];
    
    return (
      <Grid container spacing={2}>
        {category.units.map((unit) => (
          <Grid item xs={12} sm={6} md={4} key={unit.id}>
            <TextField
              fullWidth
              label={`${unit.name} (${unit.symbol})`}
              value={values[unit.id] || ''}
              onChange={(e) => handleValueChange(unit.id, e.target.value)}
              type="number"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
        ))}
      </Grid>
    );
  };

  const renderPressureUnits = () => {
    const metricUnits = ['bar', 'kilopascal', 'hectopascal', 'millibar', 'pascal', 'standardAtmosphere', 'millimeterOfMercury', 'millimeterOfWater', 'kilogramForcePerSquareCentimeter', 'kilogramForcePerSquareMeter'];
    const imperialUnits = ['poundForcePerSquareFoot', 'poundForcePerSquareInch', 'inchOfMercury'];
    
    const category = unitCategories[activeTab];
    
    return (
      <>
        <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>公制 / Metric</Typography>
        <Grid container spacing={2}>
          {category.units
            .filter(unit => metricUnits.includes(unit.id))
            .map((unit) => (
              <Grid item xs={12} sm={6} md={4} key={unit.id}>
                <TextField
                  fullWidth
                  label={`${unit.name} (${unit.symbol})`}
                  value={values[unit.id] || ''}
                  onChange={(e) => handleValueChange(unit.id, e.target.value)}
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </Grid>
            ))}
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" sx={{ mb: 1 }}>英制 / Imperial</Typography>
        <Grid container spacing={2}>
          {category.units
            .filter(unit => imperialUnits.includes(unit.id))
            .map((unit) => (
              <Grid item xs={12} sm={6} md={4} key={unit.id}>
                <TextField
                  fullWidth
                  label={`${unit.name} (${unit.symbol})`}
                  value={values[unit.id] || ''}
                  onChange={(e) => handleValueChange(unit.id, e.target.value)}
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </Grid>
            ))}
        </Grid>
      </>
    );
  };

  const renderPowerUnits = () => {
    const metricUnits = ['watt', 'kilowatt', 'metricHorsepower', 'kilogramMeterPerSecond', 'kilocaloriePerSecond', 'joulePerSecond', 'newtonMeterPerSecond'];
    const imperialUnits = ['imperialHorsepower', 'britishThermalUnitPerSecond', 'footPoundPerSecond'];
    
    const category = unitCategories[activeTab];
    
    return (
      <>
        <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>公制 / Metric</Typography>
        <Grid container spacing={2}>
          {category.units
            .filter(unit => metricUnits.includes(unit.id))
            .map((unit) => (
              <Grid item xs={12} sm={6} md={4} key={unit.id}>
                <TextField
                  fullWidth
                  label={`${unit.name} (${unit.symbol})`}
                  value={values[unit.id] || ''}
                  onChange={(e) => handleValueChange(unit.id, e.target.value)}
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </Grid>
            ))}
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" sx={{ mb: 1 }}>英制 / Imperial</Typography>
        <Grid container spacing={2}>
          {category.units
            .filter(unit => imperialUnits.includes(unit.id))
            .map((unit) => (
              <Grid item xs={12} sm={6} md={4} key={unit.id}>
                <TextField
                  fullWidth
                  label={`${unit.name} (${unit.symbol})`}
                  value={values[unit.id] || ''}
                  onChange={(e) => handleValueChange(unit.id, e.target.value)}
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </Grid>
            ))}
        </Grid>
      </>
    );
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Tabs 
          value={activeTab} 
          onChange={handleTabChange} 
          variant="scrollable"
          scrollButtons="auto"
          sx={{ 
            position: 'sticky',
            top: 0,
            zIndex: 100,
            backgroundColor: 'background.paper',
            borderBottom: 1,
            borderColor: 'divider',
            '& .MuiTab-root': {
              minWidth: 'auto',
              padding: '6px 12px',
              fontSize: '1rem'
            }
          }}
        >
          {unitCategories.map((category) => (
            <Tab key={category.id} label={category.name} />
          ))}
        </Tabs>

        <Box 
          sx={{ 
            mt: 3,
            minHeight: '500px',
            transition: 'all 0.3s ease-in-out',
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          {activeTab === 0 ? renderLengthUnits() : null}
          {activeTab === 1 ? renderWeightUnits() : null}
          {activeTab === 2 ? renderVolumeUnits() : null}
          {activeTab === 3 ? renderAreaUnits() : null}
          {activeTab === 4 ? renderHeatUnits() : null}
          {activeTab === 5 ? renderTemperatureUnits() : null}
          {activeTab === 6 ? renderPressureUnits() : null}
          {activeTab === 7 ? renderPowerUnits() : null}
        </Box>
      </Paper>
    </Box>
  );
};

export default UnitConverter; 