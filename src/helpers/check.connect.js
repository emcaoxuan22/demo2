'use strict'

const mongoose = require('mongoose')
const os = require('os')
const process = require('process')
const _SECONDS = 5000

const countConnect = () => {
    const numConnection = mongoose.connections.length 
    console.log(`number of connection ${numConnection}`)
}

const checkOverLoad = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length
    const numCores = os.cpus().length
    const memoryUsage = process.memoryUsage().rss

    const maxConnections = numCores * 5
    console.log(`Active connections: ${numConnection}`)
    console.log(`Memoty usage:: ${memoryUsage/1024/1024} MB`)
    if(numConnection > maxConnections) {
        console.log(`connection overload detected`)
    }
    }, _SECONDS)
    
} 

module.exports =  {
    countConnect, 
    checkOverLoad
}