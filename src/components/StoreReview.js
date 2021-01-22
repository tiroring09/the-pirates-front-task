import { images, captions, cp } from '../data/StoreReviewData'

const StoreReview = () => {
  return (
    <>
      {images.map((x, i) => <>
        <img src={x} style={{width: '100%'}}></img>
        {(i < captions.length) ?
          <div style={cp}>{captions[i]}</div> :
          null
        }
      </>)}
    </>
  )
}

export default StoreReview;