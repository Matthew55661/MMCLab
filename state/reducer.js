// reducer je cast global state, je to funckia pomocou ktorej sa dostaneme do store, kde je state definovany a prepiseme tam co potrebujeme
const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_DARKMODE':    // ak dispatchneme darkmode, tak zobereme jeho payload a ideme do store
            return {
                ...state,
                darkmode: action.payload
            };
        case 'SET_AUTO':        // ak sa dispatchne automaticke menenie modu tak bereme jeho payload a ideme do store, payload definujem vo funcii co ho odosiela , je to len negacia predoslehos stavu
            return {
                ...state,
                auto: action.payload
            };

        default:
            return state;

    }
};

export default Reducer;