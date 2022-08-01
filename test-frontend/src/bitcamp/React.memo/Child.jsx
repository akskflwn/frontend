import React, { memo } from 'react'

/**
 * 
 * @returns [React.memo 최적화]
 * 렌더링이 되어야 할 상황에 놓일떄마다
 * props check 를 통해서 자신이 받는 props에 
 * 변화가 있는지 자동으로 체크를 통해서
 * 
 */
function Child({name,age}) {
    console.log('자식 컴포넌트 랜더링 되고있다...')
    
  return (
    <div >
<span>자식 name:{name}</span>
<span>자식 age:{age}</span>

    </div>
  )
}

export default memo(Child); 
//최적화 (랜더링 전에 props check)
//props 값이 변하지 않으면 전과 같은 값을 반환함