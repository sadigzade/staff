const { prisma } = require("../prisma/prisma-client");

/**
 * @route GET /api/user/employees
 * @desc Получение всех сотрудников
 * @access Private
 */
const all = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();

    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: "Не удалось получить сотрудников" });
  }
};

/**
 * @route POST /api/user/employees/add
 * @desc Добавление сотрудника
 * @access Private
 */
const add = async (req, res) => {
  try {
    const { body, user } = req;

    if (!body.firstName || !body.lastName || !body.address || !body.age) {
      return res.status(400).json({ message: "Все поля обязательные" });
    }

    const employee = await prisma.employee.create({
      data: {
        ...body,
        userId: user.id,
      },
    });

    return res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: "Что-то пошло не так" });
  }
};

/**
 * @route POST /api/user/employees/remove/:id
 * @desc Удаление сотрудника
 * @access Private
 */
const remove = async (req, res) => {
  const { id } = req.body;

  try {
    await prisma.employee.delete({
      where: {
        id,
      },
    });

    res.status(204).json("OK");
  } catch (error) {
    res.status(500).json({ message: "Не удалось удалить сотрудника" });
  }
};

module.exports = {
  all,
  add,
  remove,
};
