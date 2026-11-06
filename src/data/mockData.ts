import { User, Post, Task, Channel, ChatMessage, Meeting, DocumentItem, NotificationItem, AuditLog, WorkspaceInfo, DivisionItem, DivisionTaskRequest, BrandDriveFolder, ManagedBrand } from '../types';

export const INITIAL_WORKSPACE_INFO: WorkspaceInfo = {
  name: 'ASLI GROUP',
  tagline: 'Corporate Collaboration Hub',
  orgDomain: 'asliri.id',
  logoUrl: '',
  timezone: 'Asia/Jakarta (WIB)',
  loginLayout: 'left-banner',
  loginBgStyle: 'radiant-journey',
  loginBgCustomUrl: '',
  loginBgBlur: 0,
  loginBgOverlayOpacity: 0,
  loginOuterBgColor: '#181a20',
  loginBannerBadge: 'Join Us to Build 🤩',
  loginBannerHeadline: 'Start your Journey',
  loginBannerSubtitle: 'Follow these simple steps to set up your account.',
  loginStep1Text: 'Register your account',
  loginStep2Text: 'Set up your profile information',
  loginStep3Text: 'Verify your identity through passport/ID',
  loginFormTitleSignUp: 'Join Us',
  loginFormTitleSignIn: 'Welcome Back',
  loginCtaSignUp: 'Continue',
  loginCtaSignIn: 'Continue',
  loginTermsText: 'By signing up I confirm that I carefully have read and agree to the ASLI GROUP Privacy Policy and Terms of Service.'
};

export const INITIAL_USERS: User[] = [
  {
    id: 'usr_saeful',
    name: 'Saeful Rohman',
    email: 'saeful.rohman@asliri.id',
    password: 'Admin123!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&h=256&q=80',
    role: 'super_admin',
    department: 'Technology & Engineering',
    position: 'VP of Technology & Digital Innovation',
    phone: '+62 812-9845-7721',
    location: 'Headquarters - Jakarta (Tower A, Lt. 18)',
    status: 'online',
    bio: 'Fokus pada arsitektur skala enterprise, integrasi identitas digital, keandalan sistem cloud, dan transformasi AI modern.',
    skills: ['System Architecture', 'Cloud Infrastructure', 'Cybersecurity', 'Executive Leadership', 'AI Systems'],
    directReports: ['usr_epunk'],
    joinedDate: '2021-03-15',
    employeeId: 'EMP-2021-001',
    employmentType: 'Full-time',
    birthDate: '1988-06-12',
    gender: 'Laki-laki',
    emergencyContact: { name: 'Siti Rahma', relation: 'Istri', phone: '+62 812-9845-7722' },
    bankAccount: { bankName: 'Bank Central Asia (BCA)', accountNumber: '5270189234', accountHolder: 'Saeful Rohman' }
  },
  {
    id: 'usr_epunk',
    name: 'Bang Epunk',
    email: 'epunk@asliri.id',
    password: 'Admin123!',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=256&h=256&q=80',
    role: 'super_admin',
    department: 'Marketing & Brand',
    position: 'Lead Marketing & Creative Director',
    phone: '+62 812-3456-7890',
    location: 'Headquarters - Jakarta (Tower A, Lt. 15)',
    status: 'online',
    bio: 'Creative Lead & Strategis Pemasaran ASLI GROUP.',
    skills: ['Brand Strategy', 'Creative Direction', 'Marketing Campaign', 'Content Production'],
    managerId: 'usr_saeful',
    joinedDate: '2021-04-01',
    employeeId: 'EMP-2021-002',
    employmentType: 'Full-time',
    birthDate: '1990-05-15',
    gender: 'Laki-laki',
    emergencyContact: { name: 'Siti', relation: 'Keluarga', phone: '+62 812-3456-7899' },
    bankAccount: { bankName: 'Bank Central Asia (BCA)', accountNumber: '5270189999', accountHolder: 'Bang Epunk' }
  }
];

export const INITIAL_POSTS: Post[] = [];

export const INITIAL_TASKS: Task[] = [];

export const INITIAL_CHANNELS: Channel[] = [];

export const INITIAL_MESSAGES: Record<string, ChatMessage[]> = {};

export const INITIAL_MEETINGS: Meeting[] = [];

export const INITIAL_DOCUMENTS: DocumentItem[] = [];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [];

export const INITIAL_AUDIT_LOGS: AuditLog[] = [];

export const INITIAL_BRAND_DRIVE_FOLDERS: BrandDriveFolder[] = [];

export const INITIAL_DIVISIONS: DivisionItem[] = [];

export const INITIAL_DIVISION_REQUESTS: DivisionTaskRequest[] = [];

export const INITIAL_MANAGED_BRANDS: ManagedBrand[] = [];

