<?php ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>REEN – Made for Designers</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Lato:700,900|Source+Sans+Pro:400,700" rel="stylesheet">
    <link rel="stylesheet" href="style/css/main.css">
  </head>
  <body>
    <header>
      <div class="header_top container_fluid">
        <div class="container">
          <div class="row">
            <div class="contact_link_block">
              <div class="icon_email icon icon_contacts"></div>
              <a class="contact_link" href="mailto:info@reen.com" title="Write email">info@reen.com</a>
              <div class="icon_phone icon icon_margin_left icon_contacts"></div>
              <a class="contact_link" href="tel:+001234567890" title="Call">+00 (123) 456 78 90</a>
            </div>
            <div class="social_icons_block">
              <a href="#" title="Facebook">
                <div class="icon_facebook icon icon_margin_left icon_contacts"></div>
              </a>
              <a href="#" title="Gplus">
                <div class="icon_gplus icon icon_margin_left icon_contacts"></div>
              </a>
              <a href="#" title="Twitter">
                <div class="icon_twitter icon icon_margin_left icon_contacts"></div>
              </a>
              <a href="#" title="Priteresst">
                <div class="icon_pinterest icon icon_margin_left icon_contacts"></div>
              </a>
              <a href="#" title="Behace">
                <div class="icon_behance icon icon_margin_left icon_contacts"></div>
              </a>
              <a href="#" title="Dribbble">
                <div class="icon_dribbble icon_margin_left icon_contacts"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="header_bottom container_fluid">
        <div class="container">
          <div class="row">
            <div class="main_logo_block_header">
              <a href="#" title="Logo">
                <img class="main_logo img_responsive"
                     src="images/main_logo_header.png" title="Logo" alt="Logo">
              </a>
            </div>
            <div class="navbar_block">
              <div class="hamburger_button">
                <div class="navbar"></div>
                <div class="navbar"></div>
                <div class="navbar"></div>
              </div>
              <ul class="nav">
                <li><a href="#aboutUs" class="nav_item" title="About Us">About Us</a></li>
                <li><a href="#latestWorks" class="nav_item" title="Latest Works">Latest Works</a></li>
                <li><a href="#getInTouch" class="nav_item" title="Get In Touch">Get In Touch</a></li>
                <li><a href="#contactUs" id="contactUs" class="nav_item" title="Contact Us">Contact Us</a></li>
              </ul>
            </div>
            <div class="search_block">
              <a href="#" title="Search">
                <span class="icon_search icon_contacts"></span>
              </a>
            </div>
            <div class="background_modal" id="modalWindow">
              <div class="modal">
                <div class="row">
                  <h1 class="modal_title">Leave a message</h1>
                  <a class="close_button" id="closeButton"></a>
                </div>
                <div class="row">
                  <div class="modal_form form_name">
                    <input class="input_name input" type="text" placeholder="Name (Required)">
                  </div>
                  <div class="modal_form form_email">
                    <input class="input_email input" type="text" placeholder="Email (Required)">
                  </div>
                </div>
                <div class="row">
                  <div class="modal_form form_message">
                    <textarea class="input_message" placeholder="Enter your message..."></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="submit_button_block">
                    <a class="start_button submit_button" href="#" title="Subscribe">Submit message</a>
                  </div>
                </div>
              </div>
              <div class="clear"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="carousel">
        <div class="control">
          <a>
            <div id="leftControl" class="prev_slid controls"></div>
          </a>
          <a>
            <div id="rightControl" class="next_slid controls"></div>
          </a>
          <div class="pagination">
            <div class="slider_indicator"></div>
            <div class="slider_indicator"></div>
            <div class="slider_indicator"></div>
            <div class="slider_indicator"></div>
            <div class="slider_indicator"></div>
            <div class="clear"></div>
          </div>
        </div>
        <div class="item_1 item">
          <div class="container">
            <div class="row">
              <div class="carousel_caption_center carousel_item_1_margin">
                <div class="carousel_title carousel_main_title">Made for Designers</div>
                <div class="carousel_description carousel_description_center">
                  Create your online portfolio in minutes with the professionally and lovingly designed REEN website
                  template. Customize your site with versatile and easy to use features.
                </div>
                <div class="start_button_block">
                  <a id="temp" class="start_button start_button_header" href="#" title="Get started now">Get started
                    now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item_2 item hidden">
          <div class="container">
            <div class="row">
              <div class="carousel_caption_right">
                <div class="carousel_title">Fresh and beautiful design</div>
                <div class="carousel_description text_white">
                  REEN is designed to showcase your talent and put your work in the forefront. Professionally use of
                  typography and layout that fits your content.
                </div>
                <div class="start_button_block">
                  <a class="start_button start_button_header" href="#" title="Get started now">Get started now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item_3 item hidden">
          <div class="container">
            <div class="row">
              <div class="carousel_caption_left">
                <div class="carousel_title">
                  <div class="text_blue_background">Clean and</div>
                  <div class="text_blue_background">reusable code</div>
                </div>
                <div class="carousel_description carousel_description_left">
                  The clean code allows you to easily copy code blocks from content modules and past them in
                  different places or layouts.
                </div>
                <div class="start_button_block">
                  <a class="start_button start_button_header" href="#" title="Get started now">Get started now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item_4 item hidden">
          <div class="container">
            <div class="row">
              <div class="carousel_caption_right">
                <div class="carousel_title">
                  <div class="text_blue_background">Just focus on</div>
                  <div class="text_blue_background">your creativity</div>
                </div>
                <div class="carousel_description text_white">
                  Take a break from messing around with heavy coding and spend your time brainstorming ideas
                  for your next project.
                </div>
                <div class="start_button_block">
                  <a class="start_button start_button_header" href="#" title="Get started now">Get started now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item_5 item hidden">
          <div class="container">
            <div class="row">
              <div class="carousel_caption_center  carousel_item_5_margin">
                <div class="carousel_title">Showcase your content</div>
                <div class="carousel_description carousel_description_center">
                  With REEN you have the possibility to create websites for various contents quickly and easily.
                  Now it's up to you!
                </div>
                <div class="start_button_block">
                  <a class="start_button start_button_header start_button_item_5" href="#" title="Get started now">Get
                    started now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div class="advantages">
        <div class="container" id="aboutUs">
          <div class="row">
            <div class="block_unit_name">
              <h2 class="block_title">Beautiful. Clean. Responsive.</h2>
              <p class="block_subtitle">
                REEN is a high-quality solution for those who want a beautiful website in no time. It's fully responsive
                and will adapt itself to any mobile device. iPad, iPhone, Android, it doesn't matter. Your content will
                always looks its absolute best.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="advantage_block left advantage_block_passion">
              <div class="icon_passion icon left"></div>
              <div class="advantage_caption">
                <h3 class="advantage_title">Passion</h3>
                <p class="advantage_description">
                  Magnis modipsae que lib voloratati andigen daepeditem quiate re porem aut labor. Laceaque quiae
                  sitiorem
                  rest non restibusaes maio es dem tumquam core posae volor remped modis volor.
                </p>
              </div>
            </div>
            <div class="advantage_block left advantage_block_creativity">
              <div class="icon_creativity icon left"></div>
              <div class="advantage_caption">
                <h3 class="advantage_title">Creativity</h3>
                <p class="advantage_description">
                  Magnis modipsae que lib voloratati andigen daepeditem quiate re porem aut labor. Laceaque quiae
                  sitiorem
                  rest non restibusaes maio es dem tumquam core posae volor remped modis volor.
                </p>
              </div>
            </div>
            <div class="advantage_block left advantage_block_quality">
              <div class="icon_quality icon left"></div>
              <div class="advantage_caption">
                <h3 class="advantage_title">Quality</h3>
                <p class="advantage_description">
                  Magnis modipsae que lib voloratati andigen daepeditem quiate re porem aut labor. Laceaque quiae
                  sitiorem
                  rest non restibusaes maio es dem tumquam core posae volor remped modis volor.
                </p>
              </div>
            </div>
          </div>
          <div class="row appearing_blocks">
            <div class="row">
              <div class="advantage_appearing hidden_block">
                <div class="advantage_block left advantage_block_brackets">
                  <div class="icon_brackets icon left"></div>
                  <div class="advantage_caption">
                    <h3 class="advantage_title">Technology</h3>
                    <p class="advantage_description">
                      Magnis modipsae que lib voloratati andigen daepeditem quiate re porem aut labor. Laceaque quiae
                      sitiorem
                      rest non restibusaes maio es dem tumquam core posae volor remped modis volor.
                    </p>
                  </div>
                </div>
                <div class="advantage_block left advantage_block_hand">
                  <div class="icon_hand icon left"></div>
                  <div class="advantage_caption">
                    <h3 class="advantage_title">Social</h3>
                    <p class="advantage_description">
                      Magnis modipsae que lib voloratati andigen daepeditem quiate re porem aut labor. Laceaque quiae
                      sitiorem
                      rest non restibusaes maio es dem tumquam core posae volor remped modis volor.
                    </p>
                  </div>
                </div>
                <div class="advantage_block left advantage_block_spiker">
                  <div class="icon_spiker icon left"></div>
                  <div class="advantage_caption">
                    <h3 class="advantage_title">Marketing</h3>
                    <p class="advantage_description">
                      Magnis modipsae que lib voloratati andigen daepeditem quiate re porem aut labor. Laceaque quiae
                      sitiorem
                      rest non restibusaes maio es dem tumquam core posae volor remped modis volor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="advantage_appearing hidden_block">
                <div class="advantage_block left advantage_block_brackets">
                  <div class="icon_brackets icon left"></div>
                  <div class="advantage_caption">
                    <h3 class="advantage_title">Technology</h3>
                    <p class="advantage_description">
                      Magnis modipsae que lib voloratati andigen daepeditem quiate re porem aut labor. Laceaque quiae
                      sitiorem
                      rest non restibusaes maio es dem tumquam core posae volor remped modis volor.
                    </p>
                  </div>
                </div>
                <div class="advantage_block left advantage_block_hand">
                  <div class="icon_hand icon left"></div>
                  <div class="advantage_caption">
                    <h3 class="advantage_title">Social</h3>
                    <p class="advantage_description">
                      Magnis modipsae que lib voloratati andigen daepeditem quiate re porem aut labor. Laceaque quiae
                      sitiorem
                      rest non restibusaes maio es dem tumquam core posae volor remped modis volor.
                    </p>
                  </div>
                </div>
                <div class="advantage_block left advantage_block_spiker">
                  <div class="icon_spiker icon left"></div>
                  <div class="advantage_caption">
                    <h3 class="advantage_title">Marketing</h3>
                    <p class="advantage_description">
                      Magnis modipsae que lib voloratati andigen daepeditem quiate re porem aut labor. Laceaque quiae
                      sitiorem
                      rest non restibusaes maio es dem tumquam core posae volor remped modis volor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="start_button_block show_more_button" id="showMoreButton">
              <a class="start_button start_button_header" href="#" title="Show more">Show more</a>
            </div>
          </div>
        </div>
      </div>
      <div class="latest_works_block container_fluid" id="latestWorks">
        <div class="container">
          <div class="row">
            <div class="block_unit_name">
              <h2 class="block_title">Check out our latest works</h2>
              <p class="block_subtitle">
                Magnis modipsae que voloratati andigen daepeditem quiate re porem aut labor.
              </p>
            </div>
            <div class="latest_work">
              <div class="latest_work_inner">
                <img class="img_responsive" src="images/latest_works/latest_work_1.jpg" alt="Latest work 1"
                     title="Latest work 1">
                <div class="latest_work_caption">
                  <h3 class="latest_work_title">Grand Motel gets an identity brushup</h3>
                  <p class="latest_work_description">Identity</p>
                </div>
              </div>
            </div>
            <div class="latest_work">
              <div class="latest_work_inner">
                <img class="img_responsive" src="images/latest_works/latest_work_2.jpg" alt="Latest work 2"
                     title="Latest work 2">
                <div class="latest_work_caption">
                  <h3 class="latest_work_title">Fresh branding for a creative startup</h3>
                  <p class="latest_work_description">Identity</p>
                </div>
              </div>
            </div>
          </div>
          <div class="gallery">
            <div class="row">
              <div class="gallery_item_block">
                <div class="gallery_item">
                  <img class="img_responsive gallery_img" src="images/gallery/gallery_item_1.jpg" alt="Item 1"
                       title="Item 1">
                </div>
                <div class="gallery_item hidden_sm">
                  <img class="img_responsive gallery_img" src="images/gallery/gallery_item_2.jpg" alt="Item 2"
                       title="Item 2">
                </div>
                <div class="gallery_item hidden_sm hidden_md">
                  <img class="img_responsive gallery_img" src="images/gallery/gallery_item_3.jpg" alt="Item 3"
                       title="Item 3">
                </div>
                <div class="gallery_item hidden_sm hidden_md">
                  <img class="img_responsive gallery_img" src="images/gallery/gallery_item_4.jpg" alt="Item 4"
                       title="Item 4">
                </div>
                <div class="clear"></div>
              </div>
            </div>
            <div class="row">
              <div class="gallery_indicators_block clear">
                <ol class="gallery_indicators">
                  <li><a></a></li>
                  <li><a></a></li>
                  <li><a></a></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="get_in_touch_block container_fluid" id="getInTouch">
        <div class="container">
          <div class="row">
            <div class="block_unit_name">
              <h2 class="block_title">Want to work with us?</h2>
              <p class="block_subtitle">
                Magnis modipsae que voloratati andigen daepeditem quiate re porem aut labor. Laceaque quiae sitiorem
                rest non restibusaes maio es dem tumquam.
              </p>
              <div class="get_in_touch_button_block">
                <a class="start_button get_in_touch_button" href="#" title="Get in touch">Get in touch</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="footer_top container_fluid">
        <div class="container">
          <div class="row">
            <div class="who_we_are_block_footer">
              <h3 class="footer_block_tittle">Who we are</h3>
              <div class="main_logo_block_footer">
                <a href="#" title="Logo"><img class="img_responsive" src="images/main_logo_footer.png" title="Logo"
                                              alt="Logo"></a>
              </div>
              <p class="footer_block_description footer_block_description_margin">
                Magnis modipsae voloratati andigen daepeditem quiate re porem que aut labor. Laceaque eictemperum
                quiae sitiorem rest non restibusaes maio es dem tumquam.
              </p>
              <div class="more_about_link_block">
                <a class="more_about_link" href="#" title="More about us">More about us</a>
                <a class="more_about_link_icon" href="#" title="More about us">
                  <img src="images/icons/icon_arrow_right.png" alt="More about us" title="More about us">
                </a>
              </div>
            </div>
            <div class="latest_works_block_footer">
              <h3 class="footer_block_tittle">Latest works</h3>
              <div class="latest_work_footer latest_work_margin_right">
                <img class="img_responsive" src="images/latest_works/latest_work_1_footer.jpg" alt="Latest work 1"
                     title="Latest work 1">
              </div>
              <div class="latest_work_footer">
                <img class="img_responsive" src="images/latest_works/latest_work_2_footer.jpg" alt="Latest work 2"
                     title="Latest work 2">
              </div>
              <div class="latest_work_footer latest_work_margin_right">
                <img class="img_responsive" src="images/latest_works/latest_work_3_footer.jpg" alt="Latest work 3"
                     title="Latest work 3">
              </div>
              <div class="latest_work_footer">
                <img class="img_responsive" src="images/latest_works/latest_work_4_footer.jpg" alt="Latest work 4"
                     title="Latest work 4">
              </div>
            </div>
            <div class="get_in_touch_block_footer">
              <h3 class="footer_block_tittle">Get in touch</h3>
              <p class="footer_block_description footer_block_description_margin">
                Doloreiur quia commolu ptatemp dolupta oreprerum tibusam eumenis et consent accullignis dentibea
                autem inisita.
              </p>
              <div class="contact_footer">
                <div class="icon_location_footer icon_contacts"></div>
                <p class="footer_block_description footer_block_description_margin_contact">84 Street, City, State
                  24813</p>
              </div>
              <div class="contact_footer">
                <div class="icon_phone_footer icon_contacts"></div>
                <p class="footer_block_description footer_block_description_margin_contact">+00 (123) 456 78 90</p>
              </div>
              <div class="contact_footer">
                <div class="icon_email_footer icon_contacts"></div>
                <p class="footer_block_description footer_block_description_margin_contact">info@reen.com</p>
              </div>
            </div>
            <div class="free_updates_block_footer">
              <h3 class="footer_block_tittle">Free updates</h3>
              <p class="footer_block_description footer_block_description_margin">
                Conecus iure posae volor remped modis aut lor volor accabora incim resto explabo.
              </p>
              <div class="input_block">
                <form class="form">
                  <input class="input_subscribe input" type="text" placeholder="Enter your email address">
                </form>
                <div class="subscribe_button_block">
                  <a class="start_button subscribe_button" href="#" title="Subscribe">Subscribe</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_bottom container_fluid">
        <div class="container">
          <div class="row">
            <div class="copyright_text_block">
              <p class="copyright_text">© 2014 REEN. All rights reserved.</p>
            </div>
            <div class="navbar_block_footer">
              <ul class="nav_footer">
                <li class=" padding_right"><a href="#" title="Home">Home</a></li>
                <li class="marked padding_right"><a href="#" title="Portfolio">Portfolio</a></li>
                <li class="marked padding_right"><a href="#" title="Blog">Blog</a></li>
                <li class="marked padding_right"><a href="#" title="About">About</a></li>
                <li class="marked padding_right marked_none_382px"><a href="#" title="Services">Services</a></li>
                <li class="marked marked_none_442px"><a href="#" title="Contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <a id="rollUpButton" href="#" title="Roll up" class="roll_up"></a>
    </footer>
    <script src="js/jquery-3.2.1.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
