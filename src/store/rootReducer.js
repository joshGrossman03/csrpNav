import {combineReducers} from 'redux';
import modalReducer from '../components/modals/modalReducer'
import testReducer from '../components/sandbox/testreducer';
import libraryReducer from '../containers/libraryReducer';


const rootReducer = combineReducers({
    test: testReducer,
    modal: modalReducer, 
    library: libraryReducer
})

export default rootReducer;