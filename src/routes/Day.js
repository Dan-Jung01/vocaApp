import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { dbService } from "fbase";
import { Link, useParams } from "react-router-dom";
import Word from "components/Word";
import { FaArrowLeft, FaArrowRight, FaArrowUp } from "react-icons/fa";
import { RiMenuAddLine } from "react-icons/ri";

const Day = ({ userObj }) => {
  const [words, setWords] = useState([]);
  const [days, setDays] = useState([]);
  const { day } = useParams();
  const history = useHistory();

  useEffect(() => {
    dbService
      .collection("users")
      .doc(userObj.uid)
      .collection("words")
      .where("day", "==", day)
      .onSnapshot((snapshot) => {
        const wordArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setWords(wordArray);
      });
  }, [day, userObj.uid]);

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
  }, [userObj.uid]);

  const prevDay = () => {
    if (Number(day) > 1) {
      history.push(`/day/${Number(day) - 1}`);
    } else {
      alert("이전 단어장은 없습니다");
    }
  };

  const nextDay = () => {
    if (Number(day) < days.length) {
      history.push(`/day/${Number(day) + 1}`);
    } else {
      alert("다음 단어장은 없습니다");
    }
  };

  return (
    <div className='dayContainer'>
      <div className='dayHeader'>
        <div className='dayMovePage'>
          <FaArrowLeft onClick={prevDay} className='dayArrowLeft icon' />
          <FaArrowRight onClick={nextDay} className='dayArrowRight icon' />
        </div>
        {/* <button onClick={allKorShow}> asdf</button> */}
        <div className='dayTitle'>Day {day} </div>
        <Link to={`/create_word/${day}`} className='dayAddWord'>
          <RiMenuAddLine size={25} />
        </Link>
      </div>
      {words.length === 0 && (
        <h4 className='dayAskingAdd'>
          단어를 추가해주세요 <FaArrowUp size={23} className='dayArrowUp' />{" "}
        </h4>
      )}
      <table>
        <tbody>
          {words.length !== 0 ? (
            <tr className='dayTableInfo'>
              <td>완료</td>
              <td>영어</td>
              <td>뜻</td>
              <td>보이기 / 숨기기</td>
              <td>삭제</td>
              <td>수정</td>
            </tr>
          ) : null}
          {words.map((word) =>
            userObj.uid === word.creatorId ? (
              <Word word={word} key={word.id} userObj={userObj} />
            ) : null
          )}
        </tbody>
      </table>
    </div>
  );
};
export default Day;
