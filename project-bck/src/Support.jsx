function Support({ listComments, setComment, onClickComment }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <div id="map" className="mt-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.8232898595224!2d106.66703571472024!3d10.976707192185804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d122c321e817%3A0x4922ad6622e71181!2zxJDhuqFpIGzhu5kgQsOsbmggRMawxqFuZywgVHAuIFRo4bunIEThuqd1IE3hu5l0LCBCw6xuaCBExrDGoW5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1668567327332!5m2!1svi!2s"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="col-7">
          <h2>Ý kiến của khách hàng</h2>
          {listComments.map((item, key) => (
            <div className="row mt-3" key={key}>
              <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-5">
                <img src={item.avatar} width="80%" />
              </div>
              <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-7">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-5 col-xl-4">
                    <b>{item.name}</b>
                  </div>
                </div>
                <h6>{item.comment}</h6>
              </div>
            </div>
          ))}
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-3">
            <h4>Thêm nhận xét</h4>
            <textarea rows="6" placeholder="Nội Dung" onChange={(el)=>setComment(el.target.value)} ></textarea>
            <div className="send col-lg-4 col-md-2">
              <button className="sendto" onClick={onClickComment}>Gửi đi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
