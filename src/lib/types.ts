/**
 * The shapes the Site API answers with. Browser-safe (no server code): pages,
 * the portal and `src/server/` all import them from here.
 *
 * Every one is OUR shape, built field by field from the platform's answers, so
 * nothing the platform adds later (a member's email, say) reaches a page.
 */

export type {Site, Viewer, ViewerState} from '../platform/types';

export interface PostAuthor {
  id: number;
  /** Already joined. Never an email. */
  name: string;
  avatar: string | null;
}

export interface PostTerm {
  id: number;
  name: string;
  slug: string;
}

export interface PostSummary {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  coverUrl: string | null;
  publishedAt: string | null;
  authors: PostAuthor[];
  categories: PostTerm[];
  tags: PostTerm[];
}

export interface Post extends PostSummary {
  /** Rich-text HTML from the community's blog editor, already sanitized. */
  content: string;
}

export interface PostsPage {
  posts: PostSummary[];
  page: number;
  hasMore: boolean;
}

/** What the visitor may do on THIS site (derived from their Role Manager codenames). */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type -- one key per admin feature, none yet
export interface Abilities {}

export interface Member {
  id: number;
  slug: string;
  name: string;
  avatar: string | null;
  role: string | null;
}

export interface UploadRow {
  id: number;
  url: string;
  originalName: string;
  fileType: string;
  fileSize: number;
  createdAt: string;
}
