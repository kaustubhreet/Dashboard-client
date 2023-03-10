import React,{useMemo} from 'react';
import { CssBaseline,ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from 'theme';
import { useSelector } from 'react-redux';

function App() {

  const mode=useSelector((state)=>state.global.mode);
  const theme=useMemo(() => createTheme(themeSettings(mode)),[mode]);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
      </ThemeProvider>
    </div>
  )
}

export default App