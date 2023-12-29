import { useState, useContext, useEffect } from "react";

import CalendarHeader from "./components/CalendarHeader";
import CalendarMonth from "./components/CalendarMonth";
import CalendarSideBar from "./components/CalendarSideBar";

import GlobalContext from "./context/GlobalContext";

import { getMonth } from "./utils";
import EventModal from "./commonComponents/EventModal";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth())

  const { monthIndex, showEventModal } = useContext(GlobalContext)

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])

  return (
    <>
      {showEventModal &&
        <EventModal />
      }
      <div className={"h-screen flex flex-col"}>
        <CalendarHeader />
        <div className={"flex flex-1"}>
          <CalendarSideBar />
          <CalendarMonth currentMonth={currentMonth} />
        </div>
      </div>
    </>
  );
}

export default App;
