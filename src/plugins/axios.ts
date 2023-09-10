/* eslint-disable @typescript-eslint/indent */

import router from "@/router";
import axiosClient from "axios";
import {
  createToast,
  ToastType,
  ContentObject,
  Position,
  TransitionType,
} from "mosha-vue-toastify";
interface SnackBarConfig {
  type: ToastType;
  content: ContentObject;
  position?: Position | undefined;
  transition?: TransitionType | undefined;
  showIcon?: boolean | undefined;
  hideProgressBar?: boolean | undefined;
}

const showSnackbar = (config: SnackBarConfig) => {
  createToast(config.content, {
    type: config.type,
    position: config.position,
    transition: config.transition,
    showIcon: config.showIcon,
    hideProgressBar: config.hideProgressBar,
  });
};
// prod : http://164.92.197.198:7081
const axios = axiosClient.create({
  // You can add your headers here
  // ================================
  baseURL: "http://unisys.731my.com:64352/api/",

  // timeout: 1000,

  // headers: {'X-Custom-Header': 'foobar'}
});

// ℹ️ Add request interceptor to send the authorization header on each subsequent request after login
axios.interceptors.request.use((config) => {
  return config;
});

// ℹ️ Add response interceptor to handle 401 response
axios.interceptors.response.use(
  (response) => {
    if (response.request.method != "GET") {
      if (response.status == 200 || response.status == 201) {
        showSnackbar({
          content: {
            title: response.data.data[0].Email as any,
            description: "DDDD",
          },
          type: "success",
          position: "top-right",
          transition: "bounce",
          showIcon: true,
          hideProgressBar: true,
        });
      }
    }
    return response;
  },
  (error) => {
    console.log(error);
    if (error.response != null) {
      switch (error.response.status) {
        case 401:
          // ℹ️ Logout user and redirect to login page
          // Remove "userData" from localStorage
          // localStorage.removeItem("userData");
          showSnackbar({
            content: {
              title: "Error",
              description: "You must login first",
            },
            position: "top-right",
            type: "danger",
            transition: "bounce",
            showIcon: true,
            hideProgressBar: true,
          });

          // Remove "accessToken" from localStorage
          // localStorage.removeItem("accessToken");
          // localStorage.removeItem("userAbilities");

          // If 401 response returned from api
          router.push("/login");
          break;
        case 400:
          showSnackbar({
            content: {
              title: "Error",
              description:
                error.response.data?.message || "Something went wrong",
            },
            position: "top-right",
            type: "danger",
            transition: "bounce",
            showIcon: true,
            hideProgressBar: true,
          });
          break;
        case 403:
          showSnackbar({
            content: {
              title: "Error",
              description: "You are not authorized to access this page",
            },
            position: "top-right",
            type: "danger",
            transition: "bounce",
            showIcon: true,
            hideProgressBar: true,
          });
          break;
        case 500:
          showSnackbar({
            content: {
              title: "Error",
              description: "Something went wrong in the server",
            },
            position: "top-right",
            type: "danger",
            transition: "bounce",
            showIcon: true,
            hideProgressBar: true,
          });
          break;
      }
    }
    return Promise.reject(error);
  }
);
// get config from axios instance and get interceptors
export default axios;
