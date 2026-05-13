const sections = document.querySelectorAll("section");

const navLinks =
  document.querySelectorAll(".nav-link");

/*
 CLICK ACTIVE
*/

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(nav =>
            nav.classList.remove("active")
        );

        link.classList.add("active");
    });

});

/*
 SCROLL ACTIVE
*/

// window.addEventListener("scroll", () => {

//     let current = "";

//     sections.forEach(section => {

//         const sectionTop = section.offsetTop;

//         const sectionHeight = section.clientHeight;

//         if(
//           window.scrollY >= sectionTop - 200 &&
//           window.scrollY < sectionTop + sectionHeight - 200
//         ){
//             current = section.getAttribute("id");
//         }

//     });

//     navLinks.forEach(link => {

//         link.classList.remove("active");

//         if(
//           link.getAttribute("href") === `#${current}`
//         ){
//             link.classList.add("active");
//         }

//     });

// });