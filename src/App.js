import React from 'react';
import Layout from '../src/components/layout'
import {Switch, Route} from 'react-router-dom'
import Navigation from '../src/containers/Navigation'
import AddDocument from '../src/containers/AddDocument'
import Sandbox from './components/sandbox/sandbox';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import SectionLibrary from './containers/SectionLibrary';
Amplify.configure(awsconfig);




const App = () => {
    return (
        <div>
            <AmplifySignOut/>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Navigation} />
                    <Route path="/swi" exact component={SectionLibrary} />
                    <Route path="/policies" exact component={SectionLibrary} />
                    <Route path="/add-document" exact component={AddDocument}/>
                    <Route path="/rules-statutes" exact component={SectionLibrary} />
                    <Route path="/sandbox" exact component={Sandbox} />
                </Switch>
            </Layout>
        </div>
    )
}
export default withAuthenticator(App);