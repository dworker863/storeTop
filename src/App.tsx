import Header from './app/components/Sections/Header/Header';
import { ThemeProvider } from 'styled-components';

import { commonTheme } from './app/commonStyles/theme';
import Menu from './app/components/Blocks/Menu/Menu';

function App() {
  return (
    <ThemeProvider theme={commonTheme}>
      <Header />
      <Menu />
    </ThemeProvider>
  );
}

export default App;
