import React, { useState } from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'
       

  const Navmenu =()=> {
    const [activeItem, setActiveItem] = useState();
    const handleItemClick = (e, { name }) => setActiveItem(name);
   
    
    return (
      <Menu pointing secondary>
       
         
         <Link to="/"> <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          /></Link>
          <Link to="/add-document"><Menu.Item
            name='Add Document'
            active={activeItem === 'messages'}
            onClick={handleItemClick}
          /></Link>
          <Menu.Item
            name='New Feature'
            active={activeItem === 'friends'}
            onClick={handleItemClick}
          />
           
          
          <Menu.Menu position='right'>
            
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={handleItemClick}
            />
          </Menu.Menu>
        </Menu>
  )
    }

  
export default Navmenu