import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Range from 'react-range';
import Footer from './footer';
import UserMenu from '../components/menu/user-menu';

export default function FreelancersListLayout2() {
    return (
            <div>
                {/* Wrapper */}
<div id="wrapper">

{/* Header Container================================================== */}
<UserMenu/>
{/* Header Container / End */}

{/* Spacer */}
<div className="margin-top-90"></div>
{/* Spacer / End*/}

{/* Page Content
================================================== */}
<div className="container">
	<div className="row">
		<div className="col-xl-3 col-lg-4">
			<div className="sidebar-container">
				
				{/* Location */}
				<div className="sidebar-widget">
					<h3>Location</h3>
					<div className="input-with-icon">
						<div id="autocomplete-container">
							<input id="autocomplete-input" type="text" placeholder="Location"/>
						</div>
						<i className="icon-material-outline-location-on"></i>
					</div>
				</div>

				{/* Skills */}
				<div className="sidebar-widget">
					<h3>Skills</h3>
					<select name="selectpicker default" defaultValue="java">
						<option value="java">Java</option>
						<option value="oracle">Oracle</option>
					</select>
				</div>

				{/* Categories */}
				<div className="sidebar-widget">
					<h3>Categories</h3>
					<select name="selectpicker default" defaultValue="web">
						<option value="web">Web/Software Dev</option>
						<option value="data">Data Science/Analitycs</option>
						<option value="accounting">Accounting/Consulting</option>
						<option value="writing">Writing & Translations</option>
						<option value="sales">Sales & Marketing</option>
						<option value="graphics">Graphics & Design</option>
						<option value="digital">Digital Marketing</option>
						<option value="education">Education & Training</option>
					</select>
				</div>

				{/* Hourly Rate */}
				<div className="sidebar-widget">
					<h3>Hourly Rate</h3>
					<div className="margin-top-55"></div>

					{/* Range Slider */}
					<input className="range-slider" type="text" data-slider-currency="$" data-slider-min="10" data-slider-max="250" data-slider-step="5" data-slider-value="[10,250]"/>
				</div>


			</div>
		</div>

		<div className="col-xl-9 col-lg-8 content-left-offset">

			<h3 className="page-title">Search Results</h3>

			<div className="notify-box margin-top-15">
				<div className="switch-container">
				
				<div className="sort-by">
					<span>Sort by:</span>
					<select name="selectpicker hide-tick">
						<option value="Relevance">Relevance</option>
						<option value="Newest">Newest</option>
						<option value="Oldest">Oldest</option>
						<option value="Random">Random</option>
					</select>
				</div>
				</div>
			</div>
			
			{/* Freelancers List Container */}
			<div className="freelancers-container freelancers-list-layout margin-top-35">
				
				{/*Freelancer */}
				<div className="freelancer">

					{/* Overview */}
					<div className="freelancer-overview">
						<div className="freelancer-overview-inner">
							
							{/* Bookmark Icon */}
							<span className="bookmark-icon"></span>
							
							{/* Avatar */}
							<div className="freelancer-avatar">
								<div className="verified-badge"></div>
								<a href="single-freelancer-profile.html"><img src="assets/images/user-avatar-big-01.jpg" alt=""/></a>
							</div>

							{/* Name */}
							<div className="freelancer-name">
								<h4><a href="#">Tom Smith <img className="flag" src="assets/images/flags/gb.svg" alt="" title="United Kingdom" data-tippy-placement="top"/></a></h4>
								<span>UI/UX Designer</span>
								{/* Rating */}
								<div className="freelancer-rating">
									<div className="star-rating" data-rating="4.9"></div>
								</div>
							</div>
						</div>
					</div>
					
					{/* Details */}
					<div className="freelancer-details">
						<div className="freelancer-details-list">
							<ul>
								<li>Location <strong><i className="icon-material-outline-location-on"></i> London</strong></li>
								<li>Rate <strong>$60 / hr</strong></li>
								<li>Job Success <strong>95%</strong></li>
							</ul>
						</div>
						<a href="single-freelancer-profile.html" className="button button-sliding-icon ripple-effect">View Profile <i className="icon-material-outline-arrow-right-alt"></i></a>
					</div>
				</div>
				{/* Freelancer / End */}

				{/*Freelancer */}
				<div className="freelancer">

					{/* Overview */}
					<div className="freelancer-overview">
						<div className="freelancer-overview-inner">
							
							{/* Bookmark Icon */}
							<span className="bookmark-icon"></span>
							
							{/* Avatar */}
							<div className="freelancer-avatar">
								<div className="verified-badge"></div>
								<a href="single-freelancer-profile.html"><img src="assets/images/user-avatar-big-02.jpg" alt=""/></a>
							</div>

							{/* Name */}
							<div className="freelancer-name">
								<h4><a href="#">David Peterson <img className="flag" src="assets/images/flags/de.svg" alt="" title="Germany" data-tippy-placement="top"/></a></h4>
								<span>iOS Expert + Node Dev</span>
								{/* Rating */}
								<div className="freelancer-rating">
									<div className="star-rating" data-rating="4.2"></div>
								</div>
							</div>
						</div>
					</div>
					
					{/* Details */}
					<div className="freelancer-details">
						<div className="freelancer-details-list">
							<ul>
								<li>Location <strong><i className="icon-material-outline-location-on"></i> Berlin</strong></li>
								<li>Rate <strong>$40 / hr</strong></li>
								<li>Job Success <strong>88%</strong></li>
							</ul>
						</div>
						<a href="single-freelancer-profile.html" className="button button-sliding-icon ripple-effect">View Profile <i className="icon-material-outline-arrow-right-alt"></i></a>
					</div>
				</div>
				{/* Freelancer / End */}

				{/*Freelancer */}
				<div className="freelancer">

					{/* Overview */}
					<div className="freelancer-overview">
						<div className="freelancer-overview-inner">
							{/* Bookmark Icon */}
							<span className="bookmark-icon"></span>
							
							{/* Avatar */}
							<div className="freelancer-avatar">
								<a href="single-freelancer-profile.html"><img src="assets/images/user-avatar-placeholder.png" alt=""/></a>
							</div>

							{/* Name */}
							<div className="freelancer-name">
								<h4><a href="#">Marcin Kowalski <img className="flag" src="assets/images/flags/pl.svg" alt="" title="Poland" data-tippy-placement="top"/></a></h4>
								<span>Front-End Developer</span>
								{/* Rating */}
								<span className="company-not-rated margin-bottom-5">Minimum of 3 votes required</span>
							</div>
						</div>
					</div>
					
					{/* Details */}
					<div className="freelancer-details">
						<div className="freelancer-details-list">
							<ul>
								<li>Location <strong><i className="icon-material-outline-location-on"></i> Warsaw</strong></li>
								<li>Rate <strong>$50 / hr</strong></li>
								<li>Job Success <strong>100%</strong></li>
							</ul>
						</div>
						<a href="single-freelancer-profile.html" className="button button-sliding-icon ripple-effect">View Profile <i className="icon-material-outline-arrow-right-alt"></i></a>
					</div>
				</div>
				{/* Freelancer / End */}

				{/*Freelancer */}
				<div className="freelancer">

					{/* Overview */}
					<div className="freelancer-overview">
							<div className="freelancer-overview-inner">
							{/* Bookmark Icon */}
							<span className="bookmark-icon"></span>
							
							{/* Avatar */}
							<div className="freelancer-avatar">
								<div className="verified-badge"></div>
								<a href="single-freelancer-profile.html"><img src="assets/images/user-avatar-big-03.jpg" alt=""/></a>
							</div>

							{/* Name */}
							<div className="freelancer-name">
								<h4><a href="#">Sindy Forest <img className="flag" src="assets/images/flags/au.svg" alt="" title="Australia" data-tippy-placement="top"/></a></h4>
								<span>Magento Certified Developer</span>
								{/* Rating */}
								<div className="freelancer-rating">
									<div className="star-rating" data-rating="5.0"></div>
								</div>
							</div>
						</div>
					</div>
					
					{/* Details */}
					<div className="freelancer-details">
						<div className="freelancer-details-list">
							<ul>
								<li>Location <strong><i className="icon-material-outline-location-on"></i> Brisbane</strong></li>
								<li>Rate <strong>$70 / hr</strong></li>
								<li>Job Success <strong>100%</strong></li>
							</ul>
						</div>
						<a href="single-freelancer-profile.html" className="button button-sliding-icon ripple-effect">View Profile <i className="icon-material-outline-arrow-right-alt"></i></a>
					</div>
				</div>
				{/* Freelancer / End */}
	
			</div>
			{/* Tasks Container / End */}


			{/* Pagination */}
			<div className="clearfix"></div>
			<div className="row">
				<div className="col-md-12">
					{/* Pagination */}
					<div className="pagination-container margin-top-40 margin-bottom-60">
						<nav className="pagination">
							<ul>
								<li className="pagination-arrow"><a href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left"></i></a></li>
								<li><a href="#" className="ripple-effect">1</a></li>
								<li><a href="#" className="current-page ripple-effect">2</a></li>
								<li><a href="#" className="ripple-effect">3</a></li>
								<li><a href="#" className="ripple-effect">4</a></li>
								<li className="pagination-arrow"><a href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right"></i></a></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			{/* Pagination / End */}

		</div>
	</div>
</div>

<Footer/>

</div>
{/* Wrapper / End */}

{/* Scripts
================================================== */}
<script src="assets/js/jquery-3.6.0.min.js"></script>
<script src="assets/js/jquery-migrate-3.3.2.min.js"></script>
<script src="assets/js/mmenu.min.js"></script>
<script src="assets/js/tippy.all.min.js"></script>
<script src="assets/js/simplebar.min.js"></script>
<script src="assets/js/bootstrap-slider.min.js"></script>
<script src="assets/js/bootstrap-select.min.js"></script>
<script src="assets/js/snackbar.js"></script>
<script src="assets/js/clipboard.min.js"></script>
<script src="assets/js/counterup.min.js"></script>
<script src="assets/js/magnific-popup.min.js"></script>
<script src="assets/js/slick.min.js"></script>
<script src="assets/js/custom.js"></script>

{/* Snackbar // documentation: https://www.polonel.com/snackbar/ */}
{/* <script>
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
</script> */}

{/* Google Autocomplete */}
{/* <script>
	function initAutocomplete() {
		 var options = {
		  types: ['(cities)'],
		  // componentRestrictions: {country: "us"}
		 };

		 var input = document.getElementById('autocomplete-input');
		 var autocomplete = new google.maps.places.Autocomplete(input, options);
	}
</script> */}

{/* Google API & Maps */}
{/* Geting an API Key: https://developers.google.com/maps/documentation/javascript/get-api-key */}
<script src="https://maps.googleapis.com/maps/api/js?key=&libraries=places"></script>

            </div>
        )
    }
