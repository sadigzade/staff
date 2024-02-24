const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { all, remove, add } = require("../controllers/employees");

/* /api/employees */
router.get("/", auth, all);
/* /api/employees/:id */
router.get("/:id", auth, () => console.log("get single employees"));
/* /api/employees/add */
router.post("/add", auth, add);
/* /api/employees/remove/:id */
router.post("/remove/:id", auth, remove);
/* /api/employees/edit/:id */
router.put("/edit/:id", auth, () => console.log("edit employee"));

module.exports = router;
