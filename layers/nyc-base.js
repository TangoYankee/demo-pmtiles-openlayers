import VectorTileLayer from "ol/layer/VectorTile";
import { Fill, Style } from "ol/style";
import { BASE_PATH } from "../constants";
import { PMTilesVectorSource } from "ol-pmtiles";

export const nycBaseLayer = new VectorTileLayer({
  source: new PMTilesVectorSource({
    url: `${BASE_PATH}/nyc-basic-layers.pmtiles`,
    attributions: `<a href="https://data.ny.gov/">NYS</a>; `,
    minZoom: 9,
    maxZoom: 17,
  }),
  style: (feature) => {
    const layer = feature.get("layer");
    let color = null;
    if (layer === "earth") {
      color = "rgb(233, 234, 220)";
    }
    if (layer === "water") {
      color = "rgb(190, 218, 215)";
    }

    if (color === null) return;
    return new Style({
      fill: new Fill({
        color,
      }),
    });
  }
});
