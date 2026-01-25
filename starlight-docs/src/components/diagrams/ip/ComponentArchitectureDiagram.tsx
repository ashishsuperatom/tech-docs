import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  // Engine
  { id: 'selector', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Component Selector\nSelects best visualization', color: 'info', icon: '🎯', tag: 'Engine' } },
  { id: 'mapper', type: 'custom', position: { x: 0, y: 120 }, data: { label: 'Data Mapper\nTransforms query results', color: 'info', icon: '🔄' } },
  { id: 'config', type: 'custom', position: { x: 0, y: 240 }, data: { label: 'Config Generator\nCreates component props', color: 'info', icon: '⚙️' } },

  // Library
  { id: 'charts', type: 'custom', position: { x: 280, y: 0 }, data: { label: 'Chart Components\nLine, bar, pie, scatter', color: 'purple', icon: '📊', tag: 'Library' } },
  { id: 'display', type: 'custom', position: { x: 280, y: 120 }, data: { label: 'Display Components\nKPI cards, tables', color: 'purple', icon: '📋' } },
  { id: 'interactive', type: 'custom', position: { x: 280, y: 240 }, data: { label: 'Interactive Components\nFilters, controls', color: 'purple', icon: '🎛️' } },

  // Render
  { id: 'react', type: 'custom', position: { x: 560, y: 0 }, data: { label: 'React 19\nUI framework', color: 'primary', icon: '⚛️', tag: 'Render' } },
  { id: 'echarts', type: 'custom', position: { x: 560, y: 120 }, data: { label: 'ECharts\nChart rendering', color: 'primary', icon: '📈' } },
  { id: 'tailwind', type: 'custom', position: { x: 560, y: 240 }, data: { label: 'Tailwind CSS\nStyling system', color: 'primary', icon: '🎨' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'selector', target: 'charts' },
  { id: 'e2', source: 'mapper', target: 'display' },
  { id: 'e3', source: 'config', target: 'interactive' },
  { id: 'e4', source: 'charts', target: 'react' },
  { id: 'e5', source: 'display', target: 'echarts' },
  { id: 'e6', source: 'interactive', target: 'tailwind' },
];

export default function ComponentArchitectureDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="420px" />;
}
