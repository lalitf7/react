import * as actions from "./actionType" ;

let lastId = 0;

const reducer = (state = [], action) => {
    switch(action.type){
        case actions.ADD_BOT:
            return [...state, {id: ++lastId, name: action.payload.name}];
        case actions.DELETE_BOT:
            return state.filter(bot => bot.id !== action.payload.id);
        default:
            return state;
    }
    

    // if(action.type === action.ADD_BOT){
    //     return [...state, {id: ++lastId, name: action.payload.name}];
    // } else {
    //     console.log("");
    //     return state
    // }
}

export default reducer;