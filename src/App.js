import { AppRouter } from './AppRouter';
import { ContentProvider } from './contexts';

const App = () => (
  <ContentProvider>
    <AppRouter />
  </ContentProvider>
);

export default App;
