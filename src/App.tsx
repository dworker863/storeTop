import Header from './app/components/Sections/Header/Header';
import { ThemeProvider } from 'styled-components';

import { commonTheme } from './app/commonStyles/theme';
import Menu from './app/components/Blocks/Menu/Menu';
import PopularGoods from './app/components/Sections/PopularGoods/PopularGoods';
import Container from './app/components/Blocks/Container/Container';
import DiscountGoods from './app/components/Sections/DiscountGoods/DiscountGoods';

function App() {
  return (
    <ThemeProvider theme={commonTheme}>
      <Header />
      <main>
        <Menu />
        <Container type="common">
          <PopularGoods />
          {/* <DiscountGoods /> */}
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default App;
