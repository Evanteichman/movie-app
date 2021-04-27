// copied from michaels example

import React from 'react';
import globalHook from 'use-global-hook';

const actions = {
    createUser: (store, user) => {
        store.setState({ user });
    },
    deleteUser: (store, user) => {
        store.setState({ user });
    } 
}

const initialState = {
    user: null
}

const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;