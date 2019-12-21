import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const SortOrder = props => {
  const appContext = useContext(AppContext);
  // const [priority, setNewPriority] = useState('high');

  return (
    <label>
      Sort by:
      <select
        value={appContext.displayPriority}
        onChange={e => {
          console.log('select sort', e.target.value);
          appContext.changeSortOrder(e.target.value);
        }}>
        <option value='low'>Lowest First</option>
        <option value='mediumHighLow'>Medium > High > Low</option>
        <option value='mediumLowHigh'>Medium > Low > High</option>
        <option value='high'>Highest First</option>
      </select>
    </label>
  );
};

export default SortOrder;
