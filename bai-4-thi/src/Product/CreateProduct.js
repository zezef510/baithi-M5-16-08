import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";

export default function CreateProduct() {
    const navigate = useNavigate()
    return (
        <>
            <h1>Create Student</h1>
            <Formik initialValues={{
                title : '',
                price : '',
                description : ''
            }}
                    onSubmit={(values)=>{
                        axios.post("http://localhost:3002/products",values).then(()=>{
                            alert("thanh cong")
                            navigate("/")
                        })
                    }}>

                <Form >
                    <tr> <label>Title : </label>
                        <Field name = {"title"}></Field>
                    </tr>

                   <tr>
                       <label>Price : </label>
                       <Field name = {"price"}></Field>
                   </tr>

                    <tr>
                        <label>Description : </label>
                        <Field name = {"description"}></Field>

                    </tr>
                    <button>Save</button>
                </Form>
            </Formik>
            <hr/>
        </>

    )
}