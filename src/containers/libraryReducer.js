
import * as Firestore from '../firestore/firestoreservice'

const GET_COLLECTION = 'GET_COLLECTION';
const UPDATE_COLLECTION = 'UPDATE_COLLECTION';

export function getCollection(payload) {
    return {
        type: GET_COLLECTION,
        payload
    }
}

export function updateCollection(payload) {
    return {
        type: UPDATE_COLLECTION,
        payload
    }
}




const initialState = {
    swiLibrary: null
};

const library = []
const getDocsFromDB = (collection) => {
    Firestore.db.collection(collection).get().then(doc => {

        doc.forEach(doc => {
            library.push(doc.data())
            // console.log("DATA_DATA_DATA",doc.id, "=>",doc.data())
        })
        return library
        // console.log(this.state.swiLibrary);
    })
};

export default function libraryReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_COLLECTION:
            const collection = payload;
            getDocsFromDB(collection);
           
            return {
                ...state,
                swiLibrary: library

            };
            
        case UPDATE_COLLECTION:
            return null;
        default:
            return state;
    }
}

