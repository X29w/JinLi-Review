declare namespace NodeJS {
  interface ProcessEnv {
    RUNNING: string;
  }
}

export type ContentCategoryType = 'product' | 'article';

export type ContentStatusType = 'published' | 'draft' | 'scheduled';
