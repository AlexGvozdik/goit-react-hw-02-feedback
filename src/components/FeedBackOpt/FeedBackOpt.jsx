import React from 'react';
import PropTypes from 'prop-types'
import {MyBtn} from './FeedBackOpt.styled'
const FeedBackOpt = ({onLeaveFeedback,btnNames,reset}) => {
    return (
        <>
            {btnNames.map(btn => (
                <MyBtn
                    key={btn}
                    type="button"
                    name={btn}
                    onClick={onLeaveFeedback}
                >
                    {btn}
                </MyBtn>
            ))}
            <MyBtn onClick={reset}>Reset</MyBtn>
        </>
    );
}

FeedBackOpt.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    btnNames:PropTypes.array.isRequired,
}

export default FeedBackOpt;