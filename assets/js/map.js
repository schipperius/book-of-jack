document.addEventListener("DOMContentLoaded", function () {
  var map = L.map('map').setView([20, 0], 2);

  var flatLayer = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    { attribution: 'Tiles © Esri' }
  ).addTo(map);
  var terrainLayer = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}',
    { attribution: 'Tiles © Esri' }
  );
  var satelliteLayer = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    { attribution: 'Tiles © Esri' }
  );

  var baseMaps = {
    "Flat / Topo": flatLayer,
    "Terrain": terrainLayer,
    "Satellite": satelliteLayer
  };
  L.control.layers(baseMaps, null, { position: 'topleft' }).addTo(map);

  var categoryColors = {
    origins: "#e74c3c",
    medieval: "#3498db",
    modern: "#2ecc71",
    food: "#f39c12",
    occupation: "#8e44ad",
    default: "#95a5a6"
  };

  var bounds = [];
  var markers = [];

  if (window.storyLocations && Array.isArray(window.storyLocations)) {
    window.storyLocations.forEach(function(place) {
      var color = categoryColors[place.category] || categoryColors.default;
      var marker = L.circleMarker(
        [place.lat, place.lng],
        {
          radius: 6,
          fillColor: color,
          color: color,
          weight: 1,
          opacity: 1,
          fillOpacity: 0.9
        }
      ).bindPopup(
        `<strong><a href="${place.url}">${place.name}</a></strong><br>${place.description}`
      );
      markers.push(marker);
      bounds.push([place.lat, place.lng]);
    });

    var markerGroup = L.layerGroup(markers).addTo(map);

    map.once('load', function() {
      if (bounds.length > 0) {
        map.fitBounds(bounds, { padding: [50, 50] });
      }
    });
  }
});
