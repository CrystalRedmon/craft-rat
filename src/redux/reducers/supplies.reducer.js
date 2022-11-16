import { combineReducers } from "redux";


const supplies = (state = [], action)=>{
    switch (action.type){
        case 'SET_SUPPLIES':
            return action.payload;
        default:
            return state;
    }

}

const currentSupplies =(state = [], action)=>{
    switch (action.type){
        case 'SET_CURRENT_SUPPLIES':
            return action.payload;
        default:
            return state;
    }
}


export default combineReducers({
    supplies,
    currentSupplies
});