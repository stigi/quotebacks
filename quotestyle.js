var editSVG = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.42852 8.1826L3.83008 6.04181C3.84249 5.9758 3.87452 5.91507 3.92201 5.86756L9.55515 0.234417C9.97431 -0.184732 10.7881 -0.0275712 11.408 0.592253C12.0277 1.21199 12.1848 2.02581 11.7657 2.44496L6.13255 8.0781C6.08504 8.12559 6.02431 8.15763 5.9583 8.17004L3.81761 8.5717C3.76434 8.58168 3.70943 8.57853 3.65765 8.56251C3.60587 8.54649 3.55878 8.51809 3.52045 8.47976C3.48212 8.44143 3.45372 8.39434 3.4377 8.34256C3.42168 8.29078 3.41853 8.23588 3.42852 8.1826ZM10.0266 0.705828L4.46633 6.26605L4.17359 7.82661L5.73407 7.53378L11.2943 1.97355C11.4042 1.86366 11.3175 1.44465 10.9365 1.06366C10.5555 0.682577 10.1364 0.59594 10.0266 0.705828ZM10.2326 12H0.333333C0.289558 12 0.246212 11.9914 0.205768 11.9746C0.165325 11.9579 0.128577 11.9333 0.0976236 11.9024C0.0666701 11.8714 0.0421171 11.8347 0.0253667 11.7942C0.00861633 11.7538 -3.32535e-06 11.7104 9.62344e-10 11.6667V1.76752C-3.32535e-06 1.72374 0.00861633 1.68039 0.0253667 1.63995C0.0421171 1.59951 0.0666701 1.56276 0.0976236 1.53181C0.128577 1.50085 0.165325 1.4763 0.205768 1.45955C0.246212 1.4428 0.289558 1.43418 0.333333 1.43418H5.7154L5.04872 2.10085H0.666667V11.3333H9.89922V6.95119L10.5659 6.28453V11.6667C10.5659 11.7104 10.5573 11.7538 10.5405 11.7942C10.5238 11.8347 10.4992 11.8714 10.4683 11.9024C10.4373 11.9333 10.4006 11.9579 10.3601 11.9746C10.3197 11.9914 10.2763 12 10.2326 12Z" fill="#9DB8BF"/></svg>`
var quoteStyle  = `.quoteback-container {
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  text-rendering: optimizeLegibility;
  border: 1px solid #C2DFE3;
  border-radius: 8px;
  margin-bottom: 25px;
  max-width: 800px;
  background-color: white;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease; }
  .quoteback-container:hover {
    transform: translateY(-3px);
    box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.15);
    border: 1px solid #9DB8BF; }
  .quoteback-container .quoteback-parent {
    overflow: hidden;
    position: relative;
    width: 100%;
    box-sizing: border-box; }
    .quoteback-container .quoteback-parent .quoteback-parent-text {
      padding: 15px;
      color: #5C6D73;
      z-index: 40; }
    .quoteback-container .quoteback-parent .quoteback-content {
      font-family: -apple-system, system-ui, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: 16px;
      font-weight: 400;
      padding: 15px;
      color: #464A4D;
      line-height: 150%; }
  .quoteback-container .quoteback-head {
    border-top: 1px solid #C2DFE3;
    display: flex;
    flex-flow: row nowrap;
    justify-content: start;
    align-items: stretch;
    padding-left: 15px;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease; }
    .quoteback-container .quoteback-head .quoteback-avatar {
      border-radius: 100%;
      border: 1px solid #C2DFE3;
      width: 42px;
      height: 42px;
      min-width: 42px !important;
      margin: 12px 0px;
      position: relative; }
      .quoteback-container .quoteback-head .quoteback-avatar .mini-favicon {
        width: 22px;
        height: 22px;
        position: absolute;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0; }
    .quoteback-container .quoteback-head .quoteback-metadata {
      min-width: 0px;
      display: flex;
      flex-shrink: 1;
      align-items: center;
      margin-left: 10px; }
    .quoteback-container .quoteback-head .metadata-inner {
      font-size: 14px;
      line-height: 1.2;
      color: #9DB8BF;
      max-width: 100%; }
      .quoteback-container .quoteback-head .metadata-inner .quoteback-title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 600;
        padding-right: 20px;
        color: #5C6D73; }
      .quoteback-container .quoteback-head .metadata-inner .quoteback-author {
        font-size: 14px;
        line-height: 1.2;
        color: black;
        font-weight: 600;
        margin-bottom: 2px; }
    .quoteback-container .quoteback-head .quoteback-backlink {
      margin-left: auto;
      display: flex;
      flex-shrink: 1;
      align-items: center;
      width: 81px;
      min-width: 81px !important;
      padding: 0px 15px !important;
      border-left: 1px solid #C2DFE3; }
      .quoteback-container .quoteback-head .quoteback-backlink .quoteback-arrow {
        border: none !important;
        font-family: inherit !important;
        font-size: 14px !important;
        color: #9DB8BF !important;
        text-decoration: none !important;
        -webkit-transition: opacity 0.1s ease;
        -moz-transition: opacity 0.1s ease;
        -ms-transition: opacity 0.1s ease;
        -o-transition: opacity 0.1s ease;
        transition: opacity 0.1s ease; }
        .quoteback-container .quoteback-head .quoteback-backlink .quoteback-arrow:hover {
          opacity: .5 !important; }
        .quoteback-container .quoteback-head .quoteback-backlink .quoteback-arrow:visited {
          text-decoration: none !important; }

.editable:focus {
  outline: none; }
.editable:after {
  margin-left: 10px;
  content: url("data:image/svg+xml; utf8, ${encodeURIComponent(editSVG)}"); }

.quoteback-content a {
  color: #464A4D;
  -webkit-transition: opacity 0.2s ease;
  -moz-transition: opacity 0.2s ease;
  -ms-transition: opacity 0.2s ease;
  -o-transition: opacity 0.2s ease;
  transition: opacity 0.2s ease; }
  .quoteback-content a:hover {
    opacity: .5; }
.quoteback-content p {
  margin-block-start: 0px;
  margin-block-end: .5em; }
  .quoteback-content p:last-of-type {
    margin-block-end: 0px; }
.quoteback-content img {
  width: 100%;
  height: auto;
  margin: .5em 0em; }
.quoteback-content blockquote {
  border-left: 2px solid #C2DFE3;
  padding-left: .75em;
  margin-inline-start: 1em;
  color: #5C6D73; }
.quoteback-content ol, .quoteback-content ul {
  margin-block-start: .5em;
  margin-block-end: .5em; }
.quoteback-content h1, .quoteback-content h2, .quoteback-content h3 {
  margin-block-start: .5em;
  margin-block-end: .5em; }


`