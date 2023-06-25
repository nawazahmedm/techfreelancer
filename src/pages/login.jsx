import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import Footer from './footer';
import UserMenu from './usermenu';

{/* CSS
================================================== */}
//<link rel="stylesheet" href="asset/css/style.css">
//<link rel="stylesheet" href="asset/css/colors/blue.css"></link>

export default function Login() {
    return (
        <div>
            {/* Wrapper */}
<div id="wrapper">

{/* Header Container================================================== */}
<UserMenu/>
{/* Header Container / End */}

{/* Titlebar
================================================== */}
<div id="titlebar" className="gradient">
	<div className="container">
		<div className="row">
			<div className="col-md-12">

				<h2>Log In</h2>

				{/* Breadcrumbs */}
				<nav id="breadcrumbs" className="dark">
					<ul>
						<li><a href="#">Home</a></li>
						<li>Log In</li>
					</ul>
				</nav>

			</div>
		</div>
	</div>
</div>


{/* Page Content
================================================== */}
<div className="container">
	<div className="row">
		<div className="col-xl-5 offset-xl-3">


			<div className="login-register-page">
				{/* Welcome Text */}
				<div className="welcome-text">
					<h3>We're glad to see you again!</h3>
					<span>Don't have an account? <Link to="/register">Sign Up!</Link></span>
				</div>
					
				{/* Form */}
				<form method="post" id="login-form">
					<div className="input-with-icon-left">
						<i className="icon-material-baseline-mail-outline"></i>
						<input type="text" className="input-text with-border" name="emailaddress" id="emailaddress" placeholder="Email Address" required/>
					</div>

					<div className="input-with-icon-left">
						<i className="icon-material-outline-lock"></i>
						<input type="password" className="input-text with-border" name="password" id="password" placeholder="Password" required/>
					</div>
					<a href="#" className="forgot-password">Forgot Password?</a>
				</form>
				
				{/* Button */}
				<button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" form="login-form">Log In <i className="icon-material-outline-arrow-right-alt"></i></button>
				
				{/* Social Login */}
				<div className="social-login-separator"><span>or</span></div>
				<div className="social-login-buttons">
					<button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f"></i> Log In via Facebook</button>
					<button className="google-login ripple-effect"><i className="icon-brand-google-plus-g"></i> Log In via Google+</button>
				</div>
			</div>

		</div>
	</div>
</div>


{/* Spacer */}
<div className="margin-top-70"></div>
{/* Spacer / End*/}

<Footer/>

</div>
{/* Wrapper / End */}
        </div>
    )
}

{/* Scripts================================================== */}
<script>
<script src="assets/js//jquery-3.6.0.min.js"></script>
<script src="assets/js//jquery-migrate-3.3.2.min.js"></script>
<script src="assets/js//mmenu.min.js"></script>
<script src="assets/js//tippy.all.min.js"></script>
<script src="assets/js//simplebar.min.js"></script>
<script src="assets/js//bootstrap-slider.min.js"></script>
<script src="assets/js//bootstrap-select.min.js"></script>
<script src="assets/js//snackbar.js"></script>
<script src="assets/js//clipboard.min.js"></script>
<script src="assets/js//counterup.min.js"></script>
<script src="assets/js//magnific-popup.min.js"></script>
<script src="assets/js//slick.min.js"></script>
<script src="assets/js//custom.js"></script>
</script>

{/* Snackbar // documentation: https://www.polonel.com/snackbar/ */}
{/*<script>
// Snackbar for user status switcher
$('#snackbar-user-status label').click(function() { 
	Snackbar.show({
		text: 'Your status has been changed!',
		pos: 'bottom-center',
		showAction: false,
		actionText: "Dismiss",
		duration: 3000,
		textColor: '#fff',
		backgroundColor: '#383838'
	}); 
}); 
</script>*/}

            