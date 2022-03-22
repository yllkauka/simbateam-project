<template>
  <footer class="storefront-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="column store-info">
          <img src="@/assets/images/canvas-logo.svg" class="store-logo">
          <ul>
            <li> Art Center Canvas <br class="hidden xl:block"> Some Address, City, NJ 12345 </li>
            <li> PO Box 1498, Camden, SC 29021 </li>
            <li>
              <a href="tel:803-425-7676">803-425-7676</a>
              <a href="mail:info@artcentercanvas.com">
                info@artcentercanvas.com
              </a>
            </li>
            <li> Box Office Hours: 10am-5pm Mon-Fri </li>
          </ul>
        </div>
        <div class="column custom-links">
          <h2 class="column-heading">
            Custom Links 1
          </h2>
          <ul>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Our History</a></li>
            <li><a href="#">Our Board</a></li>
            <li><a href="#">Our Affiliates</a></li>
            <li><a href="#">Staff</a></li>
          </ul>
        </div>
        <div class="column custom-links">
          <h2 class="column-heading">
            Custom Links 2
          </h2>
          <ul>
            <li><a href="#">COVID - 19 Updates</a></li>
            <li><a href="#">Events &amp; Tickets</a></li>
            <li><a href="#">Classes</a></li>
            <li><a href="#">Rental Information</a></li>
            <li><a href="#">Plan Your Visit</a></li>
          </ul>
        </div>
        <div class="column social-media">
          <h2 class="column-heading">
            Social Media
          </h2>
          <ul>
            <li><a href="#" class="link">
              <Icon icon="fa-brands:instagram" class="icon" />
              Instagram
            </a></li>
            <li><a href="#" class="link">
              <Icon icon="fa-brands:twitter" class="icon" />
              Twitter
            </a></li>
            <li><a href="#" class="link">
              <Icon icon="fa-brands:facebook-square" class="icon" />
              Facebook
            </a></li>
          </ul>
        </div>
      </div>
    </div>
      <div class="store-copyright">
        <div class="container">
          <p>
            Powered by <a href="#">Art Center Canvas</a> | Copyright © 2022 Art Center Canvas. All rights reserved.
          </p>
        </div>
      </div>
  </footer>
</template>

<style lang="postcss" scoped>
.storefront-footer {
  @apply sticky top-full left-0 border-t pt-5 md:pt-7 xl:pt-10;
  a { @apply transition hover:text-accent-2 }
  .footer-grid {
    @apply mb-5 md:mb-7 grid md:grid-cols-3 xl:grid-cols-[1.4fr,1fr,1fr,1fr]
    md:gap-x-6 xl:gap-x-10 gap-y-5;
    .column {
      .column-heading {
        @apply text-accent-2 font-bold text-xl mb-5
      }
    }
    .store-info {
      @apply text-sm md:col-span-full xl:col-auto md:flex gap-x-10 items-start xl:block;
      .store-logo { @apply w-[200px] mb-5 xl:mb-7 }
      ul { @apply grid gap-y-4; }
    }
    .custom-links, .social-media { ul { @apply grid gap-y-5 } }
    .social-media .link {
      @apply inline-flex items-center gap-x-2;
      .icon { @apply w-6 h-6 }
    }
  }
  .store-copyright {
    @apply border-t py-5 md:py-6;
    p {
      @apply md:text-center text-gray-400 text-sm;
      a {
        @apply font-bold border-b-2 border-gray-400 hover:border-accent-2;
      }
    }
  }
}
</style>
