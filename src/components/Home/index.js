import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Calender from "../Calender"
import CalenderContext from "../../context/CalenderContext"
import { faCalendar, faClockFour, faGlobeAmericas, faHorse, faPoop, faStar } from "@fortawesome/free-solid-svg-icons"





const Home =()=>(
   <CalenderContext.Consumer>
    {value=>{
        const{userScheduleDetails,isFormSubmitted} = value 

       console.log(isFormSubmitted)

        return (

            <div className="w-screen flex h-contain md:h-[130vh] h-[200vh] justify-center bg-slate-300 ">
     <div className="flex flex-col lg:flex-row lg:w-fit md:w-[80vw] 
      lg:h-fit md:h-fit px-22 md:px-10 justify-center m-5 pb-3 h-fit 
     rounded-md shadow-2xl mt-10 bg-white lg:justify-center ">

        {/* Logo and info div */}
        <div className={isFormSubmitted? "hidden":
        " w-contain md:w-[80vw] lg:w-[20vw] items-center md:h-fit *SMALL DEVICE*: h-fit  "}>

            {/* image div */}
            <div className="SMD - items-center  -SMD lg:w-fit  md:ml-5 md:w-[70vw] md:items-center flex flex-col"> 
            <img className="*SMALL DEVICE* h-30 w-24 "
            src="https://global.discourse-cdn.com/business7/uploads/fibery/original/2X/6/6cfd93782257bea97e161c9bc00d0ff9436cef37.png" alt="fiberyLogo"/>
            </div>
            {/* image div */}


            <hr/>
            {/* Text Div */}
            <div className="lg:w-[25vw] md:w-[70vw] p-5 h-1/2 flex flex-col  md:items-center lg:items-start">
                <h1 className="font-bold text-lg mb-3">Fibery Demo</h1>
                <p className="text-sm mb-3 text-gray-600 font-medium"><FontAwesomeIcon icon={faClockFour}/> 45 min</p>
               {/* Text Div */}
               
                {/* Dynamic Schedule Date time */}


               {userScheduleDetails.datetime != null ? ( <div>
                    <p className="text-sm mb-3 text-gray-600 font-medium">
                        <FontAwesomeIcon icon={faCalendar} className="mr-1"/>{userScheduleDetails.datetime}</p>
                        <p className="text-sm mb-3 text-gray-600 font-medium"><FontAwesomeIcon icon={faGlobeAmericas}/> Asian/ Calcutta, Time</p>
                </div>):(null)}

                 {/* Dynamic Schedule Date time */}


                <p className="text-sm md:w-[50vw] lg:w-[20vw] lg:mr-12">Book a meeting with our Fibery team. Talk to a real person about how to get your process set up with us 
                 <FontAwesomeIcon icon={faHorse} className="ml-1 text-pink-700"/> or not <FontAwesomeIcon icon={faPoop} className="text-yellow-900"/>
                </p>
                <p className="mt-5 mb-5 md:mb-0 text-sm text-blue-900 font-medium hover:font-bold  lg:block lg:mt-64
                hover:underline cursor-pointer ">Cookies Settings</p>
            </div>
        </div>

          {/* Logo and info div */}

        <hr 
        className={isFormSubmitted? "hidden":"border sm:hidden md:hidden lg:block border-gray-200 border-solid  lg:h-[90vh] mt-0 mb-6 lg:mx-10"}/>
        <Calender/>
    </div>
   </div>
        )
    }
    
    }
   </CalenderContext.Consumer>
)


export default Home