const BuildInfo = require('../models/buildinfo');
const validator = require('validator')



// creating a build info in data base
const createBuildInfo = async (req, res) => {
    const { title, desc, contact, email, price } = req.body;

    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if (!desc) {
        emptyFields.push('desc')
    }
    if (!contact) {
        emptyFields.push('contact')
    }
    if (!email) {
        emptyFields.push('email')
    }
    if (!price) {
        emptyFields.push('price')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please Fill all the fields' })
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ error: 'Email not Valid' })
    }

    try {
        const buildInfo = await BuildInfo.create({ title, desc, contact, email, price })
        res.status(200).json({ buildInfo })
    } catch (error) {
        res.status(404).json({ "error": error.message })
    }

}

// Get all build info from database
const getAllBuildInfo = async (req, res) => {
    const buildInfos = await BuildInfo.find({}).sort({ createdAt: -1 });
    res.status(200).json(buildInfos);
}

// get a Single build info 

const singleBuildInfo = async (req, res) => {
    const { id } = req.params;
    const buildInfo = await BuildInfo.findOne(id);
    if (!buildInfo) {
        return res.status(404).json({ err: "CAnnot find it" })
    }
    else {
        res.status(200).json(buildInfo);
    }
}

// delete a workout

const deleteBuildInfo = async (req, res) => {
    const { id } = req.params;
    const buildInfo = await BuildInfo.findByIdAndDelete(id)
    if (!buildInfo) {
        return res.status(404).json({ err: "CAnnot find it" })
    }
    else {
        res.status(200).json(buildInfo);
    }
}

// Update build info

const updateBuildInfo = async (req, res) => {
    const { id } = req.params;
    const buildInfo = await BuildInfo.findOneAndUpdate({ _id: id }, {
        ...req.body
    });
    if (!buildInfo) {
        return res.status(404).json({ err: "CAnnot find it" })
    }
    else {
        res.status(200).json(buildInfo);
    }
}


module.exports = {
    createBuildInfo,
    getAllBuildInfo,
    singleBuildInfo,
    deleteBuildInfo,
    updateBuildInfo
}