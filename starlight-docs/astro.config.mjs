// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

export default defineConfig({
	integrations: [
		react(),
		starlight({
			title: 'Superatom',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/superatom' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'The Vision', slug: 'introduction/overview' },
						{ label: 'The Seven Problems', slug: 'introduction/problems' },
						{ label: 'Beyond Business Intelligence', slug: 'introduction/comparison' },
						{ label: 'Quickstart', slug: 'introduction/quickstart' },
						{ label: 'Core Concepts', slug: 'introduction/core-concepts' },
					],
				},
				{
					label: 'Platform',
					items: [
						{ label: 'Chat Agent', slug: 'platform/chat-agent' },
						{ label: 'Dashboards', slug: 'platform/dashboards' },
						{ label: 'Reports & AI Analyst', slug: 'platform/reports' },
						{ label: 'Mobile Apps', slug: 'platform/mobile-apps' },
						{ label: 'Automated Actions', slug: 'platform/actions' },
						{ label: 'Knowledge Base', slug: 'platform/knowledge-base' },
					],
				},
				{
					label: 'Architecture',
					items: [
						{ label: 'Architecture Overview', slug: 'architecture/overview' },
						{ label: 'Data Flow', slug: 'architecture/data-flow' },
						{ label: 'Platform Modules', slug: 'architecture/modules' },
						{ label: 'AI Engine', slug: 'architecture/ai-engine' },
						{ label: 'Infrastructure', slug: 'architecture/infrastructure' },
					],
				},
				{
					label: 'Intellectual Property',
					items: [
						{ label: 'Our Innovations', slug: 'ip/overview' },
						{ label: 'Multi-Source Semantic Understanding', slug: 'ip/semantic-modeling' },
						{ label: 'Generative UI', slug: 'ip/generative-ui' },
						{ label: 'Tribal Knowledge System', slug: 'ip/tribal-knowledge' },
						{ label: 'Coding Agents for Enterprise', slug: 'ip/coding-agents' },
						{ label: 'Automated Analyst', slug: 'ip/automated-analyst' },
					],
				},
				{
					label: 'Security & Compliance',
					items: [
						{ label: 'Security Overview', slug: 'security/overview' },
						{ label: 'Data Protection', slug: 'security/data-protection' },
						{ label: 'Access Control', slug: 'security/access-control' },
					],
				},
				{
					label: 'API Reference',
					items: [
						{ label: 'API Introduction', slug: 'api-reference/introduction' },
						{ label: 'Authentication', slug: 'api-reference/authentication' },
						{ label: 'WebSocket API', slug: 'api-reference/websocket' },
						{ label: 'REST Endpoints', slug: 'api-reference/endpoints' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Getting Started Guide', slug: 'guides/getting-started' },
						{ label: 'Connecting Data Sources', slug: 'guides/connecting-data' },
						{ label: 'Building Dashboards', slug: 'guides/building-dashboards' },
						{ label: 'Creating Reports', slug: 'guides/creating-reports' },
					],
				},
			],
		}),
	],
});
