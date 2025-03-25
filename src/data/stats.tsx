import React from 'react';
import { FiActivity, FiUsers, FiAward, FiCalendar } from 'react-icons/fi';

interface Stat {
    title: string;
    value: string;
    icon: JSX.Element;
}

export const stats: Stat[] = [
    {
        title: 'Active Players',
        value: '10,000+',
        icon: <FiUsers size={24} />
    },
    {
        title: 'Games Tracked',
        value: '500,000+',
        icon: <FiActivity size={24} />
    },
    {
        title: 'Win Streaks',
        value: '25,000+',
        icon: <FiAward size={24} />
    },
    {
        title: 'Playing Days',
        value: '100,000+',
        icon: <FiCalendar size={24} />
    }
]