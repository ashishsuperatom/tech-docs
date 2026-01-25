import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'l1', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Traditional BI\n$30B market (replacing spend)', color: 'neutral', icon: '📊', tag: 'Layer 1' } },
  { id: 'l2', type: 'custom', position: { x: 0, y: 130 }, data: { label: 'Decision Intelligence\n$50B+ (new capability)', color: 'info', icon: '🧠', tag: 'Layer 2' } },
  { id: 'l3', type: 'custom', position: { x: 0, y: 260 }, data: { label: 'Action Automation\n$100B+ (connected execution)', color: 'purple', icon: '⚡', tag: 'Layer 3' } },
  { id: 'superatom', type: 'custom', position: { x: 320, y: 130 }, data: { label: 'Superatom\nAddresses all layers', color: 'primary', icon: '✨' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'l1', target: 'superatom' },
  { id: 'e2', source: 'l2', target: 'superatom' },
  { id: 'e3', source: 'l3', target: 'superatom' },
];

export default function TAMDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="420px" />;
}
