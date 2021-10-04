import { dbService } from "fbase";
import React, { useRef, useState } from "react";
import Modal from "./Modal";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

const Word = ({ word }) => {
  // const [word, setWord] = useState(w);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);
  const [isEngShow, setEngShow] = useState(word.isEngShow);
  const [isKorShow, setKorShow] = useState(word.isKorShow);
  const [isLoading, setIsLoading] = useState(false);

  const engRef = useRef(null);
  const korRef = useRef(null);

  async function KorToggleShow() {
    await dbService.doc(`words/${word.id}`).update({
      isKorShow: !isKorShow,
    });
    setKorShow(!isKorShow);
  }

  async function EngToggleShow() {
    await dbService.doc(`words/${word.id}`).update({
      isEngShow: !isEngShow,
    });
    setEngShow(!isEngShow);
  }

  async function toggleDone() {
    await dbService.doc(`words/${word.id}`).update({
      isDone: !isDone,
    });
    setIsDone(!isDone);
  }

  const onDelecteClick = async () => {
    const ok = window.confirm("이 단어를 삭제하시겠습니까?");
    if (ok) {
      await dbService.doc(`words/${word.id}`).delete();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveChange = async () => {
    if (!isLoading && engRef.current && korRef.current) {
      const inputEng = engRef.current.value;
      const inputKor = korRef.current.value;

      console.log("asdf");
      if (inputEng === "" && inputKor === "") {
        alert("모든 칸을 채워주세요");
      } else if (inputEng === "") {
        alert("영어가 비어있습니다");
      } else if (inputKor === "") {
        alert("뜻이 비어있습니다");
      } else {
        setIsLoading(true);
        await dbService.doc(`words/${word.id}`).update({
          eng: inputEng,
          kor: inputKor,
        });
        alert("수정이 완료 되었습니다");
        setIsModalOpen(false);
        setIsLoading(false);
      }
    }
  };

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type='checkbox' checked={isDone} onChange={toggleDone} />
      </td>
      <td>{isEngShow && word.eng}</td>
      <td>{isKorShow && word.kor}</td>
      <td>
        <button onClick={EngToggleShow}>
          영단어 {isEngShow ? "숨기기" : "보기"}
        </button>
        <button onClick={KorToggleShow}>
          뜻 {isKorShow ? "숨기기" : "보기"}
        </button>
      </td>
      <td>
        <FaRegTrashAlt className='icon' onClick={onDelecteClick} />
      </td>
      <td>
        <FaRegEdit className='icon' onClick={openModal} />

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
          {/* <div className='input_area'>
            <label>Day</label>
            <select ref={dayRef} defaultValue={word.day}>
              {days.map((day) => (
                <option key={day.id} value={day.day}>
                  {day.day}
                </option>
              ))}
            </select>
          </div> */}
        </Modal>
      </td>
    </tr>
  );
};
export default Word;
