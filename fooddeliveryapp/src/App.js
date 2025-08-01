import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import appStore from './utils/appStore';
import Cart from './components/Cart';

function App() {
  return (
    <Provider store = {appStore}>
    <div className="App">
      <Cart/>
    </div>
    </Provider>
  );
}

export default App;
