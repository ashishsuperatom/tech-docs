import { diagramTheme } from './FlowDiagram';

// ===========================================
// CARD GRID COMPONENT
// For displaying cards without flow connections
// Uses the same design system as FlowDiagram
// ===========================================

interface CardData {
  label: string;
  description?: string;
  color?: keyof typeof diagramTheme.nodeColors;
  icon?: string;
  tag?: string;
}

interface CardProps {
  data: CardData;
  variant?: 'default' | 'compact' | 'badge';
}

function Card({ data, variant = 'default' }: CardProps) {
  const colorScheme = diagramTheme.nodeColors[data.color || 'primary'];
  const lines = data.label.split('\n');
  const title = lines[0];
  const subtitle = lines.length > 1 ? lines.slice(1).join(' ') : data.description;
  const icon = data.icon || colorScheme.icon;

  if (variant === 'badge') {
    return (
      <div
        style={{
          background: `linear-gradient(135deg, ${colorScheme.bg} 0%, #FFFFFF 100%)`,
          borderRadius: '24px',
          padding: '12px 20px',
          border: `2px solid ${colorScheme.border}50`,
          boxShadow: `0 2px 8px ${colorScheme.border}20`,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        {icon && <span style={{ fontSize: '16px' }}>{icon}</span>}
        <span
          style={{
            fontSize: '13px',
            fontWeight: 600,
            color: colorScheme.text,
            letterSpacing: '0.3px',
          }}
        >
          {data.label}
        </span>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div
        style={{
          background: `linear-gradient(135deg, ${colorScheme.bg} 0%, ${colorScheme.bg}80 100%)`,
          borderRadius: '12px',
          padding: '14px 18px',
          border: `1.5px solid ${colorScheme.border}30`,
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.04)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        {icon && <span style={{ fontSize: '18px', flexShrink: 0 }}>{icon}</span>}
        <div>
          <div
            style={{
              fontSize: '13px',
              fontWeight: 600,
              color: colorScheme.text,
              lineHeight: 1.4,
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div
              style={{
                fontSize: '11px',
                fontWeight: 400,
                color: '#64748B',
                marginTop: '4px',
                lineHeight: 1.4,
              }}
            >
              {subtitle}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Default card style
  return (
    <div
      style={{
        background: '#FFFFFF',
        borderRadius: '14px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)',
        border: `1.5px solid ${colorScheme.border}40`,
        overflow: 'hidden',
      }}
    >
      {/* Colored header bar with icon */}
      <div
        style={{
          background: `linear-gradient(135deg, ${colorScheme.bg} 0%, ${colorScheme.bg}90 100%)`,
          borderBottom: `1px solid ${colorScheme.border}20`,
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        {icon && <span style={{ fontSize: '16px', flexShrink: 0 }}>{icon}</span>}
        <span
          style={{
            fontSize: '14px',
            fontWeight: 600,
            color: colorScheme.text,
            flex: 1,
            lineHeight: 1.3,
          }}
        >
          {title}
        </span>
        {data.tag && (
          <span
            style={{
              fontSize: '10px',
              padding: '3px 8px',
              borderRadius: '6px',
              background: `${colorScheme.border}20`,
              color: colorScheme.text,
              fontWeight: 600,
              letterSpacing: '0.3px',
              flexShrink: 0,
            }}
          >
            {data.tag}
          </span>
        )}
      </div>

      {/* Content area */}
      {subtitle && (
        <div style={{ padding: '12px 16px' }}>
          <div
            style={{
              fontSize: '12px',
              fontWeight: 400,
              color: '#64748B',
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </div>
        </div>
      )}
    </div>
  );
}

// ===========================================
// CARD GRID COMPONENT
// ===========================================
interface CardGridProps {
  cards: CardData[];
  columns?: 1 | 2 | 3 | 4;
  variant?: 'default' | 'compact' | 'badge';
  gap?: string;
}

export default function CardGrid({
  cards,
  columns = 2,
  variant = 'default',
  gap = '16px',
}: CardGridProps) {
  return (
    <div
      style={{
        ...diagramTheme.container,
        padding: '24px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap,
        }}
      >
        {cards.map((card, index) => (
          <Card key={index} data={card} variant={variant} />
        ))}
      </div>
    </div>
  );
}

// ===========================================
// BADGE ROW COMPONENT
// For displaying a row of badges
// ===========================================
interface BadgeRowProps {
  badges: CardData[];
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
}

export function BadgeRow({ badges, justify = 'center' }: BadgeRowProps) {
  return (
    <div
      style={{
        ...diagramTheme.container,
        padding: '20px 24px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: justify,
          gap: '12px',
        }}
      >
        {badges.map((badge, index) => (
          <Card key={index} data={badge} variant="badge" />
        ))}
      </div>
    </div>
  );
}

// ===========================================
// EXPORTS
// ===========================================
export { Card };
export type { CardData, CardGridProps, BadgeRowProps };
