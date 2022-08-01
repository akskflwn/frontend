import React, { useState } from 'react'
import Child from './Child'

function Parents() {

    const [parentAge,setParentAge]=useState(0);
    const [childAge,setChildrenAge]=useState(0);

    const increaseParentAge = ()=>{
        setParentAge(parentAge+1);
    }
    console.log('부모컴포넌트 랜더링')

    const increseChildAge=()=>{
        setChildrenAge(childAge+1);

    }

  return (
    <div>
    <span>부모나이 age:{parentAge}</span>
    


    <div>
        <button className='btn btn-primary'
        onClick={increaseParentAge}
        >부모나이증가:</button>
        <button
        onClick={increseChildAge}
        >자식나이 증가:</button>
        <input type="text" value/>

    </div>

    <Child  name={'우영우'} age={childAge}/>
    </div>
  )
}

export default Parents