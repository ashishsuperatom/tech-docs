import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  // Knowledge domains
  { id: 'k1', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Retail Domain\nPatterns & terminology', color: 'info', icon: '🛒', tag: 'Domain' } },
  { id: 'k2', type: 'custom', position: { x: 0, y: 110 }, data: { label: 'Supply Chain\nWorkflows & metrics', color: 'info', icon: '🚚', tag: 'Domain' } },
  { id: 'k3', type: 'custom', position: { x: 0, y: 220 }, data: { label: 'Finance\nStructures & compliance', color: 'info', icon: '💰', tag: 'Domain' } },
  { id: 'k4', type: 'custom', position: { x: 0, y: 330 }, data: { label: 'Healthcare\nRegulations & data types', color: 'info', icon: '🏥', tag: 'Domain' } },

  { id: 'new', type: 'custom', position: { x: 280, y: 0 }, data: { label: 'New Organization\nYour company data', color: 'neutral', icon: '🏢', tag: 'Input' } },
  { id: 'match', type: 'custom', position: { x: 280, y: 165 }, data: { label: 'Pattern Matching\nFind similar structures', color: 'warning', icon: '🔄' } },
  { id: 'model', type: 'badge', position: { x: 520, y: 165 }, data: { label: 'Instant Semantic Model', color: 'primary', icon: '✓' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'new', target: 'match' },
  { id: 'e2', source: 'k1', target: 'match' },
  { id: 'e3', source: 'k2', target: 'match' },
  { id: 'e4', source: 'k3', target: 'match' },
  { id: 'e5', source: 'k4', target: 'match' },
  { id: 'e6', source: 'match', target: 'model' },
];

export default function KnowledgeAccumulationDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="500px" />;
}
