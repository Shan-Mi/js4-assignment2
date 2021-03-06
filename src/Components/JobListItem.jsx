import React from "react";
import { Link } from "react-router-dom";

const JobListItem = ({ url, job, index }) => {
  return (
    <Link to={`${url}/${job.id}`} key={job.id}>
      - {index + 1}: {job.title}
    </Link>
  );
};

export default JobListItem;
