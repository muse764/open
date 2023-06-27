import Cookies from "js-cookie";

export const saveAccessToken = (response: any) => {
  Cookies.set("accessToken", response.accessToken, {
    expires: 1,
    sameSite: "none",
  });
};

export const saveRefreshToken = (response: any) => {
  Cookies.set("refreshToken", response.refreshToken, {
    expires: 30,
    sameSite: "none",
  });
};

export const removeAccessToken = () => {
  Cookies.remove("accessToken");
};

export const removeRefreshToken = () => {
  Cookies.remove("refreshToken");
};
