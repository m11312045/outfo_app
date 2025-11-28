// src/components/EditProfilePage.tsx
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { User, X, ArrowLeft, Check, Loader2 } from 'lucide-react';
import { Separator } from './ui/separator';
import { toast } from 'sonner';
import { supabase } from '../lib/supabase';
import { getCurrentProfile, fetchCurrentProfile, Profile } from '../lib/db';

interface EditProfilePageProps {
  onSave: () => void;
  onCancel: () => void;
}

const styleTagOptions = [
  '休閒風', '街頭風', '優雅風', '運動風',
  '復古風', '簡約風', '韓系', '日系',
  '歐美風', '文青風', '個性風', '甜美風'
];

// dataURL → Blob（給 Supabase Storage 用）
function dataURItoBlob(dataURI: string) {
  const [header, data] = dataURI.split(',');
  const mimeMatch = header.match(/data:(.*);base64/);
  const mime = mimeMatch ? mimeMatch[1] : 'image/jpeg';
  const byteString = atob(data);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mime });
}

// 上傳頭像到 Supabase Storage（bucket: images）
async function uploadAvatarFromDataUrl(userId: string, dataUrl: string) {
  const blob = dataURItoBlob(dataUrl);
  const ext = blob.type.split('/')[1] || 'jpg';
  const filename = `avatar_${Date.now()}.${ext}`;
  const path = `avatars/${userId}/${filename}`;

  const { error: uploadError } = await supabase.storage
    .from('images') // 請在 Supabase 建一個 public bucket 叫 images
    .upload(path, blob, {
      upsert: true,
      contentType: blob.type,
    });

  if (uploadError) throw uploadError;

  const { data } = supabase.storage.from('images').getPublicUrl(path);
  return data.publicUrl;
}

export function EditProfilePage({ onSave, onCancel }: EditProfilePageProps) {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // 基本資訊
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');

  // 網站索引
  const [website, setWebsite] = useState('');
  const [isPublicProfile, setIsPublicProfile] = useState(true);

  // 外觀設定
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [buttonColor, setButtonColor] = useState('#9333EA');

  // 關於其他
  const [gender, setGender] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [country, setCountry] = useState('');

  // 地區/語言
  const [region, setRegion] = useState('台灣');
  const [language, setLanguage] = useState('繁體中文');

  // 風格標籤
  const [selectedStyleTags, setSelectedStyleTags] = useState<string[]>([]);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);

      // 確保 user + profile 都存在
      const { user, profile } = await getCurrentProfile();
      if (!user) {
        toast.error('請先登入');
        return;
      }

      setEmail(user.email ?? '');

      let p: Profile | null = profile;
      if (!p) {
        p = await fetchCurrentProfile(user.id);
      }

      if (p) {
        setName(p.display_name ?? '');
        setUsername(p.username ?? '');
        setBio(p.bio ?? '');
        setProfileImage(p.avatar_url ?? null);

        setWebsite(p.website ?? '');
        setIsPublicProfile(p.is_public ?? true);

        setGender(p.gender ?? '');
        setBirthYear(p.birth_year ? String(p.birth_year) : '');
        setCountry(p.country ?? '');
        setRegion(p.region ?? '台灣');
        setLanguage(p.language ?? '繁體中文');

        setSelectedStyleTags(p.styles ?? []);
        setBackgroundColor(p.background_color ?? '#FFFFFF');
        setButtonColor(p.button_color ?? '#9333EA');
      }
    } catch (error) {
      console.error('Failed to load profile', error);
      toast.error('無法載入個人檔案');
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStyleTagToggle = (tag: string) => {
    setSelectedStyleTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        toast.error('請先登入');
        return;
      }

      let avatarPath = profileImage;

      // 如果有新的 dataURL 頭像就上傳 Storage
      if (imageFile && profileImage?.startsWith('data:')) {
        avatarPath = await uploadAvatarFromDataUrl(user.id, profileImage);
      }

      // 更新 profiles
      const updates: Partial<Profile> & {
        styles?: string[];
        background_color?: string;
        button_color?: string;
      } = {
        display_name: name || null,
        username: username || null,
        bio: bio || null,
        avatar_url: avatarPath ?? null,
        website: website || null,
        is_public: isPublicProfile,
        gender: gender || null,
        birth_year: birthYear ? Number(birthYear) : null,
        country: country || null,
        region: region || null,
        language: language || null,
        styles: selectedStyleTags,
        background_color: backgroundColor,
        button_color: buttonColor,
      };

      const { error: updateError } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', user.id);

      if (updateError) throw updateError;

      // 如果 email 有改，順便更新 Auth user（會變更登入 email，要你自己決定要不要）
      if (email && email !== user.email) {
        const { error: emailError } = await supabase.auth.updateUser({
          email,
        });
        if (emailError) {
          console.error('update email error', emailError);
          toast.error('Email 更新失敗（登入帳號未變更）');
        }
      }

      toast.success('個人檔案已更新');
      onSave();
    } catch (error) {
      console.error('Failed to save profile', error);
      toast.error('儲存失敗，請稍後再試');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 pb-20">
      {/* 頁面標題 */}
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" onClick={onCancel}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-gray-900 mb-1">編輯個人檔案</h1>
          <p className="text-gray-600">管理您的個人資訊和偏好設定</p>
        </div>
        <Button onClick={handleSave} disabled={saving}>
          {saving ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Check className="w-4 h-4 mr-2" />
          )}
          {saving ? '儲存中...' : '儲存變更'}
        </Button>
      </div>

      <div className="space-y-6">
        {/* 個人資料照片 */}
        <Card>
          <CardHeader>
            <CardTitle>個人資料照片</CardTitle>
            <CardDescription>上傳或更改您的個人資料照片</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              <div className="relative">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                )}
              </div>
              <div className="flex gap-3">
                <label htmlFor="profile-upload">
                  <Button type="button" variant="outline" asChild>
                    <span className="cursor-pointer">上傳照片</span>
                  </Button>
                </label>
                <input
                  id="profile-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                {profileImage && (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => {
                      setProfileImage(null);
                      setImageFile(null);
                    }}
                  >
                    移除
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 基本資訊 */}
        <Card>
          <CardHeader>
            <CardTitle>基本資訊</CardTitle>
            <CardDescription>編輯您的個人基本資料</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">姓名</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="您的名字"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="username">使用者名稱 @username</Label>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">@</span>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="username"
                />
              </div>
              <p className="text-gray-500">
                您的個人檔案網址：outfitdiary.com/@{username || 'username'}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">自我介紹</Label>
              <Textarea
                id="bio"
                value={bio}
                onChange={(e) =>
                  setBio(e.target.value.slice(0, 150)) // 限制 150 字
                }
                placeholder="介紹一下您自己..."
                rows={4}
              />
              <p className="text-gray-500">{bio.length} / 150 字元</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email / 郵件管理</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
              />
            </div>
          </CardContent>
        </Card>

        {/* 網站索引 */}
        <Card>
          <CardHeader>
            <CardTitle>網站索引</CardTitle>
            <CardDescription>設定您的個人網站和公開設定</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="website">個人網站</Label>
              <Input
                id="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://yourwebsite.com"
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <Label>公開個人檔案</Label>
                <p className="text-gray-500">允許其他人查看您的個人檔案</p>
              </div>
              <Switch
                checked={isPublicProfile}
                onCheckedChange={setIsPublicProfile}
              />
            </div>
          </CardContent>
        </Card>

        {/* 外觀設定 */}
        <Card>
          <CardHeader>
            <CardTitle>外觀設定</CardTitle>
            <CardDescription>自訂您的個人檔案外觀</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bg-color">背景顏色</Label>
                <div className="flex gap-2">
                  <Input
                    id="bg-color"
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="w-16 h-10"
                  />
                  <Input
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    placeholder="#FFFFFF"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="button-color">按鈕顏色</Label>
                <div className="flex gap-2">
                  <Input
                    id="button-color"
                    type="color"
                    value={buttonColor}
                    onChange={(e) => setButtonColor(e.target.value)}
                    className="w-16 h-10"
                  />
                  <Input
                    value={buttonColor}
                    onChange={(e) => setButtonColor(e.target.value)}
                    placeholder="#9333EA"
                  />
                </div>
              </div>
            </div>

            <div
              className="p-4 border rounded-lg"
              style={{ backgroundColor }}
            >
              <p className="text-gray-700 mb-3">預覽</p>
              <Button
                style={{ backgroundColor: buttonColor, color: 'white' }}
              >
                按鈕預覽
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 關於其他 */}
        <Card>
          <CardHeader>
            <CardTitle>關於其他</CardTitle>
            <CardDescription>性別 / 出生年 / 國別 (About)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="gender">性別</Label>
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="選擇性別" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">男性</SelectItem>
                    <SelectItem value="female">女性</SelectItem>
                    <SelectItem value="other">其他</SelectItem>
                    <SelectItem value="prefer-not-to-say">不透露</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="birth-year">出生年份</Label>
                <Select value={birthYear} onValueChange={setBirthYear}>
                  <SelectTrigger id="birth-year">
                    <SelectValue placeholder="選擇年份" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 60 }, (_, i) => 2010 - i).map(
                      (year) => (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      ),
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">國別</Label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger id="country">
                    <SelectValue placeholder="選擇國家" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tw">台灣</SelectItem>
                    <SelectItem value="cn">中國</SelectItem>
                    <SelectItem value="hk">香港</SelectItem>
                    <SelectItem value="jp">日本</SelectItem>
                    <SelectItem value="kr">韓國</SelectItem>
                    <SelectItem value="us">美國</SelectItem>
                    <SelectItem value="uk">英國</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 地區 / 語言設定 */}
        <Card>
          <CardHeader>
            <CardTitle>地區 / 語言設定</CardTitle>
            <CardDescription>設定您的地區和語言偏好</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="region">地區</Label>
                <Select value={region} onValueChange={setRegion}>
                  <SelectTrigger id="region">
                    <SelectValue placeholder="選擇地區" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="台灣">台灣</SelectItem>
                    <SelectItem value="香港">香港</SelectItem>
                    <SelectItem value="中國">中國</SelectItem>
                    <SelectItem value="日本">日本</SelectItem>
                    <SelectItem value="韓國">韓國</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">語言</Label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger id="language">
                    <SelectValue placeholder="選擇語言" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="繁體中文">繁體中文</SelectItem>
                    <SelectItem value="简体中文">简体中文</SelectItem>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="日本語">日本語</SelectItem>
                    <SelectItem value="한국어">한국어</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 風格標籤 */}
        <Card>
          <CardHeader>
            <CardTitle>風格標籤 Style Tags</CardTitle>
            <CardDescription>選擇最符合您穿搭風格的標籤（最多 5 個）</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {styleTagOptions.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleStyleTagToggle(tag)}
                  disabled={
                    !selectedStyleTags.includes(tag) &&
                    selectedStyleTags.length >= 5
                  }
                  className={`p-3 rounded-lg border-2 transition-all ${
                    selectedStyleTags.includes(tag)
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300'
                  } ${
                    !selectedStyleTags.includes(tag) &&
                    selectedStyleTags.length >= 5
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900">{tag}</span>
                    {selectedStyleTags.includes(tag) && (
                      <div className="w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2">
              <p className="text-gray-600">
                已選擇 {selectedStyleTags.length} / 5 個標籤
              </p>
              {selectedStyleTags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedStyleTags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="pl-3 pr-2 py-1">
                      {tag}
                      <button
                        onClick={() => handleStyleTagToggle(tag)}
                        className="ml-2 hover:text-red-500"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* 操作按鈕 */}
        <div className="flex gap-3 pt-4">
          <Button
            variant="outline"
            onClick={onCancel}
            className="flex-1"
            disabled={saving}
          >
            取消
          </Button>
          <Button
            onClick={handleSave}
            className="flex-1"
            disabled={saving}
          >
            {saving ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Check className="w-4 h-4 mr-2" />
            )}
            {saving ? '儲存中...' : '儲存變更'}
          </Button>
        </div>
      </div>
    </div>
  );
}
