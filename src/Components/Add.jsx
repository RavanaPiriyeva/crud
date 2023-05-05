import React, { useState } from 'react'
import { Container, Row, Table, Col, Form, FormGroup, Label, Button, Input ,Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap'
import DataTable from './DataTable'

const Add = () => {
    const [alluser, setalluser] = useState([])
    let userObj = {
        name: undefined,
        surname: undefined,
        age: undefined
    }
    const [user, setuser] = useState(userObj);

    const handleInputs = (value, type) => {
        setuser((oldData) => ({ ...oldData, [type]: value }))
    }
    ///add product obj to products state
    const addUser = () => {
        setalluser([...alluser, user])
    }

    const remove = (i) => {
        let a = alluser.filter((x, index) => index !== i)
        setalluser(a)
    }





    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail" hidden >Email </Label>
                            <Input id="exampleEmail" name="email" placeholder="Name" type="text" onChange={(e) => handleInputs(e.target.value.trim(), 'name')} />
                        </FormGroup>
                        {' '}
                        <FormGroup>
                            <Label for="examplePassword" hidden >Password </Label>
                            <Input id="examplePassword" name="password" placeholder="Surname" type="text" onChange={(e) => handleInputs(e.target.value.trim(), 'surname')} />
                        </FormGroup>
                        {' '}

                        <FormGroup>
                            <Label for="examplePassword" hidden>Password</Label>
                            <Input id="examplePassword" name="password" placeholder="Age" type="number" onChange={(e) => handleInputs(e.target.value.trim(), 'age')} />
                        </FormGroup>
                        {' '}
                        <Button onClick={addUser}> Submit </Button>
                    </Form>
                </Col>
                <Col xs={12}>
                    <DataTable users={alluser} removeuser={remove} />
                </Col>
            </Row>
           
        </Container>


    )
}

export default Add
