import axios from "axios";
import { toast } from "react-toastify";

export const handleError = (error: any) => {
    var err = error.response;
    if (err?.data) {
      toast.warning(err.data);
    } else if (err?.status == 401) {
      toast.warning("Please login");
      window.history.pushState({}, "LoginPage", "");
    } else if (err) {
      toast.warning(err?.data);
    }
};