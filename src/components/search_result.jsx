import React from "react";
import "../styles/search_result.css";

function SearchResult(props) {
  return (
    <div className="search-result">
      <div className="search-result-top">
        <div className="score">Score: {props.data.score}</div>
        <div className="items-num">Items found: {props.data.num_of_items}</div>
        <div className="appearances">
          Hits: {props.data.total_items_appearances}
        </div>
      </div>
      <div className="search-result-main">
        <div>
          <img className="search-result-img" src={props.data.image_url} />
        </div>
        <div>
          <a
            className="search-result-link"
            href={props.data.url}
            target="_blank"
          >
            <div className="search-result-title">{props.data.title}</div>
            {/* <div className="search-result-link">{props.data.url}</div> */}
          </a>
        </div>
      </div>
    </div>
  );
}
export default SearchResult;
