import {Container} from 'semantic-ui-react'
import { useAuth } from '../contexts/AuthContext';
const CsrpTitle = () => {

    const { currentUser } = useAuth();
    return (
        <Container fluid textAlign="center" style={{backgroundColor:'#14375A', padding:'40px'}}>
            {currentUser.email? <><h4 style={{color:"#ECEDED"}}>Welcome:  {currentUser.email}</h4></>:null}
            <h1 style={{color:'white'}} >Commercial Signs Regulatory Program</h1>
            <p style={{color:'white'}} >
                The CSRP Navigator is a simple tool to allow 
                you to easily access important program 
                documentation. The guides and policies available 
                here are the most up to date version.
            </p>

        </Container>
    )
}

export default CsrpTitle;