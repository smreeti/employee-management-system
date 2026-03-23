import { useState, useMemo } from 'react';
export const GridMatrix = () => {

    const [size, setSize] = useState(3);
    // const [grid, setGrid] = useState([]);

    const grid = useMemo(() => {
        const results = [];

        for (let row = 0; row < size; row++) {
            let rowArr = [];

            for (let col = 0; col < size; col++) {
                rowArr.push(`${row}-${col}`);
            
            }
            results.push(rowArr);
        }

        return results;
    }, [size]);



    return (

        <>
            <label>
                Select Grid Size
                <input type="number"
                    value={size}
                    aria-label="Select Grid size"
                    onChange={(e) => setSize(Number(e.target.value))}>
                </input>
            </label>

            <div style={{
                display: "grid",
                 gridTemplateColumns: `repeat(${size}, 50px)`,
                gap: "5px",
                marginTop: "20px",
            }}>

                {grid.map((row, rowIndex) =>
                    row.map((cell) => (
                        <button
                            key={cell}
                            //   onClick={() => toggleCell(cell)}
                            // aria-pressed={!!activeCells[cell]}
                            style={{
                                width: "50px",
                                height: "50px",
                                // background: activeCells[cell] ? "green" : "lightgray",
                                border: "1px solid #333",
                                cursor: "pointer",
                            }}
                        >
                            {cell}
                        </button>
                    ))
                )}
            </div>
        </>
    )
};