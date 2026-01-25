import FlowDiagram from './FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  {
    id: '1',
    type: 'custom',
    position: { x: 280, y: 0 },
    data: { label: '1. UNDERSTAND\nThe data collected by the org', color: 'info', icon: '🔍', tag: 'Insight' },
  },
  {
    id: '2',
    type: 'custom',
    position: { x: 520, y: 120 },
    data: { label: '2. ANALYZE\nPatterns, trends, anomalies', color: 'info', icon: '📊' },
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 520, y: 260 },
    data: { label: '3. SUGGEST\nActions that can be taken', color: 'info', icon: '💡' },
  },
  {
    id: '4',
    type: 'custom',
    position: { x: 280, y: 380 },
    data: { label: '4. VERIFY\nHuman review for high-stakes', color: 'primary', icon: '✓', tag: 'Action' },
  },
  {
    id: '5',
    type: 'custom',
    position: { x: 40, y: 260 },
    data: { label: '5. EXECUTE\nCommit the action', color: 'primary', icon: '⚡' },
  },
  {
    id: '6',
    type: 'custom',
    position: { x: 40, y: 120 },
    data: { label: '6. OBSERVE\nTrack the results', color: 'primary', icon: '👁️' },
  },
];

const edges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', sourceHandle: 'right', targetHandle: 'top' },
  { id: 'e2-3', source: '2', target: '3', sourceHandle: 'bottom', targetHandle: 'top' },
  { id: 'e3-4', source: '3', target: '4', sourceHandle: 'bottom', targetHandle: 'right' },
  { id: 'e4-5', source: '4', target: '5', sourceHandle: 'left', targetHandle: 'bottom' },
  { id: 'e5-6', source: '5', target: '6', sourceHandle: 'top', targetHandle: 'bottom' },
  { id: 'e6-1', source: '6', target: '1', sourceHandle: 'top', targetHandle: 'left' },
];

export default function DecisionLoopDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="540px" autoLayout={false} />;
}
