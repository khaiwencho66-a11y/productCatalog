import { getProductDetail, getProductList, getSearchProduct } from "../services/productService"

export const loadProductList = async(page:number, size =20) => {
    try{
        const skip = (page - 1) * size;
        const data = await getProductList(skip);
        return data.products;
    } catch(error) {
        console.error('Action loadProductList > error:', error);
        throw error;
    }
}

export const searchProduct =async(searchText:string) => {
    try{
        console.log('Action > param > searchText:', searchText);
        const data = await getSearchProduct(searchText);
        console.log('Action > searchProduct data: ', data);
        return data.products;
    } catch(error) {
        console.error('Action searchProduct > error:', error);
        throw error;
    }
}

export const loadProductDetails = async(id:number) => {
    try{
        console.log('Action > id:', id);
        const data = await getProductDetail(id);
        console.log('Action > product detail data: ', data);
        return data;
    } catch(error) {
        // console.log('error:', error);
        console.error('Action > error:', error);
        throw error;
    }

};