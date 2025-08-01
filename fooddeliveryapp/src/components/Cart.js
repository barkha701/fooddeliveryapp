import { useDispatch, useSelector } from "react-redux";

const Cart = () => {

const cartItems = useSelector((store) => store.cart.items);

const dispatch = useDispatch();

const clearCart = (state, action) => {

    state.items.length = 0; 
    // or return { items: [] }; // state not even needed here because returning an empty object
    // either return updated state or mutate the state 
    // state = []; is invalid because it only changes the local variable

};

    return (
        <div className="text-centre m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <ul>items</ul>
        </div>
    )
}

export default Cart;