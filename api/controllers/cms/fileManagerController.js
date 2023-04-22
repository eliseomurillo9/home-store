const postFile = (req, res) => {
    try {
           const fileLink = {
            url: `http://localhost:5000/uploads/${req.file.filename}`,
           }
        return res.status(200).json(fileLink);
    } catch (error) {
        return res.status(400).send({
            error: 'no Image found',
        });
    };
}

export default postFile;