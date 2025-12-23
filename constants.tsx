
import React from 'react';
import { Service, Project, UpcomingProject } from './types';
import { 
  Building2, 
  Key, 
  Wrench, 
  FilePieChart, 
  TrendingUp, 
  Megaphone 
} from 'lucide-react';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'الوساطة العقارية',
    description: 'تقديم خدمات البيع والشراء والتأجير والاستثمار العقاري للبائع والمشتري وفق آليات نظامية مدروسة تضمن حقوق جميع الأطراف.',
    icon: 'Key',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'إدارة الأملاك العقارية',
    description: 'إدارة وتشغيل الوحدات السكنية والتجارية، متابعة العقود، تحصيل الإيجارات، والإشراف الكامل على الأصول لضمان راحة المالك.',
    icon: 'Building2',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'إدارة الصيانة والتشغيل',
    description: 'إدارة أعمال الصيانة الدورية والتشغيل بما يضمن استدامة الأصول ورفع كفاءتها التشغيلية وتقليل التكاليف الهادرة.',
    icon: 'Wrench',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'التقارير المالية والإدارية',
    description: 'إعداد تقارير مالية وإدارية دورية دقيقة توضح الأداء، العوائد، والمصروفات لدعم قرارات الإدارة والملاك.',
    icon: 'FilePieChart',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    title: 'تحسين وتطوير الأصول',
    description: 'دراسة وتنفيذ خطط إصلاح وتحسين الممتلكات العقارية لرفع قيمتها الاستثمارية وتحقيق أعلى عائد مالي ممكن.',
    icon: 'TrendingUp',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    title: 'تسويق المشاريع العقارية',
    description: 'تسويق مشاريع عقارية حصرية باستخدام أحدث القنوات الرقمية وتحليل السوق المستهدف للوصول للعميل المناسب.',
    icon: 'Megaphone',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800'
  }
];

export const COMPLETED_PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'شركة الأصول بلس للاستثمار',
    role: 'وسيط مشاريع',
    description: 'مشروع مصنع وتوريد وتركيب أثاث للفنادق والمكاتب',
    image: '/شركة الأصول بلس للاستثمار.png'
  },
  {
    id: 'p2',
    name: 'شركة تسنم للمقاولات',
    role: 'وسيط عقاري',
    description: 'مشروع صناعية العسيلة – مكة المكرمة',
    image: '/شركة تسنم للمقاولات.png'
  },
  {
    id: 'p3',
    name: 'شركة نخبة تسكين العقارية',
    role: 'وسيط عقاري',
    description: 'مكاتب إدارية – جبل النور – مكة المكرمة',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p4',
    name: 'شركة تقدير الحوادث',
    role: 'إدارة الصيانة والتشغيل',
    description: 'المشروع الرئيسي – مكة المكرمة',
    image: '/شركة تقدير الحوادث.png'
  },
  {
    id: 'p5',
    name: 'شركات الحج والعمرة',
    role: 'خدمات عقارية',
    description: 'تقديم حلول إسكانية متكاملة لخدمة ضيوف الرحمن',
    image: '/شركات الحج والعمرة.png'
  }
];

export const UPCOMING_PROJECTS: UpcomingProject[] = [
  {
    id: 'u1',
    title: 'مشروع استثماري متعدد الاستخدامات',
    description: 'وحدات تجارية وإدارية عصرية'
  },
  {
    id: 'u2',
    title: 'مشروع تجاري خدمي',
    description: 'يخدم الأنشطة التجارية وورش الخدمات'
  },
  {
    id: 'u3',
    title: 'مشروع مجمع مكاتب إدارية',
    description: 'بيئة عمل حديثة ومجهزة'
  }
];
