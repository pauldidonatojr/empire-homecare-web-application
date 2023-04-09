import React from 'react';

function MemberDetails(props) {
    const name = props.name;
   
  return (
    <div>
      <h1>Details for {props.name}</h1>
      
    </div>
  );
}

export default MemberDetails;