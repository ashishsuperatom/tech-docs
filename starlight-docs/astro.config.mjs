// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Superatom',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/superatom' },
			],
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'Overview', slug: 'introduction/overview' },
						{ label: 'The Seven Problems', slug: 'introduction/problems' },
						{ label: 'vs Traditional BI', slug: 'introduction/comparison' },
						{ label: 'Core Concepts', slug: 'introduction/core-concepts' },
						{ label: 'Quickstart', slug: 'introduction/quickstart' },
					],
				},
				{
					label: 'Platform',
					items: [
						{ label: 'Chat Agent', slug: 'platform/chat-agent' },
						{ label: 'Dashboards', slug: 'platform/dashboards' },
						{ label: 'Reports', slug: 'platform/reports' },
						{ label: 'Mobile Apps', slug: 'platform/mobile-apps' },
						{ label: 'Actions', slug: 'platform/actions' },
						{ label: 'Knowledge Base', slug: 'platform/knowledge-base' },
					],
				},
				{
					label: 'Our Innovation',
					items: [
						{ label: 'Overview', slug: 'ip/overview' },
						{ label: 'Semantic Modeling', slug: 'ip/semantic-modeling' },
						{ label: 'Generative UI', slug: 'ip/generative-ui' },
						{ label: 'Tribal Knowledge', slug: 'ip/tribal-knowledge' },
						{ label: 'Coding Agents', slug: 'ip/coding-agents' },
						{ label: 'Automated Analyst', slug: 'ip/automated-analyst' },
					],
				},
				{
					label: 'Architecture',
					items: [
						{ label: 'Overview', slug: 'architecture/overview' },
						{ label: 'Data Flow', slug: 'architecture/data-flow' },
						{ label: 'Modules', slug: 'architecture/modules' },
						{ label: 'AI Engine', slug: 'architecture/ai-engine' },
						{ label: 'Infrastructure', slug: 'architecture/infrastructure' },
					],
				},
				{
					label: 'Security',
					items: [
						{ label: 'Overview', slug: 'security/overview' },
						{ label: 'Data Protection', slug: 'security/data-protection' },
						{ label: 'Access Control', slug: 'security/access-control' },
					],
				},
				{
					label: 'API Reference',
					items: [
						{ label: 'Introduction', slug: 'api-reference/introduction' },
						{ label: 'Authentication', slug: 'api-reference/authentication' },
						{ label: 'WebSocket', slug: 'api-reference/websocket' },
						{ label: 'Endpoints', slug: 'api-reference/endpoints' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Getting Started', slug: 'guides/getting-started' },
						{ label: 'Connecting Data', slug: 'guides/connecting-data' },
						{ label: 'Building Dashboards', slug: 'guides/building-dashboards' },
						{ label: 'Creating Reports', slug: 'guides/creating-reports' },
					],
				},
			],
		}),
	],
});
