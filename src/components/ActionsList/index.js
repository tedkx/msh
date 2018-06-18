import React from 'react';
import PropTypes from 'prop-types'

const ActionsList = props => (
    <div>
        <h4>ActionsList</h4>
        <ul>
            {(props.actions || []).map(a => <li>{a.toString()}</li>)}
        </ul>
    </div>
)

export default ActionsList;