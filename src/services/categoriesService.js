import getData from "./apiService";
import lodash from "lodash";
const uniqBy = lodash.uniqBy;

const getCategories = async () => {
    const data = await getData('categories');
    const response = await data.json();
    const categoriesFilter = uniqBy(response, (category) => {
        return category.name
    })
    
    return categoriesFilter;
};

const getSubCategories = async () => {
    const data = await getData('subCategories');
    const response = await data.json();
    
    return response;
}


export { getCategories, getSubCategories };