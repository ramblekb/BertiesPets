

import ReactDOM from 'react-dom'



function PList(pets) {
  return <container>{pets.name}</container>;
}

const element = <PList name="sara" />;
ReactDOM.render(element, document.getElementById('root'));

export default PList;
