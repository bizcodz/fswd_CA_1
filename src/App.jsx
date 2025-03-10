import React from 'react';
import TeamMemberCard from './components/TeamMemberCard';

function App() {
    return (
        <div>
            <h1>Our Team</h1>
            <TeamMemberCard name="Chris Vivek" jobTitle="Software Engineer" />
            <TeamMemberCard name="keerthan kodi" jobTitle="UI/UX Designer" />
        </div>
    );
}

export default App;
