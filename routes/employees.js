const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");

/* /api/employees */
router.get("/", auth, () => console.log("get all employees"));
/* /api/employees/:id */
router.get("/:id", auth, () => console.log("get single employees"));
/* /api/employees/add */
router.post("/add", auth, () => console.log("add employee"));
/* /api/employees/remove/:id */
router.post("/remove/:id", auth, () => console.log("remove employee"));
/* /api/employees/edit/:id */
router.put("/edit/:id", auth, () => console.log("edit employee"));

module.exports = router;
