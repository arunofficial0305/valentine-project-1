$(document).ready(function(){


    //flowers hide 
    $('#flowers').hide();

    //flowers fadein
    $('#btn-1').click(function(){
        $('#flowers').fadeIn(3000);
    });

     //letter hide
     $('#hidden-1').hide();

    // surprise hide
    $('#btn-3').hide();

    //yes letter slideToggle
    $('#btn-1').click(function(){
        $('#hidden-1').slideToggle(2000);
         $('#btn-3').fadeIn(3000);
        });

    // No button run
    $('#btn-2').mouseenter(function(){
        let x = Math.random()*300;
        let y = Math.random()*300;

        $(this).css({
            left: x + "px",
            top: y + "px"
        });
    });

    //supppse no clicked
    $('#btn-2').click(function(){
        alert("paraahh ne click pannita YOU WON my darling"

        )
    });

    //audio hide 
    $('#audio-1').hide();
    
    
    //audio show

    $('#btn-4').click(function(){
        $('#audio-1').fadeIn(1000);
    })

    // love magic hide 
    $('.hiderun').hide();

    // show 
    $('#btn-5').click(function(){
        $('.hiderun').show();
    })

   


});
