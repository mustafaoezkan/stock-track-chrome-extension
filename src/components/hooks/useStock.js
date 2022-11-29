import axios from "../api/axios";
import { CONNECT } from "../enums/connection";

const useStock = () => {
  const getStock = async () => {
    try {
      const response = await axios.get("economy/liveBorsa", {
        headers: {
          Authorization: CONNECT.API_KEY
        }
      });
      return response;
    } catch (err) {
      return err.response;
    }
  };

  return { getStock };
};

export default useStock;
