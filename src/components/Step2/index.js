import React, { Component } from 'react';
import { Card, BSmall, Blockquote , Button, Alert } from 'bootstrap-4-react';
import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
    <div className="container mt-4 ">
        <Card text="center">
            <Card.Header>Step Two : Initiate Amplify from within the project.</Card.Header>
            <Card.Body>
            <Card.Title>Installing Amplify in your project</Card.Title>
            <hr/>
            <Card.Text>
               After you have successfully completed step one , it is time to init Amplify from within the project folder by using a new terminal. After a few seconds this will prompt a new set of commands and questions to complete. It is Amplify creating a codex for your project so it knows the the correct data to send back to AWS.
                <br/>
                <hr/>
                <h3 success>From your projects root folder in terminal run : amplify init</h3>
                <hr/>
                After a few seconds it will promt you to input some information in your terminal. Simply type in the data and hit enter to continue to the next question. Here is a small guide to help you.
                <hr/>
                Enter a name for the project (project_name)
                <hr/>
                Enter a name for the enviroment : src (this is the most commonly used default file name used as the root of a react project, aka your enviroment folder)
                <hr/>
                Choose your default editor: Visual code (unless you are using a differnt one)
                <hr/>
                Choose the type of of app that you are building javascript (being this is a React project)
                <hr/>
                What javascript framework are you using (React)
                <hr/>
                The next four use the defaul answers given and defualt as the main answers.
                <hr/>

                Now your project has been amplified. The key things to see here are the new folder called amplify that has been created in your root folder. This is a single source for all backend commands you will use in your project. And in your src folder there is a new file called aws-exports. This file should NEVER be altered manualy. AWS is now in sync with your project and will automatically update this file when changed have been made to your project.



            </Card.Text>
            <Link to='/stepthree'><Button success>
            Next Step
            </Button>
            </Link>
            </Card.Body>
            <Card.Footer text="muted">Note : If you want to share your AWS with another developer you can create guest users from the AWS dashboard in the browser.</Card.Footer>
        </Card>
    </div>
    )
  }
}