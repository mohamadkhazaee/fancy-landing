import { keyframes } from "@emotion/react";
import { useSnackbar } from "notistack";
import Cookies from "js-cookie";
import moment from "moment";

export const COOKIE_NAME = "dashagh";

export const rotation = keyframes`
0% {
    -webkit-transform: rotate(0deg);
}
100% {
    -webkit-transform: rotate(360deg);
}
`;
export const spinRight = keyframes`
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export function setToken(token: string) {
  Cookies.set(COOKIE_NAME, token);
}

export function getToken() {
  return { token: Cookies.get(COOKIE_NAME) };
}

export function calculateProfit(date: number, amount: number, apy: number) {
  const price = amount * 0.98;
  const today = moment().startOf("day");
  const start_date = moment(date);
  const daysCount = Math.round(start_date.diff(today, "days")) * -1;
  const monthCount = Math.floor(daysCount / 30);
  const apyPerMonth = apy / 12;
  if (monthCount <= 5) {
    const profitPercent = (monthCount * apyPerMonth - 5) / 100;
    return price + profitPercent * price;
  } else {
    const profit = ((apyPerMonth * monthCount) / 100) * price;
    return price + profit;
  }
}
