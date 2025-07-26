import React, { useEffect, useState } from 'react'

import { Text } from '@mantine/core';
import { Avatar } from '@mantine/core';
import Service from '../utils/http';

export default function Profile() {
    const service = new Service;
    const [profileData, setProfileData] = useState(null);
    async function getProfileData(){
        let data = await service.get("user/me");
        setProfileData(data);
        console.log(data);
    }
    useEffect(() =>{getProfileData();}, [])
  return (
    <div>
        
            <Avatar src="avatar.png" alt="it's me" />
            <Text fw={500}>{profileData?.name}</Text>
            <Text fw={500}>{profileData?.email}</Text>
            <Text fw={500}>User Id: {profileData?._id}</Text>
            <Text fw={500}>Acc Created at: {profileData?.createdAt}</Text>
    </div>
  )
}
