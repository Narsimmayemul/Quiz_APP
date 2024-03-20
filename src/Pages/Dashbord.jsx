import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Heading } from '@chakra-ui/react';

const Dashboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('https://dark-erin-frog.cyclic.app/results');
      const data = response.data;
      setLeaderboardData(data);
    } catch (error) {
      console.log('Error fetching leaderboard data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Heading as="h1" mb={4}>Leaderboard</Heading>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Rank</Th>
            <Th>Name</Th>
            <Th>Score</Th>
          </Tr>
        </Thead>
        <Tbody>
          {leaderboardData?.map((user, index) => (
            <Tr key={index}>
              <Td>{index + 1}</Td>
              <Td>{user.name}</Td>
              <Td>{user.score}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
