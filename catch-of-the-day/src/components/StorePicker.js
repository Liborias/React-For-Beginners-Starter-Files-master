import React from "react";

class StorePicker extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form className="store-selector">
          <h2>Please enter a store</h2>
          <input type="text" required placeholder="Store Name" />
          {/*required vyhazuje hlášku "vyplňte prosím toto pole" když se pak zmáčkne button, kde je to asi provázané se submit*/}
          <button type="submit">VISIT STORE →</button>
        </form>
        {/*Když chci něco komentovat a je nutné  to dělat uvnitř tagu, vně tagu to nebude fungovat
        <p>
          Takže, v téhle komponentě prostě importuji React, vytvořím class
          StorePicker, která mi vráti tenhle text a pak vyexportuji tuhle classu
          jako default, takže když ji pak zavolám, tak se mi kdekoliv vypíše
          tento text.
        </p>*/}
      </React.Fragment>
    );
  }
}

export default StorePicker;
