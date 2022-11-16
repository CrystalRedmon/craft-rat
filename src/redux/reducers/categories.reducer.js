import { combineReducers } from "redux";

const currentCategory = (state =[], action)=>{
    switch (action.type){
        case 'SET_CURRENT_CATEGORY':
            return action.payload;
        default:
            return state;
    }


}

export default combineReducers ({
    currentCategory,
})