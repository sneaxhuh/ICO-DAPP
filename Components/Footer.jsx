import React from "react";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialInstagram, TiSocialGithub,
  } from "react-icons/ti";
  import { IoCloudDownload } from "react-icons/io5"; import { IoIoSend } from "react-icons/io";
  import{IoIosSend} from "react-icons/io"
const Footer = () => {
  return ( <footer
  className="site-footer footer__ico pos-rel"
  data-background="assets/img/bg/footer_bg.png"
  >
  <div className="container">
  <div className="row mt-none-30"> <div className="col-lg-4 mt-30"> <div className="footer__widget
  footer_subscribe">
  <h2>Subscribe newsletter</h2>

  <form action="">
<input
type="text"
placeholder="raiayush8543@g
mail.com"
/>
<button>
<IoIosSend />
</button> 
</form>

  </div>
  </div>
  <div className="col-lg-8 mt-30"> <div className="footer_widget
text-lg-end">
<h2>Download Document</h2>
<div className="footer_document
ul_li_right"> 
<a href="#"
className="footer__document-item
text-center">
<div className="icon">
<img src="assests/img/icon/pdf.svg" alt="" srcset="" />
</div>
<span className="title">
  <IoCloudDownload/>
  white paper
</span>
</a>

<a href="#"
className="footer__document-item
text-center">
<div className="icon">
<img src="assests/img/icon/pdf.svg" alt="" srcset="" />
</div>
<span className="title">
  <IoCloudDownload/>
  one paper
</span>
</a>
<a href="#"
className="footer__document-item
text-center">
<div className="icon">
<img src="assests/img/icon/pdf.svg" alt="" srcset="" />
</div>
<span className="title">
  <IoCloudDownload/>
  Privacy Policy
</span>
</a>
<a href="#"
className="footer__document-item
text-center">
<div className="icon">
<img src="assests/img/icon/pdf.svg" alt="" srcset="" />
</div>
<span className="title">
  <IoCloudDownload/>
  terms of sale
</span>
</a>
</div>
</div>
</div>

  </div>

  <div className="footer___bottom ul_li_between mt-50">

<div className="footer_logo mt-20"> <a href="#">
<img
src="assets/img/logo/logo.svg"
alt="" srcset="" />
</a>
</div>

<ul className="footer___social ul_li
mt-20">
<li>
<a href="#">
  <TiSocialFacebook/>
</a>
</li>
<li>
<a href="#">
  <TiSocialTwitter/>
</a>
</li>
<li>
<a href="#">
  <TiSocialLinkedin/>
</a>
</li>
<li>
<a href="#">
  <TiSocialInstagram/>
</a>
</li>
</ul>
</div>
  </div>
  <div className="footer_copyright mt-35"> <div className="container">
<div className="footer_copyright-inner
ul_li_between">
<div className="footer_copyright-text mt-15">
Copyright @ 2024
All rights
reserved
</div>
<ul className="footer__links
ul_li_right mt-15">
  <li><a href="#">Privacy</a></li>
  <li><a href="#">Cookies</a></li>
  <li><a href="#">Terms</a></li>
  <li><a href="#">About</a></li>
</ul>

</div>
</div>
</div>
<div className="footer_icon-shape">
<div className="icon icon--1">
<div>
<img
src="assets/img/shape/f_icon1.png"
alt="" />
</div>
</div>
<div className="icon icon--2">
<div>
<img src="assets/img/shape/f_icon2.png" alt="" srcset="" />
</div>
</div>
</div>

  </footer>
  );
};

export default Footer;
