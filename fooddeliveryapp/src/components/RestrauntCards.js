
  import React from "react";
  import restr from '../utils/restrauntdata';

  
  const RestrauntCards = (props) => {
    const {restr} = props;
   // console.log("props");
    //console.log(restr);

  restr.forEach(element => {
    console.log(element.name)
  });
  
  const StyleCard = {
    backgroundColor : "#f0f0f0"
  }
  
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

  export default RestrauntCards;