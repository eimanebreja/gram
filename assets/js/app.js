$(document).ready(function () {
  var owlclient = $("#owl-client");
  owlclient.owlCarousel({
    items: 1,
    loop: true,
    rewind: true,
    autoplay: false,
    autoplayTimeout: 2500,
    nav: false,
    dots: true,
  });

  var owlclientsp = $("#owl-clientsp");
  owlclientsp.owlCarousel({
    items: 1,
    loop: true,
    rewind: true,
    autoplay: false,
    autoplayTimeout: 2500,
    nav: false,
    dots: true,
  });

  var owlteam = $("#owl-team");
  owlteam.owlCarousel({
    items: 3,
    loop: true,
    autoplay: false,
    autoplayTimeout: 2500,
    nav: false,
    dots: false,
    center: true,
    stagePadding: 120,
    responsive: {
      0: {
        items: 1,
        stagePadding: 90,
      },
      600: {
        items: 1,
        stagePadding: 120,
      },
      1000: {
        items: 3,
        stagePadding: 120,
      },
    },
  });
  var camp = $("#owl-campaign");
  camp.owlCarousel({
    items: 1,
    loop: true,
    rewind: true,
    autoplay: false,
    autoplayTimeout: 2500,
    nav: false,
    dots: false,
    thumbs: true,
    thumbsPrerendered: true,
  });
});

// function resizeGridItem(item) {
//   grid = document.getElementsByClassName("grid")[0];
//   rowHeight = parseInt(
//     window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
//   );
//   rowGap = parseInt(
//     window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
//   );
//   rowSpan = Math.ceil(
//     (item.querySelector(".content").getBoundingClientRect().height + rowGap) /
//       (rowHeight + rowGap)
//   );
//   item.style.gridRowEnd = "span " + rowSpan;
// }

// function resizeAllGridItems() {
//   allItems = document.getElementsByClassName("item");
//   for (x = 0; x < allItems.length; x++) {
//     resizeGridItem(allItems[x]);
//   }
// }

// function resizeInstance(instance) {
//   item = instance.elements[0];
//   resizeGridItem(item);
// }

// window.onload = resizeAllGridItems();
// window.addEventListener("resize", resizeAllGridItems);

// allItems = document.getElementsByClassName("item");
// for (x = 0; x < allItems.length; x++) {
//   imagesLoaded(allItems[x], resizeInstance);
// }

const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const body = document.getElementById("body-area");

if (menuIcon) {
  menuIcon.addEventListener("click", function () {
    if (slideoutMenu.style.opacity == "1") {
      slideoutMenu.style.opacity = "0";
      slideoutMenu.style.pointerEvents = "none";
      // navcolored.style.boxShadow = "0 1px 2px rgba(0, 0, 0, 0.5)";
      body.style.overflow = "auto";
      $(".hamburger").toggleClass("is-active");
    } else {
      slideoutMenu.style.opacity = "1";
      slideoutMenu.style.pointerEvents = "auto";
      body.style.overflow = "hidden";
      // navcolored.style.boxShadow = "none";
      $(".hamburger").toggleClass("is-active");
    }
  });
}

(function () {
  $(".menu-lists").on("click", function () {
    $(".hamburger").toggleClass("is-active");
  });
})();

function myFunction() {
  var x = document.getElementById("slideout-menu");
  if (x.style.opacity === "1") {
    x.style.opacity = "0";
    console.log("HAHA");
    body.style.overflow = "auto";
    slideoutMenu.style.pointerEvents = "none";
    $(".hamburger").toggleClass("is-active");
  } else {
    x.style.opacity = "0";
    console.log("HEHE");
    body.style.overflow = "hidden";
    slideoutMenu.style.pointerEvents = "auto";
    $(".hamburger").toggleClass("is-active");
  }
}
