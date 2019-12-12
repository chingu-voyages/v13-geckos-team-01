import * as actionType from './../_Actions/action-types';

const initialState = {
    search_value: ""
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionType.FETCH_CALCULATION_STATE:
            return {
                ...state,
                search_value: action.search_value            
            }     
        default:
            return state;   
    }
    
};

export default reducer;