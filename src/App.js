import React, {Component} from 'react';
import ImagesGallery from "./components/gallery";
import HeroDetails from "./components/heroesDetails";
import GalleryData from "./components/data";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class App extends Component {

  handleClick = (e) => {
    // if(GalleryData.includes())
    // history.push("/heroesDetails");
    let imgId = e.target.id;
    GalleryData.filter((heroes) => {
      return heroes.id === imgId ? history.push("/heroesDetails") : null;
    })
  }

 
  render() {
    return (
      <Router history={history}>
        <div className="App container">
          <header>
            <h1> Happy Independence Day, Nigeria</h1>
            <p>The Labour of our Heroes past, shall never be in vain...</p>
          </header>

          <Route path="/heroesDetails">
            <section>
              <HeroDetails />
            </section>
          </Route>

          <main>
            <Route path="/">
              <ImagesGallery handleClick={this.handleClick}/>
            </Route>
          </main>
        </div>
      </Router>
    );
  }
  
}

export default App;
