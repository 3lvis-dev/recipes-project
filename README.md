# Project Recipes 

## Deploy APP:
[LinkApp](#)

- Skeleton
- express: 4.18.2
- pg: 8.8.0
- pg-hstore: 2.3.4
- uuid: 9.0.0
- sequelize: 6.24.0
- jsonwebtoken: 8.5.1
- bcrypt: 5.1.0
- passport: 0.6.0
- passport-jwt: 4.0.0
- dotenv: 16.0.3
- cors: 2.8.5

---

# Orden para crear los seeders
- //user 
  - node ./src/utils/seeders/users.js

- //types 
  - node ./src/utils/seeders/types.js 

- //categories 
  - node ./src/utils/seeders/categories.js 

- //recipes 
  - node ./src/utils/seeders/recipes.js 

- //instructions 
  - node ./src/utils/seeders/instructions.js

- //ingredients 
  - node ./src/utils/seeders/ingredients.js 

- //recipes_ingredients 
  - node ./src/utils/seeders/recipe_ingredients.js 