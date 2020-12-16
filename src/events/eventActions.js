import { CREATE_LIBRARY, DELETE_LIBRARY, UPDATE_LIBRARY } from "./eventConstants";

export function createLibrary (library) {
    return {
        type:CREATE_LIBRARY,
        payload:library
    }
}

export function updateLibrary (library) {
    return {
        type:UPDATE_LIBRARY,
        payload:library
    }
}

export function deletelibrary(library) {
    return{
        type:DELETE_LIBRARY,
        payload:library
    }
}