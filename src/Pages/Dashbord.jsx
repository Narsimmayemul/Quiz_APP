import axios from 'axios';
import React from 'react'

const Dashbord = () => {
    
    const[leaderboarddata,setLeadboardData]=useState([]);
    
    const getData=async()=>{
        try {
            const response =await axios.get();
            const data = res.data
            setLeadboardData(data);

        } catch (error) {
            console.log('Error on leaderboard data' ,error)
        }
    }

    useEffect(()=>{
        getData();
    },[])

  return (
    <div>
       <h1>Leaderboard</h1>
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboarddata.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.score}</td>
                </tr>
              ))}
            </tbody>
          </table>

    </div>
  )
}

export default Dashbord
