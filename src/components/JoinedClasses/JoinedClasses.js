import { Avatar } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css';

const JoinedClasses = ({ classData }) => {
    return (
        <li className='joined__list'>
            <div className='joined__container'>
                <div className='joined__imgWrapper'/>
                <div className='joined__image' />
                <div className='joined__content'>
                    <Link className='joined__title' to={`/${classData.id}`}>
                        <h2>{classData.className}</h2>
                    </Link>
                </div>
            </div>
        </li>
    )
}

export default JoinedClasses;
