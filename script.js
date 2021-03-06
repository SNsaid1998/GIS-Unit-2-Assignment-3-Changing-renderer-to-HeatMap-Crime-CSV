require([
      "esri/Map",
      "esri/layers/CSVLayer",
      "esri/views/MapView",
      "esri/config",
      "esri/core/urlUtils",
      "dojo/domReady!"
    ], function(
      Map,
      CSVLayer,
      MapView,
      esriConfig,
      urlUtils
    ) {

    var url = "https://raw.githubusercontent.com/gbrunner/Advanced_Python_for_GIS_and_RS/master/Week%202/stl_crime_wgs_84.csv"
     esriConfig.request.corsEnabledServers.push('https://rawgit.com');

 
     const template = {
   title: "Crime committed at {ILEADSStreet}"
};

        const csvLayer = new CSVLayer({
          url: url,
          title: "St. Louis Crime Heatmap",
          copyright: "St. Louis Police Department", 
          latitudeField:"Lat",
        longitudeField:"Lon",
          popupTemplate: template

        });

      csvLayer.renderer = {
        type: "heatmap",
        colorStops: [
            { color: "rgba(63, 40, 102, 0)", ratio: 0 },
            { color: "#9C33FF", ratio: 0.083 },
            { color: "#6B33FF", ratio: 0.166 },
            { color: "#3386FF",ratio: 0.249 },
            { color: "#33CAFF", ratio: 0.332 },
            { color: "#33FFEC", ratio: 0.415 },
            { color: "#33FFAF", ratio: 0.498 },
            { color: "#42FF33", ratio: 0.581 },
            { color: "#96FF33", ratio: 0.664 },
            { color: "#E0FF33", ratio: 0.747 },
            { color: "#FFE633", ratio: 0.83 },
            { color: "#FFA233", ratio: 0.913 },
            { color: "#FF3333", ratio: 1 }
          ],
          maxPixelIntensity: 400,
          minPixelIntensity: 0
      };

      var map = new Map({
        basemap: "dark-gray",
        layers: [csvLayer]
      });

      var view = new MapView({
        container: "viewDiv",
        center: [-90.1994, 38.6270],
        zoom: 12,
        map: map
      });

    });
