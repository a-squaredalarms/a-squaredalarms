'use client'

import React, { useRef, useState } from 'react'
import { ALARM_TONES, TONE_GROUPS } from '@/lib/sounds'

/**
 * Playable library of the 32 sounder tones. Only one tone plays at a time,
 * because these are alarm sounds and overlapping them is unpleasant.
 * Audio is preloaded lazily so the page does not pull ~5 MB on load.
 */
export function SoundLibrary() {
  const [playing, setPlaying] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>('All')
  const audioRefs = useRef<Record<number, HTMLAudioElement | null>>({})

  const stopAll = (except?: number) => {
    Object.entries(audioRefs.current).forEach(([key, el]) => {
      if (!el) return
      if (Number(key) !== except) {
        el.pause()
        el.currentTime = 0
      }
    })
  }

  const toggle = (no: number) => {
    const el = audioRefs.current[no]
    if (!el) return

    if (playing === no) {
      el.pause()
      el.currentTime = 0
      setPlaying(null)
      return
    }

    stopAll(no)
    el.currentTime = 0
    void el.play().catch(() => setPlaying(null))
    setPlaying(no)
  }

  const tones =
    filter === 'All' ? ALARM_TONES : ALARM_TONES.filter((tone) => tone.group === filter)

  return (
    <section
      className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card md:p-8"
      aria-labelledby="sound-library-heading"
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
        Interactive
      </p>
      <h2
        id="sound-library-heading"
        className="mt-4 font-display text-display-sm font-bold text-navy-900"
      >
        Listen to all 32 tones
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
        Press play on any tone to hear it. Turn your volume down first — these are alarm sounders and
        several are deliberately piercing. Only one plays at a time.
      </p>

      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter tones by type">
        {['All', ...TONE_GROUPS].map((group) => (
          <button
            key={group}
            type="button"
            onClick={() => setFilter(group)}
            aria-pressed={filter === group}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${
              filter === group
                ? 'bg-navy-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {group}
          </button>
        ))}
      </div>

      <ul className="mt-6 divide-y divide-slate-200">
        {tones.map((tone) => {
          const isPlaying = playing === tone.no
          return (
            <li key={tone.no} className="flex items-start gap-4 py-4">
              <button
                type="button"
                onClick={() => toggle(tone.no)}
                aria-label={`${isPlaying ? 'Stop' : 'Play'} tone ${tone.no}, ${tone.description}`}
                className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full transition-colors ${
                  isPlaying
                    ? 'bg-navy-900 text-white'
                    : 'bg-sky-100 text-navy-900 hover:bg-sky-200'
                }`}
              >
                {isPlaying ? (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <rect x="6" y="5" width="4" height="14" rx="1" />
                    <rect x="14" y="5" width="4" height="14" rx="1" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 translate-x-[1px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-display text-base font-bold text-navy-900">
                    {tone.no}. {tone.description}
                  </span>
                  <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-xs font-semibold tracking-[0.1em] text-slate-600">
                    {tone.code}
                  </span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{tone.pattern}</p>
              </div>

              <a
                href={tone.file}
                download
                className="mt-1 flex-shrink-0 text-xs font-semibold text-slate-400 transition-colors hover:text-sky-700"
                aria-label={`Download tone ${tone.no}, ${tone.description}`}
              >
                Download
              </a>

              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <audio
                ref={(el) => {
                  audioRefs.current[tone.no] = el
                }}
                src={tone.file}
                preload="none"
                onEnded={() => setPlaying(null)}
              />
            </li>
          )
        })}
      </ul>

      <p className="mt-6 border-t border-slate-200 pt-5 text-xs leading-relaxed text-slate-400">
        Tone numbers, DIP switch codes and frequency patterns follow the manufacturer&apos;s tone
        chart. Samples are provided for identification and specification purposes.
      </p>
    </section>
  )
}
