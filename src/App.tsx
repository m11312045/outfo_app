import { useState, useEffect } from "react";
import { LoginPage } from "./components/LoginPage";
import { HomePage } from "./components/HomePage";
import { ExplorePage } from "./components/ExplorePage";
import { UploadPage } from "./components/UploadPage";
import { ProfilePage } from "./components/ProfilePage";
import { EditProfilePage } from "./components/EditProfilePage";
import { RankingPage } from "./components/RankingPage";
import { NotificationsPage } from "./components/NotificationsPage";
import { SavedPage } from "./components/SavedPage";
import { WardrobePage } from "./components/WardrobePage";
import { Navigation } from "./components/Navigation";
import { ErrorBoundary } from "./components/ErrorBoundary";

// import { supabase } from './utils/supabase/client'; //Figma-to-Code 寫法
import { supabase } from "./lib/supabase";

// import { Toaster } from 'sonner@2.0.3'; //Figma-to-Code 寫法
import { Toaster } from "sonner";

// import backgroundImage from 'figma:asset/5255cd25c8cd0bc5ec323bd31f633fef995255b2.png'; //Figma-to-Code 寫法
import bg from "./assets/5255cd25c8cd0bc5ec323bd31f633fef995255b2.png";

type View = | "login" | "home" | "explore" | "upload" | "profile" | "editProfile" | "ranking" | "notifications" | "saved" | "wardrobe";

function App() {
  const [currentView, setCurrentView] = useState<View>("login");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [session, setSession] = useState<any>(null);

  // Supabase session listener
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        setCurrentView("home");
      }
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        if (session) {
          setCurrentView("home");
        } else {
          setCurrentView("login");
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setCurrentView("login");
  };

  // 🔍 每次 render 都在 Console 打 log
  console.log("App render", { currentView, isDarkMode, session });

  return (
    <div
      className={`flex h-screen relative overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={bg} className="w-full h-full object-cover" />
        <div
          className={`absolute inset-0 ${
            isDarkMode ? "bg-black/80" : "bg-white/20"
          }`}
        />
      </div>

      <div className="relative z-10 flex w-full h-full">
        <Navigation
          currentView={currentView}
          onNavigate={setCurrentView}
          onLogout={handleLogout}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode((v) => !v)}
        />

        {/* 用 ErrorBoundary 包 main，若有錯至少會顯示 fallback */}
        <ErrorBoundary>
          <main className="flex-1 overflow-auto">
            {currentView === "login" && (
              <LoginPage onLogin={() => setCurrentView("home")} />
            )}
            {currentView === "home" && (
              <HomePage onNavigate={setCurrentView} />
            )}
            {currentView === "explore" && <ExplorePage />}
            {currentView === "upload" && (
              <UploadPage onNavigate={setCurrentView} />
            )}
            {currentView === "ranking" && (
              <RankingPage onNavigate={setCurrentView} />
            )}
            {currentView === "notifications" && <NotificationsPage />}
            {currentView === "saved" && <SavedPage />}
            {currentView === "wardrobe" && <WardrobePage />}
            {currentView === "profile" && (
              <ProfilePage
                onNavigate={setCurrentView}
                onEditProfile={() => setCurrentView("editProfile")}
              />
            )}
            {currentView === "editProfile" && (
              <EditProfilePage
                onSave={() => setCurrentView("profile")}
                onCancel={() => setCurrentView("profile")}
              />
            )}
          </main>
        </ErrorBoundary>
      </div>
      <Toaster richColors position="top-right" />
    </div>
  );
}

export default App;
