import { useState } from "react";
import "./inventory.css"
export function inventory(props) {
    const [book, setBook] = useState(props.book);
    const addBook = () => {
        setBook(book + 1);
    }
    const remBook = () => {
        setBook(book - 1)
    }
    return (
        <div className="items">
            <>
                <span>Books :</span>
                <button onClick={() => addBook(1)} className="addBook">+</button>
                <button onClick={() => remBook(1)} className="remBook">-</button>
                <span className="totalBooks">{book}</span>
                <br />
            </>

            <>
                <span>Pen :</span>
                <button onClick={() => addPen(1)} className="addPen">+</button>
                <button onClick={() => remPen(1)} className="remPen">-</button>
                <span className="totalPens">{pen}</span>
                <br />
            </>

            <>
                <span>Notebooks :</span>
                <button onClick={() => addNotebook(1)} className="addNotebook">+</button>
                <button onClick={() => remNotebook(1)} className="remNotebook">-</button>
                <span className="totalNotebooks">{notebook}</span>
                <br />
            </>

            <>
                <span>Inkpens :</span>
                <button onClick={() => addInkpen(1)} className="addInkpen">+</button>
                <button onClick={() => remInkpen(1)} className="remInkpen">-</button>
                <span className="totalInkpens">{inkpen}</span>
                <br />
            </>
        </div>
    )
}