import dotenv from 'dotenv';
dotenv.config();

const getData =  async (route) => {
    try {
        const data = await fetch(`${process.env.BASE_URL}/${route}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default getData;