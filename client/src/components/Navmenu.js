import React from 'react';

function Navmenu(){
const petObj = [
    { id: 1, name: 'chris' },
    { id: 2, name: 'nick' }
  ];
  
  return (
    <div>
      {petObj.map(pet => (
        <p key={pet.id}>{pet.name}</p>
      ))}
    </div>
  );
}
  
export default Navmenu; 