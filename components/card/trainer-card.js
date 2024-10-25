import Link from 'next/link'
import React from 'react'
import { FaClock, FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa'

const TrainerCard = ({trainer}) => {
  return (
    <div key={trainer.$id} className="bg-white rounded-lg p-2 shadow-sm flex">
    <img 
      src={trainer.image} 
      alt={trainer.name} 
      className="h-64  w-64 object-cover rounded-lg  border-2 border-primary mr-6" 
    />
    <div className="flex-1">
      <Link href={`/trainers/${trainer.$id}`}>
        <h2 className="text-2xl font-semibold text-primary mb-2 cursor-pointer">{trainer.name}</h2>
      </Link>
      <p className="text-gray-700 mb-3">{trainer.description}</p>
      <div className="flex items-center mb-2">
        <FaDollarSign className="text-green-600 mr-2" />
        <p className="text-lg font-bold text-gray-800">${trainer.price} per session</p>
      </div>
      <div className="flex items-center mb-2">
        <FaMapMarkerAlt className="text-gray-600 mr-2" />
        <p className="text-gray-600">{trainer.location}</p>
      </div>
      <div className="flex items-center">
        <FaClock className="text-gray-600 mr-2" />
        <p className="text-gray-600">Availability: {trainer.availability}</p>
      </div>
    </div>
  </div>
  )
}

export default TrainerCard