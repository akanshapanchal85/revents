import React from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react'

const eventForm = ({setFormOpen}) => {
  return (
    <Segment clearing>
        <Header content='Create New Event'/>
        <Form>
            <Form.Field>
                <input type='text' placeholder='Event Title'/>
            </Form.Field>
            <Form.Field>
                <input type='text' placeholder='Category'/>
            </Form.Field>
            <Form.Field>
                <input type='text' placeholder='Description'/>
            </Form.Field>
            <Form.Field>
                <input type='text' placeholder='City'/>
            </Form.Field>
            <Form.Field>
                <input type='text' placeholder='Event Title'/>
            </Form.Field>
            <Form.Field>
                <input type='date' placeholder='Date'/>
            </Form.Field>
            <Button type='submit' floated='right' positive content='Submit' />
            <Button onClick={()=>setFormOpen(false)} type='submit' floated='right'  content='Cancel' />
        </Form>
    </Segment>
  )
}

export default eventForm
