import React, { Component } from "react";
import NewsItem from "./NewsItem";

class News extends Component {
  articles = [
    {
      source: {
        id: "fox-sports",
        name: "Fox Sports",
      },
      author: "FOX Sports",
      title: "12 longest active playoff droughts in NFL, NBA, MLB, NHL",
      description:
        "The Mariners no longer own the longest streak without a playoff appearance among the four major sports leagues.",
      url: "http://www.foxsports.com/stories/mlb/12-longest-active-playoff-droughts-in-nfl-nba-mlb-nhl",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2022/09/1408/814/09.30.22_Longest-Playoff-Droughts-in-Sports_16x9.jpg?ve=1&tl=1",
      publishedAt: "2022-10-01T13:30:23Z",
      content:
        "The Seattle Mariners have ended a streak that no team should ever want to hold.\r\nFollowing their win on Friday, the Mariners are going to the playoffs for the first time in 21 years. It ends the long… [+4506 chars]",
    },
    {
      source: {
        id: "bleacher-report",
        name: "Bleacher Report",
      },
      author: null,
      title: "George Pickens Blocking Drill ",
      description:
        "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      url: "https://bleacherreport.com/videos/249191-george-pickens-is-underrated",
      urlToImage: null,
      publishedAt: "2022-09-15T15:07:20.3702294Z",
      content: null,
    },
    {
      source: {
        id: "bleacher-report",
        name: "Bleacher Report",
      },
      author: null,
      title: " New Von Miller Show ",
      description:
        "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      url: "https://bleacherreport.com/videos/249175-new-von-miller-show",
      urlToImage: null,
      publishedAt: "2022-09-14T20:07:17.1383973Z",
      content:
        "New Von Miller Show \r\nVon and guest Calais Campbell are talking everything from Lamar's contract to the Fournette-Parsons beef.",
    },
    {
      source: {
        id: "the-washington-times",
        name: "The Washington Times",
      },
      author: "The Washington Times https://www.washingtontimes.com",
      title: "Latest Quizzes",
      description:
        "Take a break from the hard news of the day and enjoy a quiz on entertainment, sports, history and politics only from The Washington Times.",
      url: "https://www.washingtontimes.com/quiz/",
      urlToImage: null,
      publishedAt: "2022-08-30T16:37:43.8583104Z",
      content:
        "Featured Quizzes\r\nTake the challenge to learn about the life and career highlights of famed nonagenarian actress and comedian Betty White.\r\n Shares \r\nRead our synopsis and correctly identify a litera… [+32510 chars]",
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: null,
      title: "Daily Briefing",
      description:
        "The day's top stories, from sports to movies to politics to world events.",
      url: "https://profile.usatoday.com/newsletters/daily-briefing/",
      urlToImage:
        "https://profile.usatoday.com/newsletters/resources/usat/property/usatoday/newsletter-thumbs/8872UT-E-NLETTER02@2x.jpg",
      publishedAt: "2021-08-15T15:35:07+00:00",
      content:
        "The day's top stories, from sports to movies to politics to world events.",
    },
    {
      source: {
        id: "nrk",
        name: "NRK",
      },
      author: "NRK",
      title: "De siste sportsnyhetene fra NRK",
      description: "Her får du de siste sportsnyhetene fra NRK.",
      url: "https://www.nrk.no/sport/sportsnyheter-1.14660227#1.16123910.1.16123910",
      urlToImage:
        "https://gfx.nrk.no/7kT5zGoE2E-GnUKLojH1PQ0I1Nze4Ypu8lxM-oBjubQw.jpg",
      publishedAt: "2019-08-14T09:09:42Z",
      content:
        "1. oktober2022kl.16:18Charles Leclerc var raskest av alle under kvalifiseringen til Formel 1-løpet i Singapore. Max Verstappen jakter ny VM-tittel, men ble bare nummer åtte.\r\nEtter at store navn som … [+823 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h1>NewsBites - Top Headlines</h1>
        <div className="row">

        {this.state.articles.filter((filteredNews)=>filteredNews.urlToImage!==null).map((news)=>
        {
          return <div className="col-md-4" key={news.url}>
          <NewsItem
            title={news.title.slice(0,45)}
            description={news.description.slice(0,80)}
            imageUrl={news.urlToImage}
            newsUrl={news.url}
          />
        </div>
        })}
        </div>
      </div>
    );
  }
}

export default News;
