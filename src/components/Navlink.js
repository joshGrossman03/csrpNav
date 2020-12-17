
import { Link } from 'react-router-dom';
import {Card, Image} from 'semantic-ui-react'


const NavLink = (props)=> {

    return (

        <Card style= {{alignItems:"center", backgroundColor:"#F2F4F4"}}>
            <Link onClick={props.clicked} to={props.to} ><Image src={props.source} alt={props.desc} wrapped ui={false} width="60rem" style={{margin:"4px"}} /></Link>
            <Card.Content >
                <Card.Header>{props.linkName}</Card.Header>
            </Card.Content>
        </Card>

    )




}
export default NavLink;