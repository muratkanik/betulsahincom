'use client'

import { useEffect } from 'react'

export default function ClientScripts() {
  useEffect(() => {
    // Script'leri dinamik olarak yükle
    const scripts = [
      '/web/js/jquery-2.1.4.min.js',
      '/web/js/mfn.menu.js',
      '/web/js/jquery.plugins.js',
      '/web/js/jquery.jplayer.min.js',
      '/web/js/animations/animations.js',
      '/web/js/scripts.js',
      '/web/js/email.js',
      '/web/plugins/rs-plugin/js/jquery.themepunch.tools.min.js',
      '/web/plugins/rs-plugin/js/jquery.themepunch.revolution.min.js',
      '/web/plugins/rs-plugin/js/extensions/revolution.extension.video.min.js',
      '/web/plugins/rs-plugin/js/extensions/revolution.extension.slideanims.min.js',
      '/web/plugins/rs-plugin/js/extensions/revolution.extension.actions.min.js',
      '/web/plugins/rs-plugin/js/extensions/revolution.extension.layeranimation.min.js',
      '/web/plugins/rs-plugin/js/extensions/revolution.extension.kenburn.min.js',
      '/web/plugins/rs-plugin/js/extensions/revolution.extension.navigation.min.js',
      '/web/plugins/rs-plugin/js/extensions/revolution.extension.migration.min.js',
      '/web/plugins/rs-plugin/js/extensions/revolution.extension.parallax.min.js',
    ]

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = src
        script.async = true
        script.onload = () => resolve()
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`))
        document.body.appendChild(script)
      })
    }

    const loadAllScripts = async () => {
      try {
        // Script'leri sırayla yükle
        for (const src of scripts) {
          await loadScript(src)
        }

        // jQuery yüklendikten sonra Revolution Slider'ı başlat
        if (typeof window !== 'undefined' && (window as any).jQuery) {
          const tpj = (window as any).jQuery
          tpj.noConflict()
          
          tpj(document).ready(function() {
            if (tpj("#rev_slider_1_2").revolution == undefined) {
              if (typeof (window as any).revslider_showDoubleJqueryError !== 'undefined') {
                (window as any).revslider_showDoubleJqueryError("#rev_slider_1_2")
              }
            } else {
              tpj("#rev_slider_1_2").show().revolution({
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
              })
            }
          })

          // Retina Logo Script
          tpj(window).on('load', function() {
            const retina = window.devicePixelRatio > 1 ? true : false
            if (retina) {
              const retinaEl = tpj("#logo img.logo-main")
              const retinaLogoW = retinaEl.width()
              const retinaLogoH = retinaEl.height()
              retinaEl.attr("src", "/web/content/webdesign/res/logo.png").width(retinaLogoW).height(retinaLogoH)
              const stickyEl = tpj("#logo img.logo-sticky")
              const stickyLogoW = stickyEl.width()
              const stickyLogoH = stickyEl.height()
              stickyEl.attr("src", "/web/content/webdesign/res/logo.png").width(stickyLogoW).height(stickyLogoH)
            }
          })
        }
      } catch (error) {
        console.error('Error loading scripts:', error)
      }
    }

    loadAllScripts()
  }, [])

  return null
}
