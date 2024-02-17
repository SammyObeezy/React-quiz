import "./App.css";
import Accordian from "./components";
import TabTest from "./components/custom tabs/tab-test";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more";
import QRCodeGenerator from "./components/qr-code";

import RandomColor from "./components/randomcolor";
import ScrollIndicator from "./components/scroll-indicator";
import StarRating from "./components/star-rating";
import Treeview from "./components/tree-view";
import menus from "./components/tree-view/data";

//const url = "https://jsonplaceholder.typicode.com/photos?_limit=10";
function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian />*/}
      {/*RandomColor Component*/}
      {/* <RandomColor />*/}
      {/*star-rating*/}
      {/*<StarRating noOfStars={10} />*/}

      {/* Image slider component*/}
      {/* <div className="App">
        <ImageSlider url={url} page={"1"} limit={"10"} />
  </div>*/}
      {/* Load more products component*/}
      {/* <LoadMoreData />*/}

      {/*Tree view component/ menu UI component / recursive navigation menu */}
      {/*<Treeview menus={menus} />*/}
      {/* QR code generator */}
      {/* <QRCodeGenerator />*/}
      {/* light and dark theme */}
      {/*<LightDarkMode />*/}

      {/* Scroll indicator component*/}
      {/*<ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />*/}
      {/*custom tabs component*/}
      <TabTest />
    </div>
  );
}

export default App;
