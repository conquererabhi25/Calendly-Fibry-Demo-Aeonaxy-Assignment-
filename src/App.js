import { useState} from "react";
import Home from "./components/Home";
import Calender from "./components/Calender";
import CalenderContext from "./context/CalenderContext";
import Schedule from "./components/Schedule";


const scheduleList=[
  
  {"id":1, "day":27, "fulldate":"Monday, November 27","timings":[
      {"id":1, "time":"10:00 am","isTimeChoose":false}, {"id":2, "time":"10:30 am","isTimeChoose":false}, {"id":3, "time":"11:00 am" ,"isTimeChoose":false}, 
      {"id":4, "time":"11:30 am","isTimeChoose":false}, {"id":5, "time":"12:00 pm","isTimeChoose":false}, {"id":6, "time":"12:30 pm","isTimeChoose":false}, 
      {"id":7, "time":"2:00 pm","isTimeChoose":false} ,{"id":8, "time":"2:30 pm","isTimeChoose":false}, {"id":9, "time":"3:00 pm","isTimeChoose":false},{"id":10, "time":"3:30 pm","isTimeChoose":false}
  ],"isDateSelected":false, "isTimeSlected":false},
  {"id":2, "day":28,
  "fulldate":"Tuesday, November 28", "timings":[
          
          {"id":1, "time":"11:30 am"}, {"id":2, "time":"12:00 pm"}, {"id":3, "time":"12:30 pm"}, 
          {"id":4, "time":"2:00 pm"} ,{"id":5, "time":"2:30 pm"}, {"id":6, "time":"3:00 pm"},
      ],"isDateSelected":false, "isTimeSlected":false
  },
  {"id":3, "day":29,
  "fulldate":"Thursday, November 29", "timings":[
          {"id":1, "time":"2:00 pm"} ,{"id":2, "time":"2:30 pm"}, {"id":3, "time":"3:00 pm"},
          {"id":4, "time":"3:30 pm"},{"id":5, "time":"4:00 pm"}
      ], "isDateSelected":false, "isTimeSlected":false
  },
  {"id":4, "day":30,
  "fulldate":"Friday, November 30", "timings":[
          {"id":1, "time":"10:00 am"}, {"id":2, "time":"10:30 am"}, {"id":3, "time":"11:00 am"}, 
          {"id":4, "time":"11:30 am"}, {"id":5, "time":"12:00 pm"}, {"id":6, "time":"12:30 pm"}, 
          {"id":7, "time":"2:00 pm"} ,{"id":8, "time":"2:30 pm"}, {"id":9, "time":"3:00 pm"},
      ],"isDateSelected":false, "isTimeSlected":false
  }
]



function App() {
  const [myScheduleList, setSchedule] = useState(scheduleList)
  const [userScheduleDetails, setUserScheduleList] = useState([])
  const [isFormSubmitted,setFormSubmitted] = useState(false)


  const changeDateStatus = (id) => {
    setSchedule(prevSchedule => {
      return prevSchedule.map(item => {
        if (item.id === id) {
          return { ...item, isDateSelected: true };
        } else {
          return { ...item, isDateSelected: false };
        }
      });
    });
  };
  
  
    // console.log(myScheduleList);


    const updateUserDetails = (key, value) => {
      setUserScheduleList(prevSchedule => ({
        ...prevSchedule,
        [key]: value
      }));
    };
    
    const changeTimeStatus = (dayId, timeId) => {
      // Find the day in the scheduleList
      const dayDetails = scheduleList.find((eachDay) => eachDay.id === dayId);
      
      if (dayDetails) {
        // Find the specific time slot in the timings array
        const timeDetails = dayDetails.timings.find((eachTime) => eachTime.id === timeId);
        
        if (timeDetails) {
          // Toggle the isTimeChoose property
          const updatedTimeDetails = { ...timeDetails, isTimeChoose: !timeDetails.isTimeChoose };
          
          // Update the timings array within the dayDetails
          const updatedTimings = dayDetails.timings.map((eachTime) =>
            eachTime.id === timeId ? updatedTimeDetails : eachTime
          );
    
          // Toggle the isDateSelected property
          const updatedDayDetails = { ...dayDetails, isDateSelected: !dayDetails.isDateSelected };
    
          // Update the scheduleList
          const updatedScheduleList = scheduleList.map((eachDay) =>
            eachDay.id === dayId ? { ...updatedDayDetails, timings: updatedTimings } : eachDay
          );
    
          // Set the updated scheduleList
          setSchedule(updatedScheduleList);
        }
      }
    };
    

    const changeFormSubmitStatus =(value)=>{
      setFormSubmitted(true)
    }

   // console.log(userScheduleDetails)

  return (
    <>
    <CalenderContext.Provider value={{ scheduleList: myScheduleList, changeDateStatus: changeDateStatus,
    changeDateStatus:changeDateStatus, changeTimeStatus:changeTimeStatus, userScheduleDetails:userScheduleDetails,
    updateUserDetails:updateUserDetails,isFormSubmitted:isFormSubmitted,changeFormSubmitStatus:changeFormSubmitStatus
    }}>
  <Home />
</CalenderContext.Provider>

    </>
  
  );
}

export default App;
