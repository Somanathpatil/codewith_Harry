const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('blog home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About blogs')
})

router.get('/blogPost/:slug', (req, res) => {
    res.send(`fetch the blogPost for  ${req.params.slug}`)
  })

module.exports = router