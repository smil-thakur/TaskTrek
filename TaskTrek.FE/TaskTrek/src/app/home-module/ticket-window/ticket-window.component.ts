import { Component } from '@angular/core';
import { CommonComponentsModule } from '../../common-components/common-components.module';
import { Ticket } from '../../models/TicketModel';
import { Priority } from '../../enums/Priority';
import { Severity } from '../../enums/Severity';
import { TicketFreq } from '../../enums/TicketFreq';
import { TicketEnvironment } from '../../models/TicketEnvironment';
import { TicketAdditional } from '../../models/TicketAdditonal';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ticket-window',
  standalone: true,
  imports: [
    CommonComponentsModule, NgFor
  ],
  templateUrl: './ticket-window.component.html',
  styleUrl: './ticket-window.component.scss'
})
export class TicketWindowComponent {

  dummyTickets: Ticket[] = [
    {
      title: 'Writing Tools prompt crash on Safari',
      desc: 'When selecting text from the search bar and opting for Writing Tools, the prompt crashes Safari and the tools are unusable.',
      steps: 'Open Safari, search something in the search bar, select the text, opt for Writing Tools, observe.',
      priority: Priority.severe,
      severity: Severity.critical,
      dateTime: new Date('2024-11-23T12:34:56'),
      freq: TicketFreq.often,
      environment: {
        Os: 'iOS 18.2 beta 3',
        Browser: 'Safari',
        AppVersion: 'Beta',
        Device: 'iPhone 16'
      },
      additional: {
        screenShots: null,
        Logs: null
      }
    },
    {
      title: 'Login page loads indefinitely on Chrome',
      desc: 'When entering credentials on the login page, the spinner appears but the page never completes loading.',
      steps: 'Open Chrome, navigate to the login page, enter credentials, click Login, observe.',
      priority: Priority.high,
      severity: Severity.major,
      dateTime: new Date('2024-11-20T09:15:30'),
      freq: TicketFreq.often,
      environment: {
        Os: 'Windows 11',
        Browser: 'Chrome 119.0',
        AppVersion: 'Production',
        Device: 'Dell Inspiron 14'
      },
      additional: {
        screenShots: null,
        Logs: null
      }
    },
    {
      title: 'Dark mode not applied in settings',
      desc: 'Enabling dark mode in settings doesn’t change the UI, and the app remains in light mode.',
      steps: 'Open the app, go to settings, enable dark mode, observe.',
      priority: Priority.medium,
      severity: Severity.minor,
      dateTime: new Date('2024-11-22T18:45:10'),
      freq: TicketFreq.sometimes,
      environment: {
        Os: 'Android 14',
        Browser: 'None',
        AppVersion: 'Stable',
        Device: 'Samsung Galaxy S22'
      },
      additional: {
        screenShots: null,
        Logs: null
      }
    },
    {
      title: 'Text overlaps in table on Firefox',
      desc: 'When viewing the dashboard table, text in columns overlaps, making it unreadable.',
      steps: 'Open Firefox, navigate to the dashboard, observe the table layout.',
      priority: Priority.low,
      severity: Severity.minor,
      dateTime: new Date('2024-11-21T14:12:00'),
      freq: TicketFreq.rarely,
      environment: {
        Os: 'Ubuntu 22.04',
        Browser: 'Firefox 118.0',
        AppVersion: 'Beta',
        Device: 'Desktop PC'
      },
      additional: {
        screenShots: null,
        Logs: null
      }
    },
    {
      title: 'Notifications are delayed by 10 minutes',
      desc: 'Notifications from the app are received 10 minutes after the event occurs.',
      steps: 'Trigger any notification, observe the delay in its arrival.',
      priority: Priority.medium,
      severity: Severity.major,
      dateTime: new Date('2024-11-19T08:22:45'),
      freq: TicketFreq.sometimes,
      environment: {
        Os: 'iOS 17.0.3',
        Browser: 'None',
        AppVersion: 'Production',
        Device: 'iPhone 13'
      },
      additional: {
        screenShots: null,
        Logs: null
      }
    },
    {
      title: 'Crash on switching tabs in analytics',
      desc: 'Switching tabs in the analytics section causes the app to crash.',
      steps: 'Open the analytics section, switch between tabs rapidly, observe.',
      priority: Priority.high,
      severity: Severity.critical,
      dateTime: new Date('2024-11-18T16:05:10'),
      freq: TicketFreq.often,
      environment: {
        Os: 'macOS Sonoma 14.1',
        Browser: 'Safari 17.0',
        AppVersion: 'Preview',
        Device: 'MacBook Air M2'
      },
      additional: {
        screenShots: null,
        Logs: null
      }
    },
    {
      title: 'Writing Tools prompt crash on Safari',
      desc: 'When selecting text from the search bar and opting for Writing Tools, the prompt crashes Safari and the tools are unusable.',
      steps: 'Open Safari, search something in the search bar, select the text, opt for Writing Tools, observe.',
      priority: Priority.severe,
      severity: Severity.critical,
      dateTime: new Date('2024-11-23T12:34:56'),
      freq: TicketFreq.often,
      environment: {
        Os: 'iOS 18.2 beta 3',
        Browser: 'Safari',
        AppVersion: 'Beta',
        Device: 'iPhone 16'
      },
      additional: {
        screenShots: null,
        Logs: null
      }
    },
    {
      title: 'Login page loads indefinitely on Chrome',
      desc: 'When entering credentials on the login page, the spinner appears but the page never completes loading.',
      steps: 'Open Chrome, navigate to the login page, enter credentials, click Login, observe.',
      priority: Priority.high,
      severity: Severity.major,
      dateTime: new Date('2024-11-20T09:15:30'),
      freq: TicketFreq.often,
      environment: {
        Os: 'Windows 11',
        Browser: 'Chrome 119.0',
        AppVersion: 'Production',
        Device: 'Dell Inspiron 14'
      },
      additional: {
        screenShots: null,
        Logs: null
      }
    },
    {
      title: 'Dark mode not applied in settings',
      desc: 'Enabling dark mode in settings doesn’t change the UI, and the app remains in light mode.',
      steps: 'Open the app, go to settings, enable dark mode, observe.',
      priority: Priority.medium,
      severity: Severity.minor,
      dateTime: new Date('2024-11-22T18:45:10'),
      freq: TicketFreq.sometimes,
      environment: {
        Os: 'Android 14',
        Browser: 'None',
        AppVersion: 'Stable',
        Device: 'Samsung Galaxy S22'
      },
      additional: {
        screenShots: null,
        Logs: null
      }
    },
    {
      title: 'Text overlaps in table on Firefox',
      desc: 'When viewing the dashboard table, text in columns overlaps, making it unreadable.',
      steps: 'Open Firefox, navigate to the dashboard, observe the table layout.',
      priority: Priority.low,
      severity: Severity.minor,
      dateTime: new Date('2024-11-21T14:12:00'),
      freq: TicketFreq.rarely,
      environment: {
        Os: 'Ubuntu 22.04',
        Browser: 'Firefox 118.0',
        AppVersion: 'Beta',
        Device: 'Desktop PC'
      },
      additional: {
        screenShots: null,
        Logs: null
      }
    },
    {
      title: 'Notifications are delayed by 10 minutes',
      desc: 'Notifications from the app are received 10 minutes after the event occurs.',
      steps: 'Trigger any notification, observe the delay in its arrival.',
      priority: Priority.medium,
      severity: Severity.major,
      dateTime: new Date('2024-11-19T08:22:45'),
      freq: TicketFreq.sometimes,
      environment: {
        Os: 'iOS 17.0.3',
        Browser: 'None',
        AppVersion: 'Production',
        Device: 'iPhone 13'
      },
      additional: {
        screenShots: null,
        Logs: null
      }
    },
    {
      title: 'Crash on switching tabs in analytics',
      desc: 'Switching tabs in the analytics section causes the app to crash.',
      steps: 'Open the analytics section, switch between tabs rapidly, observe.',
      priority: Priority.high,
      severity: Severity.critical,
      dateTime: new Date('2024-11-18T16:05:10'),
      freq: TicketFreq.often,
      environment: {
        Os: 'macOS Sonoma 14.1',
        Browser: 'Safari 17.0',
        AppVersion: 'Preview',
        Device: 'MacBook Air M2'
      },
      additional: {
        screenShots: null,
        Logs: null
      }
    },
    {
      title: 'Writing Tools prompt crash on Safari',
      desc: 'When selecting text from the search bar and opting for Writing Tools, the prompt crashes Safari and the tools are unusable.',
      steps: 'Open Safari, search something in the search bar, select the text, opt for Writing Tools, observe.',
      priority: Priority.severe,
      severity: Severity.critical,
      dateTime: new Date('2024-11-23T12:34:56'),
      freq: TicketFreq.often,
      environment: {
        Os: 'iOS 18.2 beta 3',
        Browser: 'Safari',
        AppVersion: 'Beta',
        Device: 'iPhone 16'
      },
      additional: {
        screenShots: null,
        Logs: null
      }
    },
    {
      title: 'Login page loads indefinitely on Chrome',
      desc: 'When entering credentials on the login page, the spinner appears but the page never completes loading.',
      steps: 'Open Chrome, navigate to the login page, enter credentials, click Login, observe.',
      priority: Priority.high,
      severity: Severity.major,
      dateTime: new Date('2024-11-20T09:15:30'),
      freq: TicketFreq.often,
      environment: {
        Os: 'Windows 11',
        Browser: 'Chrome 119.0',
        AppVersion: 'Production',
        Device: 'Dell Inspiron 14'
      },
      additional: {
        screenShots: null,
        Logs: null
      }
    },
    {
      title: 'Dark mode not applied in settings',
      desc: 'Enabling dark mode in settings doesn’t change the UI, and the app remains in light mode.',
      steps: 'Open the app, go to settings, enable dark mode, observe.',
      priority: Priority.medium,
      severity: Severity.minor,
      dateTime: new Date('2024-11-22T18:45:10'),
      freq: TicketFreq.sometimes,
      environment: {
        Os: 'Android 14',
        Browser: 'None',
        AppVersion: 'Stable',
        Device: 'Samsung Galaxy S22'
      },
      additional: {
        screenShots: null,
        Logs: null
      }
    },
    {
      title: 'Text overlaps in table on Firefox',
      desc: 'When viewing the dashboard table, text in columns overlaps, making it unreadable.',
      steps: 'Open Firefox, navigate to the dashboard, observe the table layout.',
      priority: Priority.low,
      severity: Severity.minor,
      dateTime: new Date('2024-11-21T14:12:00'),
      freq: TicketFreq.rarely,
      environment: {
        Os: 'Ubuntu 22.04',
        Browser: 'Firefox 118.0',
        AppVersion: 'Beta',
        Device: 'Desktop PC'
      },
      additional: {
        screenShots: null,
        Logs: null
      }
    },
    {
      title: 'Notifications are delayed by 10 minutes',
      desc: 'Notifications from the app are received 10 minutes after the event occurs.',
      steps: 'Trigger any notification, observe the delay in its arrival.',
      priority: Priority.medium,
      severity: Severity.major,
      dateTime: new Date('2024-11-19T08:22:45'),
      freq: TicketFreq.sometimes,
      environment: {
        Os: 'iOS 17.0.3',
        Browser: 'None',
        AppVersion: 'Production',
        Device: 'iPhone 13'
      },
      additional: {
        screenShots: null,
        Logs: null
      }
    },
    {
      title: 'Crash on switching tabs in analytics',
      desc: 'Switching tabs in the analytics section causes the app to crash.',
      steps: 'Open the analytics section, switch between tabs rapidly, observe.',
      priority: Priority.high,
      severity: Severity.critical,
      dateTime: new Date('2024-11-18T16:05:10'),
      freq: TicketFreq.often,
      environment: {
        Os: 'macOS Sonoma 14.1',
        Browser: 'Safari 17.0',
        AppVersion: 'Preview',
        Device: 'MacBook Air M2'
      },
      additional: {
        screenShots: null,
        Logs: null
      }
    },
    {
      title: 'Writing Tools prompt crash on Safari',
      desc: 'When selecting text from the search bar and opting for Writing Tools, the prompt crashes Safari and the tools are unusable.',
      steps: 'Open Safari, search something in the search bar, select the text, opt for Writing Tools, observe.',
      priority: Priority.severe,
      severity: Severity.critical,
      dateTime: new Date('2024-11-23T12:34:56'),
      freq: TicketFreq.often,
      environment: {
        Os: 'iOS 18.2 beta 3',
        Browser: 'Safari',
        AppVersion: 'Beta',
        Device: 'iPhone 16'
      },
      additional: {
        screenShots: null,
        Logs: null
      }
    },
    {
      title: 'Login page loads indefinitely on Chrome',
      desc: 'When entering credentials on the login page, the spinner appears but the page never completes loading.',
      steps: 'Open Chrome, navigate to the login page, enter credentials, click Login, observe.',
      priority: Priority.high,
      severity: Severity.major,
      dateTime: new Date('2024-11-20T09:15:30'),
      freq: TicketFreq.often,
      environment: {
        Os: 'Windows 11',
        Browser: 'Chrome 119.0',
        AppVersion: 'Production',
        Device: 'Dell Inspiron 14'
      },
      additional: {
        screenShots: null,
        Logs: null
      }
    },
    {
      title: 'Dark mode not applied in settings',
      desc: 'Enabling dark mode in settings doesn’t change the UI, and the app remains in light mode.',
      steps: 'Open the app, go to settings, enable dark mode, observe.',
      priority: Priority.medium,
      severity: Severity.minor,
      dateTime: new Date('2024-11-22T18:45:10'),
      freq: TicketFreq.sometimes,
      environment: {
        Os: 'Android 14',
        Browser: 'None',
        AppVersion: 'Stable',
        Device: 'Samsung Galaxy S22'
      },
      additional: {
        screenShots: null,
        Logs: null
      }
    },
    {
      title: 'Text overlaps in table on Firefox',
      desc: 'When viewing the dashboard table, text in columns overlaps, making it unreadable.',
      steps: 'Open Firefox, navigate to the dashboard, observe the table layout.',
      priority: Priority.low,
      severity: Severity.minor,
      dateTime: new Date('2024-11-21T14:12:00'),
      freq: TicketFreq.rarely,
      environment: {
        Os: 'Ubuntu 22.04',
        Browser: 'Firefox 118.0',
        AppVersion: 'Beta',
        Device: 'Desktop PC'
      },
      additional: {
        screenShots: null,
        Logs: null
      }
    },
    {
      title: 'Notifications are delayed by 10 minutes',
      desc: 'Notifications from the app are received 10 minutes after the event occurs.',
      steps: 'Trigger any notification, observe the delay in its arrival.',
      priority: Priority.medium,
      severity: Severity.major,
      dateTime: new Date('2024-11-19T08:22:45'),
      freq: TicketFreq.sometimes,
      environment: {
        Os: 'iOS 17.0.3',
        Browser: 'None',
        AppVersion: 'Production',
        Device: 'iPhone 13'
      },
      additional: {
        screenShots: null,
        Logs: null
      }
    },
    {
      title: 'Crash on switching tabs in analytics',
      desc: 'Switching tabs in the analytics section causes the app to crash.',
      steps: 'Open the analytics section, switch between tabs rapidly, observe.',
      priority: Priority.high,
      severity: Severity.critical,
      dateTime: new Date('2024-11-18T16:05:10'),
      freq: TicketFreq.often,
      environment: {
        Os: 'macOS Sonoma 14.1',
        Browser: 'Safari 17.0',
        AppVersion: 'Preview',
        Device: 'MacBook Air M2'
      },
      additional: {
        screenShots: null,
        Logs: null
      }
    }
  ];


}
