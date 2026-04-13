import VectorTile from "ol/layer/VectorTile";
import { PMTilesVectorSource } from "ol-pmtiles";
import { Circle, Fill, Stroke, Style } from "ol/style";
import { BASE_PATH } from "../constants";

export const subwayStationAdaLayer = new VectorTile({
  source: new PMTilesVectorSource({
    url: `${BASE_PATH}/layer-sources/2024_aug_22_subway_ada.pmtiles `,
    attributions: `<a href="https://data.ny.gov/">NYS</a>; `,
  }),
  style: new Style({
    image: new Circle({
      radius: 1,
      fill: new Fill({
        color: "rgba(255, 0, 0, 1)",
      }),
      stroke: new Stroke({
        color: "gray",
        width: 1,
      }),
    }),
  }),
});
