import { Map } from "./UI/Map.js";
class LoadedPlace {
  constructor(coordinates, address) {
    new Map(coordinates);
    const headerTitleEl = document.querySelector("header h1");
    headerTitleEl.textContent = address;
  }
}

const url = new URL(location.href);
const queryParams = url.searchParams;
const coords = {
  lat: parseFloat(queryParams.get("lat")),
  lng: +queryParams.get("lng"),
};
console.log(coords);
const address = queryParams.get("address");
new LoadedPlace(coords, address);
