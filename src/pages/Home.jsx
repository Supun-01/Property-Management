import React from 'react'
import { properties } from '../assets/TestAPI'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">Title</th>
                        <th className="border border-gray-300 px-4 py-2">Type</th>
                        <th className="border border-gray-300 px-4 py-2">Purpose</th>
                        <th className="border border-gray-300 px-4 py-2">Price</th>
                        <th className="border border-gray-300 px-4 py-2">Status</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {properties.length > 0 ? (
                        properties.map((property) => (
                            <tr key={property.id} className="hover:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">{property.title}</td>
                                <td className="border border-gray-300 px-4 py-2">{property.type}</td>
                                <td className="border border-gray-300 px-4 py-2">{property.purpose}</td>
                                <td className="border border-gray-300 px-4 py-2">${property.price.toLocaleString()}</td>
                                <td className="border border-gray-300 px-4 py-2">{property.status}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <div className="flex justify-center gap-2">
                                        <Link to="/edit"> <button className="bg-blue-500 font-bold text-white px-4 py-1 rounded hover:bg-blue-600">
                                            Edit
                                        </button></Link>
                                        <button className="bg-red-600 font-bold text-white px-2 py-1 rounded hover:bg-red-700">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center border border-gray-300 px-4 py-2">
                                No properties found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className='flex my-5 justify-center'>
                <Link to="/add"><button className='bg-green-500 font-bold hover:bg-green-600 text-white px-2 py-1 rounded'>Add New Property</button></Link>
            </div>
        </div>
    )
}

export default Home
