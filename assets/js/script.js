/*------------------------------------------------------------------
[ MTC Self Storage Script File]
-------------------------------------------------------------------*/

/* ----------------------------------------
1. Loader Code Starts Here
---------------------------------------- */

$(window).on("load", function () {
        $(".se-pre-con").fadeOut("slow");
    });

/* ----------------------------------------
Loader Code Ends Here
---------------------------------------- */

 const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;



// Function to scroll to an element with an offset (to avoid cutting off the title)
function scrollToShowTitle(elementId) {
    const headerHeight = document.querySelector('header').offsetHeight;
    const element = document.getElementById(elementId);
  
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerHeight - 20; // Subtract header height and add an extra 20px offset
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }


