import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { Container, Divider } from 'semantic-ui-react'

const Navbar = ({setFormOpen}) => {
  return (
    <Menu inverted fixed='top'>
        <Container>
            <Menu.Item header>
                <img src="/assets/logo.png" alt="" style={{marginRight: 15}}/> Revents
            </Menu.Item>
            <Menu.Item name='Events'/>
            <Menu.Item>
                <Button onClick={()=>
                    setFormOpen(true)
                } positive inverted content="Create Event"></Button>
            </Menu.Item>
            <Menu.Item position='right'>
                <Button basic inverted content="login"></Button>
                <Button basic inverted content="Register" style={{marginLeft: '0.5em'}}></Button>
            </Menu.Item>
        </Container>
    </Menu>
  )
}

export default Navbar
