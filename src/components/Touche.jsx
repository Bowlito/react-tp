const Touche = ({lettre, onSendLetter}) => {

  function envoyer(){
    onSendLetter(lettre)
  }
return (
    <>
    <button onClick={envoyer}>
        {lettre}
    </button>
    </>
)
}

export default Touche