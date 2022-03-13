import React from "react";

class Header extends React.Component {
  render() {
    return(
      <>
          <header className="transparent header-light scroll-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="de-flex sm-pt10">
                            <div className="de-flex-col">
                                <div className="de-flex-col">
                                    <div id="logo">
                                        <a href="index.html">
                                            <img alt="" className="logo" src="images/logo-light.png" />
                                            <img alst="" className="logo-2" src="images/logo.png" />
                                        </a>
                                    </div>
                                </div>
                                <div className="de-flex-col">
                                    <input id="quick_search" className="xs-hide" name="quick_search" placeholder="search item here..." type="text" />
                                </div>
                            </div>
                            <div className="de-flex-col header-col-mid">
                                <ul id="mainmenu">
                                    <li>
                                        <a href="/">Home<span></span></a>
                                    </li>
                                    <li>
                                        <a href="/explore">Explore<span></span></a>
                                        <ul>
                                            <li><a href="/explore">Explore</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Pages<span></span></a>
                                        <ul>
                                            <li><a href="/author">Author</a></li>
                                            <li><a href="/login">Login</a></li>
                                            <li><a href="/register">Register</a></li>
                                        </ul>
                                    </li>                                    
                                    <li>
                                        <a href="/activity">Activity<span></span></a>
                                    </li>
                                    <li>
                                        <a href="/contact">Contact Us<span></span></a>
                                    </li>
                                </ul>
                                <div className="menu_side_area">
                                    <a href="/wallet" className="btn-main"><i className="icon_wallet_alt"></i><span>Connect Wallet</span></a>
                                    <span id="menu-btn"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
      </>
    );
  }
}


export default Header;