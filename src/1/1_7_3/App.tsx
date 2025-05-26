// 1_7_3 Extracting a list item component 
/*
  Этот компонент RecipeList содержит два вложенных вызова map. Чтобы упростить его, извлеките из него компонент Recipe, который будет принимать пропсы id, name и ingredients. Где вы разместите внешний key и почему?.
*/

import { recipes } from './data.js';


function Recipe(props){
    return <div>
        <h2>{props.name}</h2>
        <ul>{props.ingredients.map((ingredient) => (
            <li key={ingredient}>
            {ingredient}
        </li>
        ))}
        </ul>
    </div>
}
export default function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map((recipe) => (
                <Recipe{...recipe} key = {recipe.id} />

            ))}
        </div>
    );
}