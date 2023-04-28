const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

for (let i = 0; i < images.length; i++){
  const newImage = document.createElement('img')
  newImage.classList.add( 'image-item')
  newImage.setAttribute('alt', images[i].alt)
  newImage.src = images[i].url;
  const liItem = document.createElement('li')
  liItem.appendChild(newImage);
  document.querySelector('.gallery').appendChild(liItem)

}
