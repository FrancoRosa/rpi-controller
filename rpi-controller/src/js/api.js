import axios from "axios";
import io from "socket.io-client";

export const host = `http://${window.location.hostname}:9999`;

export const socket = io.connect(host);

export const startControl = async (time, setpoint) => {
  console.log("... start control");
  const url = `${host}/start`;
  const response = await axios.post(url, { time, setpoint });
  return response.data;
};

export const stopControl = async () => {
  console.log("... stop control");
  const url = `${host}/stop`;
  const response = await axios.post(url, {});
  return response.data;
};

export const pauseControl = async () => {
  console.log("... pause control");
  const url = `${host}/pause`;
  const response = await axios.post(url, {});
  return response.data;
};
