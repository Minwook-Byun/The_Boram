import { useState, useEffect } from "react";
import {
  projectAuth,
  projectStorage,
  projectFirestore,
} from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName, thumbnail) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        throw new Error("회원가입을 완료하지 못했습니다");
      }

      // 썸네일 이미지 업로드 섬네일s에 유저의 id마다 폴더를 만들어주고 파일의 이름을 통해서 저장해준다.
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`;
      const img = await projectStorage.ref(uploadPath).put(thumbnail);
      const imgUrl = await img.ref.getDownloadURL();

      // 사용자 이름 업데이트
      await res.user.updateProfile({ displayName, photoURL: imgUrl });

      // 유저용 document 만들기 => 컬렉션이 없다면 하나는 만들어줘야 하나??
      await projectFirestore.collection("users").doc(res.user.uid).set({
        online: true,
        displayName: displayName,
        photoURL: imgUrl,
      });

      // 로그인 액션 뿌려주기
      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        console.log(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signup, error, isPending };
};
