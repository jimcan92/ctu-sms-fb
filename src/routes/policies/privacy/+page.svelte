<script lang="ts">
	import { afterNavigate, goto } from '$app/navigation';
	import { ChevronsLeft } from 'lucide-svelte';

	let prevPage = '/';

	afterNavigate(({ from }) => {
		if (prevPage === '/' && !from?.url.pathname.includes('/policies'))
			return (prevPage = from?.url.pathname ?? '/');
	});
</script>

<main class="min-h-screen w-full flex flex-col items-center p-4 sm:p-6 md:p-20">
	<div class="prose sm:prose-base prose-sm">
		<h1>Privacy Policy</h1>

		<p>Last Updated: Aug 29, 2023</p>

		<p>
			This Privacy Policy ("Policy") outlines how [Your Organization Name] ("we," "us," or "our")
			collects, uses, discloses, and safeguards your personal information when you use our CTU
			Students Management System (the "System"). By using the System, you consent to the practices
			described in this Policy.
		</p>

		<h2>Information We Collect</h2>

		<ol>
			<li>
				<section>
					<h3>Personal Information</h3>
					<p>
						When you use the System, we may collect personal information, such as your name, email
						address, contact information, and other information necessary for user authentication
						and academic record management.
					</p>
				</section>
			</li>
			<li>
				<section>
					<h3>Usage Data</h3>
					<p>
						We may collect information about how you interact with the System, including your IP
						address, browser type, and operating system. This data is collected for analytics and
						system optimization purposes.
					</p>
				</section>
			</li>
		</ol>

		<h2>How We Use Your Information</h2>

		<p>We use the information we collect for the following purposes:</p>

		<ol>
			<li>
				<section>
					<h3>User Authentication</h3>
					<p>
						Your personal information is used to verify your identity and grant you access to the
						System.
					</p>
				</section>
			</li>
			<li>
				<section>
					<h3>Academic Record Management</h3>
					<p>
						We collect and store data related to your attendance, scores, and grades to facilitate
						academic record keeping and reporting.
					</p>
				</section>
			</li>
			<li>
				<section>
					<h3>Communication</h3>
					<p>
						We may use your contact information to communicate with you regarding the System,
						updates, and important announcements.
					</p>
				</section>
			</li>
			<li>
				<section>
					<h3>System Improvement</h3>
					<p>
						Usage data helps us analyze how the System is used and make improvements for a better
						user experience.
					</p>
				</section>
			</li>
		</ol>

		<h2>Data Sharing</h2>

		<p>We may share your personal information in the following circumstances:</p>

		<ol>
			<li>
				<section>
					<h3>With CTU Faculty and Staff</h3>
					<p>
						Academic records, including attendance, scores, and grades, may be shared with CTU
						faculty and staff as necessary for educational purposes.
					</p>
				</section>
			</li>
			<li>
				<section>
					<h3>Third-Party Service Providers</h3>
					<p>
						We may use third-party service providers to assist with system maintenance, analytics,
						and communication. These providers have access to your personal information as needed to
						perform their services.
					</p>
				</section>
			</li>
			<li>
				<section>
					<h3>Legal Requirements</h3>
					<p>
						We may disclose your information if required by law or in response to valid legal
						requests.
					</p>
				</section>
			</li>
		</ol>

		<h2>Data Security</h2>

		<p>
			We take reasonable measures to protect your personal information from unauthorized access,
			disclosure, alteration, or destruction. However, no data transmission over the internet is
			completely secure, and we cannot guarantee the security of your information.
		</p>

		<h2>Your Choices</h2>

		<p>You have the following choices regarding your personal information:</p>

		<ol>
			<li>
				<section>
					<h3>Access and Correction</h3>
					<p>You may access and update your personal information through your account settings.</p>
				</section>
			</li>
			<li>
				<section>
					<h3>Opt-Out</h3>
					<p>You can opt out of receiving non-essential communications from us.</p>
				</section>
			</li>
			<li>
				<section>
					<h3>Deletion</h3>
					<p>
						You can request the deletion of your account and associated data. However, certain data
						may be retained for legal or administrative purposes.
					</p>
				</section>
			</li>
		</ol>

		<h2>Changes to this Privacy Policy</h2>

		<p>
			We may update this Privacy Policy from time to time. The latest version will be posted on the
			System, and the date of the last update will be indicated at the beginning of the Policy.
		</p>

		<h2>Contact Us</h2>

		<p>
			If you have questions or concerns about this Privacy Policy or your personal information,
			please contact us at jimcan051592@gmail.com.
		</p>

		<p>Effective Date: Aug 29, 2023</p>
	</div>

	<a class="link link-hover link-accent flex" href={prevPage}>
		<ChevronsLeft /> Go Back
	</a>
</main>
