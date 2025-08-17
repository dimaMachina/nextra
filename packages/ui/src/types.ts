/**
 * Options that can be passed to `pagefind.search()`.
 * @remarks Copied from https://github.com/CloudCannon/pagefind/blob/2a0aa90cfb78bb8551645ac9127a1cd49cf54add/pagefind_web_js/types/index.d.ts#L72-L82
 */
export type PagefindSearchOptions = {
  /**
   * If set, this call will load all assets but return before searching. Prefer using `pagefind.preload()` instead.
   */
  preload?: boolean
  /**
   * Add more verbose console logging for this search query.
   */
  verbose?: boolean
  /**
   * The set of filters to execute with this search. Input type is extremely flexible, see the filtering docs for details.
   */
  filters?: object
  /**
   * The set of sorts to use for this search, instead of relevancy.
   */
  sort?: object
}
