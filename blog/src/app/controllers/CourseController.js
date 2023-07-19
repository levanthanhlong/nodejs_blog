const Course = require('../models/Course')
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')

class SiteController {
    
    //[GET] courses/:slug
    show(req, res ,next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', {course: mongooseToObject(course)})
            })
            .catch(next);
    }

    //[GET] courses/create
    create(req, res ,next) {

       res.render('courses/create');
    }
    //[POST] courses/store
    store(req, res ,next) {
        const formData = req.body;
       
        formData.image = `https://img.youtube.com/vi/${formData.videoid}/sddefault.jpg`;
        // course.save();
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(err => {
                next(err);
            });
        
    }
    // store(req, res, next) {
    //     const formData = req.body;
    //     const course = new Course(formData);
        
    //     // Lưu khóa học mới vào cơ sở dữ liệu
    //     course.save()
    //       .then(savedCourse => {
    //         formData.image = `https://img.youtube.com/vi/${formData.videoid}/sddefault.jpg`;
      
    //         // Lưu thành công, sau đó gửi phản hồi
    //         res.json(savedCourse);
    //       })
    //       .catch(err => {
    //         // Xử lý lỗi nếu có
    //         next(err);
    //       });
    //   }


}
module.exports = new SiteController();
