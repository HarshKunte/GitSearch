import React from 'react';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import { GrLocation } from 'react-icons/gr'
import { FaSuitcase } from 'react-icons/fa';
import { MdPeople } from 'react-icons/md';
import { FaLocationArrow } from 'react-icons/fa';
const UserCard = ({ user }) => {
    return (
        <Card className=" mt-10 mb-4" >

            <CardTitle>
                <CardImg src={user.avatar_url} alt="" height='300px' />
            </CardTitle>


            <CardBody >
                <div className='font-weight-bold'><h3>{user.name}</h3></div>
                <div className="text-info">
                    <GrLocation className='mr-2' />
                    {user.location}</div>
                <div><p>{user.bio}</p></div>
                <div>
                    <p><FaSuitcase className='mr-2' />
                Open for Job: {user.hireable ? 'Yes' : 'No'}</p></div>
                <div><p><MdPeople className='mr-2' />Followers: {user.followers}  </p></div>
                <div className="text-secondary">View Full Github Profile <a href={user.html_url}><FaLocationArrow color='black' /></a></div>
            </CardBody>
        </Card>
    );
}

export default UserCard;