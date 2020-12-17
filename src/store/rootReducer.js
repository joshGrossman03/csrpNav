import {combineReducers} from 'redux';
import modalReducer from '../components/modals/modalReducer'
import testReducer from '../components/sandbox/testreducer';



const rootReducer = combineReducers({
    test: testReducer,
    modal: modalReducer, 
    
})

export default rootReducer;