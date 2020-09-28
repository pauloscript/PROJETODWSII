import styled from "styled-components";

export const ProductList = styled.div`
  * {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  h2 {
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
    padding: 30px 0;
  }

  .table-container {
    margin: 10px 70px 70px;
  }

  .fl-table {
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;
  }

  .fl-table td,
  .fl-table th {
    text-align: center;
    padding: 8px;
  }

  .fl-table td {
    border-right: 1px solid #f8f8f8;
    font-size: 12px;
  }

  .fl-table thead th {
    color: #ffffff;
    background: #db5014;
  }

  .fl-table thead th:nth-child(odd) {
    color: #ffffff;
    background: #324960;
  }

  .fl-table tr:nth-child(even) {
    background: #f8f8f8;
  }

  .btn-editar {
    background-color: #324960;
    border-radius: 28px;
    border: 1px solid #ffffff;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 13px;
    padding: 5px 20px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #ededed;
  }
  .btn-editar:hover {
    background-color: #0c7fcc;
  }
  .btn-editar:active {
    position: relative;
    top: 1px;
  }
  .btn-excluir {
    background-color: #db5014;
    border-radius: 28px;
    border: 1px solid #ffffff;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 13px;
    padding: 5px 20px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #ededed;
  }
  .btn-excluir:hover {
    background-color: #ff0026;
  }
  .btn-excluir:active {
    position: relative;
    top: 1px;
  }

  .cadastro-container {
    display: flex;
    justify-content: flex-end;
    margin: 5px;
  }

  .btn-novo {
    text-align: center;
    align-items: center;
    background-color: #324960;
    border-radius: 4px;
    border: 1px solid #324960;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 13px;
    padding: 9px 56px;
    text-decoration: none;
  }
  .btn-novo:hover {
    background-color: #1c708a;
  }
  .btn-novo:active {
    position: relative;
    top: 1px;
  }

  /* Responsive */

  @media (max-width: 767px) {
    .fl-table {
      display: block;
      width: 100%;
    }
    .table-wrapper:before {
      content: "Scroll horizontally >";
      display: block;
      text-align: right;
      font-size: 11px;
      color: white;
      padding: 0 0 10px;
    }
    .fl-table thead,
    .fl-table tbody,
    .fl-table thead th {
      display: block;
    }
    .fl-table thead th:last-child {
      border-bottom: none;
    }
    .fl-table thead {
      float: left;
    }
    .fl-table tbody {
      width: auto;
      position: relative;
      overflow-x: auto;
    }
    .fl-table td,
    .fl-table th {
      padding: 20px 0.625em 0.625em 0.625em;
      height: 60px;
      vertical-align: middle;
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: auto;
      width: 120px;
      font-size: 13px;
      text-overflow: ellipsis;
    }
    .fl-table thead th {
      text-align: left;
      border-bottom: 1px solid #f7f7f9;
    }
    .fl-table tbody tr {
      display: table-cell;
    }
    .fl-table tbody tr:nth-child(odd) {
      background: none;
    }
    .fl-table tr:nth-child(even) {
      background: transparent;
    }
    .fl-table tr td:nth-child(odd) {
      background: #f8f8f8;
      border-right: 1px solid #e6e4e4;
    }
    .fl-table tr td:nth-child(even) {
      border-right: 1px solid #e6e4e4;
    }
    .fl-table tbody td {
      display: block;
      text-align: center;
    }
  }
`;
