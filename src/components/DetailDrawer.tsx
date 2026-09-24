import { motion } from 'motion/react';
import { GuideItem, ThemeConfig } from '../types';
import { sourceOriginLabel, cleanXhsUrl } from '../data/guideSources';
import { X, CheckSquare, Square, AlertOctagon, Lightbulb, MapPin, Calendar, CircleDollarSign, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import TornEdge from './TornEdge';
import StackedGallery from './StackedGallery';
import { CopyButton } from './CopyButton';

interface DetailDrawerProps {
  item: GuideItem | null;
  onClose: () => void;
  theme: ThemeConfig;
}

export default function DetailDrawer({ item, onClose, theme }: DetailDrawerProps) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Reset checklist when the item changes
  useEffect(() => {
    setCheckedItems({});
  }, [item]);

  if (!item) return null;

  const toggleCheck = (index: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="absolute inset-0 z-[60] overflow-hidden pointer-events-none">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs pointer-events-auto cursor-pointer"
      />

      {/* Sheet */}
      <motion.div
        {...(theme.id === 'newspaper'
          ? {
              initial: { y: "45%", scaleY: 0.15, opacity: 0, rotateX: -15 },
              animate: { y: 0, scaleY: 1, opacity: 1, rotateX: 0 },
              exit: { y: "45%", scaleY: 0.15, opacity: 0, rotateX: -15 },
              transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
            }
          : {
              initial: { y: "100%" },
              animate: { y: 0 },
              exit: { y: "100%" },
              transition: { type: "spring", damping: 25, stiffness: 220 }
            }
        )}
        style={{
          transformOrigin: 'bottom center',
          perspective: 1200
        }}
        className={`absolute bottom-0 left-0 right-0 max-h-[82%] ${theme.bgClass} ${theme.borderRadius} overflow-y-auto pointer-events-auto flex flex-col shadow-2xl ${
          theme.id === 'cyber' 
            ? 'border-t-2 border-[#00F5FF]/80 rounded-t-3xl shadow-[0_-8px_20px_rgba(0,245,255,0.15)] bg-black/95' 
            : theme.id === 'frosted'
              ? 'border-t border-white/20 rounded-t-3xl shadow-[0_-12px_40px_rgba(139,92,246,0.35)] bg-[#0E0B1E]/95 backdrop-blur-3xl'
              : theme.id === 'midnight'
                ? 'border-t border-slate-700/60 rounded-t-3xl shadow-[0_-12px_40px_rgba(0,0,0,0.8)] bg-[#121620]/98 backdrop-blur-3xl'
              : theme.id === 'newspaper'
                ? 'border-l-2 border-r-2 border-[#1B1917] rounded-none shadow-[0_-12px_36px_rgba(27,25,23,0.18)] bg-[#FCFBF7] pt-4'
                : 'rounded-t-3xl border-t border-stone-200/50'
        }`}
      >
        {theme.id === 'newspaper' && <TornEdge position="top" bgColor="rgba(0,0,0,0.6)" cardColor="#FCFBF7" />}
        {/* Handle bar */}
        <div className={`w-full flex justify-center py-3 sticky top-0 z-30 ${theme.bgClass}`}>
          {theme.id === 'newspaper' ? (
            <div className="w-[90%] border-b-4 border-double border-[#1B1917]/25 pb-1 mt-1" />
          ) : (
            <div className="w-12 h-1.5 rounded-full bg-stone-300 dark:bg-stone-700" />
          )}
        </div>

        {/* Header section */}
        <div className={`px-6 pb-4 pt-2 border-b border-stone-100 dark:border-stone-800 flex items-start justify-between sticky top-0 z-30 ${theme.bgClass}`}>
          <div>
            <h2 className={`text-xl ${theme.fontHeading}`}>{item.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className={`p-1.5 transition-colors ${
              theme.id === 'cyber' 
                ? 'border border-[#FF007F]/40 bg-black text-[#FF007F] hover:bg-[#FF007F]/10 rounded-full' 
                : theme.id === 'frosted'
                  ? 'border border-white/20 bg-white/10 text-white hover:bg-white/20 rounded-full backdrop-blur-md shadow-sm'
                  : theme.id === 'newspaper'
                    ? 'border-2 border-[#1B1917] bg-[#FCFBF7] text-[#1B1917] hover:bg-stone-100 rounded-none'
                    : 'bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-full'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 pb-[calc(env(safe-area-inset-bottom)+4.5rem)] space-y-6 flex-1">
          {item.gallery && item.gallery.length > 0 && (
            <StackedGallery images={item.gallery} title={item.title} />
          )}

          {item.mapQuery && (
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`block p-4 ${
                theme.id === 'cyber'
                  ? 'border border-[#00F5FF]/30 bg-black/80 rounded-xl'
                  : theme.id === 'frosted'
                    ? 'border border-white/10 bg-white/5 rounded-xl'
                    : theme.id === 'newspaper'
                      ? 'border-2 border-[#1B1917] bg-[#FCFBF7] rounded-none'
                      : theme.id === 'midnight'
                        ? 'border border-slate-700/70 bg-[#0C0F17] rounded-xl'
                        : 'bg-stone-50 dark:bg-stone-800/50 rounded-xl'
              }`}
            >
              <p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${theme.textSecondaryClass}`}>
                {item.category === 'photo' ? '机位定位' : 'Google 地图定位'}
              </p>
              <div className="flex items-start justify-between gap-2">
                <p className={`text-sm font-semibold min-w-0 break-words ${theme.textPrimaryClass}`}>{item.mapQuery}</p>
                <div className="shrink-0 mt-0.5" onClick={(e) => e.stopPropagation()}>
                  <CopyButton
                    textToCopy={item.mapQuery}
                    label=""
                    copiedLabel=""
                    iconSize={12}
                    variant={theme.id === 'cyber' ? 'cyber' : theme.id === 'aurora' ? 'sky' : 'stone'}
                    className="p-1 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 rounded text-stone-400 hover:text-sky-500 transition-colors bg-transparent border-0"
                    copiedClassName="p-1 bg-emerald-500/15 rounded text-emerald-500 border-0"
                  />
                </div>
              </div>
              {item.coordinates ? (
                <p className={`text-xs mt-1 font-mono ${theme.textSecondaryClass}`}>{item.coordinates}</p>
              ) : null}
              <p className="text-xs mt-2 text-sky-600 dark:text-sky-400 underline underline-offset-2">在 Google 地图打开</p>
            </a>
          )}

          {/* Quick Stats Block if applicable — 机位 / 极光细则不展示这组元信息 */}
          {item.category !== 'photo' && item.category !== 'aurora' && (item.location || item.bookingNeeded || item.costRange) && (
            <div className={`p-4 ${
              theme.id === 'cyber' 
                ? 'border border-[#00F5FF]/30 bg-black/80 rounded-xl' 
                : theme.id === 'frosted'
                  ? 'border border-white/10 bg-white/5 backdrop-blur-xl rounded-xl'
                  : theme.id === 'newspaper'
                    ? 'border-2 border-[#1B1917] bg-[#FCFBF7] rounded-none divide-x-2 divide-[#1B1917]'
                    : 'bg-stone-50 dark:bg-stone-800/50 rounded-xl'
            } grid grid-cols-3 gap-2 text-center`}>
              <div className={`flex flex-col items-center justify-center px-1 ${theme.id !== 'newspaper' ? 'border-r border-stone-200/50 dark:border-stone-700/50' : ''}`}>
                <MapPin className="w-4 h-4 mb-1 text-stone-400" />
                <span className="text-[10px] text-stone-400">位置范围</span>
                <span className="text-xs font-semibold truncate w-full mt-0.5">{item.location || '全国范围'}</span>
              </div>
              <div className={`flex flex-col items-center justify-center px-1 ${theme.id !== 'newspaper' ? 'border-r border-stone-200/50 dark:border-stone-700/50' : ''}`}>
                <Calendar className="w-4 h-4 mb-1 text-stone-400" />
                <span className="text-[10px] text-stone-400">需要预约</span>
                <span className="text-xs font-semibold mt-0.5">
                  {item.bookingNeeded === 'yes' ? '必须预约' : item.bookingNeeded === 'no' ? '直接前往' : '推荐预约'}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center px-1">
                <CircleDollarSign className="w-4 h-4 mb-1 text-stone-400" />
                <span className="text-[10px] text-stone-400">消费指数</span>
                <span className="text-xs font-semibold mt-0.5">{item.costRange || '自驾干货'}</span>
              </div>
            </div>
          )}

          {/* Detailed explanations/items */}
          <div className="space-y-6">
            {item.details.filter((section) => !(item.category === 'photo' && section.sectionTitle === '地图定位')).map((section, sIdx) => (
              <div key={sIdx} className="space-y-2">
                <h3 className={`text-sm font-bold tracking-wide flex items-center gap-2 ${
                  theme.id === 'cyber' 
                    ? 'text-[#00F5FF] font-black' 
                    : theme.id === 'newspaper'
                      ? 'text-[#1B1917] font-black font-serif border-b-2 border-[#1B1917] pb-1 w-full'
                      : theme.accentColor
                }`}>
                  {theme.id !== 'newspaper' && <span className="w-1.5 h-3.5 rounded-sm bg-current" />}
                  {section.sectionTitle}
                </h3>
                <ul className="space-y-3 pl-1">
                  {section.items.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-sm leading-relaxed flex items-start gap-2.5">
                      {theme.id === 'newspaper' ? (
                        <span className="mt-1.5 font-bold text-[#1B1917] shrink-0">▪</span>
                      ) : (
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0" />
                      )}
                      <span className={theme.textSecondaryClass}>
                        {bullet.split(/(\*\*[^*]+\*\*|https?:\/\/[^\s]+)/g).map((part, pIdx) => {
                          if (/^https?:\/\//.test(part)) {
                            return (
                              <a
                                key={pIdx}
                                href={cleanXhsUrl(part)}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="underline break-all text-sky-600 dark:text-sky-400"
                              >
                                打开原文
                              </a>
                            );
                          }
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return (
                              <strong key={pIdx} className={`font-bold ${theme.textPrimaryClass}`}>
                                {part.slice(2, -2)}
                              </strong>
                            );
                          }
                          return <span key={pIdx}>{part}</span>;
                        })}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quick checklist (interactive and fun) */}
          {item.category !== 'photo' && item.quickChecklist && item.quickChecklist.length > 0 && (
            <div className={`p-5 ${
              theme.id === 'cyber' 
                ? 'border border-[#00F5FF]/30 bg-[#00F5FF]/5 rounded-xl' 
                : theme.id === 'frosted'
                  ? 'border border-white/10 bg-purple-950/20 rounded-2xl'
                  : theme.id === 'newspaper'
                    ? 'border-2 border-[#1B1917] bg-[#FCFBF7] rounded-none'
                    : 'bg-emerald-500/5 border border-emerald-500/10 dark:bg-emerald-500/5 rounded-2xl'
            } space-y-3`}>
              <h4 className={`text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 ${
                theme.id === 'newspaper' ? 'text-[#1B1917] font-black font-serif' : 'text-emerald-600 dark:text-emerald-400'
              }`}>
                  {item.category === 'food' ? '🍴 到店前核对' : item.category === 'experience' ? '🎒 体验前核对' : item.category === 'history' ? '📖 知识预习清单' : (item.category as string) === 'photo' ? '📷 拍摄前准备' : '🧳 自驾行前准备勾选'}
              </h4>
              <div className="space-y-2.5">
                {item.quickChecklist.map((check, cIdx) => {
                  const isChecked = !!checkedItems[cIdx];
                  return (
                    <button
                      key={cIdx}
                      onClick={() => toggleCheck(cIdx)}
                      className="w-full text-left flex items-center gap-3 py-1 cursor-pointer select-none group"
                    >
                      {isChecked ? (
                        theme.id === 'newspaper' ? (
                          <span className="w-5 h-5 border-2 border-[#1B1917] bg-[#1B1917] text-white flex items-center justify-center font-bold text-xs shrink-0 rounded-none">✓</span>
                        ) : (
                          <CheckSquare className="w-5 h-5 text-emerald-500 shrink-0" />
                        )
                      ) : (
                        theme.id === 'newspaper' ? (
                          <span className="w-5 h-5 border-2 border-[#1B1917] bg-transparent shrink-0 rounded-none" />
                        ) : (
                          <Square className="w-5 h-5 text-stone-400 group-hover:text-stone-600 dark:text-stone-500 shrink-0" />
                        )
                      )}
                      <span className={`text-xs transition-all ${
                        isChecked 
                          ? 'line-through text-stone-400 dark:text-stone-500 font-medium' 
                          : 'text-stone-700 dark:text-stone-200 font-semibold'
                      }`}>
                        {check}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {item.sources && item.sources.length > 0 && (
            <div className="space-y-2">
              <h3 className={`text-sm font-bold tracking-wide flex items-center gap-2 ${
                theme.id === 'cyber'
                  ? 'text-[#00F5FF] font-black'
                  : theme.id === 'newspaper'
                    ? 'text-[#1B1917] font-black font-serif border-b-2 border-[#1B1917] pb-1 w-full'
                    : theme.accentColor
              }`}>
                {theme.id !== 'newspaper' && <span className="w-1.5 h-3.5 rounded-sm bg-current" />}
                信息源
              </h3>
              <ul className="space-y-1 pl-1">
                {item.sources.map((source, sIdx) => (
                  <li key={`${source.url}-${sIdx}`}>
                    <a
                      href={cleanXhsUrl(source.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`min-h-11 py-2 -mx-1 px-1 rounded-lg text-sm leading-relaxed flex items-start gap-2.5 touch-manipulation ${
                        theme.id === 'cyber'
                          ? 'text-[#00F5FF]'
                          : theme.id === 'newspaper'
                            ? 'text-[#1B1917]'
                            : 'text-sky-600 dark:text-sky-400'
                      }`}
                    >
                      {theme.id === 'newspaper' ? (
                        <span className="mt-1.5 font-bold text-[#1B1917] shrink-0">▪</span>
                      ) : (
                        <ExternalLink className="w-3.5 h-3.5 mt-1.5 text-stone-400 shrink-0" />
                      )}
                      <span className="min-w-0 break-words">
                        <span className={`text-[11px] font-bold mr-1.5 ${theme.textSecondaryClass}`}>
                          {sourceOriginLabel(source.url)}
                        </span>
                        <span className="underline underline-offset-2">
                          {source.title}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Fun Fact / Trivia block */}
          {item.category !== 'photo' && item.funFact && (
            <div className={`p-4 ${
              theme.id === 'cyber' 
                ? 'border border-[#FF007F]/30 bg-[#FF007F]/5 rounded-xl shadow-[0_0_8px_rgba(255,0,127,0.1)]' 
                : theme.id === 'newspaper'
                  ? 'border-2 border-[#1B1917] bg-[#FCFBF7] rounded-none'
                  : 'bg-amber-500/5 dark:bg-amber-500/5 rounded-2xl border border-amber-500/10'
            } flex gap-3`}>
              <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h5 className={`text-xs font-bold mb-1 ${theme.id === 'newspaper' ? 'text-[#1B1917] font-black font-serif' : 'text-amber-700 dark:text-amber-400'}`}>
                  你知道吗？(Nordic Trivia)
                </h5>
                <p className="text-xs leading-relaxed text-stone-600 dark:text-stone-300">
                  {item.funFact}
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
