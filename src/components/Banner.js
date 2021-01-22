import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { bannerData as bData } from '../data/data';

// setInterval 활용위한 wrapper
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
    // 배너의 순번 교체
    let tmp = listBanner.filter((x, i) => i > 0);
    tmp.push(listBanner[0]);
    setListBanner(tmp);
  }, 1000);

  return (
    <div style={stl.mgn}>

      <div style={stl.btn} onClick={()=>viewAll?setViewAll(false):setViewAll(true)}>
        {viewAll?"▲":"▼"}
      </div>

      {/* 각 배너들 렌더링 */}
      {listBanner.map((b, idx) => {
        return (
          <div key={idx} style={stl.bEach}
            className={(idx > 0 && !viewAll) ? "hide" : undefined}
          >
            <Link to={b.uri} style={stl.link}>
              {b.label} <span style={stl.bold}>{b.price}</span> {b.comment}
            </Link>
          </div>
        );
      })}
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