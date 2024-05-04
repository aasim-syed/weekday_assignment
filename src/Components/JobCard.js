// JobCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const JobCard = ({ job }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {job.title}
        </Typography>
        <Typography color="textSecondary">
          {job.companyName} - {job.location}
        </Typography>
        <Typography variant="body2" component="p">
          {job.description}
        </Typography>
        <Typography color="textSecondary">
          Experience: {job.experience}
        </Typography>
        <button>Apply</button>
      </CardContent>
    </Card>
  );
}

export default JobCard;
