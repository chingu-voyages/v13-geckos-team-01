import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import calculationReducer from './calculationReducer';
import resetCalculationReducer from './resetCalculationReducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['calculationReducer']
  };

  const rootReducer = combineReducers({
    calculationReducer: calculationReducer,
    resetCalculationReducer: resetCalculationReducer
  });

export default persistReducer(persistConfig, rootReducer);