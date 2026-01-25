import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'revenue', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Revenue\nSum of sales', color: 'primary', icon: '💰', tag: 'Node' } },
  { id: 'gross', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Gross Margin\nRevenue - COGS', color: 'info', icon: '📊' } },
  { id: 'net', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Net Margin\nGross - Operating Costs', color: 'purple', icon: '📈' } },
  { id: 'growth', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Growth Rate\nYoY change', color: 'info', icon: '📈' } },
  { id: 'trend', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Trend\n3-month moving avg', color: 'warning', icon: '📉' } },
  { id: 'alert1', type: 'badge', position: { x: 0, y: 0 }, data: { label: 'Alert if < 5%', color: 'danger', icon: '🚨' } },
  { id: 'alert2', type: 'badge', position: { x: 0, y: 0 }, data: { label: 'Alert if declining 3+ months', color: 'danger', icon: '🚨' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'revenue', target: 'gross' },
  { id: 'e2', source: 'gross', target: 'net' },
  { id: 'e3', source: 'revenue', target: 'growth' },
  { id: 'e4', source: 'growth', target: 'trend' },
  { id: 'e5', source: 'net', target: 'alert1' },
  { id: 'e6', source: 'trend', target: 'alert2' },
];

export default function KnowledgeNodeGraphDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="400px" direction="TB" />;
}
