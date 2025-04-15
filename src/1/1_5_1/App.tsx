// 1_5_1 Extract a component
/* 
  Компонент Gallery содержит очень похожую разметку для двух профилей. Извлеките из него компонент Profile, чтобы уменьшить дублирование кода. Для этого нужно будет определить props для компонента Profile.
*/

import { getImageUrl } from "./util";


function Profile({
  name="",
  imageId ="",
  size = 's', 
  profession="",
  awards="",
  discovered=""}){
  return ( <section className="profile">
    <h2>{name}</h2>
    <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={size}
        height={size}
    />
    <ul>
        <li>
            <b>Profession: </b>
            {profession}
        </li>
        <li>
            <b>Awards:  </b>
            {awards.split(",").length} ({awards})
        </li>
        <li>
            <b>Discovered: </b>
            {discovered}
        </li>
    </ul>
</section>)
}
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
      name = "Maria Skłodowska-Curie"
      imageId="Maria"
      profession="physicist and chemist"
      awards=  "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"
      discovered="polonium (chemical element)"
     />
        <Profile
        name = "Katsuko Saruhashi"
        imageId="KatsukoSaruhashi"
        profession="geochemist"
        awards="Miyake Prize for geochemistry, Tanaka Prize"
        discovered="a method for measuring carbon dioxide in seawater"
        />   
    </div>
  );
}
