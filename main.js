import "./style.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { subwayStationAdaLayer } from "./layers/subway-station-ada";

const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
    subwayStationAdaLayer,
  ],
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});
