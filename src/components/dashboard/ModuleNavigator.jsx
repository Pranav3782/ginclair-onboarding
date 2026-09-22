import { useState } from 'react'

const MODULES = [
  {
    id: 'mod1',
    number: '01',
    title: 'Load Balancing & Proxies',
    duration: '45 mins • 4 Lessons',
    lessons: [
      { id: 'l1', title: 'Layer 4 vs Layer 7 Load Balancing', duration: '10 min', completed: true },
      { id: 'l2', title: 'Round Robin & Consistent Hashing', duration: '12 min', completed: true },
      { id: 'l3', title: 'Health Checks & Failover Clusters', duration: '15 min', completed: false },
      { id: 'l4', title: 'Hands-on Nginx Configuration', duration: '8 min', completed: false },
    ],
  },
  {
    id: 'mod2',
    number: '02',
    title: 'Database Sharding & Replication',
    duration: '60 mins • 5 Lessons',
    lessons: [
      { id: 'l5', title: 'Primary-Replica Replication Topologies', duration: '14 min', completed: false },
      { id: 'l6', title: 'Horizontal Sharding & Partition Keys', duration: '16 min', completed: false },
      { id: 'l7', title: 'PACELC Theorem & Consistency Tradeoffs', duration: '15 min', completed: false },
    ],
  },
  {
    id: 'mod3',
    number: '03',
    title: 'Distributed Caching Strategies',
    duration: '40 mins • 3 Lessons',
    lessons: [
      { id: 'l8', title: 'Cache-Aside vs Read-Through Patterns', duration: '12 min', completed: false },
      { id: 'l9', title: 'Redis Cluster & Eviction Policies', duration: '18 min', completed: false },
    ],
  },
  {
    id: 'mod4',
    number: '04',
    title: 'Event-Driven Messaging & Queues',
    duration: '50 mins • 4 Lessons',
    lessons: [
      { id: 'l10', title: 'Kafka Topics, Partitions & Consumer Groups', duration: '15 min', completed: false },
      { id: 'l11', title: 'RabbitMQ Exchanges & Dead Letter Queues', duration: '15 min', completed: false },
    ],
  },
]

export default function ModuleNavigator({ onCompleteLesson }) {
  const [activeTab, setActiveTab] = useState('mod1')
  const [completedLessons, setCompletedLessons] = useState(['l1', 'l2'])

  const currentModule = MODULES.find((m) => m.id === activeTab) || MODULES[0]

  function handleToggleLesson(lessonId) {
    if (completedLessons.includes(lessonId)) return
    setCompletedLessons((prev) => [...prev, lessonId])
    onCompleteLesson?.(lessonId)
  }

  return (
    <div className="rounded-[24px] border border-border-cream bg-surface-white p-5 sm:p-7 shadow-subtle">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border-cream pb-5">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-orange-accent">
            Curriculum Navigator
          </span>
          <h3 className="font-serif text-2xl font-medium text-charcoal-text">
            Course Modules & Practice
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-muted-text bg-surface-beige px-3 py-1.5 rounded-full border border-border-cream w-fit">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Progress: {completedLessons.length} / 12 Lessons Completed
        </div>
      </div>

      {/* Module Tabs */}
      <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {MODULES.map((mod) => {
          const isActive = mod.id === activeTab
          return (
            <button
              key={mod.id}
              onClick={() => setActiveTab(mod.id)}
              className={`transition-all duration-200 shrink-0 flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-xs font-semibold ${
                isActive
                  ? 'bg-charcoal text-cream shadow-md'
                  : 'bg-surface-beige/60 text-charcoal-text border border-border-cream hover:bg-surface-beige'
              }`}
            >
              <span className={`font-serif text-xs ${isActive ? 'text-orange-accent' : 'text-muted-text'}`}>
                {mod.number}
              </span>
              <span>{mod.title.split('&')[0]}</span>
            </button>
          )
        })}
      </div>

      {/* Selected Module Lessons list */}
      <div className="mt-5 space-y-2.5">
        <div className="flex items-center justify-between text-xs text-muted-text px-1">
          <span className="font-semibold text-charcoal-text">{currentModule.title}</span>
          <span>{currentModule.duration}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {currentModule.lessons.map((lesson) => {
            const isDone = completedLessons.includes(lesson.id)
            return (
              <div
                key={lesson.id}
                className={`flex items-center justify-between gap-3 rounded-xl border p-3.5 transition-all ${
                  isDone
                    ? 'border-emerald-500/40 bg-emerald-50/40'
                    : 'border-border-cream bg-surface-beige/30 hover:border-orange-accent/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-bold text-xs ${
                      isDone
                        ? 'bg-emerald-600 text-white'
                        : 'bg-surface-beige text-charcoal-text border border-border-cream'
                    }`}
                  >
                    {isDone ? '✓' : '▶'}
                  </div>
                  <div>
                    <h4 className={`text-xs font-semibold ${isDone ? 'line-through text-muted-text' : 'text-charcoal-text'}`}>
                      {lesson.title}
                    </h4>
                    <span className="text-[10px] text-muted-text">{lesson.duration} • +20 XP</span>
                  </div>
                </div>

                {!isDone && (
                  <button
                    onClick={() => handleToggleLesson(lesson.id)}
                    className="shrink-0 text-[11px] font-semibold text-orange-accent hover:underline bg-orange-accent/10 px-2.5 py-1 rounded-lg border border-orange-accent/30"
                  >
                    Complete
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
