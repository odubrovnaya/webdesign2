// for the carousel
let carouselImages = ["", "", ""];
let persianImages = ["img/persian01.jpg", "img/persian02.jpg", "img/persian03.jpg", "img/persian04.jpg"];
let mainecoonImages = ["img/mainecoon01.jpg", "img/mainecoon02.jpg", "img/mainecoon03.jpg", "img/mainecoon04.jpg"];
let siameseImages = ["img/siamese01.jpg", "img/siamese02.jpg", "img/siamese03.jpg", "img/siamese04.jpg"];
let bulldogImages = ["img/bulldog01.jpg", "img/bulldog02.jpg", "img/bulldog03.jpg", "img/bulldog04.jpg"];
let huskyImages = ["img/husky01.jpg", "img/husky02.jpg", "img/husky03.jpg", "img/husky04.jpg"];
let dachshundImages = ["img/dachshund01.jpg", "img/dachshund02.jpg", "img/dachshund03.jpg", "img/dachshund04.jpg"];
let chihuahuaImages = ["img/chihuahua01.jpg", "img/chihuahua02.jpg", "img/chihuahua03.jpg", "img/chihuahua04.jpg"];
let hamstersImages = ["img/hamster01.jpg", "img/hamster02.jpg", "img/hamster03.jpg", "img/hamster04.jpg"];
let guineapigImages = ["img/guineapig01.jpg", "img/guineapig02.jpg", "img/guineapig03.jpg", "img/guineapig04.jpg"];
let chinchillaImages = ["img/chinchilla01.jpg", "img/chinchilla02.jpg", "img/chinchilla03.jpg", "img/chinchilla04.jpg"];
let currentIndex = 1;
let carouselIMG = document.getElementById("carouselIMG");

// for the select
let groupSelect = document.getElementById("groupSelect");
let categorySelect = document.getElementById("categorySelect");
let catsOptions = ['Persian', 'Maine Coon', 'Siamese'];
let dogsOptions = ['Bulldog', 'Husky', 'Dachshund', 'Chihuahua'];
let rodentsOptions = ['Hamsters', 'Guinea Pig', 'Chinchilla'];

let changeSlide = function () {
    if (currentIndex === 0) {
        carouselIMG.src = carouselImages[1];
        currentIndex = 1;
    } else if (currentIndex === 1) {
        carouselIMG.src = carouselImages[2];
        currentIndex = 2;
    } else if (currentIndex === 2) {
        carouselIMG.src = carouselImages[3];
        currentIndex = 3;
    } else {
        carouselIMG.src = carouselImages[0];
        currentIndex = 0;
    }
}

let refreshCategory = function () {
    console.log(groupSelect);
    categorySelect.innerHTML = '';
    let selectedValue = groupSelect.value;
    if (selectedValue === "cats") {
        catsOptions.forEach(function (elem) {
            categorySelect.innerHTML += '<option value="' + elem + '">' + elem + '</option>';
        })
    } else if (selectedValue === "dogs") {
        dogsOptions.forEach(function (elem) {
            categorySelect.innerHTML += '<option value="' + elem + '">' + elem + '</option>';
        })
    } else if (selectedValue === "rodents") {
        rodentsOptions.forEach(function (elem) {
            categorySelect.innerHTML += '<option value="' + elem + '">' + elem + '</option>';
        })
    }
    refreshCarousel();
}

let refreshCarousel = function () {
    let currentValue = categorySelect.value;
    console.log(currentValue);

    switch(currentValue) {
        case 'Persian':
            carouselImages = persianImages;
            break;
        case 'Maine Coon':
            carouselImages = mainecoonImages;
            break;
        case 'Siamese':
            carouselImages = siameseImages;
            break;
        case 'Bulldog':
            carouselImages = bulldogImages;
            break;
        case 'Husky':
            carouselImages = huskyImages;
            break;
        case 'Dachshund':
            carouselImages = dachshundImages;
            break;
        case 'Chihuahua':
            carouselImages = chihuahuaImages;
            break;
        case 'Hamsters':
            carouselImages = hamstersImages;
            break;
        case 'Guinea Pig':
            carouselImages = guineapigImages;
            break;
        case 'Chinchilla':
            carouselImages = chinchillaImages;
            break;
    }
}
window.addEventListener("load", function () {
    refreshCategory()
    // triggered once after 0.5 sec
    setTimeout(function () {
        prompt("SUBSCRIBE TO OUR NEWSLETTER!!!",
            "my@mail.com");
    }, 500);

    // triggered every 2 sec
    setInterval(changeSlide, 1500);
});

groupSelect.addEventListener("change", refreshCategory);
categorySelect.addEventListener("change", refreshCarousel);