import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from 'ol/format/GeoJSON.js';
import { BASE_PATH } from "../constants";
import { Style, Circle, Fill } from "ol/style";

export const stationPointLayer = new VectorLayer({
  source: new VectorSource({
    url: `${BASE_PATH}/MTA_Subway_Stations.geojson`,
    format: new GeoJSON(),
    attributions: `<a href="https://data.ny.gov/">NYS</a>; `,
  }),
  style: new Style({
    image: new Circle({
      radius: 3,
      fill: new Fill({
        color: "rgba(0, 0, 255, 1)"
      })
    })
  })
})
