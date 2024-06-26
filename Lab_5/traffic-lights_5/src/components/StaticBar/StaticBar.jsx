import React, { useState, useEffect } from 'react';
import s from './StaticBar.module.css';

const StaticBar = (props) => {
    return (
        <div className={s.stat_bar_wrapper}>
            <button onClick={props.clickRotation}>
                Change rotation
            </button>
            <div className={s.stat_bar + ' ' + (props.gorizontal ? s.gorizontal : s.vertical)}>
                {props.TrafficLightsData.map(lightItem => (
                    <div>
                        {lightItem.description} - {lightItem.clickcount}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StaticBar;