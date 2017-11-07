export default {
  timerID: 0,
  timers: [],
  add(fn) {
    this.timers.push(fn)
  },
  start () {
    if (this.timerID) return;
    this.runNext();
  },
  runNext () {
    if (this.timers.length > 0) {
      for (let i = 0; i < this.timers.length; i++) {
        if (this.timers[i]() === false) {
          this.timers.splice(i, 1);
          i--;
        }
      }
      this.timerID = setTimeout(this.runNext.bind(this), 0);
    }
  },
  stop () {
    clearTimeout(this.timerID);
    this.timerID = 0;
  }
}