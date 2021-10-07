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
  const [isKorShow, setKorShow] = useState(Boolean);

  console.log(isKorShow);

  // async function allKorShow() {
  //   await Promise.all(
  //     words.map(async (word) => {
  //       await dbService.doc(`users/${userObj.uid}/words/${word.id}`).update({
  //         isKorShow: !isKorShow,
  //       });
  //       setKorShow(!isKorShow);
  //     })
  //   );

  //   // words.map((word) => {
  //   //   dbService.doc(`users/${userObj.uid}/words/${word.id}`).update({
  //   //     isKorShow: !isKorShow,
  //   //   });
  //   //   setKorShow(!isKorShow);
  //   // });
  // }

  // async function allKorShow() {
  //   words.map(async (word) => {
  //     dbService.doc(`users/${userObj.uid}/words/${word.id}`).update({
  //       isKorShow: !isKorShow,
  //     });
  //   });
  //   setKorShow(!isKorShow);
  // }

  const a = words.forEach((id) => console.log(id.id));

  const allKorShow = async () => {
    await Promise.all(
      words.map((word) => {
        dbService.doc(`users/${userObj.uid}/words/${word.id}`).update({
          isKorShow: !isKorShow,
        });
      })
    );
    setKorShow(!isKorShow);
  };

  // async function allKorShow() {
  //   await dbService
  //     .doc(`users/${userObj.uid}/words/${words.map((word) => word.id)}`)
  //     .update({
  //       isKorShow: !isKorShow,
  //     });
  //   setKorShow(!isKorShow);
  // }

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
  }, [day, userObj.uid, isKorShow]);

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
