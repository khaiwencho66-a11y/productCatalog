
export const getProductList = async(skip = 0) => {
    const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${skip}`);
    // console.log('Service > getProductList: ', response.json());
    return await response.json();
}

export const getSearchProduct = async(seachText:string) => {
    const response = await fetch(`https://dummyjson.com/products/search?q=${seachText}`);
    // console.log('service > res searchProductName > response:', response.json());
    return await response.json();
}

export const getProductDetail = async(id:number) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    return await response.json();
}