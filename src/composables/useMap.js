import { ref } from 'vue';
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import View from 'ol/View';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import OSM from 'ol/source/OSM';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';

export default function useMap () {
  const map = ref(null)
  const vectorSource = new VectorSource()
  const companySelect = ref(null)
  const initializeMap = () => {
    const initialCoords = [-14.2350, -21.9253]
    const initialZoom = 3

    const mapInstance = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        })
      ],
      view: new View({
          center: fromLonLat(initialCoords),
          zoom: initialZoom
      })
    })

    const vectorLayer = new VectorLayer({
      source: vectorSource
    })

    mapInstance.addLayer(vectorLayer)
    map.value = mapInstance
  }

  const addMakers = (markers)=>{
    markers.forEach((markerInfo)=>{
      const marker = new Feature({
        geometry: new Point(fromLonLat([markerInfo.lon,markerInfo.lat])),
      })
      marker.setStyle(
        new Style({
          image: new Icon({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: 'https://docs.maptiler.com/openlayers/default-marker/marker-icon.png',
          }),
        })
      );

      marker.setId(markerInfo.id);
      vectorSource.addFeature(marker);


    })

    setupClickHandler()
  }

  const flyTo = (lon, lat, zoom)=>{
    if(map.value) {
      const view = map.value.getView();
      view.animate({
        center: fromLonLat([lon, lat]),
        zoom,
        duration: 1000,
      });
    }
  }

  const setupClickHandler = () => {
    if (!map.value) return;

    map.value.on('click', function (event) {
      let clickedOnMarker = false;

      map.value.forEachFeatureAtPixel(event.pixel, function (feature) {
        if (feature && feature.getId() !== undefined) {
          console.log(feature.getId())
          companySelect.value = feature.getId()
          clickedOnMarker = true;
        }
      });

      if (!clickedOnMarker) {
          companySelect.value = null
      }
    });
  };


  return {
    map,
    initializeMap,
    addMakers,
    flyTo,
    setupClickHandler,
    companySelect
  }


}



// export default function useMap () {

//   let map = null
//   let zoneInitial = [-14.2350, -21.9253]
//   let zoomInitial = 3;
//   let vectorSource = new VectorSource()
//   const markers = [
//     { id: 1, lon: -51.2277, lat: -30.0346 },
//     { id: 2, lon: -52.2277, lat: -31.0346 },

//   ];

//   const initializeMap = () => {
//     map = new Map({
//       target: 'map',
//       layers: [
//         new TileLayer({
//           source: new OSM(),
//         }),
//       ],
//       view: new View({
//         center: zoneInitial,
//         zoom: zoomInitial,
//       })
//     })
//     vectorSource = new VectorSource();

//     const vectorLayer = new VectorLayer({
//       source: vectorSource,
//     });

//     map.addLayer(vectorLayer);

//   }


//   const addMarks = () =>{




//     markers.forEach((markerInfo)=>{
//       const marker = new Feature({
//         geometry: new Point(fromLonLat([markerInfo.longitude, markerInfo.latitude])),
//       });

//       marker.setStyle(
//         new Style({
//           image: new Icon({
//             anchor: [0.5, 46],
//             anchorXUnits: 'fraction',
//             anchorYUnits: 'pixels',
//             src: 'https://docs.maptiler.com/openlayers/default-marker/marker-icon.png',
//           }),
//         })
//       )
//       console.log(marker);
//       marker.setId(markerInfo.id);
//       vectorSource.addFeature(marker);
//     })

//   }




//   return {
//     initializeMap,
//     addMarks
//   }

// }
