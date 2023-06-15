import './lib/lib';
import $ from './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).fadeIn(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeOut(800);
});

$('button').eq(2).onClick(() => {
    $('.w-500').fadeToggle(800);
});

$('.wrap').html(
    `<div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
            <a href="#" class="dropdown-item">action</a>
            <a href="#" class="dropdown-item">action #2</a>
            <a href="#" class="dropdown-item">action #3</a>
        </div>

    </div>`
);

$('.dropdown-toggle').dropdown();