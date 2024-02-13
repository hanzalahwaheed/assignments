import React from "react";

const BusinessCard = ({
  name,
  description,
  twitterHandle,
  linkedInHandle,
  interests,
}) => {
  return (
    <div>
      {name} <br />
      {description} <br />
      {twitterHandle} <br />
      {linkedInHandle} <br />
      {interests.map((interest) => (
        <div>
          {interest} <br />
        </div>
      ))}
    </div>
  );
};

export default BusinessCard;
