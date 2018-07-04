import React from 'react';

const ActionsList = props => (
    <div>
        <h4>ActionsList</h4>
        <ul>
            {(props.actions || []).map(a => <li>{a.toString()}</li>)}
        </ul>
    </div>
)

export default ActionsList;