<script lang="ts">
	import { afterNavigate, goto } from '$app/navigation';
	import { ChevronsLeft } from 'lucide-svelte';

	let prevPage = '/';

	afterNavigate(({ from }) => {
		prevPage = (from?.url.pathname.includes('/policies') ? '/' : from?.url.pathname) ?? prevPage;
	});
</script>

<main class="min-h-screen w-full flex flex-col items-center p-4 sm:p-6 md:p-20">
	<div class="prose sm:prose-base prose-sm">
		<h1>Terms and Conditions</h1>

		<p>Last Updated: Aug 29, 2023</p>

		<p>
			These Terms and Conditions ("Terms") govern your use of the CTU Students Management System
			(the "System") provided by Cebu Technological University - Moalboal Campus ("we," "us," or
			"our"). By accessing or using the System, you agree to comply with and be bound by these
			Terms. If you do not agree to these Terms, please do not use the System.
		</p>

		<ol>
			<li>
				<section>
					<h2>Registration and Access</h2>
					<p>
						1.1 Eligibility: You must be a current student of Cebu Technological University -
						Moalboal Campus ("CTU") to access the System. You are responsible for providing accurate
						and current information during the registration process.
					</p>
					<p>
						1.2 User Accounts: To access the System, you will use your Google account credentials.
						You are solely responsible for maintaining the confidentiality of your Google account
						information and for all activities that occur under your account.
					</p>
					<p>
						1.3 User Responsibilities: You agree to use the System in compliance with all applicable
						laws and regulations and in accordance with CTU's policies and guidelines.
					</p>
				</section>
			</li>
			<li>
				<section>
					<h2>Attendance and Academic Records</h2>
					<p>
						2.1 Attendance Records: We will collect and record your attendance information for
						academic purposes. This data may be shared with CTU faculty and staff as necessary.
					</p>
					<p>
						2.2 Scores and Grades: We will record your scores on assignments, tests, and other
						academic assessments. We will also compute your grades based on the data provided by CTU
						faculty.
					</p>
					<p>
						2.3 Data Accuracy: While we strive to ensure the accuracy of attendance, scores, and
						grades, we are not responsible for errors or omissions made by CTU faculty or
						administrators.
					</p>
				</section>
			</li>
			<li>
				<section>
					<h2>Data Privacy</h2>
					<p>
						3.1 Data Collection: We will collect and process your personal data in accordance with
						our <a href="/policies/privacy">Privacy Policy</a>, which is an integral part of these
						Terms. You consent to the collection and use of your data as described in the Privacy
						Policy.
					</p>
					<p>
						3.2 Third-Party Access: By using your Google account credentials, you authorize us to
						access and retrieve necessary data from your Google account for the purpose of user
						authentication and academic record management.
					</p>
				</section>
			</li>
			<!-- Add more sections as needed -->
			<li>
				<section>
					<h2>Governing Law</h2>
					<p>
						4.1 Governing Law: These Terms are governed by and construed in accordance with the laws
						of Philippines.
					</p>
				</section>
			</li>
			<li>
				<section>
					<h2>Contact Information</h2>
					<p>
						5.1 Contact Us: If you have any questions or concerns about these Terms or the System,
						please contact us at jimcan051592@gmail.com.
					</p>
				</section>
			</li>
		</ol>

		<p>
			By using the CTU Students Management System, you acknowledge that you have read, understood,
			and agreed to these Terms and Conditions.
		</p>

		<p>Please print and retain a copy of these Terms for your records.</p>

		<section class="flex flex-col">
			<span>Cebu Technological University - Moalboal Campus</span>
			<span>Poblacion West, Moalboal, Cebu, Philippines, 6032</span>
			<span>jimcan051592@gmail.com</span>
			<span>Aug 29, 2023</span>
		</section>
	</div>

	<a class="link link-hover link-accent flex" href={prevPage}>
		<ChevronsLeft /> Go Back
	</a>
</main>
