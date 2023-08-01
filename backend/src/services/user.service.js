const { User } = require('../models');

const createUser = ({ userName,
   email, password }) => User.create({ userName, email, password });

const getAllUsers = () => User.findAll({ attributes: { exclude: ['password'] } });

const getByEmail = (email) => User.findOne({
  where: { email },
  // attributes: { exclude: ['password'] }
});

const getById = (id) => User.findByPk(id);

const deleteUser = async (id) => {
  const removed = await User.destroy({ where: { id } });
  return removed;
};

module.exports = {
  createUser,
  getAllUsers,
  getByEmail,
  getById,
  deleteUser,
};