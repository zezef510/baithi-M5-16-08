import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function ListProduct() {
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/edit-products/${id}`);
    };

    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3002/products").then((res) => {
            setList(res.data);
        });
    }, []);

    return (
        <>
            <h1>List Product</h1>
            <Link to={"/create-products"}>Create Product</Link>
            <table style={{margin : 20}}>
                <thead>
                <tr style={{margin : 20 }}>
                    <th style={{paddingLeft : 50}}>Title</th>
                    <th style={{paddingLeft : 50}}>Price</th>
                    <th style={{paddingLeft : 50}}>Description</th>
                    <th style={{paddingLeft : 50}}>Actions</th>
                </tr>
                </thead>
                <tbody >
                {list.map((item, key) => (
                    <tr key={key} style={{margin : 20}}>
                        <td style={{paddingLeft : 50}}>{item.title}</td>
                        <td style={{paddingLeft : 50}}>{item.price}</td>
                        <td style={{paddingLeft : 50, textAlign: "center"}}>{item.description}</td>
                        <td style={{paddingLeft : 50}}>
                            <button
                                type="submit"
                                onClick={() => {
                                    axios
                                        .delete(`http://localhost:3002/products/${item.id}`)
                                        .then(() => {
                                            alert("Xóa thành công");
                                            axios.get("http://localhost:3002/products").then((res) => {
                                                setList(res.data);
                                            });
                                        });
                                }}
                            >
                                Delete
                            </button>
                            <button onClick={() => handleEdit(item.id)}>Edit</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <hr />
        </>
    );
}