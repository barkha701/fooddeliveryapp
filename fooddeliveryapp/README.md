# Redux 
can be used with any JS libarary. to be used to manage state in large scale applications.

# Zustand 
Another library which is gaining popularity other than redux and does the same thing as redux. 

# Redux store 
a JS object, kept at a central point. 
in case of huge redux store, we make slices to distrbute data. 
# slice 
logical separations in redux store. Eg : user slice, theme slice, cart slice, etc. 

# onClick => dipatch(action) => function call => modifications by function call (slice of the store modified)
# function call is known as the reducer

# selector  
used to read data from redux store and then modify react component 
above phenomenon is known is
# subscribing to the store 
used to make the data
# in sync 

useSelector
useDispatch

# Redux toolkit steps 
- install @reduxjs/toolkit and react-redux
- build our store    ({configureStore} from redux-toolkit and reducers)
- connect our store to app 
- slice (cart slice)
- dispatch (action)
- selector 

# redux toolkit says either mutate the existing state or return a new state
# state = []; will only modify the local variable


# different calls
<button
onClick = {handleItem} 
onClick = {() => handleItem(item)} // writing a callback function
onClick = {handleItem(item)} //calling the fn right away
>
</button>



# same code example using selector :

const cartItems = useSelector((store) => store.cart.items );
OR
const store = useSelector((store) => store); const cartItems = store.cart.items ;
This is very inefficient because here we are subscribing to the whole store in const store and whenever any part of store changes it updates unnecessarily. 

# redux dev tools : a browser tool helps in debugging 

