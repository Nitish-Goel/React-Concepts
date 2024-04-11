import { configureStore } from '@reduxjs/toolkit';
import IncDecReducer from './reducers/index';

export default configureStore({
    reducer:{
        number:IncDecReducer,

    }
}, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_());