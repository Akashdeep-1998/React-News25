import React, { Component } from "react";
import Footer from "./Footer";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  componentDidMount() {
    fetch(`https://inshorts.deta.dev/news?category=${this.props.category}`)
      .then((data) => data.json())
      .then((newsData) => {
        console.log(newsData);
        this.setState({
          articles: newsData.data,
          loading: newsData.success,
        });
      });
  }

  render() {
    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center my-3">
            {" "}
            News25 &#8211;{" "}
            {this.props.category === "all"
              ? "Latest 25 News"
              : "Latest 25 "+this.props.category[0].toUpperCase() +
                this.props.category.substring(1) +
                " News"}
          </h1>
          {!this.state.loading && <Spinner />}
          <div className="row">
            {this.state.articles.map((news) => {
              return (
                <div className="col-md-4" key={news.id}>
                  <NewsItem
                    title={news.title.slice(0, 58)}
                    description={news.content.slice(0, 100)}
                    imageUrl={news.imageUrl}
                    newsUrl={!news.readMoreUrl ? news.url : news.readMoreUrl}
                    author={news.author}
                    publishedDate={(news.date).slice(0,news.date.indexOf(","))}
                    publishedTime={news.time}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {this.state.loading && <Footer />}
      </div>
    );
  }
}

export default News;
