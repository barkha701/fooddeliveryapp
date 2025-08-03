import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import appStore from './utils/appStore';
import Cart from './components/Cart';
import restr from './utils/restrauntdata';
import Header from './components/Header';

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


const StyleCard = {
  backgroundColor : "#f0f0f0"
}

const RestrauntCards = (props) => {
  const {restr} = props;
  console.log("props");
restr.forEach(element => {
  console.log(element.name)
});


  return (
    <>
    {restr.map((restraunt, index) => (
    <div className='res-card' key={index} style={{   backgroundColor : "#f0f0f0"}}>
   <img className='res-logo' alt='foodimg'
    src={restraunt.image}></img>
   <div>
     <h3>{restraunt.name}</h3>
     <h3>{restraunt.address}</h3>
     <h4>{restraunt.cuisine}</h4>
     <p>{restraunt.rating}</p>
     </div>
     </div>
))}
</>

    );
}


const Body = () => {
  return (
    <div className='body'>
      <div className='searchbar'>
        Search 
      </div>
      <div className='res-container'>
{/*  restrauant cards
img, eta, cuisines, name

here we could also loop over restraunt 

{
  resList.map((restraunt)=> 
  <RestrauntCard resData={restraunt} key={restraunt.id}/>
  )

  we are looping over each item in the list using "restraunt" and then passing it to ReatrauntCard component
}

*/
}
<RestrauntCards restr = {restr}/>


      </div>

    </div>

  );
}

const AppLayout = () => {
  return (
    <div className='app'></div>

  );
}

export default App;
