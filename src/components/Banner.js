import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { bannerData as bData } from '../data/data';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Banner = () => {
  const [listBanner, setListBanner] = useState(bData);
  const [viewAll, setViewAll] = useState(false);

  useInterval(() => {
    let tmp = listBanner.filter((x, i) => i > 0);
    tmp.push(listBanner[0]);
    setListBanner(tmp);
  }, 1000);

  const bannerItems = listBanner.map((b, idx) => {
    return (
      <div key={idx} style={stl.bEach} className={idx > 0 && (viewAll ? null : "hide")}>
        <Link to={b.uri} style={stl.link}>
          {b.label} <span style={stl.bold}>{b.price}</span> {b.comment}
        </Link>
      </div>
    );
  });

  return (
    <div style={stl.mgn}>
      <div style={stl.btn} onClick={()=>viewAll?setViewAll(false):setViewAll(true)}>
        {viewAll?"▲":"▼"}
      </div>
      {bannerItems}
    </div>
  );
}

const stl = {
  mgn: {
    // margin: '0.5em 0',
  },
  bEach: {
    textAlign: 'center',
    backgroundColor: '#313842',
    padding: '0.15em 0',
  },
  link: {
    color: 'white',
  },
  bold: {
    color: 'greenYellow',
  },
  btn: {
    float: 'right',
    color: 'white',
    cursor: 'pointer',
    padding: '0 0.5em',
  }
};
export default Banner;