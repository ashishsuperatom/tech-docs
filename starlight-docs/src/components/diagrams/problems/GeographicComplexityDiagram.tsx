import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  // Headquarters
  { id: 'hq', type: 'custom', position: { x: 300, y: 0 }, data: { label: 'Headquarters\nCentral operations', color: 'primary', icon: '🏢', tag: 'HQ' } },

  // Regions
  { id: 'r1', type: 'custom', position: { x: 50, y: 140 }, data: { label: 'Region 1\nDifferent processes', color: 'danger', icon: '🌍', tag: 'Region' } },
  { id: 'r2', type: 'custom', position: { x: 300, y: 140 }, data: { label: 'Region 2\nDifferent terminology', color: 'danger', icon: '🌎', tag: 'Region' } },
  { id: 'r3', type: 'custom', position: { x: 550, y: 140 }, data: { label: 'Region 3\nDifferent data formats', color: 'danger', icon: '🌏', tag: 'Region' } },

  // Branches
  { id: 'b1', type: 'custom', position: { x: 0, y: 300 }, data: { label: 'Branch A\nLocal variations', color: 'warning', icon: '📍' } },
  { id: 'b2', type: 'custom', position: { x: 180, y: 300 }, data: { label: 'Branch B\nLocal variations', color: 'warning', icon: '📍' } },
  { id: 'b3', type: 'custom', position: { x: 360, y: 300 }, data: { label: 'Branch C\nLocal variations', color: 'warning', icon: '📍' } },
  { id: 'b4', type: 'custom', position: { x: 540, y: 300 }, data: { label: 'Branch D\nLocal variations', color: 'warning', icon: '📍' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'hq', target: 'r1' },
  { id: 'e2', source: 'hq', target: 'r2' },
  { id: 'e3', source: 'hq', target: 'r3' },
  { id: 'e4', source: 'r1', target: 'b1' },
  { id: 'e5', source: 'r1', target: 'b2' },
  { id: 'e6', source: 'r2', target: 'b3' },
  { id: 'e7', source: 'r3', target: 'b4' },
];

export default function GeographicComplexityDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="480px" />;
}
