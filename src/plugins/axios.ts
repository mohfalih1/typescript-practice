/* eslint-disable @typescript-eslint/indent */

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
            title: "test",
            description: response as any,
          },
          type: "success",
          position: "bottom-right",
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
    showSnackbar({
      content: {
        title: "test",
        description: "test 2",
      },
      position: "bottom-right",
      type: "danger",
      transition: "bounce",
      showIcon: true,
      hideProgressBar: true,
    });
    return Promise.reject(error);
  }
);

// get config from axios instance and get interceptors

export default axios;
