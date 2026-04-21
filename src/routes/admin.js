const { Router } = require('express')
const adminGuard = require('../middlewares/adminGuard')
const authController = require('../controllers/authController')
const turismController = require('../controllers/turismController')
const petController = require('../controllers/petController')
const courseController = require('../controllers/courseController')
const propertyController = require('../controllers/propertyController')
const dishController = require('../controllers/dishController')
const planController = require('../controllers/planController')
const modalityController = require('../controllers/modalityController')
const eventController = require('../controllers/eventController')
const upload = require('../config/multer')

const router = Router()

// All admin routes require adminGuard
router.use(adminGuard)

// Admin user management
router.post('/admin', authController.createAdmin)

// Admin turism CRUD
router.post('/turism', upload.array('images', 5), turismController.create)
router.put('/turism/:id', upload.array('images', 5), turismController.update)
router.delete('/turism/:id', turismController.remove)

// Admin pets CRUD (Amigo Fiel)
router.post('/pets', petController.create)
router.put('/pets/:id', petController.update)
router.delete('/pets/:id', petController.remove)

// Admin courses CRUD (EduTech)
router.post('/courses', courseController.create)
router.put('/courses/:id', courseController.update)
router.delete('/courses/:id', courseController.remove)

// Admin properties CRUD (EasyHome)
router.post('/properties', propertyController.create)
router.put('/properties/:id', propertyController.update)
router.delete('/properties/:id', propertyController.remove)

// Admin dishes CRUD (Chef's Menu)
router.post('/dishes', dishController.create)
router.put('/dishes/:id', dishController.update)
router.patch('/dishes/:id/toggle', dishController.toggleAvailability)
router.delete('/dishes/:id', dishController.remove)

// Admin plans CRUD (Fitness Hub)
router.post('/plans', planController.create)
router.put('/plans/:id', planController.update)
router.delete('/plans/:id', planController.remove)

// Admin modalities CRUD (Fitness Hub)
router.post('/modalities', modalityController.create)
router.put('/modalities/:id', modalityController.update)
router.delete('/modalities/:id', modalityController.remove)

// Admin events CRUD (Event-IT)
// router.post('/events', eventController.create)
// router.put('/events/:id', eventController.update)
// router.delete('/events/:id', eventController.remove)
router.post('/events', upload.array('images', 5), eventController.create)
router.put('/events/:id', upload.array('images', 5), eventController.update)
router.delete('/events/:id', eventController.remove)

module.exports = router
