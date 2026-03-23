import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addItem, removeItem } from "../../store/TodoStore";
import { useNavigate } from 'react-router-dom';

export const ReduxExample = () => {
     const navigate = useNavigate();
    const items = useSelector((state) => state.items);
    const [item, setItem] = useState({
        id: '',
        title: '',
        description: ''
    })
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        });
    }

    const handleAdd = () => {
        dispatch(addItem(item));
        setItem({
            title: "",
            description: ""
        });
    }

    const handleRemove = (item) => {
        dispatch(removeItem(item?.id));
    }

    return (
        <>
           <button onClick={() => navigate("/references")}> ⬅ Back to References </button>
            <h1>Todo</h1>
            <input type="text" name="title" value={item.title} onChange={handleChange} placeholder="Title" />
            <input type="text" name="description" value={item.description} onChange={handleChange} placeholder="Description" />

            <button onClick={handleAdd}>Add Todo</button>

            <table>
                <thead>
                    <th>Title</th>
                    <th>Description</th>
                </thead>
                <tbody>
                    {
                        items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td> <button onClick={() => handleRemove (item)}> Remove</button></td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>

        </>

    )
}