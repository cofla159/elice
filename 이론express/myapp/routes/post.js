const express = require('express');
const BookSchema = require('../models/book'); //컨트롤러 있으면 지워도 됨
const bookController = require('../controller/post');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('post');
});

router.get('/bookinfo/:id', bookController.getbookinfo);

// router.post('/bookinfo:id', (req,res)=>{
//     const authorname = req.params.id;
//     BookSchema.findOne({author:authorname},(err,result) => {
//         if(result) {
//             return res.json(result);
//         }else{
//             return res.send('등록된 작가가 없습니다');
//         }
//     })
// })

router.post('/', (req, res) => {
    const name = req.body.name;
    const number = req.body.phone;
    const date = req.body.date;
    res.json({ name: name, number: number, date: date });
    /*
    next();

    router.post('/', (req, res) => {
        res.redirect('/expost');
    });*/
});

// router.post('/addbook', (req, res) => {
//     const bookname = req.body.bookname;
//     const author = req.body.author;
//     const price = req.body.price;
//     const date = req.body.date;

//     let bookData = new BookSchema({
//         bookname: bookname,
//         author: author,
//         price: price,
//         publish: date
//     })
//     bookData.save();
//     res.redirect('/expost');
// });

router.post('/addbook', bookController.addbook);

//bookinfo의 정보를 다 가져오기
router.get('/getlist', async(req, res) => {
    const result = await BookSchema.find({}).exec(); //exec 꼭 붙이기
    //const result = BookSchema.find({}, (req, res) => {  })이랑 같음
    return res.status(200).json(result);
});

router.get('/users', (req, res) => {
    res.render('user');
})

module.exports = router;