import {GlobalStyle} from './styles/global'
import {Routes} from './routes'
import { Header } from './components/Header';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes/>
        <GlobalStyle/>
      </Router>
    </Provider>
  );
}

export default App;
