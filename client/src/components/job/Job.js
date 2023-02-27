import React from "react";
import "./Job.css";
import Paper from '@mui/material/Paper';

function Job ({ job }) {

    return (
        <Paper className="single-job">
            <div>
                <div>{job.title}</div>
                <div>{job.company}</div>
                <div>{job.location}</div>
            </div>
            <div>
                <span>{job.created_at}</span>
            </div>
        </Paper>
    );
}

export default Job;
