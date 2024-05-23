import { decodedToken } from "@/utils/jwt-helper";

import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  //   console.log(accessToken);
  return setToLocalStorage("accessToken", accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage("accessToken");
  //   console.log(authToken);
  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    return {
      ...decodedData,
      role: decodedData?.role?.toLowerCase(),
    };
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage("accessToken");
  if (authToken) {
    return !!authToken;
  }
};

export const removeUser = () => {
  return removeFromLocalStorage("accessToken");
};
