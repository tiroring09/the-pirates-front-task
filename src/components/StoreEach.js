import {Link} from 'react-router-dom';

const StoreEach = (props) => {
  const s = props.store;

  return (
    <div className="container d-flex" style={st.container}>
      <div>
        <img style={st.img} src={s.thumbnail}></img>
      </div>

      <div className="d-flex flex-column flex-grow-1" style={st.info}>

        <div>
          <Link to={s.uri} style={st.link}>
            <span>{s.label} </span>
            <span style={st.market}>{s.market}</span>
          </Link>
        </div>

        <div style={st.desc}>
          {s.description}
        </div>

        <div className="mt-auto d-flex">
          <span style={st.rating}>★{s.summary.rating}</span>
          <div>
          <span style={st.comments}>후기:{s.summary.comments}</span></div>
          <span className="ml-auto" style={st.state}>{s.state}</span>
        </div>

      </div>

      <div style={st.tagWrap}>
        {s.tags.map((x, i) => <span key={i} style={st.tag}>{x}</span>)}
      </div>
    </div>
  );
}

const st = {
  container: {
    margin: '1em 0',
    padding: '0',
    position: 'relative',
  },
  img: {
    width: '120px',
  },
  info: {
    padding: '0.5em',
  },
  link: {
    color: 'black',
  },
  market: {
    fontSize: '0.8em',
    color: 'gray',
  },
  desc: {
    fontSize: '0.75em',
    color: 'gray',
  },
  rating: {
    color: 'goldenrod',
    margin: '0 0.3em',
  },
  comments: {
    color: 'gray',
    fontSize: '0.8em',
  },
  state: {
    backgroundColor: '#0074E8',
    color: 'white',
    fontSize: '0.7em',
    borderRadius: '0.3em',
    padding: '0.3em',
  },
  tagWrap: {
    position: 'absolute',
    bottom: '0.2em',
    paddingLeft: '0.2em',
  },
  tag: {
    color: 'white',
    backgroundColor: 'black',
    opacity: '0.5',
    margin: '0.1em',
    padding: '0.2em',
    borderRadius: '0.5em',
    fontSize: '0.7em',
  },
}

export default StoreEach;