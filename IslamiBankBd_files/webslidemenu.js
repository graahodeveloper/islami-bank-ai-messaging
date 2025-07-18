<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="theme-color" content="#008a00">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="csrf-token" content="5dY9qtkKkZ4YljHLYTtDsS1dKbEa4KRPnxJzzhZV">
	    <title>
</title>

    <!-- Fav Icon -->
    <link rel="icon" href="https://www.islamibankbd.com/public/frontend/assets/images/favicon.png" type="image/x-icon">

    <!-- Google Fonts -->
    
    
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap" rel="stylesheet">
    <!-- Stylesheets -->
    <link href="https://www.islamibankbd.com/public/frontend/assets/css/font-awesome-all.css" rel="stylesheet">
    <link href="https://www.islamibankbd.com/public/frontend/assets/css/flaticon.css" rel="stylesheet">
    <link href="https://www.islamibankbd.com/public/frontend/assets/css/owl.css" rel="stylesheet">
    <link href="https://www.islamibankbd.com/public/frontend/assets/css/bootstrap.css" rel="stylesheet">
    <link href="https://www.islamibankbd.com/public/frontend/assets/css/jquery.fancybox.min.css" rel="stylesheet">
    <link href="https://www.islamibankbd.com/public/frontend/assets/css/animate.css" rel="stylesheet">
    <link href="https://www.islamibankbd.com/public/frontend/assets/css/color.css" rel="stylesheet">
    <link href="https://www.islamibankbd.com/public/frontend/assets/css/rtl.css" rel="stylesheet">
    <link href="https://www.islamibankbd.com/public/frontend/assets/css/style_v5.css" rel="stylesheet">
    <link href="https://www.islamibankbd.com/public/frontend/assets/css/responsive.css" rel="stylesheet">
        <link href="https://www.islamibankbd.com/public/frontend/assets/css/custom_v5.css" rel="stylesheet">
    <link href="https://www.islamibankbd.com/public/frontend/assets/css/webslidemenu.css" rel="stylesheet">
    <link href="https://www.islamibankbd.com/public/frontend/assets/css/recustom.css" rel="stylesheet">
    <style type="text/css">
        .homepopup .modal-dialog {
            width: 40%;
            margin: 6% auto;
        }

        .homepopup .close {
            position: absolute;
            top: -4%;
            right: -10%;
            font-size: 21px;
            border-radius: 73%;
            padding: 10px 14px;
            z-index: 9999;
            font-size: 30px;
            color: #fff;
            text-shadow: #fff;
            opacity: 1;
        }

        .carousel-control {
            top: 40%;
            width: 15%;
            height: 15%;
        }

        .carousel-control .glyphicon-chevron-left,
        .carousel-control .glyphicon-chevron-right,
        .carousel-control .icon-next,
        .carousel-control .icon-prev {
            margin-top: -10px;
            font-size: 20px;
        }


        @media (max-width: 769px) {
            .homepopup .modal-dialog {
                width: 90%;
                margin: 0 auto;
                position: relative;
                padding: 15px;
                top: 4%
            }

            .modal-body {
                padding: 5px;
            }

            .homepopup .close {
                top: -25px;
                right: -30px;
                font-size: 22px;
            }
        }

    </style>
</head>


<!-- page wrapper -->
<body class="boxed_wrapper ltr">

    <div class="page-active-overlay no-preview-active">
    </div>


<div style="" id="reading_Guide"></div>
<div  id="skip-links-wrapper" tabindex="0" class="position-absolute d-flex gap-3 justify-content-center w-100 items-center py-3 bg-white skip-links-wrapper accessibility-plugin-ac" style="top: -1000px;">
    <a id="skip-contents" class="btn skip-contents shadow-none" href="#ibblcontent">
    Skip to main content	</a>

    <button type="button" id="go-accessibility" class="go-access btn shadow-none text-primary">
    Go to accessibility
    </button>
    <button id="close-access" class="btn btn-outline-danger shadow-none" aria-label="Close quick accessibility menu" style="font-size: 12px;color: #dc3545;">
    <i class="fa fa-times accessibility-plugin-ac"></i>
    </button>
    </div>
<!--aceibility-switcher-->


<div tabindex="0" class="aceibility-switcher" id="choose_color">
    <div class="position-relative top-0 accessibility-wrapper">
    <button class="picker_close" data-toggle="tooltip" data-placement="top" title="Accessibility Menu"   ><i title="Accessibility Menu"  class="qmenu-btn fa fa-solid fa-wheelchair"></i></button>
<div style="display: none"  title="Accessibility Menu" class="accessibilitybody">
    <h4 class="accsstitle">Accessibility Menu</h4 >
        <br>
    <div class="animations">
        <div class="accessrow">
    <h5  class="accsssubtitle">Font size</h5 >
    <a href="javascript:increaseFontSize();" id="increaseFontSize" class="active" aria-label="increment font button" title="increment font button"><i class="fa fa-font"></i> <sup>+</sup></a>
    <a href="javascript:decreaseFontSize();" id="decreaseFontSize" class="active" aria-label="decrement font button"  title="decrement font button"><i class="fa fa-font"></i> <sup>-</sup></a>
    <br>
</div>
<div class="accessrow">
    <h5 class="accsssubtitle">Text Space/Line Height</h5>

    <a href="javascript:increaseTextspSize();" id="increaseTextspSize" class="active" aria-label="increment font button" title="increment font button"><i class="fa fa-text-width"></i> <sup>+</sup></a>
    <a href="javascript:increaseLineSize();" id="increaseLineSize" class="active" aria-label="decrement font button" title="decrement font button"><i class="fa fa-text-height"></i> <sup>-</sup></a>
    </div>
    </div>
    <div class="accessrow">
    <div class="header-footer">
    <div class="half">
    <h5  class="accsssubtitle">Others</h5>
    <div class="styled-selectt">
    <ul>
    <li id="h-one"><a id="ahrfHighlight" href="#" aria-label="Highlight button" title="Highlight Button"><input type="button" ><i></i> Highlight Links</a></li>
    <li id="h-two"><a id="invertImages" aria-label="Inverted Colors Button" title="Inverted Colors Button" href="#"><input type="button"><i></i> Inverted Colors</a></li>
    <li id="h-three"><a id="Monochrome" aria-label="Monochrome Button" title="Monochrome Button" href="#"><input type="button"><i></i> Monochrome</a></li>
    
    <li id="h-three"><a id="bigCursor" aria-label="Big Cursor Button" title="Big Cursor Button" href="#"><input type="button"><i></i> Big Cursor</a></li>
    <li id="h-three"><a id="readingguide" aria-label="Reading Guide Button" title="Reading Guide Button" href="#"><input type="button"><i></i> Reading Guide</a></li>
    <li id="h-three"></li>
    </ul>
    </div>
    </div>
    </div>
    <hr>
    <a id="screenreader" aria-label="Download Screen Reader" title="Download Screen Reader" target="_blank" href="https://www.islamibankbd.com/download/nvda_2020.4.exe">Download screen reader</a><br>
    <a href="#" aria-label="Clear All" title="Clear All" id="accecesbilitclean">Clear All</a>

    </div>
</div>


    </div>
    <!--End aceibility-switcher-->


</div>
    <!-- Preloader -->
    


    <!-- search-popup -->
    <div id="search-popup" class="search-popup">
        <div class="close-search"><span>Close</span></div>
        <div class="popup-inner">
            <div class="overlay-layer"></div>
            <div class="search-form">
                <form method="get" action="https://www.islamibankbd.com/search">
                    <div class="form-group">
                        <fieldset>
                            <input type="search" class="form-control" name="search-input" value="" placeholder="Search Here" required>
                            <input type="submit" value="Search Now!" class="theme-btn style-four">
                        </fieldset>
                    </div>
                </form>
                
                
            </div>
        </div>
    </div>
    <!-- search-popup end -->


    <!-- main header -->
        <header class="main-header style-one" tabindex="0">

    <div class="header-lower headerarea">
        <div class="outer-box clearfix">

            <div class="menu-container">

                <div class="logo-box">

                    <figure class="logo"><a href="https://www.islamibankbd.com"><img
                                src="https://www.islamibankbd.com/public/frontend/assets/images/IBBL-logo-Eng.png" alt="IBBL logo Image"></a>

                    </figure>

                </div>

                <!-- <div class="position-relativex">

                    <div class="lang-link">

                        <a href="https://www.islamibankbd.com/oldweb" target="_blank" title="IBBL Old WebSite Link"  aria-label="IBBL Old WebSite Link" class="theme-btn style-three no-border-radious"
                            style="padding: 2px 20px;color: #fff;">Old WebSite</a>

                    </div>

                </div> -->

            </div>

        </div>

        


        <div class="outer-box clearfix menugreenbg menu-header">

            <div class="menu-container">

                <div class="menu-area">

                    <!--Mobile Navigation Toggler-->

                    <div class="mobile-nav-toggler">

                        <i class="icon-bar"></i>

                        <i class="icon-bar"></i>

                        <i class="icon-bar"></i>

                    </div>

                    <div class="logo-box pull-left" style="display:none">
                        <figure class="logo"><a href="https://www.islamibankbd.com"><img
                        src="https://www.islamibankbd.com/public/frontend/assets/images/ibbl-logo.png" alt=""></a>

                        </figure>

                    </div>

                    <nav class="main-menu navbar-expand-md navbar-light">
                        <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">

                            <ul class="navigation clearfix">

                                <li class=" "><a class="" href="https://www.islamibankbd.com">Home</a>

                                </li>

                                <li class="dropdown ">
                                    <a href="javascript:void(0)" alt="About IBBL" >About IBBPLC</a>

                                    <div class="megamenu mega-menu-bg ">
                                        <div class="auto-container">
                                            <div class="row clearfix">

                                                <div class="col-lg-3 column">

                                                    <h4 class="menuhader">Company</h4>

                                                    <ul>

                                                        <li><a href="https://www.islamibankbd.com/about-us">IBBL at a Glance</a></li>

                                                        <li><a href="https://www.islamibankbd.com/corporate-information">Corporate
                                                                Information</a></li>

                                                        <li><a href="https://www.islamibankbd.com/sponsors">Sponsors</a></li>
                                                        <li><a href="https://www.islamibankbd.com/placement-holders">Placement
                                                                Holders</a></li>


                                                        <li><a href="https://www.islamibankbd.com/milestone-of-iibl">Milestone of IBBL</a>
                                                        </li>

                                                        <li><a href="https://www.islamibankbd.com/our-achievement">Our Achievement</a>
                                                        </li>
                                                        <li><a href="https://www.islamibankbd.com/awards">Awards</a></li>

                                                    </ul>

                                                </div>

                                                <div class="col-lg-3 column">

                                                    <h4 class="menuhader">Organizational Structure</h4>

                                                    <ul>

                                                        <li><a href="https://www.islamibankbd.com/board-of-director">Board of
                                                                Directors</a></li>

                                                        <li><a href="https://www.islamibankbd.com/shariah-supervisory-committee">Shari'ah
                                                                Supervisory Council</a></li>

                                                        <li><a href="https://www.islamibankbd.com/executive-committee">Executive
                                                                Committee</a></li>

                                                        <li><a href="https://www.islamibankbd.com/audit-committee">Audit
                                                                Committee</a></li>

                                                        <li><a href="https://www.islamibankbd.com/risk-management-committee">Risk
                                                                Management Committee</a></li>

                                                        <li><a href="https://www.islamibankbd.com/management-committee">Management
                                                                Committee</a></li>

                                                        <li><a href="https://www.islamibankbd.com/organization-structure">Organization
                                                                Structure</a></li>
                                                        <li><a href="https://www.islamibankbd.com/code-of-conduct-bod">Code of Conduct
                                                                of Board of Directors </a></li>

                                                    </ul>

                                                </div>

                                                <div class="col-lg-3 column">




                                                    <ul>

                                                        

                                                    </ul>

                                                    <h4 class="menuhader">Others</h4>

                                                    <ul>
                                                        <li><a href="https://www.islamibankbd.com/gratitude-of-chairman">Gratitude of
                                                                Chairman, Board of Directors</a></li>
                                                        <li><a href="https://www.islamibankbd.com/gratitude-of-managing-director">Gratitude
                                                                of Managing Director</a></li>

                                                    </ul>

                                                    <h4 class="menuhader">Subsidiaries</h4>
                                                    <ul>

                                                        <li><a href="https://www.islamibanksecurities.com/AboutUs/CompanyProfile.php"
                                                                target="_blank">Islami Bank Securities Limited</a></li>
                                                        <li><a href="https://www.ibcmlbd.com/about-us/"
                                                                target="_blank">Islami Bank Capital Management
                                                                Limited</a></li>

                                                    </ul>

                                                </div>

                                                

                                                <div class="col-lg-3 column">

                                                    <h4 class="menuhader">Financial Inforamtion</h4>



                                                    <ul>

                                                        <li><a href="https://www.islamibankbd.com/financial-report">Financial
                                                                Report</a></li>

                                                        <li><a href="https://www.islamibankbd.com/paidup-capital">Paidup Capital &
                                                                Reserve</a></li>

                                                        <li><a href="https://www.islamibankbd.com/equity">Equity</a></li>

                                                        <li><a href="https://www.islamibankbd.com/price-sensitive-disclosure">Price
                                                                Sensitive Disclosure</a></li>

                                                        <li><a href="https://www.islamibankbd.com/shareholder-information">Shareholders
                                                                Information</a></li>



                                                    </ul>
                                                    <h4 class="menuhader"><a href="https://www.ibfbd.org/"
                                                            target="_blank">Islami Bank Foundation</a></h4>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </li>

                                

                                <li class="dropdown "><a href="javascript:void(0)">Deposit</a>

                                    <div class="megamenu mega-menu-bg ">
                                        <div class="auto-container">
                                            <div class="row clearfix">

                                                <div class="col-lg-4 column">

                                                    <a href="https://www.islamibankbd.com/deposit">
                                                        <h4 class="menuhader">Deposit Products</h4>
                                                    </a>
                                                    <ul>
                                                        <li>
                                                            <a href="https://www.islamibankbd.com/deposit">Overview</a>
                                                        </li>
                                                                                                                                                                            <li><a
                                                                    href="https://www.islamibankbd.com/deposit/al-wadeeah-current-account">Al-Wadeeah Current Account</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/deposit/al-wadeeah-personal-retail-account">Al-Wadeeah Personal Retail Account</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/deposit/mudaraba-special-notice-account-msna">Mudaraba Special Notice Account (MSNA)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/deposit/mudaraba-payroll-account">Mudaraba Payroll Account</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/deposit/mudaraba-waqf-cash-deposit-account-mwcda">Mudaraba Waqf Cash Deposit Account (MWCDA)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/deposit/mudaraba-upohar-deposit">Mudaraba Upohar Deposit</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/deposit/mudaraba-priority-savings-account">Mudaraba Priority Savings Account</a>
                                                            </li>
                                                                                                            </ul>

                                                </div>
                                                <div class="col-lg-4 column">
                                                    <h4 class="menuhader">Savings Accounts</h4>
                                                    <ul>
                                                                                                                                                                            <li><a
                                                                    href="https://www.islamibankbd.com/deposit/mudaraba-savings-account-msa">Mudaraba Savings Account (MSA)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/deposit/students-mudaraba-savings-account-smsa">Students Mudaraba Savings Account (SMSA)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/deposit/mudaraba-farmers-savings-account-mfsa">Mudaraba Farmers Savings Account (MFSA)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/deposit/mudaraba-industrial-employees-savings-account-miesa">Mudaraba Industrial Employees Savings Account (MIESA)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/deposit/mudaraba-school-students-savings-account">Mudaraba School Students Savings Account</a>
                                                            </li>
                                                                                                            </ul>
                                                    <br>
                                                    <h5>Monthly Savings Schemes</h5>
                                                    <ul>
                                                                                                                                                                            <li><a
                                                                    href="https://www.islamibankbd.com/deposit/mudaraba-special-savings-pension-account-mssa">Mudaraba Special Savings (Pension) Account (MSSA)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/deposit/mudaraba-muhor-savings-account-mmsa">Mudaraba Muhor Savings Account (MMSA)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/deposit/mudaraba-hajj-savings-account-mhsa">Mudaraba Hajj Savings Account (MHSA)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/deposit/mudaraba-bibaho-savings-account">Mudaraba Bibaho Savings Account</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/deposit/mudaraba-education-savings-scheme">Mudaraba Education Savings Scheme</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/deposit/mudaraba-expatriate-housing-deposit-scheme-mehds">Mudaraba Expatriate Housing Deposit Scheme (MEHDS)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/deposit/mudaraba-umrah-savings-scheme">Mudaraba Umrah Savings Scheme</a>
                                                            </li>
                                                                                                            </ul>



                                                </div>
                                                <div class="col-lg-4 column">


                                                    <h5>Term (Fixed) Deposits</h5>
                                                    <ul>
                                                                                                                                                                            <li><a
                                                                    href="https://www.islamibankbd.com/deposit/mudaraba-term-deposit-account-mtdr">Mudaraba Term Deposit Account (MTDR)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/deposit/mudaraba-monthly-profit-deposit-account-mmpda">Mudaraba Monthly Profit Deposit Account (MMPDA)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/deposit/mudaraba-savings-bond-msb">Mudaraba Savings Bond (MSB)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/deposit/mudaraba-nrb-savings-bond-mnsb">Mudaraba NRB Savings Bond (MNSB)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/deposit/mudaraba-senior-citizen-monthly-profit-deposit-scheme">Mudaraba Senior Citizen Monthly Profit Deposit Scheme</a>
                                                            </li>
                                                                                                            </ul>
                                                    <br>

                                                    <h5>Foreign Currency Accounts</h5>
                                                    <ul>
                                                                                                                                                                            <li><a
                                                                    href="https://www.islamibankbd.com/deposit/mudaraba-foreign-currency-deposit-account-mfcd">Mudaraba Foreign Currency Deposit Account (MFCD)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/deposit/mudaraba-foreign-currency-term-deposit-receipt-account-mfctdra">Mudaraba Foreign Currency Term Deposit Receipt Account (MFCTDRA)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/deposit/mudaraba-international-banking-account-miba">Mudaraba International Banking Account (MIBA)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/deposit/mudaraba-resident-foreign-currency-deposit-mrfcd-account">Mudaraba Resident Foreign Currency Deposit (MRFCD) Account</a>
                                                            </li>
                                                                                                            </ul>

                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="dropdown "><a href="javascript:void(0)">Investment</a>
                                    <div class="megamenu mega-menu-bg ">
                                        <div class="auto-container">
                                            <div class="row clearfix">
                                                <div class="col-lg-3 column">
                                                    <ul>
                                                        <li><a href="https://www.islamibankbd.com/investment"> Overview </a></li>
                                                    </ul>
                                                    <a
                                                        href="https://www.islamibankbd.com/investments/Modes-of-Investment">


                                                        <h4 class="menuhader">Modes of Investment</h4>
                                                    </a>
                                                                                                        <h5>BAI-MODES</h5>
                                                    <ul>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/bai-muajjal">Bai-muajjal</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/bai-istijrar">Bai-Istijrar</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/bai-salam">Bai-Salam</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/bai-istisnaa">Bai-Istisna&#039;a</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/bai-as-sarf">Bai-As-Sarf</a>
                                                            </li>
                                                        
                                                    </ul>

                                                                                                        <h5>SHARE-MODES</h5>
                                                    <ul>

                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/mudaraba">Mudaraba</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/musharaka">Musharaka</a>
                                                            </li>
                                                        
                                                    </ul>

                                                                                                        <h5>IJARA-MODES</h5>
                                                    <ul>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/hire-purchase-under-shirkatul-meelk">Hire Purchase under Shirkatul Meelk</a>
                                                            </li>
                                                        
                                                    </ul>




                                                </div>

                                                <div class="col-lg-4 column ">
                                                    
                                                    



                                                    <ul>
                                                        
                                                    </ul>
                                                    

                                                    <a href="https://www.islamibankbd.com/investments/SME-Investment">

                                                        <h4 class="menuhader">SME Investment</h4>

                                                    </a>




                                                    <ul>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/sme-investment">SME Investment</a>
                                                            </li>
                                                        
                                                    </ul>

                                                    

                                                    
                                                    <a href="https://www.islamibankbd.com/microfinance">



                                                        <h4 class="menuhader">Microfinance</h4>
                                                    </a>





                                                    

                                                </div>

                                                <div class="col-lg-4 column">
                                                    <a href="https://www.islamibankbd.com/investments/Retail-Schemes">





                                                        <h4 class="menuhader">Retail & Consumer Schemes </h4>

                                                    </a>

                                                    

                                                    
                                                    <ul>

                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/household-durables-scheme-hds">Household Durables Scheme (HDS)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/investment-scheme-for-doctors-isd">Investment Scheme for Doctors (ISD)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/transport-investment-scheme-tis">Transport Investment Scheme (TIS)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/car-investment-scheme-cis">Car Investment Scheme (CIS)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/small-business-investment-scheme-sbis">Small Business Investment Scheme (SBIS)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/micro-industries-investment-scheme-miis">Micro Industries Investment Scheme (MIIS)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/agricultural-implements-investment-scheme-aiis">Agricultural Implements Investment Scheme (AIIS)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/housing-investment-program-hip">Housing Investment Program (HIP)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/real-estate-investment-program">Real Estate Investment Program</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/agricultural-investment-of-ibbl">Agricultural Investment of IBBL</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/nrb-entrepreneurs-investment-scheme-neis">NRB Entrepreneurs Investment Scheme (NEIS)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/women-entrepreneurs-investment-scheme-weis">Women Entrepreneurs Investment Scheme (WEIS)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/housing-investment-programme-for-govt-employees-hipge">Housing Investment Programme for Govt. Employees (HIPGE)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/polli-griha-nirman-biniyog-prokalpa-pgnbp">Polli Griha Nirman Biniyog Prokalpa (PGNBP)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/solar-panel-investment-scheme-spis">Solar Panel Investment Scheme (SPIS)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/education-investment-scheme">Education Investment Scheme</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/semi-pucca-housing-investment-scheme">Semi-Pucca Housing Investment Scheme</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/overseas-employment-investment-scheme-swapnojatra">Overseas Employment Investment Scheme (Swapnojatra)</a>
                                                            </li>
                                                                                                                    <li><a
                                                                    href="https://www.islamibankbd.com/investment/health-care-investment-scheme">Health Care Investment Scheme</a>
                                                            </li>
                                                        
                                                    </ul>

                                                </div>



                                            </div>
                                        </div>
                                    </div>

                                </li>
								
								<li class=" "><a
                                        aria-label="Foreign Exchange" title="Foreign Exchange"
                                        href="https://www.islamibankbd.com/feb">Foreign Exchange</a>
                                </li>
								
								
                                
                                
                                <li class="dropdown "><a href="javascript:void(0)">Card</a>

                                    <div class="megamenu mega-menu-bg ">

                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="row clearfix">
                                                    <div class="col-lg-3 column">
                                                        <a href="https://www.islamibankbd.com/cards" class="text-center">
                                                            <h4 class="menuhader dbanking">
                                                                <img
                                                                    src="https://www.islamibankbd.com/public/frontend/assets/images/icons/card_ibbl.png">
                                                                Credit Cards
                                                            </h4>
                                                        </a>
                                                    </div>
                                                    <div class="col-lg-3 column">
                                                        <a href="https://www.islamibankbd.com/cards" class="text-center">
                                                            <h4 class="menuhader dbanking">
                                                                <img
                                                                    src="https://www.islamibankbd.com/public/frontend/assets/images/icons/card_ibbl.png">
                                                                Debit Cards
                                                            </h4>
                                                        </a>
                                                    </div>
                                                    <div class="col-lg-3 column">
                                                        <a href="https://www.islamibankbd.com/cards" class="text-center">
                                                            <h4 class="menuhader dbanking">
                                                                <img
                                                                    src="https://www.islamibankbd.com/public/frontend/assets/images/icons/card_ibbl.png">
                                                                Prepaid Card
                                                            </h4>
                                                        </a>
                                                    </div>

                                                    <div class="col-lg-3 column">
                                                        <a href="https://www.islamibankbd.com/offers" class="text-center">
                                                            <h4 class="menuhader dbanking">
                                                                <img
                                                                    src="https://www.islamibankbd.com/public/frontend/assets/images/icons/offers.png">
                                                                Offers
                                                            </h4>
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                </li>
                                
                                

                                <li class="dropdown "><a href="javascript:void(0)">Services</a>

                                    <div class="megamenu mega-menu-bg ">
                                         
                                         

                                        <div class="row clearfix">

                                                                                            <div class="col-lg-3 column column-max-width">
                                                                                                            <a href="https://www.islamibankbd.com/services">
                                                            <h4 class="dbanking">
                                                                

                                                                Overview
                                                            </h4>
                                                        </a>
                                                                                                    </div>
                                                                                            <div class="col-lg-3 column column-max-width">
                                                                                                            <a href="https://www.islamibankbd.com/services/corporate-services">
                                                            <h4 class="dbanking">
                                                                

                                                                Corporate Services
                                                            </h4>
                                                        </a>
                                                                                                    </div>
                                                                                            <div class="col-lg-3 column column-max-width">
                                                                                                            <a href="https://www.islamibankbd.com/services/inter-bank-fund-transfer">
                                                            <h4 class="dbanking">
                                                                

                                                                Inter-Bank Fund Transfer
                                                            </h4>
                                                        </a>
                                                                                                    </div>
                                                                                            <div class="col-lg-3 column column-max-width">
                                                                                                            <a href="https://www.islamibankbd.com/services/utility-bill-payment">
                                                            <h4 class="dbanking">
                                                                

                                                                Utility Bill Payment
                                                            </h4>
                                                        </a>
                                                                                                    </div>
                                                                                            <div class="col-lg-3 column column-max-width">
                                                                                                            <a href="https://www.islamibankbd.com/services/a-challan">
                                                            <h4 class="dbanking">
                                                                

                                                                A-Challan
                                                            </h4>
                                                        </a>
                                                                                                    </div>
                                                                                            <div class="col-lg-3 column column-max-width">
                                                                                                            <a href="https://www.islamibankbd.com/services/e-hajj-service">
                                                            <h4 class="dbanking">
                                                                

                                                                e-Hajj service
                                                            </h4>
                                                        </a>
                                                                                                    </div>
                                                                                            <div class="col-lg-3 column column-max-width">
                                                                                                            <a href="https://www.islamibankbd.com/services/locker-service">
                                                            <h4 class="dbanking">
                                                                

                                                                Locker Service
                                                            </h4>
                                                        </a>
                                                                                                    </div>
                                                                                            <div class="col-lg-3 column column-max-width">
                                                                                                            <a href="https://www.islamibankbd.com/services/e-gp-payment">
                                                            <h4 class="dbanking">
                                                                

                                                                e-GP payment
                                                            </h4>
                                                        </a>
                                                                                                    </div>
                                                                                    </div>

                                    </div>

                                </li>

                                <li class="dropdown "><a href="javascript:void(0)">Digital Banking</a>

                                    <div class="megamenu mega-menu-bg ">

                                        <div class="row clearfix">
                                            
                                                                                            <div class="col-lg-3 column column-max-width">
                                                    <a href="https://www.islamibankbd.com/digital-banking/cellfin">
                                                        <h4 class="dbanking">
                                                            
                                                            CellFin
                                                        </h4>
                                                    </a>
                                                </div>
                                                                                            <div class="col-lg-3 column column-max-width">
                                                    <a href="https://www.islamibankbd.com/digital-banking/internet-banking">
                                                        <h4 class="dbanking">
                                                            
                                                            Internet Banking
                                                        </h4>
                                                    </a>
                                                </div>
                                                                                            <div class="col-lg-3 column column-max-width">
                                                    <a href="https://www.islamibankbd.com/digital-banking/mcash">
                                                        <h4 class="dbanking">
                                                            
                                                            mCash
                                                        </h4>
                                                    </a>
                                                </div>
                                                                                            <div class="col-lg-3 column column-max-width">
                                                    <a href="https://www.islamibankbd.com/digital-banking/atm-service">
                                                        <h4 class="dbanking">
                                                            
                                                            ATM Service
                                                        </h4>
                                                    </a>
                                                </div>
                                                                                            <div class="col-lg-3 column column-max-width">
                                                    <a href="https://www.islamibankbd.com/digital-banking/any-branch-service">
                                                        <h4 class="dbanking">
                                                            
                                                            ANY BRANCH Service
                                                        </h4>
                                                    </a>
                                                </div>
                                                                                            <div class="col-lg-3 column column-max-width">
                                                    <a href="https://www.islamibankbd.com/digital-banking/sms-service">
                                                        <h4 class="dbanking">
                                                            
                                                            SMS Service
                                                        </h4>
                                                    </a>
                                                </div>
                                                                                            <div class="col-lg-3 column column-max-width">
                                                    <a href="https://www.islamibankbd.com/digital-banking/cash-by-code">
                                                        <h4 class="dbanking">
                                                            
                                                            Cash by Code
                                                        </h4>
                                                    </a>
                                                </div>
                                                                                            <div class="col-lg-3 column column-max-width">
                                                    <a href="https://www.islamibankbd.com/digital-banking/pos-terminal">
                                                        <h4 class="dbanking">
                                                            
                                                            POS Terminal
                                                        </h4>
                                                    </a>
                                                </div>
                                                                                            <div class="col-lg-3 column column-max-width">
                                                    <a href="https://www.islamibankbd.com/digital-banking/merchant-qr">
                                                        <h4 class="dbanking">
                                                            
                                                            Merchant QR
                                                        </h4>
                                                    </a>
                                                </div>
                                                                                            <div class="col-lg-3 column column-max-width">
                                                    <a href="https://www.islamibankbd.com/digital-banking/i-paysafe">
                                                        <h4 class="dbanking">
                                                            
                                                            i-PaySafe
                                                        </h4>
                                                    </a>
                                                </div>
                                                                                    </div>

                                    </div>

                                </li>



                                <li class="dropdown "><a href="javascript:void(0)">Media Room</a>

                                    <ul>

                                        <li><a href="https://www.islamibankbd.com/news-events">News & Events</a></li>

                                        <li><a href="https://www.islamibankbd.com/interviews">IBBL's Statement in Media</a></li>

                                        


                                    </ul>

                                </li>

                                <li class="dropdown ">
                                    <a href="javascript:void(0)">Location</a>

                                    <ul>

                                        <li><a href="https://www.islamibankbd.com/branch">Branch Location</a></li>

                                        <li><a href="https://www.islamibankbd.com/sub-branch">Sub Branch Location</a></li>
                                        <li><a href="https://www.islamibankbd.com/public/assets/Routing-Number/Routing-No-of-IBBL-Branches.pdf" target="_blank">Routing Number of Branches</a></li>

                                        <li><a href="https://www.islamibankbd.com/atm-branch">ATM Booth Location</a></li>

                                        <li><a href="https://www.islamibankbd.com/crm-booth">CRM Booth Location</a></li>

                                        <li><a href="https://www.islamibankbd.com/agent-banking">Agent Banking Outlets</a></li>




                                    </ul>

                                </li>

                                <li class=" "><a aria-label="Offshore Banking" title="Offshore Banking" href="https://www.islamibankbd.com/offshore-banking" >Offshore Banking</a>
                                </li>

                                

                                

                                <style>
                                    @keyframes  blink {
                                        0% {
                                            opacity: 1;

                                        }
                                        25% {
                                             opacity: .25;
                                             }
                                        50% {
                                             opacity: .5;
                                             }
                                             }
                                        75% {
                                                opacity: .75;
                                                }

                                        100% {
                                            opacity: 1;
                                        }


                                        .agm-blink a {
                                            animation: blink 0s infinite;
                                        }
                                        .agm-text a{
                                            font-size: 18px !important;
                                            font-weight: 600 !important;
                                            color: #FDB102 !important;
                                            padding-left: 50px;


                                        }

                                </style>
                                
                               



                                <!--<li class="dropdown"><a href="#">Location</a>

                                    <div class="megamenu halfmegamunu2 mega-menu-bg ">

                                        <div class="row clearfix">

                                            <div class="col-lg-4 column">

                                                <h4 class="menuhader">Location</h4>

                                                <ul>

                                                    <li><a href="https://www.islamibankbd.com/zone-wise-branch">Zone Wise Branch</a></li>

                                                    <li><a href="https://www.islamibankbd.com/district-wise-branch">District Wise Branch</a></li>

                                                    <li><a href="https://www.islamibankbd.com/branch">Branch Location</a></li>

                                                    <li><a href="https://www.islamibankbd.com/sme-branch">SME Branch Location</a></li>

                                                    <li><a href="https://www.islamibankbd.com/ad-branch">AD Branch Location</a></li>

                                                    <li><a href="https://www.islamibankbd.com/corporate-branch">Corporate Branch Location</a></li>
                                                    <li><a href="https://www.islamibankbd.com/sub-branch">Sub Branch Location</a></li>

                                                    <li><a href="https://www.islamibankbd.com/atm-branch">ATM Branch Location</a></li>

                                                    <li><a href="https://www.islamibankbd.com/crm-booth">CRM Booth Location</a></li>

                                                    <li><a href="https://www.islamibankbd.com/agent-banking">Agent Banking Outlets</a></li>

                                                </ul>

                                            </div>

                                            <div class="col-lg-4 column">

                                                <ul>

                                                    <br>
                                                    <li><a href="https://www.islamibankbd.com/sub-branch">Sub Branch Location</a></li>

                                                    <li><a href="https://www.islamibankbd.com/atm-branch">ATM Branch Location</a></li>

                                                    <li><a href="https://www.islamibankbd.com/crm-booth">CRM Booth Location</a></li>

                                                    <li><a href="https://www.islamibankbd.com/agent-banking">Agent Banking Outlets</a></li>

                                                </ul>

                                            </div>



                                        </div>

                                    </div>



                                </li>-->





                                

                            </ul>



                        </div>

                    </nav>



                </div>
                <div class="menu-right-content clearfix">

                    

                    <div class="btn-box">

                        <a href="tel:16259" class="theme-btn-call style-onex">

                            <img src="https://www.islamibankbd.com/public/frontend/assets/images/phone-icon.png" alt="Hotline Number:1 6 2 5 9">
                            1 6 2 5 9</a>

                    </div>

                </div>
            </div>

        </div>

    </div>



    <!--sticky Header-->



</header>
        
    <!-- main-header end -->

    <!-- Mobile Menu  -->
    <div class="mobile-menu">
        <div class="menu-backdrop"></div>
        <div class="close-btn"><i class="fas fa-times"></i></div>

        <nav class="menu-box">
            <div class="nav-logo"><a href="https://www.islamibankbd.com"><img src="https://www.islamibankbd.com/public/frontend/assets/images/ibbl-sm-logo.png" alt="" title=""></a></div>
            <div class="menu-outer">
                <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
            </div>
            <div class="contact-info">
                <h4>Contact Info</h4>
                <ul>
                    <li>Islami Bank Tower <br>
                        40, Dilkusha C/A, Dhaka - 1000
                    </li>
                    <li><a href="tel:+029563040">(02) 9563040(Auto Hunting), 9560099, 9567161,9567162, 9569417</a></li>
                    <li><a href="mailto:info@islamibankbd.com">info@islamibankbd.com</a></li>
                </ul>
            </div>
            <div class="social-links">
                <ul class="clearfix">
                    <li>
                        <a href="https://www.facebook.com/IslamiBankBangladeshPublicLimitedCompany/" target="_blank">
                        <span class="fab fa-facebook-square"></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/7595409/" target="_blank">
                        <span class="fab fa-linkedin-in "></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@IslamiBankBangladeshPLC" target="_blank">
                            <span class="fab fa-youtube"></span>
                        </a>
                    </li>
                        <li>
                            <a href="https://www.instagram.com/islamibankbangladeshplc/" target="_blank">
                                <span class="fab fa-instagram"></span>
                            </a>
                        </li>
                    <li>
                        <a href="https://twitter.com/IBBL1983" target="_blank">
                            <span class="fab  fa-twitter"></span>
                        </a>
                    </li>


                </ul>
            </div>
        </nav>
    </div><!-- End Mobile Menu -->


    
<div class="error-page-area py-5">
    <div class="container">
        <div class="row">
            <div class="offset-md-2 col-lg-8 col-md-12 col-sm-12">
                <div class="error-top">
                    <img src="https://www.islamibankbd.com/public/frontend/assets/images/404.png" class="img-responsive" alt="404">
                </div>
            </div>
            <div class="offset-md-2 col-lg-8 col-md-12 col-sm-12">

                <div class="error-bottom">
                    <h2>Sorry!!! Page Was Not Found</h2>
                    <p>The page you are looking is not available or has been removed. Try going to Home Page by using the button below.</p>
                    <a href="https://www.islamibankbd.com" class="dbtn-apply color-10">Go To Home Page</a>
                </div>
            </div>
        </div>
    </div>
</div>




    <!-- main-footer -->
    <section class="footer-section">

    <div class="overlay_footer">



        <div class="container">



            <div class="row">

                <div class="col-md-9 quiq-links-footer">



                    <div class="row">



                        <ul class="col-md-5 quiq-links-footer-ul">

                            <h5 class="quiq-links-footer-title" tabindex="0">Focusing On</h5>

                            <li><a href="https://www.islamibankbd.com/abtIBBL">About Islamic Banking</a></li>
							<li><a href="https://www.islamibankbd.com/financial-literacy">Financial Literacy</a></li>

                                                        <li><a href="public/assets/focus-on/Citizen-Charter/1717649802_IBBPLC Citizen Charter 2024.pdf" target="_blank">Citizen Charter</a></li>
                            


                                                        <li><a href="public/assets/focus-on/credit-rating/1720505178_Latest Credit Rating of IBBPLC..pdf" target="_blank">Credit Rating Report</a></li>

                            

                            <li><a href="https://www.islamibankbd.com/green-banking-disclosure">Green Banking Disclosure</a></li>

                            <li><a href="https://www.islamibankbd.com/disclosure-due-diligence">Disclosure of Due Diligence</a></li>

                            <li><a href="https://www.islamibankbd.com/disclosure-risk-capital">Disclosure on Risk Based Capital (BASEL III)</a></li>

                            



                            <li><a href="https://www.islamibankbd.com/bank-note-security-features">Bank Note Security Features</a></li>

                            <li><a href="https://www.islamibankbd.com/ibbl-agent-banking">IBBPLC Agent Banking</a></li>

                            <li><a href="https://www.islamibankbd.com/national-integraty-strategy">National Integrity Strategy (NIS)</a></li>

                            <li><a href="https://www.islamibankbd.com/notice-on-bond-sukuk">Notice on Bond/Sukuk</a></li>

                            <li><a href="https://www.islamibankbd.com/shareholder-information">Shareholders Information</a></li>

                            

                            
							






                        </ul>

                        <ul class="col-md-3 quiq-links-footer-ul">

                            <h5 class="quiq-links-footer-title" tabindex="0">Quick Links</h5>

                            <li><a href="https://www.islamibankbd.com/contact-us">Contact Us</a></li>

                            

                            <li><a href="https://career.islamibankbd.com/career.php" target="_blank">Career</a></li>

                            <li><a href="https://www.ibtra.com/internship-info" target="_blank" >Internship</a></li>

                            <li><a href="https://www.islamibankbd.com/complaint-management-cell">Complaint Management Cell</a></li>

                            <li><a href="https://www.islamibankbd.com/news-events">News & Events</a></li>

                            <li><a href="https://www.islamibankbd.com/tender-notice">Tender Notice</a></li>

                            <li><a href="https://www.islamibankbd.com/annual-report">Annual Report</a></li>

                            <li><a href="https://www.islamibankbd.com/favourite-links">Favorite Links</a></li>

                            <li><a href="https://www.islamibankbd.com/forms-download">Forms Download</a></li>

                            <li><a href="https://www.islamibankbd.com/publications">Publications</a></li>

							
							
							<li><a target="_blank" href="https://www.islamibankbd.com/prayer-time">Timetable of Salat</a></li>

                        </ul>



                        <ul class="col-md-4 quiq-links-footer-ul">

                            <h5 class="quiq-links-footer-title" tabindex="0">Share/Profit/Currency Rate</h5>

                            <li><a href="https://www.islamibankbd.com/share-price-of-ibbl">Share Price of IBBPLC </a></li>

                            <li><a href="https://www.islamibankbd.com/charges">Bank Charges</a></li>

                            <li><a href="https://www.islamibankbd.com/profit-rates-on-deposits">Profit Rate on Deposits </a></li>

                            <li><a href="https://www.islamibankbd.com/profit-rate">Profit Rate (Provisional)</a></li>


                                                            <li><a href="https://www.islamibankbd.com/public/assets/Share-Profit-CurrencyRate/Rate-Return-Investment/1730960254_Investment Profit Rate.pdf" target="_blank">Rate of Return on Investment </a></li>
                            


                            <!--<li style="cursor: pointer;"><a data-toggle="modal" data-target="#exchangerate">Currency Exchange Rate</a></li>-->
							<li style="cursor: pointer;"><a href="https://www.islamibankbd.com/exchange-rate">Currency Exchange Rate</a></li>

                            <li><a href="https://www.islamibankbd.com/unclaimed-deposit">Unclaimed Deposit</a></li>
							<li><a href="https://www.islamibankbd.com/unclaimed-dividend">Unclaimed Dividend</a></li>

                            

                            



                        </ul>

                    </div>



                </div>

                <div class="col-md-3">

                    <div class="footer-text">

                        <br>

                        <p><span style="font-size:15px;">Islami Bank Tower</span><br>

                            40, Dilkusha C/A<br>

                            Dhaka - 1000,

                            Bangladesh</p>

                    </div>

                    <ul class="info-list clearfix">

                        <li><i class="fas fa-map-marker-alt"></i>Islami Bank Tower 40, Dilkusha C/A, Dhaka - 1000</li>

                        <li><i class="fas fa-envelope"></i>Email <a href="mailto:info@islamibankbd.com">info@islamibankbd.com</a>                        </li>

                        <li><i class="fas fa-headphones"></i>PABX <a href="tel:+8802223383040">(+88-02) 223383040</a>, <a href="tel:+8802223384816">223384816</a></li>

                        <li>Contact Center 
                            <a href="tel:+88028331090">+88-02-8331090</a> 
                            or <a href="tel:+8809611016259">+8809611016259</a> 
                            or
                            <a href="tel:16259"><strong>16259</strong></a>
                         </li>
                    </ul>



                    

                    <div class="footer-social-icons">

                        <h5 class="quiq-links-footer-title"> Follow us on</h5>



                        <a href="https://www.facebook.com/IslamiBankBangladeshPublicLimitedCompany/" title="Facebook link" target="_blank" class="icon facebook"><i class="fab fa-facebook-f"></i></a>

                        <a href="https://www.linkedin.com/company/7595409/" title="linkedin link" target="_blank" class="icon linkedin"><i class="fab fa-linkedin-in"></i></a>

                        <a href="https://www.youtube.com/@IslamiBankBangladeshPLC" title="youtube link" target="_blank" class="icon youtube"><i class="fab fa-youtube"></i></a>

                        <a href="https://www.instagram.com/islamibankbangladeshplc/" title="instagram link" target="_blank" class="icon instagram"><i class="fab fa-instagram"></i></a>

                        <a href="https://twitter.com/IBBL1983" target="_blank" title="twitter link"  class="icon twitter"><i class="fab fa-twitter"></i></a>









                        

                    </div>



                </div>

            </div>





        </div>



        <div class="row  mr-tp-40">

            <div class="container final-footer-top">

                <div class="final-footer-area-text">

                    © Copyright 2025 Islami Bank Bangladesh PLC <strong>

                        <!--<a class="dev_info" href="#">Datacraft Limited.</a></strong>-->

                </div>



            </div>

        </div>

    </div>





</section>

<!-- main-footer end -->



    <div style="height: 4px; width: 100vw; position: fixed; left: 0px; top: 0px; display: none; z-index: 999999; pointer-events: none; transform: translateY(2216px);" id="reading_Guide"></div>
    <!--Scroll to top-->
    <button class="scroll-top scroll-to-target" data-target="html">
        <span class="fa fa-arrow-up"></span>
    </button>


    <!-- sidebar cart item -->

<div class="xs-sidebar-group info-group info-sidebar">

    <div class="xs-overlay xs-bg-black"></div>

    <div class="xs-sidebar-widget">

        <div class="sidebar-widget-container">

            <div class="widget-heading">

                <a href="#" class="close-side-widget">X</a>

            </div>

            <div class="sidebar-textwidget">

                <div class="sidebar-info-contents">

                    <div class="content-inner">

                        <div class="upper-box">

                            <div class="logo">

                                <a href="https://www.islamibankbd.com"><img src="https://www.islamibankbd.com/public/frontend/assets/images/sidebar-logo.png" alt="" /></a>

                            </div>


                        </div>



                        <div class="info-box">


                            <ul class="social-links clearfix">

                                <li><a href="https://www.facebook.com/islamibankbangladeshlimited/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>

                                <li><a href="https://www.linkedin.com/company/islamibank/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>

                                <li><a href="https://www.youtube.com/c/IslamiBankBangladeshLimited" target="_blank"><i class="fab fa-youtube"></i></a></li>

                                <li><a href="http://instagram.com/islamibankbangladeshlimited" target="_blank"><i class="fab fa-instagram"></i></a></li>

                                <li><a href="https://twitter.com/IBBL1983" target="_blank"><i class="fab fa-twitter"></i></a></li>



                            </ul>

                        </div>

                    </div>

                </div>



            </div>

        </div>

    </div>

</div>



<!-- END sidebar widget item -->





<div id="social-sidebar" class="hidden-mobile">

    <ul>

        

        



        <li><a href="https://ibblportal.islamibankbd.com/indexLogin.do" target="_blank" class="entypo-self"><img src="https://www.islamibankbd.com/public/frontend/assets/images/ibbl-ibanking.png" alt="ibbl-ibanking"> <span><i>ibanking</i></span></a></li>

        <li><a href="https://www.islamibankbd.com/branch" class="entypo-self" title="Our Branches"><i class="fas fa-map-marked-alt"></i>

                <span><i>Our Branches</i></span>

            </a></li>



        <li><a href="https://www.islamibankbd.com/exchange-rate" class="entypo-self"><img
                    src="https://www.islamibankbd.com/public/frontend/assets/images/exchangerate.png" alt="exchange rate">

                <span><i>Exchange Rate</i></span>



            </a></li>



        



        



        <li class="help side-panel-trigger"><a href="#" class="entypo-self"><i class="fa fa-share-alt"></i>

            <span class="social-media">

                <i>Social Media</i>





                <em class="icon facebook" onClick="window.open('https://www.facebook.com/IslamiBankBangladeshPublicLimitedCompany/', '_blank')" title="Facebook"><i class="fab fa-facebook-f"></i> &nbsp;Facebook</em>

                <br>

                <em class="icon linkedin" onClick="window.open('https://www.linkedin.com/company/7595409/', '_blank')"title="LinkedIn"><i class="fab fa-linkedin-in"  ></i> &nbsp;LinkedIn</em> <br>

                <em class="icon youtube" onClick="window.open('https://www.youtube.com/@IslamiBankBangladeshPLC', '_blank')"  title="Youtube" ><i class="fab fa-youtube"></i> &nbsp;Youtube</em> <br>

                <em class="icon instagram" onClick="window.open('https://www.instagram.com/islamibankbangladeshplc/', '_blank')" title="Instagram"><i class="fab fa-instagram"    ></i> &nbsp;Instagram</em> <br>

                <em class="icon twitter" onClick="window.open('https://twitter.com/IBBL1983', '_blank')" title="Twitter"><i class="fab fa-twitter"></i> &nbsp;Twitter</em> <br>





            </span>

        </a>

    </li>

    <li><a href="https://help.islamibankbd.com/indexLogin.do" target="_blank" class="entypo-self">
        <img src="https://www.islamibankbd.com/public/frontend/assets/images/ibbl-help.png" alt="Help-Portal" style="height: 30px">
        <span><i>Help Portal</i></span></a></li>


	<li class="help side-panel-trigger">
            <a href="#" onclick="return false;" class="entypo-self search-toggler" >
                <i class="flaticon-search-1"></i>
                <span class="social-media">
                    <i>Search</i>
                </span>
            </a>
    </li>




    </ul>

</div>



<!--Scroll to top-->

<button class="scroll-top style-three scroll-to-target" data-target="html">

    <span class="fa fa-arrow-up"></span>

</button>





<!-- sidebar cart item -->

<div class="xs-sidebar-group info-group info-sidebar">

    <div class="xs-overlay xs-bg-black"></div>

    <div class="xs-sidebar-widget">

        <div class="sidebar-widget-container">

            <div class="widget-heading">

                <a href="#" class="close-side-widget">X</a>

            </div>

            <div class="sidebar-textwidget">

                <div class="sidebar-info-contents">

                    <div class="content-inner">

                        <br>

                        <br>



                        <div class="upper-box">

                            <div class="col-xl-12 col-lg-12 col-md-12 inner-column">



                                <h3 class="title">Complaint Management Cell</h3>

                                <br>



                            </div>

                        </div>



                        <div class="contact-style-two">

                            <div class="col-xl-12 col-lg-12 col-md-12 inner-column">



                                <form method="post" action="#" id="contact-form" class="default-form" novalidate="novalidate">

                                    <div class="row clearfix">

                                        <div class="col-lg-12 col-md-12 col-sm-12 form-group">

                                            <input type="text" name="username" placeholder="Your Name" required="" aria-required="true">

                                        </div>

                                        <div class="col-lg-6 col-md-6 col-sm-12 form-group">

                                            <input type="email" name="email" placeholder="Email address" required="" aria-required="true">

                                        </div>

                                        <div class="col-lg-6 col-md-6 col-sm-12 form-group">

                                            <input type="text" name="phone" placeholder="Phone" required="" aria-required="true">

                                        </div>

                                        <div class="col-lg-12 col-md-12 col-sm-12 form-group">

                                            <input type="text" name="subject" placeholder="Subject" required="" aria-required="true">

                                        </div>

                                        <div class="col-lg-12 col-md-12 col-sm-12 form-group">

                                            <textarea name="message" placeholder="Message"></textarea>

                                        </div>



                                        <div class="col-lg-12 col-md-12 col-sm-12 form-group">

                                            <input type="file" name="atachmentfiles" placeholder="Atachment" required="" aria-required="true">

                                        </div>

                                        <div class="col-lg-12 col-md-12 col-sm-12 form-group message-btn">

                                            <button class="theme-btn style-one" type="submit" name="submit-form">

                                                Submit

                                            </button>

                                        </div>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>



            </div>

        </div>

    </div>

</div>



    <!-- END sidebar widget item -->


    <!-- jequery plugins -->
    <script src="https://www.islamibankbd.com/public/frontend/assets/js/jquery.js"></script>
    <script src="https://www.islamibankbd.com/public/frontend/assets/js/jquery-migrate-3.4.1.min.js"></script>
    <script src="https://www.islamibankbd.com/public/frontend/assets/js/popper.min.js"></script>
    <script src="https://www.islamibankbd.com/public/frontend/assets/js/bootstrap.min.js"></script>
    <script src="https://www.islamibankbd.com/public/frontend/assets/js/owl.js"></script>
    <script src="https://www.islamibankbd.com/public/frontend/assets/js/wow.js"></script>
    <script src="https://www.islamibankbd.com/public/frontend/assets/js/validation.js"></script>
    <script src="https://www.islamibankbd.com/public/frontend/assets/js/jquery.fancybox.js"></script>
    <script src="https://www.islamibankbd.com/public/frontend/assets/js/appear.js"></script>
    <script src="https://www.islamibankbd.com/public/frontend/assets/js/jquery.countTo.js"></script>
    <script src="https://www.islamibankbd.com/public/frontend/assets/js/scrollbar.js"></script>
    <script src="https://www.islamibankbd.com/public/frontend/assets/js/nav-tool.js"></script>
    <script src="https://www.islamibankbd.com/public/frontend/assets/js/TweenMax.min.js"></script>
    <script src="https://www.islamibankbd.com/public/frontend/assets/js/circle-progress.js"></script>
    <script src="https://www.islamibankbd.com/public/frontend/assets/js/webslidemenu.js"></script>
    
    <script src="https://www.islamibankbd.com/public/frontend/assets/js/news-scripts.js"></script>
    <!-- main-js -->
    <script src="https://www.islamibankbd.com/public/frontend/assets/js/script.js"></script>
    
    
     <script>



        function popupmanage()
    {
        var startTime = localStorage.getItem("startTime");
            if (startTime) {
            var elapsedTime = new Date().getTime() - startTime;
            if (elapsedTime > 43200000) {
                localStorage.removeItem('startTime');
                localStorage.removeItem('popup');


                var set_session = localStorage.getItem('popup');
                if(set_session == null || set_session == 0){
                    localStorage.setItem('popup', '0');
                }
                var set_session = localStorage.getItem('popup');
                if(set_session == 0){
                    $("#myModal1").modal("show");
                    var close_btn = document.getElementById("close");
                    if(close_btn){
                            close_btn.onclick = function(){
                                var date = new Date();
                                date.setTime(date.getTime() + (43200000));
                                localStorage.setItem('popup', '1');
                                localStorage.setItem('startTime', date.getTime());
                            }
                        }


                    }
            }

        } else {
            localStorage.setItem('popup', '0');
            var set_session = localStorage.getItem('popup');
            if(set_session == null || set_session == 0){
                localStorage.setItem('popup', '0');
            }
            var set_session = localStorage.getItem('popup');
            if (set_session == 0) {
                    $("#myModal1").modal("show");
                    var close_btn = document.getElementById("close");

                    if (close_btn) {
                        close_btn.onclick = function() {
                        var date = new Date();
                        date.setTime(date.getTime() + (43200000));
                        localStorage.setItem('popup', '1');
                        localStorage.setItem('startTime', date.getTime());
                        }
                    }


                }

        }


// for slider popup


        if (startTime) {
            var elapsedTime = new Date().getTime() - startTime;
            if (elapsedTime > 43200000) {
                localStorage.removeItem('startTime');
                localStorage.removeItem('popup');


                var set_session = localStorage.getItem('popup');
                if(set_session == null || set_session == 0){
                    localStorage.setItem('popup', '0');
                }
                var set_session = localStorage.getItem('popup');
                if(set_session == 0){
                    $("#myModal0").modal("show");
                    var close_btn = document.getElementById("close0");
                    if(close_btn){
                            close_btn.onclick = function(){
                                var date = new Date();
                                date.setTime(date.getTime() + (43200000));
                                localStorage.setItem('popup', '1');
                                localStorage.setItem('startTime', date.getTime());
                            }
                        }


                    }
            }

        } else {
            localStorage.setItem('popup', '0');
            var set_session = localStorage.getItem('popup');
            if(set_session == null || set_session == 0){
                localStorage.setItem('popup', '0');
            }
            var set_session = localStorage.getItem('popup');
            if (set_session == 0) {
                    $("#myModal0").modal("show");
                    var close_btn = document.getElementById("close0");

                    if (close_btn) {
                        close_btn.onclick = function() {
                        var date = new Date();
                        date.setTime(date.getTime() + (43200000));
                        localStorage.setItem('popup', '1');
                        localStorage.setItem('startTime', date.getTime());
                        }
                    }

                }

        }
    }
    </script>
    <script type="text/javascript">
        jQuery(document).ready(function() {
            $('#myModal').modal('show');
            jQuery(".breaking-news").mouseenter(function() {
                var thisindex = jQuery(this).attr("rel");
                clearTimeout(elementsActive[thisindex]);
            }).mouseleave(function() {
                var thisindex = jQuery(this).attr("rel");
                elementsActive[thisindex] = false;
            });
            start();

        });





    </script>
    <script type="text/javascript">
        $(document).ready(function() {
            jQuery(".pull_feedback").toggle(function() {
                    jQuery("#feedback").animate({
                        left: "0px"
                    });
                    return false;
                }
                , function() {
                    jQuery("#feedback").animate({
                        left: "-362px"
                    });
                    return false;
                }
            ); //toggle
        }); //document.ready

    </script>
    <link rel="stylesheet" href="https://www.islamibankbd.com/public/frontend/assets/cal/jquery-ui.css">
    <script src="https://www.islamibankbd.com/public/frontend/assets/cal/jquery-ui.js"></script>

    <div class="modal fade" id="exchangerate" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body text-center">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="text-theme-colored text-uppercase m-0 color-white"><span id="carddiv2" style="color:#008641; text-align:center">Inward Remittance (TT Clean)</span>
                    </h4>
                </div>
                <div class="modal-body t">
                    <table class="table table-bordered table-hover table-striped" width="100%">
                        <thead>
                            <tr>
                                <th width="39%" valign="top">Currency</th>
                                <th width="39%" valign="top">Rate <br>
                                    <small>(BDT per unit of Foreign Currency)</small></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="container_right_share" align="left"><span class="style21"><strong>USD</strong></span>
                                </td>
                                <td class="container_right_share" align="center"><span class="style20">83.95</span></td>
                            </tr>

                            <tr>
                                <td class="container_right_share" align="left"><span class="style21"><strong>GBP</strong></span>
                                </td>
                                <td class="container_right_share" align="center"><span class="style20">115.1038</span></td>
                            </tr>

                            <tr>
                                <td class="container_right_share" align="left"><span class="style21"><strong>EUR</strong></span>
                                </td>
                                <td class="container_right_share" align="center"><span class="style20">98.4022</span></td>
                            </tr>

                            <tr>
                                <td class="container_right_share" align="left"><span class="style21"><strong>JPY</strong></span>
                                </td>
                                <td class="container_right_share" align="center"><span class="style20">0.7573</span></td>
                            </tr>

                            <tr>
                                <td class="container_right_share" align="left"><span class="style21"><strong>CHF</strong></span>
                                </td>
                                <td class="container_right_share" align="center"><span class="style20">90.8157</span></td>
                            </tr>

                            <tr>
                                <td class="container_right_share" align="left"><span class="style21"><strong>SGD</strong></span>
                                </td>
                                <td class="container_right_share" align="center"><span class="style20">61.5785</span></td>
                            </tr>

                            <tr>
                                <td class="container_right_share" align="left"><span class="style21"><strong>AED</strong></span>
                                </td>
                                <td class="container_right_share" align="center"><span class="style20">22.8212</span></td>
                            </tr>

                            <tr>
                                <td class="container_right_share" align="left"><span class="style21"><strong>SAR</strong></span>
                                </td>
                                <td class="container_right_share" align="center"><span class="style20">22.3563</span></td>
                            </tr>

                            <tr>
                                <td class="container_right_share" align="left"><span class="style21"><strong>CAD</strong></span>
                                </td>
                                <td class="container_right_share" align="center"><span class="style20">66.4056</span></td>
                            </tr>

                            <tr>
                                <td colspan="3" class="container_right_share" align="center">
                                    <strong>Update on:
                                        15 Jul, 2021</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <!--=== EMI CALCULATOR ===-->
    <div class="modal fade" id="emi-calculator" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                    </button>
                    <h1 class="title">Investment Calculator</h1>
                </div>
                <div class="modal-body">
                    <div class="calculator-container">
                        <div id="message" class="text-center"></div>
                        <div class="row calcular-item">
                            <div class="col-md-9 col-sm-8">
                                <span>Rate of Investment(ROI) </span>
                                <div id="interest"></div>
                            </div>
                            <div class="col-md-3 col-sm-4">
                                <div class="output">
                                    <input type="text" name="one" id="percent">
                                </div>
                            </div>
                        </div>
                        <div class="row calcular-item">
                            <div class="col-md-9 col-sm-8">
                                <span>Tenure (in Years)</span>
                                <div id="tenure"></div>
                            </div>
                            <div class="col-md-3 col-sm-4">
                                <div class="output">
                                    <input type="text" name="two" id="year">
                                </div>
                            </div>

                        </div>

                        <div class="row calcular-item">
                            <div class="col-md-9 col-sm-8">
                                <span>Loan Amount</span>
                                <div id="amount"></div>
                            </div>
                            <div class="col-md-3 col-sm-4">
                                <div class="output">
                                    <input type="text" name="three" id="money">
                                </div>
                            </div>
                        </div>
                        <div class="panel-EMI results">

                            <table class="table emitable">

                                <tbody>
                                    <tr>
                                        <td align="left" width="60%"><strong>Profit Payable (Per Month)</strong></td>

                                        <td><strong>:</strong>&nbsp; <span class="payble">8,561</span> <span class="small-text">BDT</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left"><strong>Total Profit Payable </strong></td>

                                        <td><strong>:</strong>&nbsp; <span class="interest-payable">2,729</span> <span class="small-text">BDT</span></td>
                                    </tr>
                                    <tr>
                                        <td align="left"><strong>Total Payment (Principal + Profit)</strong></td>

                                        <td><strong>:</strong> &nbsp;<span class="total-payable">102,729</span> <span class="small-text">BDT</span></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="modal fade" id="deposit-calculator" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                    </button>
                    <h1 class="title">Deposit Calculator</h1>
                </div>
                <div class="modal-body">
                    <div class="calculator-container">
                        <div id="message" class="text-center"></div>
                        <div class="row calcular-item">
                            <div class="col-md-9 col-sm-8">
                                <span>Rate of Deposit(ROD) </span>
                                <div id="dsitinterest"></div>
                            </div>
                            <div class="col-md-3 col-sm-4">
                                <div class="output">
                                    <input type="text" name="one" id="dsitpercent">
                                </div>
                            </div>
                        </div>
                        <div class="row calcular-item">
                            <div class="col-md-9 col-sm-8">
                                <span>Tenure (in Years)</span>
                                <div id="dsittenure"></div>
                            </div>
                            <div class="col-md-3 col-sm-4">
                                <div class="output">
                                    <input type="text" name="two" id="dsityear">
                                </div>
                            </div>

                        </div>

                        <div class="row calcular-item">
                            <div class="col-md-9 col-sm-8">
                                <span>Deposit Amount</span>
                                <div id="dsitamount"></div>
                            </div>
                            <div class="col-md-3 col-sm-4">
                                <div class="output">
                                    <input type="text" name="three" id="dsitmoney">
                                </div>
                            </div>
                        </div>
                        <div class="panel-EMI results">

                            <table class="table emitable">

                                <tbody>
                                    <tr>
                                        <td align="left" width="60%"><strong>Deposit Payable (Per Month)</strong></td>

                                        <td><strong>:</strong>&nbsp; <span class="dsitpayble">8,561</span> <span class="small-text">BDT</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left"><strong>Total Deposit Payable </strong></td>

                                        <td><strong>:</strong>&nbsp; <span class="dsitinterest-payable">2,729</span> <span class="small-text">BDT</span></td>
                                    </tr>
                                    <tr>
                                        <td align="left"><strong>Total Payment (Principal + Profit)</strong></td>

                                        <td><strong>:</strong> &nbsp;<span class="dsittotal-payable">102,729</span> <span class="small-text">BDT</span></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>

    <script>
        /* Investment Calculator*/

        $(function() {
            $("#interest").slider({
                value: 5
                , min: 1
                , max: 20
                , step: 1
                , slide: function(event, ui) {
                    $("#percent").val(ui.value + "%");

                    calculateEMI();

                }
            });


            $("#percent").val($("#interest").slider("value") + "%");
        });


        $(function() {
            $("#tenure").slider({
                value: 1
                , min: 1
                , max: 20
                , step: 1
                , slide: function(event, ui) {
                    $("#year").val(ui.value);

                    calculateEMI();

                }
            });
            $("#year").val($("#tenure").slider("value"));
        });


        $(function() {
            $("#amount").slider({
                value: 100000
                , min: 100000
                , max: 20000000
                , step: 100000
                , slide: function(event, ui) {
                    var value = ui.value;
                    value = value.toLocaleString();

                    $("#money").val(value + " BDT");

                    calculateEMI();
                }
            });


            var defaultValue = $("#amount").slider("value");
            defaultValue = defaultValue.toLocaleString();

            $("#money").val(defaultValue + " BDT");


        });


        function calculateEMI() {
            var p = $("#money").val();
            if (p.indexOf(',') > -1) {
                p = p.replace(/\,/g, '');
            }
            p = parseInt(p.replace(" BDT", ""));


            var year = $("#year").val();
            var n = year * 12;


            var percent = $("#percent").val();
            percent = percent.replace("%", "");
            // percent = percent / 100;


            var i = percent / 12 / 100;


            var value1 = p * i * Math.pow((1 + i), n);
            var value2 = (Math.pow(1 + i, n) - 1);
            payable = value1 / value2;
            roundValue = Math.round(payable);
            valueFinal = roundValue.toLocaleString();


            var totalPayable = payable * n;
            totalPayableRound = Math.round(totalPayable);
            totalPayable = totalPayableRound.toLocaleString();


            var totalInterest = totalPayableRound - p;
            totalInterest = totalInterest.toLocaleString();


            $('.payble').html(valueFinal);
            $('.total-payable').html(totalPayable);
            $('.interest-payable').html(totalInterest);
        }


        $('#percent').change(function() {
            var value = $(this).val();


            value = parseInt(value.replace("%", ""));


            if (value > 20) {
                $('#message').append("<div class='message success'>Maximum interest is 20%</div>");
                setTimeout(function() {
                    $('.message').remove();
                }, 2000);


                $("#percent").val("20%");
                $('#interest').slider('value', "20");
                calculateEMI();

            } else if (value < 5) {
                $('#message').append("<div class='message success'>Minimum interest is 5%</div>");
                setTimeout(function() {
                    $('.message').remove();
                }, 2000);

                $("#percent").val("5%");
                $('#interest').slider('value', "5");

                calculateEMI();
            } else {
                $('#interest').slider('value', value);
                calculateEMI();
            }


        });


        $('#money').change(function() {
            var value = $(this).val();

            if (value.indexOf(',') > -1) {
                value = value.replace(/\,/g, '');
            }

            value = parseInt(value.replace(" BDT", ""));


            if (value > 20000000) {
                $('#message').append("<div class='message success'>Maximum amount is 1 crore</div>");
                setTimeout(function() {
                    $('.message').remove();
                }, 2000);

                $('#money').val("2,00,00,000 BDT");
                $('#amount').slider('value', 20000000);


                calculateEMI();

            } else if (value < 100000) {
                $('#message').append("<div class='message success'>Minimum amount is 1 Lakh</div>");
                setTimeout(function() {
                    $('.message').remove();
                }, 2000);

                $('#money').val("1,00,000 BDT");
                $('#amount').slider('value', 100000);

                calculateEMI();

            } else {
                $('#amount').slider('value', value);

                $(this).val(value.toLocaleString() + " BDT");

                calculateEMI();
            }


        });

        $('#year').change(function() {
            var value = $(this).val();


            if (value > 20) {
                $('#message').append("<div class='message success'>Maximum tenure is 20 years</div>");
                setTimeout(function() {
                    $('.message').remove();
                }, 2000);

                $('#year').val(20);
                $('#tenure').slider('value', 20);

                calculateEMI();

            } else if (value < 1) {
                $('#message').append("<div class='message success'>Minimum tenure is 1 year</div>");
                setTimeout(function() {
                    $('.message').remove();
                }, 2000);

                $('#year').val(1);
                $('#tenure').slider('value', 1);

                calculateEMI();

            } else {
                $('#tenure').slider('value', value);

                calculateEMI();
            }

        });


        /* Depsoit Calculator*/

        $(function() {

            $("#dsitinterest").slider({
                value: 5
                , min: 1
                , max: 20
                , step: 1
                , slide: function(event, ui) {
                    $("#dsitpercent").val(ui.value + "%");

                    dsitcalculateEMI();
                }
            });
            $("#dsitpercent").val($("#dsitinterest").slider("value") + "%");
        });


        $(function() {
            $("#dsittenure").slider({
                value: 1
                , min: 1
                , max: 20
                , step: 1
                , slide: function(event, ui) {
                    $("#dsityear").val(ui.value);

                    dsitcalculateEMI();

                }
            });
            $("#dsityear").val($("#dsittenure").slider("value"));
        });


        $(function() {
            $("#dsitamount").slider({
                value: 100000
                , min: 100000
                , max: 20000000
                , step: 100000
                , slide: function(event, ui) {
                    var value = ui.value;
                    value = value.toLocaleString();

                    $("#dsitmoney").val(value + " BDT");

                    dsitcalculateEMI();
                }
            });


            var defaultValue = $("#dsitamount").slider("value");
            defaultValue = defaultValue.toLocaleString();

            $("#dsitmoney").val(defaultValue + " BDT");


        });


        function dsitcalculateEMI() {
            var p = $("#dsitmoney").val();
            if (p.indexOf(',') > -1) {
                p = p.replace(/\,/g, '');
            }
            p = parseInt(p.replace(" BDT", ""));


            var year = $("#dsityear").val();
            var n = year * 12;


            var percent = $("#dsitpercent").val();
            percent = percent.replace("%", "");
            // percent = percent / 100;


            var i = percent / 12 / 100;


            var value1 = p * i * Math.pow((1 + i), n);
            var value2 = (Math.pow(1 + i, n) - 1);
            payable = value1 / value2;
            roundValue = Math.round(payable);
            valueFinal = roundValue.toLocaleString();


            var totalPayable = payable * n;
            totalPayableRound = Math.round(totalPayable);
            totalPayable = totalPayableRound.toLocaleString();


            var totalInterest = totalPayableRound - p;
            totalInterest = totalInterest.toLocaleString();

            //alert(valueFinal);
            // alert(totalPayable);
            // alert(totalInterest);

            $('.dsitpayble').html(valueFinal);
            $('.dsittotal-payable').html(totalPayable);
            $('.dsitinterest-payable').html(totalInterest);
        }

        $('#dsitpercent').change(function() {
            var value = $(this).val();


            value = parseInt(value.replace("%", ""));


            if (value > 20) {
                $('#dsitmessage').append("<div class='dsitmessage success'>Maximum interest is 20%</div>");
                setTimeout(function() {
                    $('.dsitmessage').remove();
                }, 2000);


                $("#dsitpercent").val("20%");
                $('#dsitinterest').slider('value', "20");
                dsitcalculateEMI();

            } else if (value < 5) {
                $('#dsitmessage').append("<div class='dsitmessage success'>Minimum interest is 5%</div>");
                setTimeout(function() {
                    $('.dsitmessage').remove();
                }, 2000);

                $("#dsitpercent").val("5%");
                $('#dsitinterest').slider('value', "5");

                dsitcalculateEMI();
            } else {
                $('#dsitinterest').slider('value', value);
                dsitcalculateEMI();
            }


        });


        $('#dsitmoney').change(function() {
            var value = $(this).val();
            if (value.indexOf(',') > -1) {
                value = value.replace(/\,/g, '');
            }

            value = parseInt(value.replace(" BDT", ""));


            if (value > 20000000) {
                $('#dsitmessage').append("<div class='dsitmessage success'>Maximum amount is 1 crore</div>");
                setTimeout(function() {
                    $('.dsitmessage').remove();
                }, 2000);

                $('#dsitmoney').val("2,00,00,000 BDT");
                $('#dsitamount').slider('value', 20000000);


                dsitcalculateEMI();

            } else if (value < 100000) {
                $('#dsitmessage').append("<div class='message success'>Minimum amount is 1 Lakh</div>");
                setTimeout(function() {
                    $('.dsitmessage').remove();
                }, 2000);

                $('#dsitmoney').val("1,00,000 BDT");
                $('#dsitamount').slider('value', 100000);

                dsitcalculateEMI();

            } else {
                $('#dsitamount').slider('value', value);

                $(this).val(value.toLocaleString() + " BDT");

                dsitcalculateEMI();
            }


        });

        $('#dsityear').change(function() {
            var value = $(this).val();
            alert(value);

            if (value > 20) {
                $('#dsitmessage').append("<div class='dsitmessage success'>Maximum tenure is 20 years</div>");
                setTimeout(function() {
                    $('.dsitmessage').remove();
                }, 2000);

                $('#dsityear').val(20);
                $('#dsittenure').slider('value', 20);

                dsitcalculateEMI();

            } else if (value < 1) {
                $('#dsitmessage').append("<div class='dsitmessage success'>Minimum tenure is 1 year</div>");
                setTimeout(function() {
                    $('.dsitmessage').remove();
                }, 2000);

                $('#dsityear').val(1);
                $('#dsittenure').slider('value', 1);

                calculateEMI();

            } else {
                $('#dsittenure').slider('value', value);

                dsitcalculateEMI();
            }

        });

    </script>

    <script>
        $(document).ready(function() {
            //$('.sme-financial-tab-list li:first-child a').addClass('active');
            //$('.tab-content:not(:first)').hide();
            $('.accordion-button').click(function(e) {
                e.preventDefault();
                var content = $(this).data('href');
                $('.accordion-button').removeClass('active');
                $(this).addClass('active');
                $('.accordion-inner-lb').hide();
                $('' + content + '').fadeIn(500);
                $('.news-icon').removeClass('news-icon-active');
                $(this).find('.news-icon').addClass('news-icon-active');
            });
            $('.tab-feature-list-info li a').click(function(e) {
                e.preventDefault();
                var content = $(this).data('parent');
                var selector = $(this).data('selector');
                $('' + content + ' .product-inner-tab-details').hide();
                $(this).closest('li').parent().find('a').removeClass('active');
                console.log($(this).closest('li').parent());
                var index = $(this).index();
                $(this).addClass('active');
                $('' + content + ' .' + selector + '').show();
            });
        });
        $(window).load(function() {
            var hash = window.location.hash;
            if (hash != '') {
                $(".accordion-button").each(function() {
                    if (search_word(hash, $(this).data('href')) > 0) {
                        //if($(this).attr('href') === hash) {
                        $(this).trigger("click");
                        if ($(this).data('href').length) {
                            $('html, body').animate({
                                scrollTop: $(this).offset().top
                            }, 700);
                        }
                    }
                });
                /*$( ".accordion-button" ).each(function() {
                if($(this).data('href') === hash) {
                $(this).trigger( "click" );
                if ( $(hash).length ) {
                $('html, body').animate({
                scrollTop: $(this).offset().top
                }, 700);
                }
                }
                });*/
            }
        });
        document.onkeydown = function(evt) {
			evt = evt || window.event;
			if (evt.keyCode == 27) {
                $(".main-header .navigation li.dropdown").siblings().removeClass('open');

			}
		};
    </script>

    <script>
     $(document).ready(function() {

            var url = window.location.href;
            if(url == "https://islamibankbd.com" || "https://islamibankbd.com/" || "https://www.islamibankbd.com" || "https://www.islamibankbd.com/" || "http://localhost/ev_ibbl/" || "http://localhost/ev_ibbl" ){
                // console.log(url);
                popupmanage();
            }


        });

</script>
 </body><!-- End of .page_wrapper -->

</html>
