

const initialState = {
    products: [],
    
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DATA": 
        return {
            products: action.payload
        }

        default: return state;
    }
}

export default rootReducer;