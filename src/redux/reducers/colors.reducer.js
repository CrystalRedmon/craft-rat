import { combineReducers } from "redux";


const currentColor = (state =[], action)=>{
    switch (action.type){
        case 'SET_CURRENT_COLOR':
            return action.payload;
        default:
            return state;
    }

}

const allColors = (state =[], action) =>{
    switch (action.type){
        case 'SET_COLORS':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers ({
    currentColor,
    allColors,
})