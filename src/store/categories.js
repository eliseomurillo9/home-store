import { atom, task } from "nanostores";
import { getCategories } from "../services/categoriesService";

const categories = atom([]);
const fetchData = task(async () => {
   const data = await getCategories();

    categories.set(data);
});

export default categories;