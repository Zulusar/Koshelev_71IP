// 1_1_4 Your own component 
/* 
Напишите компонент с нуля. Вы можете дать ему любое допустимое имя и вернуть любую разметку. Если у вас нет идей, вы можете написать компонент Congratulations, который показывает <h1>Хорошая работа!</h1>. Не забудьте экспортировать это!
*/
function Congratulations(){
    return(
    <img
    src = "img_16.11.2024.22.30.jpg"
    alt = "Funny cat"
    />
    )
}

export default function MyFirstCommit(){
    return(
        <section>
            <h1>Oh yeah! That's great!</h1>
            <Congratulations />
        </section>
    )
}