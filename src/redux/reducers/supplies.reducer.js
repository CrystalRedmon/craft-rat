import { combineReducers } from "redux";


const supplies = (state = [], action)=>{
    switch (action.type){
        case 'SET_SUPPLIES':
            return action.payload;
        default:
            return state;
    }

}

export default supplies;