export interface AlarmTone {
  /** Tone number as printed on the manufacturer's tone chart. */
  no: number
  /** Sound frequency and pattern, as specified by the manufacturer. */
  pattern: string
  /** Five-position DIP switch code (D = down, U = up). */
  code: string
  /** Manufacturer's name for the tone. */
  description: string
  /** Path to the audio sample under /public. */
  file: string
  /** Broad grouping used to filter the library on the page. */
  group: 'Low Frequency' | 'High Frequency' | 'National & Standard Signals'
}

const file = (no: number) => `/downloads/sounds/tone-${String(no).padStart(2, '0')}.mp3`

export const ALARM_TONES: AlarmTone[] = [
  { no: 1, pattern: '800 Hz to 950 Hz swept at 120 Hz', code: 'DDDDD', description: 'Banshee Buzz LF', file: file(1), group: 'Low Frequency' },
  { no: 2, pattern: '800 Hz to 950 Hz swept at 9 Hz', code: 'UDDDD', description: 'Banshee Fast Sweep LF', file: file(2), group: 'Low Frequency' },
  { no: 3, pattern: '800 Hz to 950 Hz swept at 9 Hz', code: 'DUDDD', description: 'Banshee Slow Sweep LF', file: file(3), group: 'Low Frequency' },
  { no: 4, pattern: 'Continuous at 900 Hz', code: 'UUDDD', description: 'Banshee Continuous LF', file: file(4), group: 'Low Frequency' },
  { no: 5, pattern: '830 Hz to 970 Hz swept at 9 Hz', code: 'DDUDD', description: 'Banshee Fast Sweep LF', file: file(5), group: 'Low Frequency' },
  { no: 6, pattern: '830 Hz to 970 Hz swept at 1 Hz', code: 'UDUDD', description: 'Medium Sweep LF', file: file(6), group: 'Low Frequency' },
  { no: 7, pattern: 'Continuous at 950 Hz', code: 'DUUDD', description: 'Continuous LF', file: file(7), group: 'Low Frequency' },
  { no: 8, pattern: 'Intermittent at 950 Hz, 1 sec on, 1 sec off', code: 'UUUDD', description: 'Back Up Alarm LF', file: file(8), group: 'Low Frequency' },
  { no: 9, pattern: 'Alternating 800 Hz / 100 Hz at 1 Hz', code: 'DDDUD', description: 'Alternate LF', file: file(9), group: 'Low Frequency' },
  { no: 10, pattern: '800 Hz to 100 Hz swept at 0.5 sec', code: 'UDDUD', description: 'Medium Sweep LF', file: file(10), group: 'Low Frequency' },
  { no: 11, pattern: 'Alternating tones 800 Hz / 950 Hz at 3 Hz', code: 'DUDUD', description: 'Alternate LF', file: file(11), group: 'Low Frequency' },
  { no: 12, pattern: '2400 Hz to 2900 Hz at 120 Hz', code: 'UUDUD', description: 'Banshee Buzz HF', file: file(12), group: 'High Frequency' },
  { no: 13, pattern: '2400 Hz to 2900 Hz at 9 Hz', code: 'DDUUD', description: 'Banshee Fast Sweep HF', file: file(13), group: 'High Frequency' },
  { no: 14, pattern: '2400 Hz to 2900 Hz at 3 Hz', code: 'UDUUD', description: 'Banshee Slow Sweep HF', file: file(14), group: 'High Frequency' },
  { no: 15, pattern: 'Continuous 2900 Hz', code: 'DUUUD', description: 'Banshee Continuous HF', file: file(15), group: 'High Frequency' },
  { no: 16, pattern: '2450 Hz to 3100 Hz swept at 9 Hz', code: 'UUUUD', description: 'Banshee Fast Sweep HF (New)', file: file(16), group: 'High Frequency' },
  { no: 17, pattern: 'Intermittent at 2900 Hz, 1 sec on, 1 sec off', code: 'DDDDU', description: 'Back Up Alarm HF', file: file(17), group: 'High Frequency' },
  { no: 18, pattern: 'Alternating tones 2400 Hz / 2900 Hz at 3 Hz', code: 'UDDDU', description: 'Alternate HF', file: file(18), group: 'High Frequency' },
  { no: 19, pattern: '500 Hz rising to 1200 Hz over 3.5 sec, silence 0.5 sec', code: 'DUDDU', description: 'Slow Whoop', file: file(19), group: 'National & Standard Signals' },
  { no: 20, pattern: '1200 Hz falling to 500 Hz over 1 sec, silence 10 mS', code: 'UUDDU', description: 'Din Tone (DK)', file: file(20), group: 'National & Standard Signals' },
  { no: 21, pattern: '554 Hz for 100 mS and 440 Hz over 1 sec, silence 10 mS', code: 'DDUDU', description: 'French Fire Sounder', file: file(21), group: 'National & Standard Signals' },
  { no: 22, pattern: '420 Hz repeating, 0.65 sec on, 0.625 sec off', code: 'UDUDU', description: 'Australian Alert Signal', file: file(22), group: 'National & Standard Signals' },
  { no: 23, pattern: '500 Hz to 1200 Hz sweeping, 3.75 sec on, 0.25 sec off', code: 'DUUDU', description: 'Australian Evacuation Signal', file: file(23), group: 'National & Standard Signals' },
  { no: 24, pattern: '950 Hz for 0.5 sec on, 0.5 sec off for 3 phases, silence for 1.5 sec', code: 'UUUDU', description: 'US Temporal Tone LF', file: file(24), group: 'National & Standard Signals' },
  { no: 25, pattern: '2900 Hz for 0.5 sec on, 0.5 sec off for 3 phases, silence for 1.5 sec', code: 'DDDUU', description: 'US Temporal Tone HF', file: file(25), group: 'National & Standard Signals' },
  { no: 26, pattern: 'Intermittent 660 Hz, 150 mS on, 150 mS off', code: 'UDDUU', description: 'Swedish Tone (Fire)', file: file(26), group: 'National & Standard Signals' },
  { no: 27, pattern: 'Continuous 660 Hz', code: 'DUDUU', description: 'Swedish Tone (All Clear)', file: file(27), group: 'National & Standard Signals' },
  { no: 28, pattern: 'Intermittent 970 Hz, 500 mS on, 500 mS off', code: 'UUDUU', description: 'ISO 8201 LF', file: file(28), group: 'National & Standard Signals' },
  { no: 29, pattern: 'Intermittent 2900 Hz, 500 mS on, 500 mS off', code: 'DDUUU', description: 'ISO 8201 HF', file: file(29), group: 'National & Standard Signals' },
  { no: 30, pattern: 'Yodel 800 Hz / 100 Hz, 0.25 sec', code: 'UDUUU', description: 'BT Banshee (FP1063.1)', file: file(30), group: 'National & Standard Signals' },
  { no: 31, pattern: 'Continuous 100 Hz', code: 'DUUUU', description: 'BT Banshee (FP1063.1)', file: file(31), group: 'National & Standard Signals' },
  { no: 32, pattern: 'Bell Tone', code: 'UUUUU', description: 'Bell Tone', file: file(32), group: 'National & Standard Signals' },
]

export const TONE_GROUPS = [
  'Low Frequency',
  'High Frequency',
  'National & Standard Signals',
] as const
