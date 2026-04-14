#! /bin/sh

tile-join \
    -l earth \
    -l water \
    -o public/nyc-basic-layers.pmtiles \
    source-data/nyc-default-layers.pmtiles \
    --force
