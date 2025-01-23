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