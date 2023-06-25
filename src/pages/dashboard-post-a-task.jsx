import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import Footer from './footer';
import UserMenu from './usermenu';

export default function PostTask() {
    return (
            <div>
                
{/* Wrapper */}
<div id="wrapper">

{/* Header Container
================================================== */}
<UserMenu/>
{/* Header Container / End */}


{/* Dashboard Container */}
<div className="dashboard-container">

	{/* Dashboard Sidebar
	================================================== */}
	<div className="dashboard-sidebar">
		<div className="dashboard-sidebar-inner" data-simplebar>
			<div className="dashboard-nav-container">

				{/* Responsive Navigation Trigger */}
				<a href="#" className="dashboard-responsive-nav-trigger">
					<span className="hamburger hamburger--collapse" >
						<span className="hamburger-box">
							<span className="hamburger-inner"></span>
						</span>
					</span>
					<span className="trigger-title">Dashboard Navigation</span>
				</a>
				
				{/* Navigation */}
				<div className="dashboard-nav">
					<div className="dashboard-nav-inner">

						<ul data-submenu-title="Start">
							<li><a href="dashboard.html"><i className="icon-material-outline-dashboard"></i> Dashboard</a></li>
							<li><a href="dashboard-messages.html"><i className="icon-material-outline-question-answer"></i> Messages <span className="nav-tag">2</span></a></li>
							<li><a href="dashboard-bookmarks.html"><i className="icon-material-outline-star-border"></i> Bookmarks</a></li>
							<li><a href="dashboard-reviews.html"><i className="icon-material-outline-rate-review"></i> Reviews</a></li>
						</ul>
						
						<ul data-submenu-title="Organize and Manage">
							<li><a href="#"><i className="icon-material-outline-business-center"></i> Jobs</a>
								<ul>
									<li><a href="dashboard-manage-jobs.html">Manage Jobs <span className="nav-tag">3</span></a></li>
									<li><a href="dashboard-manage-candidates.html">Manage Candidates</a></li>
									<li><a href="dashboard-post-a-job.html">Post a Job</a></li>
								</ul>	
							</li>
							<li className="active-submenu"><a href="#"><i className="icon-material-outline-assignment"></i> Tasks</a>
								<ul>
									<li><a href="dashboard-manage-tasks.html">Manage Tasks <span className="nav-tag">2</span></a></li>
									<li><a href="dashboard-manage-bidders.html">Manage Bidders</a></li>
									<li><a href="dashboard-my-active-bids.html">My Active Bids <span className="nav-tag">4</span></a></li>
									<li><a href="dashboard-post-a-task.html">Post a Task</a></li>
								</ul>	
							</li>
						</ul>

						<ul data-submenu-title="Account">
							<li><a href="dashboard-settings.html"><i className="icon-material-outline-settings"></i> Settings</a></li>
							<li><a href="index-logged-out.html"><i className="icon-material-outline-power-settings-new"></i> Logout</a></li>
						</ul>
						
					</div>
				</div>
				{/* Navigation / End */}

			</div>
		</div>
	</div>
	{/* Dashboard Sidebar / End */}


	{/* Dashboard Content
	================================================== */}
	<div className="dashboard-content-container" data-simplebar>
		<div className="dashboard-content-inner" >
			
			{/* Dashboard Headline */}
			<div className="dashboard-headline">
				<h3>Post a Task</h3>

				{/* Breadcrumbs */}
				<nav id="breadcrumbs" className="dark">
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">Dashboard</a></li>
						<li>Post a Task</li>
					</ul>
				</nav>
			</div>
	
			{/* Row */}
			<div className="row">

				{/* Dashboard Box */}
				<div className="col-xl-12">
					<div className="dashboard-box margin-top-0">

						{/* Headline */}
						<div className="headline">
							<h3><i className="icon-feather-folder-plus"></i> Task Submission Form</h3>
						</div>

						<div className="content with-padding padding-bottom-10">
							<div className="row">

								<div className="col-xl-4">
									<div className="submit-field">
										<h5>Project Name</h5>
										<input type="text" className="with-border" placeholder="e.g. build me a website"/>
									</div>
								</div>

								<div className="col-xl-4">
									<div className="submit-field">
										<h5>Category</h5>
										<select className="selectpicker with-border" data-size="7" title="Select Category">
											<option>Admin Support</option>
											<option>Customer Service</option>
											<option>Data Analytics</option>
											<option>Design & Creative</option>
											<option>Legal</option>
											<option>Software Developing</option>
											<option>IT & Networking</option>
											<option>Writing</option>
											<option>Translation</option>
											<option>Sales & Marketing</option>
										</select>
									</div>
								</div>

								<div className="col-xl-4">
									<div className="submit-field">
										<h5>Location  <i className="help-icon" data-tippy-placement="right" title="Leave blank if it's an online job"></i></h5>
										<div className="input-with-icon">
											<div id="autocomplete-container">
												<input id="autocomplete-input" className="with-border" type="text" placeholder="Anywhere"/>
											</div>
											<i className="icon-material-outline-location-on"></i>
										</div>
									</div>
								</div>

								<div className="col-xl-6">
									<div className="submit-field">
										<h5>What is your estimated budget?</h5>
										<div className="row">
											<div className="col-xl-6">
												<div className="input-with-icon">
													<input className="with-border" type="text" placeholder="Minimum"/>
													<i className="currency">USD</i>
												</div>
											</div>
											<div className="col-xl-6">
												<div className="input-with-icon">
													<input className="with-border" type="text" placeholder="Maximum"/>
													<i className="currency">USD</i>
												</div>
											</div>
										</div>
										<div className="feedback-yes-no margin-top-0">
											<div className="radio">
												<input id="radio-1" name="radio" type="radio" checked/>
												<label htmlFor="radio-1"><span className="radio-label"></span> Fixed Price Project</label>
											</div>

											<div className="radio">
												<input id="radio-2" name="radio" type="radio"/>
												<label htmlFor="radio-2"><span className="radio-label"></span> Hourly Project</label>
											</div>
										</div>
									</div>
								</div>

								<div className="col-xl-6">
									<div className="submit-field">
										<h5>What skills are required? <i className="help-icon" data-tippy-placement="right" title="Up to 5 skills that best describe your project"></i></h5>
										<div className="keywords-container">
											<div className="keyword-input-container">
												<input type="text" className="keyword-input with-border" placeholder="Add Skills"/>
												<button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add"></i></button>
											</div>
											<div className="keywords-list">{/* keywords go here */}</div>
											<div className="clearfix"></div>
										</div>

									</div>
								</div>

								<div className="col-xl-12">
									<div className="submit-field">
										<h5>Describe Your Project</h5>
										<textarea cols="30" rows="5" className="with-border"></textarea>
										<div className="uploadButton margin-top-30">
											<input className="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload" multiple/>
											<label className="uploadButton-button ripple-effect" htmlFor="upload">Upload Files</label>
											<span className="uploadButton-file-name">Images or documents that might be helpful in describing your project</span>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>

				<div className="col-xl-12">
					<a href="#" className="button ripple-effect big margin-top-30"><i className="icon-feather-plus"></i> Post a Task</a>
				</div>

			</div>
			{/* Row / End */}

			{/* Footer */}
			<Footer/>
			{/* Footer / End */}

		</div>
	</div>
	{/* Dashboard Content / End */}

</div>
{/* Dashboard Container / End */}

</div>
{/* Wrapper / End */}


{/* Scripts
================================================== */}
<script src="js/jquery-3.6.0.min.js"></script>
<script src="js/jquery-migrate-3.3.2.min.js"></script>
<script src="js/mmenu.min.js"></script>
<script src="js/tippy.all.min.js"></script>
<script src="js/simplebar.min.js"></script>
<script src="js/bootstrap-slider.min.js"></script>
<script src="js/bootstrap-select.min.js"></script>
<script src="js/snackbar.js"></script>
<script src="js/clipboard.min.js"></script>
<script src="js/counterup.min.js"></script>
<script src="js/magnific-popup.min.js"></script>
<script src="js/slick.min.js"></script>
<script src="js/custom.js"></script>

{/* Snackbar // documentation: https://www.polonel.com/snackbar/ */}
{/*
<script>
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
</script>
*/}

{/* Chart.js // documentation: http://www.chartjs.org/docs/latest/ */}
{/*
<script src="js/chart.min.js"></script>
<script>
	Chart.defaults.global.defaultFontFamily = "Nunito";
	Chart.defaults.global.defaultFontColor = '#888';
	Chart.defaults.global.defaultFontSize = '14';

	var ctx = document.getElementById('chart').getContext('2d');

	var chart = new Chart(ctx, {
		type: 'line',

		// The data for our dataset
		data: {
			labels: ["January", "February", "March", "April", "May", "June"],
			// Information about the dataset
	   		datasets: [{
				label: "Views",
				backgroundColor: 'rgba(42,65,232,0.08)',
				borderColor: '#2a41e8',
				borderWidth: "3",
				data: [196,132,215,362,210,252],
				pointRadius: 5,
				pointHoverRadius:5,
				pointHitRadius: 10,
				pointBackgroundColor: "#fff",
				pointHoverBackgroundColor: "#fff",
				pointBorderWidth: "2",
			}]
		},

		// Configuration options
		options: {

		    layout: {
		      padding: 10,
		  	},

			legend: { display: false },
			title:  { display: false },

			scales: {
				yAxes: [{
					scaleLabel: {
						display: false
					},
					gridLines: {
						 borderDash: [6, 10],
						 color: "#d8d8d8",
						 lineWidth: 1,
	            	},
				}],
				xAxes: [{
					scaleLabel: { display: false },  
					gridLines:  { display: false },
				}],
			},

		    tooltips: {
		      backgroundColor: '#333',
		      titleFontSize: 13,
		      titleFontColor: '#fff',
		      bodyFontColor: '#fff',
		      bodyFontSize: 13,
		      displayColors: false,
		      xPadding: 10,
		      yPadding: 10,
		      intersect: false
		    }
		},


});

</script>*/}


{/* Google Autocomplete */}
{/*
<script>
	function initAutocomplete() {
		 var options = {
		  types: ['(cities)'],
		  // componentRestrictions: {country: "us"}
		 };

		 var input = document.getElementById('autocomplete-input');
		 var autocomplete = new google.maps.places.Autocomplete(input, options);

		if ($('.submit-field')[0]) {
		    setTimeout(function(){ 
		        $(".pac-container").prependTo("#autocomplete-container");
		    }, 300);
		}
	}
</script> */}

{/* Google API & Maps */}
{/* Geting an API Key: https://developers.google.com/maps/documentation/javascript/get-api-key */}
<script src="https://maps.googleapis.com/maps/api/js?key=&libraries=places"></script>

            </div>
    )
}