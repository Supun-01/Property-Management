import React, { useEffect, useState } from 'react';
import { IoArrowBackCircle } from "react-icons/io5";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { fetchPropertyById, updateProperty } from '../services/services';

function EditProperty() {
    const { id } = useParams(); // Get the property ID from the URL
    const [property, setProperty] = useState({
        title: '',
        type: '',
        purpose: '',
        price: '',
        status: false,
        description: ''
    });
    const navigate = useNavigate(); // Hook to navigate after submitting the form

    useEffect(() => {
        const getProperty = async () => {
            try {
                const response = await fetchPropertyById(id);
                setProperty(response.data); // Set the property data into state
            } catch (error) {
                console.error('Error fetching property:', error);
            }
        };

        getProperty();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProperty({
            ...property,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProperty(id, property); // Call the updateProperty function to update the data
            alert('Property updated successfully!');
            navigate('/'); // Redirect to the home page or another page after successful update
        } catch (error) {
            console.error('Error updating property:', error);
            alert('Failed to update property.');
        }
    };

    return (
        <div className="min-w-[600px] mx-auto p-6 bg-white shadow-xl rounded-lg">
            <div className='flex items-center mb-2'>
                <Link to="/"><IoArrowBackCircle className='text-4xl text-cyan-500 border-2 border-cyan-500 hover:text-cyan-600 rounded-full' /></Link>
                <h1 className="text-3xl mx-auto font-semibold text-center text-teal-600">Edit Property</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-lg font-medium text-gray-700">Title:</label>
                    <input
                        name="title"
                        value={property.title}
                        onChange={handleChange}
                        className="w-full border-2 border-cyan-500 rounded-lg py-2 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        type="text"
                    />
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700">Type:</label>
                    <input
                        name="type"
                        value={property.type}
                        onChange={handleChange}
                        className="w-full border-2 border-cyan-500 rounded-lg py-2 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        type="text"
                    />
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700">Purpose:</label>
                    <input
                        name="purpose"
                        value={property.purpose}
                        onChange={handleChange}
                        className="w-full border-2 border-cyan-500 rounded-lg py-2 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        type="text"
                    />
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700">Price:</label>
                    <input
                        name="price"
                        value={property.price}
                        onChange={handleChange}
                        className="w-full border-2 border-cyan-500 rounded-lg py-2 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        type="text"
                    />
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700">Status:</label>
                    <select
                        name="status"
                        value={property.status}
                        onChange={handleChange}
                        className="w-full border-2 border-cyan-500 rounded-lg py-2 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
                    >
                        <option value={true}>Available</option>
                        <option value={false}>Not-Available</option>
                    </select>
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700">Description:</label>
                    <textarea
                        name="description"
                        value={property.description}
                        onChange={handleChange}
                        className="w-full border-2 border-cyan-500 rounded-lg py-2 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        rows="4"
                    ></textarea>
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-cyan-500 text-white rounded-lg text-xl font-medium hover:bg-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition-all duration-200"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditProperty;
