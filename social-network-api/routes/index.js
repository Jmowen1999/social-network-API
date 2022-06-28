const router = require('express').Router();
const apiRoutes = require('./api');
router.use('./api', apiRoutes);

router.use((req, res) => {
     res.status(404).send('<h1> 404 ERROR these are not the files you are looking for.</h1>')
 });

module.exports = router;