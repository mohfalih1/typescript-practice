// Utilities
import { defineStore } from "pinia";
enum SnackColor {
  "error",
  "success",
}
interface State {
  snackbar: Boolean;
  snackbarColor: SnackColor;
  snackbarText: String;
}
export const useAppStore = defineStore("app", {
  state: (): State => ({
    snackbar: false,
    snackbarColor: SnackColor.success,
    snackbarText: "",
  }),
  actions: {
    editSnackBar(config: State) {
      this.snackbarText = config.snackbarText;
      this.snackbar = config.snackbar;
      this.snackbarColor = config.snackbarColor;
    },
  },
});
