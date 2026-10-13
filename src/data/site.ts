// Site content. Work history mirrors the CV (../CV/cv/experience.typ); keep claims in sync with it.
// Text strings may contain <b>, <a class="link"> and <a class="link-quiet"> markup; they are rendered as HTML.

export const site = {
	firstName: 'Yurii',
	lastName: 'Khariton',
	author: 'Yurii Khariton',
	tagline: 'Mobile & AI Engineer',
	description:
		'Yurii Khariton, a software engineer in Ukraine with over ten years of Android experience, now working on on-device LLMs and AI agents.',
	location: 'Ukraine',
	github: 'jinoralen',
	linkedin: 'khariton-yuriy',
};

export const summary = [
	"I'm a software engineer with over ten years of Android experience. I like figuring out how things work and making things I haven't built before.",
	'These days, that means LLMs running on phones at Puma, and AI agents helping with my own work.',
];

// "Now" section: what I'm focused on lately.
export const now = [
	{
		title: 'On-device AI',
		text: 'LLMs on Android and iOS at <a class="link-quiet" href="/experience/#puma-lead">Puma</a>.',
	},
	{ title: 'AI agents', text: 'tool calls, MCP and streaming APIs.' },
	{ title: 'Mobile architecture', text: 'keeping a large, long-lived Firefox fork modular and mergeable.' },
	{ title: 'AI harnesses', text: 'trying different coding agents to see how they work inside.' },
];

// Homepage "Before": one short sentence per past role, linking to it on the Experience page.
const exp = (id: string, label: string) => `<a class="link-quiet" href="/experience/#${id}">${label}</a>`;

export const pastWork = [
	`Worked on a ${exp('unstoppable-android', 'Web3 domains app')}.`,
	`Took a ${exp('scitrader', 'crypto trading app')} from design mockups to Google Play.`,
	`Built high-performance ${exp('scichart-android', '2D/3D charts')} on Android.`,
	`Started my career on a ${exp('scichart-wpf', 'WPF chart library')}.`,
	`Got a Master's degree in ${exp('education', 'System Programming')} at Lviv Polytechnic.`,
];

export const interests = [
	{ title: 'Homelab', text: 'self-hosting whenever I can.' },
	{ title: '3D printing', text: 'functional printing and tinkering with my Voron.' },
	{ title: 'Keyboards', text: 'hand-built keyboards with custom <b>QMK/ZMK</b> firmware.' },
	{ title: 'Game dev', text: 'following Godot.' },
];

export const menuLinks = [{ title: 'Experience', path: '/experience/' }];

type Group = { title?: string; items: string[] };
type Role = {
	/** Anchor on the Experience page. */
	id: string;
	title: string;
	start: string;
	end: string;
	summary: string[];
	groups: Group[];
	tags: string[];
};
type Company = { id: string; name: string; roles: Role[] };

const link = (href: string, label: string) => `<a class="link" href="${href}">${label}</a>`;

export const experience: Company[] = [
	{
		id: 'puma',
		name: 'Puma Technologies',
		roles: [
			{
				id: 'puma-lead',
				title: 'Lead Mobile & AI Engineer',
				start: 'Apr 2023',
				end: 'Present',
				summary: [
					`<b>Sole Android engineer</b> on the Firefox-based ${link('https://play.google.com/store/apps/details?id=com.pumabrowser.pumabrowser', 'Puma Browser')} (<b>1M+ downloads, 4.2★</b>): took it from a Web3 browser to an <b>AI-first browser with on-device LLMs</b>, then expanded to the ${link('https://pumaai.com/', 'Puma AI')} app and the Catalyst inference API.`,
					'Working directly with a non-technical founder as the <b>technical owner</b>: architecture, technical decisions and releases on Android, and on other platforms when needed.',
				],
				groups: [
					{
						title: 'On-device LLMs',
						items: [
							'The first version was our own integration on top of the llama.cpp API. llama.cpp changes too fast to keep that up to date, so I <b>replaced it with an embedded llama-server</b>. Upstream updates and new models now need very little porting.',
							'llama-server <b>runs in its own process</b>. A native abort inside the inference code used to kill the whole browser; now only the server restarts.',
						],
					},
					{
						title: 'Assistants and agents',
						items: [
							'Chat and page summaries built into the browser and aware of open tabs, with <b>5 providers</b> to choose from.',
							'Tool calls with Koog, and <b>MCP</b> both ways: the browser works as an MCP server and connects to third-party servers.',
						],
					},
					{
						title: 'Keeping a Firefox fork alive',
						items: [
							'Merged upstream Firefox <b>from v108 to v153</b>. Every Puma change to upstream code is marked, so it is easy to tell apart from Firefox code during a merge.',
							'Scripts and AI agent skills automate the merge and its review: a typical upstream merge went <b>from over a week to a couple of days</b>.',
							'Restructured the inherited codebase into <b>66 modules</b> in a monorepo, with the core and AI modules moved to <b>Kotlin Multiplatform</b> for future reuse on iOS.',
						],
					},
					{
						title: 'iOS',
						items: [
							'<b>Owned iOS</b> since 2025: merged Firefox iOS v153.2, moved the app into the monorepo, fixed Xcode Cloud CI and App Store signing, and brought on-device LLMs to iOS.',
						],
					},
					{
						title: 'Beyond the browser',
						items: [
							'<b>Puma AI</b> (Expo, Electron): merged separate desktop and mobile chat code into one <b>shared AI runtime</b> on the OpenAI Agents SDK, with tool calls and approval, reasoning and SQLite storage, plus end-to-end tests and over-the-air updates.',
							'<b>Catalyst</b>: an OpenAI-compatible streaming API on Cloudflare Workers, with <b>hosted agent sessions</b> on Durable Objects, tool calls, SSRF-hardened fetch and usage billing.',
						],
					},
					{
						title: 'Before AI: Web3',
						items: [
							'Built a <b>multi-chain wallet</b> (EVM, Solana, XRPL), resolution of Web3 domains (ENS, UNS, HNS, IPFS), and a build without Google services for the Solana dApp Store.',
							'<b>Shipped 48 Android releases</b> in 3.5 years, more than one a month.',
						],
					},
				],
				tags: [
					'Kotlin',
					'Kotlin Multiplatform',
					'Android SDK/NDK',
					'Swift',
					'TypeScript',
					'React Native',
					'Electron',
					'Cloudflare Workers',
					'llama.cpp',
					'OpenAI Agents SDK',
					'MCP',
					'Koog',
					'GitHub Actions',
					'Firefox/Fenix',
					'AI coding agents',
				],
			},
		],
	},
	{
		id: 'unstoppable',
		name: 'Unstoppable Domains',
		roles: [
			{
				id: 'unstoppable-android',
				title: 'Senior Android Developer',
				start: 'Sep 2022',
				end: 'Jan 2023',
				summary: [
					`Built new features and redesigned screens for the ${link('https://play.google.com/store/apps/details?id=com.unstoppabledomains.manager', 'Unstoppable Domains app')}, used to manage Web3 domains that serve as human-readable crypto addresses.`,
				],
				groups: [
					{
						title: 'Key achievements',
						items: [
							'Built the <b>wallet password</b> and <b>onboarding screens</b> from design mockups with <b>Compose UI</b> and Orbit-MVI.',
							'Went from no blockchain experience to building <b>crypto wallet features</b>.',
							'Got up to speed on the codebase by fixing bugs during onboarding.',
						],
					},
				],
				tags: ['Kotlin', 'Compose UI', 'Coroutines', 'Orbit-MVI', 'Room', 'Koin', 'WalletConnect'],
			},
		],
	},
	{
		id: 'scichart',
		name: 'SciChart',
		roles: [
			{
				id: 'scitrader',
				title: 'Lead Developer, SciTrader',
				start: 'Sep 2020',
				end: 'Mar 2022',
				summary: [
					`In parallel with SciChart.Android, built the Android version of ${link('https://www.scitrader.io/', 'SciTrader')}, a cryptocurrency trading app powered by SciChart's chart library, <b>from design mockups to Google Play release</b>.`,
				],
				groups: [
					{
						title: 'Key achievements',
						items: [
							`Designed and implemented the ${link('https://play.google.com/store/apps/details?id=com.scichart.scitrader', 'Android app')}'s architecture and the SciTrader Charts SDK API.`,
							'<b>Kept Android and iOS at feature parity</b> through constant coordination with the iOS developer, designers and QA.',
							'<b>Set up CI/CD</b> for automated builds and Google Play publishing.',
						],
					},
				],
				tags: ['Kotlin', 'Android SDK', 'Coroutines', 'RxJava', 'Compose UI', 'TeamCity'],
			},
			{
				id: 'scichart-android',
				title: 'Lead Developer',
				start: 'Jan 2015',
				end: 'Jul 2022',
				summary: [
					`Built ${link('https://www.scichart.com/android-chart-features/', 'SciChart.Android')} from the ground up: the <b>2D and 3D chart</b> libraries, the Xamarin.Android wrapper, native and Xamarin ${link('https://play.google.com/store/apps/details?id=com.scichart.examples', 'demo apps')}, and the CI/CD behind them. Learned Android <b>from scratch</b> as the company's <b>first Android developer</b>.`,
				],
				groups: [
					{
						title: 'The first customer',
						items: [
							'A <b>medical-device company</b> needed charts with <b>100k+ data points</b> and sensor updates every <b>5–10 ms</b>, on a <b>2-core 1 GHz CPU with 1 GB RAM</b>.',
							'Desktop hardware had hidden the bottlenecks: slow CPU and memory, thermal throttling, and boxing in Java generics. I profiled on the device, fixed one bottleneck at a time, and replaced boxed values with primitive arrays passed to C++ through SWIG. Rendering moved to a 2D OpenGL/C++ engine.',
							'<b>Redesigning most of the WPF-derived architecture</b> and rebuilding the rendering pipeline from scratch brought it to <b>60 FPS on low-end devices</b>.',
						],
					},
					{
						title: 'Across platforms',
						items: [
							'<b>Backported the new architecture to SciChart.WPF</b> and <b>advised the iOS, macOS and JavaScript teams</b> on adopting it.',
							'Created <b>fast and precise resampling algorithms</b> used on all platforms: <b>3–10× faster</b> than the original implementation depending on data and chart type, accurate with NaNs and uneven data, with copy-free FIFO resampling and optional <b>SIMD</b> (SSE/AVX/Neon).',
						],
					},
					{
						title: 'An SDK for developers',
						items: [
							`Designed the ${link('https://www.scichart.com/documentation/android/current/', 'Android chart APIs')} (<b>30+ 2D</b> and <b>20+ 3D chart types</b>) as interfaces with base classes, so customer developers could <b>extend every part</b>: series, axes, annotations, interaction and layout (e.g. multiple independently scrolling axes).`,
							'Wrapped the existing C++ 3D engine with <b>minimal Java/C++ interop overhead</b>, streaming large, constantly updating data sets from the SDK to the NDK in real time.',
							'<b>Customer support and consulting</b>: provided technical support to developers using SciChart.Android, integrated it into client apps, resolved performance bottlenecks and built <b>custom chart types</b>.',
							'<b>Mentored new hires</b> and <b>ran technical interviews</b> for the team.',
						],
					},
				],
				tags: [
					'Java',
					'Kotlin',
					'C#',
					'.NET',
					'C/C++',
					'Android SDK/NDK',
					'OpenGL',
					'SIMD',
					'Xamarin',
					'SWIG',
					'CMake',
					'TeamCity',
					'Gradle',
				],
			},
			{
				id: 'scichart-wpf',
				title: 'Software Developer',
				start: 'Feb 2013',
				end: 'Jan 2015',
				summary: ['Built new features for the SciChart.WPF chart library.'],
				groups: [
					{
						title: 'Key achievements',
						items: [
							'<b>Got up to speed quickly</b> on the codebase after joining.',
							'Delivered <b>large features</b>: Scrollbar, SciChartOverview, Centered Axis API, 2D Polar Chart.',
							'Fixed bugs and provided <b>technical support</b> to developers using the library.',
						],
					},
				],
				tags: ['C#', 'WPF', 'Silverlight', 'DirectX', 'NUnit', 'MVVM'],
			},
		],
	},
];

export const education = {
	id: 'education',
	school: 'Lviv Polytechnic National University',
	degree: "Master's Degree, System Programming",
	location: 'Lviv, Ukraine',
	start: '2008',
	end: '2013',
};
