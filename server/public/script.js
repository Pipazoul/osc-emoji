var apiUrl = "http://localhost:8080/api/emoji";

$(document).ready(function(){
    console.log('hello !');


    $("#emoji-1").click(function(){
        console.log('emoji 1 !');
        $.post(apiUrl, {emojiId: 1} );
        $("#emoji-1")
    });

    $("#emoji-2").click(function(){
        console.log('emoji 2 !');
        $.post(apiUrl, {emojiId: 2} );
    });

});