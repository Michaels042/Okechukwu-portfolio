
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const desktop_menu = document.querySelector('.top-nav');


menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    desktop_menu.classList.toggle('is-active');
});

function readMoreHtml() {
    var element = document.getElementById("moreHtml");
    element.classList.toggle('show');
  }

  function readMoreCss() {
    var element = document.getElementById('moreCss');
    element.classList.toggle('show');
  }

  function readMoreJs() {
    var element = document.getElementById('moreJs');
    element.classList.toggle('show');
  }

// function readMoreHtml() {
//     var mhtml = document.getElementById("moreHtml");
//     if (mhtml.style.color === "black") {
//       mhtml.style.color = "white";
//     } else {
//       mhtml.style.color = "black";
//     };
//   };



//   function readMoreCss() {
//     var mcss = document.getElementById("moreCss");
//     if (mcss.style.color === "black") {
//       mcss.style.color = "white";
//     } else {
//       mcss.style.color = "black";
//     };
//   };


//   function readMoreJs() {
//     var mjs = document.getElementById("moreJs");
//     if (mjs.style.color === "black") {
//       mjs.style.color = "white";
//     } else {
//       mjs.style.color = "black";
//     };
//   };

// const parentContainer = document.querySelector('.details');
// parentContainer.addEventListener('click', event=> {
//     const current = event.target;
//     const isReadMoreBtn = current.className.includes('read-more-btn');
//     if(!isReadMoreBtn) return;
//     const currentText = event.target.parentNode.querySelector('.read-more-text');
//     currentText.classList.toggle('read-more-text--show');
//     current.textContent = current.textContent.includes('Read More') ?
//     "Read Less" : "Read More";
// });

// document.addEventListener('click', function handleClick(event) {
//     event.target.classList.add('bg-yellow');
//   });
