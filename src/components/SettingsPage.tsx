import { useState } from 'react';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from './ui/dialog';
import { ProfessionalAccountSetup } from './ProfessionalAccountSetup';
import { 
  ChevronLeft, 
  ChevronRight,
  User,
  Lock,
  Bell,
  Shield,
  Eye,
  EyeOff,
  Globe,
  Heart,
  MessageCircle,
  UserPlus,
  Download,
  Trash2,
  LogOut,
  Smartphone,
  Mail,
  Key,
  AlertTriangle,
  Check,
  Info,
  Briefcase,
  TrendingUp
} from 'lucide-react';

interface SettingsPageProps {
  onBack: () => void;
}

type SettingView = 
  | 'main'
  | 'account'
  | 'privacy'
  | 'notifications'
  | 'security'
  | 'data'
  | 'blocked'
  | 'linked-accounts';

export function SettingsPage({ onBack }: SettingsPageProps) {
  const [currentView, setCurrentView] = useState<SettingView>('main');
  const [showProfessionalSetup, setShowProfessionalSetup] = useState(false);
  const [settings, setSettings] = useState({
    // 隱私設定
    isPrivateAccount: false,
    showActivityStatus: true,
    allowComments: true,
    allowMessageRequests: true,
    allowTagging: true,
    showProfileViews: true,
    
    // 通知設定
    pushNotifications: true,
    likeNotifications: true,
    commentNotifications: true,
    followNotifications: true,
    messageNotifications: true,
    emailNotifications: true,
    
    // 安全設定
    twoFactorAuth: false,
    loginAlerts: true
  });

  const updateSetting = (key: string, value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  // 顯示專業帳號設定流程
  if (showProfessionalSetup) {
    return (
      <ProfessionalAccountSetup 
        onBack={() => setShowProfessionalSetup(false)}
        onComplete={() => {
          setShowProfessionalSetup(false);
          // 這裡可以更新帳號狀態為專業帳號
        }}
      />
    );
  }

  const renderHeader = (title: string) => (
    <div className="sticky top-0 bg-white border-b px-4 py-3 z-10">
      <div className="flex items-center gap-3">
        <button onClick={() => setCurrentView('main')}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl text-gray-900">{title}</h1>
      </div>
    </div>
  );

  // 主設定頁面
  if (currentView === 'main') {
    return (
      <div className="max-w-2xl mx-auto bg-white min-h-screen">
        <div className="sticky top-0 bg-white border-b px-4 py-3 z-10">
          <div className="flex items-center gap-3">
            <button onClick={onBack}>
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl text-gray-900">設定</h1>
          </div>
        </div>

        <div className="p-4 space-y-6">
          {/* 帳號設定 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                帳號設定
              </CardTitle>
              <CardDescription>管理您的帳號資訊</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <button 
                onClick={() => setCurrentView('account')}
                className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
              >
                <span>個人資料</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <button 
                onClick={() => setShowProfessionalSetup(true)}
                className="w-full flex items-center justify-between p-3 hover:bg-purple-50 rounded-lg border border-purple-200"
              >
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-purple-600" />
                  <div className="text-left">
                    <div className="text-gray-900">切換為專業帳號</div>
                    <div className="text-xs text-purple-600">解鎖更多功能和洞察</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-purple-400" />
              </button>
              <button 
                onClick={() => setCurrentView('linked-accounts')}
                className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
              >
                <span>連結帳號</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </CardContent>
          </Card>

          {/* 隱私與安全 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                隱私與安全
              </CardTitle>
              <CardDescription>控制誰可以看到您的內容</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <button 
                onClick={() => setCurrentView('privacy')}
                className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
              >
                <span>隱私設定</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <button 
                onClick={() => setCurrentView('security')}
                className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
              >
                <span>安全設定</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <button 
                onClick={() => setCurrentView('blocked')}
                className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
              >
                <span>封鎖的帳號</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </CardContent>
          </Card>

          {/* 通知設定 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                通知設定
              </CardTitle>
              <CardDescription>管理您收到的通知</CardDescription>
            </CardHeader>
            <CardContent>
              <button 
                onClick={() => setCurrentView('notifications')}
                className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
              >
                <span>通知偏好</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </CardContent>
          </Card>

          {/* 資料管理 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                資料管理
              </CardTitle>
              <CardDescription>下載或刪除您的資料</CardDescription>
            </CardHeader>
            <CardContent>
              <button 
                onClick={() => setCurrentView('data')}
                className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
              >
                <span>資料與隱私</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </CardContent>
          </Card>

          {/* 登出 */}
          <Card>
            <CardContent className="pt-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full text-red-600 border-red-200 hover:bg-red-50">
                    <LogOut className="w-4 h-4 mr-2" />
                    登出
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>確定要登出嗎？</DialogTitle>
                    <DialogDescription>
                      您可以隨時重新登入
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline">取消</Button>
                    <Button variant="destructive">登出</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // 帳號設定頁面
  if (currentView === 'account') {
    return (
      <div className="max-w-2xl mx-auto bg-white min-h-screen">
        {renderHeader('帳號設定')}
        <div className="p-4 space-y-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">姓名</label>
              <input
                type="text"
                defaultValue="黃彥凱 KAI"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">用戶名稱</label>
              <input
                type="text"
                defaultValue="kai_h1130"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">個人簡介</label>
              <textarea
                defaultValue="分享日常穿搭靈感 ✨ | 時尚愛好者 | 追求簡約舒適風格"
                className="w-full px-4 py-2 border rounded-lg h-24"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">電子郵件</label>
              <input
                type="email"
                defaultValue="kai@example.com"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">電話號碼</label>
              <input
                type="tel"
                defaultValue="+886 912 345 678"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-sm text-gray-600 mb-2">性別</label>
                <select className="w-full px-4 py-2 border rounded-lg">
                  <option>男</option>
                  <option>女</option>
                  <option>其他</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">身高 (cm)</label>
                <input
                  type="number"
                  defaultValue="175"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">體重 (kg)</label>
                <input
                  type="number"
                  defaultValue="68"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            </div>
          </div>
          <Button className="w-full">儲存變更</Button>
        </div>
      </div>
    );
  }

  // 隱私設定頁面
  if (currentView === 'privacy') {
    return (
      <div className="max-w-2xl mx-auto bg-white min-h-screen">
        {renderHeader('隱私設定')}
        <div className="p-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>帳號隱私</CardTitle>
              <CardDescription>控制誰可以看到您的內容</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {settings.isPrivateAccount ? <Lock className="w-4 h-4" /> : <Globe className="w-4 h-4" />}
                    <span className="text-gray-900">私密帳號</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    開啟後，只有您核准的粉絲才能看到您的內容
                  </p>
                </div>
                <Switch
                  checked={settings.isPrivateAccount}
                  onCheckedChange={(checked) => updateSetting('isPrivateAccount', checked)}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>活動狀態</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <span className="text-gray-900">顯示活動狀態</span>
                  <p className="text-sm text-gray-500 mt-1">
                    讓其他人看到您的在線狀態
                  </p>
                </div>
                <Switch
                  checked={settings.showActivityStatus}
                  onCheckedChange={(checked) => updateSetting('showActivityStatus', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <span className="text-gray-900">顯示個人檔案瀏覽次數</span>
                  <p className="text-sm text-gray-500 mt-1">
                    在個人檔案中顯示瀏覽次數
                  </p>
                </div>
                <Switch
                  checked={settings.showProfileViews}
                  onCheckedChange={(checked) => updateSetting('showProfileViews', checked)}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>互動設定</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-gray-900">允許留言</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    其他人可以在您的貼文下留言
                  </p>
                </div>
                <Switch
                  checked={settings.allowComments}
                  onCheckedChange={(checked) => updateSetting('allowComments', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span className="text-gray-900">訊息請求</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    允許非粉絲傳送訊息給您
                  </p>
                </div>
                <Switch
                  checked={settings.allowMessageRequests}
                  onCheckedChange={(checked) => updateSetting('allowMessageRequests', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <span className="text-gray-900">允許標記</span>
                  <p className="text-sm text-gray-500 mt-1">
                    其他人可以在貼文中標記您
                  </p>
                </div>
                <Switch
                  checked={settings.allowTagging}
                  onCheckedChange={(checked) => updateSetting('allowTagging', checked)}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // 通知設定頁面
  if (currentView === 'notifications') {
    return (
      <div className="max-w-2xl mx-auto bg-white min-h-screen">
        {renderHeader('通知設定')}
        <div className="p-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>推播通知</CardTitle>
              <CardDescription>管理行動裝置上的推播通知</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <span className="text-gray-900">啟用推播通知</span>
                  <p className="text-sm text-gray-500 mt-1">
                    接收應用程式的推播通知
                  </p>
                </div>
                <Switch
                  checked={settings.pushNotifications}
                  onCheckedChange={(checked) => updateSetting('pushNotifications', checked)}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>互動通知</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    <span className="text-gray-900">按讚</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    有人喜歡您的貼文時通知您
                  </p>
                </div>
                <Switch
                  checked={settings.likeNotifications}
                  onCheckedChange={(checked) => updateSetting('likeNotifications', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-gray-900">留言</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    有人留言時通知您
                  </p>
                </div>
                <Switch
                  checked={settings.commentNotifications}
                  onCheckedChange={(checked) => updateSetting('commentNotifications', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <UserPlus className="w-4 h-4" />
                    <span className="text-gray-900">追蹤</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    有新的粉絲時通知您
                  </p>
                </div>
                <Switch
                  checked={settings.followNotifications}
                  onCheckedChange={(checked) => updateSetting('followNotifications', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span className="text-gray-900">訊息</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    收到新訊息時通知您
                  </p>
                </div>
                <Switch
                  checked={settings.messageNotifications}
                  onCheckedChange={(checked) => updateSetting('messageNotifications', checked)}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>電子郵件通知</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <span className="text-gray-900">接收電子郵件通知</span>
                  <p className="text-sm text-gray-500 mt-1">
                    定期接收活動摘要
                  </p>
                </div>
                <Switch
                  checked={settings.emailNotifications}
                  onCheckedChange={(checked) => updateSetting('emailNotifications', checked)}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // 安全設定頁面
  if (currentView === 'security') {
    return (
      <div className="max-w-2xl mx-auto bg-white min-h-screen">
        {renderHeader('安全設定')}
        <div className="p-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>密碼</CardTitle>
              <CardDescription>定期更換密碼以保護您的帳號</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                <Key className="w-4 h-4 mr-2" />
                變更密碼
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>雙重驗證</CardTitle>
              <CardDescription>為您的帳號添加額外的安全層</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span className="text-gray-900">啟用雙重驗證</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    登入時需要額外的驗證碼
                  </p>
                </div>
                <Switch
                  checked={settings.twoFactorAuth}
                  onCheckedChange={(checked) => updateSetting('twoFactorAuth', checked)}
                />
              </div>
              {settings.twoFactorAuth && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-green-900">雙重驗證已啟用</p>
                    <p className="text-xs text-green-700 mt-1">
                      您的帳號現在受到額外保護
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>登入警報</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <span className="text-gray-900">異常登入通知</span>
                  <p className="text-sm text-gray-500 mt-1">
                    當有新裝置登入時通知您
                  </p>
                </div>
                <Switch
                  checked={settings.loginAlerts}
                  onCheckedChange={(checked) => updateSetting('loginAlerts', checked)}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>登入活動</CardTitle>
              <CardDescription>查看您的帳號登入記錄</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start justify-between py-3 border-b">
                <div className="flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-gray-900">iPhone 15 Pro</p>
                    <p className="text-sm text-gray-500">台北市 • 2 小時前</p>
                    <p className="text-xs text-green-600 mt-1">目前裝置</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between py-3 border-b">
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-gray-900">Chrome (桌面版)</p>
                    <p className="text-sm text-gray-500">台北市 • 昨天</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-red-600">
                  登出
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // 資料管理頁面
  if (currentView === 'data') {
    return (
      <div className="max-w-2xl mx-auto bg-white min-h-screen">
        {renderHeader('資料管理')}
        <div className="p-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>下載您的資料</CardTitle>
              <CardDescription>
                下載您在平台上的所有資料副本
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                請求下載資料
              </Button>
              <p className="text-xs text-gray-500 mt-3">
                我們會在 48 小時內準備好您的資料，並透過電子郵件通知您
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>刪除帳號</CardTitle>
              <CardDescription>
                永久刪除您的帳號和所有資料
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full text-red-600 border-red-200 hover:bg-red-50">
                    <Trash2 className="w-4 h-4 mr-2" />
                    刪除我的帳號
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-red-600">
                      <AlertTriangle className="w-5 h-5" />
                      確定要刪除帳號嗎？
                    </DialogTitle>
                    <DialogDescription>
                      <div className="space-y-3 mt-4">
                        <p>刪除帳號後：</p>
                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                          <li>您的個人檔案將被永久刪除</li>
                          <li>所有貼文和留言將被移除</li>
                          <li>您的粉絲和追蹤資料將消失</li>
                          <li>此操作無法復原</li>
                        </ul>
                        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-700">
                            如果您只是想休息一下，可以考慮停用帳號而不是刪除
                          </p>
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="flex-col sm:flex-col gap-2">
                    <Button variant="outline" className="w-full">取消</Button>
                    <Button variant="destructive" className="w-full">
                      確定刪除帳號
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>關於您的資料</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-700">貼文數量</span>
                <span className="text-gray-900">89 則</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-700">留言數量</span>
                <span className="text-gray-900">1,234 則</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-700">衣櫃單品</span>
                <span className="text-gray-900">156 件</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-700">帳號建立時間</span>
                <span className="text-gray-900">2023 年 3 月</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // 封鎖的帳號頁面
  if (currentView === 'blocked') {
    return (
      <div className="max-w-2xl mx-auto bg-white min-h-screen">
        {renderHeader('封鎖的帳號')}
        <div className="p-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <Shield className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                <p className="text-gray-500">您目前沒有封鎖任何帳號</p>
                <p className="text-sm text-gray-400 mt-2">
                  封鎖的帳號無法看到您的內容或與您互動
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // 連結帳號頁面
  if (currentView === 'linked-accounts') {
    return (
      <div className="max-w-2xl mx-auto bg-white min-h-screen">
        {renderHeader('連結帳號')}
        <div className="p-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>社群媒體</CardTitle>
              <CardDescription>連結您的社群媒體帳號以快速登入</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    G
                  </div>
                  <div>
                    <p className="text-gray-900">Google</p>
                    <p className="text-sm text-green-600">已連結</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  解除連結
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                    A
                  </div>
                  <div>
                    <p className="text-gray-900">Apple</p>
                    <p className="text-sm text-gray-500">未連結</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  連結
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-2">
            <Info className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm text-blue-900">提示</p>
              <p className="text-xs text-blue-700 mt-1">
                連結社群媒體帳號後，您可以使用這些帳號快速登入，無需輸入密碼
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}