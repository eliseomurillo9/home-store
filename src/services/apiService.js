import dotenv from 'dotenv';
dotenv.config();
console.log(`${process.env.BASE_URL}/products`);

const getData =  async (route) => {
    try {
        const data = await fetch(`${process.env.BASE_URL}/${route}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default getData;