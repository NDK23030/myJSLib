import $ from '../core';

$.prototype.modal = function() {
    for(let i = 0; i < this.length; i++) {
        const target = $(this[i]).getAttr('data-target');
        $(this[i]).onClick((e) => {
            e.preventDefault();
            $(target).fadeIn(300);
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${this.calcScroll()}px`;
        });
    }

    const closeElements = document.querySelectorAll('[data-close]');
    closeElements.forEach(elem => {
        $(elem).onClick(() => {
            $('.modal').fadeOut(300);
            document.body.style.overflow = '';
            document.body.style.marginRight = `0`;
        });
    });

    $('.modal').onClick((e) => {
        if(e.target.classList.contains('modal')) {
            $('.modal').fadeOut(300);
            document.body.style.overflow = '';
            document.body.style.marginRight = '0';
        }
    });
};

$.prototype.calcScroll = function() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}

$('[data-toggle="modal"]').modal();