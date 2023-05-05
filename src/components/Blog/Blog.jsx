import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const options = {
  orientation: '',
  unit: 'in',
  format: [9, 20]
};

function Blog() {
  return (
    <div className="container">
      <Pdf targetRef={ref} filename="js-blo.pdf" options={options}>
        {({ toPdf }) => (
          <div className="d-flex justify-content-end">
            {" "}
            <button className="btn btn-outline-primary" onClick={toPdf}>
              Generate Pdf
            </button>
          </div>
        )}
      </Pdf>
        <Container ref={ref} className="w-75">
          <Row>
            <Col md={12} className="mb-3 mb-md-5">
              <Card>
                <Card.Header className="bg-primary">
                  <h3>What is a custom hook</h3>
                </Card.Header>
                <Card.Body>
                  <div>
                    <p>
                      Custom hooks are a feature in React that allow you to
                      extract reusable logic from components into a standalone
                      function. Custom hooks can be used to manage state, handle
                      side effects, and encapsulate complex functionality in a
                      reusable way.
                    </p>{" "}
                    <p>
                      To create a custom hook, you define a function that uses
                      other React hooks to manage state, handle side effects, or
                      perform other tasks. You can then use this function in
                      your components, just like any other React hook.{" "}
                    </p>
                    <p>
                      {" "}
                      Custom hooks have several advantages over traditional HOCs
                      (Higher-Order Components) and render props. They are
                      simpler to use, easier to test, and more flexible.{" "}
                    </p>
                    <p>
                      Custom hooks can be used in any component, regardless of
                      its hierarchy, and they can be composed with other hooks
                      to create more complex functionality. Custom hooks follow
                      the naming convention of starting with the prefix "use" to
                      indicate that they are hooks.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12} className="mb-3 mb-md-5">
              <Card>
                <Card.Header className="bg-primary">
                  <h3>Nodejs vs Express js</h3>
                </Card.Header>
                <Card.Body>
                  <h5>Node Js</h5>
                  <div className="">
                    <p>
                      Node.js is a JavaScript runtime that is built on the V8
                      JavaScript engine. It provides a server-side environment
                      for executing JavaScript code outside of the browser.
                      Node.js is designed to be scalable, efficient, and easy to
                      use.
                    </p>
                    <p>
                      It comes with a set of built-in modules that allow
                      developers to interact with the file system, network, and
                      other system resources. Node.js has a low-level API that
                      provides more control and flexibility to developers, but
                      also requires more code to build a web application from
                      scratch.
                    </p>
                  </div>
                  <h5>Express Js</h5>
                  <div>
                    <p>
                      Express.js is a lightweight web application framework
                      built on top of Node.js. It provides a high-level API that
                      simplifies the process of building web applications.
                      Express.js offers features such as middleware, routing,
                      and templating engines that make it easier to handle HTTP
                      requests and responses.
                    </p>
                    <p>
                      Express.js is opinionated, which means it provides a set
                      of conventions and best practices that make it easier to
                      build web applications quickly and efficiently. Express.js
                      is known for its speed, flexibility, and ease of use, and
                      is widely used by developers around the world.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="mb-3 mb-md-5">
              <Card>
                <Card.Header className="bg-primary">
                  <h3>Uncontrolled vs Controlled components</h3>
                </Card.Header>
                <Card.Body>
                  <h5>Uncontrolled Components:</h5>
                  <div className="">
                    <p>
                      Form elements which store their own state internally. They
                      access form data by refs. Typically, uncontrolled
                      components are simpler to implement and require less
                      code.Uncontrolled components are useful for simple forms
                      that don’t require much validation.
                    </p>
                  </div>
                  <h5>Controlled Components:</h5>
                  <div>
                    <p>
                      {" "}
                      Form elements whose value is controlled by React state is
                      called controlled component. So to update the form
                      elements, you need to update the state. Controlled
                      components provide a way to track the current state of the
                      form elements, so it is easier to implement validation and
                      custom behavior. Controlled components are useful for more
                      complex forms that require extensive validation.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12} className="mb-3 mb-md-5">
              <Card>
                <Card.Header className="bg-primary">
                  <h3> React PropTypes</h3>
                </Card.Header>
                <Card.Body>
                  <div>
                    <p>
                      eact PropTypes is a feature in React that allows you to
                      define the expected type of the props passed to a
                      component. PropTypes helps to catch errors early by
                      providing clear feedback to the developer about what type
                      of data a component is expecting.
                    </p>
                    <p>
                      To use PropTypes, you need to import the PropTypes module
                      from the 'prop-types' package and define the expected
                      types of the props in the component.
                    </p>
                    <p>
                      To use PropTypes, you need to import the PropTypes module
                      from the 'prop-types' package and define the expected
                      types of the props in the component.{" "}
                    </p>

                    <p>
                      Using PropTypes is a good practice for improving the
                      robustness and maintainability of your React applications.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default Blog;
