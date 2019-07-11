import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import * as firebase from 'firebase';

//Initial State
const initialState = {
    favoriteAnimal: 'duck',
    userData: { },
};

//Reducers
const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case 'setFavoriteAnimal':
            return { ...state, favoriteAnimal: action.value }

        case 'setUserData':                        
            return { ...state, userData: action.value };

        default:
            return state;            
    }
};

//Store
const store = createStore( reducer, applyMiddleware(thunkMiddleware) );
export {store};

//Action Creators
const setFavoriteAnimal = (favoriteAnimal) => {
    return {
        type: 'setFavoriteAnimal',
        value: favoriteAnimal
    }
}

const setUserData = (userData) => {
    return {
        type: 'setUserData',
        value: userData
    }
}

export { setFavoriteAnimal, setUserData };