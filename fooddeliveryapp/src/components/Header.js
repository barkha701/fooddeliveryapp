import {useSelector} from "react-redux";

const Header = () =>
{
    //subscribing to the store using useSelector hook
    const cart = useSelector((store) => store.cart.items);
    return (
        <div className="header">
          <div className="logo-container">
          <img height="200px"
          alt = "companylogo"
          src="https://static.vecteezy.com/system/resources/previews/010/952/713/large_2x/food-delivery-logo-design-speedy-food-logo-concept-free-vector.jpg"></img>
          </div>
        <div className="nav-items">
         <ul>
           <li>Home</li>
           <li>About Us</li>
           <li>Contact Us</li>
           <li>Cart</li>
         </ul>
        </div>
        </div>
      );
}

export default Header;