console.log("test");
 $(document).ready(function() {
//do not do anything till page is loaded

$("#theTarget").skippr({

            transition: 'slide',
            speed: 1000,
            easing: 'easeOutQuart',
            navType: 'block',
            childrenElementType: 'div',
            arrows: true,
            autoPlay: true,
            autoPlayDuration: 3000,
            keyboardOnAlways: true,
            hidePrevious: false

})
$("#theTarget1").skippr({

            transition: 'slide',
            speed: 1000,
            easing: 'easeOutQuart',
            navType: 'block',
            childrenElementType: 'div',
            arrows: true,
            autoPlay: true,
            autoPlayDuration: 3000,
            keyboardOnAlways: true,
            hidePrevious: false

})

});
//closes entire function
