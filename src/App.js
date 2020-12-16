import React from 'react';
import Layout from '../src/components/layout'
import {Switch, Route} from 'react-router-dom'
import Swi from '../src/containers/Swi'
import Policies from '../src/containers/Policy'
import Navigation from '../src/containers/Navigation'
import AddDocument from '../src/containers/AddDocument'
import Rules from '../src/containers/Rules'
import Sandbox from './components/sandbox/sandbox';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
Amplify.configure(awsconfig);




const App = () => {
    return (
        <div>
            <AmplifySignOut/>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Navigation} />
                    <Route path="/swi" exact component={Swi} />
                    <Route path="/policies" exact component={Policies} />
                    <Route path="/add-document" exact component={AddDocument}/>
                    <Route path="/rules-statutes" exact component={Rules} />
                    <Route path="/sandbox" exact component={Sandbox} />
                </Switch>
            </Layout>
        </div>
    )
}
export default withAuthenticator(App);