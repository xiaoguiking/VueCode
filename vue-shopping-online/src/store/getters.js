/**
 * getters 计算属性
 */
export const productGetters = {
    allProducts (state) {
        return state.allProducts
    },
    productId: (state,  getters) => id => {
        if (getters.allProducts.length > 0) {
            return getters.allProducts.filter( p => p._id == id)[0]
        } else {
            return state.product;
        }
    } 
}

export const manufacturerGetters = {
    allManufacturer (state) {
        return state.allManufacturer
    }
}