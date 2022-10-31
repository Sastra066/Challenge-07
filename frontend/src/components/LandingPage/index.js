import * as React from 'react';
import Nav from '../navbar';

function LandingPage() {
  return (
    <div>
      <Nav />
      
      <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
        </div>
      </div>

      <section className="main-section"><br/><br/><br/>
        <div className="row">
          <div className="col-lg-6 main">
            <h2>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <button className="button-28" role="button">Mulai Sewa Mobil</button>
          </div>
          <div className="col-lg-6 car">
            <img className="bg" src="./image/bg.png" alt=""/>
            <img className="img-car" src="./image/Mercedes Car EQC 300kW Edition - 900x598 1.png" alt=""/>
          </div>
        </div>
      </section>

      <section className="Our-Service container" id="Our-Services"><br/><br/><br/>
        <div className="row justify-content-md-center">
          <div className="col-lg-5 Services">
            <img src="./image/img_service.png" alt=""/>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5 deskripsi">
            <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
            <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
            <p><img src="./image/Group 53.png" alt=""/>&nbsp Sewa Mobil Dengan Supir di Bali 12 Jam</p>
            <p><img src="./image/Group 53.png" alt=""/>&nbsp Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
            <p><img src="./image/Group 53.png" alt=""/>&nbsp Sewa Mobil Jangka Panjang Bulanan</p>
            <p><img src="./image/Group 53.png" alt=""/>&nbsp Gratis Antar - Jemput Mobil di Bandara</p>
            <p><img src="./image/Group 53.png" alt=""/>&nbsp Layanan Airport Transfer / Drop In Out</p>
          </div>
        </div>
      </section>

      <section className="why-us container" id="Why-Us"><br/><br/><br/>
        <h3>Why Us?</h3>
        <p>Mengapa harus pilih Binar Car Rental?</p>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
              <div className="card-body">
                <img src="./image/icon_complete.png" alt="..."/>
                <h5 className="card-title">Mobil Lengkap</h5>
                <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
              <div className="card-body">
                <img src="./image/icon_price.png" alt="..."/>
                <h5 className="card-title">Harga Murah</h5>
                <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
              <div className="card-body">
                <img src="./image/icon_24hrs.png" alt="..."/>
                <h5 className="card-title">Layanan 24 Jam</h5>
                <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
              <div className="card-body">
                <img src="./image/icon_professional.png" alt="..."/>
                <h5 className="card-title">Sopir Profesional</h5>
                <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial" className="container"><br/><br/><br/>
        <div className="">
            <h3 className="text-center">Testimonial</h3>
            <p className="text-center">Berbagai review positif dari para pelanggan kami</p>
            <div id="carouselExampleControls" className="carousel slide mx-auto" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active bg-aliceblue">
                        <div className="row mx-4 my-5">
                            <div className="col-lg-2 m-auto">
                                <img src="./image/photo1-testimoni.png" className="d-block testimonial-img m-auto" alt="Person"/>
                            </div>
                            <div className="col-lg-10">
                                <img src="./image/Rate.png" className="testimonial-rating" alt="Rating"/>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                <p className="testimonial-name">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item bg-aliceblue">
                        <div className="row mx-4 my-5">
                            <div className="col-lg-2 m-auto">
                                <img src="./image/photo2-testimoni.png" className="d-block testimonial-img m-auto" alt="Person"/>
                            </div>
                            <div className="col-lg-10">
                                <img src="./image/Rate.png" className="testimonial-rating" alt="Rating"/>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod””</p>
                                <p className="testimonial-name">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item bg-aliceblue">
                        <div className="row mx-4 my-5">
                            <div className="col-lg-2 m-auto">
                                <img src="./image/photo1-testimoni.png" className="d-block testimonial-img m-auto" alt="Person"/>
                            </div>
                            <div className="col-lg-10">
                                <img src="./image/Rate.png" className="testimonial-rating" alt="Rating"/>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod””</p>
                                <p className="testimonial-name">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" className="testimonial-media">&#8249;</a>
                    <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" className="testimonial-media">&#8250;</a>
                </div>
            </div>
        </div>
      </section><br/><br/>

      <section className="container">
        <div className="Getting-Started">
          <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <button className="button-28" role="button">Mulai Sewa Mobil</button>
        </div>
        
      </section>

      <section className="faq container" id="FAQ"><br/><br/><br/>
        <div className="row">
          <div className="col-lg-5">
            <h3>Frequently Asked Question</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="col-lg-7">
            <div className="accordion" id="accordionExample">
              <div className="card">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="card">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="card">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="card">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Apakah Ada biaya antar-jemput?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="card">
                <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Bagaimana jika terjadi kecelakaan?
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="col-lg-2 col-md-6 col-12">
            <a href="#Our-Services">Our services</a><br/>
            <a href="#Why-Us">Why Us</a><br/>
            <a href="#testimonial">Testimonial</a><br/>
            <a href="#FAQ">FAQ</a><br/>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <p>Connect with us</p>
            <img src="./image/icon_facebook.png" alt=""/>
            <img src="./image/icon_instagram.png" alt=""/>
            <img src="./image/icon_twitter.png" alt=""/>
            <img src="./image/icon_mail.png" alt=""/>
            <img src="./image/icon_twitch.png" alt=""/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <p>Copyright Binar 2022</p>
            <img src="./image/logo.png" alt=""/>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;