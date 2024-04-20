import { faArrowLeft, faBomb, faBook, faCarrot, faChartBar, faDiamond, faFish, faFootball, faHorse, faKiwiBird, faLaptop, faMountain, faQuestion, faSun, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import Schedule from '../Schedule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Calender from '../Calender';
import CalenderContext from '../../context/CalenderContext';

import React, { useState } from 'react';

const FormPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState([]);
  const [isGuestAdd, setGuestAdd] = useState(false)
  const [isShowCalender, setShowCalender] = useState(false)
  const [isFormSubmitted, setformSubmit] = useState(false)

  
  return (
  <>
  {isFormSubmitted? (<Schedule/>):(<>
  {isShowCalender? (<Calender/>):(<CalenderContext.Consumer>
    {value=>{
      const {updateUserDetails,changeFormSubmitStatus} = value

      const handleNameChange = (e) => {
        setName(e.target.value);
      };
    
      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handleAddGuest = () => {
       setGuestAdd(prevState => !prevState)
      };
    
      const savedGuestInfo =(event)=>{
       setGuestAdd(event.target.value)
        
      }
    
    
    
      const handleRadioOptionChange =(e)=>{
        console.log(e.target.value)
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setformSubmit(prevState=> !prevState)
        updateUserDetails('userDetails', [name,true])
        changeFormSubmitStatus(true)
        setScheduleFix()
      };
    
      const goBackToCalender =()=>{
        setShowCalender(prevState => ! prevState)
      }
    
    const setScheduleFix=()=>{
      // 
    }
     
      

      return (
        <div className="flex justify-center items-center w-contain lg:h-[100vh] md:w-[70vw] lg:w-[40vw]  flex-col">
        <button className='h-10 w-10 text-blue-600 hover:bg-blue-700 hover:text-white rounded-2xl' onClick={goBackToCalender}><FontAwesomeIcon icon={faArrowLeft} className='text-lg'/></button>

      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md overflow-y-auto h-[70vh]"
        onSubmit={handleSubmit}
      >
         <h2 className="text-lg font-bold mb-4 ">Enter Details</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 text-sm" htmlFor="name">
            Name *
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 text-sm" htmlFor="email">
            Email *
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="account@refero.design"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        {/* Add Guest Button Here */}

        <div className="mb-4">
          <button
            className=" text-sm hover:bg-blue-700 hover:text-white text-blue-600 border-blue-500 border-2 py-1 px-2 rounded-xl focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleAddGuest}
          >
            Add Guests
          </button>
         
        </div>

         {/* Add Guest Button Here */}
       

        {/* Guest information input */}
        
        <div>
            {isGuestAdd? ( <textarea
        rows={4} 
        cols={50} 
        onBlur={savedGuestInfo}
        placeholder="Add Guest email address"
        className='border-2 border-gray-300 p-2 text-sm rounded-md'
      />):(null)}
        </div>
       

       {/* Guest information input*/}

        
        {/* Radio Button Collections */}
        <div className="mb-4">
          <p className="block text-gray-700 font-bold mb-2">
            I want Fibery to work for:*
          </p>
          <div className="flex items-center mb-2 ">
            <input
              className="mr-2 cursor-pointer"
              type="radio"
              id="myself"
              name="work-for"
              value="myself"
              onChange={handleRadioOptionChange}
            />
            <label htmlFor="myself" className='text-sm cursor-pointer'>
                <FontAwesomeIcon icon={faCarrot} className='mr-1 text-orange-700'/> Myself</label>
          </div>
          <div className="flex items-center mb-2 ">
            <input
              className="mr-2 cursor-pointer"
              type="radio"
              id="less-than-10"
              name="work-for"
              value="less-than-10"
            
              onChange={handleRadioOptionChange}
            />
            <label htmlFor="less-than-10" className='text-sm cursor-pointer'>
                <FontAwesomeIcon icon={faUserGroup} className='mr-1 text-blue-600'/> &lt; 10 people</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              className="mr-2 cursor-pointer"
              type="radio"
              id="10-50"
              name="work-for"
              value="10-50"
             
              onChange={handleRadioOptionChange}
            />
            <label htmlFor="10-50" className='text-sm cursor-pointer'> 
            <FontAwesomeIcon icon={faHorse} className='mr-1 text-pink-600'/> 10-50 people</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              className="mr-2 cursor-pointer"
              type="radio"
              id="50-plus"
              name="work-for"
              value="50-plus"
            
              onChange={handleRadioOptionChange}
            />
            <label htmlFor="50-plus" className='text-sm cursor-pointer'>
                <FontAwesomeIcon icon={faFootball} className='mr-1 text-red-950'/> 50+ people</label>
          </div>
        </div>

         {/* Radio Button Collections */}


        {/* Checkbox buttons */}

        <div className="mb-4">
          <p className="block text-gray-700 font-bold mb-2">You are more about:*</p>

          <div className="flex items-center mb-2">
            <input
              className="mr-2 cursor-pointer"
              type="checkbox"
              id="leadership"
              name="more-about"
              value="leadership"
              // onChange={handleOptionChange}
            />
            <label htmlFor="leadership" className='text-sm cursor-pointer'>
                <FontAwesomeIcon icon={faMountain} className='mr-1 text-yellow-500'/> Leadership</label>
          </div>


          <div className="flex items-center mb-2">
            <input
              className="mr-2 cursor-pointer"
              type="checkbox"
              id="consulting"
              name="more-about"
              value="consulting"
              // onChange={handleOptionChange}
            />
            <label htmlFor="consulting" className='text-sm cursor-pointer'>
                <FontAwesomeIcon icon={faKiwiBird} className='mr-1 text-red-800'/>
                Consulting</label>
          </div>


          <div className="flex items-center mb-2">
            <input
              className="mr-2 cursor-pointer"
              type="checkbox"
              id="product-management"
              name="more-about"
              value="product-management"
             // onChange={handleOptionChange}
            />
            <label htmlFor="product-management" className='text-sm cursor-pointer '>
                <FontAwesomeIcon icon={faSun} className='mr-1 text-orange-600'/> 
                 Product Management</label>
          </div>


          <div className="flex items-center mb-2">
            <input
              className="mr-2 cursor-pointer"
              type="checkbox"
              id="Design"
              name="more-about"
              value="product-management"
             // onChange={handleOptionChange}
            />
            <label htmlFor="Design" className='text-sm cursor-pointer'>
            <FontAwesomeIcon icon={faChartBar} className='mr-1 text-violet-700'/> 
                Design</label>
          </div>


          <div className="flex items-center mb-2">
            <input
              className="mr-2 cursor-pointer"
              type="checkbox"
              id="Engineering"
              name="more-about"
              value="product-management"
             // onChange={handleOptionChange}
            />
            <label htmlFor="Engineering" className='text-sm cursor-pointer'>
            <FontAwesomeIcon icon={faLaptop} className='mr-1'/> 
                Engineering</label>
          </div>


          <div className="flex items-center mb-2">
            <input
              className="mr-2 cursor-pointer"
              type="checkbox"
              id="Sales"
              name="more-about"
              value="product-management"
             // onChange={handleOptionChange}
            />
            <label htmlFor="Sales" className='text-sm cursor-pointer'>
            <FontAwesomeIcon icon={faFish} className='mr-1 text-pink-600'/> 
                Sales</label>
          </div>


          <div className="flex items-center mb-2">
            <input
              className="mr-2 cursor-pointer"
              type="checkbox"
              id="Marketing"
              name="more-about"
              value="product-management"
             // onChange={handleOptionChange}
            />
            <label htmlFor="Marketing" className='text-sm cursor-pointer'>
            <FontAwesomeIcon icon={faBomb} className='mr-1 '/> 
                Marketing</label>
          </div>


          <div className="flex items-center mb-2">
            <input
              className="mr-2 cursor-pointer"
              type="checkbox"
              id="Resources"
              name="more-about"
              value="product-management"
             // onChange={handleOptionChange}
            />
            <label htmlFor="Resources" className='text-sm cursor-pointer'>
            <FontAwesomeIcon icon={faDiamond} className='mr-1 text-blue-800'/> 
                Human Resources</label>
          </div>


          <div className="flex items-center mb-2">
            <input
              className="mr-2 cursor-pointer"
              type="checkbox"
              id="Education"
              name="more-about"
              value="product-management"
           
            />
            <label htmlFor="Education" className='text-sm cursor-pointer'>
            <FontAwesomeIcon icon={faBook} className='mr-1 text-green-900'/> 
                Education</label>
          </div>


          <div className="flex items-center mb-2">
            <input
              className="mr-2 cursor-pointer"
              type="checkbox"
              id="Else"
              name="more-about"
              value="product-management"
        
            />
            <label htmlFor="Else" className='text-sm cursor-pointer'>
            <FontAwesomeIcon icon={faQuestion} className='mr-1 text-red-700'/> 
                Something Else</label>
          </div>


        </div>

        {/* Checkbox buttons */}


        {/* 1. Addition Information */}
       <div>
        <p className='text-sm font-medium mb-2 mt-5'>Please, share anything that will help prepare for our meeting</p>
        <textarea
        rows={2} 
        cols={30} 
        className='border-2 border-gray-300 p-2 text-sm rounded-md'
      />
       </div>

         {/* 1. Addition Information */}

        {/* 2. Addition Information */}
       <div className='mb-4'>
        <p className='text-sm font-medium mb-2 mt-5'>Please, share with us the name of your Fibery workspace (if any)</p>
        <textarea
        rows={1} 
        cols={30} 
        className='border-2 border-gray-300 p-2 text-sm rounded-md'
      />
       </div>

         {/* 2. Addition Information */}


        {/* Submit button */}
        <button
          className="bg-blue-700 hover:bg-blue-800 text-white 
          py-1 px-2  focus:outline-none text-sm
          focus:shadow-outline rounded-xl" 
          type="submit"
 
        >
          Schedule Event
        </button>
         {/* Submit button */}

      </form>
    </div>
      )
    }}
  </CalenderContext.Consumer>)}
  </>)}
  </>
  );
};

export default FormPage;