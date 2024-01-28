import { useState, ChangeEvent, FormEvent } from 'react';
import Swal from 'sweetalert2';

const ReservationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        numberOfPeople: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);

        // Show success notification
        Swal.fire({
            icon: 'success',
            title: 'Reservation Successful!',
            text: 'Your reservation has been successfully submitted.',
        });

        // Reset the form data
        setFormData({
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            numberOfPeople: '',
        });
    };

    return (
        <div className="card reservation-card" id="booking">
            <div className="card-body">
                <h2 className="card-title">Reservation Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date:</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Time:</label>
                        <input
                            type="time"
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numberOfPeople">Number of People:</label>
                        <input
                            type="number"
                            id="numberOfPeople"
                            name="numberOfPeople"
                            value={formData.numberOfPeople}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit Reservation
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ReservationForm;
