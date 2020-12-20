import React from 'react';
import Layout from '../src/components/layout'
import {Switch, Route} from 'react-router-dom'
import Navigation from '../src/containers/Navigation'
import AddDocument from '../src/containers/AddDocument'
import Sandbox from './components/sandbox/sandbox';
// import Amplify from 'aws-amplify';
// import awsconfig from './aws-exports';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Signup from '../src/components/signUp';
import Login from '../src/components/LogIn';
import SectionLibrary from './containers/SectionLibrary';
import {AuthProvider} from '../src/contexts/AuthContext'
// Amplify.configure(awsconfig);




const App = () => {
    return (
        
            <AuthProvider>
                <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Navigation} />
                <Route path="/swi" exact component={SectionLibrary} />
                <Route path="/policies" exact component={SectionLibrary} />
                <Route path="/add-document" exact component={AddDocument}/>
                <Route path="/rules-statutes" exact component={SectionLibrary} />
                <Route path="/sandbox" exact component={Sandbox} />
                </Switch>
            </AuthProvider>
            // <Layout>
            //     <Switch>
                    
            //         
            //         
            //     </Switch>
            // </Layout>
            
            
     
    )
}
export default (App);