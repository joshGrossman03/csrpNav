import React from 'react';
import NavLink from '../components/Navlink'
import Billboard from '../images/advertising.png';
import Policy from '../images/policy.png'
import Rules from '../images/lawbook.png';
import MapPic from '../images/map.svg';
import CompPic from '../images/accela.png';
import UsefulTools from '../images/toolbox.png';
import {Card, Container} from 'semantic-ui-react'
import Navmenu from '../components/Navmenu';
import CsrpTitle from '../components/csrptitle';





const Navigation = ()=> {

    return (
        <div>
        
            <Container fluid style={{marginTop:"20px"}}>
            <Navmenu/>
            <CsrpTitle/>
                 <Card.Group centered items style={{marginTop:"20px"}}>
                    <NavLink linkName="SWIs" to="/swi" source={Billboard}></NavLink>
                    <NavLink linkName="Policies"  to="/policies" source={Policy}></NavLink>
                    <NavLink linkName="Rules and Statutes" to="/rules-statutes" source={Rules}></NavLink>
                    <NavLink linkName="Maps" to="/maps" source={MapPic}></NavLink>
                    <NavLink linkName="Accela" to="/accela" source={CompPic}></NavLink>
                    <NavLink linkName="Useful Tools" to="/usefultools" source={UsefulTools}></NavLink>
                    <NavLink linkName="Sandbox" to="/sandbox" source={UsefulTools}></NavLink>
                </Card.Group>
            </Container>
            </div>
               

            
             
    )
}



export default Navigation;