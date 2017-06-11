import {combineReducers} from 'redux';
let lists= ['ReactJS','ES6'];
let isAdding = false;
let listsReducer = (state = lists,action) => {
    switch (action.type){
        case 'ADD_ITEM' :
            return [...state,action.item];
            
        case 'DELETE_ITEM':
            return state.filter((value,index) => index != action.index );
            
        default:
            return state;
            
    }
}
let isAddingReducer = (state = isAdding,action) => {
    switch (action.type){
        case 'TOGGLE_IS_ADDING':
            return !state;
           
        default :
            return state;
           
    }
}
let Reducer = combineReducers({
    lists : listsReducer,
    isAdding : isAddingReducer
});
export default Reducer;