import {useSelector} from "react-redux";

const Header = () =>
{
    //subscribing to the store using useSelector hook
    const cart = useSelector((store) => store.cart.items);
}