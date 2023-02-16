// Toggle Class Active //
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar Sidebar //
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove("active");
});

// Messege count //
var myText = document.getElementById("mytext");
var result = document.getElementById("hasil");
var limit = 489;
result.textContent = 0 + "/" + limit;

myText.addEventListener("input" , function(){
  var textLength = myText.value.length;
  result.textContent = textLength + "/" + limit;

  if(textLength > limit){
    myText.style.borderColor = "#FFFF";
    result.style.color = "#FFFF";


  }else{
    myText.style.borderColor = "##FF0000";
    result.style.color = "##FF0000";
  }

});