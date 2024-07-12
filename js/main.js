closebtn = document.getElementById("close")
closebtn.addEventListener('click', function () {
    $('aside').animate({ left: `-${width}px` }, 500)
})
$(document).ready(function () {
    $('aside').animate({ left: `-${width}px` }, 500)
})
let width = $('.navs').outerWidth()
$('.open').click(function () {
    if ($('aside').css('left') === '0px')
        closebtn.addEventListener('click', function () {
            $('aside').animate({ left: `-${width}px` }, 500)
        })
    else
        $('aside').animate({ left: `0px` }, 500)
})

$(".text2").hide()
$(".text3").hide()
$(".text4").hide()

$(document).ready(function () {
    $(".singer1").click(function () {
        $(".text1").slideToggle(300);
    });

    $(".singer2").click(function () {
        $(".text2").slideToggle(300);

    });

    $(".singer3").click(function () {
        $(".text3").slideToggle(300);
    });

    $(".singer4").click(function () {
        $(".text4").slideToggle(300);
    });
});

let countdown = new Date("Jul 31, 2024 23:59:59").getTime()

let counter = setInterval(() => {
    let datenow = new Date().getTime();
    let diffdate = countdown - datenow;
    let days = Math.floor(diffdate / 1000 / 60 / 60 / 24);
    document.querySelector("#days").innerHTML = `${days} D`
    let hours = Math.floor((diffdate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.querySelector("#hours").innerHTML = `${hours} H`
    let min = Math.floor((diffdate % (1000 * 60 * 60)) / (1000 * 60));
    document.querySelector("#minuts").innerHTML = `${min} m`
    let sec = Math.floor((diffdate % (1000 * 60)) / (1000));
    document.querySelector("#seconds").innerHTML = `${sec} s`
    if (diffdate < 0) {
        clearInterval(counter)
    }
}, 1000)
document.querySelector("textarea").addEventListener('keyup', function () {
    let char = document.querySelector("textarea").value
    let count = 100 - (char.length)
    let remain = document.getElementById("remaining")
    if (count < 0) {
        remain.innerHTML = "your available character finished"
    }
    else {
        remain.innerHTML = count
    }
})
// smooth scrolling
// $("a").click(function(e){
//     let section = $(e.target).attr('href')
//     let sectop = $(section).offset().top
//     $('body,html').animate({screenTop:sectop},1000)
// })