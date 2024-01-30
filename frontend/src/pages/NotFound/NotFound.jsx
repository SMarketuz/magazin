import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import { boat, bro, not } from "../../assets";

export default function NotFound() {
  return (
    <div className="pare">
      <div class="mars"></div>
      <img src={not} class="logo-404" />
      <img src="https://assets.codepen.io/1538474/meteor.svg" class="meteor" />
      <p class="title">Nimadir Xato Ketdi!</p>
      <p class="subtitle">
        Siz mavjud bo'lmagan sahifaga tashrif buyurdingiz.
        <br /> Agarda sizga nimadur kerak bo'lsa bosh sahifaga qayting.
      </p>
      <div align="center">
        <Link class="btn-back" to="/">
          Back to previous page
        </Link>
      </div>
      <img
        src={bro}
        class="astronaut"
      />
      <div className="space_pare">
        <img
          src={boat}
          class="spaceship"
        />
      </div>
    </div>
  );
}
