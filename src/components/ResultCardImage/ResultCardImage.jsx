import image1 from 'assets/images/motivational-img-1.png'
import image2 from 'assets/images/motivational-img-2.png'
import image3 from 'assets/images/motivational-img-3.png'
import image4 from 'assets/images/motivational-img-4.png'


const imagesObj = {
  1: image1,
  2: image2,
  3: image3,
  4: image4,
}


const getRandomImage = () => {
  const random = Math.floor(Math.random() * 3) + 1
  return imagesObj[random]
}

/** random svg illustrations used in cards  */
export const ResultCardImage = () => {
  const image = getRandomImage()
  return (
    <img src={image} alt='image'/>
  );
};
