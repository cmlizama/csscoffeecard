if (Meteor.isClient) {

     $(document).ready(function() {
       var steam = $('#steam');
        function runIt() {
          steam.animate({opacity:'+=1'}, 1250);
          steam.animate({opacity:'-=0.75'}, 1250, runIt);
}
       runIt();
});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
