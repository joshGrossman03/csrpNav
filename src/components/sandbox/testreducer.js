
const INCREMENT_COUNTER = 'INCREMENT COUNTER';
const DECREMENT_COUNTER = 'DECREMENT COUNTER';
const LIBRARIES = 'LIBRARIES'

export function libraries(library) {
    return {
        type:LIBRARIES,
        payload:library
    }
}

export function increment(amount) {
    return{
        type:INCREMENT_COUNTER,
        payload: amount
    }
}
export function decrement(amount) {
    return {
        type:DECREMENT_COUNTER,
        payload:amount
    }
}

const initialState = {
    data: 42,
    

}

export default function testReducer(state = initialState, action){
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                data: state.data + action.payload,
            };
        case DECREMENT_COUNTER:
            return{
                ...state,
                data: state.data - action.payload,
            };
        case LIBRARIES:
            return {
                ...state,
                swiLibrary: state.swiLibrary
            }
        default: 
        return state;
    }
}


