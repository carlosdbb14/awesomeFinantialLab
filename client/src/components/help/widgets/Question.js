import React from 'react'

export default function Question(props) {
    return (
        <div className="question-card">
            <div className="question-info">
                <div className="question-info-title">
                    <b>{props.title}</b>
                </div>          
                <div className="question-info-des">
                    {props.description}
                </div>          
            </div>
            <img src={props.url} alt="imagebakc"/>
        </div>
    )
}
