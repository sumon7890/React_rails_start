import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const Example = () => {
    return (
        <div className="container">
            <ButtonGroup>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </div>
    ),


        ButtonGroup.propTypes = {
            ariaLabel: PropTypes.string,
            className: PropTypes.string,
            role: PropTypes.string,
            size: PropTypes.string,
            vertical: PropTypes.bool
        }

}


export default Example;