import React, { Component } from 'react'

import Level from '../home/widgets/Level'
import MissionsElement from './MissionElement'

import './Mission.css'

export default class Missions extends Component {
    render() {
        return (
            <div>
                <Level/>
                <MissionsElement title="Completa tu primera meta financiera" description="Comienza cumplir tus sueños completando la primera meta" time={12000000}/>
                <MissionsElement title="Genera movimientos" description="Genera movimientos durante 5 dias seguidos" time={25000000}/>
                <MissionsElement title="Completa 3 metas" description="Completa 2 metas en un plazo de 2 dias." time={30000000}/>
            </div>
        )
    }
}
