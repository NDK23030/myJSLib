import $ from '../core';

$.prototype.modal = function(created) {
    for(let i = 0; i < this.length; i++) {
        const target = $(this[i]).getAttr('data-target');
        $(this[i]).onClick((e) => {
            e.preventDefault();
            $(target).fadeIn(300);
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${this.calcScroll()}px`;
        });

        const closeElements = document.querySelectorAll(`${target} [data-close]`);
        closeElements.forEach(elem => {
            $(elem).onClick(() => {
                $(target).fadeOut(300);
                document.body.style.overflow = '';
                document.body.style.marginRight = `0`;
                if(created) {
                    document.querySelector(target).remove();
                }
            });
        });
    
        $(target).onClick((e) => {
            if(e.target.classList.contains('modal')) {
                $(target).fadeOut(300);
                document.body.style.overflow = '';
                document.body.style.marginRight = '0';
                if(created) {
                    document.querySelector(target).remove();
                }
            }
        });
    }
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

$.prototype.createModal = function({text, btns} = {}) {
    console.log(1);
    for(let i = 0; i < this.length; i++) {
        let modal = document.createElement('div');
        $(modal).addClass('modal');
        $(modal).setAttr('id', $(this[i]).getAttr('data-target').slice(1));

        const buttons = [];
        for(let j = 0; j < btns.count; j++) {
            let btn = document.createElement('button');
            $(btn).addClass('btn', ...btns.settings[j][1]);
            btn.textContent = btns.settings[j][0];
            if(btns.settings[j][2]) {
                $(btn).setAttr('data-close', 'true');
            }
            if(btns.settings[j][3] && typeof(btns.settings[j][3]) === 'function') {
                $(btn).onClick(btns.settings[j][3]);
            }

            buttons.push(btn);
        }

        $(modal).html(`
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">
                            ${text.title}
                        </div>
                    </div>
                    <div class="modal-body">
                        ${text.body}
                    </div>
                    <div class="modal-footer">

                    </div>
                </div>
            </div>
        `);

        modal.querySelector('.modal-footer').append(...buttons);
        document.body.appendChild(modal);
        $(this[i]).modal(true);
        // $(this[i]).getAttr('[data-target]');
    }
};