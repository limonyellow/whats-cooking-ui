import React, { useState } from "react";
import "../styles/search.css";
import "../styles/search_loading_spinner.css";
import axios from "axios";
import SearchResult from "./search_result";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resultData, setResultData] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(searchText);
    let response = "";
    setIsLoading(true);
    try {
      response = await axios.get(
        "https://whats-cooking-api-server.herokuapp.com/search",
        {
          params: {
            q: searchText,
            sourceid: 1,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
    console.log("response:", response);
    console.log("response.data:", response.data);
    response.data.map((list) => console.log(list.title));
    setResultData(response.data);
  };
  return (
    <div className="search-main">
      <div className="search-menu"></div>
      <div className="search-title">What do you have?</div>
      <div className="search-box">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          ></input>
        </form>
      </div>
      {isLoading ? (
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div class="empty-ring"></div>
      )}
      <div className="search-results">
        {resultData.map((list) => (
          <SearchResult data={list} />
        ))}
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa
        felis, pellentesque nec fermentum fringilla, ornare vitae libero. Mauris
        vel urna ligula. Donec vitae iaculis ex. Pellentesque egestas iaculis
        rhoncus. Aliquam bibendum, justo et consequat fringilla, velit nibh
        dictum lorem, non ultricies arcu tellus eu ante. Suspendisse a porta
        nibh, vitae ultrices ligula. Integer vel nulla quis nulla interdum
        ornare ut sed arcu. Sed eget interdum dolor. Maecenas at lobortis massa.
        In a suscipit mauris, nec posuere magna. In sed molestie ex. Quisque
        sodales tortor eget tincidunt accumsan. Integer vehicula feugiat arcu.
        Morbi massa ante, efficitur at lacus ac, hendrerit viverra arcu. Etiam
        eu lorem congue, pretium quam a, euismod ante. Nam ultrices tincidunt
        pulvinar. Nullam et blandit urna, non lobortis lacus. Sed tempus, magna
        sit amet convallis sollicitudin, lacus dolor laoreet diam, interdum
        posuere nisi nisi vitae augue. Orci varius natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Nullam at urna fermentum
        elit lacinia dignissim. Sed at mi eu ligula fermentum ultricies. Quisque
        ut dapibus ligula. Pellentesque tincidunt leo eget ipsum bibendum
        vehicula. Vestibulum non ex ac enim ultricies molestie. Maecenas
        tristique mollis placerat. Etiam nec eros leo. Sed convallis purus
        massa, et suscipit dolor molestie vulputate. Morbi scelerisque libero
        vel nunc consectetur, a faucibus eros tempus. Curabitur aliquet sed
        metus id faucibus. Vivamus non dignissim lectus. Nam laoreet urna nulla,
        a maximus dolor tincidunt sit amet. Praesent felis turpis, accumsan id
        sollicitudin iaculis, cursus eu ligula. Sed quis semper orci, et
        bibendum ante. Nullam id risus ut massa posuere eleifend vel nec sem.
        Vivamus tincidunt, justo eget interdum tempus, risus ligula rutrum
        lorem, in pharetra risus lacus nec est. Donec id rutrum lectus. Nullam
        sagittis mattis convallis. Vivamus in interdum augue, eget gravida
        ipsum. Vivamus ullamcorper, libero eu ornare luctus, leo libero luctus
        ex, sed vehicula est felis id velit. dd dd asdlghsdjakgh asjdgljs
        asdgjklsdag dd dd asdlghsdjakgh asjdgljs asdgjklsdagdd dd asdlghsdjakgh
        asjdgljs asdgjklsdag dd dd asdlghsdjakgh asjdgljs asdgjklsdag dd dd
        asdlghsdjakgh asjdgljs asdgjklsdag dd dd asdlghsdjakgh asjdgljs
        asdgjklsdag dd dd asdlghsdjakgh asjdgljs asdgjklsdag dd dd asdlghsdjakgh
        asjdgljs asdgjklsdag dd dd asdlghsdjakgh asjdgljs asdgjklsdag dd dd
        asdlghsdjakgh asjdgljs asdgjklsdag dd dd asdlghsdjakgh asjdgljs
        asdgjklsdag dd dd asdlghsdjakgh asjdgljs asdgjklsdag dd dd asdlghsdjakgh
        asjdgljs asdgjklsdag dd dd asdlghsdjakgh asjdgljs asdgjklsdagdd dd
        asdlghsdjakgh asjdgljs asdgjklsdag dd dd asdlghsdjakgh asjdgljs
        asdgjklsdag dd dd asdlghsdjakgh asjdgljs asdgjklsdag dd dd asdlghsdjakgh
        asjdgljs asdgjklsdag */}
      </div>
    </div>
  );
}
export default Search;
