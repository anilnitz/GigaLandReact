import React from "react";
class Author extends React.Component {
  render() {
    return(
      <>
      <div className="no-bottom no-top" id="content">
      <div id="top"></div>
      <section id="subheader" className="text-light" data-bgimage="url('images/background/subheader.jpg') top">
                    <div className="center-y relative text-center">
                        <div className="container">
                            <div className="row">
                                
                                <div className="col-md-12 text-center">
									<h1>Author</h1>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
        </section>
      <section aria-label="section">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                     <div className="d_profile de-flex">
                          <div className="de-flex-col">
                              <div className="profile_avatar">
                                  <img src="images/author_single/author_thumbnail.jpg" alt="" />
                                  <i className="fa fa-check"></i>
                                  <div className="profile_name">
                                      <h4>
                                          Monica Lucas                                                
                                          <span className="profile_username">@monicaaa</span>
                                          <span id="wallet" className="profile_wallet">DdzFFzCqrhshMSxb9oW3mRo4MJrQkusV3fGFSTwaiu4wPBqMryA9DYVJCkW9n7twCffG5f5wX2sSkoDXGiZB1HPa7K7f865Kk4LqnrME</span>
                                          <button id="btn_copy" title="Copy Text">Copy</button>
                                      </h4>
                                  </div>
                              </div>
                          </div>
                          <div className="profile_follow de-flex">
                              <div className="de-flex-col">
                                  <div className="profile_follower">500 followers</div>
                              </div>
                              <div className="de-flex-col">
                                  <a href="#" className="btn-main">Follow</a>
                              </div>
                          </div>

                      </div>
                  </div>

                  <div className="col-md-12">
                      <div className="de_tab">

                          <ul className="de_nav">
                              <li className="active"><span>On Sale</span></li>
                              <li><span>Created</span></li>
                              <li><span>Liked</span></li>
                          </ul>
                          
                          <div className="de_tab_content">
                              
                              <div className="tab-1">
                                  <div className="row">
                                         
                                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                              <div className="nft__item">
                                                  <div className="de_countdown" data-year="2021" data-month="8" data-day="16" data-hour="8"></div>
                                                  <div className="author_list_pp">
                                                      <a href="author.html">                                    
                                                          <img className="lazy" src="images/author/author-1.jpg" alt="" />
                                                          <i className="fa fa-check"></i>
                                                      </a>
                                                  </div>
                                                  <div className="nft__item_wrap">
                                                      <a href="item-details.html">
                                                          <img src="images/author_single/porto-1.jpg" className="lazy nft__item_preview" alt="" />
                                                      </a>
                                                  </div>
                                                  <div className="nft__item_info">
                                                      <a href="item-details.html">
                                                          <h4>Pinky Ocean</h4>
                                                      </a>
                                                      <div className="nft__item_price">
                                                          0.08 ETH<span>1/20</span>
                                                      </div>
                                                      <div className="nft__item_action">
                                                          <a href="#">Place a bid</a>
                                                      </div>
                                                      <div className="nft__item_like">
                                                          <i className="fa fa-heart"></i><span>50</span>
                                                      </div>                            
                                                  </div> 
                                              </div>
                                          </div>                 
                                         
                                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                              <div className="nft__item">
                                                  <div className="author_list_pp">
                                                      <a href="author.html">                                    
                                                          <img className="lazy" src="images/author/author-1.jpg" alt="" />
                                                          <i className="fa fa-check"></i>
                                                      </a>
                                                  </div>
                                                  <div className="nft__item_wrap">
                                                      <a href="item-details.html">
                                                          <img src="images/author_single/porto-2.jpg" className="lazy nft__item_preview" alt="" />
                                                      </a>
                                                  </div>
                                                  <div className="nft__item_info">
                                                      <a href="item-details.html">
                                                          <h4>The Animals</h4>
                                                      </a>
                                                      <div className="nft__item_price">
                                                          0.06 ETH<span>1/22</span>
                                                      </div>
                                                      <div className="nft__item_action">
                                                          <a href="#">Place a bid</a>
                                                      </div>
                                                      <div className="nft__item_like">
                                                          <i className="fa fa-heart"></i><span>80</span>
                                                      </div>                                 
                                                  </div> 
                                              </div>
                                          </div>
                               
                                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                              <div className="nft__item">
                                                  <div className="de_countdown" data-year="2021" data-month="9" data-day="14" data-hour="8"></div>
                                                  <div className="author_list_pp">
                                                      <a href="author.html">                                    
                                                          <img className="lazy" src="images/author/author-1.jpg" alt="" />
                                                          <i className="fa fa-check"></i>
                                                      </a>
                                                  </div>
                                                  <div className="nft__item_wrap">
                                                      <a href="item-details.html">
                                                          <img src="images/author_single/porto-3.jpg" className="lazy nft__item_preview" alt="" />
                                                      </a>
                                                  </div>
                                                  <div className="nft__item_info">
                                                      <a href="item-details.html">
                                                          <h4>Three Donuts</h4>
                                                      </a>
                                                      <div className="nft__item_price">
                                                          0.05 ETH<span>1/11</span>
                                                      </div>
                                                      <div className="nft__item_action">
                                                          <a href="#">Place a bid</a>
                                                      </div>
                                                      <div className="nft__item_like">
                                                          <i className="fa fa-heart"></i><span>97</span>
                                                      </div>                                 
                                                  </div> 
                                              </div>
                                          </div>
                                         
                                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                              <div className="nft__item">
                                                  <div className="author_list_pp">
                                                      <a href="author.html">                                    
                                                          <img className="lazy" src="images/author/author-1.jpg" alt="" />
                                                          <i className="fa fa-check"></i>
                                                      </a>
                                                  </div>
                                                  <div className="nft__item_wrap">
                                                      <a href="item-details.html">
                                                          <img src="images/author_single/porto-4.jpg" className="lazy nft__item_preview" alt="" />
                                                      </a>
                                                  </div>
                                                  <div className="nft__item_info">
                                                      <a href="item-details.html">
                                                          <h4>Graffiti Colors</h4>
                                                      </a>
                                                      <div className="nft__item_price">
                                                          0.02 ETH<span>1/15</span>
                                                      </div>
                                                      <div className="nft__item_action">
                                                          <a href="#">Place a bid</a>
                                                      </div>
                                                      <div className="nft__item_like">
                                                          <i className="fa fa-heart"></i><span>73</span>
                                                      </div>                                 
                                                  </div> 
                                              </div>
                                          </div>
                                      </div>
                              </div>
                              
                              <div className="tab-2">
                                  <div className="row">

                                          
                                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                              <div className="nft__item">
                                                  <div className="de_countdown" data-year="2021" data-month="9" data-day="14" data-hour="8"></div>
                                                  <div className="author_list_pp">
                                                      <a href="author.html">                                    
                                                          <img className="lazy" src="images/author/author-1.jpg" alt="" />
                                                          <i className="fa fa-check"></i>
                                                      </a>
                                                  </div>
                                                  <div className="nft__item_wrap">
                                                      <a href="item-details.html">
                                                          <img src="images/author_single/porto-3.jpg" className="lazy nft__item_preview" alt="" />
                                                      </a>
                                                  </div>
                                                  <div className="nft__item_info">
                                                      <a href="item-details.html">
                                                          <h4>Three Donuts</h4>
                                                      </a>
                                                      <div className="nft__item_price">
                                                          0.05 ETH<span>1/11</span>
                                                      </div>
                                                      <div className="nft__item_action">
                                                          <a href="#">Place a bid</a>
                                                      </div>
                                                      <div className="nft__item_like">
                                                          <i className="fa fa-heart"></i><span>97</span>
                                                      </div>                                 
                                                  </div> 
                                              </div>
                                          </div>
                                        
                                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                              <div className="nft__item">
                                                  <div className="de_countdown" data-year="2021" data-month="8" data-day="16" data-hour="8"></div>
                                                  <div className="author_list_pp">
                                                      <a href="author.html">                                    
                                                          <img className="lazy" src="images/author/author-1.jpg" alt="" />
                                                          <i className="fa fa-check"></i>
                                                      </a>
                                                  </div>
                                                  <div className="nft__item_wrap">
                                                      <a href="item-details.html">
                                                          <img src="images/author_single/porto-1.jpg" className="lazy nft__item_preview" alt="" />
                                                      </a>
                                                  </div>
                                                  <div className="nft__item_info">
                                                      <a href="item-details.html">
                                                          <h4>Pinky Ocean</h4>
                                                      </a>
                                                      <div className="nft__item_price">
                                                          0.08 ETH<span>1/20</span>
                                                      </div>
                                                      <div className="nft__item_action">
                                                          <a href="#">Place a bid</a>
                                                      </div>
                                                      <div className="nft__item_like">
                                                          <i className="fa fa-heart"></i><span>50</span>
                                                      </div>                            
                                                  </div> 
                                              </div>
                                          </div>                 
                                        
                                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                              <div className="nft__item">
                                                  <div className="author_list_pp">
                                                      <a href="author.html">                                    
                                                          <img className="lazy" src="images/author/author-1.jpg" alt="" />
                                                          <i className="fa fa-check"></i>
                                                      </a>
                                                  </div>
                                                  <div className="nft__item_wrap">
                                                      <a href="item-details.html">
                                                          <img src="images/author_single/porto-2.jpg" className="lazy nft__item_preview" alt="" />
                                                      </a>
                                                  </div>
                                                  <div className="nft__item_info">
                                                      <a href="item-details.html">
                                                          <h4>The Animals</h4>
                                                      </a>
                                                      <div className="nft__item_price">
                                                          0.06 ETH<span>1/22</span>
                                                      </div>
                                                      <div className="nft__item_action">
                                                          <a href="#">Place a bid</a>
                                                      </div>
                                                      <div className="nft__item_like">
                                                          <i className="fa fa-heart"></i><span>80</span>
                                                      </div>                                 
                                                  </div> 
                                              </div>
                                          </div>
                                       
                                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                              <div className="nft__item">
                                                  <div className="author_list_pp">
                                                      <a href="author.html">                                    
                                                          <img className="lazy" src="images/author/author-1.jpg" alt="" />
                                                          <i className="fa fa-check"></i>
                                                      </a>
                                                  </div>
                                                  <div className="nft__item_wrap">
                                                      <a href="item-details.html">
                                                          <img src="images/author_single/porto-4.jpg" className="lazy nft__item_preview" alt="" />
                                                      </a>
                                                  </div>
                                                  <div className="nft__item_info">
                                                      <a href="item-details.html">
                                                          <h4>Graffiti Colors</h4>
                                                      </a>
                                                      <div className="nft__item_price">
                                                          0.02 ETH<span>1/15</span>
                                                      </div>
                                                      <div className="nft__item_action">
                                                          <a href="#">Place a bid</a>
                                                      </div>
                                                      <div className="nft__item_like">
                                                          <i className="fa fa-heart"></i><span>73</span>
                                                      </div>                                 
                                                  </div> 
                                              </div>
                                          </div>
                                      </div>
                              </div>

                              <div className="tab-3">
                                  <div className="row">
                            
                                      <div className="col-lg-3 col-md-6">
                                          <div className="nft__item">
                                              <div className="author_list_pp">
                                                  <a href="author.html">                                    
                                                      <img className="lazy" src="images/author/author-1.jpg" alt="" />
                                                      <i className="fa fa-check"></i>
                                                  </a>
                                              </div>
                                              <div className="nft__item_wrap">
                                                  <a href="item-details.html">
                                                      <img src="images/items/anim-4.webp" className="lazy nft__item_preview" alt="" />
                                                  </a>
                                              </div>
                                              <div className="nft__item_info">
                                                  <a href="item-details.html">
                                                      <h4>The Truth</h4>
                                                  </a>
                                                  <div className="nft__item_price">
                                                      0.06 ETH<span>1/20</span>
                                                  </div>
                                                  <div className="nft__item_action">
                                                      <a href="#">Place a bid</a>
                                                  </div>
                                                  <div className="nft__item_like">
                                                      <i className="fa fa-heart"></i><span>26</span>
                                                  </div>                                 
                                              </div>
                                          </div>
                                      </div>
                       
                                      <div className="col-lg-3 col-md-6">
                                          <div className="nft__item">
                                              <div className="de_countdown" data-year="2021" data-month="8" data-day="11" data-hour="8"></div>
                                              <div className="author_list_pp">
                                                  <a href="author.html">                                    
                                                      <img className="lazy" src="images/author/author-2.jpg" alt="" />
                                                      <i className="fa fa-check"></i>
                                                  </a>
                                              </div>
                                              <div className="nft__item_wrap">
                                                  <a href="item-details.html">
                                                      <img src="images/items/anim-2.webp" className="lazy nft__item_preview" alt="" />
                                                  </a>
                                              </div>
                                              <div className="nft__item_info">
                                                  <a href="item-details.html">
                                                      <h4>Running Puppets</h4>
                                                  </a>
                                                  <div className="nft__item_price">
                                                      0.03 ETH<span>1/24</span>
                                                  </div>    
                                                  <div className="nft__item_action">
                                                      <a href="#">Place a bid</a>
                                                  </div>
                                                  <div className="nft__item_like">
                                                      <i className="fa fa-heart"></i><span>45</span>
                                                  </div>                                  
                                              </div> 
                                          </div>
                                      </div>
                        
                                      <div className="col-lg-3 col-md-6">
                                          <div className="nft__item">
                                              <div className="author_list_pp">
                                                  <a href="author.html">                                    
                                                      <img className="lazy" src="images/author/author-3.jpg" alt="" />
                                                      <i className="fa fa-check"></i>
                                                  </a>
                                              </div>
                                              <div className="nft__item_wrap">
                                                  <a href="item-details.html">
                                                      <img src="images/items/anim-1.webp" className="lazy nft__item_preview" alt="" />
                                                  </a>
                                              </div>
                                              <div className="nft__item_info">
                                                  <a href="item-details.html">
                                                      <h4>USA Wordmation</h4>
                                                  </a>
                                                  <div className="nft__item_price">
                                                      0.09 ETH<span>1/25</span>
                                                  </div>
                                                  <div className="nft__item_action">
                                                      <a href="#">Place a bid</a>
                                                  </div>
                                                  <div className="nft__item_like">
                                                      <i className="fa fa-heart"></i><span>76</span>
                                                  </div>                                 
                                              </div> 
                                          </div>
                                      </div>
                     
                                      <div className="col-lg-3 col-md-6">
                                          <div className="nft__item">
                                              <div className="de_countdown" data-year="2021" data-month="9" data-day="29" data-hour="8"></div>
                                              <div className="author_list_pp">
                                                  <a href="author.html">                                    
                                                      <img className="lazy" src="images/author/author-4.jpg" alt="" />
                                                      <i className="fa fa-check"></i>
                                                  </a>
                                              </div>
                                              <div className="nft__item_wrap">
                                                  <a href="item-details.html">
                                                      <img src="images/items/anim-5.webp" className="lazy nft__item_preview" alt="" />
                                                  </a>
                                              </div>
                                              <div className="nft__item_info">
                                                  <a href="item-details.html">
                                                      <h4>Loop Donut</h4>
                                                  </a>
                                                  <div className="nft__item_price">
                                                      0.09 ETH<span>1/14</span>
                                                  </div>
                                                  <div className="nft__item_action">
                                                      <a href="#">Place a bid</a>
                                                  </div>
                                                  <div className="nft__item_like">
                                                      <i className="fa fa-heart"></i><span>94</span>
                                                  </div>                                 
                                              </div> 
                                          </div>
                                      </div>                                                
                                  </div>
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
export default Author;