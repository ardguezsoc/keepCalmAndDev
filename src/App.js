
import { ThemeProvider } from 'styled-components';
import { keepCalmDevtTheme } from 'themes/keepCalmDevtTheme'
import { GlobalAppStyles } from 'styles/GlobalApp.styled'
import { ContentProvider } from 'contexts'
import { AppRouter } from 'AppRouter'

const App = () => (
  <ContentProvider>
    <ThemeProvider theme={keepCalmDevtTheme}>
      <AppRouter />
      <GlobalAppStyles />
    </ThemeProvider>
  </ContentProvider>
);

export default App;

