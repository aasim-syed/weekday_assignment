// JobCard.js
import React from 'react';
import { Card, CardContent, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        width: '200px',  // Set a fixed width
        height: '200px', // Set height equal to width to keep it square
        marginBottom: '20px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between' // This ensures the button stays at the bottom
      },
    
  companyName: {
    fontWeight: 'bold',
    marginRight: '10px',
  },
  location: {
    fontStyle: 'italic',
  },
  description: {
    marginTop: '10px',
  },
  applyButton: {
    marginTop: '20px',
  },
});

const JobCard = ({ job }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" component="h2">
          {job.title}
        </Typography>
        <Typography color="textSecondary" className={classes.companyName}>
          {job.companyName}
        </Typography>
        <Typography color="textSecondary" className={classes.location}>
          {job.location}
        </Typography>
        <Typography variant="body2" component="p" className={classes.description}>
          {job.description && job.description.substring(0, 150)} {/* Check if description exists */}
        </Typography>
        <Typography color="textSecondary">
          Experience: {job.minExp} - {job.maxExp} years
        </Typography>
        <Button variant="contained" color="primary" className={classes.applyButton}>
          Apply Now
        </Button>
      </CardContent>
    </Card>
  );
}

export default JobCard;
