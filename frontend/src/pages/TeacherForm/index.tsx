import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';



function TeacherForm() {
    
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
        
        scheduleItems.push();
    }

    return (
        <div id="page-teacher-form" className="container">
        <PageHeader
         title="How amazing that you want to teach." 
         description="The first step is to fill out this application form."
         /> 

         <main>
            <fieldset>
                <legend>Your data</legend>
                <Input name="name" label="Name" />
                <Input name="avatar" label="Avatar" />
                <Input name="whatsapp" label="Whatsapp" />  
                <Textarea name="bio" label="Biography" />
            </fieldset>

            <fieldset>
                <legend>About the class</legend>
                <Select 
                name="subject" 
                label="Subject" 
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
                <Input name="cost" label="Cost of your class per hour" />  
            </fieldset>
            
            <fieldset>
                <legend>
                    Available times
                    <button type="button" onClick={addNewScheduleItem}>
                         + New time
                    </button>
                </legend>

            {scheduleItems.map(scheduleItem => {
                return(
                    <div key={scheduleItem.week_day++} className="schedule-item">
                    <Select 
                    name="week_day" 
                    label="Day of the week" 
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
                    <Input name="from" label="From" type="time" />
                    <Input name="to" label="To" type="time" />
                </div>
                )
            })}    
                
            </fieldset>

            <footer>
                <p>
                    <img src={warningIcon} alt="Important warning"/>
                    Important! <br/>
                    Fill all the form.
                </p>

                <button type="button">
                    Save
                </button>
            </footer>

         </main>
     </div>
    )
}

export default TeacherForm;