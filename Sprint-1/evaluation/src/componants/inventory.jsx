import { useState } from "react";
import "./inventory.css"
export function Inventory(props) {
    const [books, setBook] = useState(props.books);
    const [pen, setPen] = useState(props.pens);
    const [notebook, setNotebook] = useState(props.notebooks);
    const [inkpen, setInkpen] = useState(props.inkpens);
    const addBook = () => {
        setBook(books + 1);
    }
    const remBook = () => {
        setBook(books - 1)
    }

    const addPen = () => {
        setPen(pen + 1);
    }
    const remPen = () => {
        setPen(pen - 1)
    }

    const addNotebook = () => {
        setNotebook(notebook + 1);
    }
    const remNotebook = () => {
        setNotebook(notebook - 1)
    }

    const addInkpen = () => {
        setInkpen(inkpen + 1);
    }
    const remInkpen = () => {
        setInkpen(inkpen - 1)
    }
    return (
        <div className="items">
            <>
                <span>Books :</span>
                <button onClick={() => addBook(1)} className="addBook">+</button>
                <button onClick={() => remBook(1)} className="remBook">-</button>
                <span className="totalBooks">{books}</span>
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