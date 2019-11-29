import React from 'react';

const MainField = props => (

  <div style={{'height':'500px'}} className="border-right border-top border-left rounded-top d-flex flex-column overflow-auto py-4 px-2">{props.children}</div>
)

export default MainField;