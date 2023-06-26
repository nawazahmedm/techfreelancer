import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import Footer from './footer';
import UserMenu from '../components/menu/user-menu';

export default function Messages() {
    return (
            <div>
                {/* Wrapper */}
<div id="wrapper">

{/* Header Container================================================== */}
<UserMenu/>
{/* Header Container / End */}

<div className="clearfix"></div>
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
							<li className="active"><a href="dashboard-messages.html"><i className="icon-material-outline-question-answer"></i> Messages <span className="nav-tag">2</span></a></li>
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
							<li><a href="#"><i className="icon-material-outline-assignment"></i> Tasks</a>
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
				<h3>Messages</h3>

				{/* Breadcrumbs */}
				<nav id="breadcrumbs" className="dark">
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">Dashboard</a></li>
						<li>Messages</li>
					</ul>
				</nav>
			</div>
	
				<div className="messages-container margin-top-0">

					<div className="messages-container-inner">

						{/* Messages */}
						<div className="messages-inbox">
							<div className="messages-headline">
								<div className="input-with-icon">
										<input id="autocomplete-input" type="text" placeholder="Search"/>
									<i className="icon-material-outline-search"></i>
								</div>
							</div>

							<ul>
								<li>
									<a href="#">
										<div className="message-avatar"><i className="status-icon status-online"></i><img src="assets/images/user-avatar-small-03.jpg" alt="" /></div>

										<div className="message-by">
											<div className="message-by-headline">
												<h5>David Peterson</h5>
												<span>4 hours ago</span>
											</div>
											<p>Thanks for reaching out. I'm quite busy right now on many</p>
										</div>
									</a>
								</li>

								<li className="active-message">
									<a href="#">
										<div className="message-avatar"><i className="status-icon status-offline"></i><img src="assets/images/user-avatar-small-02.jpg" alt="" /></div>

										<div className="message-by">
											<div className="message-by-headline">
												<h5>Sindy Forest</h5>
												<span>Yesterday</span>
											</div>
											<p>Hi Tom! Hate to break it to you but I'm actually on vacation</p>
										</div>
									</a>
								</li>
								
								<li>
									<a href="#">
										<div className="message-avatar"><i className="status-icon status-offline"></i><img src="assets/images/user-avatar-placeholder.png" alt="" /></div>

										<div className="message-by">
											<div className="message-by-headline">
												<h5>Sebastiano Piccio</h5>
												<span>2 days ago</span>
											</div>
											<p>Hello, I want to talk about my project if you don't mind!</p>
										</div>
									</a>
								</li>

								<li>
									<a href="#">
										<div className="message-avatar"><i className="status-icon status-online"></i><img src="assets/images/user-avatar-placeholder.png" alt="" /></div>

										<div className="message-by">
											<div className="message-by-headline">
												<h5>Marcin Kowalski</h5>
												<span>2 days ago</span>
											</div>
											<p>Yes, I received payment. Thanks for cooperation!</p>
										</div>
									</a>
								</li>

							</ul>
						</div>
						{/* Messages / End */}

						{/* Message Content */}
						<div className="message-content">

							<div className="messages-headline">
								<h4>Sindy Forest</h4>
								<a href="#" className="message-action"><i className="icon-feather-trash-2"></i> Delete Conversation</a>
							</div>
							
							{/* Message Content Inner */}
							<div className="message-content-inner">
									
									{/* Time Sign */}
									<div className="message-time-sign">
										<span>28 June, 2019</span>
									</div>

									<div className="message-bubble me">
										<div className="message-bubble-inner">
											<div className="message-avatar"><img src="assets/images/user-avatar-small-01.jpg" alt="" /></div>
											<div className="message-text"><p>Thanks for choosing my offer. I will start working on your project tomorrow.</p></div>
										</div>
										<div className="clearfix"></div>
									</div>

									<div className="message-bubble">
										<div className="message-bubble-inner">
											<div className="message-avatar"><img src="assets/images/user-avatar-small-02.jpg" alt="" /></div>
											<div className="message-text"><p>Great. If you need any further clarification let me know. 👍</p></div>
										</div>
										<div className="clearfix"></div>
									</div>

									<div className="message-bubble me">
										<div className="message-bubble-inner">
											<div className="message-avatar"><img src="assets/images/user-avatar-small-01.jpg" alt="" /></div>
											<div className="message-text"><p>Ok, I will. 😉</p></div>
										</div>
										<div className="clearfix"></div>
									</div>

									{/* Time Sign */}
									<div className="message-time-sign">
										<span>Yesterday</span>
									</div>

									<div className="message-bubble me">
										<div className="message-bubble-inner">
											<div className="message-avatar"><img src="assets/images/user-avatar-small-01.jpg" alt="" /></div>
											<div className="message-text"><p>Hi Sindy, I just wanted to let you know that project is finished and I'm waiting for your approval.</p></div>
										</div>
										<div className="clearfix"></div>
									</div>

									<div className="message-bubble">
										<div className="message-bubble-inner">
											<div className="message-avatar"><img src="assets/images/user-avatar-small-02.jpg" alt="" /></div>
											<div className="message-text"><p>Hi Tom! Hate to break it to you, but I'm actually on vacation 🌴 until Sunday so I can't check it now. 😎</p></div>
										</div>
										<div className="clearfix"></div>
									</div>

									<div className="message-bubble me">
										<div className="message-bubble-inner">
											<div className="message-avatar"><img src="assets/images/user-avatar-small-01.jpg" alt="" /></div>
											<div className="message-text"><p>Ok, no problem. But don't forget about last payment. 🙂</p></div>
										</div>
										<div className="clearfix"></div>
									</div>

									<div className="message-bubble">
										<div className="message-bubble-inner">
											<div className="message-avatar"><img src="assets/images/user-avatar-small-02.jpg" alt="" /></div>
											<div className="message-text">
												{/* Typing Indicator */}
												<div className="typing-indicator">
													<span></span>
													<span></span>
													<span></span>
												</div>
											</div>
										</div>
										<div className="clearfix"></div>
									</div>
							</div>
							{/* Message Content Inner / End */}
							
							{/* Reply Area */}
							<div className="message-reply">
								<textarea cols="1" rows="1" placeholder="Your Message" data-autoresize></textarea>
								<button className="button ripple-effect">Send</button>
							</div>

						</div>
						{/* Message Content */}

					</div>
			</div>
			{/* Messages Container / End */}



			
			{/* Footer */}
			<div className="dashboard-footer-spacer"></div>
			<div className="small-footer margin-top-15">
				<div className="small-footer-copyrights">
					© 2019 <strong>Hireo</strong>. All Rights Reserved.
				</div>
				<ul className="footer-social-links">
					<li>
						<a href="#" title="Facebook" data-tippy-placement="top">
							<i className="icon-brand-facebook-f"></i>
						</a>
					</li>
					<li>
						<a href="#" title="Twitter" data-tippy-placement="top">
							<i className="icon-brand-twitter"></i>
						</a>
					</li>
					<li>
						<a href="#" title="Google Plus" data-tippy-placement="top">
							<i className="icon-brand-google-plus-g"></i>
						</a>
					</li>
					<li>
						<a href="#" title="LinkedIn" data-tippy-placement="top">
							<i className="icon-brand-linkedin-in"></i>
						</a>
					</li>
				</ul>
				<div className="clearfix"></div>
			</div>
			{/* Footer / End */}

		</div>
	</div>
	{/* Dashboard Content / End */}

</div>
{/* Dashboard Container / End */}

</div>
{/* Wrapper / End */}


{/* Apply for a job popup
================================================== */}
<div id="small-dialog" className="zoom-anim-dialog mfp-hide dialog-with-tabs">

	{/*Tabs */}
	<div className="sign-in-form">

		<ul className="popup-tabs-nav">
			<li><a href="#tab">Add Note</a></li>
		</ul>

		<div className="popup-tabs-container">

			{/* Tab */}
			<div className="popup-tab-content" id="tab">
				
				{/* Welcome Text */}
				<div className="welcome-text">
					<h3>Do Not Forget 😎</h3>
				</div>
					
				{/* Form */}
				<form method="post" id="add-note">

					<select className="selectpicker with-border default margin-bottom-20" data-size="7" title="Priority">
						<option>Low Priority</option>
						<option>Medium Priority</option>
						<option>High Priority</option>
					</select>

					<textarea name="textarea" cols="10" placeholder="Note" className="with-border"></textarea>

				</form>
				
				{/* Button */}
				<button className="button full-width button-sliding-icon ripple-effect" type="submit" form="add-note">Add Note <i className="icon-material-outline-arrow-right-alt"></i></button>

			</div>

		</div>
	</div>
</div>
{/* Apply for a job popup / End */}


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
</script> */}

            </div>
    )
}