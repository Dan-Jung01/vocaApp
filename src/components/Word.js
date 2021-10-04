import { dbService } from "fbase";
import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

const Word = ({ word: w }) => {
  const [word, setWord] = useState(w);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isEngShow, setEngShow] = useState(true);
  const [isKorShow, setKorShow] = useState(true);
  const [days, setDays] = useState([]);

  const engRef = useRef(null);
  const korRef = useRef(null);

  //   useEffect(() => {
  //     dbService.collection("days").onSnapshot((snapshot) => {
  //       const dayArray = snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       setDays(dayArray);
  //     });
  //   }, []);

  //   useEffect(() => {
  //     dbService.collection("words").onSnapshot((snapshot) => {
  //       const wordArray = snapshot.docs.map((doc) => ({
  //         ...doc.data(),
  //       }));
  //       setWord(wordArray);
  //     });
  //   }, []);

  return (
    <tr className={isDone ? "off" : ""}>
      {/* <td>
        <input type='checkbox' checked={isDone} />
      </td> */}
      <td>{isEngShow && word.eng}</td>
      <td>{isKorShow && word.kor}</td>
      <td>
        <button>영단어 {isEngShow ? "숨기기" : "보기"}</button>
        <button>뜻 {isKorShow ? "숨기기" : "보기"}</button>
      </td>
      <td>
        <FaRegTrashAlt className='icon' />
      </td>
      {/* <td>
        <FaRegEdit className='icon' />
        
        <Modal
          open={isModalOpen}
          close={closeModal}
          save={saveChange}
          header='단어수정'
        >
          <div className='input_area'>
            <label>Eng</label>
            <input
              type='text'
              placeholder='영어단어를 입력해주세요'
              ref={engRef}
              defaultValue={word.eng}
            />
          </div>
          <div className='input_area'>
            <label>Kor</label>
            <input
              type='text'
              placeholder='뜻을 입력해주세요'
              ref={korRef}
              defaultValue={word.kor}
            />
          </div>
          <div className='input_area'>
            <label>Day</label>
            <select ref={dayRef} defaultValue={word.day}>
              {days.map((day) => (
                <option key={day.id} value={day.day}>
                  {day.day}
                </option>
              ))}
            </select>
          </div>
        </Modal>
      </td> */}
    </tr>
  );
};
export default Word;
