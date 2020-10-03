const lat = document.querySelector("#latitude");
const long = document.querySelector("#longitude");

if ("geolocation" in navigator) {
  console.log("Geolocation works here....");
  //
  //
  const mymap = L.map("map").setView([45, 3], 2);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
  }).addTo(mymap);

  //
  //

  navigator.geolocation.getCurrentPosition(async (position) => {
    const latitude = await position.coords.latitude;
    const longitude = await position.coords.longitude;

    lat.innerHTML = latitude;
    long.innerHTML = longitude;
    const marker = L.marker([latitude, longitude]).addTo(mymap);

    const data = {
      latitude: latitude,
      longitude: longitude,
    };

    async function sendData() {
      await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      await console.log("Data send to the server");
    }
    sendData();
  });
} else {
  console.error("Geolocation doesn't work here...");
}
