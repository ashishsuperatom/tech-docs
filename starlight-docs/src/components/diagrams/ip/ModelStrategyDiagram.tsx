import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'agent', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Agent\nRoutes requests', color: 'neutral', icon: '🤖', tag: 'Input' } },
  { id: 'strategy', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Model Strategy\nSelect optimal LLM', color: 'info', icon: '🎯' } },

  { id: 'best', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'BEST Strategy\nClaude - Complex analysis', color: 'purple', icon: '🧠', tag: 'Quality' } },
  { id: 'fast', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'FAST Strategy\nGroq - Real-time', color: 'warning', icon: '⚡', tag: 'Speed' } },
  { id: 'balanced', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'BALANCED Strategy\nGPT - Cost-effective', color: 'primary', icon: '⚖️', tag: 'Value' } },

  { id: 'result', type: 'badge', position: { x: 0, y: 0 }, data: { label: 'Optimal Result', color: 'success', icon: '✓' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'agent', target: 'strategy' },
  { id: 'e2', source: 'strategy', target: 'best' },
  { id: 'e3', source: 'strategy', target: 'fast' },
  { id: 'e4', source: 'strategy', target: 'balanced' },
  { id: 'e5', source: 'best', target: 'result' },
  { id: 'e6', source: 'fast', target: 'result' },
  { id: 'e7', source: 'balanced', target: 'result' },
];

export default function ModelStrategyDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="400px" direction="LR" />;
}
