export interface ConfigProps {
  appName: string;
  appDescription: string;
  domainName: string;
  mailgun: {
    subdomain: string;
    fromNoReply: string;
    fromAdmin: string;
    supportEmail?: string;
    forwardRepliesTo?: string;
  };
}
