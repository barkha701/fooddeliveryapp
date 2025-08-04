Array.prototype.join 

please read

.array.join(,)
# join the array with , 


# Whenever you use map, always use key

# Never use index as keys

# whenever a react variable updates, react re-renders the component 



# - - - - - - - - - - - - - - - - - - -- - -- --------------------------------

# Reconciliation alogorithm (React fibre) ---- React 16

Virtual DOM is a representation of actual DOM. 
Diff algo => calculates the difference between 2 virtual DOMs and updates the previous DOM. 
 whenever 2nd function is called, it automatically calls and updates the DOM tree. React keeps an eye on state cariables. 

 const [arr, setArr] = useState(res); 

 above is same as below :

 const arr = useState(res);
 const [arr, setArr] = arr; 




