export interface ConfigProps {
  appName: string;
  appDescription: string;
  ownerPhone: string;
  domainName: string;
  mailgun: {
    subdomain: string;
    fromNoReply: string;
    fromAdmin: string;
    supportEmail?: string;
    forwardRepliesTo?: string;
  };
}
