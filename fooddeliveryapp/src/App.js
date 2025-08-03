import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import appStore from './utils/appStore';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <Provider store = {appStore}>
    <div className="App">
     <Header/>
     <Body/>
    </div>
    </Provider>
  );
}

const AppLayout = () => {
  return (
    <div className='app'></div>

  );
}

export default App;
