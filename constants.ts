import { Question } from './types';

export const QUESTIONS: Question[] = [
  // Part 1: Anti-Fraud
  {
    id: 1,
    text: "在微信群里认识的“老乡”说汇率比银行高很多，找他私下换钱很划算？",
    isTrue: false,
    explanation: "高汇率通常是诱饵。私下换汇（对敲）不受法律保护，极易遭遇诈骗或冻卡。",
    category: 'Anti-Fraud'
  },
  {
    id: 2,
    text: "为了省点手续费，帮刚认识的朋友“代收转账”再转给别人，是助人为乐？",
    isTrue: false,
    explanation: "这可能涉及“洗钱”帮凶，轻则冻结账户，重则承担法律责任。",
    category: 'Anti-Fraud'
  },
  {
    id: 3,
    text: "私下换汇虽然方便，但可能会导致国内家人的银行卡被公安机关冻结？",
    isTrue: true,
    explanation: "如果对方资金来源不干净（如电诈资金），收款账户会被连带冻结。",
    category: 'Anti-Fraud'
  },
  // Part 2: Compliance
  {
    id: 4,
    text: "所谓的“跨境汇款金融牌照”，就等同于普通的“营业执照”，任何公司只要注册了都能做汇款？",
    isTrue: false,
    explanation: "“金融牌照”是国家颁发的“特许经营权”，门槛极高，不同于普通营业执照。",
    category: 'Compliance'
  },
  {
    id: 5,
    text: "想要确认一家汇款公司是否正规，可以去所在国家的金融监管机构官网查询它的牌照编号？",
    isTrue: true,
    explanation: "这是最直接的验证方法。正规机构的信息在政府官网上都是公开透明、可查询的。",
    category: 'Compliance'
  },
  {
    id: 6,
    text: "正规的跨境汇款，通常都需要进行实名认证（KYC/身份验证）才能操作？",
    isTrue: true,
    explanation: "正规机构必须遵守反洗钱法规，不验证身份的平台反而不可信。",
    category: 'Compliance'
  },
  {
    id: 7,
    text: "汇款金额较大时，平台要求提供“资金来源证明”（如工资单），是故意刁难用户？",
    isTrue: false,
    explanation: "这是国际通用的反洗钱合规要求，确保资金能合法、安全地入境。",
    category: 'Compliance'
  },
  // Part 3: WeChat Convenience
  {
    id: 8,
    text: "使用支持“汇款到微信”的官方平台，每一笔资金动向在微信里都能收到通知？",
    isTrue: true,
    explanation: "微信会有官方服务通知（Service Message），状态透明，不用盲目干等。",
    category: 'WeChat'
  },
  {
    id: 9,
    text: "汇入微信的钱直接进零钱，家人不用提现就能直接买年货、发春节红包？",
    isTrue: true,
    explanation: "资金无需周转，无缝连接微信支付生态，置办年货、发红包都能直接用。",
    category: 'WeChat'
  }
];

export const getTitle = (score: number, total: number) => {
  const percentage = score / total;
  if (percentage === 1) return "春节汇款大明白";
  if (percentage >= 0.8) return "火眼金睛反诈官";
  if (percentage >= 0.5) return "还需要补课的小迷糊";
  return "千万别汇款的“小白兔”";
};