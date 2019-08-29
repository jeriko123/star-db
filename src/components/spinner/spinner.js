import React from 'react';
import './spinner.css';

const Spinner = () => {
  return(
    <div style={{ padding: "0 50%"}} className="lds-css ng-scope">
      <div  className="lds-ellipsis">
        <div>
          <div>
          </div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  )
};

export default Spinner;