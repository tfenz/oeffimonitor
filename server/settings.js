// add your API key here
const api_key = ''; // NOTE: api_key no longer needed to access data from wiener linien

// define all RBLs of stops you want to display
const api_ids = [
  "223",    // 9 Westbahnhof & 43 Neuwaldegg
  "231",    // 43 Schottentor
  "549",    // 9 Wallrißstraße
];

const api_url = 'http://www.wienerlinien.at/ogd_realtime/monitor' +
  '?activateTrafficInfo=stoerunglang' +
  `&sender=${api_key}`+
  '&rbl=' + api_ids.join("&rbl=");

// define filters to exclude specific departures from the monitor
// currently you can exclude lines as a whole or only at certain stops
const filters = [
  {
    line: ['VRT'],  // excludes whole line (VRT = tourist line)
  }
];

// define your current locat.ion
const location_coordinate = '48.218504, 16.327353'; // Location of Cafe Max

// define OSRM server for routing to stops. Empty string to disable feature
const osrm_api_url = 'http://router.project-osrm.org/route/v1/foot/' + location_coordinate + ';';

module.exports = {
  'api_url'         : api_url,
  'api_key'         : api_key,
  'api_ids'         : api_ids,
  'filters'         : filters,
  'api_cache_msec'  : 6000,   // cache API responses for this many milliseconds; default: 6s
  'listen_port'     : 8080,   // port to listen on
  'osrm_api_url'    : osrm_api_url
};
