// src/utils/api.ts
// 這是一個暫時的 mock，避免專案報錯，後續會完全移除。

export const api = {
  get: async (url: string) => {
    console.warn(`⚠️ api.get 已停用：${url}`);
    return { data: null };
  },

  post: async (url: string, body?: any) => {
    console.warn(`⚠️ api.post 已停用：${url}`, body);
    return { data: null };
  },

  delete: async (url: string) => {
    console.warn(`⚠️ api.delete 已停用：${url}`);
    return { data: null };
  },
};
