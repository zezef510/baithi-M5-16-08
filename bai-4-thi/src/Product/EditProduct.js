import {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function UpdateStudent() {
    const {id} = useParams(); // Lấy ID của sinh viên từ URL
    const navigate = useNavigate();
    const [product, setProduct] = useState([])
    console.log("product ", product)

    useEffect(() => {
        axios.get(`http://localhost:3002/products/${id}`)
            .then((response) => {
                setProduct(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <h1>Update Student</h1>
            <Formik
                initialValues={product}
                enableReinitialize={true}
                onSubmit={(values, {setSubmitting}) => {
                    axios.put(`http://localhost:3002/products/${id}`,values).then(()=>{
                        alert("thanh cong")
                        navigate("/")
                    })
                }}
            >
                <Form>
                    <Field type="text" name="title"/>
                    <Field type="text" name="price"/>
                    <Field type="text" name="description"/>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            <hr/>
            <hr/>
        </>
    );
}