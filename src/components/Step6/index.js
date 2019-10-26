import React, { Component } from 'react';
import { Card, Button, Form } from 'bootstrap-4-react';
import './intro.css';

//Were are bringing API GraphQL from aws-amplify dependencie installed via npm i aws-amplify
import { API, graphqlOperation } from 'aws-amplify';
//Here we are importing the createnote and listnotes from the src/graphql/mutations to use in the component
import { createNote } from '../../graphql/mutations';
import { listNotes } from '../../graphql/queries';



export default class App extends Component {

  state = {
   note: "",
   notes: []
   
  };

  async componentDidMount() {
    const result = await API.graphql(graphqlOperation(listNotes))
    this.setState({ notes: result.data.listNotes.items });

  };

  handleChangeNote = event => this.setState({ note: event.target.value});
  
  handleAddNote = async event => {
    const { note, notes } = this.state;
    event.preventDefault();
    const input = {
      note
    };
    const result = await API.graphql(graphqlOperation(createNote, {input}));
    const newNote = result.data.createNote
    const updatedNotes = [newNote, ...notes]
    this.setState({notes: updatedNotes, note: ""});

  };

  render() {

    const { notes, note } = this.state;

    return (
    <div className="container mt-4 ">
        <Card>
            <Card.Header><span className="h3 text-success fonted">Final Step : Using CRUD Mutations </span></Card.Header>
            <Card.Body>
            <Card.Title className="fonted">In your code editor , open src/components/Step6/index - I will explain in detail how to use these mutations inside a ReactJS Enviroment</Card.Title>
                <Card shadow>
                  <Card.Body>
                    <Card.Title className="fonted">Note App</Card.Title>
                    <Card.Text>
                      
                      {/* Note Form */}
                      <Form onSubmit={this.handleAddNote}>
                        <Form.Group>
                          <label htmlFor="exampleInputEmail1">Enter Note</label>
                          <Form.Input type="text" id="exampleInputEmail1" placeholder="Note" onChange={this.handleChangeNote} value={note} />
                          <Form.Text text="muted">Your almost there...</Form.Text>
                        </Form.Group>
                        <Button primary type="submit">Add Note</Button>
                      </Form>

                      {/* Note List*/}
                      
                      <span>
                        {notes.map(item =>(
                          <span key={item.id}>
                            <li>
                              {item.note}
                            </li>
                            </span>
                        ))}
                      </span>
 
                   
                    </Card.Text>
                    </Card.Body>
                </Card>
          
            <Card.Text>        
            </Card.Text>
            </Card.Body>
            <Card.Footer text="muted"></Card.Footer>
        </Card>
    </div>
    )
  }
}