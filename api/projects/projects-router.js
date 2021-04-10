const express = require('express')

const Projects = require('./projects-model')

const router = express.Router()


router.use((err,req,res,next) => {
  res.status(500).json({
    message: 'Something broken',
    error: err.message
  })
})


module.exports = router