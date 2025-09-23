//Solution Achref

export default function Calculette() {
    let valeur1 = 0
    let valeur2 = 0
    function affecterValeur(event) {
        if (event.target.name == "valeur1") {
            return valeur1 = Number(event.target.value)
        }
        return valeur2 = Number(event.target.value)
    }
    function calculer(op) {
        if (!isNaN(valeur1) && !isNaN(valeur2)) {
            console.log(eval(valeur1 + op + valeur2));
        } else {
            console.error("Valeurs non numériques non acceptées");
            
        }
    }
    return (
        <div>
            <h2>Calculette</h2>
            Valeur 1 : <input type="number" name="valeur1" onInput={affecterValeur} />
            Valeur 2 : <input type="number" name="valeur2" onInput={affecterValeur} />
            <button onClick={() => calculer('+')}>+</button>
            <button onClick={() => calculer('-')}>-</button>
            <button onClick={() => calculer('*')}>*</button>
            <button onClick={() => calculer('/')}>/</button>
        </div>
    )
}


// Ma solution

// export default function Calculette() {
//     let valeur1 = 0
//     let valeur2 = 0


//     function getFirstValue(event){
//       return valeur1 = Number(event.target.value)
        
//     }
//     function getSecondValue(event){
//       return valeur2 = Number(event.target.value)
//     }
//     return (
//         <div>
//             <h2>Calculette</h2>
//             Valeur 1 : <input type="number" name="valeur1" onInput={getFirstValue}/>
//             Valeur 2 : <input type="number" name="valeur2" onInput={getSecondValue}/>
//             <button onClick={() => alert(valeur1 + valeur2)}>+</button>
//             <button onClick={() => alert(valeur1 - valeur2)}>-</button>
//             <button onClick={() => alert(valeur1 * valeur2)}>*</button>
//             <button onClick={() => alert(valeur1 / valeur2)}>/</button>
            
//         </div>
//     )
// }

