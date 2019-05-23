  var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2.7,
          center: {lat: 15.454166, lng: 18.732206},
          mapTypeId: 'roadmap'
        });

        var iconBase = 'http://maps.google.com/mapfiles/kml/paddle/';
        var icons = {
          parking: {
            name: 'Parking',
            icon: iconBase + 'red-diamond-lv.png'
          },
          library: {
            name: 'Library',
            icon: iconBase + 'red-diamond-lv.png'
          },
          info: {
            name: 'Info',
            icon: iconBase + 'red-diamond-lv.png'
          }
        };

        var features = [
          {
            position: new google.maps.LatLng(-16.2902, -63.5887),
            type: 'info'
          }, {
            position: new google.maps.LatLng(-14.2350, -51.9253),
            type: 'info'
          }, {
            position: new google.maps.LatLng(12.5657, 104.9910),
            type: 'info'
          }, {
            position: new google.maps.LatLng(4.570868, -74.297333),
            type: 'info'
          }, {
            position: new google.maps.LatLng(-1.831239, -78.183403),
            type: 'info'
          }, {
            position: new google.maps.LatLng(7.946527, -1.023194),
            type: 'info'
          }, {
            position: new google.maps.LatLng(15.783471, -90.230759),
            type: 'info'
          }, {
            position: new google.maps.LatLng(18.971188, -72.285217),
            type: 'info'
          }, {
            position: new google.maps.LatLng(15.199999, -86.241905),
            type: 'info'
          }, {
            position: new google.maps.LatLng(-3.370417, -168.734039),
            type: 'info'
          }, {
            position: new google.maps.LatLng(-18.766947, 46.869106),
            type: 'info'
          }, {
            position: new google.maps.LatLng(46.862495, 103.846657),
            type: 'info'
          }, {
            position: new google.maps.LatLng(12.865416, -85.207230),
            type: 'info'
          }, {
            position: new google.maps.LatLng(-23.442503, -58.443832),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(-9.189967, -75.015152),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(12.879721, 121.774017),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(8.460555, -11.779889),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(-19.015438, 29.154858),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(13.794185, -88.896530),
            type: 'library'
          }
        ];

        // Create markers.
        features.forEach(function(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
          });
        });

        // var legend = document.getElementById('legend');
        // for (var key in icons) {
        //   var type = icons[key];
        //   var name = type.name;
        //   var icon = type.icon;
        //   var div = document.createElement('div');
        //   div.innerHTML = '<img src="' + icon + '"> ' + name;
        //   legend.appendChild(div);
        // }

        // map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
      }

    