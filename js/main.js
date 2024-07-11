closebtn = document.getElementById("close")
closebtn.addEventListener('click', function () {
    $('aside').animate({ left: `-${width}px` }, 500)
})

let width = $('.navs').outerWidth()
$('.open').click(function () {
    if ($('aside').css('left') === '0px')
        // $('aside').animate({left:`-${width}px`},500)
        closebtn.addEventListener('click', function () {
            $('aside').animate({ left: `-${width}px` }, 500)
        })
    else
        $('aside').animate({ left: `0px` }, 500)
})

$(".singer1").click(function () {
    $(".text1").slideToggle(300)
})
$(".singer2").click(function () {
    document.querySelector(".text2").classList.remove("d-none")
    // document.querySelector(".text2").classList.add("d-block")
    $(".text2").slideToggle(300)
})
$(".singer3").click(function () {
    document.querySelector(".text3").classList.remove("d-none")
    $(".text3").slideToggle(300)
})
$(".singer4").click(function () {
    document.querySelector(".text4").classList.remove("d-none")
    $(".text4").slideToggle(300)
})

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