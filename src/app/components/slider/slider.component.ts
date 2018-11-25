import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  template: `
  <!-- Header
  ============================================= -->
  <header id="header" class="transparent-header dark" data-responsive-class="not-dark">

    <div id="header-wrap">

      <div class="container clearfix">

        <div id="primary-menu-trigger"><i class="icon-reorder"></i></div>

      
        <div id="logo">
          <a href="index.html" class="standard-logo" data-dark-logo="images/logo-dark.png">Logo</a>
        </div>

        <!-- Primary Navigation
        ============================================= -->
        <nav id="primary-menu" class="style-4">

          <ul>
            <li class="current"><a href="index.html"><div><i class="icon-home2"></i>Home</div></a>	</li>
            <li><a href="#"><div><i class="icon-plane"></i>Flights</div></a></li>
            <li><a href="#"><div><i class="icon-building"></i>Hotels</div></a></li>
            <li><a href="#"><div><i class="icon-gift"></i>Holidays</div></a></li>
            <li><a href="#"><div><i class="icon-pencil2"></i>Blog</div></a></li>
            <li><a href="#"><div><i class="icon-phone3"></i>1800 105 2541</div></a></li>
          </ul>

        </nav><!-- #primary-menu end -->

      </div>

    </div>

  </header><!-- #header end -->
  <section id="slider" class="slider-element slider-parallax swiper_wrapper full-screen clearfix">

			<div class="slider-parallax-inner">

				<div class="fslider" data-speed="3000" data-pause="7500" data-animation="fade" data-arrows="false" data-pagi="false" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; background-color: #333;">
					<div class="flexslider" style="height: 100% !important;">
						<div class="slider-wrap" style="height: inherit;">
							<div class="slide" style="background: url('./assets/images/1.jpg') center center; background-size: cover; height: 100% !important;"></div>
							<div class="slide" style="background: url('./assets/images/2.jpg') center center; background-size: cover; height: 100% !important;"></div>
							<div class="slide" style="background: url('./assets/images/3.jpg') center center; background-size: cover; height: 100% !important;"></div>
						</div>
					</div>
				</div>

				<div id="travel-slider-overlay">

					<div class="vertical-middle">

						<div class="container clearfix">

							<div class="tabs travel-organiser-tabs clearfix">

								<ul class="tab-nav clearfix">
									<li><a href="#tab-flights"><i class="icon-plane"></i><span class="d-none d-md-inline-block">Flights</span></a></li>
									<li><a href="#tab-hotels"><i class="icon-building"></i><span class="d-none d-md-inline-block">Hotels</span></a></li>
									<li><a href="#tab-flights-hotels"><span class="d-block d-md-none"><i class="icon-plane"></i> + <i class="icon-building"></i></span><span class="d-none d-md-inline-block">Flights + Hotels <span class="badge badge-danger">Save</span></span></a></li>
									<li><a href="#tab-holidays"><i class="icon-gift"></i><span class="d-none d-md-inline-block">Holidays</span></a></li>
								</ul>

								<div class="tab-container">

									<div class="tab-content clearfix" id="tab-flights">
										<div class="heading-block nobottomborder bottommargin-sm clearfix">
											<h4 class="fleft">Book your Flights</h4>
											<div class="btn-group fright">
												<button type="button" class="btn btn-danger btn-sm bgcolor border-color">Domestic</button>
												<button type="button" class="btn btn-secondary btn-sm">International</button>
											</div>
											<div class="clear"></div>
										</div>
										<form action="#" method="post" class="nobottommargin">
											<div class="row">
												<div class="col-md-6 col-12 bottommargin-sm">
													<label for="from">From</label>
													<input type="text" value="" class="sm-form-control" name="from" placeholder="Eg. Melbourne, Australia">
												</div>
												<div class="col-md-6 col-12 bottommargin-sm">
													<label for="to">To</label>
													<input type="text" value="" class="sm-form-control" name="to" placeholder="Eg. New York, United States">
												</div>
												<div class="clear"></div>
												<div class="input-daterange travel-date-group col-md-9 bottommargin-sm">
													<div class="row">
														<div class="col-md-6 col-6">
															<label for="start">Departure</label>
															<input type="text" value="" class="sm-form-control tleft" name="start" placeholder="MM/DD/YYYY">
														</div>
														<div class="col-md-6 col-6">
															<label for="end">Return</label>
															<input type="text" value="" class="sm-form-control tleft" name="end" placeholder="MM/DD/YYYY">
														</div>
													</div>
												</div>
												<div class="col-md-3 bottommargin-sm">
													<label for="">Adults</label>
													<input type="number" min="1" max="10" value="" class="sm-form-control" name="end" placeholder="2">
												</div>
												<div class="col-md-12">
													<button class="button button-3d nomargin rightmargin-sm">Search Flights</button>
													<a href="#" class="more-link fright" style="margin-top: 9px;">Advanced Search</a>
												</div>
											</div>
										</form>
									</div>
									<div class="tab-content clearfix" id="tab-hotels">
										<div class="heading-block nobottomborder bottommargin-sm clearfix">
											<h4 class="fleft">Book your Hotels</h4>
										</div>
									</div>
									<div class="tab-content clearfix" id="tab-flights-hotels">
										<div class="heading-block nobottomborder bottommargin-sm clearfix">
											<h4 class="fleft">Book Flights &amp; Hotels</h4>
										</div>
									</div>
									<div class="tab-content clearfix" id="tab-holidays">
										<div class="heading-block nobottomborder bottommargin-sm clearfix">
											<h4>Search for Holiday Packages</h4>
										</div>
									</div>

								</div>

							</div>

						</div>

					</div>

				</div>

			</div>

    </section>
    
`,
  styles: []
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
