import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function Blog () {
  return (
    <>
    <Container>
      <Row>
        <Col md={6} className="mb-3 mb-md-5">
            <Card style={{height: "250px", overflow: "auto"}}>
            <Card.Header className="bg-primary"><h3>What is context API?</h3></Card.Header>
            <Card.Body>
            <Card.Text>
                    Context API: In React, the Context API is a feature that permits to share data between multiple elements at every stage of the component tree. Usually, Context API is used to manage shared data or global state without prop drilling. There are three principal parts of Context API: Context,  Provider, and Consumer
                    Context:  It is created by using ‘React.createContexct()’ function. Context restores an object that possesses a provider and a Consumer
                    
                    Provider: Provider is a feature that allows a value prop which is used to render the actual data within shared data.
                    Consumer: Consumer is an element in React JS which is used to access the data from the context that provides theReact.Contexct.Consumer component to consume the data and pass elements with the shared data. 
            </Card.Text>
            </Card.Body>
        </Card>
      </Col>
        <Col md={6} className="mb-3 mb-md-5">
            <Card  style={{height: "250px", overflow: "auto"}}>
            <Card.Header className="bg-primary"><h3>What is custom hook?</h3></Card.Header>
            <Card.Body>
            <Card.Text>
            A Custom hook is a reusable function in React Java Script. If you want to share component logic across multiple elements without using HOCs or deliver props, you can use that logic to a custom hook. Custom Hooks are used to manage various functionalities such as searching data from APIs, regulating local storage etc. It begins with the word use, for example: usefetch, usecounter, useform and so on.

            </Card.Text>
            </Card.Body>
        </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3 mb-md-5">
            <Card  style={{height: "250px", overflow: "auto"}}>
            <Card.Header className="bg-primary"><h3>What is the purpose of useRef?</h3></Card.Header>
            <Card.Body>
            <Card.Text className=''>
                Useref is a built-in hook as well in React Java Script. It is used to create and regulate a mutable ref to a DOM component in a functional element.
                
               Basic uses for Useref:
               Maintaining and allowing DOM components directly. For example:  scrolling to a particular position. Storing values of the components that require to persist between renders such as  reserving expensive calculations.
                    
                
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col md={6} className="mb-3 mb-md-5">
            <Card  style={{height: "250px", overflow: "auto"}}>
            <Card.Header className="bg-primary"><h3>What is the purpose of useMemo</h3></Card.Header>
            <Card.Body>
            <Card.Text>
            Usememo is a built-in hook in React JS. It allows to store the result of a calculation, and restore the cached result.  Usememo is important in sceneries to avoid unnecessary recalculations of time-consuming and expesive operations, such as complex computations or searching data from an API. 

            </Card.Text>
            </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Blog;