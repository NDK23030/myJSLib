import $ from "../core";

$.prototype.dropdown = function() {
    for(let i = 0; i < this.length; i++) {
        const id = $(this[i]).getAttr('id');
        $(this[i]).onClick(() => {
            $(`[data-toggle-id="${id}"]`).fadeToggle(300);
        });
    }
};

$('.dropdown-toggle').dropdown();