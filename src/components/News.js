import { useState, useEffect } from "react";
import Footer from "./Footer";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    props.setProgress(25);
    fetch(`https://inshorts.deta.dev/news?category=${props.category}`)
      .then((data) => {
        props.setProgress(50);
        return data.json();
      })
      .then((newsData) => {
        props.setProgress(75);
        setArticles(newsData.data);
        setLoading(newsData.success)
        props.setProgress(100);
      });
    document.title = `News25 - ${props.category === "all"
      ? "Get Your Daily News Free"
      : props.category[0].toUpperCase() +
      props.category.substring(1) +
      " News"
      }`;
  },[]);

  return (
    <div>
      <div className="container my-3">
        <h1 className="text-center" style={{marginTop:'90px', marginBottom:'18px'}}>
          {" "}
          News25 &#8211;{" "}
          {props.category === "all"
            ? "Latest 25 News"
            : "Latest 25 " +
            props.category[0].toUpperCase() +
            props.category.substring(1) +
            " News"}
        </h1>
        {!loading && <Spinner />}
        <div className="row">
          {articles.map((news) => {
            return (
              <div className="col-md-4" key={news.id}>
                <NewsItem
                  title={news.title.slice(0, 58)}
                  description={news.content.slice(0, 100)}
                  imageUrl={news.imageUrl}
                  newsUrl={!news.readMoreUrl ? news.url : news.readMoreUrl}
                  author={news.author}
                  publishedDate={news.date.slice(0, news.date.indexOf(","))}
                 publishedTime={news.time}
                />
              </div>
            );
          })}
        </div>
      </div>
      {loading && <Footer />}
    </div>
  );
}

export default News;
