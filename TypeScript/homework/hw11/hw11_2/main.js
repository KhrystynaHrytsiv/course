"use strict";
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then((data) => {
    const { recipes } = data;
    let container = document.createElement('div');
    container.classList.add('container');
    for (const recipe of recipes) {
        let recipeBlock = document.createElement('div');
        recipeBlock.classList.add('recipe');
        const { name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, cuisine, caloriesPerServing, image, rating, reviewCount, mealType } = recipe;
        let title = document.createElement('h2');
        title.innerText = name;
        let ingredientsUl = document.createElement('ul');
        ingredientsUl.innerText = 'Ingredients:';
        for (let ing of ingredients) {
            let ingredient = document.createElement('li');
            ingredient.innerText = ing;
            ingredientsUl.appendChild(ingredient);
        }
        let instructionsUl = document.createElement('ol');
        instructionsUl.innerText = 'Instructions:';
        for (let instr of instructions) {
            let instruction = document.createElement('li');
            instruction.innerText = instr;
            instructionsUl.appendChild(instruction);
        }
        let p = document.createElement('p');
        p.innerText = `prepTimeMinutes: ${prepTimeMinutes} | cookTimeMinutes: ${cookTimeMinutes} | servings: ${servings} `;
        let difficultyP = document.createElement('p');
        difficultyP.innerText = `difficulty: ${difficulty} | cuisine: ${cuisine} | caloriesPerServing: ${caloriesPerServing}`;
        let addInfo = document.createElement('p');
        addInfo.innerText = `rating: ${rating} | reviewCount: ${reviewCount} | mealType: ${mealType} `;
        let img = document.createElement('img');
        img.src = image;
        recipeBlock.append(title, ingredientsUl, instructionsUl, p, difficultyP, addInfo, img);
        container.appendChild(recipeBlock);
    }
    document.body.appendChild(container);
});
