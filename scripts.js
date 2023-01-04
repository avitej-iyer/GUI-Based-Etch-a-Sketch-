const default_col = '#333333';
const default_mode = 'color';
const default_size = 16;

let selected_col = default_col;
let selected_mode = default_mode;
let selected_size = default_size;

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

let color_picker_inp = document.getElementById('color_picker');
let custom_color_button = document.getElementById('custom_button');
let rainbow_button = document.getElementById('rainbow_button');
let eraser_button = document.getElementById('eraser_button');
let clear_board_button = document.getElementById('clear_board_button');
let size_val = document.getElementById('size_value');
let size_inp = document.getElementById('size_slider');
let drawing_board = document.getElementById('board');
