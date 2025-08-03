import RestrauntCards from "./RestrauntCards";
import restr from '../utils/restrauntdata';

const Body = () => {


    return (
      <div className='body'>
        <div className='filter' style={ {padding : "10px"} }>
            <button className="search-btn" style={ {padding : "10px", cursor : "pointer", marginLeft : "5%"} }
            onClick = {() => {console.log("button clicked")}}
            >Top rates restraunts</button>
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

  export default Body;