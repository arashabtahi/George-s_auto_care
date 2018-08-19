var markers = [];

function initMap(){

  var map = new google.maps.Map(document.getElementById('map'),{

    center:{lat:29.612094,lng:-95.5280511},
    zoom: 12,
    mapTypeId: 'satellite',
});




  var largeinfowindow = new google.maps.InfoWindow();
  var locations =[

          {title:"My House", location:{lat:29.5973139, lng:-95.57288}},
          {title:"Mall", location:{lat:29.5915532,lng:-95.6252361}},
          {title:"Gym", location:{lat:29.5734457, lng:-95.5752477}}
         ];
       for (var i = 0; i < locations.length; i++){
            var mylocation = locations[i];
            var mylocationlatlng = mylocation.location
            var mytitle = mylocation.title

        var marker = new google.maps.Marker({
            position: mylocationlatlng,
            map:map,
            title:mytitle,
            animation: google.maps.Animation.DROP,
            id: i
        });
        markers.push(marker)
        marker.addListener("click", function(){
          populateinfowindow(this, largeinfowindow)
        })

      }

        document.getElementById('show_listing').addEventListener("click", showlisting);
        document.getElementById('hide_listing').addEventListener("click", hidelisting);


  function populateinfowindow(marker, infowindow){
    if(infowindow.marker != marker){
      infowindow.marker = marker
      infowindow.setContent("<div>"+ marker.title+"</div>");
      infowindow.open(map, marker);
      infowindow.addListener("click", function(){
        infowindow.setMarker(null)
      });
    }
  }



function showlisting(){
 var bounds = new google.maps.LatLngBounds();
 for(var i = 0; i < markers.length; i++){
  markers[i].setMap(map);
  markers[i].setAnimation(google.maps.Animation.DROP)
  bounds.extend(markers[i].position)

 }
 map.fitBounds(bounds);
};

function hidelisting(){
  for(i = 0; i < markers.length; i++){
    markers[i].setMap(null)
  }
};

}