function initMap(){
    var pos = {lat:47.1691898, lng:11.8651456}; 
    var opt={
        center: pos,
        zoom: 12,
    }

    var myMap = new google.maps.Map(document.getElementById("map"), opt);
    var marker = new google.maps.Marker({
        position: pos,
        map: myMap,
        title:"SNOWBOARDING=)",

    });

    var info = new google.maps.InfoWindow({
        content: '<h3>This is amazing place for snowboarding & ski</h3><p>Have a nice day!) (c)Anskvch</p>'
    });

    marker.addListener("click", function() {
        info.open(myMap, marker);
    })
}

//Show map when scroll to section
var reviews = $('.fifth');
var reviewsTop = reviews.offset().top;
$(window).scroll(function(){
    var windowTop = $(this).scrollTop();
    if(windowTop > reviewsTop) {
        $('#map').html('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDJfDbP7SKkKuDc78PQwFomZCsEiaBjQd0&callback=initMap" async defer></script>')
        $(window).unbind('scroll')
    }
});