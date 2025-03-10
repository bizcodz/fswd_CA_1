import React from 'react';

const TeamMemberCard = ({ name, jobTitle }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '8px',
            margin: '10px',
            textAlign: 'center'
        }}>
            <h2>{name}</h2>
            <p>{jobTitle}</p>
        </div>
    );
};

export default TeamMemberCard;
