// Fully readable, editable and commented code for development contained in the purchasable download package

function getCSSBreakpoint() {
  return window.getComputedStyle(document.querySelector("body"), ":before").getPropertyValue("content").replace(/\"/g, "")
}
function cssBreakpoint(a) {
  return getCSSBreakpoint() === a && true
}
function debounce(b, d, a) {
  var c, d = d || 100;
  return function () {
    var h = this, g = arguments, f = function () {
      c = null;
      if (!a) {
        b.apply(h, g)
      }
    }, e = a && !c;
    clearTimeout(c);
    c = setTimeout(f, d);
    if (e) {
      b.apply(h, g)
    }
  }
}
$(document).ready(function () {
  function c() {
    $(".navbar .navbar-collapse").affix({offset: {top: $(".navbar-header").outerHeight(true)}});
    $(".affix, .affix-top").wrap('<div class="affix-wrapper"></div>').parent().css("min-height", $(".affix, .affix-top").outerHeight(true))
  }

  function b() {
    $(".affix, .affix-top").unwrap()
  }

  if (cssBreakpoint("md")) {
    c();
    var a = true
  } else {
    var a = false
  }
  $(window).resize(debounce(function () {
    if (cssBreakpoint("md") && !a) {
      c();
      a = true
    } else {
      if (cssBreakpoint("xs") && a) {
        b();
        a = false
      }
    }
  }))
});
$(document).ready(function () {
  var h = $(".navbar-header").outerHeight(true), e = {
    navbarPadTop: {
      element: ".navbar .navbar-collapse",
      style: "padding-top",
      start: "currentValueFromCSS",
      end: 0,
      distance: 300,
      delay: h
    },
    navbarPadBot: {
      element: ".navbar .navbar-collapse",
      style: "padding-bottom",
      start: "currentValueFromCSS",
      end: 0,
      distance: 300,
      delay: h
    },
    navbarLogoH: {
      element: ".navbar-brand img",
      style: "height",
      start: "currentValueFromCSS",
      end: 20,
      distance: 300,
      delay: h
    }
  }, d = 0, b = false;

  function a() {
    $.each(e, function (i, j) {
      j.start = typeof j.start === "string" ? parseInt($(j.element).css(j.style), 10) : j.start;
      j.maxChange = j.start - j.end;
      j.scrollRatio = j.maxChange / j.distance;
      j.animTriggered = false;
      j.animFinished = false;
      $(j.element).addClass("animate")
    })
  }

  function c() {
    $.each(e, function (i, j) {
      $(j.element).css(j.style, "").removeClass("animate animate-after")
    })
  }

  function g() {
    d = $(document).scrollTop();
    b = false;
    $.each(e, function (i, j) {
      if (d > j.delay) {
        if (!j.animTriggered) {
          j.animTriggered = true
        }
        j.scrolled = d - j.delay;
        if (j.scrolled <= j.distance) {
          j.currentChange = j.start - j.scrolled * j.scrollRatio.toFixed(2);
          $(j.element).css(j.style, j.currentChange + "px");
          if (j.animFinished) {
            j.animFinished = false;
            $(j.element).removeClass("animate-after")
          }
        } else {
          if (!j.animFinished) {
            j.animFinished = true;
            $(j.element).css(j.style, j.end + "px").addClass("animate-after")
          }
        }
      } else {
        if (j.animTriggered) {
          j.animTriggered = false;
          $(j.element).css(j.style, j.start + "px")
        }
      }
    })
  }

  if (cssBreakpoint("md")) {
    a();
    var f = true
  } else {
    var f = false
  }
  $(window).resize(debounce(function () {
    if (cssBreakpoint("md") && !f) {
      a();
      g();
      f = true
    } else {
      if (cssBreakpoint("xs") && f) {
        c();
        f = false
      }
    }
  }));
  $(window).scroll(function () {
    if (cssBreakpoint("md") && !b) {
      window.requestAnimationFrame(g)
    }
    b = true
  })
});
$(document).ready(function () {
  function b() {
    $(".dropdown, .dropdown-submenu").addClass("hover");
    $(document).on({
      mouseenter: function () {
        $(".open").removeClass("open");
        $(this).addClass("open").find(".dropdown-toggle").removeAttr("data-toggle")
      }, mouseleave: function () {
        $(this).removeClass("open").find(".dropdown-toggle").attr("data-toggle", "dropdown")
      }
    }, ".dropdown.hover");
    $(document).on({
      mouseleave: function () {
        $(this).removeClass("open")
      }
    }, ".dropdown-submenu.hover.open")
  }

  function c() {
    $(".dropdown, .dropdown-submenu").removeClass("hover")
  }

  $(".dropdown-submenu [data-toggle=dropdown]").click(function (d) {
    $(this).parent().siblings(".open").removeClass("open").find(".open").removeClass("open");
    $(this).parent().toggleClass("open").find(".open").removeClass("open");
    d.preventDefault();
    d.stopPropagation()
  });
  if (cssBreakpoint("md")) {
    b();
    var a = true
  } else {
    var a = false
  }
  $(window).resize(debounce(function () {
    if (cssBreakpoint("md") && !a) {
      b();
      a = true
    } else {
      if (cssBreakpoint("xs") && a) {
        c();
        a = false
      }
    }
  }))
});
$(document).ready(function () {
  $("main").addClass("js-reveal")
});
$(document).ready(function () {
  var g = true, f = false, d = "main", e = '[class*="col-"], .isotope .item, .posts .post', a = "fade-up";
  AOS.init({
    offset: 120,
    duration: 500,
    easing: "ease-out-cubic",
    delay: 0,
    once: true,
    disable: !g,
    startEvent: "DOMContentLoaded"
  });
  function b() {
    $(d + " " + e).attr({"data-aos": a});
    c($(d + " .collapsed").parents(d + " > *").next().find(e), true);
    aosEnabled = true
  }

  function c(h, i) {
    h.removeAttr("data-aos");
    aosEnabled = i || false
  }

  if (g && (!f || cssBreakpoint("md"))) {
    b()
  } else {
    aosEnabled = false
  }
  $(window).resize(debounce(function () {
    if (g && !aosEnabled && (!f || cssBreakpoint("md"))) {
      b();
      $(d + " " + e).addClass("aos-animate")
    } else {
      if (aosEnabled && f && cssBreakpoint("xs")) {
        c($(e))
      }
    }
  }));
  $("a[data-filter]").click(function () {
    if (aosEnabled) {
      c($(e))
    }
  })
});
$(document).ready(function () {
  var j = true;
  var i = "#owl-main";

  function a() {
    if (!j) {
      $(i + " .caption .fadeIn-1, " + i + " .caption .fadeIn-2, " + i + " .caption .fadeIn-3").stop().delay(800).animate({opacity: 0}, {
        duration: 400,
        easing: "easeInCubic"
      })
    } else {
      $(i + " .caption .fadeIn-1, " + i + " .caption .fadeIn-2, " + i + " .caption .fadeIn-3").css({opacity: 0})
    }
  }

  function c() {
    if (!j) {
      $(i + " .caption .fadeInDown-1, " + i + " .caption .fadeInDown-2, " + i + " .caption .fadeInDown-3").stop().delay(800).animate({
        opacity: 0,
        top: "-15px"
      }, {duration: 400, easing: "easeInCubic"})
    } else {
      $(i + " .caption .fadeInDown-1, " + i + " .caption .fadeInDown-2, " + i + " .caption .fadeInDown-3").css({
        opacity: 0,
        top: "-15px"
      })
    }
  }

  function l() {
    if (!j) {
      $(i + " .caption .fadeInUp-1, " + i + " .caption .fadeInUp-2, " + i + " .caption .fadeInUp-3").stop().delay(800).animate({
        opacity: 0,
        top: "15px"
      }, {duration: 400, easing: "easeInCubic"})
    } else {
      $(i + " .caption .fadeInUp-1, " + i + " .caption .fadeInUp-2, " + i + " .caption .fadeInUp-3").css({
        opacity: 0,
        top: "15px"
      })
    }
  }

  function b() {
    if (!j) {
      $(i + " .caption .fadeInLeft-1, " + i + " .caption .fadeInLeft-2, " + i + " .caption .fadeInLeft-3").stop().delay(800).animate({
        opacity: 0,
        left: "15px"
      }, {duration: 400, easing: "easeInCubic"})
    } else {
      $(i + " .caption .fadeInLeft-1, " + i + " .caption .fadeInLeft-2, " + i + " .caption .fadeInLeft-3").css({
        opacity: 0,
        left: "15px"
      })
    }
  }

  function e() {
    if (!j) {
      $(i + " .caption .fadeInRight-1, " + i + " .caption .fadeInRight-2, " + i + " .caption .fadeInRight-3").stop().delay(800).animate({
        opacity: 0,
        left: "-15px"
      }, {duration: 400, easing: "easeInCubic"})
    } else {
      $(i + " .caption .fadeInRight-1, " + i + " .caption .fadeInRight-2, " + i + " .caption .fadeInRight-3").css({
        opacity: 0,
        left: "-15px"
      })
    }
  }

  function f() {
    $(i + " .active .caption .fadeIn-1").stop().delay(500).animate({opacity: 1}, {
      duration: 800,
      easing: "easeOutCubic"
    });
    $(i + " .active .caption .fadeIn-2").stop().delay(700).animate({opacity: 1}, {
      duration: 800,
      easing: "easeOutCubic"
    });
    $(i + " .active .caption .fadeIn-3").stop().delay(1000).animate({opacity: 1}, {
      duration: 800,
      easing: "easeOutCubic"
    })
  }

  function g() {
    $(i + " .active .caption .fadeInDown-1").stop().delay(500).animate({opacity: 1, top: "0"}, {
      duration: 800,
      easing: "easeOutCubic"
    });
    $(i + " .active .caption .fadeInDown-2").stop().delay(700).animate({opacity: 1, top: "0"}, {
      duration: 800,
      easing: "easeOutCubic"
    });
    $(i + " .active .caption .fadeInDown-3").stop().delay(1000).animate({opacity: 1, top: "0"}, {
      duration: 800,
      easing: "easeOutCubic"
    })
  }

  function h() {
    $(i + " .active .caption .fadeInUp-1").stop().delay(500).animate({opacity: 1, top: "0"}, {
      duration: 800,
      easing: "easeOutCubic"
    });
    $(i + " .active .caption .fadeInUp-2").stop().delay(700).animate({opacity: 1, top: "0"}, {
      duration: 800,
      easing: "easeOutCubic"
    });
    $(i + " .active .caption .fadeInUp-3").stop().delay(1000).animate({opacity: 1, top: "0"}, {
      duration: 800,
      easing: "easeOutCubic"
    })
  }

  function k() {
    $(i + " .active .caption .fadeInLeft-1").stop().delay(500).animate({opacity: 1, left: "0"}, {
      duration: 800,
      easing: "easeOutCubic"
    });
    $(i + " .active .caption .fadeInLeft-2").stop().delay(700).animate({opacity: 1, left: "0"}, {
      duration: 800,
      easing: "easeOutCubic"
    });
    $(i + " .active .caption .fadeInLeft-3").stop().delay(1000).animate({opacity: 1, left: "0"}, {
      duration: 800,
      easing: "easeOutCubic"
    })
  }

  function d() {
    $(i + " .active .caption .fadeInRight-1").stop().delay(500).animate({opacity: 1, left: "0"}, {
      duration: 800,
      easing: "easeOutCubic"
    });
    $(i + " .active .caption .fadeInRight-2").stop().delay(700).animate({opacity: 1, left: "0"}, {
      duration: 800,
      easing: "easeOutCubic"
    });
    $(i + " .active .caption .fadeInRight-3").stop().delay(1000).animate({opacity: 1, left: "0"}, {
      duration: 800,
      easing: "easeOutCubic"
    })
  }

  $(i).owlCarousel({
    autoPlay: 5000,
    stopOnHover: true,
    navigation: true,
    pagination: true,
    singleItem: true,
    addClassActive: true,
    transitionStyle: "fade",
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"],
    afterInit: function () {
      f();
      g();
      h();
      k();
      d()
    },
    afterMove: function () {
      f();
      g();
      h();
      k();
      d()
    },
    afterUpdate: function () {
      f();
      g();
      h();
      k();
      d()
    },
    startDragging: function () {
      j = true
    },
    afterAction: function () {
      a();
      c();
      l();
      b();
      e();
      j = false
    }
  });
  if ($(i).hasClass("owl-one-item")) {
    $(i + ".owl-one-item").data("owlCarousel").destroy()
  }
  $(i + ".owl-one-item").owlCarousel({singleItem: true, navigation: false, pagination: false});
  $("#transitionType li a").click(function () {
    $("#transitionType li a").removeClass("active");
    $(this).addClass("active");
    var m = $(this).attr("data-transition-type");
    $(i).data("owlCarousel").transitionTypes(m);
    $(i).trigger("owl.next");
    return false
  });
  $("#owl-testimonials").owlCarousel({
    autoPlay: 5000,
    stopOnHover: true,
    navigation: true,
    pagination: true,
    singleItem: true,
    addClassActive: true,
    autoHeight: true,
    transitionStyle: "fadeInAfterOut",
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });
  $("#owl-projects").owlCarousel({
    navigation: false,
    autoHeight: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    rewindNav: false,
    singleItem: true,
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });
  $("#owl-latest-works").owlCarousel({
    autoPlay: 5000,
    stopOnHover: true,
    navigation: true,
    pagination: true,
    rewindNav: true,
    items: 4,
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });
  $("#owl-videos").owlCarousel({
    autoPlay: 5000,
    stopOnHover: true,
    navigation: true,
    pagination: true,
    rewindNav: true,
    items: 5,
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });
  $("#owl-audio").owlCarousel({
    autoPlay: 5000,
    stopOnHover: true,
    navigation: true,
    pagination: true,
    rewindNav: true,
    items: 5,
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });
  $("#owl-popular-posts").owlCarousel({
    autoPlay: 5000,
    stopOnHover: true,
    navigation: true,
    pagination: true,
    rewindNav: true,
    items: 5,
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });
  $("#owl-related-posts").owlCarousel({
    autoPlay: 5000,
    stopOnHover: true,
    navigation: true,
    pagination: true,
    rewindNav: true,
    items: 2,
    itemsDesktopSmall: [1199, 2],
    itemsTablet: [977, 2],
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });
  $("#owl-featured-works").owlCarousel({
    autoPlay: 5000,
    stopOnHover: true,
    navigation: true,
    pagination: true,
    rewindNav: true,
    singleItem: true,
    transitionStyle: "goDown",
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });
  $("#owl-work-samples").owlCarousel({
    autoPlay: 5000,
    stopOnHover: true,
    navigation: true,
    pagination: true,
    rewindNav: true,
    items: 3,
    itemsDesktopSmall: [1199, 3],
    itemsTablet: [977, 2],
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });
  $("#owl-work-samples-big").owlCarousel({
    autoPlay: 5000,
    stopOnHover: true,
    navigation: true,
    pagination: true,
    rewindNav: true,
    singleItem: true,
    transitionStyle: "fadeUp",
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });
  $("#owl-work, [id*='owl-work-modal']").owlCarousel({
    autoPlay: 5000,
    slideSpeed: 200,
    paginationSpeed: 600,
    rewindSpeed: 800,
    stopOnHover: true,
    navigation: true,
    pagination: true,
    rewindNav: true,
    singleItem: true,
    autoHeight: true,
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });
  $("#owl-office").owlCarousel({
    autoPlay: 5000,
    slideSpeed: 200,
    paginationSpeed: 600,
    rewindSpeed: 800,
    stopOnHover: true,
    navigation: true,
    pagination: true,
    rewindNav: true,
    singleItem: true,
    autoHeight: true,
    transitionStyle: "fade",
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });
  $("#owl-clients").owlCarousel({
    autoPlay: 5000,
    stopOnHover: true,
    rewindNav: true,
    items: 4,
    itemsDesktopSmall: [1199, 4],
    itemsTablet: [977, 3],
    navigation: true,
    pagination: true,
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });
  $(".slider-next").click(function () {
    owl.trigger("owl.next")
  });
  $(".slider-prev").click(function () {
    owl.trigger("owl.prev")
  })
});
$(document).ready(function () {
  var c = $(".items");
  c.imagesLoaded(function () {
    c.isotope({itemSelector: ".item"})
  });
  var a;

  function b() {
    c.isotope()
  }

  $(window).resize(function () {
    clearTimeout(a);
    a = setTimeout(b, 100)
  });
  $("a.panel-toggle.collapsed").click(function () {
    clearTimeout(a);
    a = setTimeout(b, 100)
  });
  $(".portfolio .filter li a").click(function () {
    $(".portfolio .filter li a").removeClass("active");
    $(this).addClass("active");
    var d = $(this).attr("data-filter");
    c.isotope({filter: d});
    return false
  })
});
$(document).ready(function () {
  var c = $(".posts");
  c.imagesLoaded(function () {
    c.isotope({itemSelector: ".post"})
  });
  var a;

  function b() {
    c.isotope()
  }

  $(window).resize(function () {
    clearTimeout(a);
    a = setTimeout(b, 100)
  });
  $(".format-filter li a, .format-wrapper a").click(function () {
    var d = $(this).attr("data-filter");
    c.isotope({filter: d});
    $(".format-filter li a").removeClass("active");
    $('.format-filter li a[data-filter="' + d + '"]').addClass("active");
    $("html, body").animate({scrollTop: $(".format-filter").offset().top - 130}, 600);
    return false
  })
});
$(document).ready(function () {
  $(".tabs.tabs-reasons").easytabs({cycle: 1500});
  $(".tabs.tabs-top, .tabs.tabs-circle-top, .tabs.tabs-2-big-top, .tabs.tabs-side").easytabs({
    animationSpeed: 200,
    updateHash: false
  })
});
$(document).ready(function () {
  if ($(".panel-group .portfolio").length > 0) {
    $(".panel-group .collapse.in").collapse({toggle: true})
  }
});
!function (e, d, f) {
  e.fn.scrollUp = function (a) {
    e.data(f.body, "scrollUp") || (e.data(f.body, "scrollUp", !0), e.fn.scrollUp.init(a))
  }, e.fn.scrollUp.init = function (h) {
    var c = e.fn.scrollUp.settings = e.extend({}, e.fn.scrollUp.defaults, h), b = c.scrollTitle ? c.scrollTitle : c.scrollText, a = e("<a/>", {
      id: c.scrollName,
      href: "#top"
    }).appendTo("body");
    c.scrollImg || a.html(c.scrollText), a.css({
      display: "none",
      position: "fixed",
      zIndex: c.zIndex
    }), c.activeOverlay && e("<div/>", {id: c.scrollName + "-active"}).css({
      position: "absolute",
      top: c.scrollDistance + "px",
      width: "100%",
      borderTop: "1px dotted" + c.activeOverlay,
      zIndex: c.zIndex
    }).appendTo("body"), scrollEvent = e(d).scroll(function () {
      switch (scrollDis = "top" === c.scrollFrom ? c.scrollDistance : e(f).height() - e(d).height() - c.scrollDistance, c.animation) {
        case"fade":
          e(e(d).scrollTop() > scrollDis ? a.fadeIn(c.animationInSpeed) : a.fadeOut(c.animationOutSpeed));
          break;
        case"slide":
          e(e(d).scrollTop() > scrollDis ? a.slideDown(c.animationInSpeed) : a.slideUp(c.animationOutSpeed));
          break;
        default:
          e(e(d).scrollTop() > scrollDis ? a.show(0) : a.hide(0))
      }
    }), a.click(function (g) {
      g.preventDefault(), e("html, body").animate({scrollTop: 0}, c.scrollSpeed, c.easingType)
    })
  }, e.fn.scrollUp.defaults = {
    scrollName: "scrollUp",
    scrollDistance: 300,
    scrollFrom: "top",
    scrollSpeed: 300,
    easingType: "linear",
    animation: "fade",
    animationInSpeed: 200,
    animationOutSpeed: 200,
    scrollText: "Scroll to top",
    scrollTitle: !1,
    scrollImg: !1,
    activeOverlay: !1,
    zIndex: 2147483647
  }, e.fn.scrollUp.destroy = function (a) {
    e.removeData(f.body, "scrollUp"), e("#" + e.fn.scrollUp.settings.scrollName).remove(), e("#" + e.fn.scrollUp.settings.scrollName + "-active").remove(), e.fn.jquery.split(".")[1] >= 7 ? e(d).off("scroll", a) : e(d).unbind("scroll", a)
  }, e.scrollUp = e.fn.scrollUp
}(jQuery, window, document);
$(document).ready(function () {
  $.scrollUp({
    scrollName: "scrollUp",
    scrollDistance: 700,
    scrollFrom: "top",
    scrollSpeed: 1000,
    easingType: "easeInOutCubic",
    animation: "fade",
    animationInSpeed: 200,
    animationOutSpeed: 200,
    scrollText: "<i class='icon-up-open-mini'></i>",
    scrollTitle: " ",
    scrollImg: 0,
    activeOverlay: 0,
    zIndex: 1001
  })
});
$(document).ready(function () {
  $("a.scroll-to").click(function () {
    if ($(window).width() > 1024) {
      var a = 45
    } else {
      var a = 0
    }
    if ($(this).attr("data-anchor-offset") !== undefined) {
      var b = $(this).attr("data-anchor-offset")
    } else {
      var b = 0
    }
    $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top - a - b + "px"}, {
      duration: 1000,
      easing: "easeInOutCubic"
    });
    return false
  })
});
$(document).ready(function () {
  $("body").scrollspy({target: ".navbar-collapse", offset: 50})
});
$(document).ready(function () {
  $(".icon-overlay a").prepend('<span class="icn-more"></span>')
});
$(".modal").on("hidden.bs.modal", function () {
  $(".video-container iframe").attr("src", $(".video-container iframe").attr("src"))
});
$(document).ready(function () {
  $("a[data-rel]").each(function () {
    $(this).attr("rel", $(this).data("rel"))
  })
});
$(document).ready(function () {
  if ($("[rel=tooltip]").length) {
    $("[rel=tooltip]").tooltip()
  }
});
$(document).ready(function () {
  window.viewportUnitsBuggyfill.init()
});
$(document).ready(function () {
  $("#contactform, #commentform").validate({
    errorPlacement: function (a, b) {
      $(b).attr({placeholder: a.html()})
    },
    focusInvalid: false,
    rules: {
      name: {required: true, minlength: 2},
      email: {required: true, email: true},
      message: {required: true, minlength: 10}
    },
    messages: {
      name: {
        required: "Please enter your name!",
        minlength: jQuery.format("Name requires at least {0} characters!")
      },
      email: {required: "Please enter your email!", email: "Please enter a valid email!"},
      message: {
        required: "Please enter a message!",
        minlength: jQuery.format("Message requires at least {0} characters!")
      }
    },
    submitHandler: function (a) {
      $("#contactform .btn-submit").html("Sending message ...");
      $("#commentform .btn-submit").html("Sending comment ...");
      $(a).ajaxSubmit({
        success: function (c, d, e, b) {
          $(a).delay(1300).slideUp("fast");
          $("#response").html(c).hide().delay(1300).slideDown("fast")
        }
      });
      return false
    }
  })
});