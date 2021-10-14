import React, { useEffect, useState } from "react";
import { dbService } from "fbase";

const Profile = ({ userObj, refreshUser }) => {
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const [words, setWords] = useState([]);
  const [isDoneCount, setIsDoneCount] = useState([]);
  const donePercentage = (isDoneCount.length / words.length) * 100;
  console.log(donePercentage);

  console.log(isDoneCount);

  useEffect(() => {
    dbService
      .collection("users")
      .doc(userObj.uid)
      .collection("words")
      .onSnapshot((snapshot) => {
        const wordArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setWords(wordArray);
        const isDoneArray = wordArray.filter((i) => i.isDone === true);
        setIsDoneCount(isDoneArray);
      });
  }, [userObj.uid]);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj
        .updateProfile({
          displayName: newDisplayName,
        })
        .then(alert("이름이 변경되었습니다"));
      refreshUser();
    }
  };

  return (
    <div className='profileContainer'>
      <form onSubmit={onSubmit} className='profileForm'>
        <label className='profileformTitle'>사용자 이름</label>
        <input
          onChange={onChange}
          type='text'
          autoFocus
          placeholder='Display name'
          value={newDisplayName}
          className='formInput'
        />
        <input
          type='submit'
          value='Update Profile'
          className='formBtn'
          style={{
            marginTop: 10,
          }}
        />
      </form>
      <div className='profileInfo'>
        <div className='profileEachInfo'>
          <label>총 단어 개수는 </label>
          <label>{words.length}개입니다</label>
        </div>
        <div className='profileEachInfo'>
          <label>완료한 단어 개수는 </label>
          <label>{isDoneCount.length}개입니다</label>
        </div>
        <div className='profileEachInfo'>
          {donePercentage ? (
            <label>
              지금까지 {parseFloat(donePercentage).toFixed(2)}% 완료하셨습니다!
            </label>
          ) : (
            <label>지금까지 0% 완료하셨습니다!</label>
          )}
        </div>
      </div>
    </div>
  );
};
export default Profile;
