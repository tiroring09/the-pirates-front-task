import { storeData } from '../data/data';

function queryByZone({ locations }) {
  let result = [];

  for (let i = 0; i < storeData.length; i++) {
    for (let j = 0; j < locations.length; j++) {
      if (storeData[i].market === locations[j].label) {
        result.push(storeData[i]);
      }
    }
  }
  
  return result;
}

function queryByKwrd(data, kwrd) {
  let result = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].label.match(kwrd)) {
      result.push(data[i]);
    }
  }

  return result;
}

const storeQuery = (zone, item, sort, kwrd) => {
  // 예외처리
  let qbz;
  if (zone.label === "모든지역") {
    qbz = storeData;
  } else {
    qbz = queryByZone(zone);
  }
  return queryByKwrd(qbz, kwrd);
}

export default storeQuery;