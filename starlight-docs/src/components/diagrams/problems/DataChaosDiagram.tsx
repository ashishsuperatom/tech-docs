import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  // Data sources - using 'data' color scheme with custom icons
  {
    id: 'd1',
    type: 'custom',
    position: { x: 0, y: 0 },
    data: {
      label: 'Scattered Sources\nERP, databases, files, APIs',
      color: 'data',
      icon: '🗄️',
      tag: 'Issue 1'
    }
  },
  {
    id: 'd2',
    type: 'custom',
    position: { x: 240, y: 0 },
    data: {
      label: 'Inconsistent Formats\nDifferent schemas per system',
      color: 'data',
      icon: '📋',
      tag: 'Issue 2'
    }
  },
  {
    id: 'd3',
    type: 'custom',
    position: { x: 0, y: 140 },
    data: {
      label: 'Missing Context\nWhat does "status=3" mean?',
      color: 'data',
      icon: '❓',
      tag: 'Issue 3'
    }
  },
  {
    id: 'd4',
    type: 'custom',
    position: { x: 240, y: 140 },
    data: {
      label: 'Domain Blindness\nNo business meaning',
      color: 'data',
      icon: '👁️',
      tag: 'Issue 4'
    }
  },

  // Chaos result - danger color
  {
    id: 'chaos',
    type: 'custom',
    position: { x: 120, y: 300 },
    data: {
      label: 'Data Chaos\nNo unified view of the truth',
      color: 'danger',
      icon: '⚠️'
    }
  },

  // Final outcome - danger badge
  {
    id: 'fail',
    type: 'badge',
    position: { x: 100, y: 440 },
    data: {
      label: 'Cannot Feed AI Quality Data',
      color: 'danger',
      icon: '✕'
    }
  },
];

const edges: Edge[] = [
  { id: 'e1', source: 'd1', target: 'chaos' },
  { id: 'e2', source: 'd2', target: 'chaos' },
  { id: 'e3', source: 'd3', target: 'chaos' },
  { id: 'e4', source: 'd4', target: 'chaos' },
  { id: 'e5', source: 'chaos', target: 'fail' },
];

export default function DataChaosDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="480px" />;
}
