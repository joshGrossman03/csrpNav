import React, { Component } from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

       

export default class Navmenu extends Component {

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    
    return (
      <Menu>
        <Link to="/">
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        </Link>
       
<Link to="add-document">
<Menu.Item
          name='add a document'
          active={activeItem === 'add a document'}
          onClick={this.handleItemClick}
        >
          Add a Document
        </Menu.Item>
</Link>
        

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          New Feature
        </Menu.Item>
      </Menu>
  )
    }
}