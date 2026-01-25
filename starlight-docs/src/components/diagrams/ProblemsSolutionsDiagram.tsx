import FlowDiagram from './FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  // Problems (left side)
  { id: 'p1', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Data Problem\nFragmented, inconsistent', color: 'danger', icon: '⚠️', tag: 'Problem' } },
  { id: 'p2', type: 'custom', position: { x: 0, y: 100 }, data: { label: 'Tacit Knowledge\nLost institutional wisdom', color: 'danger', icon: '🧠' } },
  { id: 'p3', type: 'custom', position: { x: 0, y: 200 }, data: { label: 'Execution Gap\nSlow data-to-insight cycle', color: 'danger', icon: '🐢' } },
  { id: 'p4', type: 'custom', position: { x: 0, y: 300 }, data: { label: 'Action Barrier\nNo safe way to act', color: 'danger', icon: '🚫' } },
  { id: 'p5', type: 'custom', position: { x: 0, y: 400 }, data: { label: 'Accessibility\nComplex tools barrier', color: 'danger', icon: '🔒' } },
  { id: 'p6', type: 'custom', position: { x: 0, y: 500 }, data: { label: 'Delivery\nManual report creation', color: 'danger', icon: '📄' } },
  { id: 'p7', type: 'custom', position: { x: 0, y: 600 }, data: { label: 'Security Risk\nData exposure concerns', color: 'danger', icon: '🛡️' } },

  // Solutions (right side)
  { id: 's1', type: 'custom', position: { x: 380, y: 0 }, data: { label: 'Semantic Modeling\nUnified data layer', color: 'success', icon: '🗂️', tag: 'Solution' } },
  { id: 's2', type: 'custom', position: { x: 380, y: 100 }, data: { label: 'Tribal Knowledge\nCaptured & codified', color: 'success', icon: '📚' } },
  { id: 's3', type: 'custom', position: { x: 380, y: 200 }, data: { label: 'Generative UI\nInstant visualizations', color: 'success', icon: '✨' } },
  { id: 's4', type: 'custom', position: { x: 380, y: 300 }, data: { label: 'Dry-Run Execution\nSafe action preview', color: 'success', icon: '🔬' } },
  { id: 's5', type: 'custom', position: { x: 380, y: 400 }, data: { label: 'Auto Mobile Apps\nUniversal access', color: 'success', icon: '📱' } },
  { id: 's6', type: 'custom', position: { x: 380, y: 500 }, data: { label: 'Reports & Dashboards\nAutomated delivery', color: 'success', icon: '📊' } },
  { id: 's7', type: 'custom', position: { x: 380, y: 600 }, data: { label: 'Zero-Storage\nNo data at rest', color: 'success', icon: '🔐' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'p1', target: 's1' },
  { id: 'e2', source: 'p2', target: 's2' },
  { id: 'e3', source: 'p3', target: 's3' },
  { id: 'e4', source: 'p4', target: 's4' },
  { id: 'e5', source: 'p5', target: 's5' },
  { id: 'e6', source: 'p6', target: 's6' },
  { id: 'e7', source: 'p7', target: 's7' },
];

export default function ProblemsSolutionsDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="800px" />;
}
