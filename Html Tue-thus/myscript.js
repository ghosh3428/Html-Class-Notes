$(document).ready(function () {

    $('#bhide').click(function () {
        $('img').hide(5000);
    });

    $('#bslideup').click(function () {
        $('img').slideUp(5000);
    });

    $('#bfadeout').click(function () {
        $('img').fadeOut(5000);
    });

    $('#bshow').click(function () {
        $('img').show(2000);
    });

    $('#bslidedown').click(function () {
        $('img').slideDown(2000);
    });

    $('#bfadein').click(function () {
        $('img').fadeIn(2000);
    });

    $('#btoggle').click(function () {
        $('img').toggle(3000);
    });

    $('#bslidtoggle').click(function () {
        $('img').slideToggle(3000);
    });

    $('#bfadetoggle').click(function () {
        $('img').fadeToggle(3000);
    });

    /*
    $("#iname").focus(function()
    {
        $('#iname').css("color" , "white");
        $('#iname').css({"background-color" : "green" , "font-size":"25"});
    });
    
    $("#iname").blur(function()
    {
        $('#iname').css("color" , "black");
        $('#iname').css({"background-color" : "white" , "font-size":"15"});
    });
    */

    $("input").focus(function () {
        $(this).css("color", "white");
        $(this).css({ "background-color": "green", "font-size": "25" });
    });

    $("input").blur(function () {
        $(this).css("color", "black");
        $(this).css({ "background-color": "white", "font-size": "15" });
    });

    $('button').mouseover(function () {
        $(this).css("color", "black");
    })
    $('button').mouseleave(function () {
        $(this).css("color", "white");
    })

    $('#add').click(function () {
        first = parseInt($('#first').val());
        second = parseInt($('#second').val());

        result = first + second;

        $('#result').val(result);
    });
    $('#sub').click(function () {
        first = parseInt($('#first').val());
        second = parseInt($('#second').val());

        result = first - second;

        $('#result').val(result);
    });
    $('#div').click(function () {
        first = parseInt($('#first').val());
        second = parseInt($('#second').val());

        result = first / second;

        $('#result').val(result);
    });
    $('#mul').click(function () {
        first = parseInt($('#first').val());
        second = parseInt($('#second').val());

        result = first * second;

        $('#result').val(result);
    });



});
