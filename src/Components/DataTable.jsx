import React, { useState } from 'react'
import { Container, Row, Table, Col, Form, FormGroup, Label, Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap'
import Edit from './Edit';


const DataTable = (props) => {
    let { users, removeuser, setuser } = props


    const [editName, seteditName] = useState('');
    const [editSurname, seteditSurname] = useState('');
    const [editage, seteditage] = useState(0)
    const [editId, seteditId] = useState(0)

    const editData = (item) => {
        toggle()
        seteditName(item.name);
        seteditSurname(item.surname)
        seteditage(item.age)
        seteditId(item.id)
        console.log(editId);

    }
    const save = () => {
        let user = users.find((q) => q.id === editId);
        user.name = editName;
        user.surname = editSurname;
        user.age = editage;
        setuser([...users])
        toggle()

    }
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
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
                                <th scope="row">{x.id}</th>
                                <td>{x.name}</td>
                                <td>{x.surname}</td>
                                <td>{x.age}</td>
                                <td> <Button color="info" onClick={() => editData(x, index)}>Edit</Button></td>
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
                            <Input id="examplePassword" name="password" placeholder="Surname" type="text" value={editSurname} onChange={(e) => seteditSurname(e.target.value)} />
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
