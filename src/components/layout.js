import React from 'react';
import Navmenu from '../components/Navmenu'
import CSRPTitle from '../components/csrptitle'
import {Container} from 'semantic-ui-react'




const Layout = (props) => (

    <Container fluid>
        <Navmenu />
        <CSRPTitle/>
        <Container fluid>
            {props.children}
        </Container>
    </Container>
  
            
        

)
    

export default Layout;
