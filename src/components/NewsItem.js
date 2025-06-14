import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          
              <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>
                {source}
              </span>

          <img
            src={
              imageUrl
                ? imageUrl
                : "https://dims.apnews.com/dims4/default/3c454db/2147483647/strip/true/crop/8053x4530+0+421/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F9c%2Fd6%2Fef718149ff86f5806bdde95ddbab%2F77fdec99bbed4cc3a4ff9cdfb66c7c26"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
             <p className="card-text"><small className="text-body-secondary">By {author?author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
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
