import React from 'react'

function Notes({notes}) {
  return (
    <div>
    <ul>
        {notes.map((todo,index)=><li key= {`${index}`}>{todo}</li>)
       }
       </ul>
    </div>
  )
}

export default Notes