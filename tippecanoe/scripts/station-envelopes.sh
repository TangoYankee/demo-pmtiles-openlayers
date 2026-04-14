#! /bin/sh

tippecanoe \
    --projection=EPSG:4326 \
    -l fill \
    source-data/MTA_Subway_and_Rail_Station_Envelopes.geojson \
    -o public/MTA_Subway_and_Rail_Station_Envelopes.pmtiles \
    -Z9 \
    -z16 \
    --force
