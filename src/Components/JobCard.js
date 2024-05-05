import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, makeStyles, Box, Modal, Avatar } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    width: '200px',  // Set a fixed width
    height: '400px', // Set height equal to width to keep it square
    marginBottom: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between' // This ensures the button stays at the bottom
  },
  companyName: {
    fontWeight: 'bold',
    display: 'flex',
    flexDirection:'row',

  },
  companyNameText: {
    fontWeight: 'bold',
    display: 'flex',
    flexDirection:'row',
    marginLeft:'15px',

  },
  location: {
    fontStyle: 'italic',
  },
  description: {
    marginTop: '10px',
    position: 'relative', // Position relative for the overlay effect
    maxHeight: '100px', // Max height for the blurred text
    overflow: 'hidden', // Hide overflow
  },
  blurredOverlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(transparent, rgba(255,255,255,0.8))', // Gradient for the overlay effect
    pointerEvents: 'none', // Allow clicks to pass through the overlay
  },
  applyButton: {
    marginTop: 'auto', // Align button at the bottom
    width: '180px',
    zIndex: 15,
    backgroundColor: 'green', // Change button color to green
  },
  viewJob: {
    marginTop: '10px', // Align button at the bottom
    width: '180px',
    zIndex: 15,
    backgroundColor: 'transparent', // Set button background color to transparent
    color: 'blue', // Set button text color to blue
    '&:hover': {
      backgroundColor: 'transparent', // Change background color to transparent on hover
    },
  },
  modalContent: {
    position: 'absolute',
    width: 400,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 16,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

const JobCard = ({ job }) => {
  const classes = useStyles();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Box marginTop={10}>
      <Card style={{ margin: '10px', padding: '10px' }} className={classes.card}>
        <CardContent>
          <Typography variant="h6" component="h2">
            {job.title}
          </Typography>
          
          <Typography color="textSecondary" className={classes.companyName}>
            <Avatar alt={job.companyName} src={job.logoUrl} className={classes.companyLogo} /> {/* Add Avatar for company logo */}
            <Typography color="textSecondary" className={classes.companyNameText}>
              {job.companyName}
            </Typography>
          </Typography>
          <Typography color="textSecondary" className={classes.location}>
            {job.location}
          </Typography>

          <Typography color="textSecondary">
            Experience: {job.minExp} - {job.maxExp} years
          </Typography>
          <Typography color="textSecondary">
            Salary range: {job.minJdSalary} - {job.maxJdSalary} {job.salaryCurrencyCode}
          </Typography>
          <div className={classes.description}>
            <Typography variant="body2" component="p">
              {job.jobDetailsFromCompany}
            </Typography>
            {!showFullDescription && <div className={classes.blurredOverlay}></div>}
          </div>
          <Button variant="contained" color="primary" className={classes.viewJob} onClick={toggleDescription}>
            {showFullDescription ? 'Hide Job' : 'View Job'}
          </Button>
          <Button variant="contained" color="primary" className={classes.applyButton} href={job.jdLink} target="_blank">
            Apply Now
          </Button>
        </CardContent>
      </Card>
      <Modal open={showFullDescription} onClose={toggleDescription}>
        <div className={classes.modalContent}>
          <Typography variant="h6" component="h2">
            {job.title}
          </Typography>
          <Typography color="textSecondary" className={classes.companyName}>
            {job.companyName}
          </Typography>
          <Typography color="textSecondary" className={classes.location}>
            {job.location}
          </Typography>
          <Typography color="textSecondary">
            Experience: {job.minExp} - {job.maxExp} years
          </Typography>
          <Typography color="textSecondary">
            Salary range: {job.minJdSalary} - {job.maxJdSalary} {job.salaryCurrencyCode}
          </Typography>
          <Typography variant="body2" component="p">
            {job.jobDetailsFromCompany}
          </Typography>
        </div>
      </Modal>
    </Box>
  );
}

export default JobCard;
