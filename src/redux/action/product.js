import product from '../../data/data.json'

export const getProduct = () => {
    return {
        type: "GET_PRODUCT",
        payload: product
    }
}

export const detailProduct = (id) => {
    const dataDetailProduct = []
    product.map(item => dataDetailProduct.push(item))
    const productDetail = dataDetailProduct.find(item => item.id === Number(id))
    
    return {
        type: "DETAIL_PRODUCT",
        payload: {detail: productDetail}
    }
}