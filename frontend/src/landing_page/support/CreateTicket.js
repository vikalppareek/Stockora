import React from "react";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SavingsIcon from '@mui/icons-material/Savings';

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Online Account Opening
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Offline Account Opening
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Company, Partnership and HUF Account
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Opening
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            NRI Account Opening
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Charges at Stockora
          </a>
          <br />
          
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
          <ManageAccountsIcon/>Your Stockora Account
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Login credential
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Your Profile
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Account modification and segment addition
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            CMR & DP ID
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Nomination
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Transfer and conversion of shares
          </a>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
          <i class="fa fa-bar-chart" aria-hidden="true"></i> Tradings and Market
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Trading FAQs
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Dashboard
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Margins
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Product and order types
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Corporate actions
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Stockora features
          </a>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
             <AddShoppingCartIcon></AddShoppingCartIcon> Funds
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Fund withdrawal
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Adding funds
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Adding bank accounts
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            eMandates
          </a>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
          <AccountBalanceIcon/> Console
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            IPO
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Portfolio
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Funds statement
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Reports
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Referral program
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Profile
          </a>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
          <SavingsIcon></SavingsIcon>  Coin
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Understanding mutual funds and Coin
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Coin app
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Coin web
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Transactions and reports
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            National Pension Scheme (NPS)
          </a>
          <br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
