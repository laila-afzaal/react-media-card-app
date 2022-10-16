import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Image from './img/pic.webp'

const MediaCard = ({ title, body, imageURL }) => (
  <div className="mediaCard">
     <h2>{title}</h2>
     <p>{body}</p>
     <img width={400} src={imageURL} alt="" />
  </div>
)

const MediaPage = () => (
  <>
   <MediaCard
      title="Nature"
      body="Scenery"
      imageURL='https://thumbs.dreamstime.com/b/picturesque-autumn-scenery-santa-maddalena-village-church-road-colorful-trees-meadows-foreground-mountain-peaks-159426189.jpg'
   ></MediaCard>
   <MediaCard
      title="Nature"
      body="Scenery"
      imageURL='https://thumbs.dreamstime.com/b/picturesque-autumn-scenery-santa-maddalena-village-church-road-colorful-trees-meadows-foreground-mountain-peaks-159426189.jpg'
   ></MediaCard>
   <MediaCard
      title="Nature"
      body="Scenery"
      imageURL='https://thumbs.dreamstime.com/b/picturesque-autumn-scenery-santa-maddalena-village-church-road-colorful-trees-meadows-foreground-mountain-peaks-159426189.jpg'
   ></MediaCard>
  </>
)

ReactDOM.render(<MediaPage/>, document.querySelector('#root'));
