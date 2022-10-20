
const FastSpeedtest = require("fast-speedtest-api");
const Speed = require("../Databases/Models/Speed");

const speedProcess = async (job, done) => {
    try {
        let speedtest = new FastSpeedtest({
            token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm", // required
            verbose: false, // default: false
            timeout: 10000, // default: 5000
            https: true, // default: true
            urlCount: 5, // default: 5
            bufferSize: 8, // default: 8
            unit: FastSpeedtest.UNITS.Mbps // default: Bps
        });
        
        let result = await speedtest.getSpeed(); 
        result = parseInt(result);
        console.log('speed ' + result);

        let speed = {
            speed: result
        }
        Speed.create(speed)
        done(null, "success running rss");
    } catch (error) {
        console.error(error);
        done(null, error);
        
    }
}

module.exports = speedProcess;