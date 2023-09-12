import React from 'react';
import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <input ref={ref} id={props.input.id} {...props.input}  />
        </div>
    );
});

export default Input;