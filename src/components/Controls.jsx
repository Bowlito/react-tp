export default function Controls ({decrementer, incrementer}) {


    return(
        <div>
            <h2>Controls</h2>
            <button onClick={decrementer}>-</button>
            <button onClick={incrementer}>+</button>
        </div>
    )
}