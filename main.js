import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { useGeographic } from 'ol/proj';
import { stationPointLayer } from './layers/station-point';

useGeographic();

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    stationPointLayer,
  ],
  view: new View({
    center: [-74, 40.7],
    zoom: 11,
    extent: [-75, 40.2, -73, 41.2],
  })
});
