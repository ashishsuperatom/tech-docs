import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'data', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Incoming Data\nReal-time stream', color: 'neutral', icon: '📊', tag: 'Input' } },
  { id: 'baseline', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Historical Baseline\nNormal patterns', color: 'info', icon: '📈' } },
  { id: 'compare', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Statistical Comparison\nZ-score, IQR', color: 'purple', icon: '⚖️' } },
  { id: 'anomaly', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Anomaly?\nThreshold check', color: 'warning', icon: '❓', tag: 'Decision' } },
  { id: 'classify', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Classify\nSpike, Drop, Trend, Pattern', color: 'danger', icon: '🏷️' } },
  { id: 'continue', type: 'simple', position: { x: 0, y: 0 }, data: { label: 'Continue monitoring', color: 'neutral' } },
  { id: 'investigate', type: 'badge', position: { x: 0, y: 0 }, data: { label: 'Trigger Investigation', color: 'success', icon: '🔍' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'data', target: 'baseline' },
  { id: 'e2', source: 'baseline', target: 'compare' },
  { id: 'e3', source: 'compare', target: 'anomaly' },
  { id: 'e4', source: 'anomaly', target: 'classify', label: 'Yes' },
  { id: 'e5', source: 'anomaly', target: 'continue', label: 'No' },
  { id: 'e6', source: 'classify', target: 'investigate' },
];

export default function AnomalyDetectionDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="350px" direction="LR" />;
}
