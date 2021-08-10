import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {addFileAction} from '../state/actions/files';
import FileList from './FileList';
import FileDetail from './FileDetail';

const Home = () => {
    const [fileDetails, setfileDetails] = useState({
        name: '',
        url: '',
        title:''
    });
    const dispatch = useDispatch()
    
    const fileHandler = (event) => {
        const file = event.target.files[0];
        setfileDetails({
            ...fileDetails,
            name: file.name,
            url:URL.createObjectURL(file)
        })
        console.log(URL.createObjectURL(file), "file handler called")
    }

    const titleHandler = (event) => {
        setfileDetails({
            ...fileDetails,
            title: event.target.value
        })
        console.log(event.target.value,"title handler called")
    }

    const handleSubmit = () => {
        console.log("this is called")
        dispatch(addFileAction(fileDetails))
        setfileDetails({
            name: '',
            url: '',
            title:''
        })
    }
    return (
        <>
        <Jumbotron>
            <h1>Redux is easy!</h1>
            <p>
                This is a app where we will import files (basically images) and store their info in redux store.
                We will provide functionality to add, remove and edit images info.
            </p>
            <Form>
                <Form.Label>Import a file</Form.Label>
                <Form.File 
                    type="file"
                    id="custom-file"
                    label={fileDetails.name || "Custom file input"}
                    custom
                    onChange={fileHandler}
                />
                <Form.Label>Add title for image</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="Enter title"
                    value={fileDetails.title}
                    onChange={titleHandler}
                />
                <Button 
                    variant="primary" 
                    onClick={(e) => handleSubmit()}
                >
                    Add file
                </Button>
            </Form>
            <FileDetail/>
            <FileList/>
        </Jumbotron>
        
        </>
    )
};

export default Home;
