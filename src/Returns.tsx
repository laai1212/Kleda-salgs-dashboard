import React from 'react'

type ReturnsProps = {
  rate?: number
  change?: number
  onClick?: () => void
}

export const Returns: React.FC<ReturnsProps> = ({
  rate = 2.1,
  change = -0.3,
  onClick,
}) => {
  const isNegative = change < 0

  return (
    <div className="return-card" onClick={onClick}>
      <div className="return-header">
        <span className="return-title">Returandel</span>
        <span className="return-refresh">↻</span>
      </div>

      <div className="return-main">
        <span className="return-value">{rate.toFixed(1)}%</span>

        <span className={'return-change ' + (isNegative ? 'negative' : 'positive')}>
          <span className="return-arrow">{isNegative ? '↘' : '↗'}</span>
          {change.toFixed(1)}%
        </span>
      </div>

      <p className="return-subtitle">Sammenlignet med forrige periode</p>
    </div>
  )
}
