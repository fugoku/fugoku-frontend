import React, { Component } from 'react'
import LoadBalancerStats from './LoadBalancerStats'
import NetDataInfo from './NetDataInfo'

export default class Monitoring extends Component {
    render() {
        return (
            <div>
                <LoadBalancerStats />
                <div style={{ height: 50 }} />
                <NetDataInfo />
            </div>
        )
    }
}
