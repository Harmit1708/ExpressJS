var express = require("express");
var router = express.Router();

let room = [];
let book = [];
/* GET home page. */
router.get("/get", function (req, res, next) {
  res.json({
    statsCode: 200,
    message: "Room Load Successfully",
    data: room,
  });
});

router.post("/room", (req, res) => {
  room.push(req.body);
  res.send({
    statusCode: 200,
    message: "Create Room Successfully",
  });
});

router.get("/all", (req, res) => {
  res.json({
    statsCode: 200,
    message: "All Customers",
    data: book,
  });
});
router.post("/booked", (req, res) => {
  book.push(req.body);
  res.send({
    statusCode: 200,
    message: "Room Booked Successfully",
  });
});

module.exports = router;
