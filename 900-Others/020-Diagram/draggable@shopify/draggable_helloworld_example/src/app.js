import {Sortable} from '@shopify/draggable';

$(function(){
new Sortable(document.querySelectorAll('ul'))
  .on('sortable:start', () => console.log('sortable:start'))
  .on('sortable:sorted', () => console.log('sortable:sorted'))
  .on('sortable:stop', () => console.log('sortable:stop'));

});
