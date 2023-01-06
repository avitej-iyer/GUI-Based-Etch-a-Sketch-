const default_col = '#333333';
const default_mode = 'color';
const default_size = 16;

let selected_col = default_col;
let selected_mode = default_mode;
let selected_size = default_size;

let mouse_down = false;

function set_color(new_color){
    selected_col = new_color;
}

function set_mode(new_mode){
    activate_button(new_mode);
    selected_mode = new_mode;
}

function set_size(new_size){
    selected_size = new_size;
}

function update_size(value){
    size_val.innerHTML = `${value} x ${value}`;
}

let color_picker_inp = document.getElementById('color_picker');
let custom_color_button = document.getElementById('custom_button');
let rainbow_button = document.getElementById('rainbow_button');
let eraser_button = document.getElementById('eraser_button');
let clear_board_button = document.getElementById('clear_board_button');
let size_val = document.getElementById('size_value');
let size_inp = document.getElementById('size_slider');
let drawing_board = document.getElementById('board');

color_picker_inp.oninput = (inp) => set_color(inp.target.value);
custom_color_button.onclick = () => set_mode('color');
rainbow_button.onclick = () => set_mode('rainbow');
eraser_button.onclick = () => set_mode('eraser');
clear_board_button.ondblclick = () => reload_grid();
size_inp.onmousemove = (inp) => update_size(inp.target.value);
size_inp.onchange = (inp) => changeSize(inp.target.value);

document.body.onmousedown = () => (mouse_down = true);
document.body.onmouseup = () => (mouse_down = false);

function changeSize(val){
    set_size(val);
    update_size(val);
    reload_grid();
}

function reload_grid(){
    clear_grid();
    setup_grid(selected_size);
}

function clear_grid(){
    drawing_board.innerHTML = '';
}

function setup_grid(grid_size){
    drawing_board.style.gridTemplateColumns = `repeat(${grid_size}, 1fr)`;
    drawing_board.style.gridTemplateRows = `repeat(${grid_size}, 1fr)`;

    for (let n = 0; n < grid_size**2; n++){
        let grid_element = document.createElement('div');
        grid_element.classList.add('grid-element');
        grid_element.addEventListener('mouseover', change_color);
        grid_element.addEventListener('mousedown', change_color);
        drawing_board.appendChild(grid_element);
    }
}

function change_color(e){
    if (e.type === 'mouseover' && !mouse_down) return 
    if (selected_mode === 'rainbow'){
        const randomR = Math.floor(Math.random()*256);
        const randomG = Math.floor(Math.random()*256);
        const randomB = Math.floor(Math.random()*256);
        e.target.style.backgroundColor = `rgb(${randomR},${randomG}, ${randomB})`;
    } else if (selected_mode === 'color'){
        e.target.style.backgroundColor = selected_col;
    } else if (selected_mode === 'eraser'){
        e.target.style.backgroundColor = '#fefefe';
    }
}

function activate_button(newMode) {
    if (selected_mode === 'rainbow') {
      rainbow_button.classList.remove('active')
    } else if (selected_mode === 'color') {
      custom_color_button.classList.remove('active')
    } else if (selected_mode === 'eraser') {
      eraser_button.classList.remove('active')
    }
  
    if (newMode === 'rainbow') {
      rainbow_button.classList.add('active')
    } else if (newMode === 'color') {
      custom_color_button.classList.add('active')
    } else if (newMode === 'eraser') {
      eraser_button.classList.add('active')
    }
  }

  window.onload = () => {
    setup_grid(default_size);
    activate_button(default_mode);
  }