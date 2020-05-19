import React from 'react';

const getSeason = (lat, month) => {
   // if the month is between April and September
   if(month > 2 && month < 9) {
      // if we're in the northern hemisphere, return summer, else were in the southern hemisphere so return winter
     return lat > 0 ? 'summer' : 'winter';
   } // else the month is between October and March
   else {
      // if we're in the northern hemisphere, return winter, else were in the southern hemisphere so return summer
      return lat > 0 ? 'winter' : 'summer';
   }
}
const SeasonDisplay = props => {
   const season = getSeason(props.lat, new Date().getMonth());
   return (
      <div>{season}</div>
   );
}
export default SeasonDisplay;