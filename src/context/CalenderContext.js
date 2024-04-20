import React from "react"


const CalenderContext = React.createContext(
    {
        scheduleList:[],
        userScheduleDetails:[],
        isFormSubmitted:false,
        changeDateStatus:()=>{},
        changeTimeStatus:()=>{},
        updateUserDetails:()=>{},
        changeFormSubmitStatus:()=>{}
    }
)




export default CalenderContext