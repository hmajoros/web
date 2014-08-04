// (function() {

//     var App = function() {
//         this.
//     };

//     App.prototype.onLoad = function() {
//         // body...
//     };

// })();



$(document).ready(function(){
    var nameString = "HENRY MAJOROS",
        nameArray = nameString.split("");

    for (var i = 0; i < nameArray.length; i++) {

        $('#name').append('<div class="letter">' + nameArray[i] + '</div>');
    }
});
