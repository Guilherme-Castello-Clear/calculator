import React from 'react'
import './Button.css'

export default props => {
    let classes = 'button '
    classes += props.operations ? 'operation' : '';
    classes += props.double ? 'double' : '';
    classes += props.triple ? 'triple' : '';
    console.log(classes);
    return(
        <button className={classes} onClick={e => props.click && props.click(props.label)}>
            {props.label}
        </button>
    )
}