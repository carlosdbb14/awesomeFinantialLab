import React, { Component } from 'react'

import Level from '../home/widgets/Level'
import MissionsElement from './MissionElement'

import './Mission.css'

export default class Missions extends Component {
    render() {
        return (
            <div>
                <Level/>
                <MissionsElement title="Completa 3 metas" description="Completa 2 metas en un plazo de 2 dias." time={12000000}/>
                <MissionsElement title="Completa 3 metas" description="Completa 2 metas en un plazo de 2 dias." time={25000000}/>
                <MissionsElement title="Completa 3 metas" description="Completa 2 metas en un plazo de 2 dias." time={30000000}/>
            </div>
        )
    }
}
