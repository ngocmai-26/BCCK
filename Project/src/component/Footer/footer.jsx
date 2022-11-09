import '../Footer/footer.css'

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted container-fluid p-0  footer">
      <section className="bg-nav mt-5">
        <div className="container text-center text-md-start  ">
          <div className="row mt-9 ">
            <div className="col-md-4 col-lg-5 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 mt-5">VỀ CHÚNG TÔI</h6>
              <div className="icon">
                <a href="https://www.facebook.com/Yangho-%C4%90i-H%E1%BB%8Dc-1932568216991247/?ref=pages_you_manage">
                  <i className="fa fa-facebook-square"></i>
                </a>
                <a href="https://twitter.com/nguynth36999525" className="ml-2">
                  <i className="fa fa-twitter-square"></i>
                </a>
                <a
                  href="https://www.instagram.com/mais.ngocs.948/"
                  className="ml-2"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-5">
              <h6 className="text-uppercase fw-bold mb-4">Đường Dẫn</h6>
              <p>
                <a href="#" className="text-reset">
                  Trang Chủ
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Thông Tin Liên Lạc
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Dịch Vụ
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Điều Kiện Chính Sách
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-5">
              <h6 className="text-uppercase fw-bold mb-4">ĐỊA CHỈ</h6>
              <p>
                <a href="#" className="text-reset">
                  Cơ sở 1: Đại Lộ Bình Dương, Thủ Dầu 1, Bình Dương
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Cơ sở 2: Vĩnh Tân, Tân Uyên, Bình Dương
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-5">
              <h6 className="text-uppercase fw-bold mb-4">Thông Tin Liên Lạc</h6>
              <p className="ml-3">
                <i className="fa fa-envelope-open"></i>
                maicute2626@gmail.com
              </p>
              <p>
                <i className="fa fa-phone"></i> +84 234 567 88
              </p>
              <p>
                <i className="fa fa-phone"></i> +84 378 446 74
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4 bg-nav  mt-1"
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="#">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
