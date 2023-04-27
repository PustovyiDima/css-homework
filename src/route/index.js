// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  res.render('index', {
    page: {
      title: 'css homework page 1',
    },
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
