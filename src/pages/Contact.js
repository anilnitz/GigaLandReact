import React from "react";
class Contact extends React.Component {
  render() {
    return(
      <>
        <div className="no-bottom no-top" id="content">
            <div id="top"></div>
            <section id="subheader" className="text-light" data-bgimage="url(images/background/subheader.jpg) top">
                    <div className="center-y relative text-center">
                        <div className="container">
                            <div className="row">
                                
                                <div className="col-md-12 text-center">
									<h1>Contact Us</h1>
									<p>Anim pariatur cliche reprehenderit</p>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
            </section>
            <section aria-label="section">
                <div className="container">
						<div className="row">
							
							<div className="col-lg-8 mb-sm-30">
							<h3>Do you have any question?</h3>
							
							<form name="contactForm" id="contact_form" className="form-border" method="post" action="email.php">
								<div className="field-set">
									<input type="text" name="name" id="name" className="form-control" placeholder="Your Name" />
								</div>

								<div className="field-set">
									<input type="text" name="email" id="email" className="form-control" placeholder="Your Email" />
								</div>

								<div className="field-set">
									<input type="text" name="phone" id="phone" className="form-control" placeholder="Your Phone" />
								</div>

								<div className="field-set">
									<textarea name="message" id="message" className="form-control" placeholder="Your Message"></textarea>
								</div>

								<div className="spacer-half"></div>

								<div id="submit">
									<input type="submit" id="send_message" value="Submit Form" className="btn btn-main" />
								</div>
								<div id="mail_success" className="success">Your message has been sent successfully.</div>
								<div id="mail_fail" className="error">Sorry, error occured this time sending your message.</div>
							</form>
						</div>
						
						<div className="col-lg-4">

							<div className="padding40 box-rounded mb30" data-bgcolor="#F2F6FE">
								<h3>US Office</h3>
								<address className="s1">
									<span><i className="id-color fa fa-map-marker fa-lg"></i>08 W 36th St, New York, NY 10001</span>
									<span><i className="id-color fa fa-phone fa-lg"></i>+1 333 9296</span>
									<span><i className="id-color fa fa-envelope-o fa-lg"></i><a href="mailto:contact@example.com">contact@example.com</a></span>
									<span><i className="id-color fa fa-file-pdf-o fa-lg"></i><a href="#">Download Brochure</a></span>
								</address>
							</div>


							<div className="padding40 bg-color text-light box-rounded">
								<h3>AU Office</h3>
								<address className="s1">
									<span><i className="fa fa-map-marker fa-lg"></i>100 Mainstreet Center, Sydney</span>
									<span><i className="fa fa-phone fa-lg"></i>+61 333 9296</span>
									<span><i className="fa fa-envelope-o fa-lg"></i><a href="mailto:contact@example.com">contact@example.com</a></span>
									<span><i className="fa fa-file-pdf-o fa-lg"></i><a href="#">Download Brochure</a></span>
								</address>
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
export default Contact;