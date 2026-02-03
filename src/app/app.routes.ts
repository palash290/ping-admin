import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
      {
            path: '',
            loadComponent: () => import('./components/core/log-in/log-in.component').then(m => m.LogInComponent)
      },
      {
            path: 'forgot-password',
            loadComponent: () => import('./components/core/forgot-passowrd/forgot-passowrd.component').then(m => m.ForgotPassowrdComponent)
      },
      {
            path: 'verify-otp',
            loadComponent: () => import('./components/core/verify-otp/verify-otp.component').then(m => m.VerifyOtpComponent)
      },
      {
            path: 'reset-password',
            loadComponent: () => import('./components/core/reset-password/reset-password.component').then(m => m.ResetPasswordComponent)
      },
      {
            path: 'home',
            loadComponent: () => import('./components/main/main.component').then(m => m.MainComponent),
            // canActivate: [authGuard]
            children: [
                  {
                        path: 'dashboard',
                        loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent)
                  },
                  {
                        path: 'my-profile',
                        loadComponent: () => import('./components/my-profile/my-profile.component').then(m => m.MyProfileComponent)
                  },
                  {
                        path: 'change-password',
                        loadComponent: () => import('./components/change-password/change-password.component').then(m => m.ChangePasswordComponent)
                  },
                  {
                        path: 'user-management',
                        loadComponent: () => import('./components/user-management/user-management.component').then(m => m.UserManagementComponent)
                  },
                  {
                        path: 'view-user',
                        loadComponent: () => import('./components/user-management/view-user/view-user.component').then(m => m.ViewUserComponent)
                  },
                  {
                        path: 'group-management',
                        loadComponent: () => import('./components/group-management/group-management.component').then(m => m.GroupManagementComponent)
                  },
                  {
                        path: 'view-group',
                        loadComponent: () => import('./components/group-management/view-group/view-group.component').then(m => m.ViewGroupComponent)
                  },
                  {
                        path: 'usages-analytic',
                        loadComponent: () => import('./components/usages-analytic/usages-analytic.component').then(m => m.UsagesAnalyticComponent)
                  },
                  {
                        path: 'support',
                        loadComponent: () => import('./components/support/support.component').then(m => m.SupportComponent)
                  },
                  {
                        path: 'legal-pages',
                        loadComponent: () => import('./components/legal-pages/legal-pages.component').then(m => m.LegalPagesComponent)
                  },
                  {
                        path: 'edit-policy',
                        loadComponent: () => import('./components/legal-pages/edit-policy/edit-policy.component').then(m => m.EditPolicyComponent)
                  },
                  {
                        path: 'reported',
                        loadComponent: () => import('./components/reported/reported.component').then(m => m.ReportedComponent)
                  },
                  {
                        path: 'reported-details',
                        loadComponent: () => import('./components/reported/reported-details/reported-details.component').then(m => m.ReportedDetailsComponent)
                  },
            ]
      }
];
