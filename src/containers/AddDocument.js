import React, { Component } from 'react';
import * as Firestore from '../firestore/firestoreservice';
import FormField from '../components/FormField';
import { Container, Button, Form } from 'semantic-ui-react'
import DropdownField from '../components/DropdownField'


class AddDocument extends Component {

  state = {
    docType:"",
    sectionTitle:" ",
    chapterNum:null,
    chapterTitle:" ",
    docTitle:" ",
    subChapterNum:null,
    url:" ",
    typeOptions:[],
    sectionTitleOptions:[],
    docID:" "
    
  }

  clearOutState = () => {
    this.setState({
      docType:"",
      sectionTitle:" ",
      chapterNum:" ",
      chapterTitle:" ",
      docTitle:" ",
      url:" "
    });
  }
  
  getCollectionFromDB = ()=> {
    Firestore.db.collection('types').get().then((querySnapshot)=> 
      { const typeOptions = [];
        const sectionTitleOptions = [];
        querySnapshot.forEach((doc)=> {
          const docID = doc.id
          const {key,type} = doc.data();
            typeOptions.push({
              key:key,
              text:type,
              value:type
            });
          const {sectionTitle} = doc.data();
          sectionTitleOptions.push(
            { 
              key:key,
              text:sectionTitle,
              value:sectionTitle
            }
          )
         
             
        });
        // console.log(options);
        this.setState({typeOptions:typeOptions});
        this.setState({sectionTitleOptions:sectionTitleOptions});
        
        
        console.log(this.state.typeOptions);
        console.log(this.state.sectionTitleOptions);
        
    });
  }
    
    // console.log(this.state.types);

  componentDidMount() {
    this.getCollectionFromDB();
    
  }

  
    
handleChange(e) {
  this.setState({type:e.target.value});
}
  
// onNewDocSubmit = () => {
//   var newDoc = Firestore.db.collection("section").doc("chapter1")

// // Atomically add a new region to the "regions" array field.
// newDoc.update({
//     data: firebase.firestore.FieldValue.arrayUnion({id:1.3,docTitle:"Processing of Electronic Receipts", url:"https://www.yahoo.com"})
// });
// }

onDocumentSubmit = (collection) => {

  ///change this to a switch
  

  
    Firestore.addDocToCollection(collection = "documents",
      {
        docType:this.state.docType,
        sectionTitle: this.state.sectionTitle,
        chapterNum: this.state.chapterNum,
        chapterTitle: this.state.chapterTitle,
        docTitle: this.state.docTitle,
        url: this.state.url 

      }
      
    ).then(() => { this.clearOutState() });
  }
 



  render() {
    const docType = this.state.docType;
    let renderedForm;
   if(docType ==="SWI"){
     renderedForm = (<div>
       <DropdownField label="Section Title" options={this.state.sectionTitleOptions} value={this.state.sectionTitleOptions.value} onChange={(e)=> this.setState({sectionTitle: e.target.value})}/>
       {/* <FormField inputLabel="Section Title" value={this.state.sectionTitle} onChange={(e) => this.setState({ sectionTitle: e.target.value })} /> */}
            <FormField inputLabel="Chapter Number" value={this.state.swiChapterNum} onChange={(e) => this.setState({ chapterNum: e.target.value })} />
            <FormField inputLabel="Chapter Title" value={this.state.swiChapterTitle} onChange={(e) => this.setState({ chapterTitle: e.target.value })} />
            <FormField inputLabel="Document Title" value={this.state.docTitle} onChange={(e) => this.setState({ docTitle: e.target.value })} />
            <FormField inputLabel="Document Url" value={this.state.url} onChange={(e) => this.setState({ url: e.target.value })} />
            <Button color="green" onClick={() => this.onNewDocSubmit()} size='big'>Submit</Button>
            {console.log(this.state.docType)}
     </div>)
   }else {
     renderedForm = <div>
    <FormField inputLabel="Section Title" value={this.state.sectionTitle.sectionTitle} onChange={(e) => this.setState({ sectionTitle: e.target.value })} />
     <FormField inputLabel="Document Title" value={this.state.docTitle} onChange={(e) => this.setState({ docTitle: e.target.value })} />
     <FormField inputLabel="Document Url" value={this.state.url} onChange={(e) => this.setState({ url: e.target.value })} />
     <Button color="green" onClick={() => this.onDocumentSubmit()} size='big'>Submit</Button></div>
   }
    return (
      
      <div>
        
        <Container style={{ marginTop: "20px" }} >
          <Form>
           <DropdownField label="Document Type" options={this.state.typeOptions} value={this.state.typeOptions.value} onChange={(e) => this.setState({ docType: e.target.value })}></DropdownField>
           {console.log("docType: ", this.state.docType)}
            {/* <FormField inputLabel="Document Type" value={this.state.type} onChange={(e) => this.setState({ type: e.target.value.trim() })} /> */}
            {renderedForm}
          </Form>
        </Container>
      </div>

    )
  }
}

export default AddDocument;

