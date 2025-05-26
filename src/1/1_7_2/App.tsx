// 1_7_2 Nested lists in one component 
/*
  Создайте список рецептов из этого массива! Для каждого рецепта в массиве выведите его название в виде <h2> и список ингредиентов в виде <ul>. Это потребует вложения двух различных вызовов map.
*/

import { Fragment } from 'react/jsx-runtime';
import { recipes } from './data';

const recipesList = recipes.map((recipes) => (
    <Fragment key = {recipes.id}>
        <h2>{recipes.name}</h2>
        <ul>{recipes.ingredients.map((ingredient) => (
        <li key = {ingredient}>
            {ingredient}
        </li>)
    )}
    </ul>
    </Fragment>
    ))

export default function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            {recipesList}
        </div>
    );
}
