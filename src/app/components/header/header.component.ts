import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <!-- Top Bar
  ============================================= -->
  <div id="top-bar" class="transparent-topbar dark">

    <div class="container clearfix" style="height: 100%;">

      <div class="col_half nobottommargin clearfix">

        <!-- Top Links
        ============================================= -->
        <div class="top-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">USD</a>
              <ul>
                <li><a href="#">EUR</a></li>
                <li><a href="#">AUD</a></li>
                <li><a href="#">GBP</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- .top-links end -->

      </div>

      <div class="col_half fright col_last clearfix nobottommargin">

        <!-- Top Social
        ============================================= -->
        <div id="top-social">
          <ul>
            <li><a href="#" class="si-facebook"><span class="ts-icon"><i class="icon-facebook"></i></span><span class="ts-text">Facebook</span></a></li>
            <li><a href="#" class="si-twitter"><span class="ts-icon"><i class="icon-twitter"></i></span><span class="ts-text">Twitter</span></a></li>
            <li><a href="#" class="si-pinterest"><span class="ts-icon"><i class="icon-pinterest"></i></span><span class="ts-text">Pinterest</span></a></li>
            <li><a href="#" class="si-instagram"><span class="ts-icon"><i class="icon-instagram2"></i></span><span class="ts-text">Instagram</span></a></li>
            <li><a href="tel:+91.11.85412542" class="si-call"><span class="ts-icon"><i class="icon-call"></i></span><span class="ts-text">+91.11.85412542</span></a></li>
            <li><a href="mailto:info@hello.com" class="si-email3"><span class="ts-icon"><i class="icon-envelope-alt"></i></span><span class="ts-text">info@hello.com</span></a></li>
          </ul>
        </div><!-- #top-social end -->

      </div>

    </div>

  </div><!-- #top-bar end -->

  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
