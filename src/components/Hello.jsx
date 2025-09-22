// composant fonctionnel

import classNames from 'classnames'
import './Hello.css'
import { useRef } from 'react'

function Hello({ nom, children, sendData }) {

    // Les fonctions peuvent être déclarées en dehors ou dans le composant selon la situation. Recommandé en dehors quand c'est possible.
    function afficherBonjour() {
        return `Bonjour ${firstname}`
    }
    const numbers = [2, 3, 8, 5, 1]
    const objet = {
        nom: 'Wick',
        prenom: 'John',
    }
    const firstname = "MacGyver"
    const link = "http://www.francefootball.fr"
    const linkTarget = {
        href: "http://www.francefootball.fr",
        target: '_blank'
    }
    const style = {
        color: 'white',
        backgroundColor: 'tomato'
    }
    const couleur = 'white'
    const bgCouleur = 'dodgerblue'

    const classes = classNames(
        'gras',
        { rouge: firstname.length % 2 == 0 },
        { bleu: firstname.length % 2 != 0 }
    )


    const personnes = [
        { id: 100, nom: 'Wick', prenom: 'John' },
        { id: 101, nom: 'Abruzzi', prenom: 'John' },
        { id: 102, nom: 'Marley', prenom: 'Bob' },
        { id: 103, nom: 'Segal', prenom: 'Steven' }
    ]

    let pays = useRef()

    return (
        <div>
            <h2>Props</h2>
            <p>Hello {nom} from {children} </p>
            <h2>Interpolation</h2>
            <h3>Tableau</h3>
            <ul>
                <li>{numbers[0]}</li>
                <li>{numbers['1']}</li>
                <li>{numbers["2"]}</li>
            </ul>
            <h3>Objet</h3>
            <ul>
                <li>{objet.nom}</li>
                <li>{objet['prenom']}</li>
            </ul>
            <h3>Expression</h3>
            <p> {objet.nom.length} </p>
            <p> {Math.sqrt(25)} </p>
            <p> {numbers[0] % 2 == 0 ? 'pair' : 'impair'} </p>
            <h3>Fonction</h3>
            <p>{afficherBonjour()}</p>

            <h2>Interpoler un attriut</h2>
            <p>
                Pour les infos sportives, <a href={link}>consulter</a>
            </p>
            <p>
                Pour les infos, <a{...linkTarget}>consulter</a>
            </p>

            <h3>Style</h3>
            <p style={style}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi atque, laboriosam et aperiam accusamus blanditiis, nemo tempore maiores veritatis ratione quia voluptas eveniet, unde eos laborum voluptates dolorem corporis amet.
            </p>

            <h3>Mon Style</h3>
            <p style={{ color: couleur, backgroundColor: bgCouleur }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo enim cum quam! Sequi vel minima sed. Dicta reprehenderit, ullam nobis, placeat rem illo doloremque pariatur dolores veniam repellat quia ducimus.
            </p>

            <h3>Classe</h3>

            <p className='rouge'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab delectus id voluptatem minus ipsum omnis distinctio magnam, ea impedit perferendis doloremque error excepturi architecto fuga dignissimos aliquid voluptate. Amet, tenetur.</p>
            <p className={firstname.length == 8 ? 'bleu' : 'rouge'}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab delectus id voluptatem minus ipsum omnis distinctio magnam, ea impedit perferendis doloremque error excepturi architecto fuga dignissimos aliquid voluptate. Amet, tenetur.</p>
            <p className={classes}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab delectus id voluptatem minus ipsum omnis distinctio magnam, ea impedit perferendis doloremque error excepturi architecto fuga dignissimos aliquid voluptate. Amet, tenetur.</p>

            <h2>Boucles</h2>
            <ul>
                {
                    numbers.map((elt, ind) =>
                        <li key={ind}>{elt}</li>
                    )
                }
            </ul>

            <ul>
                {
                    personnes.map((elt, ind) =>

                        <li key={ind} className={ind % 2 == 0 ? 'rouge' : 'bleu'}> 
                        {elt['nom']} {elt['prenom']}</li>
                        
                    )
                }
            </ul>
            
            <h2>Evènements</h2>

            <button onClick={() => direBonjour('Travolta')}>
                Afficher Bonjour
            </button>
            <input type="text" name="texte" id="texte" onInput={afficherTexte}/>
            <h2>De l'enfant au parent</h2>
            <div>
                <input type="text" placeholder='Pays' ref={pays} />
                <button onClick={envoyer}>
                    Envoyer au parent
                </button>
            </div>
        </div>
    )

    function envoyer(){
        sendData(pays.current.value)
    }
    function direBonjour(param = 'Doe') {
        alert(`Bonjour ${param}`)
    }
    function afficherTexte(event){
        console.log(event.target.value);
        
    }

}


export default Hello 