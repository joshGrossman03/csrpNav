import React from 'react';
import {Form} from 'semantic-ui-react'

const FormField = (props) => {
    return (
        
<div>

<Form.Field>
      <label>{props.inputLabel}</label>
      <input value={props.value} 
            onChange={props.onChange}
            style={{margin:"5px"}}/>
    </Form.Field>
<br/>

</div>
            
            
  
    )
}

export default FormField;