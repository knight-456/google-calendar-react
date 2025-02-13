import React from 'react';

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => {},
    smallCalendarMonth: 0,
    setSmallCalendarMonth: (index) => {},
    daySelected: null,
    setDaySelected: (day) => {},
    showEventModal: false,
    setShowEventModal: () => {},
    dispatchCalEvent: ({ type, payload }) => { },
    savedEvents: [],
    selectedEvent: null,
    setSelectedEvent: () => {},
    labels: [],
    setLabels: () => {},
    updateLabel: () => {},
    filteredEvents: []
})

export default GlobalContext;