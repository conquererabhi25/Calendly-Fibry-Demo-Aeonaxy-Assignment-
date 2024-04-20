import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CalenderContext from "../../context/CalenderContext"
import { faCalendar, faGlobeAsia,  faUser, faVideoCamera, faCheckCircle } from "@fortawesome/free-solid-svg-icons"


const Schedule =()=>(

    <CalenderContext.Consumer>
        {value=>{
            const{userScheduleDetails} = value 

            return (
                <div className="flex flex-col items-center mt-10 w-[90vw] md:w-[70vw] lg:w-[40vw] p-2">
                    <img src="https://www.corporatephotographerslondon.com/wp-content/uploads/2023/02/LinkedIn_Profile_Photo.jpg" 
                    alt="user" className="size-10"/>
                <h1 className="text-lg font-bold"><FontAwesomeIcon icon={faCheckCircle}
                className="text-green-800 mr-1"
                />You are scheduled</h1>
                <p className="text-xs mb-4 mt-2">A calender invitation has been sent to your email address</p>
                <div className="border-2 border-gray-500 rounded-md p-2 sm:w-80 w-64">
                    <h1 className="font-bold mb-2">Fibery Demo</h1>

                    <p className="text-xs mb-2 font-medium text-gray-600"><FontAwesomeIcon icon={faUser} className="mr-1 text-blue-700"/>
                    {userScheduleDetails.userDetails}</p>
                    <p className="text-xs mb-2 font-medium text-gray-600"><FontAwesomeIcon icon={faCalendar} className="mr-1 text-red-600"/>
                    {userScheduleDetails.datetime}
                    </p>
                    <p className="text-xs mb-2 font-medium text-gray-600"><FontAwesomeIcon icon={faGlobeAsia} className="mr-1 text-green-700"/>
                    Asia/Culcutta,Time
                    </p>
                    <p className="text-xs mb-2 font-medium text-gray-600">
                        <FontAwesomeIcon icon={faVideoCamera} className="mr-1 text-yellow-600"/>
                        Web conferencing details to follow.
                    </p>
                  
                </div>

                <hr className="border border-gray-500 border-solid border-t-1 sm:w-80 w-64 mt-10"/>

                <div className="flex flex-col items-center justify-end mt-12 md:mb-20 text-center">
                    <p className="text-xs font-bold mb-1">Schedule your own meeting with Calendly for free</p>
                    <p className="text-xs mb-2">Eliminate the back-and-forth emails for finding time</p>
                    
                    <div className="flex sm:flex-row flex-col">
                        <button>
                            <div className="flex border-2 border-gray-600 px-3 py-1 rounded-2xl mr-7 w-40 mb-4 sm:mb-0 hover:bg-slate-500 hover:text-white">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" 
                                alt="google" className="size-5 mr-1"/>
                                <p className="text-xs">Sign up with google</p>
                            </div>
                        </button>
                        <button>
                            <div className="flex border-2 border-gray-600 px-3 py-1 rounded-2xl w-40 hover:bg-slate-500 hover:text-white">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYodnxSbCB1x3H7FzBBgcIvLHpYUhnKla1Pp_TYNKKKA&s"
                                 alt="google" className="size-5 mr-1"/>
                                <p className="text-xs">Sign up with google</p>
                            </div>
                        </button>
                    </div>
                    <div className="flex mt-3">
                        <p className="text-xs mr-10 text-blue-600 font-semibold cursor-pointer hover:underline">Cookies Settings</p>
                        <p className="text-xs text-blue-600 font-semibold cursor-pointer hover:underline">Sign up with work email</p>
                    </div>
                </div>
            </div>
            )
        }}
    </CalenderContext.Consumer>
   
)


export default Schedule