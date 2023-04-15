
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>
{
    const header = document.getElementById('nav3')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 100 ? nav3.classList.add('scroll-nav')
        : nav3.classList.remove('scroll-nav')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>
{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/////////////////////////////////////////////////////////

var navhum = document.querySelector(".icon_menu")
var navmenu = document.querySelector(".navmobile")

navhum.addEventListener("click", () =>
{
    navmenu.classList.toggle("active");
})


////////////////////swiperheder/////////////////////

// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 10,
//     slidesPerView: 4,
//     freeMode: true,
//     watchSlidesProgress: true,

// });

var swiper2 = new Swiper(".mySwiperbig", {
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    thumbs: {
        swiper: swiper,
    },
    autoplay: {
        delay: 3000,

    },
    speed: 1300,
});

/////////////////////////////Swider2///////////////////

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerView: 4,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        1600: {
            slidesPerView: 6,
            spaceBetween: 15,
        },
    },


});

// var swiper = new Swiper(".mySwiper2", {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     "@0.00": {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },
//     "@0.75": {
//       slidesPerView: 4,
//       spaceBetween: 20,
//     },
//     "@1.00": {
//       slidesPerView: 5,
//       spaceBetween: 0,
//     },
//     "@1.50": {
//       slidesPerView: 6,
//       spaceBetween: 10,
//     },
//   },
// });


/////////////////////////// Swiper3 /////////////////

var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        550: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});


/////////////////////////// Swiper4 /////////////////


var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 10,

    breakpoints: {
        300: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});


///////////////////////////////////////////////////////

var productImg = document.getElementById("productImg");
var smallImg = document.getElementsByClassName("small-img");


var redmore = document.getElementById("redmore");
var bodymore = document.querySelector(".bodymore");

var numbers = document.getElementById('boxx');
var next = document.querySelector(".nextt");
var prev = document.querySelector(".prevv");
var counter = 0;
var productTotal = Number(document.getElementById("productTotal").textContent);
next.addEventListener("click", () =>
{
    counter++;
    numbers.innerHTML = counter;
    document.getElementById("productTotal").textContent = productTotal * counter;
});
prev.addEventListener("click", () =>
{
    if (counter > 1)
    {
        counter--;
        document.getElementById("productTotal").textContent = productTotal * counter;
        numbers.innerHTML = counter;
    }
});

smallImg[0].onclick = function ()
{
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function ()
{
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function ()
{
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function ()
{
    productImg.src = smallImg[3].src;
}

redmore.addEventListener("click", () =>
{
    bodymore.classList.toggle("active")
})

