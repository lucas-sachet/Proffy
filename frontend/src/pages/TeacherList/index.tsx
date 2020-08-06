import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

import './styles.css';


function TeacherList() {

    const [teachers, setTeachers] = useState([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });

        setTeachers(response.data);
    }
    return (
        <div id="page-teacher-list" className="container">
           <PageHeader title="These are the available Proffys.">
               
                <form id="search-teachers" onSubmit={searchTeachers}>
                <Select 
                name="subject" 
                label="Subject" 
                value={subject}
                onChange={e => { setSubject(e.target.value) }}
                options={[
                    { value: 'Art', label: 'Art' },
                    { value: 'Biology', label: 'Biology' },
                    { value: 'Maths', label: 'Maths' },
                    { value: 'Algebra', label: 'Algebra' },
                    { value: 'Geometry', label: 'Geometry' },
                    { value: 'Science', label: 'Science' },
                    { value: 'Physics', label: 'Physics' },
                    { value: 'Chemistry', label: 'Chemistry' },
                    { value: 'Geography', label: 'Geography' },
                    { value: 'History', label: 'History' },
                    { value: 'Citizenship', label: 'Citizenship' },
                    { value: 'Physical Education', label: 'Physical Education' },
                    { value: 'Business Studies', label: 'Business Studies' },
                    { value: 'Home Economics', label: 'Home Economics' },
                    { value: 'Music', label: 'Music' },
                    
                ]}
                />
                <Select 
                name="week_day" 
                label="Day of the week"
                value={week_day}
                onChange={e => { setWeek_day(e.target.value) }} 
                options={[
                    { value: '0', label: 'Monday' },
                    { value: '1', label: 'Tuesday' },
                    { value: '2', label: 'Wednesday' },
                    { value: '3', label: 'Thursday' },
                    { value: '4', label: 'Friday' },
                    { value: '5', label: 'Saturday' },
                    { value: '6', label: 'Sunday' },
                    
                ]}
                />
                   
                <Input 
                type="time" 
                name="time" 
                label="Time"
                value={time}
                onChange={e => { setTime(e.target.value) }}
                />

                <button type='submit'>
                    Search
                </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher :Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
            </main> 
        </div>
    )
}

export default TeacherList;