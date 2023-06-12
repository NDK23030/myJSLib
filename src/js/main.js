import './lib/lib';

$('button').onClick(function() {
    $(this).hide().show().toggleClass('active');
});