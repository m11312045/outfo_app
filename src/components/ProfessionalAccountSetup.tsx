import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { 
  ChevronLeft, 
  ChevronRight,
  Users,
  Briefcase,
  Star,
  Check,
  Info,
  Globe,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  BarChart3,
  MessageSquare,
  Heart,
  Link as LinkIcon,
  AlertCircle,
  Calendar,
  User,
  Building
} from 'lucide-react';

interface ProfessionalAccountSetupProps {
  onBack: () => void;
  onComplete: () => void;
}

type SetupStep = 
  | 'intro'
  | 'account-type'
  | 'business-info'
  | 'contact-options'
  | 'display-options'
  | 'website-link'
  | 'review'
  | 'terms'
  | 'complete';

type AccountType = 'creator' | 'business' | 'public-figure';

export function ProfessionalAccountSetup({ onBack, onComplete }: ProfessionalAccountSetupProps) {
  const [currentStep, setCurrentStep] = useState<SetupStep>('intro');
  const [accountType, setAccountType] = useState<AccountType | null>(null);
  const [businessInfo, setBusinessInfo] = useState({
    name: '',
    category: '',
    address: ''
  });
  const [contactOptions, setContactOptions] = useState({
    email: '',
    phone: '',
    address: ''
  });
  const [displayOptions, setDisplayOptions] = useState({
    showGender: true,
    showAge: false
  });
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // 介紹頁面
  if (currentStep === 'intro') {
    return (
      <div className="max-w-2xl mx-auto bg-white min-h-screen">
        <div className="sticky top-0 bg-white border-b px-4 py-3 z-10">
          <div className="flex items-center gap-3">
            <button onClick={onBack}>
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl text-gray-900">切換為專業帳號</h1>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl text-gray-900 mb-2">歡迎升級專業帳號</h2>
            <p className="text-gray-600">
              專業帳號提供更多工具和洞察，幫助您更好地經營內容
            </p>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                  帳號洞察資料
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  查看詳細的數據分析，包括觀看次數、互動率、粉絲成長趨勢等
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  私訊收件匣應用
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  使用進階訊息工具，管理粉絲訊息，設定自動回覆
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <LinkIcon className="w-5 h-5 text-green-600" />
                  官網綁定
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  在個人檔案中添加聯絡按鈕，讓粉絲輕鬆與您聯繫
                </p>
              </CardContent>
            </Card>
          </div>

          <Button 
            className="w-full"
            onClick={() => setCurrentStep('account-type')}
          >
            開始設定
          </Button>

          <p className="text-xs text-gray-500 text-center">
            切換為專業帳號完全免費，您隨時可以切換回個人帳號
          </p>
        </div>
      </div>
    );
  }

  // 選擇帳號類型
  if (currentStep === 'account-type') {
    return (
      <div className="max-w-2xl mx-auto bg-white min-h-screen">
        <div className="sticky top-0 bg-white border-b px-4 py-3 z-10">
          <div className="flex items-center gap-3">
            <button onClick={() => setCurrentStep('intro')}>
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl text-gray-900">選擇帳號類型</h1>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-gray-600 mb-4">選擇最適合您的帳號類型</p>

          <button
            onClick={() => setAccountType('creator')}
            className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
              accountType === 'creator'
                ? 'border-purple-500 bg-purple-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg text-gray-900">創作者</h3>
                  {accountType === 'creator' && (
                    <Check className="w-5 h-5 text-purple-600" />
                  )}
                </div>
                <p className="text-sm text-gray-600">
                  適合內容創作者、時尚部落客、穿搭分享者
                </p>
              </div>
            </div>
          </button>

          <button
            onClick={() => setAccountType('business')}
            className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
              accountType === 'business'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg text-gray-900">企業</h3>
                  {accountType === 'business' && (
                    <Check className="w-5 h-5 text-blue-600" />
                  )}
                </div>
                <p className="text-sm text-gray-600">
                  適合品牌商家、服飾店、設計工作室
                </p>
              </div>
            </div>
          </button>

          <button
            onClick={() => setAccountType('public-figure')}
            className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
              accountType === 'public-figure'
                ? 'border-yellow-500 bg-yellow-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg text-gray-900">公眾人物或名人</h3>
                  {accountType === 'public-figure' && (
                    <Check className="w-5 h-5 text-yellow-600" />
                  )}
                </div>
                <p className="text-sm text-gray-600">
                  適合知名設計師、時尚意見領袖、明星
                </p>
              </div>
            </div>
          </button>

          <Button 
            className="w-full mt-6"
            disabled={!accountType}
            onClick={() => setCurrentStep('business-info')}
          >
            下一步
          </Button>
        </div>
      </div>
    );
  }

  // 商業資訊
  if (currentStep === 'business-info') {
    return (
      <div className="max-w-2xl mx-auto bg-white min-h-screen">
        <div className="sticky top-0 bg-white border-b px-4 py-3 z-10">
          <div className="flex items-center gap-3">
            <button onClick={() => setCurrentStep('account-type')}>
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl text-gray-900">商業資訊</h1>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                {accountType === 'business' ? '商家名稱' : '頁面名稱'}
              </label>
              <input
                type="text"
                value={businessInfo.name}
                onChange={(e) => setBusinessInfo({ ...businessInfo, name: e.target.value })}
                placeholder="輸入名稱"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">類別</label>
              <select
                value={businessInfo.category}
                onChange={(e) => setBusinessInfo({ ...businessInfo, category: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
              >
                <option value="">選擇類別</option>
                <option value="fashion">時尚服飾</option>
                <option value="lifestyle">生活風格</option>
                <option value="beauty">美妝保養</option>
                <option value="design">設計創意</option>
                <option value="retail">零售商店</option>
                <option value="brand">品牌</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">
                地址（選填）
              </label>
              <input
                type="text"
                value={businessInfo.address}
                onChange={(e) => setBusinessInfo({ ...businessInfo, address: e.target.value })}
                placeholder="輸入地址"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <p className="text-xs text-gray-500 mt-1">
                如果您有實體店面，可以添加地址
              </p>
            </div>
          </div>

          <Button 
            className="w-full"
            onClick={() => setCurrentStep('contact-options')}
          >
            下一步
          </Button>
        </div>
      </div>
    );
  }

  // 聯絡選項
  if (currentStep === 'contact-options') {
    return (
      <div className="max-w-2xl mx-auto bg-white min-h-screen">
        <div className="sticky top-0 bg-white border-b px-4 py-3 z-10">
          <div className="flex items-center gap-3">
            <button onClick={() => setCurrentStep('business-info')}>
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl text-gray-900">聯絡選項</h1>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-gray-600">
            添加聯絡方式，讓粉絲更容易與您聯繫
          </p>

          <div className="space-y-4">
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                <Mail className="w-4 h-4" />
                電子郵件
              </label>
              <input
                type="email"
                value={contactOptions.email}
                onChange={(e) => setContactOptions({ ...contactOptions, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                <Phone className="w-4 h-4" />
                電話號碼
              </label>
              <input
                type="tel"
                value={contactOptions.phone}
                onChange={(e) => setContactOptions({ ...contactOptions, phone: e.target.value })}
                placeholder="+886 912 345 678"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                <MapPin className="w-4 h-4" />
                地址
              </label>
              <input
                type="text"
                value={contactOptions.address}
                onChange={(e) => setContactOptions({ ...contactOptions, address: e.target.value })}
                placeholder="台北市信義區"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </div>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-2">
            <Info className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm text-blue-900">提示</p>
              <p className="text-xs text-blue-700 mt-1">
                這些聯絡方式將顯示在您的個人檔案中，粉絲可以直接聯繫您
              </p>
            </div>
          </div>

          <Button 
            className="w-full"
            onClick={() => setCurrentStep('display-options')}
          >
            下一步
          </Button>
        </div>
      </div>
    );
  }

  // 展示選項
  if (currentStep === 'display-options') {
    return (
      <div className="max-w-2xl mx-auto bg-white min-h-screen">
        <div className="sticky top-0 bg-white border-b px-4 py-3 z-10">
          <div className="flex items-center gap-3">
            <button onClick={() => setCurrentStep('contact-options')}>
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl text-gray-900">展示選項</h1>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-gray-600">
            設定在個人檔案中顯示的資訊
          </p>

          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="text-gray-900">顯示性別</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    在個人檔案中顯示性別資訊
                  </p>
                </div>
                <Switch
                  checked={displayOptions.showGender}
                  onCheckedChange={(checked) => 
                    setDisplayOptions({ ...displayOptions, showGender: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-gray-900">顯示年齡</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    在個人檔案中顯示年齡資訊
                  </p>
                </div>
                <Switch
                  checked={displayOptions.showAge}
                  onCheckedChange={(checked) => 
                    setDisplayOptions({ ...displayOptions, showAge: checked })
                  }
                />
              </div>
            </CardContent>
          </Card>

          <Button 
            className="w-full"
            onClick={() => setCurrentStep('website-link')}
          >
            下一步
          </Button>
        </div>
      </div>
    );
  }

  // 官方網站連結
  if (currentStep === 'website-link') {
    return (
      <div className="max-w-2xl mx-auto bg-white min-h-screen">
        <div className="sticky top-0 bg-white border-b px-4 py-3 z-10">
          <div className="flex items-center gap-3">
            <button onClick={() => setCurrentStep('display-options')}>
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl text-gray-900">連結到官方網站</h1>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="flex items-center gap-2 text-sm text-gray-700 mb-2">
              <Globe className="w-4 h-4" />
              網站網址（選填）
            </label>
            <input
              type="url"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              placeholder="https://your-website.com"
              className="w-full px-4 py-2 border rounded-lg"
            />
            <p className="text-xs text-gray-500 mt-1">
              添加您的官方網站或線上商店連結
            </p>
          </div>

          <div>
            <h3 className="text-gray-900 mb-3">社群媒體連結（選填）</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Instagram className="w-5 h-5 text-pink-600" />
                <input
                  type="text"
                  placeholder="Instagram 帳號"
                  className="flex-1 px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="flex items-center gap-2">
                <Facebook className="w-5 h-5 text-blue-600" />
                <input
                  type="text"
                  placeholder="Facebook 粉絲專頁"
                  className="flex-1 px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="flex items-center gap-2">
                <Youtube className="w-5 h-5 text-red-600" />
                <input
                  type="text"
                  placeholder="YouTube 頻道"
                  className="flex-1 px-4 py-2 border rounded-lg"
                />
              </div>
            </div>
          </div>

          <Button 
            className="w-full"
            onClick={() => setCurrentStep('review')}
          >
            下一步
          </Button>
        </div>
      </div>
    );
  }

  // 檢視現有綁定
  if (currentStep === 'review') {
    return (
      <div className="max-w-2xl mx-auto bg-white min-h-screen">
        <div className="sticky top-0 bg-white border-b px-4 py-3 z-10">
          <div className="flex items-center gap-3">
            <button onClick={() => setCurrentStep('website-link')}>
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl text-gray-900">檢視設定</h1>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>帳號類型</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                {accountType === 'creator' && (
                  <>
                    <Users className="w-5 h-5 text-purple-600" />
                    <span>創作者</span>
                  </>
                )}
                {accountType === 'business' && (
                  <>
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    <span>企業</span>
                  </>
                )}
                {accountType === 'public-figure' && (
                  <>
                    <Star className="w-5 h-5 text-yellow-600" />
                    <span>公眾人物或名人</span>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>商業資訊</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">名稱</span>
                <span className="text-gray-900">{businessInfo.name || '未設定'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">類別</span>
                <span className="text-gray-900">{businessInfo.category || '未設定'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">地址</span>
                <span className="text-gray-900">{businessInfo.address || '未設定'}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>聯絡選項</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">電子郵件</span>
                <span className="text-gray-900">{contactOptions.email || '未設定'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">電話</span>
                <span className="text-gray-900">{contactOptions.phone || '未設定'}</span>
              </div>
            </CardContent>
          </Card>

          <Button 
            className="w-full"
            onClick={() => setCurrentStep('terms')}
          >
            確認並繼續
          </Button>
        </div>
      </div>
    );
  }

  // 條款與隱私
  if (currentStep === 'terms') {
    return (
      <div className="max-w-2xl mx-auto bg-white min-h-screen">
        <div className="sticky top-0 bg-white border-b px-4 py-3 z-10">
          <div className="flex items-center gap-3">
            <button onClick={() => setCurrentStep('review')}>
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl text-gray-900">條款與隱私</h1>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="prose prose-sm">
            <h3 className="text-gray-900">專業帳號條款</h3>
            <p className="text-gray-600">
              使用專業帳號，您同意遵守我們的商業使用條款。專業帳號提供額外的工具和洞察，
              但需要遵守更嚴格的內容和行為準則。
            </p>

            <h3 className="text-gray-900 mt-4">數據收集與使用</h3>
            <p className="text-gray-600">
              我們會收集您的帳號數據以提供洞察分析功能。這些數據包括瀏覽次數、
              互動率、粉絲資料等。我們不會將您的數據分享給第三方。
            </p>

            <h3 className="text-gray-900 mt-4">隱私設定</h3>
            <p className="text-gray-600">
              切換為專業帳號後，某些資訊（如聯絡方式）將公開顯示。
              您可以隨時在隱私設定中調整這些選項。
            </p>
          </div>

          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <p className="text-sm text-yellow-900">重要提示</p>
              <p className="text-xs text-yellow-700 mt-1">
                切換為專業帳號後，您的帳號將顯示為公開帳號。
                如果您目前使用私密帳號，將自動切換為公開。
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 border rounded-lg">
            <input
              type="checkbox"
              id="accept-terms"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="mt-1"
            />
            <label htmlFor="accept-terms" className="text-sm text-gray-700">
              我已閱讀並同意專業帳號條款、數據使用政策和隱私權政策
            </label>
          </div>

          <Button 
            className="w-full"
            disabled={!acceptedTerms}
            onClick={() => setCurrentStep('complete')}
          >
            完成設定
          </Button>
        </div>
      </div>
    );
  }

  // 設定完成
  if (currentStep === 'complete') {
    return (
      <div className="max-w-2xl mx-auto bg-white min-h-screen">
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <Check className="w-12 h-12 text-green-600" />
          </div>

          <h2 className="text-2xl text-gray-900 mb-2">設定完成！</h2>
          <p className="text-gray-600 text-center mb-8">
            您的帳號已成功切換為專業帳號
          </p>

          <div className="w-full space-y-4 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                  帳號洞察資料
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  現在可以查看詳細的數據分析和儀表板
                </p>
                <Button variant="outline" className="w-full">
                  查看洞察資料
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  私訊收件匣
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  使用進階訊息工具管理粉絲互動
                </p>
                <Button variant="outline" className="w-full">
                  開啟收件匣
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LinkIcon className="w-5 h-5 text-green-600" />
                  官網綁定成功
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  聯絡按鈕已添加到您的個人檔案
                </p>
                <Button variant="outline" className="w-full">
                  查看個人檔案
                </Button>
              </CardContent>
            </Card>
          </div>

          <Button 
            className="w-full"
            onClick={onComplete}
          >
            開始使用專業帳號
          </Button>
        </div>
      </div>
    );
  }

  return null;
}
