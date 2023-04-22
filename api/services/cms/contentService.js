import Content from "../../models/cms/ContentManagerModel.js";

const saveContent = async (info) => {
  const content = new Content(info);
  await content.save();
  return content;
};

const modifyContent = async (id, info) => {
  const contentToModify = Content.findByIdAndUpdate(id, info);
  return contentToModify;
};

const getContentTypeData = async (contentType) => {
    const contentData = Content.findOne(contentType);
    console.log('-DATAAAA-', contentData);
}

export default { saveContent, modifyContent, getContentTypeData };
