import React from "react";

export function extractTime(dateString) {
  const date = new Date(dateString);
  const tanggal = padZero(date.getDate());
  const bulan = padZero(date.getMonth());
  const tahun = date.getFullYear();
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  return `${date.getDate() === new Date().getDate() ? "Today at" : tanggal}${
    date.getDate() === new Date().getDate() ? "" : "-" + bulan
  }${
    date.getDate() === new Date().getDate() ? "" : "-" + tahun + ", "
  } ${hours}:${minutes}`;
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}
