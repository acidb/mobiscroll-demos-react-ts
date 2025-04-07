import { Eventcalendar, MbscCalendarEvent, MbscEventcalendarView, MbscResource, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useCallback, useMemo } from 'react';
import './dynamic-content-based-resource-width.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const icons = useMemo<{ [key: string]: { title: string; svg: string } }>(
    () => ({
      office: {
        title: 'In office',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 113.05" style="width: 20px; enable-background:new 0 0 122.88 113.05"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M0,100.07h14.72V1.57c0-0.86,0.71-1.57,1.57-1.57h49.86c0.86,0,1.57,0.71,1.57,1.57V38.5h44.12 c0.86,0,1.57,0.71,1.57,1.57v59.99h9.47v12.99H0V100.07L0,100.07z M27.32,14.82h10.2c0.31,0,0.57,0.26,0.57,0.57v12.36 c0,0.31-0.26,0.57-0.57,0.57h-10.2c-0.31,0-0.57-0.26-0.57-0.57V15.39C26.75,15.08,27.01,14.82,27.32,14.82L27.32,14.82z M44.6,76.3h10.2c0.31,0,0.57,0.26,0.57,0.57v12.36c0,0.31-0.26,0.57-0.57,0.57H44.6c-0.31,0-0.57-0.26-0.57-0.57V76.87 C44.03,76.55,44.29,76.3,44.6,76.3L44.6,76.3z M27.32,76.3h10.2c0.31,0,0.57,0.26,0.57,0.57v12.36c0,0.31-0.26,0.57-0.57,0.57 h-10.2c-0.31,0-0.57-0.26-0.57-0.57V76.87C26.75,76.55,27.01,76.3,27.32,76.3L27.32,76.3z M44.6,55.8h10.2 c0.31,0,0.57,0.26,0.57,0.57v12.36c0,0.31-0.26,0.57-0.57,0.57H44.6c-0.31,0-0.57-0.26-0.57-0.57V56.38 C44.03,56.06,44.29,55.8,44.6,55.8L44.6,55.8z M27.32,55.8h10.2c0.31,0,0.57,0.26,0.57,0.57v12.36c0,0.31-0.26,0.57-0.57,0.57 h-10.2c-0.31,0-0.57-0.26-0.57-0.57V56.38C26.75,56.06,27.01,55.8,27.32,55.8L27.32,55.8z M44.6,35.31h10.2 c0.31,0,0.57,0.26,0.57,0.57v12.36c0,0.31-0.26,0.57-0.57,0.57H44.6c-0.31,0-0.57-0.26-0.57-0.57V35.88 C44.03,35.57,44.29,35.31,44.6,35.31L44.6,35.31z M27.32,35.31h10.2c0.31,0,0.57,0.26,0.57,0.57v12.36c0,0.31-0.26,0.57-0.57,0.57 h-10.2c-0.31,0-0.57-0.26-0.57-0.57V35.88C26.75,35.57,27.01,35.31,27.32,35.31L27.32,35.31z M44.6,14.82h10.2 c0.31,0,0.57,0.26,0.57,0.57v12.36c0,0.31-0.26,0.57-0.57,0.57H44.6c-0.31,0-0.57-0.26-0.57-0.57V15.39 C44.03,15.08,44.29,14.82,44.6,14.82L44.6,14.82z M23.17,7.32h35.92c0.62,0,1.13,0.61,1.13,1.35v85.87c0,0.74-0.51,1.35-1.13,1.35 H23.17c-0.62,0-1.13-0.61-1.13-1.35V8.67C22.04,7.93,22.55,7.32,23.17,7.32L23.17,7.32z M72.61,53.43h10.2 c0.31,0,0.57,0.26,0.57,0.57v12.36c0,0.31-0.26,0.57-0.57,0.57h-10.2c-0.31,0-0.57-0.26-0.57-0.57V54 C72.04,53.69,72.3,53.43,72.61,53.43L72.61,53.43z M89.89,76.3h10.2c0.31,0,0.57,0.26,0.57,0.57v12.36c0,0.31-0.26,0.57-0.57,0.57 h-10.2c-0.31,0-0.57-0.26-0.57-0.57V76.87C89.32,76.55,89.58,76.3,89.89,76.3L89.89,76.3z M72.61,76.3h10.2 c0.31,0,0.57,0.26,0.57,0.57v12.36c0,0.31-0.26,0.57-0.57,0.57h-10.2c-0.31,0-0.57-0.26-0.57-0.57V76.87 C72.04,76.55,72.3,76.3,72.61,76.3L72.61,76.3z M89.89,53.43h10.2c0.31,0,0.57,0.26,0.57,0.57v12.36c0,0.31-0.26,0.57-0.57,0.57 h-10.2c-0.31,0-0.57-0.26-0.57-0.57V54C89.32,53.69,89.58,53.43,89.89,53.43L89.89,53.43z M68.86,45.82h35.92 c0.62,0,1.13,0.61,1.13,1.35v47.37c0,0.74-0.51,1.35-1.13,1.35H68.86c-0.62,0-1.13-0.61-1.13-1.35V47.17 C67.73,46.43,68.24,45.82,68.86,45.82L68.86,45.82z"/></g></svg>',
      },
      developer: {
        title: 'Developer',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 103.53" style="width: 20px; enable-background:new 0 0 122.88 103.53"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path title="Developer" class="st0" d="M5.47,0h111.93c3.01,0,5.47,2.46,5.47,5.47v92.58c0,3.01-2.46,5.47-5.47,5.47H5.47 c-3.01,0-5.47-2.46-5.47-5.47V5.47C0,2.46,2.46,0,5.47,0L5.47,0z M31.84,38.55l17.79,18.42l2.14,2.13l-2.12,2.16L31.68,80.31 l-5.07-5l15.85-16.15L26.81,43.6L31.84,38.55L31.84,38.55z M94.1,79.41H54.69v-6.84H94.1V79.41L94.1,79.41z M38.19,9.83 c3.19,0,5.78,2.59,5.78,5.78s-2.59,5.78-5.78,5.78c-3.19,0-5.78-2.59-5.78-5.78S35,9.83,38.19,9.83L38.19,9.83z M18.95,9.83 c3.19,0,5.78,2.59,5.78,5.78s-2.59,5.78-5.78,5.78c-3.19,0-5.78-2.59-5.78-5.78S15.75,9.83,18.95,9.83L18.95,9.83z M7.49,5.41 h107.91c1.15,0,2.09,0.94,2.09,2.09v18.32H5.4V7.5C5.4,6.35,6.34,5.41,7.49,5.41L7.49,5.41z"/></g></svg>',
      },
      designer: {
        title: 'Designer',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 98.21" style="width: 20px; enable-background:new 0 0 122.88 98.21"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M49.11,35.13c7.2,5.16,18.74-0.38,23.28,8.6c1.2,2.38,1.46,5.64,0.38,8.23c-0.44,1.04-1.08,1.97-1.96,2.68 c-0.39,0.31-0.82,0.59-1.3,0.83c-5.92,2.94-12.1-1.17-15.37-6.14C51.13,44.75,49.82,39.04,49.11,35.13L49.11,35.13z M100.01,0H7.26 C3.27,0,0,3.27,0,7.26v77.78c0,3.99,3.27,7.26,7.26,7.26h72.36l-6.27-5.34H7.12c-0.56,0-1.05-0.21-1.42-0.59 c-0.37-0.37-0.59-0.87-0.59-1.42V20.33H5.08h96.79V50l5.4,4.38V7.26C107.27,3.27,104,0,100.01,0L100.01,0z M14.17,8.16 c-1.98,0-3.59,1.61-3.59,3.59c0,1.98,1.61,3.58,3.59,3.58c1.98,0,3.59-1.61,3.59-3.58C17.76,9.77,16.15,8.16,14.17,8.16L14.17,8.16 z M38.48,8.16c-1.98,0-3.59,1.61-3.59,3.59c0,1.98,1.6,3.58,3.59,3.58c1.98,0,3.59-1.61,3.59-3.58 C42.07,9.77,40.46,8.16,38.48,8.16L38.48,8.16z M26.33,8.16c-1.98,0-3.59,1.61-3.59,3.59c0,1.98,1.61,3.58,3.59,3.58 c1.98,0,3.59-1.61,3.59-3.58C29.91,9.77,28.31,8.16,26.33,8.16L26.33,8.16z M85.63,74.54c4.01-3.2,7.12-6.89,9.24-11.12l25.8,27.21 c1.95,1.84,3.05,3.41,1.42,6.23c-0.81,0.83-1.67,1.28-2.58,1.34c-0.9,0.06-1.85-0.26-2.84-0.98L85.63,74.54L85.63,74.54z M72.02,58.75c1.74-0.93,4.12-3.23,4.69-5.74l16.15,8.86c-2.33,4.64-5.3,8.61-9.37,11.43C79.24,67.6,76.86,64.16,72.02,58.75 L72.02,58.75z"/></g></svg>',
      },
      support: {
        title: 'Support',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 122.88 122.879" enable-background="new 0 0 122.88 122.879"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M61.438,0c33.929,0,61.441,27.513,61.441,61.438 c0,33.93-27.513,61.441-61.441,61.441C27.513,122.879,0,95.367,0,61.438C0,27.512,27.513,0,61.438,0L61.438,0z M61.438,28.975 c3.912,0,7.666,0.693,11.138,1.962l14.3-14.299c-7.504-4.272-16.187-6.712-25.438-6.712c-9.348,0-18.117,2.492-25.678,6.851 l14.267,14.264C53.579,29.707,57.425,28.975,61.438,28.975L61.438,28.975z M92.362,51.535c1,3.123,1.542,6.452,1.542,9.903 c0,4.016-0.732,7.863-2.068,11.414l14.267,14.268c4.356-7.561,6.852-16.33,6.852-25.682c0-8.814-2.218-17.114-6.123-24.372 L92.362,51.535L92.362,51.535z M71.056,92.455c-3.038,0.941-6.271,1.449-9.617,1.449c-3.451,0-6.78-0.543-9.903-1.543 l-14.469,14.467c7.257,3.906,15.558,6.125,24.372,6.125c8.718,0,16.927-2.17,24.125-5.992L71.056,92.455L71.056,92.455 L71.056,92.455z M30.939,72.574c-1.271-3.473-1.964-7.225-1.964-11.137c0-3.344,0.508-6.576,1.449-9.615L15.918,37.316 c-3.822,7.198-5.992,15.408-5.992,24.122c0,9.25,2.442,17.932,6.712,25.436L30.939,72.574L30.939,72.574L30.939,72.574z M83.914,61.438c0,1.107-0.081,2.195-0.235,3.26c-0.022,0.158-0.049,0.322-0.075,0.48l-0.002,0.014 c-0.932,5.545-3.896,10.4-8.096,13.775l-0.031,0.023c-0.109,0.09-0.221,0.176-0.329,0.262l-0.065,0.049 c-0.875,0.666-1.801,1.273-2.762,1.807l-0.002,0.002c-0.131,0.072-0.263,0.145-0.396,0.213l-0.048,0.027 c-0.134,0.068-0.269,0.139-0.401,0.205l-0.008,0.004c-0.997,0.498-2.041,0.924-3.104,1.268l-0.039,0.012 c-0.146,0.049-0.293,0.094-0.439,0.137l-0.022,0.006c-0.149,0.047-0.302,0.09-0.454,0.133l-0.012,0.002 c-0.932,0.254-1.888,0.451-2.846,0.582l-0.077,0.012c-0.141,0.02-0.284,0.035-0.426,0.055l-0.082,0.008 c-0.141,0.016-0.28,0.029-0.424,0.043l-0.098,0.01l-0.424,0.033l-0.072,0.006c-0.149,0.008-0.299,0.018-0.451,0.023 c-0.35,0.018-0.701,0.025-1.055,0.025c-0.474,0-0.945-0.016-1.413-0.047c-5.388-0.334-10.262-2.568-13.96-6.039l-0.002-0.002 c-0.914-0.854-1.76-1.797-2.518-2.793l-0.03-0.039c-0.09-0.117-0.181-0.24-0.27-0.361l-0.014-0.02 c-0.086-0.121-0.179-0.248-0.264-0.371l-0.014-0.021c-0.533-0.771-1.025-1.58-1.458-2.41l-0.022-0.043 c-0.063-0.123-0.125-0.248-0.186-0.369l-0.035-0.07c-0.058-0.119-0.119-0.246-0.175-0.365l-0.043-0.088 c-0.056-0.123-0.11-0.248-0.165-0.371l-0.029-0.068c-0.057-0.127-0.111-0.256-0.166-0.385l-0.032-0.08 c-0.052-0.127-0.104-0.256-0.157-0.385l-0.006-0.02c-0.222-0.58-0.426-1.174-0.603-1.77l-0.021-0.072 c-0.038-0.133-0.074-0.266-0.11-0.398l-0.025-0.088c-0.036-0.129-0.07-0.266-0.101-0.396l-0.024-0.1 c-0.032-0.125-0.063-0.256-0.09-0.381l-0.027-0.125c-0.025-0.127-0.057-0.266-0.082-0.395l-0.008-0.049 c-0.091-0.463-0.168-0.93-0.229-1.404c-0.128-0.975-0.195-1.961-0.195-2.945v-0.004c0-0.354,0.012-0.703,0.025-1.049 c0.326-7.102,3.952-13.346,9.379-17.232c7.67-4.949,18.448-4.953,26.123-0.012c5.344,3.819,8.946,9.921,9.377,16.881l0.009-0.007 C83.9,60.485,83.914,60.957,83.914,61.438L83.914,61.438L83.914,61.438z"/></g></svg>',
      },
      vacation: {
        title: 'On holiday',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.52 122.88" style="width: 20px; height: 20px; enable-background:new 0 0 101.52 122.88"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M25.73,87.87c1.9-22.06,5.7-40.18,21.5-47.37c8.89,26.88,1.86,52.62-8.49,82.38h16.13 c10.12-47.61,4.97-65.06-1.19-80.59c9.73,6.12,18.4,19.33,26.7,40.27c11.65-21.72,4.25-37.66-23.41-48.02 c15.82-4.89,30.65,1.35,44.56,13.66c-7.45-28.07-28.7-34.87-47.68-18.84C56.44,9.25,48.14,4.41,37.02,0 c5.23,7.96,9.2,16.26,8.6,25.8C28.46,10.05,14.19,15.88,1,29.75c12.65-2.96,25.74-4.2,36.79,3.2C17.96,30.43,6.86,41.61,0,56.29 c8.3-7.6,16.11-12.52,24.41-13.42C15.71,58.64,19.56,72.58,25.73,87.87L25.73,87.87z"/></g></svg>',
      },
      unavailable: {
        title: 'Not available',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 122.88 122.88" enable-background="new 0 0 122.88 122.88"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M61.44,0c33.926,0,61.44,27.514,61.44,61.44c0,33.926-27.514,61.439-61.44,61.439 C27.513,122.88,0,95.366,0,61.44C0,27.514,27.513,0,61.44,0L61.44,0z M98.505,37.049L37.051,98.503 c6.999,4.617,15.379,7.307,24.389,7.307c24.5,0,44.369-19.869,44.369-44.369C105.809,52.431,103.119,44.05,98.505,37.049 L98.505,37.049L98.505,37.049z M24.378,85.829l61.453-61.454c-6.997-4.615-15.381-7.304-24.391-7.304 c-24.5,0-44.369,19.87-44.369,44.369C17.072,70.449,19.761,78.83,24.378,85.829L24.378,85.829L24.378,85.829z"/></g></svg>',
      },
    }),
    [],
  );

  const myEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      {
        id: 1,
        resource: 1,
        title: 'Bug Fix',
        start: 'dyndatetime(y, m, d, 9, 15)',
        end: 'dyndatetime(y, m, d, 10, 45)',
      },
      {
        id: 2,
        resource: 3,
        title: 'API Integration',
        start: 'dyndatetime(y, m, d, 9, 0)',
        end: 'dyndatetime(y, m, d, 11, 0)',
      },
      {
        id: 3,
        resource: 4,
        title: 'Ticket Resolution',
        start: 'dyndatetime(y, m, d, 12, 30)',
        end: 'dyndatetime(y, m, d, 15, 0)',
      },
      {
        id: 4,
        resource: 3,
        title: 'Code Optimization',
        start: 'dyndatetime(y, m, d, 15, 30)',
        end: 'dyndatetime(y, m, d, 17, 15)',
      },
      //<hide-comment>
      {
        id: 5,
        resource: 1,
        title: 'Performance Tuning',
        start: 'dyndatetime(y, m, d, 14, 45)',
        end: 'dyndatetime(y, m, d, 16, 0)',
      },
      {
        id: 6,
        resource: 1,
        title: 'Deploy Patch',
        start: 'dyndatetime(y, m, d + 2, 9, 0)',
        end: 'dyndatetime(y, m, d + 2, 10, 30)',
      },
      {
        id: 7,
        resource: 4,
        title: 'Follow-up Support',
        start: 'dyndatetime(y, m, d + 2, 13, 0)',
        end: 'dyndatetime(y, m, d + 2, 15, 0)',
      },
      {
        id: 8,
        resource: 3,
        title: 'Incident Review',
        start: 'dyndatetime(y, m, d + 2, 16, 0)',
        end: 'dyndatetime(y, m, d + 2, 18, 0)',
      },
      {
        id: 9,
        resource: 3,
        title: 'API Debugging',
        start: 'dyndatetime(y, m, d + 2, 10, 15)',
        end: 'dyndatetime(y, m, d + 2, 12, 15)',
      },
      {
        id: 10,
        resource: 1,
        title: 'DB Cleanup',
        start: 'dyndatetime(y, m, d + 3, 15, 0)',
        end: 'dyndatetime(y, m, d + 3, 16, 30)',
      },
      {
        id: 11,
        resource: 3,
        title: 'Code Review',
        start: 'dyndatetime(y, m, d + 3, 9, 45)',
        end: 'dyndatetime(y, m, d + 3, 11, 15)',
      },
      {
        id: 12,
        resource: 3,
        title: 'System Update',
        start: 'dyndatetime(y, m, d + 3, 12, 45)',
        end: 'dyndatetime(y, m, d + 3, 15, 0)',
      },
      {
        id: 13,
        resource: 4,
        title: 'Escalation Handling',
        start: 'dyndatetime(y, m, d + 3, 15, 0)',
        end: 'dyndatetime(y, m, d + 3, 17, 30)',
      },
      {
        id: 14,
        resource: 1,
        title: 'Code Review',
        start: 'dyndatetime(y, m, d + 1, 11, 0)',
        end: 'dyndatetime(y, m, d + 1, 12, 30)',
      },
      {
        id: 15,
        resource: 3,
        title: 'Ticket Handling',
        start: 'dyndatetime(y, m, d + 1, 15, 45)',
        end: 'dyndatetime(y, m, d + 1, 17, 15)',
      },
      {
        id: 16,
        resource: 4,
        title: 'Live Chat',
        start: 'dyndatetime(y, m, d + 1, 11, 0)',
        end: 'dyndatetime(y, m, d + 1, 13, 0)',
      },
      {
        id: 17,
        resource: 3,
        title: 'Event Review',
        start: 'dyndatetime(y, m, d + 1, 8, 15)',
        end: 'dyndatetime(y, m, d + 1, 9, 45)',
      },
      {
        id: 18,
        resource: 3,
        title: 'Event Update',
        start: 'dyndatetime(y, m, d + 1, 12, 30)',
        end: 'dyndatetime(y, m, d + 1, 14, 30)',
      },
      {
        id: 19,
        resource: 1,
        title: 'Performance Test',
        start: 'dyndatetime(y, m, d + 4, 9, 30)',
        end: 'dyndatetime(y, m, d + 4, 11, 0)',
      },
      {
        id: 20,
        resource: 3,
        title: 'Query Optimization',
        start: 'dyndatetime(y, m, d + 4, 11, 30)',
        end: 'dyndatetime(y, m, d + 4, 13, 15)',
      },
      {
        id: 21,
        resource: 3,
        title: 'Patch Review',
        start: 'dyndatetime(y, m, d + 4, 15, 45)',
        end: 'dyndatetime(y, m, d + 4, 17, 30)',
      },
      {
        id: 22,
        resource: 4,
        title: 'Support Call',
        start: 'dyndatetime(y, m, d + 4, 9, 15)',
        end: 'dyndatetime(y, m, d + 4, 11, 30)',
      },
      {
        id: 23,
        resource: 4,
        title: 'Issue Resolution',
        start: 'dyndatetime(y, m, d + 4, 13, 0)',
        end: 'dyndatetime(y, m, d + 4, 15, 0)',
      },
      {
        id: 24,
        resource: 4,
        title: 'Support Review',
        start: 'dyndatetime(y, m, d - 1, 10, 15)',
        end: 'dyndatetime(y, m, d - 1, 12, 0)',
      },
      {
        id: 25,
        resource: 4,
        title: 'Ticket Update',
        start: 'dyndatetime(y, m, d - 1, 13, 0)',
        end: 'dyndatetime(y, m, d - 1, 15, 0)',
      },
      {
        id: 26,
        resource: 3,
        title: 'System Test',
        start: 'dyndatetime(y, m, d - 1, 9, 0)',
        end: 'dyndatetime(y, m, d - 1, 10, 30)',
      },
      {
        id: 27,
        resource: 3,
        title: 'API Testing',
        start: 'dyndatetime(y, m, d - 1, 13, 30)',
        end: 'dyndatetime(y, m, d - 1, 15, 0)',
      },
      {
        id: 28,
        resource: 1,
        title: 'Code Review',
        start: 'dyndatetime(y, m, d - 1, 10, 0)',
        end: 'dyndatetime(y, m, d - 1, 10, 45)',
      },
      {
        id: 29,
        resource: 1,
        title: 'System Update',
        start: 'dyndatetime(y, m, d - 1, 11, 0)',
        end: 'dyndatetime(y, m, d - 1, 12, 30)',
      },
      {
        id: 30,
        resource: 1,
        title: 'Performance Test',
        start: 'dyndatetime(y, m, d - 1, 14, 45)',
        end: 'dyndatetime(y, m, d - 1, 15, 45)',
      },
      {
        id: 31,
        resource: 4,
        title: 'Escalation',
        start: 'dyndatetime(y, m, d - 2, 12, 15)',
        end: 'dyndatetime(y, m, d - 2, 14, 0)',
      },
      {
        id: 32,
        resource: 4,
        title: 'Live Support',
        start: 'dyndatetime(y, m, d - 2, 8, 15)',
        end: 'dyndatetime(y, m, d - 2, 10, 0)',
      },
      {
        id: 33,
        resource: 3,
        title: 'API Debugging',
        start: 'dyndatetime(y, m, d - 2, 11, 0)',
        end: 'dyndatetime(y, m, d - 2, 12, 45)',
      },
      {
        id: 34,
        resource: 3,
        title: 'Performance Check',
        start: 'dyndatetime(y, m, d - 2, 14, 45)',
        end: 'dyndatetime(y, m, d - 2, 16, 30)',
      },
      {
        id: 35,
        resource: 1,
        title: 'Code Optimization',
        start: 'dyndatetime(y, m, d - 2, 9, 0)',
        end: 'dyndatetime(y, m, d - 2, 10, 30)',
      },
      {
        id: 36,
        resource: 1,
        title: 'System Review',
        start: 'dyndatetime(y, m, d - 2, 13, 15)',
        end: 'dyndatetime(y, m, d - 2, 14, 45)',
      },
      {
        id: 37,
        resource: 4,
        title: 'Support Session',
        start: 'dyndatetime(y, m, d - 3, 11, 15)',
        end: 'dyndatetime(y, m, d - 3, 13, 0)',
      },
      {
        id: 38,
        resource: 3,
        title: 'Bug Fixing',
        start: 'dyndatetime(y, m, d - 3, 9, 15)',
        end: 'dyndatetime(y, m, d - 3, 11, 0)',
      },
      {
        id: 39,
        resource: 3,
        title: 'API Review',
        start: 'dyndatetime(y, m, d - 3, 14, 15)',
        end: 'dyndatetime(y, m, d - 3, 16, 0)',
      },
      {
        id: 40,
        resource: 1,
        title: 'DB Update',
        start: 'dyndatetime(y, m, d - 3, 12, 0)',
        end: 'dyndatetime(y, m, d - 3, 13, 0)',
      },
      {
        id: 41,
        resource: 1,
        title: 'Session',
        start: 'dyndatetime(y, m, d - 3, 10, 0)',
        end: 'dyndatetime(y, m, d - 3, 11, 0)',
      },
      {
        id: 42,
        resource: 1,
        title: 'Review',
        start: 'dyndatetime(y, m, d - 3, 15, 0)',
        end: 'dyndatetime(y, m, d - 3, 16, 0)',
      },
      {
        id: 43,
        resource: 4,
        title: 'Team Meet',
        start: 'dyndatetime(y, m, d - 4, 12, 30)',
        end: 'dyndatetime(y, m, d - 4, 14, 30)',
      },
      {
        id: 44,
        resource: 4,
        title: 'Client Meet',
        start: 'dyndatetime(y, m, d - 4, 8, 45)',
        end: 'dyndatetime(y, m, d - 4, 10, 30)',
      },
      {
        id: 45,
        resource: 3,
        title: 'Update Review',
        start: 'dyndatetime(y, m, d - 4, 14, 30)',
        end: 'dyndatetime(y, m, d - 4, 16, 45)',
      },
      {
        id: 46,
        resource: 3,
        title: 'Test Session',
        start: 'dyndatetime(y, m, d - 4, 10, 45)',
        end: 'dyndatetime(y, m, d - 4, 12, 15)',
      },
      {
        id: 47,
        resource: 1,
        title: 'Code Sync',
        start: 'dyndatetime(y, m, d - 4, 9, 15)',
        end: 'dyndatetime(y, m, d - 4, 11, 0)',
      },
      {
        id: 48,
        resource: 1,
        title: 'Dev Update',
        start: 'dyndatetime(y, m, d - 4, 13, 30)',
        end: 'dyndatetime(y, m, d - 4, 14, 30)',
      },
      {
        id: 49,
        resource: 4,
        title: 'Client Call',
        start: 'dyndatetime(y, m, d - 5, 11, 0)',
        end: 'dyndatetime(y, m, d - 5, 13, 0)',
      },
      {
        id: 50,
        resource: 4,
        title: 'Sync Meeting',
        start: 'dyndatetime(y, m, d - 5, 15, 0)',
        end: 'dyndatetime(y, m, d - 5, 16, 45)',
      },
      {
        id: 51,
        resource: 1,
        title: 'Standup',
        start: 'dyndatetime(y, m, d - 5, 10, 0)',
        end: 'dyndatetime(y, m, d - 5, 11, 0)',
      },
      {
        id: 52,
        resource: 3,
        title: 'Test Review',
        start: 'dyndatetime(y, m, d - 5, 13, 45)',
        end: 'dyndatetime(y, m, d - 5, 15, 0)',
      },
      {
        id: 53,
        resource: 3,
        title: 'Bug Fix',
        start: 'dyndatetime(y, m, d - 5, 9, 0)',
        end: 'dyndatetime(y, m, d - 5, 10, 0)',
      },
      {
        id: 54,
        resource: 3,
        title: 'API Debug',
        start: 'dyndatetime(y, m, d - 5, 11, 0)',
        end: 'dyndatetime(y, m, d - 5, 13, 0)',
      },
      {
        id: 55,
        resource: 1,
        title: 'Sync Up',
        start: 'dyndatetime(y, m, d - 7, 10, 0)',
        end: 'dyndatetime(y, m, d - 7, 11, 0)',
      },
      {
        id: 56,
        resource: 1,
        title: 'Team Sync',
        start: 'dyndatetime(y, m, d - 7, 14, 0)',
        end: 'dyndatetime(y, m, d - 7, 15, 0)',
      },
      {
        id: 57,
        resource: 3,
        title: 'Dev Test',
        start: 'dyndatetime(y, m, d - 7, 9, 0)',
        end: 'dyndatetime(y, m, d - 7, 11, 0)',
      },
      {
        id: 58,
        resource: 3,
        title: 'Bug Review',
        start: 'dyndatetime(y, m, d - 7, 12, 0)',
        end: 'dyndatetime(y, m, d - 7, 13, 30)',
      },
      {
        id: 59,
        resource: 3,
        title: 'API Test',
        start: 'dyndatetime(y, m, d - 7, 14, 30)',
        end: 'dyndatetime(y, m, d - 7, 17, 0)',
      },
      {
        id: 60,
        resource: 4,
        title: 'Client Sync',
        start: 'dyndatetime(y, m, d - 7, 10, 0)',
        end: 'dyndatetime(y, m, d - 7, 12, 0)',
      },
      {
        id: 61,
        resource: 1,
        title: 'Team Sync',
        start: 'dyndatetime(y, m, d - 6, 14, 0)',
        end: 'dyndatetime(y, m, d - 6, 15, 0)',
      },
      {
        id: 62,
        resource: 3,
        title: 'Test Event',
        start: 'dyndatetime(y, m, d - 6, 9, 30)',
        end: 'dyndatetime(y, m, d - 6, 12, 0)',
      },
      {
        id: 63,
        resource: 4,
        title: 'Sync Check',
        start: 'dyndatetime(y, m, d - 6, 12, 30)',
        end: 'dyndatetime(y, m, d - 6, 15, 0)',
      },
      {
        id: 64,
        resource: 4,
        title: 'Team Meeting',
        start: 'dyndatetime(y, m, d + 7, 9, 0)',
        end: 'dyndatetime(y, m, d + 7, 11, 0)',
      },
      {
        id: 65,
        resource: 4,
        title: 'Planning',
        start: 'dyndatetime(y, m, d + 7, 12, 0)',
        end: 'dyndatetime(y, m, d + 7, 13, 45)',
      },
      {
        id: 66,
        resource: 4,
        title: 'Quick Check',
        start: 'dyndatetime(y, m, d + 7, 15, 0)',
        end: 'dyndatetime(y, m, d + 7, 16, 45)',
      },
      {
        id: 67,
        resource: 3,
        title: 'Code Review',
        start: 'dyndatetime(y, m, d + 7, 9, 45)',
        end: 'dyndatetime(y, m, d + 7, 11, 30)',
      },
      {
        id: 68,
        resource: 3,
        title: 'Test Run',
        start: 'dyndatetime(y, m, d + 7, 12, 45)',
        end: 'dyndatetime(y, m, d + 7, 14, 0)',
      },
      {
        id: 69,
        resource: 1,
        title: 'Code Sync',
        start: 'dyndatetime(y, m, d + 7, 11, 15)',
        end: 'dyndatetime(y, m, d + 7, 12, 15)',
      },
      {
        id: 70,
        resource: 1,
        title: 'Dev Check',
        start: 'dyndatetime(y, m, d + 7, 14, 30)',
        end: 'dyndatetime(y, m, d + 7, 15, 30)',
      },
      {
        id: 71,
        resource: 1,
        title: 'Team Sync',
        start: 'dyndatetime(y, m, d + 7, 8, 45)',
        end: 'dyndatetime(y, m, d + 7, 9, 45)',
      },
      {
        id: 72,
        resource: 4,
        title: 'Team Meet',
        start: 'dyndatetime(y, m, d + 6, 8, 30)',
        end: 'dyndatetime(y, m, d + 6, 10, 45)',
      },
      {
        id: 73,
        resource: 4,
        title: 'Strategy Session',
        start: 'dyndatetime(y, m, d + 6, 14, 45)',
        end: 'dyndatetime(y, m, d + 6, 16, 45)',
      },
      {
        id: 74,
        resource: 3,
        title: 'Test Review',
        start: 'dyndatetime(y, m, d + 6, 9, 0)',
        end: 'dyndatetime(y, m, d + 6, 10, 30)',
      },
      {
        id: 75,
        resource: 3,
        title: 'API Check',
        start: 'dyndatetime(y, m, d + 6, 11, 15)',
        end: 'dyndatetime(y, m, d + 6, 12, 30)',
      },
      {
        id: 76,
        resource: 3,
        title: 'Feature Test',
        start: 'dyndatetime(y, m, d + 6, 16, 0)',
        end: 'dyndatetime(y, m, d + 6, 17, 45)',
      },
      {
        id: 77,
        resource: 1,
        title: 'Project Sync',
        start: 'dyndatetime(y, m, d + 6, 9, 15)',
        end: 'dyndatetime(y, m, d + 6, 11, 0)',
      },
      {
        id: 78,
        resource: 1,
        title: 'Team Meeting',
        start: 'dyndatetime(y, m, d + 6, 12, 30)',
        end: 'dyndatetime(y, m, d + 6, 13, 30)',
      },
      {
        id: 79,
        resource: 1,
        title: 'Review Session',
        start: 'dyndatetime(y, m, d + 6, 14, 30)',
        end: 'dyndatetime(y, m, d + 6, 15, 30)',
      },
      {
        id: 80,
        resource: 4,
        title: 'Code Check',
        start: 'dyndatetime(y, m, d + 5, 10, 15)',
        end: 'dyndatetime(y, m, d + 5, 12, 15)',
      },
      {
        id: 81,
        resource: 4,
        title: 'Team Sync',
        start: 'dyndatetime(y, m, d + 5, 13, 30)',
        end: 'dyndatetime(y, m, d + 5, 15, 30)',
      },
      {
        id: 82,
        resource: 3,
        title: 'Bug Review',
        start: 'dyndatetime(y, m, d + 5, 9, 0)',
        end: 'dyndatetime(y, m, d + 5, 10, 15)',
      },
      {
        id: 83,
        resource: 3,
        title: 'Feature Review',
        start: 'dyndatetime(y, m, d + 5, 12, 30)',
        end: 'dyndatetime(y, m, d + 5, 13, 45)',
      },
      {
        id: 84,
        resource: 3,
        title: 'API Sync',
        start: 'dyndatetime(y, m, d + 5, 15, 15)',
        end: 'dyndatetime(y, m, d + 5, 17, 0)',
      },
      {
        id: 85,
        resource: 1,
        title: 'Daily Sync',
        start: 'dyndatetime(y, m, d + 5, 9, 15)',
        end: 'dyndatetime(y, m, d + 5, 10, 15)',
      },
      {
        id: 86,
        resource: 1,
        title: 'Client Sync',
        start: 'dyndatetime(y, m, d + 5, 12, 0)',
        end: 'dyndatetime(y, m, d + 5, 13, 15)',
      },
      {
        id: 87,
        resource: 1,
        title: 'Final Review',
        start: 'dyndatetime(y, m, d + 5, 14, 45)',
        end: 'dyndatetime(y, m, d + 5, 16, 0)',
      },
      {
        id: 88,
        resource: 4,
        title: 'Ticket Triage',
        start: 'dyndatetime(y, m, d - 8, 11, 0)',
        end: 'dyndatetime(y, m, d - 8, 13, 0)',
      },
      {
        id: 89,
        resource: 1,
        title: 'Code Review',
        start: 'dyndatetime(y, m, d - 8, 9, 0)',
        end: 'dyndatetime(y, m, d - 8, 10, 30)',
      },
      {
        id: 90,
        resource: 1,
        title: 'API Testing',
        start: 'dyndatetime(y, m, d - 8, 12, 0)',
        end: 'dyndatetime(y, m, d - 8, 15, 0)',
      },
      {
        id: 91,
        resource: 3,
        title: 'Fix UI Bugs',
        start: 'dyndatetime(y, m, d - 8, 14, 0)',
        end: 'dyndatetime(y, m, d - 8, 16, 0)',
      },
      {
        id: 92,
        resource: 3,
        title: 'DB Optimize',
        start: 'dyndatetime(y, m, d - 8, 9, 0)',
        end: 'dyndatetime(y, m, d - 8, 11, 0)',
      },
      {
        id: 93,
        resource: 4,
        title: 'Live Chat Support',
        start: 'dyndatetime(y, m, d - 8, 16, 0)',
        end: 'dyndatetime(y, m, d - 8, 18, 0)',
      },
      //</hide-comment>
    ],
    [],
  );

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Adam Johnson',
        color: '#328e39',
        role: 'developer',
        inOffice: true,
        vacation: false,
        available: false,
        cssClass: 'mds-variable-res-col-large',
      },
      {
        id: 2,
        name: 'Hannah Williams',
        color: '#00aabb',
        role: 'designer',
        inOffice: false,
        vacation: true,
        available: true,
        cssClass: 'mds-variable-res-col-medium',
      },
      {
        id: 3,
        name: 'Charlie Smith',
        color: '#28B372.',
        role: 'developer',
        inOffice: true,
        vacation: false,
        available: true,
        cssClass: 'mds-variable-res-col-medium',
      },
      {
        id: 4,
        name: 'Ethan Roberts',
        color: '#ff5733',
        role: 'support',
        inOffice: false,
        vacation: false,
        available: true,
        cssClass: 'mds-variable-res-col-small',
      },
    ],
    [],
  );

  const renderCustomResource = useCallback(
    (resource: MbscResource) => {
      const resourceIcons = [];

      resourceIcons.push(icons[resource.role]);

      if (resource.inOffice) {
        resourceIcons.push(icons.office);
      }
      if (resource.vacation) {
        resourceIcons.push(icons.vacation);
      }
      if (!resource.available) {
        resourceIcons.push(icons.unavailable);
      }

      return (
        <>
          <div className="mds-variable-res-col-name mbsc-flex mbsc-align-items-center mbsc-justify-content-center">{resource.name}</div>
          <div className="mds-variable-res-col-icons">
            {resourceIcons.map((icon) => (
              <div
                key={icon.title}
                className="mds-variable-res-col-icon"
                dangerouslySetInnerHTML={{ __html: icon.svg }}
                title={icon.title}
              />
            ))}
          </div>
        </>
      );
    },
    [icons],
  );

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      schedule: { type: 'week', startDay: 1, endDay: 5, startTime: '08:00', endTime: '19:00', allDay: false },
    }),
    [],
  );

  return (
    <Eventcalendar
      // drag
      data={myEvents}
      groupBy="date"
      resources={myResources}
      view={myView}
      renderResource={renderCustomResource}
    />
  );
};
export default App;
