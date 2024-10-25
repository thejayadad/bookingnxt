'use client';
import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa'; // Importing icons for the date and time
import { FiStar } from 'react-icons/fi';

const TrainerPage = () => {
  // Simulated trainer data, replace with actual data fetching
  const trainer = {
    image: 'https://dummyimage.com/420x260', // Replace with actual image URL
    name: 'Lagree Mega Max Class',
    description: 'Join this high-intensity workout that focuses on strength, endurance, and flexibility using the Megaformer.',
    price: 45,
    location: 'Studio Location',
  };

  // State for date and time selection
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // State to control visibility of the bottom nav
  const [isBottomNavVisible, setBottomNavVisible] = useState(false);

  const handleBooking = () => {
    // Handle the booking logic here
    alert(`Booking confirmed for ${selectedDate} at ${selectedTime}`);
  };

  // Handle scroll event to toggle bottom navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Show bottom nav when not at the top of the page
      if (scrollPosition > 0) {
        setBottomNavVisible(true);
      } else {
        setBottomNavVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-xl p-6 bg-white shadow-md rounded-lg">
        <div className="flex space-x-4 items-center mb-4">
          <h1 className="text-3xl font-bold text-primary">{trainer.name}</h1>
          <p className="mr-4">{trainer.location}</p>
          <span>|</span>
          <p className="flex space-x-1">
            <FiStar className='h-4 w-4' />
            <FiStar className='h-4 w-4' />
            <FiStar className='h-4 w-4' />
            <FiStar className='h-4 w-4' />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center items-center">
            <img src={trainer.image} alt={trainer.name} className="w-full h-auto rounded-lg shadow-md" />
          </div>
          <div className='flex flex-col gap-6 h-auto p-2 rounded-xl'>
            <span className='font-light'>CATEGORY</span>
            <h1 className="text-xl font-bold text-primary">{trainer.name}</h1>
            <div className='flex items-center space-x-4'>
              <img
                src='/trainer1.png'
                className='bg-gray-100 rounded-full h-14 w-14 border'
                alt="Trainer"
              />
              <p className='text-gray-700 font-light leading-tight'>Email</p>
            </div>
            <div className='flex justify-between space-x-2'>
              <select 
                value={selectedTime} 
                onChange={(e) => setSelectedTime(e.target.value)} 
                className="border rounded-md p-2 w-full" 
                required
              >
                <option value="">Select Date</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
              </select>
              <select 
                value={selectedTime} 
                onChange={(e) => setSelectedTime(e.target.value)} 
                className="border rounded-md p-2 w-full" 
                required
              >
                <option value="">Select Time</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
              </select>
            </div>
            <button 
              onClick={handleBooking} 
              className='bg-purple-300 py-2 text-xl mt-16'
            >
              Book
            </button>
          </div>
        </div>

        <div className='border-t mt-24'>
          <div className='flex flex-col space-y-6 mt-8'>
            <h1 className='text-2xl font-bold text-primary'>About The Class</h1>
            <h2 className='font-light text-gray-700'>DESCRIPTION</h2>
            <p className='text-gray-900 lg:w-2/4'>{trainer.description}</p>
          </div>
        </div>

        <div className='border-t mt-24'>
          <div className='flex flex-col space-y-8 mt-8 mb-8'>
            <h1 className='text-2xl font-bold text-primary'>Customer Reviews</h1>
            <div>
              5 out of 5
            </div>
            <div className='w-full border-t'>
              <div className='py-8 flex flex-wrap md:flex-nowrap'>
                <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
                  <span className='font-semibold title-font text-gray-700'>Email</span>
                  <span className='mt-1 text-gray-500 text-sm'>DATE</span>
                </div>
                <div className='md:flex-grow'>
                  <p className="flex space-x-1">
                    <FiStar className='h-4 w-4' />
                    <FiStar className='h-4 w-4' />
                    <FiStar className='h-4 w-4' />
                    <FiStar className='h-4 w-4' />
                  </p>
                  <h1 className='pt-4'>Title</h1>
                  <p className='text-gray-900 lg:w-2/3'>description Text is about what's going on in this trainer class and how to get in the class and make a difference in your health</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        {isBottomNavVisible && (
          <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-between items-center border-t">
            <h2 className="text-xl font-bold text-primary">{trainer.name}</h2>
            <button 
              onClick={handleBooking} 
              className='bg-purple-300 py-2 px-4 w-1/3 lg:w-2/4 text-white rounded-md'
            >
              Book Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainerPage;
