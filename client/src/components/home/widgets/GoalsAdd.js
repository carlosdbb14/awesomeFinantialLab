import React from 'react'

export default function GoalsAdd() {
    return (
        <div className={`goals-element-add`} onClick={() => window.location = "/goals/add"}>
            Agregar 
        </div>
    )
}
