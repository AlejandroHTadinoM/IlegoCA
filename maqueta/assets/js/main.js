$(function() {
  $('.menu li').click(function() {
    var btnId = $(this).attr('id').split('btn');
    var container = 'item' + btnId[1];
    var containers = $('li#container > li[id!="' + container + '"]')
    container.animate({
      left: '-50%'
    }, 500, function() {
      containers.css('left', '150%');
      containers.appendTo('#container');
    });
    $('#'+container).animate({
      left: '50%'
    }, 500);
  });
});
