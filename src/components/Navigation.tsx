import { useState } from 'react';
import { Home, Compass, PlusSquare, User, Search, Heart, Bell, Menu, LogOut, Settings, Shirt, TrendingUp, Bookmark, Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface NavigationProps {
  currentView: string;
  onNavigate: (view: 'home' | 'explore' | 'upload' | 'profile' | 'ranking' | 'notifications' | 'saved' | 'wardrobe') => void;
  onLogout: () => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export function Navigation({ currentView, onNavigate, onLogout, isDarkMode = false, onToggleDarkMode }: NavigationProps) {
  
  const mainNavItems = [
    { id: 'home', icon: Home, label: '主頁' },
    { id: 'explore', icon: Compass, label: '探索靈感' },
    { id: 'ranking', icon: TrendingUp, label: '排行榜' },
  ];

  const personalNavItems = [
    { id: 'notifications', icon: Bell, label: '通知' },
    { id: 'saved', icon: Bookmark, label: '我的收藏' },
    { id: 'wardrobe', icon: Shirt, label: '我的衣櫃' },
    { id: 'profile', icon: User, label: '個人頁面' },
  ];

  const handleNavClick = (id: string) => {
    if (['home', 'explore', 'upload', 'profile', 'ranking', 'notifications', 'saved', 'wardrobe'].includes(id)) {
      onNavigate(id as any);
    }
  };

  return (
    <>
      {/* Desktop Sidebar (Liquid Glass Capsule) */}
      <div className={`hidden md:flex flex-col w-[72px] fixed left-6 top-6 bottom-6 z-50 rounded-full transition-all duration-500 items-center py-8 backdrop-blur-[40px] border-[1.5px] overflow-hidden
        ${isDarkMode 
          ? 'border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_0_20px_rgba(0,0,0,0.2)]' 
          : 'border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_0_20px_rgba(255,255,255,0.3)]'
        }
      `}>
        
        {/* Background Image Texture */}
        <img 
          src="https://images.unsplash.com/photo-1658604663578-04634f4cb897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcm9zdGVkJTIwZ2xhc3MlMjB0ZXh0dXJlJTIwYWJzdHJhY3QlMjB3aGl0ZXxlbnwxfHx8fDE3NjQyNTgzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isDarkMode ? 'opacity-10 mix-blend-overlay' : 'opacity-30'}`}
          alt=""
        />
        
        {/* Glass Tint Overlay */}
        <div className={`absolute inset-0 transition-colors duration-500 ${isDarkMode ? 'bg-slate-900/80' : 'bg-white/60'}`} />
        
        {/* Top Highlight Reflection (Glass effect) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.8)] z-10" />

        {/* Logo */}
        <div className="mb-8 shrink-0 relative group cursor-pointer z-10" onClick={() => handleNavClick('home')}>
           <div className="w-10 h-10 flex items-center justify-center">
              <div className="relative w-6 h-6 flex items-center justify-center">
                 <div className="absolute inset-0 bg-slate-800 rotate-45 transform scale-[0.2] group-hover:scale-[0.8] transition-transform duration-500 rounded-sm" />
                 <Shirt className="w-5 h-5 text-slate-800 relative z-10" strokeWidth={2.5} />
              </div>
           </div>
        </div>

        {/* Navigation Items Container */}
        <div className="flex-1 flex flex-col items-center w-full gap-5 overflow-y-auto overflow-x-hidden scrollbar-hide px-2 relative z-10">
           
           {/* Main Items */}
           <div className="flex flex-col gap-4 items-center w-full">
              {mainNavItems.map((item) => {
                 const Icon = item.icon;
                 const isActive = currentView === item.id;
                 return (
                   <button
                     key={item.id}
                     onClick={() => handleNavClick(item.id)}
                     className={`w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-200 relative group/btn
                       ${isActive 
                         ? 'bg-white text-slate-900 shadow-[0_4px_12px_rgba(0,0,0,0.08)]' 
                         : 'text-slate-400 hover:text-slate-700 hover:bg-white/30'
                       }
                     `}
                     title={item.label}
                   >
                     <Icon className="w-5 h-5" strokeWidth={isActive ? 2 : 2} />
                   </button>
                 )
              })}
           </div>

           {/* Upload Action */}
           <div className="w-full flex justify-center py-2">
             <button
                onClick={() => onNavigate('upload')}
                className="w-11 h-11 flex items-center justify-center rounded-xl border-[1.5px] border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white transition-colors duration-200 group shadow-sm"
                title="建立貼文"
             >
                <PlusSquare className="w-5 h-5" strokeWidth={2} />
             </button>
           </div>



           {/* Personal Items */}
           <div className="flex flex-col gap-4 items-center w-full pb-4">
              {personalNavItems.map((item) => {
                 const Icon = item.icon;
                 const isActive = currentView === item.id;
                 return (
                   <button
                     key={item.id}
                     onClick={() => handleNavClick(item.id)}
                     className={`w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-200 relative group/btn
                       ${isActive 
                         ? 'bg-white text-slate-900 shadow-[0_4px_12px_rgba(0,0,0,0.08)]' 
                         : 'text-slate-400 hover:text-slate-700 hover:bg-white/30'
                       }
                     `}
                     title={item.label}
                   >
                     <Icon className="w-5 h-5" strokeWidth={isActive ? 2 : 2} />
                   </button>
                 )
              })}
           </div>
        </div>

        {/* Bottom User Avatar */}
        <div className="mt-auto pt-4 shrink-0 flex flex-col items-center gap-4 relative z-10">
            <button
              onClick={onToggleDarkMode}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-500 border ${
                isDarkMode 
                  ? 'bg-slate-950 border-slate-800 text-white shadow-lg shadow-slate-900/50' 
                  : 'bg-white border-slate-200 text-yellow-500 shadow-lg shadow-yellow-500/20'
              }`}
              title={isDarkMode ? "切換至日間模式" : "切換至夜間模式"}
            >
               {isDarkMode ? <Moon className="w-5 h-5" fill="currentColor" /> : <Sun className="w-5 h-5" fill="currentColor" />}
            </button>

            <button
              onClick={onLogout}
              className="text-slate-400 hover:text-red-500 transition-colors p-2"
              title="登出"
            >
               <LogOut className="w-5 h-5" />
            </button>

           <Avatar className="w-10 h-10 border-2 border-white shadow-md cursor-pointer ring-1 ring-slate-100" onClick={() => onNavigate('profile')}>
             <AvatarImage src="" />
             <AvatarFallback className="bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 text-xs font-bold">ME</AvatarFallback>
           </Avatar>
        </div>

      </div>

      {/* Mobile Bottom Bar (Clean White Glass) */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 bg-white/80 backdrop-blur-xl border border-white/40 z-50 px-2 py-2 pb-safe shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-full">
        <div className="flex justify-around items-center">
          {[
             { id: 'home', icon: Home },
             { id: 'explore', icon: Compass },
             { id: 'upload', icon: PlusSquare, isSpecial: true },
             { id: 'notifications', icon: Heart },
             { id: 'profile', icon: User },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            
            if (item.isSpecial) {
               return (
                 <button
                   key={item.id}
                   onClick={() => onNavigate(item.id as any)}
                   className="bg-slate-900 text-white p-4 rounded-full shadow-lg shadow-slate-400/30 hover:scale-105 transition-transform"
                 >
                   <Icon className="w-5 h-5" />
                 </button>
               );
            }

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id as any)}
                className={`p-3 rounded-full transition-all duration-300 ${isActive ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}`}
              >
                <Icon 
                  className={`w-6 h-6 ${isActive ? 'fill-current' : ''}`} 
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Spacer for Content on Desktop */}
      <div className="hidden md:block w-[120px] flex-shrink-0" />
    </>
  );
}
