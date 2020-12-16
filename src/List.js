import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { STATUS } from './status'
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(faCheckCircle, faTrashAlt)


class List extends React.Component{

    constructor(props){
        super(props);

    }

    render() {

        const { todos, handleCheck ,handleDelete } = this.props

        if (todos.length === 0) {  
            return(
                <div>
                    You dont have any todo 
                </div>
            )
        } else {
            return(
                <div> 
                    { // condition ? true : false.
                        todos.map( todo => {
                            const { id,  name , status } = todo
                            return (
                                <article key={id} id={id} className="todo-item">     
                                    <Container>
                                    <Row>
                                        <Col sm={{  span: 1 }} className="btn-check">
                                            <button onClick={()=>handleCheck(id)}>
                                                <FontAwesomeIcon icon={faCheckCircle} className={ status === STATUS.TODO ? 'todo' : 'complete' }/>
                                            </button>
                                        </Col>
    
                                        <Col sm={{ span : 6 }}>
                                            <h5>{name}</h5>
                                        </Col>
                                        
                                        <Col className="btn-delete"> 
                                            <button onClick={()=>handleDelete(id)}>
                                                <FontAwesomeIcon icon={faTrashAlt} className="icn-delete"/>
                                            </button>
                                        </Col>
                                    </Row>     
                                    </Container>                    
                                                                                   
                                </article>
                            )
                        })
                    }
                </div>
            )        
        }
    }
}

export default List;