//Get elements from the dom


const hero = document.querySelector(".hero")
const images = document.querySelectorAll(".images img")


//Set sensitivity for each image//
const sensitivities = [
  25, -30, 10
];

//loop throughout all images//
for(let i = 0; i < images.length; i++) {
  //Add a mousemove event to the hero section
  hero.addEventListener("mousemove", e => {
    /*Setting a small timeout will make the effect smoother*/
    setTimeout(() => {
      /*Get mouse coordinates on X and Y axis
      inside the hero section container*/
      const x = e.clientX;
      const y = e.clientY;
      /*Get half of the width and height
      of the hero section*/
      const w = hero.offsetWidth / 2;
      const h = hero.offsetHeight / 2;
      //Reformat the coordinate values with sensitivity
      let convertX = ((x - w) * sensitivities[i]) / w;
      let convertY = ((y - h) * sensitivities[i]) / h;
      //Transform the images using the new values
      images[i].style.transform = `
      translateX(${convertX}px)
      translateY(calc(-50% - ${convertY}px)`; /* We need to keep the 50% Y translate from the Css*/
    }, 200);
  });
}