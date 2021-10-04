import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { dbService } from "fbase";
import { Link } from "react-router-dom";
import Word from "components/Word";

const Day = ({ userObj }) => {
  const [days, setDays] = useState([]);
  const [words, setWords] = useState([]);
  const history = useHistory();
  const { day } = useParams();
  //   console.log(day);
  //   console.log(words.length);

  useEffect(() => {
    // dbService.collection("days").onSnapshot((snapshot) => {
    //   const dayArray = snapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     ...doc.data(),
    //   }));
    //   setDays(dayArray);
    // });
    dbService.collection("words").onSnapshot((snapshot) => {
      // Add doc.id with doc.data
      const wordArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Filtering selected day
      const wordDayFiltered = wordArray.filter((res) => {
        return res.day === day;
      });

      // Store filtered data in the useState
      setWords(wordDayFiltered);
    });
  }, []);

  return (
    <>
      <h4>Day{day} </h4>
      <Link to={`/create_word/${day}`} className='link'>
        단어 추가
      </Link>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map((word) => (
            //   word.day === day ? <Word word={word} key={word.id} /> : null
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Day;
