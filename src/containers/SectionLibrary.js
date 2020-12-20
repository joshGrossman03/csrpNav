import React, { Component} from 'react';
import SectionCard from '../components/SectionCard'
import {Container} from 'semantic-ui-react'
import * as Firestore from '../firestore/firestoreservice'
import Navmenu from '../components/Navmenu';
import CsrpTitle from '../components/csrptitle';




class SectionLibrary extends Component {

    state={
        library:[],
        collection:""
    }
    
    determineCollection() {
        
        let collectionPath = this.props.location.pathname;
        let collection = "";
        if (collectionPath === "/swi") {
            collection = "swiLibrary";
            this.setState({collection:collection});            
        }
        if(collectionPath === "/policies"){
            collection = "policyLibrary";
            this.setState({collection:collection});
        }
        if(collectionPath === "/rules-statutes"){
            collection = "rulesAndStatutes";
            this.setState({collection:collection});
        }
    }
    
    getDocsFromDB = (collection) => {
        Firestore.db.collection(collection).get().then(doc =>{
            const library =[]
            doc.forEach(doc => {
                library.push(doc.data())
                // console.log("DATA_DATA_DATA",doc.id, "=>",doc.data())
            })
            this.setState({library:library});
            // console.log(this.state.swiLibrary);
        })};

  componentWillMount(){

        this.determineCollection();
  }
    
  componentDidMount(){

        this.getDocsFromDB(this.state.collection);
               
    }

    componentWillUnmount(){

        this.setState({library:[]})
    }
    

    render(){
        
        return(
            
            <Container fluid style={{marginTop:"20px"}}>
                <Navmenu/>
                <CsrpTitle/>
                <SectionCard items={this.state.library}/>
            </Container>     
        );}
}
    

export default SectionLibrary;