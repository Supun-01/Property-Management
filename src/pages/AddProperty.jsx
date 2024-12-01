import React from 'react'
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';

function AddProperty() {
    return (
        <div className="min-w-[600px] mx-auto p-6 bg-white shadow-xl rounded-lg">
            <div className='flex items-center mb-2'>
                <Link to="/"><IoArrowBackCircle className='text-4xl text-cyan-500 border-2 border-cyan-500 hover:text-cyan-600 rounded-full' /></Link>
                <h1 className="text-3xl mx-auto font-semibold text-center text-teal-600">Add Property</h1>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-lg font-medium text-gray-700">Title:</label>
                    <input className="w-full border-2 border-cyan-500 rounded-lg py-2 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-300" type="text" />
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700">Type:</label>
                    <input className="w-full border-2 border-cyan-500 rounded-lg py-2 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-300" type="text" />
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700">Purpose:</label>
                    <input className="w-full border-2 border-cyan-500 rounded-lg py-2 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-300" type="text" />
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700">Price:</label>
                    <input className="w-full border-2 border-cyan-500 rounded-lg py-2 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-300" type="text" />
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700">Status:</label>
                    <input className="w-full border-2 border-cyan-500 rounded-lg py-2 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-300" type="text" />
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700">Description:</label>
                    <textarea className="w-full border-2 border-cyan-500 rounded-lg py-2 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-300" rows="4"></textarea>
                </div>

                <div className="text-center">
                    <button className="px-6 py-2 bg-cyan-500 text-white rounded-lg text-xl font-medium hover:bg-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition-all duration-200">Submit</button>
                </div>
            </div>
        </div>

    )
}

export default AddProperty
