export type CodeBlockProps = {
    language: string;
    filename: string;
    highlightLines?: number[];
  } & (
    | {
        code: string;
        tabs?: never;
      }
    | {
        code?: never;
        tabs: Array<{
          name: string;
          code: string;
          language?: string;
          highlightLines?: number[];
        }>;
      }
  );