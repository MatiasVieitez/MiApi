const consoleMid = (req, res, next) => {


    console.log(req.method)
    console.log(req.path)
    console.log(req.body)
    console.log('---END---')
    next()

}

module.exports = consoleMid