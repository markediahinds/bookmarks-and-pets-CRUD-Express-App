const checkForNameKey = (req, res, next) => {
    if(req.body.hasOwnProperty('name')) {
        next ()
    } else {
        res.json({error: 'Bookmark must contain a name'})
    }
}

// Marco
// const checkDotCom = (req, res, next) => {
//     const {url} = req.body;
//    if(/.+(.com)$/.test(url)){
//       next();
//    }
//     else{
//       res.json({error: 'URL needs to end on .com'})
//    }
//    }

// Camilo/Aaron
// const checkForDotCom = (req, res, next) =>{

//     if (req.body.hasOwnProperty('url')){
//         const regex = /\.com/;

//         // req.body.url.includes('.com')

//         if(regex.test(req.body.url)){
//             next()
//         }else{
//             res.json({ error: "url must contain .com"})
//         }
//     }else{
//         res.json({ error: "Bookmark must contain a url"})``
//     }
// }


const checkForDotCom = (req, res, next) => {
    // How can we make sure that the URL ends in .com
    if(req.body.slice(-4) === '.com') {
        next()
    } else {
        res.json({ error: `URL must end in '.com'` })
    }
}


module.exports = { checkForNameKey, checkForDotCom } 