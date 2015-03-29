$(document).ready(function() {
   $('#navigation').localScroll({duration:800});
});



  // Next Scroll Bar

$(function() {

    function scroll(direction) {

        var scroll, i,
                positions = [],
                here = $(window).scrollTop(),
                collection = $('.panel');

        collection.each(function() {
            positions.push(parseInt($(this).offset()['top'],10));
        });

        for(i = 0; i < positions.length; i++) {
            if (direction == 'next' && positions[i] > here) { scroll = collection.get(i); break; }
            if (direction == 'prev' && i > 0 && positions[i] >= here) { scroll = collection.get(i-1); break; }
        }

        if (scroll) {
            $.scrollTo(scroll, {
                duration: 750       
            });
        }

        return false;
    }

    $("#next,#prev").click(function() {        
        return scroll($(this).attr('id'));        
    });

    $(".scrolltoanchor").click(function() {
        $.scrollTo($($(this).attr("href")), {
            duration: 750
        });
        return false;
    });

});

       $(document).ready(function(){
           $('li img.story').on('click',function(){
                var src = $(this).attr('src');
                var img = '<img src="' + src + '" class="img-responsive"/>';
                $('#myModal').modal();
                $('#myModal').on('shown.bs.modal', function(){
                    $('#myModal .modal-body').html(img);
                });
                $('#myModal').on('hidden.bs.modal', function(){
                    $('#myModal .modal-body').html('');
                });
           });  
        })

        $(document).ready(function(){
           $('li img.party-picture').on('click',function(){
                var text = $(this).next('.wedding-party-content').html();
                // var img = '<img src="' + src + '" class="img-responsive"/>';
                var src = $(this).attr('src');
                var img = '<img src="' + src + '" class="img-responsive"/>' + text;
                $('#myModal-wedding').modal();
                $('#myModal-wedding').on('shown.bs.modal', function(){
                    $('#myModal-wedding .modal-body').html(img);
                });
                $('#myModal-wedding').on('hidden.bs.modal', function(){
                    $('#myModal-wedding .modal-body').html('');
                });
           });  
        })



