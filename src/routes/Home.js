import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ userObj }) => {
  const [days, setDays] = useState([]);

  //   const getDays = async () => {
  //     const dbDays = await dbService.collection("days").get();
  //     dbDays.forEach((doc) => {
  //       const dayObject = {
  //         ...doc.data(),
  //         id: doc.id,
  //       };
  //       setDays((prev) => [dayObject, ...prev]);
  //     });
  //   };

  useEffect(() => {
    // getDays();
    dbService.collection("days").onSnapshot((snapshot) => {
      const dayArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDays(dayArray);
    });
  }, []);

  // Add another day if user click button
  const onClick = async (e) => {
    await dbService.collection("days").add({
      day: days.length + 1,
      creatorId: userObj.uid,
    });
  };

  // console.log(days.day);

  return (
    <ul className='list_day'>
      Home
      {days.map((day) => (
        <li className='each_day' key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
      <button onClick={onClick} name='addDay'>
        Add Day
      </button>
    </ul>
  );
};
export default Home;
