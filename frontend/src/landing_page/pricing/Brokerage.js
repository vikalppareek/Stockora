import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-6 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            className="text-mut"
          >
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        <div className="col-6 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            className="text-mut"
          >
            <li>
            Application Processing Fees : ₹ 10,000/- + Applicable Tax.
            </li>
            <li> Admission Fees : One time 
            Not applicable for Alpha Category.</li>
            <li>
            For all segments (except “exclusive Commodity”
             and “exclusive Debt segment”): Rs. 5,00,000/- 
             plus applicable tax
            </li>
            <li>
            For Exclusive Debt segment: Rs. 1,00,000/- plus 
            applicable tax
            </li>
            <li>
            
            For Exclusive Commodity segment: Rs. 50,000 /-
            </li>
            <li>
            Rs.50,000/- (if the applicant applies for Cash,
             FO, CD and COM segments collectively)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;











