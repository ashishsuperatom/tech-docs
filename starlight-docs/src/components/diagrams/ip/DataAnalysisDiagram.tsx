import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'data', type: 'custom', position: { x: 0, y: 130 }, data: { label: 'Query Results\nRaw data', color: 'neutral', icon: '📊', tag: 'Input' } },

  // Analysis dimensions
  { id: 'a1', type: 'custom', position: { x: 240, y: 0 }, data: { label: 'Cardinality\nHow many unique values?', color: 'info', icon: '🔢' } },
  { id: 'a2', type: 'custom', position: { x: 240, y: 100 }, data: { label: 'Data Types\nNumeric? Categorical?', color: 'info', icon: '🏷️' } },
  { id: 'a3', type: 'custom', position: { x: 240, y: 200 }, data: { label: 'Distribution\nEven? Skewed? Outliers?', color: 'info', icon: '📈' } },
  { id: 'a4', type: 'custom', position: { x: 240, y: 300 }, data: { label: 'Relationships\nPart-to-whole? Time series?', color: 'info', icon: '🔗' } },

  { id: 'decision', type: 'badge', position: { x: 500, y: 130 }, data: { label: 'Component Selection', color: 'primary', icon: '🎯' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'data', target: 'a1' },
  { id: 'e2', source: 'data', target: 'a2' },
  { id: 'e3', source: 'data', target: 'a3' },
  { id: 'e4', source: 'data', target: 'a4' },
  { id: 'e5', source: 'a1', target: 'decision' },
  { id: 'e6', source: 'a2', target: 'decision' },
  { id: 'e7', source: 'a3', target: 'decision' },
  { id: 'e8', source: 'a4', target: 'decision' },
];

export default function DataAnalysisDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="480px" />;
}
