window.onload = function () {
  MenuBehavior();
  var showMoreButton = document.getElementById('showMoreButton');
  showMoreButton.addEventListener('click', function () {
    ClickShowMoreButton('hidden_block');
  });
  RollUp();
  ShowModalWindow();
  CloseModalWindow();

  var slideWidth = 1000;
  var sliderTimer = 100;
  $(function () {
    $('.slidewrapper').width($('.slidewrapper').children(1).length * slideWidth);
    sliderTimer = setInterval(nextSlide, 100);
    $('.carousel').hover(function () {
      clearInterval(sliderTimer);
    }, function () {
      sliderTimer = setInterval(nextSlide, 100);
    });
  });

  function nextSlide() {
    var currentSlide = parseInt($('.slidewrapper').data('current'));
    currentSlide++;
    if (currentSlide >= $('.slidewrapper').children(1).length) {
      currentSlide = 0;
    }
    $('.slidewrapper').animate({left: -currentSlide * slideWidth}, 1000).data('current', currentSlide);
  }

  // var items = $('.item');
  // var leftControl = $('#leftControl');
  // var rightControl = $('#rightControl');
  // rightControl.click(function () {
  //
  // })
};

var classToggler = function (elementId, opacity, condition) {
  this.element = document.getElementById(elementId);
  this.show = function () {
    this.element.classList.add('visible');
    var element = this;
    setTimeout(function () {
      element.element.classList.add(opacity);
    }, 400);
  };

  this.hide = function () {
    var element = this;
    setTimeout(function () {
      element.element.classList.remove(opacity);
    }, 500);
    switch (condition) {
      case 'scroll':
        setTimeout(function () {
          if (window.scrollY < 900) {
            setTimeout(function () {
              element.element.classList.remove('visible');
            }, 500);
          }
        }, 500);
        break;
      case 'opacity':
        setTimeout(function () {
          var valueOpacity = element.element.style.opacity;
          if (valueOpacity == 0) {
            setTimeout(function () {
              element.element.classList.remove('visible');
            }, 500);
          }
        }, 500);
        break;
    }
  }
};

var rollUpButton = new classToggler('rollUpButton', 'opacity_05', 'scroll');
var modalWindow = new classToggler('modalWindow', 'opacity_1', 'opacity');

function MenuBehavior() {
  var navItems = document.getElementsByClassName('nav_item');

  for (var i = 0; i < navItems.length; i++) {
    var navItem = navItems[i];
    navItem.addEventListener('click', function (event) {
      event.preventDefault();
      var targetId = this.attributes.href.nodeValue.substring(1);
      GetElementLocation(targetId);
    });
  }

  function GetElementLocation(targetId) {
    var scrollDestination = document.getElementById(targetId);
    var scroll = 10;
    var selectedY = 0;
    var scrollIteration = setInterval(function () {
      selectedY = scrollDestination.offsetTop;
      window.scrollTo(0, scroll);
      scroll += 10;
      if (scroll > selectedY) {
        clearInterval(scrollIteration);
      }
    }, 1);
  }
}

function ClickShowMoreButton(hiddenBlocks) {
  // var childArray = GetChildren('advantages_appearing', 'div');
  event.preventDefault();
  var closeButton = event.toElement;
  var appearingBlocks = document.getElementsByClassName(hiddenBlocks);
  if (appearingBlocks.length) {
    SmoothAppearance(appearingBlocks[0]);
  }

  if (appearingBlocks.length == 1) {
    setTimeout(function () {
      closeButton.style.opacity = 0;
      setTimeout(function () {
        closeButton.classList.add('hidden');
      }, 0);
    }, 500);
  }

  // function GetChildren(cl, tag) {
  //     var nodes = document.getElementsByClassName(cl);
  //     var node = nodes[0];
  //     var children = node.childNodes;
  //     var length = node.childNodes.length;
  //     var array = [];
  //     tag = tag.toUpperCase();
  //     for(i = 0; i < length; i++)
  //     {
  //         if(children[i].tagName == tag)
  //         {
  //             array.push(children[i]);
  //         }
  //     }
  //     return array;
  // }

  function SmoothAppearance(element) {
    setTimeout(function () {
      element.classList.remove('hidden_block');
      setTimeout(function () {
        element.style.opacity = 1;
      }, 500);
    }, 1);
  }
}

function RollUp() {
  var TOP_OFFSET = 1000;
  var rollUpButtonId = document.getElementById('rollUpButton');
  ScrollToBeginPage(rollUpButtonId);

  window.addEventListener('scroll', function () {
    if (window.scrollY > TOP_OFFSET) {
      rollUpButton.show()
    }
    else {
      rollUpButton.hide()
    }
  });

  function ScrollToBeginPage(element) {
    element.onclick = function (event) {
      event.preventDefault();
      if (!element.classList.contains('disabled')) {
        element.classList.add('disabled');
        var scroll = event.pageY;
        var scrollIteration = setInterval(function () {
          window.scrollTo(0, scroll);
          scroll -= 10;
          if (scroll <= 6) {
            clearInterval(scrollIteration);
            element.classList.remove('disabled');
          }
        }, 1);
      }
    };
  }
}

function ShowModalWindow() {
  var contactUsId = document.getElementById('contactUs');
  contactUsId.addEventListener('click', function (event) {
    event.preventDefault();
    modalWindow.show();
    document.body.classList.add('overflow_hidden');
  });
}

function CloseModalWindow() {
  var closeButtonId = document.getElementById('closeButton');
  closeButtonId.addEventListener('click', function (event) {
    event.preventDefault();
    modalWindow.hide();
    document.body.classList.remove('overflow_hidden');
  })
}