
const initialState = {
    globalAddToCart: false,
};

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_CART':
            return {
                ...state,
                globalAddToCart: action.payload,
            };

        default:
            return state;
    }
};

export default globalReducer;
