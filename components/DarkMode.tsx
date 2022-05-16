import './DarkMode.css';
import * as React from 'react';
import { ChangeEventHandler } from 'react';

const setDark = () => {
  localStorage.setItem('theme', 'dark');
  document.documentElement.setAttribute('data-theme', 'dark');
};

const setLight = () => {
  localStorage.setItem('theme', 'light');
  document.documentElement.setAttribute('data-theme', 'light');
};

const storedTheme = localStorage.getItem('theme');

const prefersDark =
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

const nightTime = () => {
  let hrs = new Date().getHours();
  if (hrs <= 4 && hrs >= 18) return true;
  else return false;
};

const defaultDark =
  storedTheme === 'dark' || (storedTheme === null && prefersDark) || nightTime;

if (defaultDark) {
  setDark();
}

const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

const DarkMode = () => {
  return (
    <div className="toggle-theme-wrapper">
      <span>Day</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <div className="slider"></div>
      </label>
      <span>Night</span>
    </div>
  );
};

export default DarkMode;
