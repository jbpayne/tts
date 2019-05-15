let myMap = L.map('map').setView([41.7654452, -72.6761025], 15);
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(myMap);

const navbar = document.getElementById('navbar');

const allRestaurants = [];
fetch('./data/all.json').then(response => {
  return response.json();
})
.then(ids => {
  ids.forEach(id => {
    allRestaurants.push(`./data/${id}.json`);
  });
})
.then(() => {
  return allRestaurants.sort((a,b) => a > b);
})
.then((sorted) =>{
  sorted.forEach(restaurant => {
    fetch(restaurant).then(file=> {
      return file.json()
    })
    .then(data => {
      let navbarContents = `
      <div id="${data.id}" class="row">
        <a href="${data.website}">
        <div id="${data.id}-img" class="square img" style="background-image: url('./img/${data.id}.jpg');"></div>
      </a>
      <div id="${data.id}-txt" class="square txt">
      <p><a href="${data.website}">${data.name}</a></p>
      <p><a href="tel:${data.phone}" style="font-size: 1em; font-weight: normal">${data.phone}</a>
      <br>${data.address}</p>
      <p>${data.notes[0]}</p>
      </div></div>`;
      navbar.innerHTML += navbarContents;

      L.marker([data.lat, data.long], { title: `${data.name}` }).addTo(myMap).bindPopup(data.name + '<br>' + data.address)
    })
  })
});
