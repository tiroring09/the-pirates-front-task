import { useState, useEffect } from 'react';
import { zoneData, itemData, sortData } from '../data/data';
import storeQuery from '../lib/storeQuery';

import { useContext } from 'react';
import { StoreContext } from '../context/storeContext';

import st from '../styles/filter.module.css';

function Filter() {
  let { setStoreList } = useContext(StoreContext);

  const [zone, setZone] = useState(zoneData[0]);
  const [item, setItem] = useState(itemData[0]);
  const [sort, setSort] = useState(sortData[0]);
  const [kwrd, setKwrd] = useState('');
  const [zSwitch, setZSwitch] = useState(false);
  const [iSwitch, setISwitch] = useState(false);
  const [sSwitch, setSSwitch] = useState(false);

  const [inGrid, setInGrid] = useState([]);

  //////
  const [queryTrigger, setQueryTrigger] = useState(false);

  useEffect(() => {
    if (queryTrigger) {
      query();
      setQueryTrigger(false);
    }
  }, [queryTrigger])
  ///////////

  const handleKwrdChange = (e) => setKwrd(e.currentTarget.value);

  const closeAll = () => {
    setZSwitch(false);
    setISwitch(false);
    setSSwitch(false);
  }

  const query = () => {
    // console.log(`${zone.label}/${item.label}/${sort.label}/${kwrd}`);

    let result = storeQuery(zone, item, sort, kwrd);

    // console.log(result);
    setStoreList(result);
  }

  // 이 부분 비동기 처리로 수정 필요 >>>> ///////////이부분들이 수정한부분이므로 정리할것
  const setZIS = (obj) => {
    if (zSwitch) {setZone(obj)}
    else if (iSwitch) {setItem(obj)}
    else if (sSwitch) {setSort(obj)}
    closeAll();
    /////////
    // query();
    setQueryTrigger(true);
    /////////////
  }

  const renderedGrid = inGrid.map((x,i) => {
    return (<div className={st.fItem} key={i} onClick={()=>setZIS(x)}>{x.label}</div>);
  })


  return (
    <>
      {/* <div className={cn('container', 'text-center')}> */}
      <div className={st.gridWrap}>
        {/* <div className="row"> */}
          <div className={"col", st.fItem} onClick={() => {
            if (zSwitch) {setZSwitch(false)}
            else {closeAll(); setZSwitch(true); setInGrid(zoneData)}
          }}>{zone.label} {zSwitch ? "▼": "▲" }</div>
          <div className={"col", st.fItem} onClick={() => {
            if (iSwitch) {setISwitch(false)}
            else {closeAll(); setISwitch(true); setInGrid(itemData)}
          }}>{item.label} {iSwitch ? "▼": "▲" }</div>
          <div className={"col", st.fItem} onClick={() => {
            if (sSwitch) {setSSwitch(false)}
            else {closeAll(); setSSwitch(true); setInGrid(sortData)}
          }}>{sort.label} {sSwitch ? "▼": "▲" }</div>
        {/* </div> */}
      </div>

      {/* 하나라도 켜져있으면 렌더링 */}
      {(zSwitch || iSwitch || sSwitch) &&
        <div className={st.gridWrap}>
          {renderedGrid}
        </div>
      }

      <div className="input-group">
        <input className="form-control" type="text" onChange={handleKwrdChange} placeholder="검색어를 입력하세요."></input>
        <button className="btn btn-outline-secondary" onClick={()=>query()}>검색</button>
      </div>
    </>
  );
}

export default Filter;