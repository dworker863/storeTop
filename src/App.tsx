import Header from './app/components/Sections/Header/Header';
import { ThemeProvider } from 'styled-components';

import { commonTheme } from './app/commonStyles/theme';

function App() {
  return (
    <ThemeProvider theme={commonTheme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
