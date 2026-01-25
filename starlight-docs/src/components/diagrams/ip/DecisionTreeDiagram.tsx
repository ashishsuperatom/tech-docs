import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'start', type: 'custom', position: { x: 0, y: 200 }, data: { label: 'Result Data\nQuery output', color: 'neutral', icon: '📊', tag: 'Start' } },

  // Decision nodes
  { id: 'q1', type: 'custom', position: { x: 220, y: 200 }, data: { label: 'Single value?', color: 'warning', icon: '⟡' } },
  { id: 'kpi', type: 'badge', position: { x: 220, y: 60 }, data: { label: 'KPI Card', color: 'primary', icon: '📈' } },

  { id: 'q2', type: 'custom', position: { x: 440, y: 200 }, data: { label: 'Has time?', color: 'warning', icon: '⟡' } },
  { id: 'q3', type: 'custom', position: { x: 440, y: 60 }, data: { label: 'Multi series?', color: 'warning', icon: '⟡' } },
  { id: 'multiline', type: 'badge', position: { x: 660, y: 0 }, data: { label: 'Multi-Line', color: 'primary', icon: '📉' } },
  { id: 'line', type: 'badge', position: { x: 660, y: 80 }, data: { label: 'Line Chart', color: 'primary', icon: '📈' } },

  { id: 'q4', type: 'custom', position: { x: 660, y: 200 }, data: { label: 'Categorical?', color: 'warning', icon: '⟡' } },
  { id: 'q5', type: 'custom', position: { x: 660, y: 340 }, data: { label: '< 7 categories?', color: 'warning', icon: '⟡' } },
  { id: 'pie', type: 'badge', position: { x: 880, y: 300 }, data: { label: 'Pie Chart', color: 'primary', icon: '🥧' } },
  { id: 'bar', type: 'badge', position: { x: 880, y: 380 }, data: { label: 'Bar Chart', color: 'primary', icon: '📊' } },

  { id: 'q6', type: 'custom', position: { x: 880, y: 200 }, data: { label: 'Two numeric?', color: 'warning', icon: '⟡' } },
  { id: 'scatter', type: 'badge', position: { x: 1100, y: 160 }, data: { label: 'Scatter Plot', color: 'primary', icon: '⚫' } },
  { id: 'table', type: 'badge', position: { x: 1100, y: 240 }, data: { label: 'Data Table', color: 'primary', icon: '📋' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'start', target: 'q1' },
  { id: 'e2', source: 'q1', target: 'kpi' },
  { id: 'e3', source: 'q1', target: 'q2' },
  { id: 'e4', source: 'q2', target: 'q3' },
  { id: 'e5', source: 'q3', target: 'multiline' },
  { id: 'e6', source: 'q3', target: 'line' },
  { id: 'e7', source: 'q2', target: 'q4' },
  { id: 'e8', source: 'q4', target: 'q5' },
  { id: 'e9', source: 'q5', target: 'pie' },
  { id: 'e10', source: 'q5', target: 'bar' },
  { id: 'e11', source: 'q4', target: 'q6' },
  { id: 'e12', source: 'q6', target: 'scatter' },
  { id: 'e13', source: 'q6', target: 'table' },
];

export default function DecisionTreeDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="520px" />;
}
