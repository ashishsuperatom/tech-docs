import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'revenue', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Revenue\nTotal income', color: 'primary', icon: '💰', tag: 'Outcome' } },
  { id: 'orders', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Order Volume\nTransaction count', color: 'info', icon: '📦' } },
  { id: 'aov', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Avg Order Value\nBasket size', color: 'info', icon: '🛒' } },
  { id: 'new', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'New Customers\nAcquisition', color: 'purple', icon: '👤' } },
  { id: 'returning', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Returning Customers\nRetention', color: 'purple', icon: '🔄' } },
  { id: 'marketing', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Marketing Spend\nAd budget', color: 'danger', icon: '📢', tag: 'Root Cause' } },
  { id: 'conversion', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Website Conversion\nVisitor to buyer', color: 'warning', icon: '🎯' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'revenue', target: 'orders' },
  { id: 'e2', source: 'revenue', target: 'aov' },
  { id: 'e3', source: 'orders', target: 'new' },
  { id: 'e4', source: 'orders', target: 'returning' },
  { id: 'e5', source: 'new', target: 'marketing' },
  { id: 'e6', source: 'new', target: 'conversion' },
];

export default function DependencyMappingDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="400px" direction="TB" />;
}
