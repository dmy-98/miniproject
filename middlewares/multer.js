const multer = require('multer');

const fileFilterImage = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
const fileFilterMovie = (req, file, cb) => {
    if (file.fieldname == 'trailer') {
        if (file.mimetype === 'video/mp4' || file.mimetype === 'video/mpv') {
            cb(null, true);
        } else {
            cb(null, false);
        }
    } else {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }

};

const storageUser = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/users');
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const storageCast = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/casts');
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const storageMovie = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/movies');
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const uploadUser = multer({
    storage: storageUser,
    fileFilter: fileFilterImage
});

const uploadCast = multer({
    storage: storageCast,
    fileFilter: fileFilterImage
});

const uploadMovie = multer({
    storage: storageMovie,
    fileFilter: fileFilterMovie
});


module.exports = {
    uploadUser,
    uploadCast,
    uploadMovie
};