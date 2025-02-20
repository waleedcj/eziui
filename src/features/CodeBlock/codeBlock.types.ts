export type CodeBlockTheme = {
    light: Record<string, string>
    dark: Record<string, string>
  }
  export type CodeBlockProps = {
    code: string
    language: string
    fileName?: string
    qrCodeUrl?: string
    showLineNumbers?: boolean
    expandButtonTitle?: string
    showCollapsible?: boolean;
  } & React.HTMLAttributes<HTMLDivElement>


  export type SimpleCodeBlockProps = {
    code: string;
    language: string;
    fileName?: string;
    expandButtonTitle?: string;
    className?: string;
 } & React.HTMLAttributes<HTMLDivElement>

 export interface CommandBlockProps {
  commands: string | string[];
  className?: string;
}