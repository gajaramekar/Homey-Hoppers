# US map geometry

`us-states.json` contains SVG state paths derived from the US states GeoJSON at:
https://github.com/PublicaMundi/MappingAPI/blob/master/data/geojson/us-states.json

The mainland uses an Albers equal-area projection (standard parallels 29.5° and
45.5°, central longitude −96°). Alaska and Hawaii are separately scaled insets.
The SVG viewBox is 900 × 590. Paths are stored locally; no map API or runtime
network request is needed.

Add customer dots to `customerLocations` in `components/customer-map.tsx`, using
map viewBox coordinates and a location label. The list is intentionally empty
until real customer locations are available.
