var express = require("express");
var router = express.Router();



// router.get('/', (req,res)=> {
//   const squaresObj = [
//     [0, 1, 2 ],
//     [3, 4, 5 ],
//     [6, 7, 8 ],
//     [0, 3, 6 ],
//     [1, 4, 7 ],
//     [2, 5, 8 ],
//     [0, 4, 8 ],
//     [2, 4, 6 ]
//   ]
//   res.json(squaresObj)
// });

// API endpoint to get the square array value
router.post('/create', function(req, res) {
    res.send(req.body)
   
  });

module.exports = router;

