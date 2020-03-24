function fadeIn() {
  let workBlock = document.getElementsByClassName('showup');
  let currentBot = screen.height;
  let blockTop = [];
  for (var i = 0; i < workBlock.length; i++) {
    blockTop[i] = workBlock[i].getBoundingClientRect().top;
    console.log(`currentBot ${i}: `, currentBot);
    console.log(`blockTop ${i}: `, blockTop[i]);
    if (currentBot > blockTop[i]) {
      if (workBlock[i].classList.contains('bkgheader')) {
        workBlock[i].style.opacity = 0.3;
      } else {
        workBlock[i].style.opacity = 1;
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', fadeIn);
document.addEventListener('scroll', fadeIn);
