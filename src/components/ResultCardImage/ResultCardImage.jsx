import image1 from 'assets/images/motivational-img-1.png'
import image2 from 'assets/images/motivational-img-2.png'
import image3 from 'assets/images/motivational-img-3.png'
import image4 from 'assets/images/motivational-img-4.png'
import image5 from 'assets/images/motivational-img-5.png'
import image6 from 'assets/images/motivational-img-6.png'
import image7 from 'assets/images/motivational-img-7.png'
import image8 from 'assets/images/motivational-img-8.png'
import image9 from 'assets/images/motivational-img-9.png'
import image10 from 'assets/images/motivational-img-10.png'
import image11 from 'assets/images/motivational-img-11.png'
import image12 from 'assets/images/motivational-img-12.png'
import image13 from 'assets/images/motivational-img-13.png'
import image14 from 'assets/images/motivational-img-14.png'
import image15 from 'assets/images/motivational-img-15.png'
import image16 from 'assets/images/motivational-img-16.png'
import image17 from 'assets/images/motivational-img-17.png'
import image18 from 'assets/images/motivational-img-18.png'
import image19 from 'assets/images/motivational-img-19.png'
import image20 from 'assets/images/motivational-img-20.png'

export const ResultCardImage = () => {
  const imagesObj = {
    1: image1,
    2: image2,
    3: image3,
    4: image4,
    5: image5,
    6: image6,
    7: image7,
    8: image8,
    9: image9,
    10: image10,
    11: image11,
    12: image12,
    13: image13,
    14: image14,
    15: image15,
    16: image16,
    17: image17,
    18: image18,
    19: image19,
    20: image20,
  }

  const getRandomImage = () => {
    const random = Math.floor(Math.random() * 20) + 1
    return imagesObj[random]
  }

  const image = getRandomImage()
  return (
    <img src={image}/>
  )
};
