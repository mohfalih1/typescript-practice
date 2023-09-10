// Utilities
import { defineStore } from "pinia";
interface State {
  loginEmailRules: any;
  passwordRules: any;
}
export const useAppStore = defineStore("app", {
  state: (): State => {
    return {
      loginEmailRules: [
        (v: any) => !!v || "Required",
        (v: any) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v: any) => !!v || "Required",
        (v: any) => v.length >= 8 || "Password must be at least 8 characters",
      ],
    };
  },
  actions: {
    // editSnackBar(config: State) {
    //   this.snackbarText = config.snackbarText;
    //   this.snackbar = config.snackbar;
    //   this.snackbarColor = config.snackbarColor;
    // },
  },
});
