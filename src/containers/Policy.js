import React, {Component} from 'react';
import SectionCard from '../components/SectionCard'
import * as Firestore from '../../src/firestore/firestoreservice'




class Policy extends Component {

    state = {
        library:[],
        collection:"policyLibrary"
    }

    getDocsFromDB = () => {
        Firestore.db.collection(this.state.collection).get().then(doc =>{
            const library =[]
            doc.forEach(doc => {
                library.push(doc.data())
                // console.log("DATA_DATA_DATA",doc.id, "=>",doc.data())
            })
            this.setState({library:library});
            // console.log(this.state.swiLibrary);
        })};
        
        componentDidMount () {
            this.getDocsFromDB();
        }


    render(){

        return(
            <div>
                 <SectionCard items={this.state.library}/>
            </div>
        );

    }


};

export default Policy;