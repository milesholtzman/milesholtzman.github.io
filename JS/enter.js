$(document).ready(function(){
        var blockWidth = $(".block").width();
        $(".slide-left").click(function(){
            $(".block").animate({
                width: 0
            });
        });
        $(".slide-right").click(function(){
            $(".block").animate({
                width: blockWidth
            });
        });
    });

// $(document).ready(function(){
//         $(".slide-toggle").click(function(){
//             $(".box").animate({
//                 width: "toggle"
//             });
//         });
//     });