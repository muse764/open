import Cookies from "js-cookie";

export const saveAccessToken = (res: any) => {
  const accessToken = res.accessToken;
  Cookies.set("accessToken", accessToken, { expires: 7 });
};

export const saveRefreshToken = (res: any) => {
  const refreshToken = res.refreshToken;
  Cookies.set("refreshToken", refreshToken, { expires: 30 });
};

export const removeAccessToken = () => {
  Cookies.remove("accessToken");
};
