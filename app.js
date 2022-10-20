require("dotenv").config();
const FastSpeedtest = require("fast-speedtest-api");
const Speed = require("./src/Databases/Models/Speed");

const start = async () => {
  let INTERVAL = 1 * (60 * 1000);
  setInterval(async function () {
    try {
      let speedtest = new FastSpeedtest({
        token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm", // required
        verbose: false, // default: false
        timeout: 10000, // default: 5000
        https: true, // default: true
        urlCount: 5, // default: 5
        bufferSize: 8, // default: 8
        unit: FastSpeedtest.UNITS.Mbps, // default: Bps
      });

      let result = await speedtest.getSpeed();
      result = parseInt(result);
      console.log(result);

      let speed = {
        speed: result,
      };
      Speed.create(speed);
      console.log(new Date().toLocaleTimeString());
    } catch (error) {
      console.log(error);
    }
  }, INTERVAL);
};

start();
