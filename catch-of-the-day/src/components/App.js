import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  componentDidMount() {
    const { params } = this.props.match;
    const { databaseName } = `${params.storeId}`;
    this.ref = base
      .collection(`${databaseName}`)
      .get() /*`${params.storeId}/fishes` */
      .then((snapshot) => {
        // snapshot - pojmenuje data která získám funkcí z databáze ve formátu pole
        snapshot.forEach((doc) => {
          console.log(doc.id, "=>", doc.data().name);
        });
      })
      .catch((err) => {
        console.log("Error getting documents", err);
      });
  }

  addFish = (fish) => {
    // 1. Take a copy of existing state
    const fishes = { ...this.state.fishes };
    // 2. add our new fish to the fishes variable
    fishes[`fish ${Date.now()}`] = fish;
    // 3. set the new fishis object to state
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    // .get() žádá o získání dat, .then() říká, co se má stát až získá data, mezitím pokračují ale další funkce
    /*const fff = base
      .collection("fishes2")
      .get()
      .then((snapshot) => {
        // snapshot - pojmenuje data která získám funkcí z databáze ve formátu pole
        snapshot.forEach((doc) => {
          console.log(doc.id, "=>", doc.data().name);
        });
      })
      .catch((err) => {
        console.log("Error getting documents", err);
      });*/

    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {
    // 1. Take a copy of state
    const order = { ...this.state.order };
    //2. Either add to the order or update the number in our order
    order[key] = order[key] + 1 || 1;
    //3. Call setState to update our state object
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" age={500} />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
