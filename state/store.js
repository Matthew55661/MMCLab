// sem sa dostaneme cez reducer
import React, { createContext, useReducer } from "react";
import Reducer from './reducer'


const initialState = {
    darkmode: false, // zakladne staty ake su predtym ako ich user zmeni
    auto: false,

};

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState); // ulozime to do premennych, treba si pamatat ze v reduceri mame payload, a ten payload meni state, takze tu sa prepise initial state
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;