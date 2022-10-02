import React, { Component } from "react";
import NewsItem from "./NewsItem";

class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  componentDidMount() {
    fetch("https://inshorts.deta.dev/news?category=sports")
      .then((data) => data.json())
      .then((newsData) => {
        console.log(newsData);
        this.setState({
          articles: newsData.data,
        });
      });
  }

  render() {
    return (
      <div className="container my-3">
        <h1>NewsBites - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((news) => {
            return (
              <div className="col-md-4" key={news.id}>
                <NewsItem
                  title={news.title.slice(0, 80)}
                  description={news.content.slice(0, 100)}
                  imageUrl={news.imageUrl}
                  newsUrl={news.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
