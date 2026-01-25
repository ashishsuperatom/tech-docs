import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'data', type: 'custom', position: { x: 0, y: 160 }, data: { label: 'Field Data\nRaw values', color: 'neutral', icon: '📊', tag: 'Input' } },

  // Profile metrics
  { id: 'p1', type: 'custom', position: { x: 240, y: 0 }, data: { label: 'Distinct Values\nCardinality analysis', color: 'info', icon: '🔢' } },
  { id: 'p2', type: 'custom', position: { x: 240, y: 90 }, data: { label: 'Distribution\nMean, median, std dev', color: 'info', icon: '📈' } },
  { id: 'p3', type: 'custom', position: { x: 240, y: 180 }, data: { label: 'Frequency\nMost common values', color: 'info', icon: '📋' } },
  { id: 'p4', type: 'custom', position: { x: 240, y: 270 }, data: { label: 'Ratios\nYes/No, True/False', color: 'info', icon: '⚖️' } },
  { id: 'p5', type: 'custom', position: { x: 240, y: 360 }, data: { label: 'Patterns\nRegex detection', color: 'info', icon: '🔍' } },

  { id: 'insight', type: 'badge', position: { x: 480, y: 180 }, data: { label: 'Field Intelligence', color: 'primary', icon: '✓' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'data', target: 'p1' },
  { id: 'e2', source: 'data', target: 'p2' },
  { id: 'e3', source: 'data', target: 'p3' },
  { id: 'e4', source: 'data', target: 'p4' },
  { id: 'e5', source: 'data', target: 'p5' },
  { id: 'e6', source: 'p1', target: 'insight' },
  { id: 'e7', source: 'p2', target: 'insight' },
  { id: 'e8', source: 'p3', target: 'insight' },
  { id: 'e9', source: 'p4', target: 'insight' },
  { id: 'e10', source: 'p5', target: 'insight' },
];

export default function StatisticalProfileDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="520px" />;
}
