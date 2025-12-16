import React from 'react'

type OrdersProps = {
  title?: string
  value?: number
  changePct?: number
  subtitle?: string
  onClick?: () => void
}

export const Orders: React.FC<OrdersProps> = ({
  title = 'Ordrer',
  value = 1234,
  changePct = 12.5,
  subtitle = 'Sammenlignet med forrige periode',
  onClick,
}) => {
  const isPositive = changePct >= 0

  return (
    <div className="orders-card" onClick={onClick}>
      <div className="orders-top">
        <span className="orders-title">{title}</span>
        <span className="orders-icon" aria-hidden="true">🛒</span>
      </div>

      <div className="orders-mid">
        <div className="orders-value">
          {value.toLocaleString()}
        </div>

        <div className={'orders-change ' + (isPositive ? 'pos' : 'neg')}>
          <span className="orders-arrow">{isPositive ? '↗' : '↘'}</span>
          <span>
            {isPositive ? '+' : ''}{changePct.toFixed(1)}%
          </span>
        </div>
      </div>

      <div className="orders-subtitle">{subtitle}</div>
    </div>
  )
}
