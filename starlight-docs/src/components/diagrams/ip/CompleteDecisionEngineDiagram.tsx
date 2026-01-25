import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'data', type: 'custom', position: { x: 0, y: 0 }, data: { label: '1. Data Connected\nSemantic Modeling', color: 'neutral', icon: '🗄️', tag: 'Step 1' } },
  { id: 'understand', type: 'custom', position: { x: 0, y: 0 }, data: { label: '2. Context Added\nTribal Knowledge', color: 'info', icon: '🧠', tag: 'Step 2' } },
  { id: 'analyze', type: 'custom', position: { x: 0, y: 0 }, data: { label: '3. Analysis Performed\nCoding Agents', color: 'purple', icon: '🤖', tag: 'Step 3' } },
  { id: 'monitor', type: 'custom', position: { x: 0, y: 0 }, data: { label: '4. Continuous Monitoring\nAutomated Analyst', color: 'primary', icon: '👁️', tag: 'Step 4' } },
  { id: 'insight', type: 'custom', position: { x: 0, y: 0 }, data: { label: '5. Insights Delivered\nGenerative UI', color: 'warning', icon: '📊', tag: 'Step 5' } },
  { id: 'action', type: 'badge', position: { x: 0, y: 0 }, data: { label: '6. Actions Suggested', color: 'success', icon: '✓' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'data', target: 'understand' },
  { id: 'e2', source: 'understand', target: 'analyze' },
  { id: 'e3', source: 'analyze', target: 'monitor' },
  { id: 'e4', source: 'monitor', target: 'insight' },
  { id: 'e5', source: 'insight', target: 'action' },
  { id: 'e6', source: 'action', target: 'data' },
];

export default function CompleteDecisionEngineDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="450px" direction="TB" />;
}
