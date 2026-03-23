import { useState, useMemo } from 'react';
export const ListExample = () => {

    const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);

    const [size, setSize] = useState(3);

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
            <h3>Simple List Example</h3>
            <ul style={{ marginTop: "20px" }}>
                {items.map((item, index) => (
                    <li key={index} style={{ marginBottom: "8px" }}>
                        {item}{" "}

                    </li>
                ))}
            </ul>

            <h3>Grid Matrix</h3>
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
                            style={{
                                width: "60px",
                                height: "60px",
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