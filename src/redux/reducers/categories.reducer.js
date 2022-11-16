

const categories = (state =[], action)=>{
    switch (action.type){
        case 'SET_CURRENT_CATEGORY':
            return action.payload;
        default:
            return state;
    }


}