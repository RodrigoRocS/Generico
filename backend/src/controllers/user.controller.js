const { UserService } = require("../services");

const createUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    const { status, data } = await UserService.createUser({ userName, email, password });


    return res.status(status).json(data);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Erro interno", error: err.message });
  }
};

const getAll = async (_req, res) => {
  const users = await UserService.getAllUsers();
  res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await UserService.getById(id);

  const { password, ...userWithoutPassword } = user.dataValues;

  res.status(200).json(userWithoutPassword);
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.payload.data.id;
    await UserService.deleteUser(userId);
    return res.status(204).send();
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro interno", error: error.message });
  }
};

module.exports = { createUser, getAll, getById, deleteUser };
