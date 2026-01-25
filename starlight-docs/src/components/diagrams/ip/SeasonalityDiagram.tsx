import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'data', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Raw Data\nTime series input', color: 'neutral', icon: '📊', tag: 'Input' } },
  { id: 'decompose', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Decomposition\nSplit into parts', color: 'info', icon: '🔀' } },
  { id: 'trend', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Trend Component\nLong-term direction', color: 'primary', icon: '📈' } },
  { id: 'season', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Seasonal Component\nRecurring patterns', color: 'purple', icon: '🔄' } },
  { id: 'residual', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Residual/Noise\nUnexplained variation', color: 'warning', icon: '〰️' } },
  { id: 'analysis', type: 'badge', position: { x: 0, y: 0 }, data: { label: 'Context-Aware Analysis', color: 'success', icon: '✓' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'data', target: 'decompose' },
  { id: 'e2', source: 'decompose', target: 'trend' },
  { id: 'e3', source: 'decompose', target: 'season' },
  { id: 'e4', source: 'decompose', target: 'residual' },
  { id: 'e5', source: 'trend', target: 'analysis' },
];

export default function SeasonalityDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="350px" direction="LR" />;
}
