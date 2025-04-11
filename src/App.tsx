import React from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme, Typography, Box, Paper } from '@mui/material';
import UnitConverter from './components/UnitConverter';
import { unitCategories } from './types/units';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        width: '100%',
        position: 'relative'
      }}>
        <Paper 
          elevation={3} 
          sx={{ 
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            backgroundColor: 'background.paper',
            width: '100%'
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', py: 2 }}>
              <Typography variant="h3" component="h1" gutterBottom>
                单位换算器 / Unit Converter
              </Typography>
              <Typography variant="h5" component="h2" color="text.secondary">
                度量衡单位转换工具 / Measurement Unit Conversion Tool
              </Typography>
            </Box>
          </Container>
        </Paper>

        <Box sx={{ flex: 1, overflow: 'auto', width: '100%' }}>
          <Container maxWidth="lg" sx={{ py: 3 }}>
            <UnitConverter categories={unitCategories} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
