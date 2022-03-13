import React from "react";
class Login extends React.Component {
  render() {
    return(
      <>
      <div className="no-bottom no-top" id="content">
      <div id="top"></div>
      <section className="full-height relative no-top no-bottom vertical-center" data-bgimage="url(images/background/subheader.jpg) top" data-stellar-background-ratio=".5">
          <div className="overlay-gradient t50">
              <div className="center-y relative">
                  <div className="container">
                      <div className="row align-items-center">
                          <div className="col-lg-5 text-light wow fadeInRight" data-wow-delay=".5s">
                          <div className="spacer-10"></div>
                          <h1>Create, sell or collect digital items.</h1>
                          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                      </div>
                          <div className="col-lg-4 offset-lg-2 wow fadeIn" data-wow-delay=".5s">
                              <div className="box-rounded padding40" data-bgcolor="#ffffff">
                                  <h3 className="mb10">Sign In</h3>
                                  <p>Login using an existing account or create a new account <a href="register.html">here<span></span></a>.</p>
                                  <form name="contactForm" id='contact_form' className="form-border" method="post" action='blank.php'>
                                      <div className="field-set">
                                          <input type='text' name='email' id='email' className="form-control" placeholder="username" />
                                      </div>
                                       <div className="field-set">
                                          <input type='password' name='password' id='password' className="form-control" placeholder="password" />
                                      </div>
                                      <div className="field-set">
                                          <input type='submit' id='send_message' value='Submit' className="btn btn-main btn-fullwidth color-2" />
                                      </div>
                                      <div className="clearfix">
                                      </div>
                                      <div className="spacer-single"></div>
                                        <ul className="list s3">
                                            <li>Login with:</li>
                                            <li><a href="#">Facebook</a></li>
                                            <li><a href="#">Google</a></li>
                                        </ul>
                                    </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>		
      </div>
      </>
    );
  }
}
export default Login;