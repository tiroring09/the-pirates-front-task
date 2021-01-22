import rImg1 from '../assets/리뷰시작.jpg';
import rImg2 from '../assets/리뷰1.jpg';
import rImg3 from '../assets/리뷰2.jpg';
import rImg4 from '../assets/리뷰끝.jpg';

const cp1 = <>강서수협 청정수산입니다.<br/>넓은 수조를 사용하는 장점과<br/>사장님의 푸근한 인상으로<br/>후한 인심을 보실 수 있습니다.</>;
const cp2 = "제로페이로 결제 가능합니다.";
const cp3 = <>강서농수산물시장에 방문하시면<br/>청정수산을 꼭 한 번 방문해보세요^^!<br/>자세한 문의는 사장님 번호로 연락주세요.</>

const images = [rImg1, rImg2, rImg3, rImg4];
const captions = [cp1,cp2,cp3];
const cp = {
  textAlign: 'center',
  padding: '1em',
}

const StoreReview = () => {
  return (
    <>
      {images.map((x, i) => <>
        <img src={x} style={{width: '100%'}}></img>
        {(i < captions.length) ? <div style={cp}>{captions[i]}</div> : null}
      </>)}
    </>
  )
}

export default StoreReview;