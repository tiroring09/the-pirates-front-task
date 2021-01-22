import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../context/storeContext';
import StoreEach from './StoreEach';

const perLoad = 10;

const StoreList = () => {
  const { storeList } = useContext(StoreContext);

  const [to, setTo] = useState(perLoad);

  // 새로운 검색시 스크롤인덱스초기화
  useEffect(() => {
    setTo(perLoad);
  }, [storeList])

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      console.log('detect page end');
      if (to < storeList.length) {
        setTo((priv) => priv+perLoad)
      }
    }
  };

  useEffect(() => {
    // scroll event listener 등록
    window.addEventListener("scroll", handleScroll);
    return () => {
      // scroll event listener 해제
      window.removeEventListener("scroll", handleScroll);
    };
  });


  const renderedStores = storeList.filter((x, i) => i < to).map((x, i) => <StoreEach store={x} key={i} />)

  return (
    <>
      {renderedStores}
    </>
  )
}

export default StoreList;