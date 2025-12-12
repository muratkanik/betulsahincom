'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function ClientScripts() {
  const pathname = usePathname()
  const scriptsLoadedRef = useRef(false)
  const sliderInitializedRef = useRef(false)

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
        // Script zaten yüklenmişse tekrar yükleme
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve()
          return
        }
        const script = document.createElement('script')
        script.src = src
        script.async = true
        script.onload = () => resolve()
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`))
        document.body.appendChild(script)
      })
    }

    const initSlider = () => {
      if (typeof window === 'undefined') return

      const tpj = (window as any).jQuery
      if (!tpj) return

      tpj.noConflict()

      // Slider zaten başlatılmışsa önce destroy et
      const sliderElement = tpj("#rev_slider_1_2")
      if (sliderElement.length > 0 && sliderElement.data('revolution')) {
        try {
          sliderElement.revolution('destroy')
        } catch (e) {
          // Destroy hatası olursa devam et
          console.log('Slider destroy error (ignored):', e)
        }
        sliderInitializedRef.current = false
      }

      tpj(document).ready(function() {
        if (sliderElement.length === 0) return

        if (sliderElement.revolution == undefined) {
          if (typeof (window as any).revslider_showDoubleJqueryError !== 'undefined') {
            (window as any).revslider_showDoubleJqueryError("#rev_slider_1_2")
          }
        } else {
          sliderElement.show().revolution({
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
          sliderInitializedRef.current = true
        }
      })
    }

    const loadAllScripts = async () => {
      try {
        // Script'leri sadece ilk yüklemede yükle
        if (!scriptsLoadedRef.current) {
          for (const src of scripts) {
            await loadScript(src)
          }
          scriptsLoadedRef.current = true
        }

        // jQuery'in yüklenmesini bekle
        let retries = 0
        const maxRetries = 50
        while (typeof window !== 'undefined' && !(window as any).jQuery && retries < maxRetries) {
          await new Promise(resolve => setTimeout(resolve, 100))
          retries++
        }

        // jQuery yüklendikten sonra Revolution Slider'ı başlat
        if (typeof window !== 'undefined' && (window as any).jQuery) {
          // Kısa bir gecikme ile slider'ı başlat (DOM'un hazır olması için)
          setTimeout(() => {
            initSlider()
          }, 100)
        }
      } catch (error) {
        console.error('Error loading scripts:', error)
      }
    }

    loadAllScripts()
  }, [pathname]) // pathname değiştiğinde yeniden çalıştır

  return null
}
