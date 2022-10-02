import React, { Component } from "react";

class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={!imageUrl ? "https://petpack.com.au/wp-content/uploads/2021/11/newsbites2-400x250.png" :  imageUrl}
            height='191px' width='286px'
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">
              Read More
            </a>
          </div>
        </div>

      </div>
    );
  }
}

export default NewsItem;
