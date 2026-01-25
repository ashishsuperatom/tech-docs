import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'agent', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Coding Agent\nAI orchestrator', color: 'primary', icon: '🤖', tag: 'Agent' } },
  { id: 'registry', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Tool Registry\n21+ specialized tools', color: 'info', icon: '🗂️' } },

  // Tool categories
  { id: 'inv', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Inventory Tools\nDeadstock, Overstock, Transfer', color: 'purple', icon: '📦', tag: '6 tools' } },
  { id: 'sales', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Sales Tools\nSummary, Trends, Forecast', color: 'success', icon: '📈', tag: '5 tools' } },
  { id: 'opt', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Optimization\nMIP Solver, Routes', color: 'warning', icon: '⚙️', tag: '2 tools' } },
  { id: 'ref', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Reference\nBranch, Cost, Location', color: 'neutral', icon: '📋', tag: '5 tools' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'agent', target: 'registry' },
  { id: 'e2', source: 'registry', target: 'inv' },
  { id: 'e3', source: 'registry', target: 'sales' },
  { id: 'e4', source: 'registry', target: 'opt' },
  { id: 'e5', source: 'registry', target: 'ref' },
];

export default function ToolRegistryDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="400px" direction="LR" />;
}
