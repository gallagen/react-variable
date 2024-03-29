import React from "react";

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: 30
  };

  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "#04756F"
  } else if (hours >= 12 && hours <= 17) {
    timeOfDay = "afternoon"
    styles.color = "#E11111"
  } else {
    timeOfDay = "night"
    styles.color = "#D90000"
  }

  return (
    <h1 style={styles}>Good {timeOfDay}!</h1>
  )
}

export default App;
