$(document).ready((function(){$(document).trigger("bootstrap:before"),NexT.utils.registerBackToTop(),$(".site-nav-toggle button").on("click",(function(){var e=$(".site-nav"),o=e.hasClass("site-nav-on"),t=o?"slideUp":"slideDown",i=o?"removeClass":"addClass";o?sidebarToggleLines.init():sidebarToggleLines.close(),e.stop()[t]("fast",(function(){e[i]("site-nav-on")}))})),CONFIG.lazyload&&window.lozad(".content-wrap img").observe(),CONFIG.fancybox&&NexT.utils.wrapImageWithFancyBox(),NexT.utils.embeddedVideoTransformer(),NexT.utils.addActiveClassToMenuItem(),NexT.motion.integrator.add(NexT.motion.middleWares.logo).add(NexT.motion.middleWares.menu).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar),$(document).trigger("motion:before"),CONFIG.motion&&NexT.motion.integrator.bootstrap(),$(document).trigger("bootstrap:after")}));