import axios from "axios";
import "./app.css";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = process.env.GOOGLE_MAPS_API_KEY || "";

form.addEventListener("submit", searchAddressHandler);

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

// Add error handling for Maps loading
function initMap(coordinates: { lat: number; lng: number }) {
  try {
    const map = new google.maps.Map(document.getElementById("map")!, {
      center: coordinates,
      zoom: 16,
    });
    new google.maps.Marker({ position: coordinates, map: map });
  } catch (error) {
    console.error("Error initializing map:", error);
    alert("There was an error loading the map. Please check your connection.");
  }
}

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((response) => {
      if (response.data.status !== "OK") {
        throw new Error("Could not fetch location!");
      }
      const coordinates = response.data.results[0].geometry.location;
      initMap(coordinates);
    })
    .catch((error) => {
      alert(error.message);
      console.log(error);
    });
}
