// const eventService = require('../services/eventService')

// async function list(req, res, next) {
//   try {
//     const filters = {
//       name: req.query.name,
//       category: req.query.category,
//       date: req.query.date
//     }

//     const events = await eventService.listEvents(filters)
//     return res.json(events)
//   } catch (err) {
//     next(err)
//   }
// }

// async function getById(req, res, next) {
//   try {
//     const event = await eventService.getEventById(req.params.id)
//     return res.json(event)
//   } catch (err) {
//     next(err)
//   }
// }

// async function create(req, res, next) {
//   try {
//     const event = await eventService.createEvent(req.body, req.user.id)
//     return res.status(201).json(event)
//   } catch (err) {
//     next(err)
//   }
// }

// async function update(req, res, next) {
//   try {
//     const event = await eventService.updateEvent(req.params.id, req.body)
//     return res.json(event)
//   } catch (err) {
//     next(err)
//   }
// }

// async function remove(req, res, next) {
//   try {
//     await eventService.deleteEvent(req.params.id)
//     return res.status(204).send()
//   } catch (err) {
//     next(err)
//   }
// }

// module.exports = { list, getById, create, update, remove }


const eventService = require('../services/eventService')

async function list(req, res, next) {
  try {
    const filters = { name: req.query.name, category: req.query.category, date: req.query.date }
    const events = await eventService.listEvents(filters)
    return res.json(events)
  } catch (err) { next(err) }
}

async function getById(req, res, next) {
  try {
    const event = await eventService.getEventById(req.params.id)
    return res.json(event)
  } catch (err) { next(err) }
}

async function create(req, res, next) {
  try {
    const event = await eventService.createEvent(req.body, req.files, req.user.id)
    return res.status(201).json(event)
  } catch (err) { next(err) }
}

async function update(req, res, next) {
  try {
    const event = await eventService.updateEvent(req.params.id, req.body, req.files)
    return res.json(event)
  } catch (err) { next(err) }
}

async function remove(req, res, next) {
  try {
    await eventService.deleteEvent(req.params.id)
    return res.status(204).send()
  } catch (err) { next(err) }
}

module.exports = { list, getById, create, update, remove }