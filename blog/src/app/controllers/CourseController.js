const Course = require('../models/Course')
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')

class CourseController {
    
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
        
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(err => {
                next(err);
            });
        
    }
    //[GET] courses/:id/edit
    edit(req, res ,next) {
        const courseId = req.params.id;
        Course.findById(courseId)
        .then(course => {
            if (!course) {
              // Nếu không tìm thấy khóa học với ID cung cấp, có thể xử lý lỗi hoặc chuyển hướng đến trang 404
              return res.status(404).render('error404'); // Ví dụ chuyển hướng đến trang lỗi 404
            }
    
            res.render('courses/edit', { course: mongooseToObject(course)});
          })
          .catch(next);
    }

    //[PUT] courses/:id
    update(req, res, next){
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
}
module.exports = new CourseController();
