// 1_7_1 Splitting a list in two 
/*
  В этом примере показан список всех людей.

  Измените его, чтобы последовательно вывести два отдельных списка: Химики и Все остальные. Как и ранее, вы можете определить, является ли человек химиком, проверив, что person.profession === 'chemist'.
*/

import { people } from './data.js';
import { getImageUrl } from './utils.js';

export type Person = {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
}

function Card ({person}){
    return(
    <li key={person.id}>
    <img
        src={getImageUrl(person)}
        alt={person.name}
    />
    <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
    </p>
</li>)
}

export default function List() {
    const chemist = people.filter(
        (person) =>person.profession === "chemist"
    )
    const notChemist = people.filter(
        (person) => person.profession !== "chemist"
    )
    const chemistAll = chemist.map((person) =>
        Card({person})
    );
    
    const listItems = notChemist.map((person) => (
        Card({person})
    ));
    return (
        <article>
            <h1>Scientists</h1>
            <ul>{chemistAll}</ul>
            <ul>{listItems}</ul>
        </article>
    );
}
