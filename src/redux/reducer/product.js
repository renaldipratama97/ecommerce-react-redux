const initialState = {
    dataProducts: [],
    detailProduct: [],
    cart: [],
    readyBuy: []
}

const productReducer = (state = initialState, action) => {
    if (action.type === 'GET_PRODUCT') {
        return {
            ...state,
            dataProducts: action.payload
        }
    } else if (action.type === 'DETAIL_PRODUCT') {
        return {
            ...state,
            detailProduct: action.payload.detail
        }
    } else {
        return state
    }
}

export default productReducer