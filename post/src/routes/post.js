const router = require('express').Router();
const postController = require('../controllers/postController');
const upload = require('../middleware/upload');

router.get('/', postController.getAllPosts);
router.post('/', upload.single('image'), postController.createPost);
router.get('/:id', postController.getPostById);
router.put('/:id', upload.single('image'), postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;
