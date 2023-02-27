import React, { useEffect, useState } from "react";
import Job from "../job/Job";
import "./Jobs.css";
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import JobDetail from "../job-detail/JobDetail";

function Jobs ({ jobs=[] }) {

    const theme = useTheme();
    const [ activeStep, setActiveStep ] = useState(0);
    const [ jobSlice, setJobSlice ] = useState([]);
    const [ jobDetail, setJobDetail ] = useState(false);
    
    const totalPages = Math.ceil(jobs.length / 5);

    const handleNext = () => {
        setJobSlice(jobs.slice((activeStep + 1) * 5, (activeStep + 1) * 5 + 5));
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setJobSlice(jobs.slice((activeStep - 1) * 5, (activeStep - 1) * 5 + 5));
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    useEffect(() => {
        if ( jobs && jobs.length > 0 ) {
            setJobSlice(jobs.slice(0, 5));
        }
    }, [ jobs ]);

    const onJobClick = ( job ) => {
        setJobDetail(job);
    }

    const handleClose = () => {
        setJobDetail(null);
    }

    return (
        <div className="jobs-container">
            <h1>
                Entry level software jobs
            </h1>
            <h3>
                Found {jobs.length} jobs
            </h3>
            <div className="job-list">
                {jobSlice && jobSlice.length > 0 ? jobSlice.map(job => <Job key={job.id} job={job} onJobClick={onJobClick} />) : null}
            </div>
            <MobileStepper
                variant="progress"
                steps={totalPages + 1}
                position="static"
                activeStep={activeStep + 1}
                sx={{ maxWidth: 400, flexGrow: 1 }}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep + 1 === totalPages}>
                    Next
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft />
                    ) : (
                        <KeyboardArrowRight />
                    )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowRight />
                    ) : (
                        <KeyboardArrowLeft />
                    )}
                    Back
                    </Button>
                }
            />
            <div>Page { activeStep + 1 } of { totalPages }</div>
            {jobDetail ? <JobDetail handleClose={handleClose} job={jobDetail} /> : null}
        </div>
    );
}

export default Jobs;
