import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../node_modules/picnic/picnic.min.css";




const WeddingImage = ({ name, image, likes, addLike, imageStyle }) => {
  const location = { 
    pathname: "/weddings/" + image,
      state:{
        imageStyle:imageStyle
      } 
    };
  return (
    <div>
      <article class="card">
        <img alt={'background for card'} src={"/images/" + image + ".jpg"} />
        <footer>
          <h3>{name}</h3>
          {/* <Link to={"/weddings/" + image} params={{ name: name}}>choose this card</Link> */}
          
          <Link to={location}>choose this card</Link>          
          
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
        { imageStyle:'bleuet-love',name: "Bleuet Love", image: "bleuet love", likes: 0 },
        { imageStyle:'golden-circles',name: "Golden Circles", image: "golden circles", likes: 0 },
        { imageStyle:'golden-love',name: "Golden Love", image: "golden love", likes: 0 },
        { imageStyle:'royal-crown',name: "Royal Crown", image: "royal crown", likes: 0 },
        { imageStyle:'bleuet-love',name: "Bleuet Love", image: "bleuet love", likes: 0 },
        { imageStyle:'golden-circles',name: "Golden Circles", image: "golden circles", likes: 0 },
        { imageStyle:'golden-love',name: "Golden Love", image: "golden love", likes: 0 },
        { imageStyle:'royal-crown',name: "Royal Crown", image: "royal crown", likes: 0 },
        

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
        imageStyle={image.imageStyle}
      />
    ));
  }
  render() {
    const images_list = this.renderImages();
    return <div className="flex two">{images_list}</div>;
  }

 }

