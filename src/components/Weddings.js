import React, { Component } from "react";
import { Link } from 'react-router-dom';
import TodoList from "../people";
import { Grid, Row, Col } from "react-bootstrap";
import "../../node_modules/picnic/picnic.min.css";

const WeddingImage = ({ name, image, likes, addLike }) => {
  return (
    <div>
      <article class="card">
        <img src={'/images/'+image+'.jpg'} />
        <footer>
          <h3>{name}</h3>
          <Link to={'/weddings/'+image}>choose this card</Link>
          <button className="like-button" onClick={addLike}>
            Like {likes}
          </button>
        </footer>
      </article>
    </div>
  );
};

export default class Weddings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        { name: "kwcgw", image: "card1", likes: 0 },
        { name: "ervr", image: "card2", likes: 0 },
        { name: "revr", image: "card3", likes: 0 },
        { name: "revre", image: "card4", likes: 0 }
      ]
    };
  }
  addLike = index => {
    let likes = this.state.images[index].likes;
    likes++;

    const copyState = Object.assign({}, this.state);
    copyState.images[index].likes = likes;
    this.setState(copyState);

    console.log(this.state.images);
    // this.setState({images})
  };
  renderImages() {
    return this.state.images.map((image, index) => (
      <WeddingImage
        name={image.name}
        image={image.image}
        addLike={() => this.addLike(index)}
        likes={image.likes}
        key={index}
      />
    ));
  }
  render() {
    const images_list = this.renderImages();
    return <div className="flex two">{images_list}</div>;
  } 
  
  /* <div class="container">
<div class="row">
    <div class="col-md-12">
    
        <div class="col-md-6"><a href="/images/card1.jpg" data-toggle="lightbox" data-gallery="img-gallery"><img src="/images/card1.jpg" class= "img-fluid img-thumbnail"alt="card1"/></a>
        <figcaption class="figure-capcard1tion bg-secondary text-center py-2 mb-3">card1</figcaption></div>
        
        <div class="col-md-6"><a href="/images/card2.jpg" data-toggle="lightbox" data-gallery="img-gallery"><img src="/images/card2.jpg" class="img-fluid img-thumbnail"alt="card2"/></a>
        <figcaption class="figure-caption bg-secondary  text-center py-2 mb-3">card2</figcaption></div>
        
        <div class="col-md-6"><a href="/images/card3.jpg" data-toggle="lightbox" data-gallery="img-gallery"><img src="/images/card3.jpg" class="img-fluid img-thumbnail"alt="card3"/></a>
        <figcaption class="figure-caption bg-secondary  text-center py-2 mb-3">card3</figcaption></div> */

  // old tutorial
  //     <section class="bg light pt-4">
  // <div class="col-md-5 colTop py-3 mb-4">
  //   <h1 class="text-white"> Weddings Invitation Cards</h1>
  //     <p class="text-white"> We keep adding new touches To keep it a special event (Jim Cooper)</p>
  //     </div>

  /*{*/
}

//     <div class="col-md-6"><a href="/images/card4.jpg"data-toggle="lightbox"><img src="/images/card4.jpg" class="img-fluid img-thumbnail"alt="card4"/></a>
//     <figcaption class="figure-caption bg-secondary  text-center py-2 mb-3">card4</figcaption></div>
// </div>
// </div>
// </div>

//        </section>
