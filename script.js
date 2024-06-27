let width = document.getElementById('width');
let height = document.getElementById('height');
let color = document.getElementById('color');
let border = document.getElementById('border');
let speed = document.getElementById('speed');
let runBtn = document.getElementById('runBtn');
let result = document.querySelector('.result');


runBtn.addEventListener("click", () => {
    result.style.width = width.value + 'px';
    result.style.height = height.value + 'px';
    result.style.borderRadius = border.value;
    result.style.background = color.value;
    result.style.transition = speed.value + 's';
});
