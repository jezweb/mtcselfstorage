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
function scrollToElementWithOffset(targetSelector, offset) {
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
        // Get the position of the target element
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

        // Scroll to the target position with an offset
        window.scrollTo({
            top: targetPosition - offset,  // Adjust the scroll position to account for the offset
            behavior: 'smooth'  // Smooth scroll effect
        });
    }
}


