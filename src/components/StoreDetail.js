import 광어 from '../assets/광어.jpg';
import 우럭 from '../assets/우럭.jpg';
import 활모둠회 from '../assets/활모둠회.jpg';
import stm from '../styles/storeDetail.module.css';

const StoreDetail = () => {
  return (
    <>
      <div style={st.price}>
        <div style={st.pTitle}>
          품목시세
        </div>
        <div style={st.pCard} className="d-flex">
          <div>
            <img src={광어}></img>
          </div>
          <div style={{flexGrow: '1', padding: '0.5em'}}>
            <div>광어 <span style={{color:'gray'}}>제주/양식</span> <span style={st.fr}>1kg당</span></div>
            <div>소 <span style={{color:'gray'}}>500g ~ 1kg</span> <span style={st.fr}>25000원</span></div>
            <div>중 <span style={{color:'gray'}}>500g ~ 1kg</span> <span style={st.fr}>30000원</span></div>
            <div>대 <span style={{color:'gray'}}>500g ~ 1kg</span> <span style={st.fr}>35000원</span></div>
          </div>
        </div>
        <div style={st.pCard} className="d-flex">
          <div>
            <img src={우럭}></img>
          </div>
          <div style={{flexGrow: '1', padding: '0.5em'}}>
            <div>광어 <span style={{color:'gray'}}>제주/양식</span> <span style={st.fr}>1kg당</span></div>
            <div>대 <span style={{color:'gray'}}>1kg</span> <span style={st.fr}>30000원</span></div>
          </div>
        </div>
      </div>

      <div style={st.menu}>
        <div style={{fontWeight: 'bold'}}>활 모둠회</div>
        <div className="d-flex justify-content-around align-items-center" style={{margin: '1em 0'}}>
          <div className="arrow">◁</div>
          <div style={st.menuImg} ><img style={{width:'100%'}}src={활모둠회}></img></div>
          <div className="arrow">▷</div>
        </div>
        <div>
          <table className="table-sm tbl text-center">
            <tr>
              <td style={{width: '50px'}}>소</td>
              <td className="text-left">35000원</td>
              <td style={{width: '50px'}}>2인</td>
            </tr>
            <tr>
              <td>중</td>
              <td className="text-left">45000원</td>
              <td>2인</td>
            </tr>
            <tr>
              <td>대</td>
              <td className="text-left">60000원</td>
              <td>2인</td>
            </tr>
          </table>
        </div>
        <div style={{color: 'gray', fontSize: '0.8em'}}>
          * 참돔(일본산) / 광어(제주) / 농어(중국산) / 연어(노르웨이) / 숭어(국산) 구성
        </div>
      </div>
    </>
  )
}

const st = {
  price: {
    padding: '1em',
  },
  pTitle: {
    color: 'darkred',
    padding: '0.3em',
    borderBottom: '1px solid darkred',
  },
  pCard: {
    margin: '0.5em',
  },
  fr: {float: 'right'},
  menu: {
    padding: '1em',
  },
  menuImg: {
    width: '70%',
  },
}

export default StoreDetail;