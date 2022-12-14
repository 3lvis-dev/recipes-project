const recipeControllers = require('./recipes.controllers')


const getAllRecipes = (req, res) => {
  recipeControllers.getAllRecipes()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(404).json({message: err.message})
    })
}


const getRecipeById = (req, res) => {
  const id = req.params.recipe_id
  recipeControllers.getRecipeById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data)
      } else {
        res.status(404).json({message: 'Invalid Id', id})
      }
    })
    .catch((err) => {
      res.status(400).json({message: err.message})
    })
}


const createRecipe = (req, res) => {
  const userId = req.user.id
  const { title, description, urlImag, time, portions, categoryId, origin } = req.body

  if (title && description && time && portions && categoryId) {
    recipeControllers.createRecipe({
      title, description, urlImag, time, portions, categoryId, origin, userId
    })
      .then((data) => {
        res.status(201).json(data)
      })
      .catch((err) => {
        res.status(400).json({message: err.message})
      })    
  } else {
    res.status(400).json({
      message: 'Missing data',
      field: {
        title: 'string',
        description: 'string',
        time: 'number',
        portions: 'number',
        categoryId: 'number',
      }
    })
  }
}


const patchRecipe = (req, res) => {
  const { title, description, urlImag, time, portions, categoryId, origin } = req.body
  const id = req.params.recipe_id

  recipeControllers.updateRecipe(id, {title, description, urlImag, time, portions, categoryId, origin})
    .then((data) => {
      if (data[0]) {
        res.status(200).json({message: `Recipes with ID: ${id} edited succesfully`})
      } else {
        res.status(404).json({message: '-invalid Id', id})   
      }
    })
    .catch((err) => {
      res.status(400).json({message: err.message})
    })
}


const deleteRecipe = (req, res) => {
  const id = req.params.recipe_id
  
  recipeControllers.deleteRecipe(id)
    .then((data) => {
      if (data) {
        res.status(204).json() 
      } else {
        res.status(404).json({message: 'Invalid Id', id})
      }
    })
    .catch((err) => {
      res.status(400).json({message: err.message})
    })
}


module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  patchRecipe,
  deleteRecipe
}