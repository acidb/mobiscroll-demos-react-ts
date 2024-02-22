function showAlert() {
  alert(
    'The calendar integration add-on is not available with the trial.' +
      ' It might be included with your license or as an add-on,' +
      " if that's the case, please run `npm install @mobiscroll/calendar-integration` in the project root.",
  );
}

const mockSync = {
  init() {
    setTimeout(showAlert);
  },
  signIn() {
    setTimeout(showAlert);
    return Promise.resolve();
  },
  signOut() {
    return Promise.resolve();
  },
  isSignedIn() {
    return false;
  },
  getCalendars(callback) {
    if (callback) {
      callback();
    }
    return Promise.resolve([]);
  },
  getEvents(calendarIds, start, end, callback) {
    if (callback) {
      callback();
    }
    return Promise.resolve([]);
  },
  addEvent(calendarId, event, callback) {
    if (callback) {
      callback(null);
    }
    return Promise.resolve(null);
  },
  updateEvent(calendarId, event, callback) {
    if (callback) {
      callback(null);
    }
    return Promise.resolve(null);
  },
  deleteEvent(calendarId, event, callback) {
    if (callback) {
      callback(null);
    }
    return Promise.resolve(null);
  },
};

export const googleCalendarSync = mockSync;
export const outlookCalendarSync = mockSync;
