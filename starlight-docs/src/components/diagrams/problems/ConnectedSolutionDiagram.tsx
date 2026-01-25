import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  // Problems Column
  { id: 'p1', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Data Chaos\nScattered sources', color: 'danger', icon: '⚠️', tag: 'Problem' } },
  { id: 'p2', type: 'custom', position: { x: 0, y: 110 }, data: { label: 'Tacit Knowledge\nUndocumented rules', color: 'danger', icon: '❓', tag: 'Problem' } },
  { id: 'p3', type: 'custom', position: { x: 0, y: 220 }, data: { label: 'Execution Gap\nManual processes', color: 'danger', icon: '⏳', tag: 'Problem' } },
  { id: 'p4', type: 'custom', position: { x: 0, y: 330 }, data: { label: 'Action Hesitation\nRisky decisions', color: 'danger', icon: '🛑', tag: 'Problem' } },
  { id: 'p5', type: 'custom', position: { x: 0, y: 440 }, data: { label: 'Limited Access\nDesktop only', color: 'danger', icon: '🔒', tag: 'Problem' } },
  { id: 'p6', type: 'custom', position: { x: 0, y: 550 }, data: { label: 'Delivery Delay\nSlow reporting', color: 'danger', icon: '🐌', tag: 'Problem' } },
  { id: 'p7', type: 'custom', position: { x: 0, y: 660 }, data: { label: 'Security Concerns\nData exposure', color: 'danger', icon: '🚨', tag: 'Problem' } },

  // Solutions Column
  { id: 's1', type: 'custom', position: { x: 320, y: 0 }, data: { label: 'Semantic Modeling\nUnified understanding', color: 'primary', icon: '🧠', tag: 'Solution' } },
  { id: 's2', type: 'custom', position: { x: 320, y: 110 }, data: { label: 'Tribal Knowledge\nCaptured rules', color: 'primary', icon: '📚', tag: 'Solution' } },
  { id: 's3', type: 'custom', position: { x: 320, y: 220 }, data: { label: 'Generative UI\nAuto-built interfaces', color: 'primary', icon: '🎨', tag: 'Solution' } },
  { id: 's4', type: 'custom', position: { x: 320, y: 330 }, data: { label: 'Dry-Run Execution\nSafe testing', color: 'primary', icon: '🧪', tag: 'Solution' } },
  { id: 's5', type: 'custom', position: { x: 320, y: 440 }, data: { label: 'Auto Mobile Apps\nAnywhere access', color: 'primary', icon: '📱', tag: 'Solution' } },
  { id: 's6', type: 'custom', position: { x: 320, y: 550 }, data: { label: 'Reports & Alerts\nInstant delivery', color: 'primary', icon: '📊', tag: 'Solution' } },
  { id: 's7', type: 'custom', position: { x: 320, y: 660 }, data: { label: 'Zero-Storage\nData stays secure', color: 'primary', icon: '🔐', tag: 'Solution' } },
];

const edges: Edge[] = [
  // Problem to Solution connections (dotted)
  { id: 'c1', source: 'p1', target: 's1', style: { strokeDasharray: '5,5', stroke: '#94A3B8' } },
  { id: 'c2', source: 'p2', target: 's2', style: { strokeDasharray: '5,5', stroke: '#94A3B8' } },
  { id: 'c3', source: 'p3', target: 's3', style: { strokeDasharray: '5,5', stroke: '#94A3B8' } },
  { id: 'c4', source: 'p4', target: 's4', style: { strokeDasharray: '5,5', stroke: '#94A3B8' } },
  { id: 'c5', source: 'p5', target: 's5', style: { strokeDasharray: '5,5', stroke: '#94A3B8' } },
  { id: 'c6', source: 'p6', target: 's6', style: { strokeDasharray: '5,5', stroke: '#94A3B8' } },
  { id: 'c7', source: 'p7', target: 's7', style: { strokeDasharray: '5,5', stroke: '#94A3B8' } },
];

export default function ConnectedSolutionDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="860px" />;
}
