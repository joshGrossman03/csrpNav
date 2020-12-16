import React from 'react';
import { useDispatch } from 'react-redux';
import {Card} from 'semantic-ui-react'
import { getCollection } from '../containers/libraryReducer';
import DocList from './DocList'

const SectionCard = (props) => {
    
    
  
    console.log("sectionCards",props)  
   
    
    const title = props.items.map(item => {
       const sectionTitle = [];
       sectionTitle.push(item.sectionTitle)
        return (
            
            sectionTitle
        )
        
    })

   
    
    return (
        <div>
            <Card fluid key={props.items.id}>
                <Card.Content>
                <Card.Header style={{textAlign:'center'}}>{title[0]}</Card.Header>
                </Card.Content>
                <Card.Content>
                <DocList items={props.items} />
                </Card.Content>
            </Card>
             
        </div>
            
           

    );
}

export default SectionCard;