import React from 'react';
const PollOption = ({label , count, onVote}) => {
    return (
        <div>
            <span>{label}: {count} votes </span>
            <button onClick = {onVote}>Vote</button>
        </div>
    );
};