import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../../services/api';



function TeacherForm() {

    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

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

    function setScheduleItemValue(position: Number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;
        });

        setScheduleItems(updatedScheduleItems);
    }

        function handleCreateClass(e: FormEvent) {
            e.preventDefault();

            api.post('classes', {
                name,
                avatar,
                whatsapp,
                bio,
                subject,
                cost : Number(cost),
                schedule: scheduleItems
            }).then(()=> {
                alert('Registration realized with sucess!')

                history.push('/');
            }).catch(()=> {
                alert('Registration error!')
            })
            
        }

        return (
            <div id="page-teacher-form" className="container">
                <PageHeader
                    title="How amazing that you want to teach."
                    description="The first step is to fill out this application form."
                />

                <main>
                    <form onSubmit={handleCreateClass} >
                        <fieldset>
                            <legend>Your data</legend>
                            <Input
                                name="name"
                                label="Name"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                            />
                            <Input
                                name="avatar"
                                label="Avatar"
                                value={avatar}
                                onChange={(e) => { setAvatar(e.target.value) }}
                            />
                            <Input
                                name="whatsapp"
                                label="Whatsapp"
                                value={whatsapp}
                                onChange={(e) => { setWhatsapp(e.target.value) }}
                            />
                            <Textarea
                                name="bio"
                                label="Biography"
                                value={bio}
                                onChange={(e) => { setBio(e.target.value) }}
                            />
                        </fieldset>

                        <fieldset>
                            <legend>About the class</legend>
                            <Select
                                name="subject"
                                label="Subject"
                                value={subject}
                                onChange={(e) => { setSubject(e.target.value) }}
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
                            <Input
                                name="cost"
                                label="Cost of your class per hour"
                                value={cost}
                                onChange={(e) => { setCost(e.target.value) }}
                            />
                        </fieldset>

                        <fieldset>
                            <legend>
                                Available times
                                <button type="button" onClick={addNewScheduleItem}>
                                    + New time
                                </button>
                            </legend>

                            {scheduleItems.map((scheduleItem, index) => {
                                return (
                                    <div key={index} className="schedule-item">
                                        <Select
                                            name="week_day"
                                            label="Day of the week"
                                            value={scheduleItem.week_day}
                                            onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                                            name="from"
                                            label="From"
                                            type="time"
                                            value={scheduleItem.from}
                                            onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                        />
                                        <Input
                                            name="to"
                                            label="To"
                                            type="time"
                                            value={scheduleItem.to}
                                            onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                        />
                                    </div>
                                );
                            })}

                        </fieldset>

                        <footer>
                            <p>
                                    <img src={warningIcon} alt="Important warning" />
                                Important! <br />
                                Fill all the form.
                            </p>

                            <button type="submit">
                                Save
                            </button>
                        </footer>
                    </form>
                </main>
            </div>
        );
    }


export default TeacherForm;