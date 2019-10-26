import React, { Component } from 'react';
import { Card, BSmall, Blockquote , Button, Alert, ListGroup } from 'bootstrap-4-react';
import { Link } from 'react-router-dom';
import './intro.css';
import logo from './awsnpm.png'; 
import logo2 from './new.png'; 

export default class App extends Component {
  render() {
    return (
    <div className="container mt-4 ">
        <Card>
            <Card.Header><span className="h3 text-success fonted">Step 5: Using GraphQL - Entering Data</span></Card.Header>
            <Card.Body>
            <Card.Title></Card.Title>
            <Card shadow>
                <Card.Body>
                    <Card.Title className="fonted">GraphQL</Card.Title>
                    <Card.Text>
                    GraphQL is a language for APIs that enables you to query and manipulate data easily through an intuitive and flexible syntax. GraphQL provides a syntax to describe data requirements and interactions, allowing you to ask for exactly what you need and get back predictable results. It also makes it possible for you to access many sources in a single request, reducing the number of network calls and bandwidth requirements, therefore saving battery life and CPU cycles consumed by your applications. Making updates to your data is made simple with mutations, allowing you to describe how you want your data to change. GraphQL also allows you to quickly set up real-time solutions via subscriptions. All of these features combined, coupled with powerful developer tools, makes GraphQL essential to managing your data.
                      <br/>  <br/> <BSmall text="success"><Button secondary sm active as="a" href="https://docs.aws.amazon.com/appsync/latest/devguide/graphql-overview.html">GraphQL Guide</Button></BSmall>
                    </Card.Text>
                    </Card.Body>
                </Card>
            <hr/>
            <span className="fonted h4">Editing the GraphQL</span>
            <hr/>
            Now in the code editor , <span className="fonted">open amplify/backend/api/schema.graphql.</span> You will see a very basic Todo data type.
            <Card>
              <Card.Body>
                <Card.Text>
                <img shadow src={logo} className="pic"/>
                </Card.Text>
              </Card.Body>
            </Card>
            Were going to edit this slightly as if we were going to create a note taking app just show how to create new schemas and generate a new set of mutations and queries.<span className="fonted"> Change Type Todo to Type Note</span>. This would mean the type of data for any CRUD operations is now about notes. You can add multiple data types to this schema. Were going to leave id: ID! as it is. Then delete the descrtiption as it is not needed for this example. It should look like this when completed. If you have ever used Schemas in JavaSript you remember you have to set the types for each entry such as String! or Number.
            <Card>
              <Card.Body>
                <Card.Text>
                <img shadow src={logo2} className="pic"/>
                </Card.Text>
              </Card.Body>
            </Card>
            Now we need to push these changes to AWS. Open a new terminal and run the following command.
            <hr/>
            <h3 success className="type"><span className="high fonted">From your projects root folder in terminal run :</span> amplify push</h3>
            <hr/>
            This will also generate ever possible CRUD operation for NOTE inside of your src/graphql folder for mutations and queries. Look inside src/graphql mutations and you will see what AWS sent back with the update to the graphql you pushed to.
            <Card.Text>    
              <Card shadow>
                <Card.Body>
                    <Card.Title className="fonted">What is a Mutation</Card.Title>
                    <Card.Text>
                    A mutation is a query that does exactly what its name implies. It mutates the data by update , create , delete.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <hr/>
                <Card shadow>
                <Card.Body>
                    <Card.Title className="fonted">What are Queries</Card.Title>
                    <Card.Text>
                    GraphQL is a language for APIs that enables you to query and manipulate data easily through an intuitive and flexible syntax. GraphQL provides a syntax to describe data requirements and interactions, allowing you to ask for exactly what you need and get back predictable results.
                    </Card.Text>
                    </Card.Body>
                </Card>     
                <hr/>
                Finally lets use these new mutations inside the project and put some notes in your db. I have pre built the UI for the note taking app in the next section. Thought it would be easier then just making you code it your self , but I made sure the explinations are in depth in the comments.
            </Card.Text>
            <Link to='/stepsix'><Button success>
            Next Step
            </Button>
            </Link>
            </Card.Body>
            <Card.Footer text="muted"></Card.Footer>
        </Card>
    </div>
    )
  }
}