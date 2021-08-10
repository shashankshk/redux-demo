import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import { useDispatch, useSelector } from 'react-redux';
import {selectFileAction, removeFileAction} from '../state/actions/files';
import Button from 'react-bootstrap/Button';


const FileList = () => {

    const {
        files
    } = useSelector(state => ({
        files: state.files
    }));
    
    const dispatch = useDispatch();

    const onImageClick = (file) => {
        console.log(file, "image clickeddddddd")
        dispatch(selectFileAction(file))
    }

    const removeFileHandler = (index) => {
        dispatch(removeFileAction(index))
    }

    console.log(" i am re rendered")
    return (
        <Row>
            {files.map((file, index) => {
                return (
                    <Col xs={4} md={4}>
                        <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            src={file.url}
                            onClick={() => onImageClick(file)}
                        />
                        <Figure.Caption>
                            {file.title}
                            
                        </Figure.Caption>
                        <Button variant="primary" onClick={() => removeFileHandler(index)}>Remove File</Button>
                        </Figure>
                    </Col>
                )
            })}
        </Row>

    )
}

export default FileList;


// const a = {
//     b: 3
// }

// const c = {
//     b: 3
// }

// a===c // false
// a==c // false
