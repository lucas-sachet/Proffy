import React from 'react';
import PageHeader from '../../components/PageHeader';


import './styles.css';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
           <PageHeader title="These are the available Proffys.">
               
                <form id="search-teachers">
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
                   
                <Input type="time" name="time" label="Time" />
                </form>
            </PageHeader>

            <main>
             <TeacherItem />
             <TeacherItem />
             <TeacherItem />
             <TeacherItem />
            </main> 
        </div>
    )
}

export default TeacherList;