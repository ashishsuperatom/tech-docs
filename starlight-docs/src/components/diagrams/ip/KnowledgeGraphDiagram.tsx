import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  // Core entity
  { id: 'order', type: 'custom', position: { x: 0, y: 80 }, data: { label: 'Order\nTransaction records', color: 'data', icon: '📦', tag: 'Entity' } },

  // Related entities
  { id: 'customer', type: 'custom', position: { x: 180, y: 0 }, data: { label: 'Customer\nBuyer information', color: 'info', icon: '👤' } },
  { id: 'product', type: 'custom', position: { x: 180, y: 80 }, data: { label: 'Product\nItem catalog', color: 'info', icon: '🏷️' } },
  { id: 'payment', type: 'custom', position: { x: 180, y: 160 }, data: { label: 'Payment\nFinancial data', color: 'info', icon: '💳' } },

  // Derived concepts
  { id: 'segment', type: 'custom', position: { x: 360, y: 0 }, data: { label: 'Segmentation\nCustomer groups', color: 'purple', icon: '📊' } },
  { id: 'inventory', type: 'custom', position: { x: 360, y: 80 }, data: { label: 'Inventory\nStock levels', color: 'purple', icon: '📈' } },
  { id: 'supply', type: 'custom', position: { x: 360, y: 160 }, data: { label: 'Supply Chain\nFulfillment flow', color: 'purple', icon: '🔗' } },

  // Business rules
  { id: 'deadstock', type: 'badge', position: { x: 550, y: 50 }, data: { label: 'Deadstock Rules', color: 'primary', icon: '📋' } },
  { id: 'overstock', type: 'badge', position: { x: 550, y: 120 }, data: { label: 'Overstock Rules', color: 'primary', icon: '📋' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'order', target: 'customer' },
  { id: 'e2', source: 'order', target: 'product' },
  { id: 'e3', source: 'order', target: 'payment' },
  { id: 'e4', source: 'customer', target: 'segment' },
  { id: 'e5', source: 'product', target: 'inventory' },
  { id: 'e6', source: 'product', target: 'supply' },
  { id: 'e7', source: 'inventory', target: 'deadstock' },
  { id: 'e8', source: 'inventory', target: 'overstock' },
];

export default function KnowledgeGraphDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="260px" />;
}
