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

function update_size(val){
    size_val.innerHTML = '${val} x ${val}';
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
clear_board_button.ondblclick = () => clear_grid();
size_inp.onmousemove = (inp) => update_size(inp.target.value);
size_inp.onchange = (inp) => changeSize(e.target.value);

document.body.onmousedown = () => (mouse_down = true);
document.body.onmouseup = () => (mouse_down = false);

function changeSize(val){
    set_size(val);
    update_size(val);
    clear_grid();
}

