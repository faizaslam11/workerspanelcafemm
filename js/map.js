function inicializar() {
    var map = L.map('map').setView([-22.912869, -43.228963], 17);
      mapLink = '<a href="https://openstreetmap.org">OpenStreetMap</a>';
      L.tileLayer(
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data &copy; ' + mapLink,
          maxZoom: 3,
          title: '2 Desenvolvedores'
          }).addTo(map);
          var marker = L.marker([-22.912869, -43.228963]).addTo(map);
}

inicializar();