import React, { useRef, useState } from "react";
import { useHistory, useParams } from "react-router";
import { dbService } from "fbase";

const CreateWord = ({ userObj }) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const { day } = useParams();

  const engRef = useRef(null);
  const korRef = useRef(null);

  // Add a word if user click button
  async function onSubmit(e) {
    e.preventDefault();
    if (!isLoading && engRef.current && korRef.current) {
      const eng = engRef.current.value;
      const kor = korRef.current.value;

      if (eng === "" && kor === "") {
        alert("모든 칸을 채워주세요");
      } else if (eng === "") {
        alert("영어가 비어있습니다");
      } else if (kor === "") {
        alert("뜻이 비어있습니다");
      } else {
        setIsLoading(true);
        await dbService
          .collection("users")
          .doc(userObj.uid)
          .collection("words")
          .add({
            creatorId: userObj.uid,
            day: day,
            eng,
            kor,
            isDone: false,
            isKorShow: true,
            isEngShow: true,
          })
          .then(() => {
            alert("생성이 완료되었습니다");
            history.push(`/day/${day}`);
            setIsLoading(false);
          });
      }
    }
  }

  return (
    <div className='cwContainer'>
      <form onSubmit={onSubmit} className='cwform'>
        <label className='cwTitle'> 새로운 단어를 추가해주세요 </label>
        <div className='input_area'>
          <label>Eng</label>
          <input type='text' placeholder='영어를 입력해주세요' ref={engRef} />
        </div>
        <div className='input_area'>
          <label>Kor</label>
          <input type='text' placeholder='뜻을 입력해주세요' ref={korRef} />
        </div>
        <button
          className='cwSave'
          style={{
            opacity: isLoading ? 0.3 : 1,
          }}
        >
          {isLoading ? "Saving..." : "저장"}
        </button>
      </form>
    </div>
  );
};
export default CreateWord;
