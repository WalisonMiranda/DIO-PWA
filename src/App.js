
import { StylesProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import GlobalStyles from './styles/GlobalStyles';

import Main from './pages/Main';

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyles />
      <Main />
    </StylesProvider>
  );
}

export default App;
