(function($, HWD) {

  // ======= Fixes =======
  HWD.noOrphans('h1,h2,h3,h4,h5,h6,li,p', '.allow-orphan');
  HWD.scrollToFix('#primary-menu');
  HWD.stopVideoModal('#videoModal', '#video-one');

  // ======= Request Appointment Form =======
  HWD.requestAppointment('#mail-form', '#success_msg' , '7fb35345-752d-4792-9480-cd3db6674a62');

  // ======= Google Maps =======
  HWD.googleMap('#google-map5', '45.5253267,-122.6973743', '45.5253267,-122.6973743');

  // ======= Carousels =======
  HWD.marqueeCarousel({ autoplay: false });
  HWD.itemCarousel('.js-services-carousel', {
    navText: [
      '<img src="assets/carousel-arrow.png" alt="navigation arrow">',
      '<img src="assets/carousel-arrow.png" alt="navigation arrow">'
    ]
  });
  HWD.itemCarousel('.js-team-carousel', {
    nav: false,
  });

})(jQuery, HelloWorldDevsTysonSteele);
