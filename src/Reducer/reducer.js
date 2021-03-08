import initialState from "../Store/initialState";

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_ITEMS":
            return {...state, allItems: action.payload };
        default:
            return state;
    }
};

export default reducer;