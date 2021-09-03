
/*
setTimeout("document.bgColor='white'", 1000) ;
setTimeout("document.bgColor='lightpink'", 1500); 
setTimeout("document.bgColor = 'pink'", 2000) ;
setTimeout("document.bgColor = 'deeppink'", 2500); 
setTimeout("document.bgColor = 'red'", 3000) ;
setTimeout("document.bgColor = 'tomato'", 3500); 
setTimeout("document.bgColor = 'darkred'", 4000);
*/

var e = document.getElementById("first-intro-typing-div");
e.addEventListener("animationend", function(){
  setTimeout(addSecondAnimation,900);
  }, false);


var f = document.getElementById("second-intro-typing-div");
f.addEventListener("animationend", function(){
  setTimeout(finishSecondAnimation,1900);
}, false);





function finishSecondAnimation(){
  f.classList.remove('typewriter');
  unfade(document.getElementById('arrowVertDiv'))
 
}

function addSecondAnimation(){
  e.classList.remove('typewriter');
 
  f.className = "typewriter";
  
  var secondText = document.getElementById("second-intro-typing-txt");

  secondText.style.textIndent = '0px'
  secondText.innerHTML = "My name is Adam.";


}

function unfade(element) {
    var op = 0.02;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

window.sr = ScrollReveal();
    sr.reveal('.container');
    sr.reveal('.category-text');
    sr.reveal('.experience-title');
    sr.reveal('.experience-subtitle');
    sr.reveal('.experience-description');
    sr.reveal('.experience-title');


