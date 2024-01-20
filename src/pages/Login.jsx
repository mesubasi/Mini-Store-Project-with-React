import React from "react";

function Login({ handleLogin }) {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Login</h1>
          <div className="d-grid gap-2">
            <button
              onClick={handleLogin}
              className="btn btn-primary"
              type="button"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
