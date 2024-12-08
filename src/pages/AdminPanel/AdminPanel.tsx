import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import Login from "../../components/Login/Login";
import useCookie from "../../hooks/useCookie/useCookie";
import tokenVerification from "../../services/tokenVerification/tokenVerification";
import { RootState } from "../../store/store";
import { login } from "../../store/auth/auth.slice";
import ProjectsAdmin from "../../components/ProjectsAdmin/ProjectsAdmin";
import Button from "../../UI/Button/Button";
import ReactDOM from "react-dom";
import Modal from "../../components/Modal/Modal";
import Edit from "../../components/Edit/Edit";


export interface TokenVerificationStatus {
  token: boolean;
}

export default function AdminPanel() {
  const dispatch = useDispatch();
  const accessToken = useCookie("accessToken");
  const [modal,setModal] = useState(true)
  const modalRoot = document.getElementById("modal-root");



  const isLogin = useSelector((state: RootState) => state.auth);

  const verifyTokenAndLogin = useCallback(async () => {
    if (accessToken) {
      const tokenStatus = (await tokenVerification(dispatch, accessToken)) as TokenVerificationStatus | boolean;
      if (tokenStatus && typeof tokenStatus !== "boolean") {
        dispatch(login({ login: true }));
      } else {
        dispatch(login({ login: false }));
      }
    }
  }, [dispatch, accessToken]);

  useEffect(() => {
    if (accessToken) {
      verifyTokenAndLogin();
    }
  }, [verifyTokenAndLogin, accessToken]);

  const deleteCookie = (name: string): void => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  const logOut = () => {
    deleteCookie("accessToken");
    dispatch(login({ login: false }));
  };

  return (
    <div className="w-full  flex-col flex justify-center  bg-white dark:bg-gray-900 gap-4" >
      {isLogin.loading ? (
        null
      ) : isLogin.isLogin ? (
        <>
          <div className="w-full flex justify-between">
            <div onClick={()=>setModal(false)}>
              <Button name={"Add"} color={"green"} />
            </div>
            <div onClick={logOut}>
              <Button name={"Log Out"} color={"blue"} />
            </div>
          </div>
          <ProjectsAdmin />
        </>
      ) : (
        <Login />
      )}
      {!modal&& modalRoot &&
                ReactDOM.createPortal(
                <Modal
                    close={setModal}
                    content={
                        <Edit/>
                    } 
                />,modalRoot
                )}
    </div>
  );
}
