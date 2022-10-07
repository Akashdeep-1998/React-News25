import { Component } from "react";
class NewsItem extends Component {
  render() {
    const {
      title,
      description,
      imageUrl,
      newsUrl,
      author,
      publishedDate,
      publishedTime,
    } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={imageUrl}
            height="240px"
            width="120px"
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{title} ...</h5>
            <p className="card-text">{description} ...</p>
            <p className="card-text">
              <small className="text-muted">
                By &#8211; {author} on {publishedDate}, {publishedTime}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
