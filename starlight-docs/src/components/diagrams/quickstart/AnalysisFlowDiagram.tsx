import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'connect', type: 'custom', position: { x: 0, y: 50 }, data: { label: 'Connect\nPlug in data source', color: 'primary', icon: '🔌', tag: '1' } },
  { id: 'schema', type: 'custom', position: { x: 220, y: 50 }, data: { label: 'Analyze Schema\nUnderstand structure', color: 'neutral', icon: '🔍', tag: '2' } },
  { id: 'sample', type: 'custom', position: { x: 440, y: 50 }, data: { label: 'Sample Data\nExamine records', color: 'neutral', icon: '📋', tag: '3' } },
  { id: 'profile', type: 'custom', position: { x: 660, y: 50 }, data: { label: 'Statistical Profile\nFind patterns', color: 'neutral', icon: '📊', tag: '4' } },
  { id: 'domain', type: 'custom', position: { x: 880, y: 50 }, data: { label: 'Domain Classify\nIdentify context', color: 'neutral', icon: '🏷️', tag: '5' } },
  { id: 'ready', type: 'badge', position: { x: 1100, y: 70 }, data: { label: 'Ready!', color: 'success', icon: '✓' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'connect', target: 'schema' },
  { id: 'e2', source: 'schema', target: 'sample' },
  { id: 'e3', source: 'sample', target: 'profile' },
  { id: 'e4', source: 'profile', target: 'domain' },
  { id: 'e5', source: 'domain', target: 'ready' },
];

export default function AnalysisFlowDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="240px" />;
}
