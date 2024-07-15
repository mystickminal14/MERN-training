const express = require('express');
const router = express.Router();
const reg = require('../controller/auth-controller');

router.route("/").get(reg.home);
router.route("/register").post(reg.register);
router.route('/show').get(reg.show);

module.exports = router;
