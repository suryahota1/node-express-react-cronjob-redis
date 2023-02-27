import React from "react";
import "./JobDetail.css";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function JobDetail ({ handleClose, job }) {

    return (
        <Dialog
            open={true}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>
                {job.title} - 
                {job.company}
                <img className="comp-logo" src={job.company_logo} alt={job.company + " logo"} />
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    <div dangerouslySetInnerHTML={{__html: job.description}}></div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <a href={job.url} target="_blank">
                    <Button>Apply</Button>
                </a>
            </DialogActions>
        </Dialog>
    );
}

export default JobDetail;
