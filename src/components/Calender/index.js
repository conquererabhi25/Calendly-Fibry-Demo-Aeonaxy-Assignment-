import { useState } from "react";
import CalenderContext from "../../context/CalenderContext"
import FormPage from "../UserDetails";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, angledown, faAngleDown, faArrowLeft, faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons';



const timings =[
    {"id":1, "time":"10:00 am"}, {"id":2, "time":"10:30 am"}, {"id":3, "time":"11:00 am"}, 
    {"id":4, "time":"11:30 am"}, {"id":5, "time":"12:00 pm"}, {"id":6, "time":"12:30 pm"}, 
    {"id":7, "time":"2:00 pm"} ,{"id":8, "time":"2:30 pm"}, {"id":9, "time":"3:00 pm"},
]

const Calender =()=>{
    const [isProceedForm, setProceedForm] = useState(false);
    const [userSelectedTime, setUserSelectedTime] = useState(null)

    return(
   <>
   {isProceedForm? (<FormPage/>):(     <CalenderContext.Consumer>
    {value=>{
        const {scheduleList,changeDateStatus,changeTimeStatus,updateUserDetails} =value
        
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        const dateSelected=(event)=>{
            changeDateStatus(event.target.value)
        }

        const onTimeSelection =(dayId, timeId)=>{
            changeTimeStatus(dayId,timeId)
        }

        const proceedToForm = (event) => {
            setProceedForm(prevState => !prevState);
            updateUserDetails('datetime', event.target.value)
          };

      // console.log(isProceedForm)

        return(
            <div className=" flex flex-col w-[60vw] h-contain mr-20 items-center p-2 ml-5   md:w-[90vw] md:mt-12 md:items-start md:ml-0
              lg:h-fit lg:w-[40vw] lg:mt-20 
             ">
                 <p className="items-center font-bold text-sm mb-4 md:text-start">Select Date and Time</p>
            {/* Calender Starts from here */}

            {/* calender and Times div below */}
            <div className="flex flex-col  md:flex-row md:w-[80vw]  lg:w-20  ">
               
               {/* calender Wrapper div */}

            <div className=" w-[40vw] h-contain flex flex-col md:mr-10 lg:mr-0">


                <div className="text-center ml-8 w-[60vw] lg:w-[28vw] md:w-[50vw]">
                    <h1 className=" mb-7 font-medium  cursor-pointer ">
                    <FontAwesomeIcon icon={faAngleLeft} 
                    className="mr-5 hover:font-bold cursor-pointer"/> November 2023 
                    <FontAwesomeIcon icon={faAngleRight} className="ml-5 hover:font-bold cursor-pointer"/>
                    </h1></div>


                <div className="flex">
                <div className="flex flex-col">
                <ul className="flex w-30 md:w-96 justify-evenly mr-1 mt-2 mb-3">
                    <li className="text-xs  hover:underline cursor-pointer font-medium">MON</li>
                    <li className="text-xs hover:underline cursor-pointer font-medium">TUE</li>
                    <li className="text-xs hover:underline cursor-pointer font-medium">WED</li>
                    <li className="text-xs hover:underline cursor-pointer font-medium">THU</li>
                    <li className="text-xs hover:underline cursor-pointer font-medium">FRI</li>
                    <li className="text-xs hover:underline cursor-pointer font-medium">SAT</li>
                    <li className="text-xs hover:underline cursor-pointer font-medium">SUN</li>
                </ul>
    
                {/* Date Number 1st row */}
                <ul className="flex w-64 md:w-96 justify-evenly mt-5 mb-2 text-slate-400">
                <li className="text-md  text-white text-center">0</li>
                    <li className="text-md  text-white  text-center">0</li>
                    <li className="text-md  text-center">1</li>
                    <li className="text-md   text-center ">2</li>
                    <li className="text-md   text-center ">3</li>
                    <li className="text-md   text-center ">4</li>
                    <li className="text-md   text-center  mr-0">5</li>
                </ul>
                 {/* Date Number 2nd row */}
                <ul className="flex w-64 md:w-96 justify-evenly mt-5 mb-2 text-slate-400">
                <li className="text-md  text-center ">6</li>
                    <li className="text-md  text-right ml-2">7</li>
                    <li className="text-md  text-center ml-2">8</li>
                    <li className="text-md  text-center ml-2">9</li>
                    <li className="text-md  text-center ">10</li>
                    <li className="text-md  text-center ">11</li>
                    <li className="text-md  text-center  mr-0">12</li>
                </ul>
                 {/* Date Number 3rd row */}
                <ul className="flex w-64 md:w-96  justify-evenly mt-5 mb-2 text-slate-400">
                <li className="text-md  text-center ">13</li>
                    <li className="text-md  text-center ">14</li>
                    <li className="text-md  text-center ">15</li>
                    <li className="text-md  text-center ">16</li>
                    <li className="text-md  text-center ">17</li>
                    <li className="text-md  text-center ">18</li>
                    <li className="text-md  text-center  mr-0">19</li>
                </ul>
                 {/* Date Number 4th row */}
                <ul className="flex w-64 md:w-96  justify-evenly mt-5 mb-2 text-slate-400">
                <li className="text-md  text-center ">20</li>
                    <li className="text-md  text-center ">21</li>
                    <li className="text-md  text-center ">22</li>
                    <li className="text-md  text-center ">23</li>
                    <li className="text-md  text-center ">24</li>
                    <li className="text-md  ">25</li>
                    <li className="text-md  text-center  mr-0 underline">26</li>
                </ul>
                
                {/* Date Number 5th row */}
                <ul className="flex w-40 md:w-56 justify-evenly mt-5">
                {scheduleList.map((eachDate)=>(
                <li key={eachDate.id} 
                className={eachDate.isDateSelected? "text-xs mr-1  bg-blue-600 rounded-2xl p-2 font-bold text-white hover:bg-blue-400 cursor-pointer" : "text-sm bg-blue-200 rounded-2xl p-2 font-bold text-blue-600 hover:bg-blue-400 cursor-pointer"} 
                onClick={dateSelected} value={eachDate.id}>{eachDate.day}</li>
            ))}
                </ul>
                </div>
         
                </div>
                 {/* calender Wrapper div without */}


                 <div className="select-wrapper cursor-pointer mt-2 md:mt-20 mb-8 md:block hidden">
          
            <p className="items-center font-bold text-sm mb-2 ml-3">Time Zone</p>
            <p className="text-sm ml-4"><FontAwesomeIcon icon={faGlobe} /> {timezone} Time (1:36)  
            <FontAwesomeIcon icon={faAngleDown} className="ml-2 "/></p>
      </div>
                 </div>
              
                    {/* calender Wrapper div */}


        {/* Show respective timings */}

          <div className="md:ml-7 lg:ml-0  ">
          {scheduleList.map((eachday)=>{
                    if(eachday.isDateSelected){
                        return(
                           <div key={eachday.id}>
                            <p className="mb-2 mt-7 md:mb-9 text-center">{eachday.fulldate}</p>
                                <ul className="h-80 w-48 overflow-y-auto scrollbar-thin scrollbar-thumb-black 
                            scrollbar-track-white scrollbar-track-rounded p-3" key={eachday.id}>
    {eachday.timings.map((eachtime)=>(
        <li key={eachtime.id}>
            {eachtime.isTimeChoose? (<div className="flex">
                <p className="text-white text-md pt-2 font-medium border-[1px] 
                p-1 w-20 bg-gray-500 rounded-md mb-2  mr-1 h-10 text-center items-center">{eachtime.time}</p>
                <button className="text-white text-md font-medium border-[1px] border-blue-700  bg-blue-700
                 p-1 w-20 rounded-md mb-2 hover:border-white text-center" value={`${eachtime.time} - ${eachday.fulldate}`}onClick={proceedToForm}>Next</button>
            </div>):(<button type="button"  value={eachtime.id} 
            className="text-blue-700 font-medium border-[1px]
             border-blue-700 p-2 w-40 rounded-md  mb-2 hover:border-2" 
          onClick={() => onTimeSelection(eachday.id, eachtime.id)}
            key={eachtime.id}> {eachtime.time}</button>)}
        </li>
    ))}
</ul>
                           </div>
                        )
                    }
                })}
          </div>
             
              {/* Show respective timings */}
          <div className="select-wrapper cursor-pointer mt-2 md:mt-20 mb-8 md:hidden">
          <p className="mt-5 ml-4 text-sm text-blue-900 font-medium hover:font-bold lg:hidden
                hover:underline cursor-pointer ">Cookies Settings</p>
            <p className="items-center font-bold text-sm mb-2 ml-3">Time Zone</p>
            <p className="text-sm ml-4"><FontAwesomeIcon icon={faGlobe} /> {timezone} Time (1:36)  
            <FontAwesomeIcon icon={faAngleDown} className="ml-2 "/></p>
      </div>
            </div>
             {/* calender and Times div above */}
            
        </div>
        )
    
    
    }
    }

    
</CalenderContext.Consumer>)}
   </>
    )
}

export default Calender