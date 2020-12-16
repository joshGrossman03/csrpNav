import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { increment, decrement} from './testreducer';

export default function Sandbox() {
    const dispatch = useDispatch();

    const data = useSelector(state=> state.test.data)
    return(
        <>
        <h1>Testing 123</h1>
        <h3>The Data is:{data}</h3>
        <Button color="green" onClick = {()=>dispatch(increment(20))} content="Increment"/>
        <Button color="red" onClick = {()=>dispatch(decrement(10))}content="Decrement"/>
        </>
    )
}