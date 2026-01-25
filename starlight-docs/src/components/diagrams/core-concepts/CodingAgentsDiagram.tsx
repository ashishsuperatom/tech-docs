import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'q', type: 'custom', position: { x: 0, y: 100 }, data: { label: 'Complex Question\nMulti-step analysis', color: 'neutral', icon: '💬', tag: 'Input' } },
  { id: 'agent', type: 'custom', position: { x: 240, y: 100 }, data: { label: 'Coding Agent\nAutonomous executor', color: 'primary', icon: '🤖' } },

  // Think-Act-Observe loop
  { id: 'think', type: 'custom', position: { x: 480, y: 0 }, data: { label: 'Think\nPlan next step', color: 'info', icon: '🧠', tag: 'Loop' } },
  { id: 'act', type: 'custom', position: { x: 700, y: 0 }, data: { label: 'Act\nExecute code', color: 'info', icon: '⚡', tag: 'Loop' } },
  { id: 'observe', type: 'custom', position: { x: 920, y: 0 }, data: { label: 'Observe\nCheck results', color: 'info', icon: '👁️', tag: 'Loop' } },

  { id: 'decide', type: 'custom', position: { x: 920, y: 140 }, data: { label: 'Complete?\nEvaluate progress', color: 'warning', icon: '⟡' } },
  { id: 'answer', type: 'badge', position: { x: 1140, y: 140 }, data: { label: 'Final Answer', color: 'success', icon: '✓' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'q', target: 'agent' },
  { id: 'e2', source: 'agent', target: 'think' },
  { id: 'e3', source: 'think', target: 'act' },
  { id: 'e4', source: 'act', target: 'observe' },
  { id: 'e5', source: 'observe', target: 'decide' },
  { id: 'e6', source: 'decide', target: 'think', style: { strokeDasharray: '5,5', stroke: '#F59E0B' } },
  { id: 'e7', source: 'decide', target: 'answer' },
];

export default function CodingAgentsDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="320px" />;
}
