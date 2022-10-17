export const productService = ({doGet}) => {
    const getAllProduct = async () => {
        try {
            return await doGet({url: '/product'});
        } catch (e) {
            throw e
        }
    }

    return {getAllProduct}
}