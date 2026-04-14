import "./style.css";
import { Map, View } from "ol";
import { useGeographic } from "ol/proj";
import { stationPointLayer } from "./layers/station-point";
import { stationEnvelopeLayer } from "./layers/station-envelope";
import { nycBaseLayer } from "./layers/nyc-base";

useGeographic();

const map = new Map({
  target: "map",
  layers: [nycBaseLayer, stationEnvelopeLayer, stationPointLayer],
  view: new View({
    maxZoom: 16,
    center: [-74, 40.7],
    zoom: 11,
    extent: [-75, 40.2, -73, 41.2],
  }),
});

const defaultStationNameDisplay = "Click on a station to see its name";

map.on("click", async (e) => {
  const stations = await stationEnvelopeLayer.getFeatures(e.pixel);
  const stationNameDisplay = document.getElementById("selected-station-name");
  if (stationNameDisplay === null)
    throw new Error("could not find element for station name");

  const currentStationName = stationNameDisplay.textContent;
  if (stations.length <= 0) {
    stationNameDisplay.textContent = defaultStationNameDisplay;
  }
  if (stations.length >= 1) {
    const station = stations[0];
    const stationProperties = station.getProperties();
    const { station_name: nextStationName } = stationProperties;

    if (nextStationName === undefined)
      throw new Error("name for station not found");

    if (nextStationName === currentStationName) {
      stationNameDisplay.textContent = defaultStationNameDisplay;
      return;
    }

    stationNameDisplay.textContent = nextStationName;
  }
});
