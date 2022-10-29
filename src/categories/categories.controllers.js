const Categories = require('../models/categories.models')

const getAllCategories = async () => {
  const data = await Categories.findAll()
  return data
}

const getCategoriesById = async () => {
  const data = await Categories.findOne({
    where: {
      id
    }
  })
  return data
}

const createCategories = async () => {
  const data = await Categories.create({
    title
  })
  return data
}

const deleteCategories = async () => {
  const data = await Categories.destroy({
    where: {
      id
    }
  })
  return data
}


module.exports = {
  getAllCategories,
  getCategoriesById,
  createCategories,
  deleteCategories
}