//date now
let year = new Date().getFullYear();

// mouse handling
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

//html elements
let root = document.querySelector(':root');
let element = document.getElementById("gridLabel");
let slider = document.getElementById("girdSlider");
let footer = document.querySelector('footer');
let canvas = document.querySelector('.canvas');
let colorPicker = document.getElementById('color');
let colorButton = document.getElementById('Colorbtn');
let clearButton = document.getElementById('Clearbtn');



slider.addEventListener('input',function (e) {
   element.innerText = e.target.value;
   createGrid(+e.target.value)  
});

clearButton.addEventListener('click' , () => createGrid(+slider.value));

function createGrid(number)
{
    let h = 100 / number;
    let w = 100 / number;

    root.style.setProperty('--height' , `${h}%`);
    root.style.setProperty('--width' , `${w}%`);

    canvas.innerHTML = '';

    for(let i = 0 ; i < number ; i++){
        let row = document.createElement('div');
        row.classList.add('gridRow');
        canvas.appendChild(row);
        for(let i = 0 ; i < number; i++)
        {
            let element = document.createElement('div');
            element.addEventListener('mouseover',colorMe);
            element.addEventListener('mousedown' ,colorMe);
            element.classList.add('gridElement');
            row.appendChild(element);
        }
    }
}

function colorMe(e)
{
    if (e.type === 'mouseover' && !mouseDown) return;

    e.target.style.backgroundColor = color.value;
}