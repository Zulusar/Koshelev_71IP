// 1_5_2 Adjust the image size based on a prop 
/*
  В этом примере Avatar получает числовой параметр size, который определяет ширину и высоту <img>. В данном примере параметр size установлен на 40. Однако если вы откроете изображение в новой вкладке, вы заметите, что само изображение больше (160 пикселей). Реальный размер изображения определяется тем, какой размер миниатюры вы запрашиваете.

  Измените компонент Avatar, чтобы он запрашивал наиболее близкий размер изображения на основе параметра size. В частности, если size меньше 90, передавайте 's' ("small"), а не 'b' ("big") в функцию getImageUrl. Проверьте, что ваши изменения работают, отобразив аватары с разными значениями параметра size и открыв изображения в новой вкладке.
*/

import { getImageUrl } from "./util";

export type Person = {
  name: string;
  imageId: string;
};

function Avatar({ person, size }: { person: Person; size: number }) {
  let zeroSize = "s"
  if(size > 90){
    zeroSize = "b"
  }
return (
    <img
      className="avatar"
      src={getImageUrl(person, zeroSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
        <Avatar
            size={40}
            person={{
              name: "Gregorio Y. Zara",
              imageId: "GregorioYZara",
            }}
        />
        <Avatar
            size={200}
            person={{
              name: "Gregorio Y. Zara",
              imageId: "GregorioYZara",
            }}
        />
    </div>
  );
}
