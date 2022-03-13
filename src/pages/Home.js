import React from "react";
class Home extends React.Component {
  render() {
    return(
      <>
      <div className="no-bottom no-top" id="content">
      <div id="top"></div>
      <section id="section-hero" aria-label="section" className="no-top no-bottom vh-100" data-bgimage="url(images/background/bg-shape-1.jpg) bottom">
          <div className="v-center">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-md-6">
                          <div className="spacer-single"></div>
                          <h6 className="wow fadeInUp" data-wow-delay=".5s"><span className="text-uppercase id-color-2">Gigaland Market</span></h6>
                          <div className="spacer-10"></div>
                          <h1 className="wow fadeInUp" data-wow-delay=".75s">Create, sell or collect digital items.</h1>
                          <p className="wow fadeInUp lead" data-wow-delay="1s">
                          Unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable</p>
                          <div className="spacer-10"></div>
                          <a href="explore.html" className="btn-main wow fadeInUp lead" data-wow-delay="1.25s">Explore</a>
                          <div className="mb-sm-30"></div>
                      </div>
                      <div className="col-md-6 xs-hide">
                          <img src="images/misc/nft.png" className="lazy img-fluid" alt="" />
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section id="section-intro" className="no-top no-bottom">
          <div className="container">
              <div className="row">
                  <div className="col-lg-4 col-md-6 mb-sm-30">
                      <div className="feature-box f-boxed style-3">
                          <i className="wow fadeInUp bg-color-2 i-boxed icon_wallet"></i>
                          <div className="text">
                              <h4 className="wow fadeInUp">Set up your wallet</h4>
                              <p className="wow fadeInUp" data-wow-delay=".25s">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                          </div>
                          <i className="wm icon_wallet"></i>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-sm-30">
                      <div className="feature-box f-boxed style-3">
                          <i className="wow fadeInUp bg-color-2 i-boxed icon_cloud-upload_alt"></i>
                          <div className="text">
                              <h4 className="wow fadeInUp">Add your NFT's</h4>
                              <p className="wow fadeInUp" data-wow-delay=".25s">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                          </div>
                          <i className="wm icon_cloud-upload_alt"></i>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-sm-30">
                      <div className="feature-box f-boxed style-3">
                          <i className="wow fadeInUp bg-color-2 i-boxed icon_tags_alt"></i>
                          <div className="text">
                              <h4 className="wow fadeInUp">Sell your NFT's</h4>
                              <p className="wow fadeInUp" data-wow-delay=".25s">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                          </div>
                          <i className="wm icon_tags_alt"></i>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section id="section-collections" className="no-bottom">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="text-center">
                          <h2>Hot Collections</h2>
                          <div className="small-border bg-color-2"></div>
                      </div>
                  </div>
                  <div id="collection-carousel" className="owl-carousel">

                          <div className="nft_coll">
                              <div className="nft_wrap">
                                  <a href="collection.html"><img src="images/collections/coll-1.jpg" className="lazy img-fluid" alt="" /></a>
                              </div>
                              <div className="nft_coll_pp">
                                  <a href="collection.html"><img className="lazy" src="images/author/author-1.jpg" alt="" /></a>
                                  <i className="fa fa-check"></i>
                              </div>
                              <div className="nft_coll_info">
                                  <a href="collection.html"><h4>Abstraction</h4></a>
                                  <span>ERC-192</span>
                              </div>
                          </div>
                      
                          <div className="nft_coll">
                              <div className="nft_wrap">
                                  <a href="collection.html"><img src="images/collections/coll-2.jpg" className="lazy img-fluid" alt="" /></a>
                              </div>
                              <div className="nft_coll_pp">
                                  <a href="collection.html"><img className="lazy" src="images/author/author-2.jpg" alt="" /></a>
                                  <i className="fa fa-check"></i>
                              </div>
                              <div className="nft_coll_info">
                                  <a href="collection.html"><h4>Patternlicious</h4></a>
                                  <span>ERC-61</span>
                              </div>
                          </div>
                      
                          <div className="nft_coll">
                              <div className="nft_wrap">
                                  <a href="collection.html"><img src="images/collections/coll-3.jpg" className="lazy img-fluid" alt="" /></a>
                              </div>
                              <div className="nft_coll_pp">
                                  <a href="collection.html"><img className="lazy" src="images/author/author-3.jpg" alt="" /></a>
                                  <i className="fa fa-check"></i>
                              </div>
                              <div className="nft_coll_info">
                                  <a href="collection.html"><h4>Skecthify</h4></a>
                                  <span>ERC-126</span>
                              </div>
                          </div>
                      
                          <div className="nft_coll">
                              <div className="nft_wrap">
                                  <a href="collection.html"><img src="images/collections/coll-4.jpg" className="lazy img-fluid" alt="" /></a>
                              </div>
                              <div className="nft_coll_pp">
                                  <a href="collection.html"><img className="lazy" src="images/author/author-4.jpg" alt="" /></a>
                                  <i className="fa fa-check"></i>
                              </div>
                              <div className="nft_coll_info">
                                  <a href="collection.html"><h4>Cartoonism</h4></a>
                                  <span>ERC-73</span>
                              </div>
                          </div>
                      
                          <div className="nft_coll">
                              <div className="nft_wrap">
                                  <a href="collection.html"><img src="images/collections/coll-5.jpg" className="lazy img-fluid" alt="" /></a>
                              </div>
                              <div className="nft_coll_pp">
                                  <a href="collection.html"><img className="lazy" src="images/author/author-5.jpg" alt="" /></a>
                                  <i className="fa fa-check"></i>
                              </div>
                              <div className="nft_coll_info">
                                  <a href="collection.html"><h4>Virtuland</h4></a>
                                  <span>ERC-85</span>
                              </div>
                          </div>
                      
                          <div className="nft_coll">
                              <div className="nft_wrap">
                                  <a href="collection.html"><img src="images/collections/coll-6.jpg" className="lazy img-fluid" alt="" /></a>
                              </div>
                              <div className="nft_coll_pp">
                                  <a href="collection.html"><img className="lazy" src="images/author/author-6.jpg" alt="" /></a>
                                  <i className="fa fa-check"></i>
                              </div>
                              <div className="nft_coll_info">
                                  <a href="collection.html"><h4>Papercut</h4></a>
                                  <span>ERC-42</span>
                              </div>
                          </div>
                          
                      </div>
                  </div>
              </div>
          </section>

      <section id="section-popular">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="text-center">
                          <h2>Top Sellers</h2>
                          <div className="small-border bg-color-2"></div>
                      </div>
                  </div>
                  <div className="col-md-12 wow fadeIn">
                      <ol className="author_list">
                          <li>                                    
                              <div className="author_list_pp">
                                  <a href="author.html">
                                      <img className="lazy" src="images/author/author-1.jpg" alt="" />
                                      <i className="fa fa-check"></i>
                                  </a>
                              </div>                                    
                              <div className="author_list_info">
                                  <a href="author.html">Monica Lucas</a>
                                  <span>3.2 ETH</span>
                              </div>
                          </li>
                          <li>
                              <div className="author_list_pp">
                                  <a href="author.html">                                    
                                      <img className="lazy" src="images/author/author-2.jpg" alt="" />
                                      <i className="fa fa-check"></i>
                                  </a>
                              </div>
                              <div className="author_list_info">
                                  <a href="author.html">Mamie Barnett</a>
                                  <span>2.8 ETH</span>
                              </div>
                          </li>
                          <li>
                              <div className="author_list_pp">
                                  <a href="author.html">                                    
                                      <img className="lazy" src="images/author/author-3.jpg" alt="" />
                                      <i className="fa fa-check"></i>
                                  </a>
                              </div>
                              <div className="author_list_info">
                                  <a href="author.html">Nicholas Daniels</a>
                                  <span>2.5 ETH</span>
                              </div>
                          </li>
                          <li>
                              <div className="author_list_pp">
                                  <a href="author.html">                                    
                                      <img className="lazy" src="images/author/author-4.jpg" alt="" />
                                      <i className="fa fa-check"></i>
                                  </a>
                              </div>
                              <div className="author_list_info">
                                  <a href="author.html">Lori Hart</a>
                                  <span>2.2 ETH</span>
                              </div>
                          </li>
                          <li>
                              <div className="author_list_pp">
                                  <a href="author.html">                                    
                                      <img className="lazy" src="images/author/author-5.jpg" alt="" />
                                      <i className="fa fa-check"></i>
                                  </a>
                              </div>
                              <div className="author_list_info">
                                  <a href="author.html">Jimmy Wright</a>
                                  <span>1.9 ETH</span>
                              </div>
                          </li>
                          <li>
                              <div className="author_list_pp">
                                  <a href="author.html">                                    
                                      <img className="lazy" src="images/author/author-6.jpg" alt="" />
                                      <i className="fa fa-check"></i>
                                  </a>
                              </div>
                              <div className="author_list_info">
                                  <a href="author.html">Karla Sharp</a>
                                  <span>1.6 ETH</span>
                              </div>
                          </li>
                          <li>
                              <div className="author_list_pp">
                                  <a href="author.html">                                    
                                      <img className="lazy" src="images/author/author-7.jpg" alt="" />
                                      <i className="fa fa-check"></i>
                                  </a>
                              </div>
                              <div className="author_list_info">
                                  <a href="author.html">Gayle Hicks</a>
                                  <span>1.5 ETH</span>
                              </div>
                          </li>
                          <li>
                              <div className="author_list_pp">
                                  <a href="author.html">                                    
                                      <img className="lazy" src="images/author/author-8.jpg" alt="" />
                                      <i className="fa fa-check"></i>
                                  </a>
                              </div>
                              <div className="author_list_info">
                                  <a href="author.html">Claude Banks</a>
                                  <span>1.3 ETH</span>
                              </div>
                          </li>
                          <li>
                              <div className="author_list_pp">
                                  <a href="author.html">                                    
                                      <img className="lazy" src="images/author/author-9.jpg" alt="" />
                                      <i className="fa fa-check"></i>
                                  </a>
                              </div>
                              <div className="author_list_info">
                                  <a href="author.html">Franklin Greer</a>
                                  <span>0.9 ETH</span>
                              </div>
                          </li>
                          <li>
                              <div className="author_list_pp">
                                  <a href="author.html">                                    
                                      <img className="lazy" src="images/author/author-10.jpg" alt="" />
                                      <i className="fa fa-check"></i>
                                  </a>
                              </div>
                              <div className="author_list_info">
                                  <a href="author.html">Stacy Long</a>
                                  <span>0.8 ETH</span>
                              </div>
                          </li>
                          <li>
                              <div className="author_list_pp">
                                  <a href="author.html">                                    
                                      <img className="lazy" src="images/author/author-11.jpg" alt="" />
                                      <i className="fa fa-check"></i>
                                  </a>
                              </div>
                              <div className="author_list_info">
                                  <a href="author.html">Ida Chapman</a>
                                  <span>0.6 ETH</span>
                              </div>
                          </li>
                          <li>
                              <div className="author_list_pp">
                                  <a href="author.html">                                    
                                      <img className="lazy" src="images/author/author-12.jpg" alt="" />
                                      <i className="fa fa-check"></i>
                                  </a>
                              </div>
                              <div className="author_list_info">
                                  <a href="author.html">Fred Ryan</a>
                                  <span>0.5 eth</span>
                              </div>
                          </li>
                      </ol>
                  </div>
              </div>
          </div>
      </section>        
      <section id="section-category" className="no-top">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="text-center">
                          <h2>Browse by category</h2>
                          <div className="small-border bg-color-2"></div>
                      </div>
                  </div>
                  <div className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".1s">
                      <a href='explore.html' className="icon-box style-2 rounded">
                          <i className="fa fa-image"></i>
                          <span>Art</span>
                      </a>
                  </div>
                  <div className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".2s">
                      <a href='explore.html' className="icon-box style-2 rounded">
                          <i className="fa fa-music"></i>
                          <span>Music</span>
                      </a>
                  </div>
                  <div className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".3s">
                      <a href='explore.html' className="icon-box style-2 rounded">
                          <i className="fa fa-search"></i>
                          <span>Domain Names</span>
                      </a>
                  </div>
                  <div className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".4s">
                      <a href='explore.html' className="icon-box style-2 rounded">
                          <i className="fa fa-globe"></i>
                          <span>Virtual Worlds</span>
                      </a>
                  </div>
                  <div className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".5s">
                      <a href='explore.html' className="icon-box style-2 rounded">
                          <i className="fa fa-vcard"></i>
                          <span>Trading Cards</span>
                      </a>
                  </div>
                  <div className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".6s">
                      <a href='explore.html' className="icon-box style-2 rounded">
                          <i className="fa fa-th"></i>
                          <span>Collectibles</span>
                      </a>
                  </div>
              </div>
          </div>
      </section>     
  </div>
      </>
    );
  }
}
export default Home;