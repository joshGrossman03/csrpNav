import React from 'react';


const DropdownField = (props) => {

    const renderedOptions = props.options.map(item =>{
        console.log(item.text)
        if(item.text){
            return(
                <option key={item.text} value={item.text}>{item.text}</option>
            )
        }else{
            return (
                <option key={item.sectionTitle} value={item.sectionTitle}>{item.sectionTitle}</option>
            )
        }
        

    });
        return (
            <div>
                <label>{props.label}</label>
            <select onChange={props.onChange} value={props.value}>
                {renderedOptions}
            </select>

            </div>
            
        )
    }
   


export default DropdownField;