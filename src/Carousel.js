import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };
  // this has to be static
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];
    // media has small, med, large lets use large always
    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }
  // unary plus turns str to to a number
  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };
  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            // a11y is really hard so lets ignore this
            // for now
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
