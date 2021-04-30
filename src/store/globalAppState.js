// copied from michaels example

import React from 'react';
import globalHook from 'use-global-hook';

// Function to get the favourited movies from
// localStorage
function getFavs(){
    
    let favsFromStorage = localStorage.getItem('freshFlix-favs')

    if (favsFromStorage === null){
        favsFromStorage = [];
    }else {
        favsFromStorage = JSON.parse(favsFromStorage);
    }
    return favsFromStorage;

}

const actions = {
    createUser: (store, user) => {
        store.setState({ user });
    },
    deleteUser: (store, user) => {
        store.setState({ user });
    }, 

    addFav: (store, movie) => {
        // Add new movie to the current state array...
        const newFavs = [...store.state.favs, movie]
        //Stringify the new array for localStorage
        const newFavsForStorage = JSON.stringify(newFavs)
        // Send the newly updated array to localStorage
        localStorage.setItem('freshFlix-favs', newFavsForStorage);
        //Update our global favs state
        store.setState({ favs: newFavs });      
    },
    removeFav: (store, id) => {
        // Get the current favs
        let currentFavs = store.state.favs;
        // Get the index value of the movie we want to remove
        // using  .findIndex() (Native JavaScript)
        const indexOfMovieToRemove = currentFavs.findIndex((movie) => movie.id === id);
        // Remove the movie using the .splice() (Native JavaScript)
        currentFavs.splice(indexOfMovieToRemove, 1);
        // Stringify the new array for localStorage
        let favsForStorage = JSON.stringify(currentFavs);
        // Send the favsForStorage string to localStorage
        localStorage.setItem('freshFlix-favs', favsForStorage);
        // Upadte our global favs state
        store.setState({ favs: currentFavs });
    },
    setFavs: (store) => {
        store.setState({ favs: getFavs() })
    }
}

const initialState = {
    user: null,
    favs: getFavs(),
}

const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;