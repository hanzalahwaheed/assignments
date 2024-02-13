import React from "react";
import BusinessCard from "./components/BusinessCard";

const App = () => {
  const interests = ["football", "anime", "Formula1"];
  return (
    <div>
      <BusinessCard
        name="Hanzalah Waheed"
        description="FullStack Developer"
        twitterHandle="twitter"
        linkedInHandle="linkedin"
        interests={interests}
      />
    </div>
  );
};

export default App;
