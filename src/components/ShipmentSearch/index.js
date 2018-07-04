import React from 'react'
import {bool, func, object} from 'prop-types'
import {Form, Message, Segment} from 'semantic-ui-react';

const ShipmentSearch = props => (
    <Segment inverted>
        <Form loading={props.loading === true} onSubmit>
            <Form.Input
                ref={props.inputRef}
                icon="search"
                placeholder="Αναζήτηση Αποστολής"/> {!!props.error
                ? (<Message error content={props.error.description}/>)
                : false
}
        </Form>
    </Segment>
)

ShipmentSearch.propTypes = {
    error: object,
    inputRef: func,
    loading: bool,
    onSubmit: func
}

export default ShipmentSearch