// Solution Achref

import { useState } from "react"
import personneSchema from "../validators/personne.validator.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function PersonneAdd({onSendData}) {
    // handleSubmit : gérer la soumission du formulaire (en évitant le re-render)
    // register : permet de mapper les inputs et les clés du schéma de validation
    const {handleSubmit, register, formState: { errors, isValid, isSubmitSuccessful }, reset} = useForm({
        resolver: yupResolver(personneSchema),
        mode: "onChange"
    })
    
    
    function ajouterPersonne(formData) {
        onSendData(formData);
        reset();

    }
    return (
        <div>
            <h3>Ajouter une nouvelle personne</h3>
            {isSubmitSuccessful && <div class="alert alert-primary" role="alert">
                Personne ajoutée avec succès
            </div>}
            <form onSubmit={handleSubmit(ajouterPersonne)}>
                <div>
                    <label htmlFor="nom">Nom</label>
                    <input type="text" id="nom" className="form-control" placeholder="Nom" {...register('nom')} />
                        {errors.nom && <span>{errors.nom.message}</span>}
                </div>
                <div>
                    <label htmlFor="prenom">Prénom</label>
                    <input type="text" id="prenom" className="form-control" placeholder="prenom" {...register('prenom')} />
                    {errors.prenom && <span>{errors.prenom.message}</span>}
                </div>
                <div>
                    <label htmlFor="age">Âge</label>
                    <input type="number" id="age" className="form-control" placeholder="age" {...register('age')} />
                    {errors.age && <span>{errors.age.message}</span>}
                </div>
                <div>
                    <button disabled={!isValid}>
                        Ajouter
                    </button>
                </div>
            </form>
        </div>
    )
}


// Ma Solution

// import { useRef } from "react"
// import { useNavigate } from "react-router-dom"
// import personneSchema from "../validators/personne.validator.js"

// export default function PersonneAdd({onAddUser}) {

//     let nom = useRef()
//     let prenom = useRef()
//     let age = useRef()
    

//     function ajouterPersonne(event, user){
//         event.preventDefault();
//         user = {
//             nom: nom.current.value,
//             prenom: prenom.current.value,
//             age: age.current.value
//         }
//         onAddUser(user)
        
//     }
    
//     return (
//         <div>
//             <h3>Ajouter une personne</h3>
           
//             <form onSubmit={ajouterPersonne}>
//                 <div className="input-group mb-3">
                    
//                     <input type="text" className="form-control" placeholder="Nom" aria-label="Nom" aria-describedby="basic-addon1" ref={nom}/>
//                 </div>
//                 <div className="input-group mb-3">
                    
//                     <input type="text" className="form-control" placeholder="Prenom" aria-label="Prenom" aria-describedby="basic-addon1" ref={prenom}/>
//                 </div>
//                 <div className="input-group mb-3">
                    
//                     <input type="text" className="form-control" placeholder="Age" aria-label="Age" aria-describedby="basic-addon1" ref={age}/>
//                 </div>
//                 <button>Ajouter la personne</button>
//             </form>
            
//         </div>
//     )
// }