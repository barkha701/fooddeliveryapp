import {useSelector} from "react-redux";
import { company_logo } from "../utils/constants";

const Header = () =>
{
    //subscribing to the store using useSelector hook
    const cart = useSelector((store) => store.cart.items);
    return (
        <div className="header">
          <div className="logo-container">
          <img height="200px"
          alt = "companylogo"
          src= {company_logo}></img>
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