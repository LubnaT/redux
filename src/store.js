import { createStore } from "redux"

const reducerFunction = (state ={counter : 0} , action)=>{
    return state;
}

const store = createStore(reducerFunction);

export default store