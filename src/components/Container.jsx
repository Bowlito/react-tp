import First from "./First"
import Second from "./Second"

export default function Container() {

    return (
        <>
            <h2>Container</h2>
            <div className="d-flex justify-content-center p-2 m-2 gap-5">
                <div>
                    <First />
                </div>
                <div>
                    <Second />
                </div>
            </div>
        </>
    )
}