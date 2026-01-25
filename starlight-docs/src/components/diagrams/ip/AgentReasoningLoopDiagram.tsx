import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'think', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Think\nWhat do I need to know?', color: 'info', icon: '💭', tag: 'Loop' } },
  { id: 'act', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Act\nExecute query/analysis', color: 'primary', icon: '⚡' } },
  { id: 'observe', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Observe\nInterpret results', color: 'purple', icon: '👁️' } },
  { id: 'decide', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Decide\nComplete or continue?', color: 'warning', icon: '⟡' } },
  { id: 'output', type: 'badge', position: { x: 0, y: 0 }, data: { label: 'Final Answer', color: 'success', icon: '✓' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'think', target: 'act' },
  { id: 'e2', source: 'act', target: 'observe' },
  { id: 'e3', source: 'observe', target: 'decide' },
  { id: 'e4', source: 'decide', target: 'output' },
];

export default function AgentReasoningLoopDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="280px" direction="LR" />;
}
