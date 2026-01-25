import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  // People
  { id: 'p1', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Data Engineer\n$150K/year', color: 'neutral', icon: '👷', tag: 'Person' } },
  { id: 'p2', type: 'custom', position: { x: 240, y: 0 }, data: { label: 'BI Analyst\n$120K/year', color: 'neutral', icon: '📊', tag: 'Person' } },
  { id: 'p3', type: 'custom', position: { x: 480, y: 0 }, data: { label: 'Dashboard Designer\n$100K/year', color: 'neutral', icon: '🎨', tag: 'Person' } },

  // Time
  { id: 't1', type: 'custom', position: { x: 0, y: 150 }, data: { label: 'ETL Pipeline\n2-4 weeks', color: 'warning', icon: '⏳', tag: 'Time' } },
  { id: 't2', type: 'custom', position: { x: 240, y: 150 }, data: { label: 'Query Development\n1-2 weeks', color: 'warning', icon: '⏳', tag: 'Time' } },
  { id: 't3', type: 'custom', position: { x: 480, y: 150 }, data: { label: 'Dashboard Build\n1-2 weeks', color: 'warning', icon: '⏳', tag: 'Time' } },

  // Result
  { id: 'r1', type: 'custom', position: { x: 720, y: 75 }, data: { label: 'Static Dashboard\nShows historical data', color: 'neutral', icon: '📋' } },
  { id: 'human', type: 'custom', position: { x: 960, y: 75 }, data: { label: 'Human Must\nInterpret, decide, execute', color: 'danger', icon: '🙋' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'p1', target: 't1' },
  { id: 'e2', source: 't1', target: 'p2' },
  { id: 'e3', source: 'p2', target: 't2' },
  { id: 'e4', source: 't2', target: 'p3' },
  { id: 'e5', source: 'p3', target: 't3' },
  { id: 'e6', source: 't3', target: 'r1' },
  { id: 'e7', source: 'r1', target: 'human', style: { stroke: '#EF4444' } },
];

export default function TraditionalBIWorkflowDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="360px" />;
}
