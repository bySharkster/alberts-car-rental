export interface ConfigProps {
  appName: string;
  appDescription: string;
  ownerPhone: string;
  domainName: string;
  resend: {
    fromNoReply: string;
    fromAdmin: string;
    supportEmail?: string;
    forwardRepliesTo?: string;
  };
  social: {
    facebook: string;
    instagram: string;
    whatsapp: string;
  };
}
