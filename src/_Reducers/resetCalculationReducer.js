import * as actionType from './../_Actions/action-types';

const initialState = {
    search_value: ""
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionType.RESET_CALCULATION_STATE:
            console.log("Reset reducer working", action)

            return {
                ...state,
                search_value: action.search_value 
            }     
        default:
            return state;   
    }
    
};

export default reducer;