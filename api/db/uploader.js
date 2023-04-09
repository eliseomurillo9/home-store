import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      switch(req.baseUrl) {
        case '/carrousel':
          cb(null, "backoffice/uploads/carrousel");
        break;
        case '/products':
        cb(null, "uploads");
      }
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
// const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


export default upload;
