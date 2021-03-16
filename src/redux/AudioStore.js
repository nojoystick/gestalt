import { createStore, combineReducers } from 'redux';

import AudioReducer from './AudioReducer';
import ConfigReducer from './ConfigReducer';

const rootReducer = combineReducers({ audio: AudioReducer, config: ConfigReducer });

const store = createStore(rootReducer);

export default store;
