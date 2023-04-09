import carrouselService from '../services/carrouselService.js';

const getCarrousel = async (req, res) => {
    try{
        const carrouselimages = await carrouselService.getCarrousel();
        return res.status(200).json(carrouselimages);
    } catch(err) {
        console.log(err);
    }
};

const postCarrousel = async (req, res) => {
    try {
        const postImage = await {
            image: `http://localhost:5000/uploads/${req.file.filename}`,
            ...req.body
        }
        const imgCreation = await carrouselService.postImage(postImage)
        return res.status(200).json(postImage);
    } catch (error) {
        console.log(error);
    }
}

export default { getCarrousel, postCarrousel };