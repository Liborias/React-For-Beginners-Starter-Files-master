import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // } takto pomocí constructoru se bindovala funkce s this dříve

  goToStore = event => {
    // 1. zastavíme opakovaní a stopneme si data
    event.preventDefault();
    // 2. uložíme si aktuální data do storeName
    const storeName = this.myInput.current.value; // this.myInput.value.value nefunguje, Wesbosovi jo, Proč? Protože to tak bylo ve staré verzi Reactu. Nová nahradila používá místo value current, asi aby se odlišilo js value od raktího
    // 3. vnutníme datům v propsu nové údaje, takže se změní název adresy a tím se zase spustí router.js a přesměruje nás ze StorePicker.js na App.js (je to možné proto, že StorePicker je child Routeru)
    this.props.history.push(`/store/${storeName}`); //zpětné uvozovky se dělají pravý Alt + ý
  };
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
