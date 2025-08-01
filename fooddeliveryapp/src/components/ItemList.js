import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


const {ItemList} = ({ }) =>
{
    const handleAddItem = () => {
        // dispatch an action 
        dispatch(addItem(cart));
    }
} 