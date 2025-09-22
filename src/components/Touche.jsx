import { useEffect, useRef } from "react";
import { useState } from "react";

export default function Touche({ lettres }) {
  let [letter, setLetter] = useState("");
  let [texte, setTexte] = useState("");

  function vider() {
    setTexte("");
  }

  function getLetter(elt) {
    setLetter(elt);
  }

  useEffect(() => {
    setTexte(texte + letter);
  }, [letter]);

  return (
    <>
      <h2>Touches</h2>

      {lettres.map((elt) => {
        return (
          <button key={elt} onClick={() => getLetter(elt)}>
            {elt}
          </button>
        );
      })}

      <textarea value={texte}></textarea>
      <button onClick={vider}>Vider</button>
    </>
  );
}
