import React from 'react';
import Navmenu from '../components/Navmenu'
import CSRPTitle from '../components/csrptitle'
import {Container} from 'semantic-ui-react'




const Layout = (props) => (

    <Container fluid>
        <Navmenu />
        <CSRPTitle/>
        <div>
        {props.children}
        </div>
          
            

    </Container>
  
            
        

)
    

export default Layout;
