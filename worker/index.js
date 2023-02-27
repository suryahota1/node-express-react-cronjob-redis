import { schedule } from 'node-cron';
import fetchJobs from './tasks/indeed-jobs.js';

schedule('* * * * *', fetchJobs, null, true, "Asia/Kolkata");
