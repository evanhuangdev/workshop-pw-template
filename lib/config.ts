import type { Portfolio } from "@/lib/types";

const PORTFOLIO_DATA: Portfolio = {
	name: "Evan Huang",
	headline: "Aspiring Innovator | Strategic Leader | Determined Scholar",
	bio: "A detail-oriented UCLA computer science engineering and applied mathematics student based in San Francisco with strong ambitions in software, systems, and emerging technologies. Seeking opportunities to cultivate technical skills and tackle real-world issues.",

	// Your contact email
	email: "evhuang4@gmail.com",

	// Add your links here
	// Supported icons: 'GitHub', 'LinkedIn', 'Twitter', 'Blog'
	links: [
		{ name: "GitHub", url: "https://github.com/evanhuangdev" },
		{ name: "LinkedIn", url: "https://linkedin.com/in/evhuang4" },
		// { name: "Twitter", url: "https" },
		// { name: "Blog", url: "https://yourblog.com" },
	],

	// Add your skills here
	skills: [
		"C++", "Python", "Web Development", "System Assembly & Integration"
	],

	// Add your projects here
	projects: [
		{
			title: "Statistics",
			description: "To be updated",
			stack: ["Python", "Pandas", "NumPy", "Matplotlib"],
			githubLink: "",
			liveLink: "",
		},
		{
			title: "GPA Calculator",
			description: "To be updated",
			stack: ["React Native"],
			githubLink: "",
			liveLink: "",
		},

	],

	// Add your experience here
	experience: [
		{
			role: "Founding Board Member - Communnity & Retention Lead",
			company: "Bruin Software Engineers",
			date: "Oct 2025 - Present",
			location: "Los Angeles, CA",
			description: "Maximized peer potential by connecting them to 1-on-1 mentorship with 30+ industry experts from Google, Meta, Amazon, and other big tech. Accelerated student preparedness for a changing tech field, as measured by an increase of club membership from 10 members to 400+ members and 25,000+ Instagram views through active outreach to students and experts. Enhanced student professional development by planning personal website workshops and more."

		},
		{
			role: "Academic Enrichment Intern",
			company: "Golden Gate Reformed Chruch",
			date: "Jun 2024 - Aug 2024",
			location: "San Francisco, CA",
			description: "Designed and conducted STEAM experiments and lectures for a diverse K-8 class consisting of 20+ students. Implemented research-backed student encouragement systems that empowered 100% more students to reach learning goals."
		},
		{
			role: "Social Media Marketing Intern",
			company: "Project Level",
			date: "Jun 2024 - Aug 2024",
			location: "San Francisco, CA",
			description: "Hosted a flea market that gave 20+ small businesses a platform to promote their products. Analyzed social media trends and patterns to create effective and appealing marketing content. Granted peers the opportunity to share their ideas, think critically, and practice persuasive skills through mock debates."
		},
		{
			role: "Social Vice President & Secretary",
			company: "Galileo Academy Class Cabinet",
			date: "Jun 2022 - Jun 2022",
			location: "San Francisco, CA",
			description: "Conducted community bonding initiatives during Pep Club to increase membership by 200%. Edited the weekly sports newsletter to keep 1,800+ families updated with school athletics. Supervised 20+ fundraisers and pep rallies raising thousands of dollars for school events. Revived the class Instagram account by increasing reach by 520%, content interactions by 700%, and impressions by 190%. Directed student outreach committee."
		}
	],

	// Add any education or awards
	education: [
		{
			degree: "B.S. in Computer Science & Engineering, B.S. in Applied Mathematics (Intended)",
			institution: "University of California, Los Angeles (UCLA)",
			date: "Expected May 2029",
			note: "Relevant Coursework: Intro to CS I, Probability & Statistics (CC)"
		},
		{
			degree: "High School Diploma",
			institution: "Galileo Academy of Science & Technology",
			date: "June 2025",
			note: "Relevant Coursework: AP CS Princples, Programming, Intro to Python"
		},
		{
			degree: "National First-Generation Recognition Program Awardee",
			institution: "College Board",
			date: "Aug 2024",
			note: "Awarded to first-generation students for outstanding achievement"
		}
	]
};

export default PORTFOLIO_DATA;