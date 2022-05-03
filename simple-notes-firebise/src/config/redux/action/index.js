import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { database } from "../../firebase";
import { push, ref, onValue, set, remove } from "firebase/database";

export const actionUserName = () => (dispatch) => {
  setTimeout(() => {
    return dispatch({ type: "CHANGE_USER", value: "Diah Insani" });
  }, 2000);
};

export const registerUserAPI = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    dispatch({ type: "CHANGE_LOADING", value: true });
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((resp) => {
        console.log("success: ", resp);
        dispatch({ type: "CHANGE_LOADING", value: false });
        resolve(true);
      })
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        dispatch({ type: "CHANGE_LOADING", value: false });
        reject(false);
      });
  });
};

export const loginUserAPI = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    dispatch({ type: "CHANGE_LOADING", value: true });
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((resp) => {
        // console.log("success: ", resp);
        const dataUser = {
          email: resp.user.email,
          uid: resp.user.uid,
          emailVerified: resp.user.emailVerified,
          refreshToken: resp.user.refreshToken,
        };
        dispatch({ type: "CHANGE_LOADING", value: false });
        dispatch({ type: "CHANGE_ISLOGIN", value: true });
        dispatch({ type: "CHANGE_USER", value: dataUser });
        resolve(dataUser);
      })
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        dispatch({ type: "CHANGE_LOADING", value: false });
        dispatch({ type: "CHANGE_ISLOGIN", value: false });
        reject(false);
      });
  });
};

export const addDataToAPI = (data) => (dispatch) => {
  push(ref(database, "notes/" + data.userId), {
    title: data.title,
    content: data.content,
    date: data.date,
  });
};

export const getDataFromAPI = (userId) => (dispatch) => {
  const urlNotes = ref(database, "notes/" + userId);
  return new Promise((resolve, reject) => {
    onValue(urlNotes, (snapshot) => {
      console.log("get Data", snapshot.val());
      const data = [];
      Object.keys(snapshot.val()).map((key) => {
        data.push({
          id: key,
          data: snapshot.val()[key],
        });
      });
      dispatch({ type: "SET_NOTES", value: data });
      resolve(snapshot.val());
    });
  });
};

export const updateDataFromAPI = (data) => (dispatch) => {
  const urlNotes = ref(database, `notes/${data.userId}/${data.noteId}`);
  return new Promise((resolve, reject) => {
    set(
      urlNotes,
      {
        title: data.title,
        content: data.content,
        date: data.date,
      },
      (err) => {
        if (err) {
          reject(false);
        } else {
          resolve(true);
        }
      }
    );
  });
};

export const DeleteDataAPI = (data) => (dispatch) => {
  const urlNotes = ref(database, `notes/${data.userId}/${data.noteId}`);
  return new Promise((resolve, reject) => {
    remove(urlNotes);
  });
};
