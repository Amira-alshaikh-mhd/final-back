
const express =require('express')
const router = express.Router();
const upload = require('../Middleware/upload');
const { getReviews, getReviewById, getReviewByPlaceName, getReviewsByHostName, setReview, updateReview, deleteReview } = require('../Controllers/reviewController');


router.get('/', getReviews)

router.get('/:id', getReviewById)

router.get("/byplace/:id", getReviewByPlaceName );



router.get("/byHost/:id", getReviewsByHostName );



router.post('/', upload.array('image'),setReview)



router.put('/:id', upload.array('image'),updateReview)


router.delete('/:id', deleteReview)

module.exports = router