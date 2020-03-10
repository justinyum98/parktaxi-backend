const parkingLots = [
  {
    name: 'Pangea',
    lat: 32.8843,
    lng: -117.2431
  },
  {
    name: 'Gilman',
    lat: 32.8774,
    lng: -117.2339
  },
  {
    name: 'Hopkins',
    lat: 32.884,
    lng: -117.2388
  },
  {
    name: 'Revelle',
    lat: 32.872618,
    lng: -117.242509
  },
  {
    name: 'Osler',
    lat: 32.874726,
    lng: -117.236591
  },
  {
    name: 'Sixth',
    lat: 32.879438,
    lng: -117.229296
  }
];

const findParkingLotByName = (parkingLotName) => {
  for (let i = 0; i < parkingLots.length; i += 1) {
    if (parkingLots[i].name === parkingLotName) return parkingLots[i];
  }
  return null;
};

module.exports = { parkingLots, findParkingLotByName };
