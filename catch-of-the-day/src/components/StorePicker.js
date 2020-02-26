import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // } takto pomocí constructoru se bindovala funkce s this dříve


  goToStore = (event) => {
    event.preventDefault();
    console.log(this.goToStore);
  }
  // console.log() odkazuje na výpis toho co je v this, tentokrát v this.goToStore, arrow function naváže funkci přímo na this, bez ní by bylo nutné provést složitý binding, který se dělával dříve

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />

        {/*required vyhazuje hlášku "vyplňte prosím toto pole" když se pak zmáčkne button, kde je to asi provázané se submit*/}
        <button type="submit">Visit Store →</button>
      </form>
      /*Když chci něco komentovat a je nutné  to dělat uvnitř tagu, vně tagu to nebude fungovat
        <p>
          Takže, v téhle komponentě prostě importuji React, vytvořím class
          StorePicker, která mi vráti tenhle text a pak vyexportuji tuhle classu
          jako default, takže když ji pak zavolám, tak se mi kdekoliv vypíše
          tento text.
        </p>*/
    );
  }
}

export default StorePicker;
