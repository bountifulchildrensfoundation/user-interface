var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 12.8628, lng: 30.2176},
          zoom: 3
        });
      }