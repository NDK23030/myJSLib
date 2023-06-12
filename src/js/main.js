import './lib/lib';
import $ from './lib/lib';

$('.active').setAttr('data-text', 'value').removeAttr('data-text').toggleAttr('data-text', 'test').toggleAttr('data-text');
console.log($('button').mapAttr('disabled', 'data-test'));