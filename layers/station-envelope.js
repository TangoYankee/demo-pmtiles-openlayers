import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON.js";
import { BASE_PATH } from "../constants";
import { Style, Circle, Fill } from "ol/style";

export const stationEnvelopeLayer = new VectorLayer({
  source: new VectorSource({
    url: `${BASE_PATH}/MTA_Subway_and_Rail_Station_Envelopes_20260413.geojson`,
    format: new GeoJSON(),
    attributions: `<a href="https://data.ny.gov/">NYS</a>; `,
  }),
  style: new Style({
    fill: new Fill({
      color: "rgba(0, 255, 0, 1)",
    }),
  }),
});
