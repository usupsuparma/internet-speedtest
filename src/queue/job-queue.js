require('dotenv').config();
const speedProcess = require("../process/speed-process");
const RedisQueue = require("../Redis/RedisQueue");

const speedQueue = RedisQueue.generate('speed-queue');

function initQueue() {

    RedisQueue.setEventCallback(speedQueue, speedProcess);
    RedisQueue.setCron(speedQueue, "*/5 * * * *")
}

initQueue();