import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoAddCircleSharp } from "react-icons/io5";
import Day from "es-abstract/5/Day";

const Home = ({ userObj }) => {
  const [days, setDays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dbService
      .collection("users")
      .doc(userObj.uid)
      .collection("dayss")
      .orderBy("day")
      .onSnapshot((snapshot) => {
        const dayArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDays(dayArray);
      });
  }, [userObj]);

  // Add another day if user click button
  const onClick = async (e) => {
    setIsLoading(true);
    await dbService
      .collection("users")
      .doc(userObj.uid)
      .collection("dayss")
      .add({
        day: days.length + 1,
      })
      .then(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className='homeContainer'>
      <div className='homeTitle'> 안녕하세요 {userObj.displayName} 님 </div>
      <ul className='homeDayContainer'>
        {days.map(
          (day) => (
            // day.creatorId === userObj.uid ? (
            <li className='homeEachDay' key={day.id}>
              {/* <Day /> */}
              <Link
                to={{
                  pathname: `/day/${day.day}`,
                }}
              >
                Day {day.day}
              </Link>
            </li>
          )
          // ) : null
        )}
        <button className='homeAddDay' onClick={onClick}>
          Add Day <IoAddCircleSharp size={30} />
        </button>
      </ul>
    </div>
  );
};
export default Home;
