import VectorTileLayer from "ol/layer/VectorTile";
import { Fill, Style } from "ol/style";
import MVT from "ol/format/MVT";
import { BASE_PATH } from "../constants";
import { PMTilesVectorSource } from "ol-pmtiles";

export const stationEnvelopeTileLayer = new VectorTileLayer({
  source: new PMTilesVectorSource({
    url: `${BASE_PATH}/MTA_Subway_and_Rail_Station_Envelopes_20260413.pmtiles`,
    attributions: `<a href="https://data.ny.gov/">NYS</a>; `,
    minZoom: 9,
    maxZoom: 17,
  }),
  style: new Style({
    fill: new Fill({ color: "rgba(0, 255, 0, 1)" }),
  }),
});
