import Fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';

const Photo = (props) => (
  <Layout>
    <h1>Photo API</h1>
    <div className="photo-cont">
      {props.data.map(photo => (
        <a key={photo.id} target="_black" href={photo.url}>
          <div>
            <h2>{photo.title}</h2>
            <img className="img-responsive" src={photo.thumbnailUrl} />
          </div>
        </a>
      ))}
    </div>
    <style jsx>
      {`
        .photo-cont{
          display: flex;
          justify-content: space-between;
          aline-item: flex-start;          
          flex-wrap: wrap;
        }
        .photo-cont a{
          flex-base: 30%;
          width: 30%;
          display: block;
          margin-bottom: 30px;
        }
        .photo-cont a h2{
          font-size: 16px;
        }
        `}
    </style>
  </Layout>
);

Photo.getInitialProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=1');
  const data = await res.json();
  return {
    data
  }
}

export default Photo;
