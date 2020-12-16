import React, {Component} from 'react';
import SectionCard from '../components/SectionCard'
import {Container} from 'semantic-ui-react'
import * as Firestore from '../firestore/firestoreservice'


class Rules extends Component {
    state={ 

        library:[],
        collection: "rulesAndStatutes"
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
        <Container>
            <SectionCard items={this.state.library}/>
        </Container>     
    );}

};

export default Rules;