class Carousel {
    constructor(element){
        this.element = element;
        this.leftBtn = document.querySelector('.carousel .left-button');
        this.rightBtn = document.querySelector('.carousel .right-button');
        this.index = 0;
        this.image = element.querySelectorAll('img')[this.index];
        this.image.style.display = "block";
        this.images = element.querySelectorAll(".carousel img");
        this.rightBtn.addEventListener('click', () => {
            this.clickRight();
        });
        this.leftBtn.addEventListener('click', () => {
            this.clickLeft();
        });
    }
    summonImages(){
        this.images.forEach(item => {
            item.style.display = "none";
        });
    }
    displayImages(){
        this.images[this.index].style.display = "block";
    }
    clickRight(){
        if (this.index < Array.from(this.images).length - 1){
            this.index++;
            this.summonImages();
            this.displayImages();
        }
    }
  
    clickLeft(){
        if (this.index > 0){
            this.index--;
            this.summonImages();
            this.displayImages();
        }
    }
}

let carousel = document.querySelectorAll(".carousel");
carousel.forEach(element => new Carousel(element));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
