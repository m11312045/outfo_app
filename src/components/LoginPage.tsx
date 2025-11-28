import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Shirt, Mail, User, UserPlus, Loader2 } from 'lucide-react';
import { Separator } from './ui/separator';
import { supabase } from "../lib/supabase";
import { toast } from 'sonner';

interface LoginPageProps {
  onLogin: () => void;
}

const styleOptions = [
  '休閒風', '街頭風', '優雅風', '運動風', 
  '復古風', '簡約風', '韓系', '日系'
];

const brandOptions = [
  'Zara', 'H&M', 'Uniqlo', 'Nike', 
  'Adidas', 'Muji', 'COS', 'Mango'
];

const recommendedCreators = [
  { id: 1, name: '時尚小天后', username: '@fashionqueen', followers: '25.6K', bio: '分享日常穿搭與時尚靈感' },
  { id: 2, name: '穿搭日記', username: '@outfitdiary', followers: '18.3K', bio: '簡約風格愛好者' },
  { id: 3, name: 'Style Master', username: '@stylemaster', followers: '15.7K', bio: '街頭風穿搭達人' },
  { id: 4, name: '搭配達人', username: '@stylepro', followers: '12.4K', bio: '韓系穿搭分享' },
];

export function LoginPage({ onLogin }: LoginPageProps) {
  const [registerStep, setRegisterStep] = useState<'form' | 'preferences' | 'brands' | 'creators'>('form');
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [followedCreators, setFollowedCreators] = useState<Set<number>>(new Set());
  
  const [loading, setLoading] = useState(false);
  
  // Login Form
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register Form
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regUsername, setRegUsername] = useState('');

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: loginEmail,
        password: loginPassword
      });
      if (error) throw error;
      onLogin();
      toast.success('Logged in successfully');
    } catch (error: any) {
      toast.error(error.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // 1) 建立帳號
      const { data, error } = await supabase.auth.signUp({
        email: regEmail,
        password: regPassword,
        options: {
          data: {
            full_name: regName,
            username: regUsername,
          },
        },
      });

      if (error) throw error;

      // 2) 如果專案「不需要信箱驗證」，這裡通常會直接有 session
      if (!data.session) {
        // 如果你的專案有開啟 email confirmation，就提醒一下
        toast.success("註冊成功，請到信箱收信完成驗證再登入");
        return;
      }

      toast.success("Account created!");

      // 3) 進入下一步（喜好風格）
      setRegisterStep("preferences");
    } catch (error: any) {
      toast.error(error.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleStyleToggle = (style: string) => {
    setSelectedStyles(prev => 
      prev.includes(style) 
        ? prev.filter(s => s !== style)
        : [...prev, style]
    );
  };

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleCreatorToggle = (creatorId: number) => {
    setFollowedCreators(prev => {
      const newSet = new Set(prev);
      if (newSet.has(creatorId)) {
        newSet.delete(creatorId);
      } else {
        newSet.add(creatorId);
      }
      return newSet;
    });
  };

  const handleStylesNext = () => {
    setRegisterStep('brands');
  };

  const handleBrandsNext = () => {
    setRegisterStep('creators');
  };

  const handleCompleteRegistration = () => {
    onLogin(); // Already logged in at step 1, just navigate
  };

  const handleThirdPartyLogin = async (provider: 'google' | 'facebook') => {
    if (provider === 'facebook') {
        toast.error('Facebook login not configured');
        return;
    }
    try {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: { redirectTo: window.location.origin }
        });
        if (error) throw error;
    } catch (error: any) {
        toast.error('Google login failed: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50 flex items-center justify-center p-4">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Primary Colors Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[100px] mix-blend-multiply animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] mix-blend-multiply animate-pulse delay-700" />
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[100px] mix-blend-multiply animate-pulse delay-1000" />
        
        {/* Liquid Glass Texture Overlay */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[80px]" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-2xl mb-4">
            <Shirt className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-purple-900 mb-2">outfo</h1>
          <p className="text-gray-600">記錄並分享您的時尚穿搭</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">登入</TabsTrigger>
            <TabsTrigger value="register">註冊</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>歡迎回來</CardTitle>
                <CardDescription>登入您的帳號繼續探索穿搭靈感</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">電子郵件</Label>
                    <Input 
                      id="login-email" 
                      type="email" 
                      placeholder="your@email.com"
                      value={loginEmail}
                      onChange={e => setLoginEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">密碼</Label>
                    <Input 
                      id="login-password" 
                      type="password"
                      value={loginPassword}
                      onChange={e => setLoginPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                    登入
                  </Button>
                </form>

                <div className="relative">
                  <Separator />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-500">
                    或
                  </span>
                </div>

                {/* 第三方登入 */}
                <div className="space-y-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => handleThirdPartyLogin('google')}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    使用 Google 登入
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => handleThirdPartyLogin('facebook')}
                  >
                    使用 Facebook 登入
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>
                  {registerStep === 'form' && '建立帳號'}
                  {registerStep === 'preferences' && '選擇喜好風格'}
                  {registerStep === 'brands' && '選擇喜好品牌'}
                  {registerStep === 'creators' && '追蹤推薦創作者'}
                </CardTitle>
                <CardDescription>
                  {registerStep === 'form' && '填寫資料開始您的穿搭之旅'}
                  {registerStep === 'preferences' && '選擇您喜歡的穿搭風格（可多選）'}
                  {registerStep === 'brands' && '選擇您喜歡的品牌（可多選）'}
                  {registerStep === 'creators' && '追蹤創作者以獲得更多靈感'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {registerStep === 'form' && (
                  <div className="space-y-4">
                    <form onSubmit={handleRegisterSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="register-name">姓名</Label>
                        <Input 
                          id="register-name" 
                          placeholder="您的名字"
                          value={regName}
                          onChange={e => setRegName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="register-email">電子郵件</Label>
                        <Input 
                          id="register-email" 
                          type="email" 
                          placeholder="your@email.com"
                          value={regEmail}
                          onChange={e => setRegEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="register-password">密碼</Label>
                        <Input 
                          id="register-password" 
                          type="password"
                          value={regPassword}
                          onChange={e => setRegPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="register-username">使用者名稱</Label>
                        <Input 
                          id="register-username" 
                          placeholder="@username"
                          value={regUsername}
                          onChange={e => setRegUsername(e.target.value)}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full" disabled={loading}>
                        {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                        下一步
                      </Button>
                    </form>

                    <div className="relative">
                      <Separator />
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-500">
                        或
                      </span>
                    </div>

                    {/* 第三方註冊 */}
                    <div className="space-y-2">
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={() => handleThirdPartyLogin('google')}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        使用 Google 註冊
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={() => handleThirdPartyLogin('facebook')}
                      >
                        使用 Facebook 註冊
                      </Button>
                    </div>
                  </div>
                )}

                {registerStep === 'preferences' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      {styleOptions.map((style) => (
                        <button
                          key={style}
                          type="button"
                          onClick={() => handleStyleToggle(style)}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            selectedStyles.includes(style)
                              ? 'border-purple-600 bg-purple-50'
                              : 'border-gray-200 hover:border-purple-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{style}</span>
                            {selectedStyles.includes(style) && (
                              <div className="w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">✓</span>
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                    <Button 
                      onClick={handleStylesNext}
                      disabled={selectedStyles.length === 0}
                      className="w-full"
                    >
                      下一步
                    </Button>
                  </div>
                )}

                {registerStep === 'brands' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      {brandOptions.map((brand) => (
                        <button
                          key={brand}
                          type="button"
                          onClick={() => handleBrandToggle(brand)}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            selectedBrands.includes(brand)
                              ? 'border-purple-600 bg-purple-50'
                              : 'border-gray-200 hover:border-purple-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{brand}</span>
                            {selectedBrands.includes(brand) && (
                              <div className="w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">✓</span>
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button 
                        variant="outline"
                        onClick={() => setRegisterStep('preferences')}
                        className="flex-1"
                      >
                        上一步
                      </Button>
                      <Button 
                        onClick={handleBrandsNext}
                        disabled={selectedBrands.length === 0}
                        className="flex-1"
                      >
                        下一步
                      </Button>
                    </div>
                  </div>
                )}

                {registerStep === 'creators' && (
                  <div className="space-y-4">
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {recommendedCreators.map((creator) => (
                        <div
                          key={creator.id}
                          className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="w-6 h-6 text-purple-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-gray-900">{creator.name}</div>
                            <div className="text-gray-500">{creator.username}</div>
                            <div className="text-gray-600 truncate">{creator.bio}</div>
                          </div>
                          <Button
                            size="sm"
                            variant={followedCreators.has(creator.id) ? 'outline' : 'default'}
                            onClick={() => handleCreatorToggle(creator.id)}
                          >
                            <UserPlus className="w-4 h-4 mr-1" />
                            {followedCreators.has(creator.id) ? '已追蹤' : '追蹤'}
                          </Button>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button 
                        variant="outline"
                        onClick={() => setRegisterStep('brands')}
                        className="flex-1"
                      >
                        上一步
                      </Button>
                      <Button 
                        onClick={handleCompleteRegistration}
                        className="flex-1"
                      >
                        完成註冊
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
