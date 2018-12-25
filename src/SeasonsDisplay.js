import React from 'react';

const SeasonsDisplay = (props) => {
    const seasonConfig = {
        summer: {
            text: 'BEACH TIME !',
            icons: ['fa-swimmer', 'fa-sun']
        },
        winter: {
            text: 'LET IT SNOW LET IT SNOW LET IT SNOOOOW',
            icons: ['fa-snowflake', 'fa-cloud-rain']
        }
    }
    const getSeason = (latitude, month) => {
        if (month > 2 && month < 9) {
            return latitude > 0 ? 'summer' : 'winter';
        }
        else {
            console.log(latitude, month);
            return latitude > 0 ? 'winter' : 'summer';
        }
    }
    const season = getSeason(props.latitude, new Date().getMonth());
    const { text, icons } = seasonConfig[season];

    return (
        <div>
            {text}
            <i className={`fa ${icons[0]}`}></i>
            <i className={`fa ${icons[1]}`}></i>
        </div>
    )
}
export default SeasonsDisplay;