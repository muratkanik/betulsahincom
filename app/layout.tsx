import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Op.Dr. Betül Şahin - Kulak Burun Boğaz ve Yüz Estetiği',
  description: 'Kişiye özel burun estetiği çözümleri ile hayalinizdeki görünüme ulaşın. Uzman kadro ve güvenli işlem sizi bekliyor!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="no-js">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="shortcut icon" href="/web/content/webdesign/res/favicon.ico" />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,400italic,700' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Alegreya+Sans:100,300,400,400italic,500,600,700' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Patua+One:100,300,400,400italic,700' />
        <link rel='stylesheet' href='/web/css/global.css' />
        <link rel='stylesheet' href='/web/content/webdesign/css/structure.css' />
        <link rel='stylesheet' href='/web/content/webdesign/css/webdesign.css' />
        <link rel='stylesheet' href='/web/content/webdesign/css/custom.css' />
        <link rel="stylesheet" href="/web/plugins/rs-plugin/css/settings.css" />
      </head>
      <body className="template-slider layout-full-width button-stroke no-content-padding header-overlay header-transparent minimalist-header sticky-header sticky-white subheader-title-left hide-title-area">
        {children}
        
        {/* JS - Orijinal sitedeki gibi normal script tag'leri kullanıyoruz */}
        <script src="/web/js/jquery-2.1.4.min.js"></script>
        <script src="/web/js/mfn.menu.js"></script>
        <script src="/web/js/jquery.plugins.js"></script>
        <script src="/web/js/jquery.jplayer.min.js"></script>
        <script src="/web/js/animations/animations.js"></script>
        <script src="/web/js/scripts.js"></script>
        <script src="/web/js/email.js"></script>

        {/* Revolution Slider */}
        <script src="/web/plugins/rs-plugin/js/jquery.themepunch.tools.min.js"></script>
        <script src="/web/plugins/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>
        <script src="/web/plugins/rs-plugin/js/extensions/revolution.extension.video.min.js"></script>
        <script src="/web/plugins/rs-plugin/js/extensions/revolution.extension.slideanims.min.js"></script>
        <script src="/web/plugins/rs-plugin/js/extensions/revolution.extension.actions.min.js"></script>
        <script src="/web/plugins/rs-plugin/js/extensions/revolution.extension.layeranimation.min.js"></script>
        <script src="/web/plugins/rs-plugin/js/extensions/revolution.extension.kenburn.min.js"></script>
        <script src="/web/plugins/rs-plugin/js/extensions/revolution.extension.navigation.min.js"></script>
        <script src="/web/plugins/rs-plugin/js/extensions/revolution.extension.migration.min.js"></script>
        <script src="/web/plugins/rs-plugin/js/extensions/revolution.extension.parallax.min.js"></script>

        {/* Revolution Slider Initialization - Orijinal sitedeki gibi */}
        <script dangerouslySetInnerHTML={{
          __html: `
            var tpj = jQuery;
            tpj.noConflict();
            var revapi1;
            tpj(document).ready(function() {
              if (tpj("#rev_slider_1_2").revolution == undefined) {
                if (typeof revslider_showDoubleJqueryError !== 'undefined') {
                  revslider_showDoubleJqueryError("#rev_slider_1_2");
                }
              } else {
                revapi1 = tpj("#rev_slider_1_2").show().revolution({
                  sliderType: "standard",
                  sliderLayout: "fullscreen",
                  dottedOverlay: "none",
                  delay: 5000,
                  navigation: {
                    keyboardNavigation: "off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    onHoverStop: "off",
                    touch: {
                      touchenabled: "on",
                      swipe_threshold: 75,
                      swipe_min_touches: 1,
                      swipe_direction: "horizontal",
                      drag_block_vertical: false
                    },
                    bullets: {
                      enable: true,
                      hide_onmobile: false,
                      style: "hesperiden",
                      hide_onleave: false,
                      direction: "horizontal",
                      h_align: "center",
                      v_align: "bottom",
                      h_offset: 0,
                      v_offset: 20,
                      space: 5,
                      tmp: ''
                    }
                  },
                  gridwidth: 1176,
                  gridheight: 900,
                  lazyType: "none",
                  shadow: 0,
                  spinner: "spinner3",
                  stopLoop: "off",
                  stopAfterLoops: -1,
                  stopAtSlide: -1,
                  shuffle: "off",
                  autoHeight: "off",
                  fullScreenAlignForce: "on",
                  fullScreenOffsetContainer: "",
                  fullScreenOffset: "",
                  disableProgressBar: "on",
                  hideThumbsOnMobile: "off",
                  hideSliderAtLimit: 0,
                  hideCaptionAtLimit: 0,
                  hideAllCaptionAtLilmit: 0,
                  startWithSlide: 0,
                  debugMode: false,
                  fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: "off",
                  }
                });
              }
            });
          `
        }} />

        {/* Retina Logo Script - Orijinal sitedeki gibi ayrı script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            jQuery(window).load(function() {
              var retina = window.devicePixelRatio > 1 ? true : false;
              if (retina) {
                var retinaEl = jQuery("#logo img.logo-main");
                var retinaLogoW = retinaEl.width();
                var retinaLogoH = retinaEl.height();
                retinaEl.attr("src", "/web/content/webdesign/res/logo.png").width(retinaLogoW).height(retinaLogoH);
                var stickyEl = jQuery("#logo img.logo-sticky");
                var stickyLogoW = stickyEl.width();
                var stickyLogoH = stickyEl.height();
                stickyEl.attr("src", "/web/content/webdesign/res/logo.png").width(stickyLogoW).height(stickyLogoH);
              }
            });
          `
        }} />
      </body>
    </html>
  )
}
