import './style.css';
import {Map, View} from 'ol';
import { useGeographic } from 'ol/proj';
import { stationPointLayer } from './layers/station-point';
import { stationEnvelopeLayer } from './layers/station-envelope';
import { nycBaseLayer } from './layers/nyc-base';

useGeographic();

const map = new Map({
  target: 'map',
  layers: [
    nycBaseLayer,
    stationEnvelopeLayer,
    stationPointLayer,
  ],
  view: new View({
    maxZoom: 16,
    center: [-74, 40.7],
    zoom: 11,
    extent: [-75, 40.2, -73, 41.2],
  })
});
