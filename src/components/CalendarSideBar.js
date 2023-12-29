import React from 'react';

import CreateEventButton from '../commonComponents/CreateEventButton';
import SmallCalendar from '../commonComponents/SmallCalendar';
import Labels from './Labels';

const CalendarSideBar = () => {
    return (
        <aside className={"border p-5 w-64"}>
            <CreateEventButton />
            <SmallCalendar />
            <Labels />
        </aside>
    )
}

export default CalendarSideBar;