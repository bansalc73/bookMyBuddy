import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointByDate from '../../AppointMent/AppointByDate/AppointByDate';
import './Dashboard.css';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';

const formatDate = (date) => {
    const isoDate = date.toISOString();
    return isoDate.split('T')[0];
};

const Dashboard = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointByDate, setAppointments] = useState([]);
    const { data, loading, error } = useFetch(`${baseUrl}/auth/patients`);
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    const showAllPatientsList = () =>{
        setAppointments(data);
    }

    useEffect(() =>{
        const fetchData = async () => {
            try {
                const userData = JSON.parse(localStorage.getItem('user'));
                console.log("hu")
                userData.date = selectedDate.toISOString()
                console.log(userData);
                const res = await axios.post(`${baseUrl}/auth/appointByDate`, {userdata: userData})
                setAppointments(res.data)
            } catch (err) {
                console.log("Hi")
                console.log(err)
            }
        }
        fetchData();
    }, [selectedDate])

    return (
        <section className='container row g-0'>
            <div className='col-md-3'>
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <div className=''>
                    <div className='mt-5 mb-2 d-flex justify-content-between'>
                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                            className="calender-design"
                        />
                        <div>
                            <button className='btn btn-primary' onClick={showAllPatientsList}>Show All Apppointments</button>
                        </div>
                    </div>
                    <div>
                        <AppointByDate appopintMent={appointByDate} key={10} selectedDate={selectedDate}></AppointByDate>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;