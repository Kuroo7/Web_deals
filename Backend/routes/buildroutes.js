
const express = require('express');

const BuildInfo = require('../models/buildinfo');

const router = express.Router();

const { createBuildInfo, getAllBuildInfo, singleBuildInfo, deleteBuildInfo, updateBuildInfo } = require('../controllers/buildControler')


// Getting all property info
router.get('/', getAllBuildInfo)


// getting a single property info
router.get('/:id', singleBuildInfo)


//Post a buildinfo
router.post('/', createBuildInfo);


//Delete a build info
router.delete('/:id', deleteBuildInfo)


router.patch('/:id', updateBuildInfo)

module.exports = router;

