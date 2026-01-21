import React from "react";

export default function Dash() {
     const handleLogout = () => {
    alert("Logged out successfully");
    // later you can add navigate('/login')
  };
  return (

    <>
     {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm rounded-pill px-4 mx-3 mt-3">
        <span className="navbar-brand fw-bold">MyWallet</span>

        <div className="ms-auto d-flex align-items-center gap-3">
          {/* ROUND CARD ICON */}
          <div
            className="rounded-circle d-flex align-items-center justify-content-center text-white"
            style={{
              width: 40,
              height: 40,
              background: "linear-gradient(135deg,#ff7a18,#ffb347)",
            }}
          >
            💳
          </div>

          {/* LOGOUT */}
          <button
            className="btn btn-outline-dark rounded-pill px-3"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>
   
    <div className="container py-4">
      {/* TOP SECTION */}
      <div className="row g-4 align-items-stretch">
        {/* CARD */}
        <div className="col-md-6">
          <div
            className="p-4 text-white h-100 rounded-4"
            style={{
              background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
            }}
          >
            <h2 className="mb-4">00</h2>

            <div className="d-flex justify-content-between mt-5">
              <div>
                <small className="text-muted">Card Holder</small>
                <h6 className="mb-0">Suresh Sonkamble</h6>
              </div>
              <div>
                <small className="text-muted">Expires</small>
                <h6 className="mb-0">11/22</h6>
              </div>
            </div>

            <div className="mt-3 text-end">
              <span className="badge bg-danger rounded-circle me-1">&nbsp;</span>
              <span className="badge bg-warning rounded-circle">&nbsp;</span>
            </div>
          </div>
        </div>

        {/* SALARY */}
        <div className="col-md-3">
          <div className="card h-100 shadow-sm rounded-4 text-center p-3">
            <div
              className="mx-auto mb-3 rounded-3"
              style={{ width: 60, height: 60, background: "#177410" }}
            ></div>
            <h3>Credit</h3>
            
            <h2 className="mt-3 text-success">00</h2>
            <button className="btn btn-dark rounded-pill">
              Add New Credit
            </button>
          </div>
        </div>

        {/* PAYPAL */}
        <div className="col-md-3">
          <div className="card h-100 shadow-sm rounded-4 text-center p-3">
            <div
              className="mx-auto mb-3 rounded-3"
              style={{ width: 60, height: 60, background: "#ff1818" }}
            ></div>
            <h3>Debit</h3>
           
            <h2 className="mt-3">00</h2>
            <button className="btn btn-dark rounded-pill">
              Add New Debit
            </button>
          </div>
        </div>
      </div>

      {/* PAYMENT METHOD */}
      <div className="card mt-4 shadow-sm rounded-4">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">Payment History</h5>
           
          </div>

          <div className="row g-3">
            <div className="col-md-12">
              


            </div>

          
          </div>
        </div>
      </div>
    </div>
     </>
  );
}
