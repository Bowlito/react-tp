import Touche from "./Touche";

export default function Clavier() {
  let lettres = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return (
    <>
      <h2>Clavier virtuel</h2>
      
      <div>
         <Touche lettres={lettres}></Touche>
      </div>
      
    </>
  );
}
