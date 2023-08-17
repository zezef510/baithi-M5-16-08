import './App.css';
import { Route, Routes} from "react-router-dom";
import ListProduct from "./Product/ListProduct";
import CreateProduct from "./Product/CreateProduct";
import UpdateProduct from "./Product/EditProduct";

function App() {
  return (
<>
 <Routes>
         <Route path="/" element={<ListProduct/>}> </Route>
         <Route path="/create-products" element={<CreateProduct/>}> </Route>
         <Route path="/edit-products/:id" element={<UpdateProduct/>}> </Route>
 </Routes>

</>
  );
}

export default App;
