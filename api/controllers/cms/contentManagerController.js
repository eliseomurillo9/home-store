import contentService from '../../services/cms/contentService.js';

const getContent = async (req, res) => {
    const getContentTypeInfo = await contentService.getContentTypeData(req.params);
    if (getContentTypeInfo) return res.status(200).json(getContentTypeInfo); else return res.status(404).send('Content not found');
};

const postContent = async (req, res, next) => {
    try {
        const content = await contentService.saveContent(req.body);
        return res.status(200).json(content);
    } catch (error) {
        next(error)
    }
  };

  const modifyContent = async (req, res, next) => {
    try {
        const contentModified = await contentService.modifyContent(req.params.id, req.body);
        res.status(200).json(contentModified);
    } catch (error) {
        next(error);
    }
  }

export default { postContent, modifyContent, getContent };