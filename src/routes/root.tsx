import { Page } from '@mobiscroll/react';

export default function Root() {
  return (
    <>
      <Page>
        <div className="mbsc-padding">
          <h1>Mobiscroll REACT-TS Demos</h1>

          <h2>Event Calendar</h2>

          <h3>Agenda</h3>

          <ul>
            <h4>Setting up the agenda</h4>

            <li>
              <a className="app-link" href="/agenda/daily-agenda-with-week-calendar">
                Compact daily schedule
              </a>
            </li>
            <li>
              <a className="app-link" href="/agenda/basic-usage">
                How to initialize
              </a>
            </li>
            <li>
              <a className="app-link" href="/agenda/daily-weekly-monthly-annual-agenda">
                Customize the range
              </a>
            </li>
            <li>
              <a className="app-link" href="/agenda/printing-the-view">
                Print mode
              </a>
            </li>

            <h4>Displaying events</h4>

            <li>
              <a className="app-link" href="/agenda/synchronized-views">
                Synchronized views
              </a>
            </li>
            <li>
              <a className="app-link" href="/agenda/custom-event-sort">
                Custom event order
              </a>
            </li>
            <li>
              <a className="app-link" href="/agenda/setting-the-timezone">
                Timezones
              </a>
            </li>
            <li>
              <a className="app-link" href="/agenda/searching-events-in-popup">
                Event search with popup
              </a>
            </li>

            <h4>Templating</h4>

            <li>
              <a className="app-link" href="/agenda/event-content-customization">
                Content customization
              </a>
            </li>
            <li>
              <a className="app-link" href="/agenda/full-event-customization">
                Full event customization
              </a>
            </li>
            <li>
              <a className="app-link" href="/agenda/customizing-header">
                Customizing the header
              </a>
            </li>
            <li>
              <a className="app-link" href="/agenda/custom-event-tooltip">
                Custom event tooltip
              </a>
            </li>
            <li>
              <a className="app-link" href="/agenda/empty-state">
                Empty state
              </a>
            </li>

            <h4>Resources</h4>

            <li>
              <a className="app-link" href="/agenda/resource-filtering-in-header">
                In-header filtering
              </a>
            </li>

            <h4>Event data structure</h4>

            <li>
              <a className="app-link" href="/agenda/event-data-structure">
                Event properties
              </a>
            </li>
            <li>
              <a className="app-link" href="/agenda/date-object-ISO-8601-moment">
                Supported date formats
              </a>
            </li>
            <li>
              <a className="app-link" href="/agenda/recurring-events">
                Recurrence rules
              </a>
            </li>

            <h4>Loading events & data sources</h4>

            <li>
              <a className="app-link" href="/agenda/load-inline-data">
                Loading inline data
              </a>
            </li>
            <li>
              <a className="app-link" href="/agenda/load-events-from-remote-api">
                Events from a remote API
              </a>
            </li>
            <li>
              <a className="app-link" href="/agenda/load-events-on-demand">
                Loading events on demand
              </a>
            </li>

            <h4>Third party calendar integrations</h4>

            <li>
              <a className="app-link" href="/agenda/sync-events-google-calendar">
                Sync events to google calendar
              </a>
            </li>
            <li>
              <a className="app-link" href="/agenda/sync-events-outlook-calendar">
                Sync events to outlook calendar
              </a>
            </li>
            <li>
              <a className="app-link" href="/agenda/load-events-from-google-calendar">
                Load events from public google calendar
              </a>
            </li>

            <h4>CRUD operations</h4>

            <li>
              <a className="app-link" href="/agenda/event-bulk-actions-edit-delete-update">
                Multiple select & bulk operations
              </a>
            </li>

            <h4>Customizing the look & feel</h4>

            <li>
              <a className="app-link" href="/agenda/themes-ios-material-windows">
                Theming capabilities
              </a>
            </li>

            <h4>Localization & tapping into the lifecycle</h4>

            <li>
              <a className="app-link" href="/agenda/event-hooks">
                Lifecycle events
              </a>
            </li>
            <li>
              <a className="app-link" href="/agenda/gregorian-jalali-hijri">
                Calendar systems{' '}
              </a>
            </li>
            <li>
              <a className="app-link" href="/agenda/localization">
                Localization
              </a>
            </li>
          </ul>

          <h3>Event Calendar</h3>

          <ul>
            <h4>Setting up the calendar</h4>

            <li>
              <a className="app-link" href="/eventcalendar/mobile-month-view">
                Mobile month view
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/desktop-month-view">
                Desktop month view
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/responsive-month-view">
                Responsive
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/printing-the-view">
                Print mode
              </a>
            </li>

            <h4>Displaying events</h4>

            <li>
              <a className="app-link" href="/eventcalendar/event-labels">
                Events as labels
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/event-popover">
                Events in popover
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/custom-event-sort">
                Custom event order
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/setting-the-timezone">
                Timezones
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/multiple-timezone-support">
                Switching timezones
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/searching-events-in-popup">
                Event search with popup
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/searching-events-in-sidebar">
                Event search with sidebar
              </a>
            </li>

            <h4>Configuring the view</h4>

            <li>
              <a className="app-link" href="/eventcalendar/month-week-view">
                Month or week view
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/quarter-year-view">
                Multi-month or year view
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/show-more-all-labels">
                Displaying labels
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/colored-cell-background">
                Colored backgrounds
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/switching-day-week-month-view">
                Switching views
              </a>
            </li>

            <h4>Templating</h4>

            <li>
              <a className="app-link" href="/eventcalendar/customize-label-look-and-feel">
                Custom event labels
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/customize-event-popover">
                Custom events in popover
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/customizing-header">
                Customizing the header
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/custom-event-tooltip">
                Custom event tooltip
              </a>
            </li>

            <h4>Drag & drop</h4>

            <li>
              <a className="app-link" href="/eventcalendar/move-resize-drag-drop-to-create-events">
                Move, resize & create
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/conditional-move-resize">
                Conditional move & resize per event or globally
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/drag-drop-between-calendar-instances">
                Drag & drop between calendars
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/blocked-days-ranges">
                Manage blocked out dates
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/prevent-double-booking-events">
                Prevent event overlap
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/external-drag-drop-schedule-unschedule">
                External drag and drop
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/external-event-presets">
                External d&d presets
              </a>
            </li>

            <h4>Resources</h4>

            <li>
              <a className="app-link" href="/eventcalendar/resource-filtering-in-header">
                In-header filtering
              </a>
            </li>

            <h4>Event data structure</h4>

            <li>
              <a className="app-link" href="/eventcalendar/event-data-structure">
                Event properties
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/date-object-ISO-8601-moment">
                Supported date formats
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/recurring-events">
                Recurrence rules
              </a>
            </li>

            <h4>Loading events & data sources</h4>

            <li>
              <a className="app-link" href="/eventcalendar/load-inline-data">
                Loading inline data
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/load-events-from-remote-api">
                Events from remote API{' '}
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/load-events-on-demand">
                Loading events on demand
              </a>
            </li>

            <h4>Third party calendar integrations</h4>

            <li>
              <a className="app-link" href="/eventcalendar/sync-events-google-calendar">
                Sync events to google calendar
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/sync-events-outlook-calendar">
                Sync events to outlook calendar
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/load-events-from-google-calendar">
                Load events from public google calendar
              </a>
            </li>

            <h4>CRUD operations</h4>

            <li>
              <a className="app-link" href="/eventcalendar/create-read-update-delete-CRUD">
                Add/edit/delete events
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/recurring-event-add-edit-dialog">
                Recurring event editor
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/disallow-past-event-creation">
                Disable past event creation
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/event-bulk-actions-edit-delete-update">
                Multiple select & bulk operations
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/cut-copy-paste-events-between-calendars">
                Move events between calendars
              </a>
            </li>

            <h4>Customizing the look & feel</h4>

            <li>
              <a className="app-link" href="/eventcalendar/themes-ios-material-windows">
                Theming capabilities
              </a>
            </li>

            <h4>Localization & tapping into the lifecycle</h4>

            <li>
              <a className="app-link" href="/eventcalendar/localization">
                Localization
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/gregorian-jalali-hijri">
                Calendar systems{' '}
              </a>
            </li>
            <li>
              <a className="app-link" href="/eventcalendar/event-hooks">
                Lifecycle events
              </a>
            </li>
          </ul>

          <h3>Scheduler</h3>

          <ul>
            <h4>Setting up the scheduler</h4>

            <li>
              <a className="app-link" href="/scheduler/mobile-day-view">
                Mobile daily schedule
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/desktop-day-view">
                Desktop daily schedule
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/mobile-week-view">
                Mobile weekly schedule
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/desktop-week-view">
                Desktop weekly schedule
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/responsive-day-week-schedule">
                Responsive behavior
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/printing-the-view">
                Print mode
              </a>
            </li>

            <h4>Common use cases</h4>

            <li>
              <a className="app-link" href="/scheduler/work-week-hours">
                Work calendar
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/doctors-appointment">
                Doctor's appointment
              </a>
            </li>

            <h4>Configuring the view</h4>

            <li>
              <a className="app-link" href="/scheduler/custom-range-view">
                Custom range view
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/control-number-of-concurrently-shown-events">
                Set event stack size
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/display-multiple-days-weeks">
                Customize view range
              </a>
            </li>

            <li>
              <a className="app-link" href="/scheduler/disable-all-day-events">
                Show/hide all-day events
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/colored-cell-background">
                Colored backgrounds
              </a>
            </li>

            <li>
              <a className="app-link" href="/scheduler/switching-calendar-scheduler-agenda">
                Switching views
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/show-hide-hours-days">
                Visible hours and days
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/setting-the-timezone">
                Timezones
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/multiple-timezone-support">
                Switching timezones
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/show-multiple-timezones">
                Display time for multiple timezones
              </a>
            </li>

            <li>
              <a className="app-link" href="/scheduler/searching-events-in-sidebar">
                Event search with sidebar
              </a>
            </li>

            <h4>Templating</h4>

            <li>
              <a className="app-link" href="/scheduler/custom-event-tooltip">
                Custom event tooltip
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/customizing-events">
                Event customization
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/date-header-template">
                Date header template
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/custom-resource-header-template">
                Resource template
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/customizing-header">
                Customizing the header
              </a>
            </li>

            <h4>Drag & drop</h4>

            <li>
              <a className="app-link" href="/scheduler/move-resize-drag-drop-to-create-events">
                Move, resize & create
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/conditional-move-resize">
                Conditional move & resize per event, resource or globally
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/drag-drop-between-calendar-instances">
                Drag & drop between schedulers
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/time-off-blocked-ranges">
                Blocked out times
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/prevent-double-booking-events">
                Prevent event overlap
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/external-drag-drop-schedule-unschedule">
                External drag and drop
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/external-event-presets">
                External d&d presets
              </a>
            </li>

            <h4>Resources</h4>

            <li>
              <a className="app-link" href="/scheduler/resource-view">
                Multiple resources
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/group-by-resource-by-day">
                Resource grouping
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/shared-events-across-resources">
                Shared events
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/dynamic-add-remove-resources-filter">
                Show/hide resources
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/resource-data-structure">
                Resource properties
              </a>
            </li>

            <h4>Event data structure</h4>

            <li>
              <a className="app-link" href="/scheduler/event-data-structure">
                Event properties
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/date-object-ISO-8601-moment">
                Supported date formats
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/recurring-events">
                Recurrence rules
              </a>
            </li>

            <h4>Loading events & data sources</h4>

            <li>
              <a className="app-link" href="/scheduler/load-inline-data">
                Loading inline data
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/load-events-from-remote-api">
                Events from remote API{' '}
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/load-events-on-demand">
                Loading events on demand
              </a>
            </li>

            <h4>Third party calendar integrations</h4>

            <li>
              <a className="app-link" href="/scheduler/sync-events-google-calendar">
                Sync events to google calendar
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/sync-events-outlook-calendar">
                Sync events to outlook calendar
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/load-events-from-google-calendar">
                Load events from public google calendar
              </a>
            </li>

            <h4>CRUD operations</h4>

            <li>
              <a className="app-link" href="/scheduler/create-read-update-delete-CRUD">
                Add/edit/delete events
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/event-bulk-actions-edit-delete-update">
                Multiple select & bulk operations
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/recurring-event-add-edit-dialog">
                Recurring event editor
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/disallow-past-event-creation">
                Disable past event creation
              </a>
            </li>

            <h4>Customizing the look & feel</h4>

            <li>
              <a className="app-link" href="/scheduler/colors-invalids-css-class">
                CSS class for colors and invalids
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/resource-filtering-in-header">
                Custom component in header
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/themes-ios-material-windows">
                Theming capabilities
              </a>
            </li>

            <h4>Localization & tapping into the lifecycle</h4>

            <li>
              <a className="app-link" href="/scheduler/gregorian-jalali-hijri">
                Calendar systems{' '}
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/event-hooks">
                Lifecycle events
              </a>
            </li>
            <li>
              <a className="app-link" href="/scheduler/localization">
                Localization
              </a>
            </li>
          </ul>

          <h3>Timeline</h3>

          <ul>
            <h4>Setting up the timeline</h4>

            <li>
              <a className="app-link" href="/timeline/month-view">
                Monthly timeline
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/timeline-time-grid">
                Timeline vs time grid
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/printing-the-view">
                Print mode
              </a>
            </li>

            <h4>Common use cases</h4>

            <li>
              <a className="app-link" href="/timeline/employee-shifts">
                Employee shift planning
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/work-order-scheduling">
                Work order scheduling
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/timezone-meeting-planner">
                Meeting planner across timezones
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/restaurant-shift-management">
                Restaurant shift management
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/meal-planner">
                Weekly meal planner
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/dynamically-color-and-invalidate">
                Dynamically color & invalidate
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/multi-classroom-timetable">
                Multiple classroom scheduling
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/monthly-timetable-vertical-days-horizontal-times">
                Single resource timetable
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/compare-resources-fixed-at-top">
                Compare resources
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/assign-unassign-work-orders-fixed-top-row">
                Assign/unassign work orders
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/flight-scheduling-two-synchronized-timelines">
                Flight scheduling with two timelines
              </a>
            </li>

            <h4>Configuring the view</h4>

            <li>
              <a className="app-link" href="/timeline/daily-weekly-monthly-yearly-timeline">
                Configure the timeline
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/multiple-days-weeks-months-quarters-years-variable-resolution">
                Configure the page, size, resolution
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/control-number-of-concurrently-shown-events">
                Set event stack size
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/custom-range-view">
                View with custom range picker
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/timeline-resource-height">
                Equal row height
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/event-listing">
                Daily event summary
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/switching-day-week-work-week-timeline">
                Day, week, work week
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/setting-the-timezone">
                Timezones
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/multiple-timezone-support">
                Switching timezones
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/searching-events-in-sidebar">
                Event search with sidebar
              </a>
            </li>

            <h4>Templating</h4>

            <li>
              <a className="app-link" href="/timeline/timeline-custom-event-rendering">
                Timeline event template
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/hour-day-week-month-quarter-year-header-footer-template">
                Hour, day, week, month, year header and footer template
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/shift-template">
                Time slot template
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/resource-header-template">
                Resource header template
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/custom-event-tooltip">
                Custom event tooltip
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/setting-row-height">
                Controlling the row height
              </a>
            </li>

            <h4>Drag & drop</h4>

            <li>
              <a className="app-link" href="/timeline/move-resize-drag-drop-to-create-events">
                Move, resize & create
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/conditional-move-resize">
                Conditional move & resize per event, resource or globally
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/drag-drop-between-calendar-instances">
                Drag & drop between timelines
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/prevent-double-booking-events">
                Prevent event overlap
              </a>
            </li>

            <h4>Resources</h4>

            <li>
              <a className="app-link" href="/timeline/timeline-resource-details-side-panel-footer">
                Resource grid
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/resource-grouping-hierarchy">
                Resource grouping & hierarchy
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/resource-data-structure">
                Resource properties
              </a>
            </li>

            <h4>Event data structure</h4>

            <li>
              <a className="app-link" href="/timeline/event-data-structure">
                Event properties
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/connecting-linking-events-arrows">
                Event connections
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/date-object-ISO-8601-moment">
                Supported date formats
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/recurring-events">
                Recurrence rules
              </a>
            </li>

            <h4>Loading events & data sources</h4>

            <li>
              <a className="app-link" href="/timeline/load-inline-data">
                Loading inline data
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/load-events-from-remote-api">
                Events from remote API{' '}
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/load-events-on-demand">
                Loading events on demand
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/load-resources-on-demand">
                Loading resources on demand
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/loading-big-data-sets">
                Working with large data sets
              </a>
            </li>

            <h4>Third party calendar integrations</h4>

            <li>
              <a className="app-link" href="/timeline/sync-events-google-calendar">
                Sync events to google calendar
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/sync-events-outlook-calendar">
                Sync events to outlook calendar
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/load-events-from-google-calendar">
                Load events from public google calendar
              </a>
            </li>

            <h4>CRUD operations</h4>

            <li>
              <a className="app-link" href="/timeline/create-read-update-delete-CRUD">
                Add/edit/delete events
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/disallow-past-event-creation">
                Disable past event creation
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/event-bulk-actions-edit-delete-update">
                Multiple select & bulk operations
              </a>
            </li>

            <h4>Customizing the look & feel</h4>

            <li>
              <a className="app-link" href="/timeline/colors-invalids-css-class">
                CSS class for colors and invalids
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/themes-ios-material-windows">
                Theming capabilities
              </a>
            </li>

            <h4>Localization & tapping into the lifecycle</h4>

            <li>
              <a className="app-link" href="/timeline/gregorian-jalali-hijri">
                Calendar systems{' '}
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/event-hooks">
                Lifecycle events
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/localization">
                Localization
              </a>
            </li>
            <li>
              <a className="app-link" href="/timeline/rtl-right-to-left">
                RTL mode
              </a>
            </li>
          </ul>

          <h2>Date & time pickers</h2>

          <h3>Calendar</h3>

          <ul>
            <h4>Using the picker</h4>

            <li>
              <a className="app-link" href="/calendar/mobile-desktop-usage">
                Mobile & Desktop usage
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/usage-on-input-or-inline">
                Initializing the picker
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/responsive">
                Responsive behavior
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/mobile-desktop-display">
                Understanding display modes
              </a>
            </li>

            <h4>Common use cases</h4>

            <li>
              <a className="app-link" href="/calendar/appointment-booking">
                Appointment booking
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/activity-calendar">
                Activity calendar
              </a>
            </li>

            <h4>Configuring the calendar</h4>

            <li>
              <a className="app-link" href="/calendar/date-picker">
                Date selection
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/date-time-picker">
                Date & Time picker
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/week-view">
                Variable week view
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/multiple-months">
                Multi month view
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/quarter-year-view">
                Quarter or year view
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/week-to-month">
                Switching views
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/dots-colors-labels">
                Marked, colored & labels
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/month-change-direction-week-numbers-outer-days">
                Customizing the view
              </a>
            </li>

            <h4>Configuring value selection</h4>

            <li>
              <a className="app-link" href="/calendar/single-select">
                Single value selection
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/multiple-select">
                Multiple date selection
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/week-select">
                Week selection
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/range-select">
                Start-end selection
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/date-object-ISO-8601-moment">
                Date types
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/formatting-return-values">
                Formatting values
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/setting-values-defaults">
                Setting values
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/setting-the-picker-timezone">
                Timezones
              </a>
            </li>

            <h4>Validation & restricting selection</h4>

            <li>
              <a className="app-link" href="/calendar/min-max-restrictions">
                Min & max values
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/disabled-invalid-values">
                Disabled values
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/recurring-values">
                Recurring values
              </a>
            </li>

            <h4>Customizing the look & feel</h4>

            <li>
              <a className="app-link" href="/calendar/themes-ios-material-windows">
                Theming capabilities
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/customizing-header">
                Customizing the header
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/customize-marked-day-shapes">
                Marked day classes
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/half-day-styling">
                Half days
              </a>
            </li>

            <h4>Localization & tapping into the lifecycle</h4>

            <li>
              <a className="app-link" href="/calendar/event-hooks">
                Lifecycle events
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/gregorian-jalali-hijri">
                Calendar systems{' '}
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/localization">
                Localization
              </a>
            </li>
            <li>
              <a className="app-link" href="/calendar/rtl-right-to-left">
                RTL mode
              </a>
            </li>
          </ul>

          <h3>Date & Time</h3>

          <ul>
            <h4>Using the picker</h4>

            <li>
              <a className="app-link" href="/datetime/mobile-desktop-usage">
                Mobile & Desktop usage
              </a>
            </li>
            <li>
              <a className="app-link" href="/datetime/usage-on-input-or-inline">
                Initializing the picker
              </a>
            </li>
            <li>
              <a className="app-link" href="/datetime/responsive">
                Responsive behavior
              </a>
            </li>
            <li>
              <a className="app-link" href="/datetime/mobile-desktop-display">
                Understanding display modes
              </a>
            </li>

            <h4>Configuring the wheels</h4>

            <li>
              <a className="app-link" href="/datetime/date-picker">
                Date selection
              </a>
            </li>
            <li>
              <a className="app-link" href="/datetime/time-picker">
                Time selection
              </a>
            </li>
            <li>
              <a className="app-link" href="/datetime/date-time-picker">
                Date & time selection
              </a>
            </li>
            <li>
              <a className="app-link" href="/datetime/time-value-steps">
                Setting time select steps
              </a>
            </li>

            <h4>Configuring value selection</h4>

            <li>
              <a className="app-link" href="/datetime/single-select">
                Single value selection
              </a>
            </li>
            <li>
              <a className="app-link" href="/datetime/range-select">
                Start-end selection
              </a>
            </li>
            <li>
              <a className="app-link" href="/datetime/date-object-ISO-8601-moment">
                Date types
              </a>
            </li>
            <li>
              <a className="app-link" href="/datetime/formatting-return-values">
                Formatting values
              </a>
            </li>
            <li>
              <a className="app-link" href="/datetime/month-year-picker">
                Credit card expiration
              </a>
            </li>
            <li>
              <a className="app-link" href="/datetime/setting-values-defaults">
                Setting values
              </a>
            </li>
            <li>
              <a className="app-link" href="/datetime/setting-the-picker-timezone">
                Timezones
              </a>
            </li>

            <h4>Validation & restricting selection</h4>

            <li>
              <a className="app-link" href="/datetime/min-max-restrictions">
                Min & max values
              </a>
            </li>
            <li>
              <a className="app-link" href="/datetime/disabled-invalid-values">
                Disabled values
              </a>
            </li>
            <li>
              <a className="app-link" href="/datetime/recurring-values">
                Recurring values
              </a>
            </li>

            <h4>Customizing the look & feel</h4>

            <li>
              <a className="app-link" href="/datetime/themes-ios-material-windows">
                Theming capabilities
              </a>
            </li>

            <h4>Localization & tapping into the lifecycle</h4>

            <li>
              <a className="app-link" href="/datetime/event-hooks">
                Lifecycle events
              </a>
            </li>
            <li>
              <a className="app-link" href="/datetime/gregorian-jalali-hijri">
                Calendar systems{' '}
              </a>
            </li>
            <li>
              <a className="app-link" href="/datetime/localization">
                Localization
              </a>
            </li>
            <li>
              <a className="app-link" href="/datetime/rtl-right-to-left">
                RTL mode
              </a>
            </li>
          </ul>

          <h3>Range</h3>

          <ul>
            <h4>Using the picker</h4>

            <li>
              <a className="app-link" href="/range/mobile-desktop-usage">
                Mobile & Desktop usage
              </a>
            </li>
            <li>
              <a className="app-link" href="/range/usage-on-input-or-inline">
                Initializing the picker
              </a>
            </li>
            <li>
              <a className="app-link" href="/range/responsive">
                Responsive behavior
              </a>
            </li>
            <li>
              <a className="app-link" href="/range/calendar-scroller-dropdown">
                Understanding the controls
              </a>
            </li>
            <li>
              <a className="app-link" href="/range/mobile-desktop-display">
                Understanding display modes
              </a>
            </li>

            <h4>Common use cases</h4>

            <li>
              <a className="app-link" href="/range/date-filtering-with-predefined-ranges">
                Date filtering with presets
              </a>
            </li>
            <li>
              <a className="app-link" href="/range/flight-booking">
                Flight booking
              </a>
            </li>
            <li>
              <a className="app-link" href="/range/book-rental-months-ahead">
                Vacation property availability
              </a>
            </li>
            <li>
              <a className="app-link" href="/range/adding-event-start-end">
                New event creation
              </a>
            </li>

            <h4>Configuring the view</h4>

            <li>
              <a className="app-link" href="/range/date-range">
                Date range
              </a>
            </li>
            <li>
              <a className="app-link" href="/range/time-range">
                Time range
              </a>
            </li>
            <li>
              <a className="app-link" href="/range/date-time-range">
                Date & time range
              </a>
            </li>
            <li>
              <a className="app-link" href="/range/week-month-view-scrolling-direction">
                Customizing the calendar
              </a>
            </li>
            <li>
              <a className="app-link" href="/range/customizing-labels-selection">
                Customizing the range
              </a>
            </li>
            <li>
              <a className="app-link" href="/range/dots-colors-labels">
                Marked, colored & labels
              </a>
            </li>

            <h4>Configuring value selection</h4>

            <li>
              <a className="app-link" href="/range/presets">
                Presets
              </a>
            </li>
            <li>
              <a className="app-link" href="/range/date-object-ISO-8601-moment">
                Date types
              </a>
            </li>
            <li>
              <a className="app-link" href="/range/formatting-return-values">
                Formatting values
              </a>
            </li>
            <li>
              <a className="app-link" href="/range/setting-the-picker-timezone">
                Timezones
              </a>
            </li>

            <h4>Validation & restricting selection</h4>

            <li>
              <a className="app-link" href="/range/min-max-length">
                Setting the allowed range length
              </a>
            </li>
            <li>
              <a className="app-link" href="/range/min-max-restrictions">
                Min & max values
              </a>
            </li>
            <li>
              <a className="app-link" href="/range/disabled-invalid-values">
                Disabled values
              </a>
            </li>
            <li>
              <a className="app-link" href="/range/recurring-values">
                Recurring values
              </a>
            </li>

            <h4>Customizing the look & feel</h4>

            <li>
              <a className="app-link" href="/range/themes-ios-material-windows">
                Theming capabilities
              </a>
            </li>
            <li>
              <a className="app-link" href="/range/customize-marked-day-shapes">
                Marked day classes
              </a>
            </li>
            <li>
              <a className="app-link" href="/range/half-day-styling">
                Half days
              </a>
            </li>

            <h4>Localization & tapping into the lifecycle</h4>

            <li>
              <a className="app-link" href="/range/event-hooks">
                Lifecycle events
              </a>
            </li>
            <li>
              <a className="app-link" href="/range/gregorian-jalali-hijri">
                Calendar systems{' '}
              </a>
            </li>
            <li>
              <a className="app-link" href="/range/localization">
                Localization
              </a>
            </li>
            <li>
              <a className="app-link" href="/range/rtl-right-to-left">
                RTL mode
              </a>
            </li>
          </ul>

          <h2>Pickers & Dropdowns</h2>

          <h3>Select</h3>

          <ul>
            <h4>Using the picker</h4>

            <li>
              <a className="app-link" href="/select/mobile-desktop-usage">
                Mobile & Desktop usage
              </a>
            </li>
            <li>
              <a className="app-link" href="/select/responsive">
                Responsive behavior
              </a>
            </li>
            <li>
              <a className="app-link" href="/select/mobile-desktop-display">
                Understanding display modes
              </a>
            </li>
            <li>
              <a className="app-link" href="/select/data-sources">
                Populating the picker
              </a>
            </li>

            <h4>Templating</h4>

            <li>
              <a className="app-link" href="/select/item-templating">
                Templating
              </a>
            </li>
            <li>
              <a className="app-link" href="/select/country-picker">
                Country Dropdown
              </a>
            </li>
            <li>
              <a className="app-link" href="/select/image-text">
                Image & text
              </a>
            </li>
            <li>
              <a className="app-link" href="/select/multiple-lines">
                Multiline select
              </a>
            </li>

            <h4>Configuring value selection</h4>

            <li>
              <a className="app-link" href="/select/single-select">
                Single select
              </a>
            </li>
            <li>
              <a className="app-link" href="/select/multiple-select">
                Multiple select
              </a>
            </li>
            <li>
              <a className="app-link" href="/select/group-options">
                Group options
              </a>
            </li>
            <li>
              <a className="app-link" href="/select/filtering-values">
                Filtering
              </a>
            </li>
            <li>
              <a className="app-link" href="/select/linked-hierarchical-pickers">
                Multi level hierarchy
              </a>
            </li>
            <li>
              <a className="app-link" href="/select/setting-values-defaults">
                Setting values
              </a>
            </li>

            <h4>Validation & restricting selection</h4>

            <li>
              <a className="app-link" href="/select/disabled-invalid-values">
                Disabled values
              </a>
            </li>

            <h4>Customizing the look & feel</h4>

            <li>
              <a className="app-link" href="/select/themes-ios-material-windows">
                Theming capabilities
              </a>
            </li>

            <h4>Localization & tapping into the lifecycle</h4>

            <li>
              <a className="app-link" href="/select/event-hooks">
                Event hooks
              </a>
            </li>
            <li>
              <a className="app-link" href="/select/localization">
                Localization{' '}
              </a>
            </li>
            <li>
              <a className="app-link" href="/select/rtl-right-to-left">
                RTL support
              </a>
            </li>
          </ul>

          <h2>Form components</h2>

          <h3>Forms</h3>

          <ul>
            <h4>Building forms</h4>

            <li>
              <a className="app-link" href="/forms/mobile">
                Mobile form
              </a>
            </li>
            <li>
              <a className="app-link" href="/forms/desktop">
                Inline desktop form
              </a>
            </li>
            <li>
              <a className="app-link" href="/forms/responsive">
                Responsive form
              </a>
            </li>
            <li>
              <a className="app-link" href="/forms/popup">
                Inside a modal
              </a>
            </li>

            <h4>Alerts & notifications</h4>

            <li>
              <a className="app-link" href="/forms/alert-confirm-prompt">
                Alert, confirm & prompt
              </a>
            </li>
            <li>
              <a className="app-link" href="/forms/notifications">
                Toast & snackbar
              </a>
            </li>

            <h4>Buttons</h4>

            <li>
              <a className="app-link" href="/forms/buttons">
                Buttons
              </a>
            </li>
            <li>
              <a className="app-link" href="/forms/segmented">
                Segmented
              </a>
            </li>
            <li>
              <a className="app-link" href="/forms/stepper">
                Stepper
              </a>
            </li>
            <li>
              <a className="app-link" href="/forms/button-segmented-stepper-colors">
                Colors
              </a>
            </li>

            <h4>Inputs & fields</h4>

            <li>
              <a className="app-link" href="/forms/inputs-text-areas-date-fields">
                Field types
              </a>
            </li>
            <li>
              <a className="app-link" href="/forms/input-label-types">
                Customize the input
              </a>
            </li>

            <h4>Toggle & radio</h4>

            <li>
              <a className="app-link" href="/forms/checkbox">
                Checkbox
              </a>
            </li>
            <li>
              <a className="app-link" href="/forms/switch">
                Switch
              </a>
            </li>
            <li>
              <a className="app-link" href="/forms/radio-button">
                Radio buttons
              </a>
            </li>

            <h4>Customizing the look & feel</h4>

            <li>
              <a className="app-link" href="/forms/themes-ios-material-windows">
                Theming capabilities
              </a>
            </li>
          </ul>
        </div>
      </Page>
    </>
  );
}
