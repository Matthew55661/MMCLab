const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_DARKMODE':
            return {
                ...state,
                darkmode: action.payload
            };
        case 'SET_AUTO':
            return {
                ...state,
                auto: action.payload
            };

        default:
            return state;

    }
};

export default Reducer;