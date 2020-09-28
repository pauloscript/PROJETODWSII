import styled from "styled-components";

export const Container = styled.div`
  input {
    outline: none;
    border: none;
  }

  textarea {
    outline: none;
    border: none;
  }

  input:-ms-input-placeholder {
    color: #999999;
  }

  .container-contact2 {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background: #324960;
  }

  .wrap-contact2 {
    width: 790px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    padding: 72px 55px 90px 55px;
  }

  .contact2-form {
    width: 100%;
  }

  .contact2-form-title {
    display: block;
    font-size: 39px;
    color: #333333;
    line-height: 1.2;
    text-align: center;
    padding-bottom: 90px;
  }

  .wrap-input2 {
    width: 100%;
    position: relative;
    border-bottom: 2px solid #adadad;
    margin-bottom: 37px;
  }

  .input2 {
    display: block;
    width: 100%;
    font-size: 15px;
    color: #555555;
    line-height: 1.2;
  }

  .focus-input2 {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
  }

  .focus-input2::after {
    content: attr(data-placeholder);
    display: block;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0;

    font-size: 13px;
    color: #999999;
    line-height: 1.2;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }

  input.input2 {
    height: 45px;
  }

  textarea.input2 {
    min-height: 115px;
    padding-top: 13px;
    padding-bottom: 13px;
  }

  textarea.input2 + .focus-input2::after {
    top: 16px;
    left: 0;
  }

  .input2:focus + .focus-input2::after {
    top: -13px;
  }

  .input2:focus + .focus-input2::before {
    width: 100%;
  }

  .has-val.input2 + .focus-input2::after {
    top: -13px;
  }

  .has-val.input2 + .focus-input2::before {
    width: 100%;
  }

  .btn-salvar {
    background-color: #0aab5d;
    border-radius: 28px;
    border: 1px solid #ffffff;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 14px;
    padding: 10px 37px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #2f6627;
  }
  .btn-salvar:hover {
    background-color: #12b854;
  }
  .btn-salvar:active {
    position: relative;
    top: 1px;
  }

  .btn-cancelar {
    background-color: #ed5c0e;
    border-radius: 28px;
    border: 1px solid #ffffff;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 14px;
    padding: 10px 37px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #2f6627;
  }
  .btn-cancelar:hover {
    background-color: #f70000;
  }
  .btn-cancelar:active {
    position: relative;
    top: 1px;
  }
`;
