import { useState } from 'react';
import { Link } from 'react-router-dom'
import StoreDetail from '../components/StoreDetail';
import StoreReview from '../components/StoreReview';
import { storeData } from '../data/data';

const s = storeData[8];

function Detail() {
  const [page, setPage] = useState(0);

  const mainContent = page === 0 ? <StoreDetail/> : <StoreReview/>;
  return (
    <>
      <div id="head">
        <div className="d-flex justify-content-between" style={st.top}>
          <div>
            <Link to="/">←</Link> {s.label}
          </div>
          <div>
            10.9만
          </div>
        </div>

        <div style={st.imgBox}>
          <img style={st.img} src={s.thumbnail}></img>
          <div style={st.tagWrap}>
            {s.tags.map((x) => <span style={st.tag}>{x}</span>)}
          </div>
        </div>

        <div style={st.infoBox}>
          <ul className="list-group" style={{listStyle: "none"}}>
            <li>
              <span style={st.mk1}>장소</span>
              서울특별시 강서구 외발산동 424
            </li>
            <li className="d-flex">
              <span style={st.mk1}>시간</span>
              <ul className="list-group" style={{display: "inline-block", listStyle: "none"}}>
                <li>월요일: 08:00 ~ 20:30</li>
                <li>화요일: 08:00 ~ 20:30</li>
                <li>수요일: 08:00 ~ 20:30</li>
                <li>목요일: 08:00 ~ 20:30</li>
                <li>금요일: 08:00 ~ 20:30</li>
              </ul>
            </li>
            <li>
              <span style={st.mk1}>전화</span>
              <span style={st.phone}>010-8774-9211</span>
              <span style={st.phone}>010-8774-9211</span>
            </li>
            <li className="d-flex">
              <span style={st.mk1}>배송</span>
              <ul className="list-group" style={{display: "inline-block", listStyle: "none"}}>
                <li>
                  <span style={st.mk2}>퀵서비스</span>
                  (10000원 ~ 20000원 선)
                </li>
                <li>
                  <span style={st.mk2}>고속버스</span>
                  (사장님께 문의하세요!)
                </li>
                <li>
                  <span style={st.mk2}>택배</span>
                  (5000원 내외)
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div style={st.tabBox}>
          <div style={st.tab} onClick={()=>setPage(0)}>가격 정보</div>
          <div style={st.tab} onClick={()=>setPage(1)}>탐방기</div>
          <div style={st.tab}>리뷰 {s.summary.comments}</div>
          <div style={st.tab}>위치</div>
        </div>
      </div>
      {mainContent}
    </>
  );
}

const st = {
  top: {
    padding: '1em',
  },
  imgBox: {
    position: 'relative',
  },
  img: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
  },
  tagWrap: {
    position: 'absolute',
    bottom: '0.5em',
    paddingLeft: '0.2em',
  },
  tag: {
    color: 'white',
    backgroundColor: '#1C79BC',
    // opacity: '0.5',
    margin: '0.1em',
    padding: '0.2em',
    borderRadius: '0.5em',
    fontSize: '0.7em',
  },
  infoBox: {
    backgroundColor: '#1C79BC',
    color: 'white',
    padding: '1em',
  },
  mk1: {
    padding: '0.5em',
  },
  phone: {
    backgroundColor: 'white',
    borderRadius: '0.5em',
    color: '#1C79BC',
    fontSize: '0.9em',
    padding: '0.2em',
    fontWeight: 'bold',
    margin: '0.3em',
    display: 'inline-block',
  },
  mk2: {
    display: 'inline-block',
    width: '90px',
  },
  tabBox: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    textAlign: "center",
    margin: '1em 0',
  },
  tab: {
    padding: '0.5em',
    cursor: 'pointer',
    border: '1px solid #f1f1f1',
  },
}

export default Detail;