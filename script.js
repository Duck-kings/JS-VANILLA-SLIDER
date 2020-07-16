let btnf = document.querySelector(".btnf");
let btnb = document.querySelector(".btnb");
let tracker = document.querySelector("#tracker");
let item = document.querySelectorAll('img');
let pos = 0;
let slidesToShow = 1;
let slidesToScroll = 1;
let itemCount = document.querySelectorAll('img').length;
let itemWidth = tracker.clientWidth / slidesToShow;
let movePosition = slidesToScroll * itemWidth;
item.forEach(( item) => {
    item.style.minWidth = itemWidth + "px";
});
btnf.addEventListener("click", ()=>{
    pos -=movePosition;
    tracker.style.transform = "translateX("+ pos + "px)";
    check();
});
btnb.addEventListener("click", ()=>{
    pos +=movePosition;
    tracker.style.transform = "translateX("+ pos + "px)";
    check();
});
function check(){
    btnb.disabled = pos === 0;
    btnf.disabled = pos <= -(itemCount - slidesToShow) * itemWidth;
}
check();
//https://www.youtube.com/watch?v=2Bo619QsSE4---видео с обьяснением!!!








