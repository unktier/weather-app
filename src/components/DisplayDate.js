import React from 'react';

const DisplayDate = (props) => {
    const onDateChange = () => {
        const updateDate = new Date();
        updateDate.setDate(updateDate.getDate() + props.changeDay)
        return updateDate.toDateString();
    };

    return (
        <div className="display-date">
            {onDateChange()}
        </div>
    );
};

export default DisplayDate;