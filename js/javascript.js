function initMap() {
        var myLatLng = {lat: 29.7024692, lng: -95.4802229};

        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 29.702482, lng: -95.482366},
          zoom: 17,


        });
      var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,

      });



}




