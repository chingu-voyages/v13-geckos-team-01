import * as actionType from './action-types';

export function calcualteNutrients(search_value) {
    return { 
      type: actionType.FETCH_CALCULATION_STATE,
      search_value: search_value
    };
  }

  export function ResetCalcualteNutrients(search_value) {
    return { 
      type: actionType.RESET_CALCULATION_STATE,
      search_value: search_value
    };
  }