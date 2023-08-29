

const getCategories = async () => {
    const data = await fetch("http://localhost:3000/ui/productCategoryList");
    const response = await data.json();
    return response.responseData;
};

export { getCategories };