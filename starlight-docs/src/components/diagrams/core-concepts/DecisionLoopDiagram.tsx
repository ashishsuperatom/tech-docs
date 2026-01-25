import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'a', type: 'custom', position: { x: 0, y: 50 }, data: { label: 'Understand\nData semantics', color: 'primary', icon: '🔍', tag: '1' } },
  { id: 'b', type: 'custom', position: { x: 220, y: 50 }, data: { label: 'Analyze\nFind patterns', color: 'primary', icon: '📊', tag: '2' } },
  { id: 'c', type: 'custom', position: { x: 440, y: 50 }, data: { label: 'Suggest\nRecommend actions', color: 'primary', icon: '💡', tag: '3' } },
  { id: 'd', type: 'custom', position: { x: 660, y: 50 }, data: { label: 'Verify\nHuman review', color: 'success', icon: '✓', tag: '4' } },
  { id: 'e', type: 'custom', position: { x: 880, y: 50 }, data: { label: 'Execute\nTake action', color: 'success', icon: '🚀', tag: '5' } },
  { id: 'f', type: 'custom', position: { x: 1100, y: 50 }, data: { label: 'Observe\nTrack outcomes', color: 'success', icon: '👁️', tag: '6' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'a', target: 'b', sourceHandle: 'right', targetHandle: 'left' },
  { id: 'e2', source: 'b', target: 'c', sourceHandle: 'right', targetHandle: 'left' },
  { id: 'e3', source: 'c', target: 'd', sourceHandle: 'right', targetHandle: 'left' },
  { id: 'e4', source: 'd', target: 'e', sourceHandle: 'right', targetHandle: 'left' },
  { id: 'e5', source: 'e', target: 'f', sourceHandle: 'right', targetHandle: 'left' },
  { id: 'e6', source: 'f', target: 'a', sourceHandle: 'bottom', targetHandle: 'bottom', style: { strokeDasharray: '5,5' } },
];

export default function DecisionLoopDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="240px" autoLayout={false} />;
}
