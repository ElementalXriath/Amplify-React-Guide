import React, { Component } from 'react';
import { Card, BSmall, Blockquote , Button, Alert, ListGroup } from 'bootstrap-4-react';
import { Link } from 'react-router-dom';
import './intro.css';

export default class App extends Component {
  render() {
    return (
    <div className="container mt-4 ">
        <Card>
            <Card.Header><span className="h3 text-success fonted">Step 2 : Initiate Amplify from within the project.</span></Card.Header>
            <Card.Body>
            <Card.Title>Installing Amplify in your project</Card.Title>
            <hr/>
            <Card.Text>
               After you have successfully created a AWS Account and Configured your CLI with the correct information you can now access AWS from your terminal in any project. So open a new terminal inside of the project root folder and follow the command below.
                <br/>
                <hr/>
                <h3 success className="type"><span className="high fonted">From your projects root folder in terminal run :</span>  amplify init</h3>
                <Card mb="2">
                    <Card.Header>You will be prompted to answer these questions in the terminal.</Card.Header>
                    <ListGroup flush>
                    <ListGroup.Item>? Enter a name for the project: <span className="text-primary fonted">(project_name)</span></ListGroup.Item>
                    <ListGroup.Item>? Enter a name for the enviroment: <span className="text-primary fonted">(src)</span></ListGroup.Item>
                    <ListGroup.Item>? Choose your default editor: <span className="text-primary fonted">( Visual code )</span></ListGroup.Item>
                    <ListGroup.Item>? Choose the type of of app that you are building javascript: <span className="text-primary fonted">(javascript)</span></ListGroup.Item>
                    <ListGroup.Item>? What javascript framework are you using: <span className="text-primary fonted">(React)</span></ListGroup.Item>
                    <ListGroup.Item>? Use the default choices for the remaining questions.</ListGroup.Item>
                    </ListGroup>
                </Card>
                               
                <hr/>
              
                Congrats! Now your project has been Amplified and were ready to start building full stack with React Js and Amazon web services. Notice it is building a backend folder inside your project.
                <br/><br/>
                ! Notice the new folder called amplify that was created by amplify init. This is the back end resources for your project.
                <br/><br/>
                ! Also , notice the new file called aws-exports inside the src folder. Do not edit this file , or change it. It is the configurations your project needs to comminicate with AWS. This file will be updated automatically when required.

            </Card.Text>
            <Link to='/stepthree'><Button success>
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