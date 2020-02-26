import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  goToStore(event) {
    event.preventDefault();
    console.log("Going To Store");
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore()}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
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
