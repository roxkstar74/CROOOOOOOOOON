import axios from 'axios';
import cron from 'node-cron';
const URL = 'https://betterthumbnailtester.com/api/test/generateUpdateJobs';


const doStuff = () => {
    console.log('thing');
    axios.get(URL).then(res => {
        console.log(res.data);
    }).catch(err => {
        console.log(err);
    });
}

//24hr cron job run at 0 UTC
cron.schedule('0 0 * * *', doStuff);
console.log('cron job started');