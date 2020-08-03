import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://instagram.fcxj6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/91792027_761365427736324_2015898296865783808_n.jpg?_nc_ht=instagram.fcxj6-1.fna.fbcdn.net&_nc_ohc=XLWE3chopJoAX9fC3JV&oh=8f98e195ae18f22823aa73f0c8c5f1bc&oe=5F538ABA" alt="Lucas Sacjet"/>
                <div>
                    <strong>Lucas Sachet</strong>
                    <span>Dev</span>
                </div>
            </header>

            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            <br/><br/>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>

            <footer>
                <p>
                    Price/hour 
                    <strong>$50,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Get in touch
                </button>
            </footer>
        </article> 
    );
}

export default TeacherItem;