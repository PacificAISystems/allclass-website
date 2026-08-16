const ITEMS = [
  { label: 'Google Rating', value: '5.0 ★', gold: true },
  { label: 'Reviews', value: '7,899+' },
  { label: 'Alberta Certified', value: 'Class 1 Pathway' },
  { label: 'Amazon Partner', value: 'Career Choice' },
  { label: 'Programs', value: 'Class 1 · Class 3 · Air Brake' },
  { label: 'Location', value: 'Edmonton, Alberta' },
  { label: 'Hours', value: 'Mon–Fri 9am–4pm' },
  { label: 'Experience', value: 'Pro Instructors' },
  { label: 'Training', value: 'One-on-One In-Cab' },
  { label: 'Google Rating', value: '5.0 ★', gold: true },
  { label: 'Reviews', value: '7,899+' },
  { label: 'Alberta Certified', value: 'Class 1 Pathway' },
  { label: 'Amazon Partner', value: 'Career Choice' },
  { label: 'Programs', value: 'Class 1 · Class 3 · Air Brake' },
  { label: 'Location', value: 'Edmonton, Alberta' },
  { label: 'Hours', value: 'Mon–Fri 9am–4pm' },
  { label: 'Experience', value: 'Pro Instructors' },
  { label: 'Training', value: 'One-on-One In-Cab' },
]

export function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {ITEMS.map((item, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-dot" />
            {item.label} —{' '}
            <span className={item.gold ? 't-gold' : 't-em'}>{item.value}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
