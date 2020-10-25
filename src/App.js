import React, {Component} from 'react';
import ImagesGallery from "./components/gallery";
import HeroDetails from "./components/heroesDetails";
import GalleryData from "./components/data";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      heroFullDetails: []
    }
  }
  handleClick = (uniq) => {
    let heroFullDetails = GalleryData.filter((hero) => {
      return hero.id === uniq;
    });
    this.setState(
      {
        heroFullDetails: heroFullDetails
      },
      () => {
        console.log(heroFullDetails);
        history.push("/heroesDetails");
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
              <HeroDetails heroFullDetails={this.state.heroFullDetails}/>
            </section>
          </Route>

          <main>
            <Route exact path="/">
              <ImagesGallery handleClick={this.handleClick}/>
            </Route>
          </main>
        </div>
      </Router>
    );
  }
  
}

export default App;
