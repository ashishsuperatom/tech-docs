import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  // Traditional BI Column
  { id: 't1', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Prepare Data\nData engineer builds ETL', color: 'neutral', icon: '👷', tag: 'Step 1' } },
  { id: 't2', type: 'custom', position: { x: 0, y: 120 }, data: { label: 'Write Queries\nAnalyst creates SQL', color: 'neutral', icon: '📝', tag: 'Step 2' } },
  { id: 't3', type: 'custom', position: { x: 0, y: 240 }, data: { label: 'Build Dashboard\nDesigner creates visuals', color: 'neutral', icon: '🎨', tag: 'Step 3' } },
  { id: 't4', type: 'custom', position: { x: 0, y: 360 }, data: { label: 'View Reports\nUser sees static data', color: 'neutral', icon: '📋', tag: 'Step 4' } },
  { id: 't5', type: 'custom', position: { x: 0, y: 480 }, data: { label: 'Interpret & Decide\nHuman does the thinking', color: 'danger', icon: '🤔', tag: 'Step 5' } },

  // Superatom Column
  { id: 's1', type: 'custom', position: { x: 340, y: 0 }, data: { label: 'Connect Sources\nPlug in your data', color: 'neutral', icon: '🔌', tag: 'Step 1' } },
  { id: 's2', type: 'custom', position: { x: 340, y: 120 }, data: { label: 'Auto Understand\nAI builds semantic model', color: 'primary', icon: '🧠', tag: 'Step 2' } },
  { id: 's3', type: 'custom', position: { x: 340, y: 240 }, data: { label: 'Ask Questions\nNatural language input', color: 'primary', icon: '💬', tag: 'Step 3' } },
  { id: 's4', type: 'custom', position: { x: 340, y: 360 }, data: { label: 'AI Analyzes\nSuggests actions', color: 'primary', icon: '📊', tag: 'Step 4' } },
  { id: 's5', type: 'custom', position: { x: 340, y: 480 }, data: { label: 'Verify & Execute\nHuman approves', color: 'success', icon: '✓', tag: 'Step 5' } },
  { id: 's6', type: 'badge', position: { x: 340, y: 600 }, data: { label: 'System Learns', color: 'success', icon: '🔄' } },
];

const edges: Edge[] = [
  // Traditional flow
  { id: 'et1', source: 't1', target: 't2' },
  { id: 'et2', source: 't2', target: 't3' },
  { id: 'et3', source: 't3', target: 't4' },
  { id: 'et4', source: 't4', target: 't5' },

  // Superatom flow
  { id: 'es1', source: 's1', target: 's2' },
  { id: 'es2', source: 's2', target: 's3' },
  { id: 'es3', source: 's3', target: 's4' },
  { id: 'es4', source: 's4', target: 's5' },
  { id: 'es5', source: 's5', target: 's6' },
  { id: 'es6', source: 's6', target: 's3', style: { strokeDasharray: '5,5' } },
];

export default function TraditionalVsSuperatomDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="720px" />;
}
