function mainCarousel(element){
    element.slick({
        dots:false,
        arrows:true,
        infinite: true,
        autoplay:true,
        autoplaySpeed:2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 400,
    
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
            },
            {
            breakpoint: 991,
            settings: {
                slidesToShow:2,
                slidesToScroll: 1,
                infinite: true,
            },
            },
            {
            breakpoint: 652,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            }
        ]
    })
}
$('.deliv-carousel').slick({
        dots:false,
        arrows:true,
        infinite:true,
        autoplay:true,
        autoplaySpeed:2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 400,
    
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
            },
            {
            breakpoint: 991,
            settings: {
                slidesToShow:3,
                slidesToScroll: 1,
                infinite: true,
            },
            },
            {
            breakpoint: 560,
            settings:"unslick"
            }
        ]
    })







mainCarousel($('.flav-carousel'))
mainCarousel($('.cakes-carousel'))
mainCarousel($('.occ-carousel'))
// $('.flav-carousel').slick({
//     dots:false,
//     arrows:true,
//     infinite: true,
//     autoplay:true,
//     autoplaySpeed:2000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     speed: 400,


//     responsive: [
//         {
//         breakpoint: 1024,
//         settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             infinite: true,
//         }
//         },
//         {
//         breakpoint: 950,
//         settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             infinite: true,
//         },
//         },
//         {
//         breakpoint: 652,
//         settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//         }
//         }
//     ]
// })
$('.intro-carousel').slick({
    arrows:false,
    dots:true,
    autoplay:true,
    autoplaySpeed:3000,

})

$(window).resize(function(){
    $('.flav-carousel')[0].slick.refresh();
    $('.cakes-carousel')[0].slick.refresh();
  });
$('.alert').css('display','none')
function copyToClipboard(elementId) {
    console.log('hi');
    var val = document.createElement("input");
    val.setAttribute("value", document.getElementById('disc-code-button').innerHTML);
    document.body.appendChild(val);
    val.select();
    document.execCommand("copy",value='1234');
    document.body.removeChild(val);
    $('#alert1').slideDown()
    setTimeout(() => {
        $('#alert1').slideUp()
    }, 1000);

  }