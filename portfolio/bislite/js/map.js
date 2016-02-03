function initMap() {
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
    zoom: 17, 
    center: {lat: 44.986, lng: -93.261},
    mapTypeId: google.maps.MapTypeId.ROADMAP, 
    mapTypeControl: false, 
    streetViewControl: false, 
    panControl: false, 
    zoomControl: false, 
    scaleControl: false 
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  map.set('styles', 
    [{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}]
  );
  var marker = new google.maps.Marker({
  map: map,
      place: {
      location: {lat: 44.986, lng: -93.261},
      query: 'Строка для определения'
    }
  });

  var infoWindow = new google.maps.InfoWindow({
    content: 'Hello my friends :)'
  });

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
}
google.maps.event.addDomListener(window, 'load', initMap);