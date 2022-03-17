import {Provider} from 'react-redux';
import './App.css';
import HomePage from './pages';
import configureStore from '../src/redux/store';


const App = () => {
  return (
    <Provider store={configureStore}>
        <HomePage />
    </Provider>
  );
};

export default App;
