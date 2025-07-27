import React, { useEffect, useState } from 'react';
import { Text, Avatar, Stack, Center, Container, Paper } from '@mantine/core';
import Service from '../utils/http';
import profilePic from '../assets/Profile.jpeg';

export default function Profile() {
  const service = new Service();
  const [profileData, setProfileData] = useState(null);

  async function getProfileData() {
    const data = await service.get('user/me');
    setProfileData(data);
    console.log(data);
  }

  useEffect(() => {
    getProfileData();
  }, []);

  if (!profileData) {
    return (
      <Center mt="xl">
        <Text>Loading profile...</Text>
      </Center>
    );
  }
  let t = new Date(profileData? profileData.createdAt : undefined).toDateString();
  let u = new Date(profileData? profileData.updatedAt : undefined).toDateString();

  return (
    <Container size="sm" mt="xl">
      <Paper shadow="sm" radius="md" p="xl" withBorder>
        <Center>
          <Stack align="center" spacing="sm">
            <Avatar src={profilePic} alt="Profile" size={100} />
            <Text fw={800} size="xl" c="green" >{profileData?.name}</Text>
            <Text fw={500} c= "gray">{profileData?.email}</Text>
            <Text fw={500}><strong>User Id : </strong> {profileData?._id}</Text>
            
            <Text fw={500}><strong>Account created : </strong> {t} </Text>
            <Text fw={500}><strong>Account updated : </strong> {u} </Text>
          </Stack>
        </Center>
      </Paper>
    </Container>
  );
}

