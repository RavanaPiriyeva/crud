import React, { useState } from 'react'
import { Container, Row, Table, Col, Form, FormGroup, Label, Button, Input ,Modal, ModalHeader, ModalBody, ModalFooter,} from 'reactstrap'
import Edit from './Edit';


const DataTable = (props) => {
    let { users, removeuser } = props

    
    const [editName, seteditName] = useState('');
    const [editPrice, seteditPrice] = useState('');
    const [editage, seteditage] = useState(0)
    const editProduct = (item) => {
        seteditName(item.name);
        seteditPrice(item.surname)
        seteditage(item.age)
    }

    
    // const handleInputs = () => {

    // }
    const save = () => {
        // let product = products.find(q => q.id == editId);

        // product.name = editName;
        // product.unitPrice = editPrice;

        // setproducts([...products])
    }
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    //const [newuser, setnewuser] = useState(users)

    return (
        <div>
            <Table dark>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Age</th>
                        <th>Edit</th>
                        <th>Delet</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((x, index) => {
                            return <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{x.name}</td>
                                <td>{x.surname}</td>
                                <td>{x.age}</td>
                                <td> <Button color="info" onClick={toggle}>Edit</Button></td>
                                <td> <Button color="danger" onClick={() => removeuser(index)}>Delete</Button></td>
                            </tr>

                        })
                    }
                </tbody>
            </Table>
          
            <Modal isOpen={modal} toggle={toggle} >
            <Col xs={12}>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail" hidden >Email </Label>
                        <Input id="exampleEmail" name="email" placeholder="Name" type="text" value={editName} onChange={(e) => seteditName(e.target.value)} />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Label for="examplePassword" hidden >Password </Label>
                        <Input id="examplePassword" name="password" placeholder="Surname" type="text" value={editPrice} onChange={(e) => seteditPrice(e.target.value)} />
                    </FormGroup>
                    {' '}

                    <FormGroup>
                        <Label for="examplePassword" hidden>Password</Label>
                        <Input id="examplePassword" name="password" placeholder="Age" type="number" value={editage} onChange={(e) => seteditage(e.target.value)} />
                    </FormGroup>
                    {' '}
                    <Button onClick={save}> Save </Button>
                </Form>
            </Col>
        </Modal>
        </div>
    )
}

export default DataTable
