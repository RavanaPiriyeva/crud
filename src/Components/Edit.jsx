import React ,{useState} from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Col, Form, FormGroup, Label, Input } from 'reactstrap'
import Add from './Add';


const Edit = (props) => {

    const [editName, seteditName] = useState('');
    const [editPrice, seteditPrice] = useState('');
    const [editage, seteditage] = useState(0)
    const editProduct = (item) => {
        seteditName(item.name);
        seteditPrice(item.surname)
        seteditage(item.age)
    }
    let { isop, tog } = props
    const handleInputs = () => {

    }
    const save = () => {
        // let product = products.find(q => q.id == editId);

        // product.name = editName;
        // product.unitPrice = editPrice;

        // setproducts([...products])
    }
    return (
        <div>

       
      

        </div>
    )
}

export default Edit
